app.controller("ourbranches", ["$scope", "ourBranchService", "helperservice", function(scope, ourBranchService, helperservice) {
    scope.region = 'region';
    scope.BranchArr = [];
    scope.BranchDetailsArr = [];
    scope.telanganaArr = [{ count: 1, "BranchAddress": "101 , 102, Vijayasree Apartments, Behind Chermas ,", "PhoneNumbers": "23747777", "Mobilenumber": "7675818080", "BranchemailID": "kaakateeya.com@gmail.com", "WorkingEndTime": "8:30:00 PM", "Branch_ID": 319, "Address": "Ameerpet , Hyderabad-500073", "WorkingStartTime": "8:30:00 AM", "Landlineareacode": "40", "Landlinenumber": "23747777", "BranchesName": "Hyderabad - Ameerpet" }, { count: 2, "BranchAddress": "2 nd Floor , Pullareddy Sweets Building ,SaiBaba Temple Lane ,", "PhoneNumbers": "24065959", "Mobilenumber": "9966636222", "BranchemailID": "info@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 320, "Address": "Dilsukhnagar , Hyderabad - 500060", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "40", "Landlinenumber": "24065959", "BranchesName": "Hyderabad-Dilsukhnagar" }, { count: 3, "BranchAddress": "202 , Uday Krishna Complex , Bhagyanagar colony ,", "PhoneNumbers": "23067373", "Mobilenumber": "9392009391", "BranchemailID": "info@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 321, "Address": "opp KPHB , Hyderabad-500072", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "40", "Landlinenumber": "23067373", "BranchesName": "Hyderabad-Kukatpally" }];
    scope.pundicherry = [{ "BranchAddress": "No 10 , 1st Floor , 2 nd Cross , Annanagar East , ", "PhoneNumbers": "43543543", "Mobilenumber": "7668687687", "BranchemailID": "naveena@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 341, "Address": "Behind Housing Board , Puducherry ( Pondicherry ) - 600 005", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "44", "Landlinenumber": "43543543", "BranchesName": "Pondicheery" }];
    ourBranchService.BranchPageloadSelect().then(function(response) {
        scope.BranchDetailsArr = response.data;
        _.map(scope.BranchDetailsArr, function(item, index) {
            item.count = parseInt(index + 1);
        });
    });
    scope.changeBind = function(type) {
        if (scope.ddlbranches == '1') {
            scope.BranchDetailsArr = [];
            if (helperservice.checkstringvalue(scope.ddlbranchaddress)) {
                scope.BranchDetailsArr = _.where(scope.telanganaArr, { Branch_ID: parseInt(scope.ddlbranchaddress) });
                _.map(scope.BranchDetailsArr, function(item, index) {
                    item.count = parseInt(index + 1);
                });
            }
            if (type == 'region') {
                scope.BranchDetailsArr = scope.telanganaArr;
                scope.BranchArr = [];
                _.each(scope.telanganaArr, function(item) {
                    scope.BranchArr.push({ "label": item.BranchesName, "title": item.BranchesName, "value": item.Branch_ID });
                });
            }
        } else if (scope.ddlbranches == '2') {
            scope.BranchDetailsArr = [];
            scope.BranchDetailsArr = scope.pundicherry;
            if (type == 'region') {
                scope.BranchArr = [];
            }
        } else {
            if (type == 'region') {
                scope.ddlbranchaddress = undefined;
            }
            ourBranchService.BranchSelect(scope.ddlbranches, scope.ddlbranchaddress).then(function(response) {
                scope.BranchDetailsArr = [];
                scope.BranchDetailsArr = response.data;
                _.map(scope.BranchDetailsArr, function(item, index) {
                    item.count = parseInt(index + 1);
                });
                if (type == 'region') {
                    scope.BranchArr = [];
                    _.each(response.data, function(item) {
                        scope.BranchArr.push({ "label": item.BranchesName, "title": item.BranchesName, "value": item.Branch_ID });
                    });
                }
            });
        }
    };
}]);