
function getPath(custid) {
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EmployeeSearchSlideShow.aspx/GetUrl",
        data: "{'strcustId':'" + custid + "'}",
        dataType: "json",
        success: function (data) {
            console.log(JSON.stringify(data.d));
            $('#ctl00_ContentPlaceHolder1_imghoropopup').attr("src", data.d);
            $('#horoscopepopup').modal({ backdrop: 'static', keyboard: false });
        },
        error: function (result) {
            alert("Error");
        }
    });

}
function getimgPath(custid, profileid, photocount, e) {
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EmployeeSearchSlideShow.aspx/GetimgUrl",
        data: "{'strcustId':'" + custid + "','profileId':'" + profileid + "','photoCount':'" + photocount + "'}",
        dataType: "json",
        success: function (data) {
            console.log(JSON.stringify(data.d));
            $("#Ajaxbind").html("");
            for (var i = 0; i < data.d.length; i++) {
                if (i === 0) {
                    $("#Ajaxbind").append("<div class='item active'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                }
                else {
                    $("#Ajaxbind").append("<div class='item'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                }
            }
            $('#slidephoto').modal({ backdrop: 'static' });

            $('#slideshow').carousel({
                pause: true,
                interval: false
            }).carousel(0);

        },
        error: function (result) {

        }
    });

}

function getImageCustID(custid, photocount) {

    document.getElementById("<%=hdnhoroCustID.ClientID%>").value = custid;
    document.getElementById("<%=hdnPhotoCount.ClientID%>").value = photocount;
    return true;
}


function getClickedCustID(custids) {
    var StVal = document.getElementById("<%=hdnshortlistProfile.ClientID%>").value;

    if (StVal.contains(custids)) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {
        if (StVal == '') {
            StVal = StVal = custids;
            DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
        }
        else {
            StVal += "," + custids;
            DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
        }
    }
    document.getElementById("<%=hdnshortlistProfile.ClientID%>").value = StVal;
    return false;
}


function ViewProfile(id) {
    var profileID = document.getElementById(id).innerHTML;
    window.open('<%= Page.ResolveUrl("../../SearchResult/Viewprofile.aspx") %>?ProfileID=' + profileID + "&pageid=" + 1, "self", 'top=0,left=0,width=900,height=860, status=no,resizable=yes,scrollbars=yes');
}
function savecustids(custids) {
    var hv = $("#" + '<%= hdncustids.ClientID %>').val();
    if (hv.contains(custids)) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {
        if (hv == '') {
            hv = custids;
            $("#" + '<%= hdncustids.ClientID %>').val(custids)
            DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
        }
        else {
            hv += "," + custids;
            DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
        }
    }
    $("#" + '<%= hdncustids.ClientID %>').val(hv);
    return false;
}
function interval() {
    $('.carousel').carousel({
        interval: 3000,
        pause: "false"

    });
}
function popupcount() {
    var totalItemspopup = $('#divslideshow').find('.item').length;
    var currentIndexpopup = $('#divslideshow').find('div.active').index() + 1;
    $('.numpopup').html('Profile ' + '' + currentIndexpopup + ' of ' + totalItemspopup + '');
    $('#divslideshow').bind('slid', function () {
        currentIndexpopup = $('#divslideshow').find('div.active').index() + 1;
        $('.numpopup').html('Profile ' + '' + currentIndexpopup + ' of ' + totalItemspopup + '');
    });
    var checkitem = function () {
        var $this;
        $this = $("#divslideshow");
        if ($("#divslideshow .carousel-inner .item:first").hasClass("active")) {
            $('#divslideshow').find('.left').hide();
            $('#divslideshow').find('.right').show();

        } else if ($("#divslideshow .carousel-inner .item:last").hasClass("active")) {
            $('#divslideshow').find('.left').show();
            $('#divslideshow').find('.right').hide();
        } else {
            $('#divslideshow').find('.left').show();
            $('#divslideshow').find('.right').show();
        }
    };

    checkitem();

    $("#divslideshow").on("slid.bs.carousel", "", checkitem);
}


jQuery(function ($) {
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(autoplay);

});
function autoplay(action) {
    if (action == 'play') {
        interval();
        $('#myCarousel').carousel('cycle');
        $('#playButton').hide();
        $('#pauseButton').show();
    }
    else {
        $('#myCarousel').carousel('pause');
        $('#playButton').show();
        $('#pauseButton').hide();
    }
}


jQuery(function ($) {
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(pause);

});
function pause() {
    $('#myCarousel').carousel('pause');
    $('#playButton').show();
    $('#pauseButton').hide();
}


$(function () {
    autoplay();
    SlideCount();
    var checkitem = function () {
        var $this;
        $this = $("#myCarousel");
        if ($("#myCarousel .carousel-inner .item:first").hasClass("active")) {
            $('#myCarousel').find('.left').hide();
            $('#myCarousel').find('.right').show();

        }
            //else if ($("#myCarousel .carousel-inner .item:last").hasClass("active")) {
            //    alert($("#myCarousel .carousel-inner").index());
            //    dbbind();
            //}
        else {
            $('#myCarousel').find('.left').show();
            $('#myCarousel').find('.right').show();
        }
    };

    checkitem();

    $("#myCarousel").on("slid.bs.carousel", "", checkitem);
});
function dbbind() {
    $('#myCarousel').find('.left').show();
    $('#myCarousel').find('.right').show();
    var totalItems = $('#myCarousel').find('.item').length;
    console.log(totalItems);
    //$("#lnkLastSlide").text(totalItems + 10-10);
    var SearchData = '<%=this.Request.QueryString["Data"]%>';
    var advaceFlag = '<%=this.Request.QueryString["AdvancedSearch"]%>';
    var curPageVal = $('#myCarousel').find('div.active').index() + 1;

    //start ajax method
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EmployeeSearchSlideShow.aspx/PagingNew",
        data: "{'currentPage':'" + curPageVal + "','searchdata':'" + SearchData + "','advanceflag':'" + advaceFlag + "'}",
        dataType: "json",
        success: function (data) {
            if (data.d.length > 0) {

                console.log("innercalled");
                for (var i = 0; i < data.d.length; i++) {
                    curPageVal = curPageVal + i;
                    var strimageurl = (data.d[i].imageurl).replace("~/", "../../");
                    var strProfilecolor = data.d[i].paid == "1" ? "style='color:Green;text-decoration:underline;margin-left:-16px;'" : "style='color:red;text-decoration:underline;margin-left: -16px;'";
                    var strConcidential = data.d[i].IsConfidential == "True" ? " C" : "";
                    var onlyChildcolor = data.d[i].NoOfBrothers == "0" && data.d[i].NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;";
                    var ParentIntercaste = data.d[i].Intercaste == "True" ? "<div class= 'edit_page_details_item_desc clearfix' >"
                             + "<h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label33  style= font-weight:bold; >Parents InterCaste(F/M)</span></h6>"
                              + "<h5>"
                              + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel23 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblintercaste >" + data.d[i].fathercaste + "/" + data.d[i].mothercaste + "</span></div>"
                           + "</h5></div></li>" : "";

                    var strhorobtn = data.d[i].HoroscopeStatus == "1" ? "<input name=ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$ImaHoro id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_ImaHoro"
                    + "title=Click here to view Horoscope src=../../Images/ico_horoscope.jpg style=height:20px;width:25px; type=image onclick='getPath(" + data.d[i].Cust_ID + ")'>" : "";
                    $("#myCarousel .carousel-inner").append("<div class='item'><li class='col-lg-8 col-md-8 col-lxs-8'>"
                            + "<div class='clearfix'></div><div class='edit_page_details_item_desc clearfix'>"
                           + "<h6><span id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label31 style=font-weight:bold;>ProfileID</span></h6>"
                           + "<h5><div class=row><div class='col-lg-12'><div class='col-lg-2'><div id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel13>"
                           + "<a onclick=ViewProfile(this.id); id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lnkbtnProfileID class='lnkbtnEdit' href=javascript:__doPostBack('ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$lnkbtnProfileID','') " + strProfilecolor + ">" + data.d[i].ProfileID + "</a>" + "</div></div>"
                            + " <div class='col-lg-8' ><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel14 >"
                         + "<span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblKMpl  style='margin-left: -16px;' >" + data.d[i].KMPLID + "</span>" + strhorobtn + "<span><b>" + strConcidential + "</b></span></div></div></div></div></h5></div>"
                          + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_NAME  style= font-weight:bold; >Name</span></h6>"
                           + "<h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_hhhh ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblName  " + onlyChildcolor + " >" + data.d[i].LastName + " " + data.d[i].FirstName + "</span></div> </h5></div>"
                          + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label3  style= font-weight:bold; >DOB(age)</span> </h6>"
                           + "<h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel2 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblDob >" + data.d[i].DOB + "</span>"
                            + "<span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblAge >" + "(" + data.d[i].Age + ")" + "</span></div></h5></div>"
                         + "  <div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label5  style= font-weight:bold; >Time of Birth</span>"
                          + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel3 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lbltob >" + data.d[i].TOB + "</span></div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label6  style= font-weight:bold; >Place of Birth</span></h6><h5>"
                           + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel4 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblPlaceOfBirth >" + data.d[i].PlaceOfBirth + "</span>"
                           + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label7  style= font-weight:bold; >Gothram</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel5 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblGothram >" + data.d[i].Gothram + "</span>"
                              + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label8  style= font-weight:bold; >Caste</span>"
                             + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel15 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblCaste >" + data.d[i].Caste + "</span>"
                            + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblStarIDs  style= font-weight:bold; >Star</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel6 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblStardisplay >" + data.d[i].Star + "</span>"
                            + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label11  style= font-weight:bold; >Color</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel16 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblcolor >" + data.d[i].Color + "</span></div>"
                             + "</h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label9  style= font-weight:bold; >Height</span>"
                               + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel11 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblheight >" + data.d[i].Height + "</span>"
                               + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label24  style= font-weight:bold; >Qualification</span>"
                                + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel17 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label17 >" + data.d[i].EducationGroup + " " + data.d[i].EduGroupnamenew + "</span>"
                                + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label18  style= font-weight:bold; >Profession</span>"
                                + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel12 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblprofession >" + data.d[i].Profession + "</span>"
                                + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label26  style= font-weight:bold; >Job Location</span></h6><h5>"
                               + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel18 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lbljoblocation >" + data.d[i].JobLocation + "</span></div></h5></div>"
                           + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label20  style= font-weight:bold; >Income(P.M)</span></h6><h5>"
                           + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel19 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_salarycurerency >" + data.d[i].currency + "</span><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblincome >" + data.d[i].Income + "</span></div>"
                           + "</h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label22  style= font-weight:bold; >Father Native</span></h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel20 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblffnative >" + data.d[i].FFNative + "</span></div></h5></div>"
                            + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label28  style= font-weight:bold; >Mother Native</span></h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel21 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblmfnative >" + data.d[i].MFNative + "</span></div></h5></div>"
                             + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label30  style= font-weight:bold; >Property(Lakhs)</span>"
                              + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel22 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblproperty >" + data.d[i].Property + "</span></div>"
                             + "</h5></div>" + ParentIntercaste
                           + "<li class= 'col-lg-3 col-md-3 col-lxs-3 3 col-lg-pull-2 col-md-pull-2 col-xs-pull-2'><div class= 'row' ><div class= 'col-lg-6' ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblfff ></span>"
                           + "</div><div class= 'col-lg-5'  id= divshort ><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_dd >"
                         + "<a id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lnkshortlist  class= 'Heart'  href= javascript:__doPostBack('ctl00$ContentPlaceHolder1$rptslider$ctl03$lnkshortlist','') onclick='return getClickedCustID(" + data.d[i].Cust_ID + ");return false;' ><span class='fa fa-heartbeat'>shortlist</span></a>"
                              + "</div></div></div><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UP1 ><input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$imglst  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_imglst  src= " + strimageurl + "  type= image onclick='getimgPath(" + data.d[i].Cust_ID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ",this)'>"
                            + "<br><div class= 'col-lg-8 col-lg-offset-5'><input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$cmdPrev  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_cmdPrev  src= ../../Images/btn_arowl.png  type= image >"
                            + "<a id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lnknoofphotos  href= javascript:__doPostBack('ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$lnknoofphotos','') ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblCurrentPageslide  style= color:Black;font-size:9pt; >No of Photos " + data.d[i].PhotoCount + "</span></a>"
                           + "<input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$cmdNext  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_cmdNext  src= ../../Images/btn_arowr.png  type= image >"
                             + "</div></div></li></div>"
    )
                    document.getElementById("ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_imglst").disabled = strimageurl.indexOf("noimage") == -1 ? false : true;
                }
            }

            else
                alert('No More Records to Load')
        },
        error: function (result) {
            alert("bindError");
            console.log(JSON.stringify(result.d));
        }
    });
    //end ajax method
}
function SlideCount() {


    var currentIndex = $('#myCarousel').find('div.active').index() + 1;
    var currentslide = 1;
    $('.num').html('Profile ' + '' + currentIndex);
    $('#myCarousel').bind('slid', function () {
        var totalItems = $('#myCarousel').find('.item').length;
        currentIndex = $('#myCarousel').find('div.active').index() + 1;

        console.log(parseInt(totalItems));
        if (currentslide < currentIndex) {
            if (parseInt(totalItems) - parseInt(currentIndex) == 2) {
                console.log("called");
                dbbind();
            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex)
                $("#lnkLastSlide").text(currentIndex);
        }
        currentslide = currentIndex;
        $('.num').html('Profile ' + '' + currentIndex);
        var hv = $("#" + '<%= hdnCurrentSlideVal.ClientID %>').val(currentIndex);

    });

    return true;
}
$(function () {
    //$('#myCarousel').carousel('pause');
    $('#myCarousel').each(function () {
        $(this).carousel({
            interval: false
        });
    });
});
function SlideCountstart() {
    $('#myCarousel').carousel('pause');
    $('#myCarousel').each(function () {
        $(this).carousel({
            interval: false
        });
    });

    $("#myCarousel").carousel(0);
    SlideCount();
    checkitem();

    return true;
}

$(document).bind('keyup', function (e) {

    var totalItems = $('#myCarousel').find('.item').length;
    var currentIndex = $('#myCarousel').find('div.active').index() + 1;
    if (e.which == 39) {
        if (totalItems != currentIndex)
            $('#myCarousel').carousel('next');
    }
    else if (e.which == 37) {
        if (currentIndex != 1)
            $('#myCarousel').carousel('prev');
    }

});


