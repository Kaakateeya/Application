var menuID = 'ltlMenu';
/* --- gratitude to Matthew Carroll - http://carroll.org.uk/ - http://carroll.org.uk/sandbox/suckerfish/bones2.html
  based on http://www.htmldog.com/articles/suckerfish/dropdowns/ --- */
function accessible_menus_ie() {
    var sfEls = document.getElementById(menuID).getElementsByTagName('LI');
    for (var i = 0; i < sfEls.length; i++) {
        sfEls[i].onmouseover = function () {
            this.className += (this.className.length > 0 ? ' ' : '') + 'sfhover';
            this.parentNode.className += (this.parentNode.className.length > 0 ? ' ' : '') + 'sfhover';
        }
        sfEls[i].onmouseout = function () {
            this.className = this.className.replace(new RegExp('( ?|^)sfhover\\b'), '');
            this.parentNode.className = this.parentNode.className.replace(new RegExp('( ?|^)sfhover\\b'), '');
        }
    }
}
function accessible_menus() {
    var ltlMenu = document.getElementById(menuID);
    ltlMenu.className = ltlMenu.className.replace(new RegExp('(^|\\s)jsoff(\\s|$)'), '');
    var mcEls = document.getElementById(menuID).getElementsByTagName('A');
    for (var i = 0; i < mcEls.length; i++) {
        mcEls[i].onfocus = function () {
            this.className = this.className ? this.className + ' sffocus' : 'sffocus'; //a:focus
            this.parentNode.className = this.parentNode.className ? this.parentNode.className + ' sffocusparent' : 'sffocusparent'; //li < a:focus
            this.parentNode.parentNode.className = this.parentNode.parentNode.className ? this.parentNode.parentNode.className + ' sffocusparent' : 'sffocusparent'; //ul < li < a:focus
            if (this.parentNode.parentNode.parentNode.nodeName == 'LI') { //li < ul < li < a:focus
                this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className ? this.parentNode.parentNode.parentNode.className + ' sffocusparent' : 'sffocusparent'; //li < ul < li < a:focus
                this.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.className ? this.parentNode.parentNode.parentNode.parentNode.className + ' sffocusparent' : 'sffocusparent'; //ul < li < ul < li < a:focus
                if (this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == 'LI') {  //li < ul < li < ul < li < a:focus
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.parentNode.className ? this.parentNode.parentNode.parentNode.parentNode.parentNode.className + ' sffocusparent' : 'sffocusparent'; //li < ul < li < ul < li < a:focus
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className ? this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className + ' sffocusparent' : 'sffocusparent'; //ul < li < ul < li < ul < li < a:focus
                }
            }
        }
        mcEls[i].onblur = function () {
            this.className = this.className.replace(new RegExp('(^|\\s)' + 'sffocus' + '(\\s|$)'), '');
            this.parentNode.className = this.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');
            this.parentNode.parentNode.className = this.parentNode.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');
            if (this.parentNode.parentNode.parentNode.nodeName == 'LI') {
                this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');
                this.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');
                if (this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == 'LI') {
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');
                    this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp('(^|\\s)' + 'sffocusparent' + '(\\s|$)'), '');

                }
            }
        }
    }
}

// only ie needs the sfHover script. all need the accessibility script...

// thanks Brothercake - Generic onload - GO1.1 - http://www.brothercake.com/site/resources/scripts/onload/
if (typeof window.addEventListener != 'undefined') { //.. gecko, safari, konqueror and standard
    window.addEventListener('load', accessible_menus, false);
}
else if (typeof document.addEventListener != 'undefined') { //.. opera
    document.addEventListener('load', accessible_menus, false);
}
else if (typeof window.attachEvent != 'undefined') {	//.. win/ie
    window.attachEvent('onload', accessible_menus_ie);
    window.attachEvent('onload', accessible_menus);
}
    //** remove this condition to degrade older browsers
else {	//.. mac/ie5 and anything else that gets this far
    if (typeof window.onload == 'function') { //if there's an existing onload function
        var existing = window.onload; //store it
        window.onload = function () { //add new onload handler
            existing(); //call existing onload function
            //call generic onload function
            accessible_menus_ie();
            accessible_menus();
        };
    } else {
        window.onload = function () { //setup onload function
            accessible_menus_ie();
            accessible_menus();
        };
    }
}