(function() {
    'use strict';

    function factory(http) {
        return {
            getEmpViewfullProfile: function(ProfileID, EmpID) {
                return http.get(app.apiroot183 + 'StaticPages/getCustomerViewAdminFullDetails', {
                    params: {
                        ProfileID: ProfileID,
                        EmpID: EmpID
                    }
                });
            },
            inbitdata: function(profileid, empid) {
                return http.get(app.apiroot183 + 'StaticPages/getInbitdataInfo', {
                    params: {
                        ProfileID: profileid,
                        empid: empid
                    }
                });
            },
            NoDataFoundDisplay: function(profileid) {
                return http.get(app.apiroot183 + 'StaticPages/getNoDataFoundDisplay', {
                    params: {
                        ProfileID: profileid
                    }
                });
            },
            getdecryptedProfileID: function(profileid) {
                return http.get(app.apiroot183 + 'StaticPages/getdecryptedProfileID', {
                    params: {
                        ProfileID: profileid
                    }
                });
            }
        };
    }
    angular
        .module('Kaakateeya')
        .factory('employeeViewfullprofilePrintservice', factory);
    factory.$inject = ['$http'];
})(angular);