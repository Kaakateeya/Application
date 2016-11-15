app.factory('successstoriesdata', ['$http', function(http) {
    return {
        suceessdataget: function(frompage, topage) {
            var person = {};
            person.successid = null;
            person.vc_ProfileID = null;
            person.i_RegionID = null;
            person.casteiid = null;
            person.branchrom = null;
            person.pagefrom = frompage;
            person.pageto = topage;
            return http.post(app.apiroot + 'StaticPages/SuccessStoriesdetails', person);
        },
        maskclasspartner: function(logphotostatus, photo, photocount) {
            debugger;
            var photoclass = "";
            var PhotoMaskDiv;
            if (logphotostatus != "null" && logphotostatus != null && photo.indexOf("ApplicationPhoto") != -1)
                PhotoMaskDiv = logphotostatus != true && logphotostatus != "true" && photo.indexOf("ApplicationPhoto") != -1 ? "cssMaskdivrev clearfix" : "";
            else if (logphotostatus != "null" && logphotostatus != null && photo.indexOf("ThumbNail") != -1)
                PhotoMaskDiv = logphotostatus != true && logphotostatus != "true" && photo.indexOf("ThumbNail") != -1 ? "cssMaskdivrev clearfix" : "";
            else
                PhotoMaskDiv = photo.indexOf("ApplicationPhoto") != -1 ? "cssMaskdiv clearfix" : "";

            if (PhotoMaskDiv == "cssMaskdiv clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
            } else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
            } else if (photo.toLowerCase().indexOf("_rev") != -1) {
                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";

            } else if (photo.indexOf("noimage") != -1) {
                photoclass = "Linkdisabled";
            } else if (photo.indexOf("Password-Protected") != -1) {

                if (PhotoMaskDiv == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                } else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                photoclass = "Linkdisabled";
            } else if ((photocount) == 0) {
                photoclass = "Linkdisabled";

            } else {
                photoclass = "";
            }
            return photoclass;
        }

    };
}]);