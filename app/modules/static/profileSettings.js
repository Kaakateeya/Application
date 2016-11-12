app.controller("profilesettings", ['$scope', '$mdDialog', function(scope, $mdDialog) {


var tabs = [
    { title: 'One', content: "Tabs will become paginated if there isn't enough room for them." },
    { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs." },
    { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element." },
    { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected." },
    { title: 'Five', content: "If you remove a tab, it will try to select a new one." },
    { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want." },
    { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab." },
    { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!" },
    { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs." },
    { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!" }
];

scope.tabs = tabs;
var alert;
scope.showAlert = showAlert;
scope.showDialog = showDialog;
scope.items = [1, 2, 3];
// Internal method
function showAlert() {
    alert = $mdDialog.alert({
        title: 'Attention',
        textContent: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
    });

    $mdDialog
        .show(alert)
        .finally(function() {
            alert = undefined;
        });
}

function showDialog($event) {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        template: '<md-dialog aria-label="List dialog">' +
            '  <md-dialog-content>' +
            '    <md-list>' +
            '      <md-list-item ng-repeat="item in items">' +
            '       <p>Number {{item}}</p>' +
            '      ' +
            '    </md-list-item></md-list>' +
            '  </md-dialog-content>' +
            '  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Close Dialog' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>',
        locals: {
            items: scope.items
        },
        controller: DialogController
    });

    function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    }
}

scope.user = {
    title: 'Developer',
    email: 'ipsum@lorem.com',
    firstName: '',
    lastName: '',
    company: 'Google',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: 'CA',
    biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
    postalCode: '94043'
};

scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
    return { abbrev: state };
});

}]);