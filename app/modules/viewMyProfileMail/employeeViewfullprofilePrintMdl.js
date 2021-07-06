(function(angular) {
    'use strict';

    function factory(employeeViewfullprofileservice, stateParams, alerts, SelectBindServiceApp, uibModal, customerDashboardServices) {
        var model = {};
        model.scope = {};
        model.viewprofilearray = [];
        model.aboutmyself = {};
        model.personalinfo = [];
        model.basicinfo = [];
        model.custid = 0;
        model.stateprofileid = stateParams.ProfileID;
        model.statecontacts = stateParams.contacts;
        model.textboxshowhide = true;
        model.fullprofileshow = true;
        model.EmpViewfullProfile = function(stateprofileid, type) {
            model.viewprofilearray = [];
            model.aboutmyself = {};
            model.personalinfo = [];
            model.basicinfo = [];
        };

        model.getprofileData = function(stateprofileid, empid) {
            employeeViewfullprofileservice.getEmpViewfullProfile(stateprofileid, empid).then(function(response) {
                model.fullprofileshow = false;
                if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                    _.each(response.data, function(item) {
                        var testArr = JSON.parse(item);
                        if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                            model.aboutmyself = testArr;
                        } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                            model.personalinfo = testArr;
                            model.custid = model.personalinfo[0].Cust_ID;
                            var photocount = model.personalinfo[0].PhotoName_Cust;
                            model.horoscopeimage = model.personalinfo[0].HoroscopeImage === "" ||
                                model.personalinfo[0].HoroscopeImage === null ||
                                model.personalinfo[0].HoroscopeImage === "Not given" ? false : true;
                            if (model.personalinfo[0].HoroscopeImage !== undefined && model.personalinfo[0].HoroscopeImage !== null) {
                                model.ViewHoroshow = (model.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? true : false;
                            }
                        } else {
                            if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "My Basic Details") {
                                model.basicinfo = testArr;
                            }
                            if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                                model.viewprofilearray.push({ header: testArr[0].TableName, value: testArr });
                            }
                        }
                    });

                }
            });
        };

        model.getprofileDataencryptedID = function(stateprofileid) {
            employeeViewfullprofileservice.getdecryptedProfileID(stateprofileid).then(function(response) {
                if (response.data) {
                    model.getprofileData(response.data, 2);
                }

            });
        };

        model.showPhotoPopup = function() {
            alerts.ShowPhotoPopup(model.custid, model.scope);
        };

        model.applyCls = function(header) {
            if (header === 'My Location Information') {
                return 'personal_inform_main_in_list clearfix';
            } else if (header === 'My Basic Details') {

                return 'personal_inform_main_in_list clearfix displayCls';
            }
            return '';
        };

        model.photoalbum = function() {
            var logincustid = model.personalinfo[0].Cust_ID;
            model.slideshowimages();
            model.headerpopup = "Slide show";
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                alerts.dynamicpopup("photopopup.html", model.scope, uibModal);
            }
        };
        model.cancel = function() {
            alerts.dynamicpopupclose();
        };
        model.slideshowimages = function() {
            customerDashboardServices.getphotoslideimages(model.personalinfo[0].Cust_ID).then(function(response) {
                model.slides = [];
                _.each(response.data, function(item) {
                    model.slides.push(item);
                });
            });
        };

        model.viewhoroscopeimage = function(horopath) {
            if (horopath.indexOf('.html') !== -1) {
                window.open(horopath, '_blank');
            } else {
                model.image = horopath;
                alerts.dynamicpopup("astroPopup.html", model.scope, uibModal);
            }
        };

        return model;
    }
    angular
        .module('Kaakateeya')
        .factory('employeeViewfullprofilePrintModel', factory);
    factory.$inject = ['employeeViewfullprofilePrintservice',
        '$stateParams', 'alert', 'SelectBindServiceApp', '$uibModal', 'customerDashboardServices'
    ];

})(angular);