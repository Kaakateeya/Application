/* 
* Project: Bootstrap Notify = v3.1.3
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function (jquerynotify) {
	// Create the defaults once
	var defaults = {
			element: 'body',
			position: null,
			type: "info",
			allow_dismiss: true,
			newest_on_top: false,
			showProgressbar: false,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: 'class',
			template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
		};

	String.format = function() {
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
		}
		return str;
	};

	function Notify ( element, content, options ) {
		// Setup Content of Notify
		var content = {
			content: {
				message: typeof content == 'object' ? content.message : content,
				title: content.title ? content.title : '',
				icon: content.icon ? content.icon : '',
				url: content.url ? content.url : '#',
				target: content.target ? content.target : '-'
			}
		};

		options = jquerynotify.extend(true, {}, content, options);
		this.settings = jquerynotify.extend(true, {}, defaults, options);
		this._defaults = defaults;
		if (this.settings.content.target == "-") {
			this.settings.content.target = this.settings.url_target;
		}
		this.animations = {
			start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
			end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
		}

		if (typeof this.settings.offset == 'number') {
		    this.settings.offset = {
		    	x: this.settings.offset,
		    	y: this.settings.offset
		    };
		}

		this.init();
	};

	jquerynotify.extend(Notify.prototype, {
		init: function () {
			var self = this;

			this.buildNotify();
			if (this.settings.content.icon) {
				this.setIcon();
			}
			if (this.settings.content.url != "#") {
				this.styleURL();
			}
			this.placement();
			this.bind();

			this.notify = {
				jquerynotifyele: this.jquerynotifyele,
				update: function(command, update) {
					var commands = {};
					if (typeof command == "string") {					
						commands[command] = update;
					}else{
						commands = command;
					}
					for (var command in commands) {
						switch (command) {
							case "type":
								this.jquerynotifyele.removeClass('alert-' + self.settings.type);
								this.jquerynotifyele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
								self.settings.type = commands[command];
								this.jquerynotifyele.addClass('alert-' + commands[command]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[command]);
								break;
							case "icon":
								var jquerynotifyicon = this.jquerynotifyele.find('[data-notify="icon"]');
								if (self.settings.icon_type.toLowerCase() == 'class') {
									jquerynotifyicon.removeClass(self.settings.content.icon).addClass(commands[command]);
								}else{
									if (!jquerynotifyicon.is('img')) {
										jquerynotifyicon.find('img');
									}
									jquerynotifyicon.attr('src', commands[command]);
								}
								break;
							case "progress":
								var newDelay = self.settings.delay - (self.settings.delay * (commands[command] / 100));
								this.jquerynotifyele.data('notify-delay', newDelay);
								this.jquerynotifyele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[command]).css('width', commands[command] + '%');
								break;
							case "url":
								this.jquerynotifyele.find('[data-notify="url"]').attr('href', commands[command]);
								break;
							case "target":
								this.jquerynotifyele.find('[data-notify="url"]').attr('target', commands[command]);
								break;
							default:
								this.jquerynotifyele.find('[data-notify="' + command +'"]').html(commands[command]);
						};
					}
					var posX = this.jquerynotifyele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
					self.reposition(posX);
				},
				close: function() {
					self.close();
				}
			};
		},
		buildNotify: function () {
			var content = this.settings.content;
			this.jquerynotifyele = jquerynotify(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
			this.jquerynotifyele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);		
			if (!this.settings.allow_dismiss) {
				this.jquerynotifyele.find('[data-notify="dismiss"]').css('display', 'none');
			}
			if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
				this.jquerynotifyele.find('[data-notify="progressbar"]').remove();
			}
		},
		setIcon: function() {
			if (this.settings.icon_type.toLowerCase() == 'class') {
				this.jquerynotifyele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
			}else{
				if (this.jquerynotifyele.find('[data-notify="icon"]').is('img')) {
					this.jquerynotifyele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
				}else{
					this.jquerynotifyele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />');
				}	
			}
		},
		styleURL: function() {
			this.jquerynotifyele.find('[data-notify="url"]').css({
				backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
				height: '100%',
				left: '0px',
				position: 'absolute',
				top: '0px',
				width: '100%',
				zIndex: this.settings.z_index + 1
			});
			this.jquerynotifyele.find('[data-notify="dismiss"]').css({
				position: 'absolute',
				right: '10px',
				top: '5px',
				zIndex: this.settings.z_index + 2
			});
		},
		placement: function() {
			var self = this,
				offsetAmt = this.settings.offset.y,
				css = {
					display: 'inline-block',
					margin: '0px auto',
					position: this.settings.position ?  this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
					transition: 'all .5s ease-in-out',
					zIndex: this.settings.z_index
				},
				hasAnimation = false,
				settings = this.settings;

			jquerynotify('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
				return offsetAmt = Math.max(offsetAmt, parseInt(jquerynotify(this).css(settings.placement.from)) +  parseInt(jquerynotify(this).outerHeight()) +  parseInt(settings.spacing));
			});
			if (this.settings.newest_on_top == true) {
				offsetAmt = this.settings.offset.y;
			}
			css[this.settings.placement.from] = offsetAmt+'px';

			switch (this.settings.placement.align) {
				case "left":
				case "right":
					css[this.settings.placement.align] = this.settings.offset.x+'px';
					break;
				case "center":
					css.left = 0;
					css.right = 0;
					break;
			}
			this.jquerynotifyele.css(css).addClass(this.settings.animate.enter);
			jquerynotify.each(Array('webkit', 'moz', 'o', 'ms', ''), function(index, prefix) {
				self.jquerynotifyele[0].style[prefix+'AnimationIterationCount'] = 1;
			});

			jquerynotify(this.settings.element).append(this.jquerynotifyele);

			if (this.settings.newest_on_top == true) {
				offsetAmt = (parseInt(offsetAmt)+parseInt(this.settings.spacing)) + this.jquerynotifyele.outerHeight();
				this.reposition(offsetAmt);
			}
			
			if (jquerynotify.isFunction(self.settings.onShow)) {
				self.settings.onShow.call(this.jquerynotifyele);
			}

			this.jquerynotifyele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				if (jquerynotify.isFunction(self.settings.onShown)) {
					self.settings.onShown.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					if (jquerynotify.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				}
			}, 600);
		},
		bind: function() {
			var self = this;

			this.jquerynotifyele.find('[data-notify="dismiss"]').on('click', function() {		
				self.close();
			})

			this.jquerynotifyele.mouseover(function(e) {
				jquerynotify(this).data('data-hover', "true");
			}).mouseout(function(e) {
				jquerynotify(this).data('data-hover', "false");
			});
			this.jquerynotifyele.data('data-hover', "false");

			if (this.settings.delay > 0) {
				self.jquerynotifyele.data('notify-delay', self.settings.delay);
				var timer = setInterval(function() {
					var delay = parseInt(self.jquerynotifyele.data('notify-delay')) - self.settings.timer;
					if ((self.jquerynotifyele.data('data-hover') === 'false' && self.settings.mouse_over == "pause") || self.settings.mouse_over != "pause") {
						var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
						self.jquerynotifyele.data('notify-delay', delay);
						self.jquerynotifyele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
					}
					if (delay <= -(self.settings.timer)) {
						clearInterval(timer);
						self.close();
					}
				}, self.settings.timer);
			}
		},
		close: function() {
			var self = this,
				jquerynotifysuccessors = null,
				posX = parseInt(this.jquerynotifyele.css(this.settings.placement.from)),
				hasAnimation = false;

			this.jquerynotifyele.data('closing', 'true').addClass(this.settings.animate.exit);
			self.reposition(posX);			
			
			if (jquerynotify.isFunction(self.settings.onClose)) {
				self.settings.onClose.call(this.jquerynotifyele);
			}

			this.jquerynotifyele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				jquerynotify(this).remove();
				if (jquerynotify.isFunction(self.settings.onClosed)) {
					self.settings.onClosed.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					self.jquerynotifyele.remove();
					if (self.settings.onClosed) {
						self.settings.onClosed(self.jquerynotifyele);
					}
				}
			}, 600);
		},
		reposition: function(posX) {
			var self = this,
				notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
				jquerynotifyelements = this.jquerynotifyele.nextAll(notifies);
			if (this.settings.newest_on_top == true) {
				jquerynotifyelements = this.jquerynotifyele.prevAll(notifies);
			}
			jquerynotifyelements.each(function() {
				jquerynotify(this).css(self.settings.placement.from, posX);
				posX = (parseInt(posX)+parseInt(self.settings.spacing)) + jquerynotify(this).outerHeight();
			});
		}
	});

	jquerynotify.notify = function ( content, options ) {
		var plugin = new Notify( this, content, options );
		return plugin.notify;
	};
	jquerynotify.notifyDefaults = function( options ) {
		defaults = jquerynotify.extend(true, {}, defaults, options);
		return defaults;
	};
	jquerynotify.notifyClose = function( command ) {
		if (typeof command === "undefined" || command == "all") {
			jquerynotify('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
		}else{
			jquerynotify('[data-notify-position="'+command+'"]').find('[data-notify="dismiss"]').trigger('click');
		}
	};

}));