function validateKgs(x) {
    var xyz = checklbls(x);
    if (xyz == 1) {
        var value = x.value;
        if (value.length > 0) {
            if (value >= 30 && value <= 150) {
                return true;
            }
            else {
                jAlert("Weight to be given in KG", 'Alert Dialog', x);
                document.getElementById("<%= txtlbs.ClientID %>").value = "";
                document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
                x.focus();
                return false;
            }
        }
    }
    else {
        return false;
    }
}
function checklbls(x) {
    var value = x.value;
    if (value.length > 0) {
        var lbs = value * 2.2;
        lbs = roundVal(lbs);
        document.getElementById("<%= txtlbs.ClientID %>").value = lbs;
        if (lbs.toString() == 'NaN') {
            return 0;
        }
        else
            return 1;
    }
    else {
        return 1;
    }
}
function converttolbs(x) {
    var value = document.getElementById(x).value;
    document.getElementById("<%= txtlbs.ClientID %>").value = "";
    if (value.length > 0) {
        var lbs = value * 2.2;
        lbs = roundVal(lbs);
        document.getElementById("<%= txtlbs.ClientID %>").value = lbs;
        if (lbs.toString() == 'NaN') {
            jAlert("invalid Number", 'Alert Dialog', x);
            document.getElementById("<%= txtlbs.ClientID %>").value = "";
            document.getElementById(x).value = "";
        }
        else {
            //                if (Number(value) > 150) {
            //                    alert('value exceeded the range');
            //                    return false;
            //                }
        }
    }
    else {
        document.getElementById("<%= txtlbs.ClientID %>").value = "";
        document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
    }
}

function validateLbs(x) {
    var xyz = checkKgls(x);
    if (xyz == 1) {
        var value = x.value;
        if (value.length > 0) {
            if (value >= 66 && value <= 330) {
                return true;
            }
            else {
                jAlert("Weight to be given in KG", 'Alert Dialog', x);
                document.getElementById("<%= txtlbs.ClientID %>").value = "";
                document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
                x.focus();
                return false;
            }
        }
    }
    else {
        return false;
    }
}

function checkKgls(x) {
    var value = x.value;
    if (value.length > 0) {
        var lbs = value / 2.2;
        lbs = roundVal(lbs);
        document.getElementById("<%= txtBWKgs.ClientID %>").value = lbs;
        if (lbs.toString() == 'NaN') {
            return 0;
        }
        else
            return 1;
    }
    else {
        return 1;
    }
}

function converttokgs(x) {
    var value = document.getElementById(x).value;
    document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
    if (value.length > 0) {
        var kgs = value / 2.2;
        kgs = roundVal(kgs);
        document.getElementById("<%= txtBWKgs.ClientID %>").value = kgs;
        if (kgs.toString() == 'NaN') {
            jAlert("invalid Number", 'Alert Dialog', x);
            document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
            document.getElementById(x).value = "";
        }
    }
    else {
        document.getElementById("<%= txtBWKgs.ClientID %>").value = "";
        document.getElementById("<%= txtlbs.ClientID %>").value = "";
    }
}
function roundVal(val) {
    var dec = 2;
    var result = Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}
