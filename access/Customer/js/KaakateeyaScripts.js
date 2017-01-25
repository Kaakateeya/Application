
function focustxt(x) {
    $("#" + x).removeClass("txtRegister").addClass("txtRegisterHover");
}
function blurtxt(x) {
    $("#" + x).removeClass("txtRegisterHover").addClass("txtRegister");
}
function focusListBox(x) {
    $("#" + x).removeClass("lstRegister").addClass("lstRegisterHover");
}
function blurListBox(x) {
    $("#" + x).removeClass("lstRegisterHover").addClass("lstRegister");
}

function focusSearchListBox(x) {
    $("#" + x).removeClass("lstRegister").addClass("lstRegisterHover");
}
function blurSearchListBox(x) {
    $("#" + x).removeClass("lstRegisterHover").addClass("lstRegister");
}

function focusddl(x) {
    $("#" + x).removeClass("ddlRegister").addClass("ddlRegisterHover");
}
function blurddl(x) {
    $("#" + x).removeClass("ddlRegisterHover").addClass("ddlRegister");
}
function focustxtAreaCode(x) {
    $("#" + x).removeClass("txtAreaCode").addClass("txtAreaCodeHover");
}
function blurtxtAreaCode(x) {
    $("#" + x).removeClass("txtAreaCodeHover").addClass("txtAreaCode");
}
function focusddlCountryCode(x) {
    $("#" + x).removeClass("ddlCountryCode").addClass("ddlCountryCodeHover");
}
function blurddlCountryCode(x) {
    $("#" + x).removeClass("ddlCountryCodeHover").addClass("ddlCountryCode");
}
function focustxa(x) {
    $("#" + x).removeClass("txaRegister").addClass("txaRegisterHover");
}
function blurtxa(x) {
    $("#" + x).removeClass("txaRegisterHover").addClass("txaRegister");
}
function onlyNumbers(evt) {
    var e = event || evt;
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 46) {
            return false;
        }
    }
    else {
        return true;
    }
}
function vlidateTextFields(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    //alert(unicode);
    if ((unicode == 8) || (unicode == 9) || (unicode > 64 && unicode < 91) || (unicode > 96 && unicode < 109) || (unicode > 111 && unicode < 123) || (unicode == 46) || (unicode == 39) || (unicode == 32)) {
        return false;
    }
    else {
        //            window.alert("This field accepts only Numbers");
        return true;
    }
}
function validateNumbersOnly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    //alert(unicode);
    if ((unicode == 8) || (unicode == 9) || (unicode > 47 && unicode < 58)) {
        return true;
    }
    else {
        //            window.alert("This field accepts only Numbers");
        return false;
    }
}



function OnSelectedIndexChanged(x, y) {

    var id;
    if (x.search(y) > 0) {
        id = x.replace("ddl" + y, "txt" + y);
    }
    var e = document.getElementById(x);
    var value = e.options[e.selectedIndex].value;
    if (value == "O") {
        $("#" + id).css({ "display": "block" });
    }
    else {
        if (document.getElementById(id) != null) {
            document.getElementById(id).value = "";
            $("#" + id).css({ "display": "none" });
        }
    }
}
function toggleSubMenu(x) {
    $("#" + x).toggle("medium");
}
function mnuHeaderFocus(x) {
    $("#" + x).css("", "");
}

function insertSpaces(string) {
    var currentCharacter;
    var resultString;
    resultString = ''
    //a line to loop through each charcther in the string agument
    for (var position = 0; position < 4; position =
position + 1) {
        // set current characther as the first charcter in the string and add a space
        currentCharacter = (string.charAt(position) + ' ')
        //store the currentcharcter and add followng characthers
        resultString = currentCharacter + resultString
    } return resultString
}
function confirmation() {
    if (confirm('Are you sure in performing this action. Information which is not added to grid will be not considered')) {
        return true;
    }
    else {
        return false;
    }
}
function CharacterCount(e, id) {
    var Len = document.getElementById(id).value.length;
    var curposition;
    if (document.selection) {
        curposition = getposition(id);
    }
    else {
        var xyz = document.getElementById(id);
        curposition = getCaret(xyz);
    }
    var lblID = id.replace("txt", "lbl");
    if (Len < 1000) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        var len = document.getElementById(id).value.length;
        //var curposition = getposition(id);
        var curposition;
        if (document.selection) {//Works for IE
            curposition = getposition(id);
            document.getElementById(lblID).innerHTML = "Number of characters entered : " + Len;
        }
        else {//Works for FireFox, Chrome, Netscape
            var xyz = document.getElementById(id);
            curposition = getCaret(xyz);
            document.getElementById(lblID).innerHTML = "Number of characters entered : " + Len;
        }
        var txt = document.getElementById(id).value;
        if (Number(unicode) == 32 && Number(curposition) == 0) {
            return false;
        }
        else {
            if (Number(unicode) == 32 && txt.toString().charCodeAt(curposition - 1) == 32) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    else if (Len = 1000) {
        document.getElementById(lblID).innerHTML = "Characters reached maximum limit : " + 1000;
    }
    else {
        if (checkwhitespace(e, id)) {
            document.getElementById(lblID).innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }
}

function SmallCharacterCount(e, id) {
    var Len = document.getElementById(id).value.length;
    var curposition;
    if (document.selection) {
        curposition = getposition(id);
    }
    else {
        var xyz = document.getElementById(id);
        curposition = getCaret(xyz);
    }
    var lblID = id.replace("txt", "lbl");
    if (Len < 500) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        var len = document.getElementById(id).value.length;
        //var curposition = getposition(id);
        var curposition;
        if (document.selection) {//Works for IE
            curposition = getposition(id);
            document.getElementById(lblID).innerHTML = "Number of characters entered : " + Len;
        }
        else {//Works for FireFox, Chrome, Netscape
            var xyz = document.getElementById(id);
            curposition = getCaret(xyz);
            document.getElementById(lblID).innerHTML = "Number of characters entered : " + Len;
        }
        var txt = document.getElementById(id).value;
        if (Number(unicode) == 32 && Number(curposition) == 0) {
            return false;
        }
        else {
            if (Number(unicode) == 32 && txt.toString().charCodeAt(curposition - 1) == 32) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    else if (Len = 500) {
        document.getElementById(lblID).innerHTML = "Characters reached maximum limit : " + 500;
    }
    else {
        if (checkwhitespace(e, id)) {
            document.getElementById(lblID).innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }
}

function newPopup(url) {
    popupWindow = window.open(
		         url, 'popUpWindow', 'height=900,width=950')
}
function ZipCode() {
    var e = event || evt;
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        return true;
    }
}

//function ValidateAlphabet(e, id) {
//    var unicode = e.charCode ? e.charCode : e.keyCode;
//    //alert(unicode);
//    if (unicode != 9 && unicode != 46 && (unicode < 35 || unicode > 40) && (unicode < 65 || unicode > 90) && (unicode > 96 || unicode < 123) && (unicode != 32 && unicode != 8)) {
//        return false;
//    }
//}


function checkwhitespace(e, id) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    var len = document.getElementById(id).value.length;
    //var curposition = getposition(id);
    var curposition;
    if (document.selection) {//Works for IE
        curposition = getposition(id);
    }
    else {//Works for FireFox, Chrome, Netscape
        var xyz = document.getElementById(id);
        curposition = getCaret(xyz);
    }
    var txt = document.getElementById(id).value;
    if (Number(unicode) == 32 && Number(curposition) == 0) {
        return false;
    }
    else {
        if (Number(unicode) == 32 && txt.toString().charCodeAt(curposition - 1) == 32) {
            return false;
        }
        else {
            return true;
        }
    }
}

function keyfalse(e, id) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if ((unicode < 48 || unicode > 57) && (unicode < 97 || unicode > 122)) {
        return false;
    }
    else {
        return true;
    }
}

function getCaret(el) {
    if (el.selectionStart) {
        return el.selectionStart;
    } else if (document.selection) {
        el.focus();
        var r = document.selection.createRange();
        if (r == null) {
            return 0;
        }
        var re = el.createTextRange(),
                    rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);

        return rc.text.length;
    }
    return 0;
}

function getposition(id) {
    var txt1 = document.getElementById(id);

    var currentRange = document.selection.createRange();
    var workRange = currentRange.duplicate();
    txt1.select();
    var allRange = document.selection.createRange();
    var len = 0;

    while (workRange.compareEndPoints("StartToStart", allRange) > 0) {
        workRange.moveStart("character", -1);
        len++;
    }

    currentRange.select();

    return len;
}
function clearifbackspace(e, id) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (Number(unicode) == 8) {
        document.getElementById(id).value = "";
        return true;
    }
    else if (Number(unicode) == 9) {
        return true;
    }
    else {
        return false;
    }
}
function checkPasswordLength(x) {

    var txt = document.getElementById(x).value;
    if (txt.length == 0)
        return false;

    var s, a, n;
    for (var i = 0; i < txt.length; i++) {
        var unicode = Number(txt.charCodeAt(i));
        if ((unicode > 32 && unicode < 48) || (unicode > 57 && unicode < 65) || (unicode > 90 && unicode < 97) || (unicode > 122 && unicode < 127)) {
            s = 1;
        }
        if (unicode > 47 && unicode < 58) {
            n = 1;
        }
        if (unicode > 64 && unicode < 91) {
            a = 1;
        }
    }
    if (s == 1 && a == 1 && n == 1) {
        if (document.getElementById(x).value.length > 0 && document.getElementById(x).value.length < 6) {
            alert("Password length should be minimum 6 Characters", "Alert Dialog");
            document.getElementById(x).value = "";
            document.getElementById(x).focus();
        }
    }
    else if (document.getElementById(x).value.length > 0 && document.getElementById(x).value.length < 6) {
        alert("Password length should be minimum 6 Characters", "Alert Dialog");
        document.getElementById(x).value = "";
        document.getElementById(x).focus();
    }
    else {
        alert('Your password should contain atleast 1 Special character, 1 numeric and 1 Capital letter', "Alert Dialog");
        document.getElementById(x).value = "";
        document.getElementById(x).focus();
    }
    blurtxt(x);
}

function checkPasswordLengthnoJQueryAlert(x) {

    var txt = document.getElementById(x).value;
    if (txt.length == 0)
        return false;

    var s, a, n;
    for (var i = 0; i < txt.length; i++) {
        var unicode = Number(txt.charCodeAt(i));
        if ((unicode > 32 && unicode < 48) || (unicode > 57 && unicode < 65) || (unicode > 90 && unicode < 97) || (unicode > 122 && unicode < 127)) {
            s = 1;
        }
        if (unicode > 47 && unicode < 58) {
            n = 1;
        }
        if (unicode > 64 && unicode < 91) {
            a = 1;
        }
    }
    if (s == 1 && a == 1 && n == 1) {
        if (document.getElementById(x).value.length > 0 && document.getElementById(x).value.length < 6) {
            alert("Password length should be minimum 6 Characters");
            document.getElementById(x).value = "";
            document.getElementById(x).focus();
        }
    }
    else if (document.getElementById(x).value.length > 0 && document.getElementById(x).value.length < 6) {
        alert("Password length should be minimum 6 Characters");
        document.getElementById(x).value = "";
        document.getElementById(x).focus();
    }
    else {
        alert('Your password should contain atleast 1 Special character, 1 numeric and 1 Capital letter');
        document.getElementById(x).value = "";
        document.getElementById(x).focus();
    }
    blurtxt(x);
}
 function checkEmailvalidation(obj) {
     var emailStr = obj.value;
     if (emailStr.length == 0)
         return false;

     var checkTLD = 1;
     var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
     var emailPat = /^(.+)@(.+)$/;
     var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
     var validChars = "\[^\\s" + specialChars + "\]";
     var quotedUser = "(\"[^\"]*\")";
     var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
     var atom = validChars + '+';
     var word = "(" + atom + "|" + quotedUser + ")";
     var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
     var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
     var matchArray = emailStr.match(emailPat);
     if (matchArray == null) {
         alert("You must supply a valid email address.");
         obj.value = "";
         obj.focus();
         return false;
     }
     var user = matchArray[1];
     var domain = matchArray[2];
     for (i = 0; i < user.length; i++) {
         if (user.charCodeAt(i) > 127 || user.charCodeAt(0) == 95 || (user.charCodeAt(0) > 47 && user.charCodeAt(0) < 58)) {
             alert("The supplied email user name contains invalid characters.");
             obj.value = "";
             obj.focus();
             return false;
         }
     }

     for (i = 0; i < domain.length; i++) {
         if (domain.charCodeAt(i) > 127 || domain.charCodeAt(i) == 95) {
             alert("The supplied email domain contains invalid characters.");
             obj.value = "";
             obj.focus();
             return false;
         }
     }
     if (user.match(userPat) == null) {
       alert("The supplied email address contains invalid characters.");
         obj.value = "";
         obj.focus();
         return false;
     }
     var IPArray = domain.match(ipDomainPat);
     if (IPArray != null) {
         for (var i = 1; i <= 4; i++) {
             if (IPArray[i] > 255) {
                 alert("The supplied email IP address is invalid.");
                 obj.value = "";
                 obj.focus();
                 return false;
             }
         }
         return true;
     }
     var atomPat = new RegExp("^" + atom + "$");
     var domArr = domain.split(".");
     var len = domArr.length;
     for (i = 0; i < len; i++) {
         if (domArr[i].search(atomPat) == -1) {
             alert("The domain name does not seem to be valid.");
             obj.value = "";
             obj.focus();
             return false;
         }
     }
     if (checkTLD && domArr[domArr.length - 1].length != 2 && domArr[domArr.length - 1].toLowerCase().search(knownDomsPat) == -1) {
         alert("The supplied email address must end in a well known domain or two letter " + "country code.");
         obj.value = "";
         obj.focus();
         return false;
     }
     if (len < 2) {
         alert("The supplied email address is missing a hostname.");
         obj.value = "";
         obj.focus();
         return false;
     }
     return true;
 }

function checkEmail(obj) {
    var emailStr = obj.value;
    if (emailStr.length == 0)
        return false;

    var checkTLD = 1;
    var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
    var emailPat = /^(.+)@(.+)$/;
    var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
    var matchArray = emailStr.match(emailPat);
    if (matchArray == null) {
        jAlert("You must supply a valid email address.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var user = matchArray[1];
    var domain = matchArray[2];
    for (i = 0; i < user.length; i++) {
        if (user.charCodeAt(i) > 127 || user.charCodeAt(0) == 95 || (user.charCodeAt(0) > 47 && user.charCodeAt(0) < 58)) {
            jAlert("The supplied email user name contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }

    for (i = 0; i < domain.length; i++) {
        if (domain.charCodeAt(i) > 127 || domain.charCodeAt(i) == 95) {
            jAlert("The supplied email domain contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (user.match(userPat) == null) {
        jAlert("The supplied email address contains invalid characters.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var IPArray = domain.match(ipDomainPat);
    if (IPArray != null) {
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                jAlert("The supplied email IP address is invalid.", "Alert Dialog", obj);
                obj.value = "";
                obj.focus();
                return false;
            }
        }
        return true;
    }
    var atomPat = new RegExp("^" + atom + "$");
    var domArr = domain.split(".");
    var len = domArr.length;
    for (i = 0; i < len; i++) {
        if (domArr[i].search(atomPat) == -1) {
            jAlert("The domain name does not seem to be valid.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (checkTLD && domArr[domArr.length - 1].length != 2 && domArr[domArr.length - 1].toLowerCase().search(knownDomsPat) == -1) {
        jAlert("The supplied email address must end in a well known domain or two letter " + "country code.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    if (len < 2) {
        jAlert("The supplied email address is missing a hostname.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    return true;
}

function checkEmail1(obj) {
    var emailStr = obj.value;
    if (emailStr.length == 0)
        return false;

    var checkTLD = 1;
    var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
    var emailPat = /^(.+)@(.+)$/;
    var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
    var matchArray = emailStr.match(emailPat);
    if (matchArray == null) {
        jAlert("You must supply a valid email address.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var user = matchArray[1];
    var domain = matchArray[2];
    for (i = 0; i < user.length; i++) {
        if (user.charCodeAt(i) > 127 || user.charCodeAt(0) == 95 || (user.charCodeAt(0) > 47 && user.charCodeAt(0) < 58)) {
            jAlert("The supplied email user name contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }

    for (i = 0; i < domain.length; i++) {
        if (domain.charCodeAt(i) > 127 || domain.charCodeAt(i) == 95) {
            jAlert("The supplied email domain contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (user.match(userPat) == null) {
        jAlert("The supplied email address contains invalid characters.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var IPArray = domain.match(ipDomainPat);
    if (IPArray != null) {
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                jAlert("The supplied email IP address is invalid.", "Alert Dialog", obj);
                obj.value = "";
                obj.focus();
                return false;
            }
        }
        return true;
    }
    var atomPat = new RegExp("^" + atom + "$");
    var domArr = domain.split(".");
    var len = domArr.length;
    for (i = 0; i < len; i++) {
        if (domArr[i].search(atomPat) == -1) {
            jAlert("The domain name does not seem to be valid.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (checkTLD && domArr[domArr.length - 1].length != 2 && domArr[domArr.length - 1].toLowerCase().search(knownDomsPat) == -1) {
        jAlert("The supplied email address must end in a well known domain or two letter " + "country code.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    if (len < 2) {
        jAlert("The supplied email address is missing a hostname.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    return true;
}
// this email verfication script for quick search  Strart
function checkEmailNojqueyalert(obj) {
    var emailStr = obj.value;
    if (emailStr.length == 0)
        return false;

    var checkTLD = 1;
    var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
    var emailPat = /^(.+)@(.+)$/;
    var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
    var matchArray = emailStr.match(emailPat);
    if (matchArray == null) {
        alert("You must supply a valid email address.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var user = matchArray[1];
    var domain = matchArray[2];
    for (i = 0; i < user.length; i++) {
        if (user.charCodeAt(i) > 127 || user.charCodeAt(0) == 95 || (user.charCodeAt(0) > 47 && user.charCodeAt(0) < 58)) {
            alert("The supplied email user name contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }

    for (i = 0; i < domain.length; i++) {
        if (domain.charCodeAt(i) > 127 || domain.charCodeAt(i) == 95) {
            alert("The supplied email domain contains invalid characters.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (user.match(userPat) == null) {
        alert("The supplied email address contains invalid characters.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    var IPArray = domain.match(ipDomainPat);
    if (IPArray != null) {
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                alert("The supplied email IP address is invalid.", "Alert Dialog", obj);
                obj.value = "";
                obj.focus();
                return false;
            }
        }
        return true;
    }
    var atomPat = new RegExp("^" + atom + "$");
    var domArr = domain.split(".");
    var len = domArr.length;
    for (i = 0; i < len; i++) {
        if (domArr[i].search(atomPat) == -1) {
            alert("The domain name does not seem to be valid.", "Alert Dialog", obj);
            obj.value = "";
            obj.focus();
            return false;
        }
    }
    if (checkTLD && domArr[domArr.length - 1].length != 2 && domArr[domArr.length - 1].toLowerCase().search(knownDomsPat) == -1) {
        alert("The supplied email address must end in a well known domain or two letter " + "country code.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    if (len < 2) {
        alert("The supplied email address is missing a hostname.", "Alert Dialog", obj);
        obj.value = "";
        obj.focus();
        return false;
    }
    return true;
}
/// end
/*Watermark for dropdown-start*/
function Watermark4DropDown(objid) {
    try {
        var ddlLength = $('#' + objid + ' option:selected').val();
        if (ddlLength > 0) {
            $('#' + objid + '').removeClass('txtWaterMark');
        }
        else {
            $('#' + objid + '')[0][0].className = "txtWaterMark";
        }
    }
    catch (Err) {
    }
}
/*Watermark for dropdown-End*/

/*Restrict backspace to navigate to page back*/
function restictaccess(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (unicode == 9) {
        return true;
    }
    else {
        return false;
    }
}


function TicketReply(id, value) {
    var a = id.replace("Reply", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("ReplyTicket.aspx?TicketID=" + TicketID + "&Page=" + value);

}
function TicketDelete(id, value) {
    if (confirm("Do you want to delete this ticket?")) {
        var a = id.replace("Delete", "TicketID");
        var TicketID = document.getElementById(a).innerHTML;
        location.href = ("DeleteTicket.aspx?TicketID=" + TicketID + "&Page=" + value);
    }
    else {
        return false;
    }
}
function TicketClose(id, value) {
    var a = id.replace("Close", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("CloseTicket.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function TicketEdit(id, value) {
    var a = id.replace("Edit", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("EditTicket.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function TicketAssignReassign(id, value) {
    var a = id.replace("AssignReassign", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("AssignReassignTicket.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function TicketInternalMemo(id, value) {
    var a = id.replace("InternalMemo", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("InternalMemo.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function TicketOutgoingCall(id, value) {
    var a = id.replace("OutgoingCall", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("OutgoingCall.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function TicketIncomingCall(id, value) {
    var a = id.replace("IncomingCall", "TicketID");
    var TicketID = document.getElementById(a).innerHTML;
    location.href = ("IncomingCall.aspx?TicketID=" + TicketID + "&Page=" + value);
}
function ViewTicket(id, value) {
    var TicketID = document.getElementById(id).innerHTML;
    location.href = ("ViewTicket.aspx?TicketID=" + TicketID + "&Page=" + value);
}

function ViewProfile(id) {
    var profileID = document.getElementById(id).innerHTML;
    window.open("../SearchResult/Viewfullprofile.aspx?ProfileID=" + profileID, "self", 'top=0,left=0,width=600,height=560, status=no,resizable=yes,scrollbars=yes');
}
    