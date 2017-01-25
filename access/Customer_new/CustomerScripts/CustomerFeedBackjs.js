
ddsmoothmenu.init({
    mainmenuid: "smoothmenu1",
    orientation: 'h',
    classname: 'ddsmoothmenu',
    contentsource: "markup"
})



function RefreshImage() {

    var captcha = $find("<%=Captcha1.ClientID %>");

    document.location = $get(captcha.get_id() + "_CaptchaLinkButton").href;
    alert(1);
}

function RemoveSpecialChar(txtcomments) {
    if (txtcomments.value != '' && txtcomments.value.match(/^[\w ]+$/) == null) {
        txtcomments.value = txtcomments.value.replace(/[\W]/g, '');
        alert("Special Characters Not Allowed");
    }

    return false;
}
