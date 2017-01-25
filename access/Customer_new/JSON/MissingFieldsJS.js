
'use strict'
function MissingFieldssubmit() {
    var controlflagarr = controlflag.split(',');
    var alertstring = "";
    if (controlflagarr.length > 0 && controlflagarr[0] != "") {
        for (var i = 0; i < controlflagarr.length; i++) {
            if ($('#' + controlflagarr[i] + '').val() == 0 || $('#' + controlflagarr[i] + '').val() == null) {
                switch (controlflagarr[i]) {
                    case "lstEducationcategory":
                        alertstring = "Education category";
                        break;
                    case "lstEducationGroup":
                        alertstring = "Education Group";
                        break;
                    case "lsteducationspecialisation":
                        alertstring = "Education Speciasation";
                        break;
                    case "lstprofgroup":
                        alertstring = "Profession Group";
                        break;
                    case "lstProfession":
                        alertstring = "Profession";
                        break;
                    case "lstemployedin":
                        alertstring = "EmployedIn";
                        break;
                }
                DynamicTimeAlert('Please Select  ' + alertstring + ' values', 'alert alert-danger', 4000);
                return false;
            }

        }

    }

    var missingfields = {
        dt: {
            CustID: $('#lblcustiddd').text(),
            ProfileID: $('#lblprofileidmissing').text(),
            Height: getvalues('#ddlFromheight'),
            Educcategory: getvalues('#lstEducationcategory'),
            Profgroup: getvalues('#lstProfession'),
            Starlanguage: getvalues('#ddlstarlanguages') != 0 ? getvalues('#ddlstarlanguages') : null,
            JobLocation: getvalues('#lstjoblocation'),
            DOBcountry: getvalues('#lstCountrylivingin'),
            DOBCity: getvalues('#lstdobcity'),
            FatherNative: $('#txtfathernative').val(),
            Propertylakhs: $('#txtproperty').val(),
            Maritalstatus: getvalues('#lstMaritalstatus'),
            Education: getvalues('#lstEducationGroup'),
            Complexion: getvalues('#lstComplexion'),
            Star: getvalues('#lststar') != 0 ? getvalues('#lststar') : null,
            Timeofbirthhours: getvalues('#lsthours'),
            TimeofbirthMininutes: getvalues('#lstmins'),
            TimeofbirthSeconds: getvalues('#lstsecs'),
            DOBState: getvalues('#lststate'),
            Gothram: $('#txtgothram').val(),
            MotherNative: $('#txtmothernative').val(),
            Salarycurrency: getvalues('#ddlAnnualincome') != 0 ? getvalues('#ddlAnnualincome') : null,
            Salary: $('#txtsalary').val(),
            DOBDistrict: getvalues('#lstdistrict'),
            MFCustFamilyID: $('#lblmothernativeid').text(),
            FFCustFamilyID: $('#lblfathernativeid').text(),
            CustProfessionID: $('#lblprofessionid').text(),
            CustEducationID: $('#lbleducationid').text(),
            EducationSpecialisation: getvalues('#lsteducationspecialisation'),
            ProfessionGroupName: getvalues('#lstprofgroup'),
            Employeeedin: getvalues('#lstemployedin'),
            AstroFlag: $('#lblasroflag').text(),
            ParentsFlag: $('#lblparentsflag').text(),
            JoblocationCountry: getvalues('#lstJoblocCountry'),
            JoblocationState: getvalues('#lstjoblocstate'),
            JoblocationDistrict: getvalues('#lstjoblocdistrict')
        }
    };



    var data = CallApi("MissingFieldsupdate", missingfields);
    console.log(data.d);
    $('#divmissingfields').modal('hide');

    return false;
}



$(function () {
    
    //BindBasedOnDiv('divmissingfields', 'ddlFromheight')

});