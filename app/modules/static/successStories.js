app.controller('suceesstories', ['$scope', function (scope) {
    scope.success = [];
    scope.successes = [];
    scope.success = [{
        "GroomProfileID": "110716489", "BrideProfileID": "110716490",
        "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
    },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        }, {
            "GroomProfileID": "110716489", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        }
    ];
    scope.successes = [{
        "GroomProfileID": "1107164889", "BrideProfileID": "110716490",
        "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
    },
        {
            "GroomProfileID": "110716489455", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489dfff", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA REDDY", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489ffdsf", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489fdsfe", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "11071648934", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        },
        {
            "GroomProfileID": "110716489adadd", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        }, {
            "GroomProfileID": "110716489asd", "BrideProfileID": "110716490",
            "GroomNAME": "ANUHYA THALLAPA", "BrideName": "THALLAPA REDDY", "Marrigedate": "27/06/2016"
        }
    ];

    $(window).scroll(function () {
        debugger;
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            scope.success = $.merge(scope.success, scope.successes);
        }
    });
}]);