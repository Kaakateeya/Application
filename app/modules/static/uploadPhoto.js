(function() {
    'use strict';

    angular
        .module('Kaakateeya')
        .controller('uploadPhotoCtrl', controller);

    controller.$inject = ['$location', '$scope', 'editmanagePhotoServices', 'Commondependency', '$uibModal', 'fileUpload', 'SelectBindServiceApp', '$state', 'uploadService'];

    function controller($location, scope, SVC, Commondependency, uibModal, fileUpload, SelectBindServiceApp, state, uploadService) {
        /* jshint validthis:true */
        var vm = this,
            model;
        vm.fnoimg = '';
        scope.up = {};
        var CustID = 91022;
        scope.photorowID = 0;
        scope.manageArr = [
            { ImageUrl: app.Fnoimage },
            { ImageUrl: app.Fnoimage },
            { ImageUrl: app.Fnoimage }
        ];
        scope.AddImage = function(index) {
            scope.photorowID = index;
            Commondependency.open('AddimagePopup.html', scope, uibModal, 'sm');
        };
        scope.cancel = function() {
            Commondependency.closepopup();
        };

        scope.pageload = function() {
            SelectBindServiceApp.noPhotoStatus(CustID).then(function(response) {
                if (parseInt(response.data) === 1) {
                    state.go('home');
                } else {

                }
            });
        };

        uploadService.getencrypt('91022').then(function() {

        });





        scope.pageload();

        scope.upload = function(obj) {
            if (obj.myFile) {
                var extension = (obj.myFile.name !== '' && obj.myFile.name !== undefined && obj.myFile.name !== null) ? (obj.myFile.name.split('.'))[1] : null;
                extension = angular.lowercase(extension);
                var gifFormat = "gif, jpeg, png,jpg";

                if (typeof(obj.myFile.name) != "undefined") {

                    var size = parseFloat(obj.myFile.size / 1024).toFixed(2);
                    if (extension !== null && gifFormat.indexOf(angular.lowercase(extension)) === -1) {
                        alert('Your uploaded image contains an unapproved file formats.');
                    } else if (size > 4 * 1024) {
                        alert('Sorry,Upload Photo Size Must Be Less than 1 mb');
                    } else {

                        var keyname = app.prefixPath + 'KMPL_' + CustID + '_Images/Img' + scope.photorowID + '.' + extension;

                        fileUpload.uploadFileToUrl(obj.myFile, '/photoUplad', keyname).then(function(res) {
                            console.log(res.status);
                            if (res.status == 200) {
                                Commondependency.closepopup();
                                scope.uploadData = {
                                    GetDetails: {
                                        ID: null,
                                        url: 'Img' + scope.photorowID + '.' + extension,
                                        order: scope.photorowID,
                                        IsProfilePic: 0,
                                        DisplayStatus: scope.photorowID,
                                        Password: 0,
                                        IsReviewed: 0,
                                        TempImageUrl: app.GlobalImgPath + keyname,
                                        IsTempActive: '0',
                                        DeletedImageurl: null,
                                        IsImageDeleted: 0,
                                        PhotoStatus: null,
                                        PhotoID: scope.photorowID,
                                        PhotoPassword: null
                                    },
                                    customerpersonaldetails: {
                                        intCusID: CustID,
                                        EmpID: null,
                                        Admin: null
                                    }
                                };

                                SVC.submituploadData(scope.uploadData).then(function(response) {
                                    console.log(response);
                                    if (response.status === 200) {
                                        alert('submitted Succesfully');
                                        scope.manageArr = response.data;
                                        scope.refreshPageLoad(scope.manageArr);

                                    } else {
                                        alert('Updation failed');
                                    }
                                });

                            }
                        });
                    }
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert('Please upload Photo');
            }
        };


        scope.refreshPageLoad = function(Arr) {
            _.each(Arr, function(item) {
                scope.rbtProtectPassword = item.PhotoPassword === 'Admin@123' ? '1' : '0';
                var imagepath = app.accesspathdots;

                if (item.IsActive === 0 && item.PhotoName !== null) {
                    var strCustDirName1 = "KMPL_" + CustID + "_Images";
                    var path1 = imagepath + strCustDirName1 + "/" + item.PhotoName;
                    item.ImageUrl = path1 + '?decache=' + Math.random();
                    item.addButtonvisible = false;
                    item.deleteVisibility = true;
                    item.keyname = strCustDirName1 + "/" + item.PhotoName;

                } else if (item.IsActive === 1 && item.IsThumbNailCreated === 1) {

                    var strCustDirName = "KMPL_" + CustID + "_Images";
                    item.addButtonvisible = false;
                    item.deleteVisibility = true;
                    switch (item.DisplayOrder) {
                        case 1:
                            var photoshoppath = "Img1_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                            var path = imagepath + strCustDirName + "/" + photoshoppath;
                            item.ImageUrl = path;
                            item.keyname = strCustDirName + "/" + photoshoppath;
                            break;
                        case 2:
                            var photoshoppathnew = "Img2_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                            var pathnew = imagepath + strCustDirName + "/" + photoshoppathnew;
                            item.ImageUrl = pathnew;
                            item.keyname = strCustDirName + "/" + photoshoppathnew;
                            break;
                        case 3:
                            var photoshoppathneew3 = "Img3_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                            var pathneww = imagepath + strCustDirName + "/" + photoshoppathneew3;
                            item.ImageUrl = pathneww;
                            item.keyname = strCustDirName + "/" + photoshoppathneew3;
                            break;
                    }
                } else if (item.IsActive === 0 && item.PhotoName === null) {
                    item.addButtonvisible = true;
                    item.deleteVisibility = false;
                    // item.ImageUrl = stateParams.genderID === '1' || stateParams.genderID === 1 ? app.Mnoimage : app.Fnoimage;
                    item.ImageUrl = app.Fnoimage;
                }
            });
            return Arr;
        };

        scope.redirectPage = function(type) {

            switch (type) {
                case 'PhotoGuideLines':
                    window.open('registration/photoGuideLines', '_blank');
                    break;
                case 'Faqs':
                    window.open('faqs', '_blank');
                    break;
                case 'uploadTips':
                    window.open('registration/uploadTips', '_blank');
                    break;
            }
        };








    }
})();