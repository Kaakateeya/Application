app.controller('Generalsearch', ['$scope', '$element', 'arrayConstants', 'SelectBindServiceApp', 'customerDashboardServices','searches',function(scope, $element, arrayConstants, service, customerDashboardServices,searches) {
    scope.searchTerm;
    scope.selectcaste;
    scope.PartnerProfilesnew = [];
    scope.truepartner = true;
    scope.showcontrols = true;
    var SearchRequest;

        scope.Age = function() {
            scope.test = [];
            scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                scope.test.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return scope.test;
        };
        scope.arrayAge = scope.Age();
        scope.height = arrayConstants.height;
        scope.MaritalStatus = arrayConstants.MaritalStatus;
        scope.educationcategory = arrayConstants.educationcategory;
        service.countrySelect().then(function(response) {
            scope.Country = [];
            _.each(response.data, function(item) {
                scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.Religion = arrayConstants.Religion;
        scope.Mothertongue = arrayConstants.Mothertongue;
        service.casteselect().then(function(response) {
            scope.Caste = [];
            _.each(response.data, function(item) {
                scope.Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.visastatus = arrayConstants.visastatus;
        scope.Education = [];
        service.ProfessionGroup().then(function(response) {
            scope.Professiongroup = [];
            scope.Professiongroup.push({ "label": "--select--", "title": "--select--", "value": 0 });
            _.each(response.data, function(item) {
                scope.Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        service.currency().then(function(response) {
            scope.Currency = [];
            _.each(response.data, function(item) {
                scope.Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.stars = arrayConstants.stars;
   
    scope.clearSearchTerm = function() {
        scope.searchTerm = '';
    };
  
scope.generalpageload=function()
{
searches.partnerdetails(91035,2).then(function(response)
{
console.log(response);
});
};



  scope.mothertongue = [1, 2, 3];
  scope.generalsearchsubmit = function(type) {
           alert(scope.mothertongue);
         alert(scope.maritalstatus);
   switch(type)
   {
      case "general":
       SearchRequest = {
        dt: {
            intCusID: scope.custid,
            strCust_id:  scope.custid != null ?  scope.custid : "",
            intGender: scope.gender,
            FromAge: scope.AgeFrom,
            ToAge: scope.Ageto,
            iFromHeight: scope.HeightFrom,
            iToHeight: scope.Heightto,
            Maritalstatus:scope.maritalstatus,
            intReligionID:scope.religion ,
            MotherTongue: scope.mothertongue,
            Caste: scope.caste,
            iPhysicalstatus:null,
            Complexion: null,
            Country: scope.country,
            State:null,
            Visastatus: null,
            Educationcategory: scope.educationcat,
            Education: null,
            Professiongroup: null,
            iFromSal:null,
            iToSal:null,
            iManglinkKujaDosham: null,
            iStarLanguage: null,
            Stars: null,
            iDiet: null,
            intPhotoCount:null,
            StartIndex: 1,
            EndIndex: 10,
            i_Registrationdays:scope.regdays,
            iAnnualincome:null,
            flagforurl: null,
            SavedSearch:null,
            SearchPageID: 1,
            PageName: null,
            SavedSearchresultid: null,
            Searchresult: null
        }
    };
break;
case "advanced":
 SearchRequest = {
        dt: {
            intCusID: scope.custid,
            strCust_id:  scope.custid != null ?  scope.custid : "",
            intGender: scope.genderadvance,
            FromAge: scope.AgeFromadvance,
            ToAge: scope.Agetoadvance,
            iFromHeight: scope.HeightFromadvance,
            iToHeight: scope.Heighttoadvance,
            Maritalstatus:scope.maritalstatusadvance,
            intReligionID:scope.religionadvance ,
            MotherTongue: scope.mothertobgueadvance,
            Caste: scope.casteadvance,
            iPhysicalstatus:scope.physicalstatusadvance,
            Complexion: null,
            Country: scope.countryadvance,
            State:scope.stateadvance,
            Visastatus: scope.visastatusadvance,
            Educationcategory: scope.educationcategoryadvance,
            Education: scope.Educationadvance,
            Professiongroup: scope.Professiongroupadvance,
            iFromSal:scope.fromcurrency,
            iToSal:scope.tocurrency,
            iManglinkKujaDosham: scope.kujadosham,
            iStarLanguage: scope.starlanguage,
            Stars: scope.starsadvance,
            iDiet: scope.diet,
            intPhotoCount:null,
            StartIndex: 1,
            EndIndex: 10,
            i_Registrationdays:scope.regdaysadvance,
            iAnnualincome:scope.monthsalcurrency,
            flagforurl: null,
            SavedSearch:null,
            SearchPageID: 1,
            PageName: null,
            SavedSearchresultid: null,
            Searchresult: null
        }
    };
break;
case "profileid":
 SearchRequest = {
        dt: {
            strCust_id: scope.custid,
            intCusID: scope.custid != null ?  scope.custid : "",
            intGender:  scope.gender,
            strLastName:scope.lastname,
            strFirstName: scope.firstname,
            strProfileID: scope.profileid,
            intCasteID: null,
            StartIndex: 1,
            EndIndex: 10,
            flagforurl: null,
            SavedSearch:null,
            SearchPageID: "1",
            PageName: "ProfileIDsearch"
        }

    }
break;
}
      
        scope.showcontrols = false;
        debugger;
        scope.truepartner = false;
        customerDashboardServices.getCustomercounts(91035, 'C', 1, 50).then(function(response) {
            console.log(response);
            _.each(response.data.PartnerProfilesnew, function(item) {
                scope.PartnerProfilesnew.push(item);
            });
        });
    };


}]);