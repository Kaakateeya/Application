'use strict'

var currentslide, totalItems, InputObject, Api;
function bindSlide(object) {
    var CarousalID = object.CarousalID;
    InputObject = object.InputObj;
    Api = object.api;

    var datanew = condional(object.reultArray);
    var totalrecords;

    var pageidcount = $('#' + CarousalID).find('.item').length;
    _.each(datanew, function (parentitem, index) {
        pageidcount = pageidcount + 1;
        totalrecords = CarousalID + pageidcount;

        var strappendLeftBlock = "", lnkshortlist = "", shortListRightblock = "", custid, ProfileID, PhotoCount, Age, HeightInCentimeters, MaritalStatusID, CasteID, serviceDate, CustPhoto;
        _.each(parentitem, function (childitem, index) {
            if (childitem.label != "backendFields") {

                strappendLeftBlock = strappendLeftBlock + "<div class='edit_page_details_item_desc clearfix'>"
            + "<h6>"
              + "  <span  style='font-weight: bold;'>" + childitem.label + "</span>"
            + "</h6>"
            + getDivstring(childitem.value, childitem.style, childitem.onclick, childitem.html)
        + "</div>";
            }

            else if (childitem.label == "backendFields") {
                
                $('#' + object.lblTOtalRecords).text(" of " + childitem.totalrecordsk);
                custid = childitem.Custid;
                ProfileID = childitem.ProfileID;
                PhotoCount = childitem.PhotoCount;
                Age = childitem.Age;
                HeightInCentimeters = JSON.stringify(childitem.HeightInCentimeters);
                MaritalStatusID = JSON.stringify(childitem.MaritalStatusID);
                CasteID = JSON.stringify(childitem.CasteID);
                serviceDate = JSON.stringify(childitem.serviceDate);
                CustPhoto = childitem.CustPhoto;;
            }

        });

        if (CarousalID.indexOf('shortlist') == -1) {
            lnkshortlist = $('#lblCustidpopup').text() != "" ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return checkServicetoShortlist(" + custid + "," + ProfileID + "," + Age + "," + HeightInCentimeters + "," + MaritalStatusID + "," + CasteID + "," + serviceDate + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                                + "<div class=col-lg-1><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        }

        shortListRightblock = "<li class='col-lg-3 col-md-3 col-xs-3 col-sm-3 col-lg-pull-2  col-md-pull-2 col-xs-pull-2 col-sm-pull-2 '>"
                      + "<div class='row'>"
       + " <div class='col-lg-8'>"
       + "<div class='row'>" + lnkshortlist
     + "</div></div></div>" + "<div class='clearfix'></div>"
    + "<div>"
   + "<input  id='imgCustPhoto" + totalrecords + "'  src='" + CustPhoto + "' class='image'  type='image' onclick='return getimgPath(" + JSON.stringify(custid) + "," + JSON.stringify(ProfileID) + "," + PhotoCount + ")'>"
   + "<br>"
  + "<div class='col-lg-8 col-lg-offset-5'>"
  + "<a   href='javascript:void(0)'><span  style='color:Black;font-size:9pt;'>No of Photos  " + " " + PhotoCount + "</span></a>"
 + "</div>"
 + "</div></li>";

        var totalslides = $('#' + CarousalID).find('.item').length;
        var stractiveClass = totalslides == 0 ? 'item active' : 'item';

        $("#" + CarousalID + " .carousel-inner").append(
           "<div class='" + stractiveClass + "'>"
            + "<li class='col-lg-8 col-md-8 col-lxs-8'>"
             + strappendLeftBlock + "</li>"
             + shortListRightblock
            + "</div>");

        document.getElementById('imgCustPhoto' + totalrecords + '').disabled = CustPhoto.indexOf("noimage") == -1 ? false : true;

    });
    checkitemGlobal1(CarousalID);

}

function condional(Array) {
    var totalArray = [];
    $.each(Array, function (index, item) {
        
        var data = [];

        data.push({ label: 'ProfileID', html: "&nbsp;<a href='javascript:void(0);' style='" + (item.paid == "1" ? 'color:Green;text-decoration:underline;margin-left:-16px;padding-left: 10px;' : 'color:red;text-decoration:underline;margin-left: -16px;padding-left: 10px;') + "' onclick='ViewProfilewithvalue(" + JSON.stringify(item.ProfileID) + ");'>" + item.ProfileID + "</a> " + item.KMPLID + " " + (item.IsConfidential == true || item.IsConfidential == "True" ? " C" : "") + " " + (item.SuperConfidentila == "1" || item.SuperConfidentila == 1 ? " SC" : "") + " " + (item.HoroscopeStatus == "1" ? "<input title='Click here to view Horoscope' src='../../Images/ico_horoscope.jpg' style='height:20px;width:25px;' type='image' onclick='return getPath(" + JSON.stringify(item.Cust_ID) + ");'>" : "") });
        data.push({ label: 'Name', value: item.LastName + ' ' + item.FirstName, style: item.NoOfBrothers == "0" && item.NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;" });
        data.push({ label: 'DOB(age)', value: item.DOB + '(' + item.Age + ')' });
        data.push({ label: 'Time of Birth', value: item.TOB });
        data.push({ label: 'Place of Birth', value: item.PlaceOfBirth });
        data.push({ label: 'Gothram', value: item.Gothram });
        data.push({ label: 'Caste', value: item.Caste });
        data.push({ label: 'Marital Status', value: item.maritalstatus });
        data.push({ label: 'Star', value: item.Star });
        data.push({ label: 'Color', value: item.Color });
        data.push({ label: 'Height', value: item.Height });
        data.push({ label: 'Qualification', value: item.EducationGroup + "," + item.EduGroupnamenew });
        data.push({ label: 'Profession', value: item.Profession });
        data.push({ label: 'Job Location', value: item.JobLocation });
        data.push({ label: 'Income(P.M)', value: item.Income });
        data.push({ label: 'Father Native', value: item.FFNative });
        data.push({ label: 'Mother Native', value: item.MFNative });
        data.push({ label: 'Property(Lakhs)', value: item.Property });
        data.push({ label: 'backendFields', Custid: item.Cust_ID, ProfileID: item.ProfileID, PhotoCount: item.PhotoCount, Age: item.Age, HeightInCentimeters: item.HeightInCentimeters, MaritalStatusID: item.MaritalStatusID, CasteID: item.CasteID, serviceDate: item.serviceDate, CustPhoto: item.CustomerFullPhoto, totalrecordsk: item.TotalRowsKeyword });
        if (item.serviceDate != "--" && item.serviceDate != "")
            data.push({ label: 'ServiceDate', value: item.serviceDate, style: 'style= color:red;' });
        if (item.Intercaste == "True")
            data.push({ label: 'Intercaste', value: (item.fathercaste + "/" + item.mothercaste) });

        totalArray.push(data);

    });

    return totalArray;

}
function getDivstring(value, style, onclick, html) {
    var strval = "";
    if ((html != '' && html != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + html + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    else if ((value != '' && value != undefined) && (style != '' && style != undefined) && (onclick != '' && onclick != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span " + onclick + ">" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    else if ((value != '' && value != undefined) && (style != '' && style != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }

    else {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    return strval;
}

//call dis method in page load
function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {

    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;
    //if (totalItems == 0) {

    //    bindbothOneSlideshow(carouselID, curProfileID, totalrecordsID, empidObj.d);
    //    checkitemnew(carouselID);

    //    pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
    //}

    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
    checkitemGlobal1(carouselID);
    playAndPause(carouselID, playButtonID, pauseButtonID);
    ArrowMove(carouselID);

}


function slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {

    $('#' + carouselID).bind('slid', function () {

        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#' + carouselID).find('.item').length;

        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
        $('#' + carouselID).find('div.active').index()
        if (currentslide < currentIndex1) {
            
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {

                InputObject.Keyworddlikesrch.startindex = parseInt(totalItems1) + 1;
                InputObject.Keyworddlikesrch.EndIndex = parseInt(totalItems1) + 10;
                var data = CallApi(Api, InputObject);
                var obj = { reultArray: data.d, CarousalID: 'myCarousel', lblTOtalRecords: 'lblnoofrecords' };
                bindSlide(obj);
            }
        }
        currentslide = currentIndex1;
        $('#' + curProfileID).text(currentIndex1);
        if (parseInt($("#" + lnkLastSlide).text()) < currentIndex1) {
            $("#" + lnkLastSlide).text(currentIndex1);
            return false;
        }

    });
}
//play and pause function on click event

function playAndPause(carouselID, playButtonID, pauseButtonID) {

    function interval() {
        $('#' + carouselID).carousel({
            interval: 2000,
            pause: "false"
        });
    }
    $('#' + playButtonID).click(function () {
        
        interval();
        $('#' + carouselID).carousel('cycle');
        $('#' + playButtonID).hide();
        $('#' + pauseButtonID).show();
    });
    $('#' + pauseButtonID).click(function () {
        
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    });

}
//method to move slide to left or right arrow press
function ArrowMove(carouselID) {
    $(document).bind('keyup', function (e) {
        var totalItems = $('#' + carouselID).find('.item').length;
        var currentIndex = $('#' + carouselID).find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#' + carouselID).carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#' + carouselID).carousel('prev');
        }

    });
}
//hide slide arrows for  first and last slide slides  

function checkitemGlobal1(carouselID) {
    
    var checkitem = function () {
        checkitemnew1(carouselID);
    };
    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
}
function checkitemnew1(carouselID) {
    var $this;
    $this = $("#" + carouselID);
    if ($("#" + carouselID + " .carousel-inner .item:first").hasClass("active")) {
        $("#" + carouselID).find('.left').hide();
        $("#" + carouselID).find('.right').show();
    }
    else if ($("#" + carouselID + " .carousel-inner .item:last").hasClass("active")) {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').hide();

    }
    else {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').show();
    }

}


function backtosearch() {

    document.getElementById("divcontrols").style.display = "block";
    document.getElementById("PhotoPopupSlde").style.display = "none";
   
    return false;
}

function pauseifPlayVisible(carouselID, playButtonID, pauseButtonID) {
    if ($('#' + playButtonID).is(":visible")) {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    }

}