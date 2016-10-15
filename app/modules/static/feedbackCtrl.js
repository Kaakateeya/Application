app.controller('feedbackCtrl', ['$scope', function (scope) {
    scope.data = [];


    scope.optionhereabout = [
        { label: '--select--', title: '--select--', value: '0' },
        { label: 'Search Engine', title: 'Search Engine', value: '481' },
        { label: 'Newspaper', title: 'Newspaper', value: '482' },
        { label: 'Magzine', title: 'Magzine', value: '483' },
        { label: 'Friend', title: 'Friend', value: '484' },
        { label: 'Email', title: 'Email', value: '485' },
        { label: 'No Answer', title: 'No Answer', value: '486' }
    ];

scope.optionsxcvn = [
        { label: '--select--', title: '--select--', value: '0' },
        { label: 'Search Engine', title: 'Search Engine', value: '481' },
        { label: 'Newspaper', title: 'Newspaper', value: '482' },
        { label: 'Magzine', title: 'Magzine', value: '483' },
        { label: 'Friend', title: 'Friend', value: '484' },
        { label: 'Email', title: 'Email', value: '485' },
        { label: 'No Answer', title: 'No Answer', value: '486' }
    ];

}]);