app.factory('alert', function() {
    return {
        open: function(scope, msg, classname) {
            classname = classname || "success";
            toastr.options = {
              "closeButton": true,
              "debug": true,
              "newestOnTop": true,
              "progressBar": true,
              "positionClass": scope.postion || app.global.alertType,
              "preventDuplicates": false,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": 5000,
              "extendedTimeOut": 2000,
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut",
              "onclick":null
            }
            switch(classname){
                case 'success':
                toastr.success("<div class=Jumbotron><span id=helpBlock>A block of help text that breaks onto a new line and may extend beyond one line.</span></div>","done");
                break;
                case 'error':
                toastr.error(msg, 'Oops');
                break;
                case 'warning':
                toastr.warning(msg, 'Alert');
                break;
                case 'info':
                toastr.info(msg, 'Info');
                break;
                default:
                toastr.success(msg, 'Done');
                break;
            }
        }
    }
});