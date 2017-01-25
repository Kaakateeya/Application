﻿
var MaritalStatusArr = [{ "label": "Unmarried", "title": "Unmarried", "value": 43 },
    { "label": "Divorce", "title": "Divorce", "value": 44 },
    { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
    { "label": "Separated", "title": "Separated", "value": 46 },
    { "label": "Null And Void", "title": "Null And Void", "value": 565 }

];


var ReligionArr = [{ "label": "--Select--", "title": "--select--", "value": "0" },
    { "label": "Hindu", "title": "Hindu", "value": 1 },
    { "label": "Christian", "title": "Christian", "value": 2 },
    { "label": "Muslim", "title": "Muslim", "value": 3 },
    { "label": "Other", "title": "Other", "value": 6 },
    { "label": "Catholic", "title": "Catholic", "value": 9 },
    { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
    { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }];

var MothertongueArr = [{ "label": "Telugu", "title": "Telugu", "value": 1 },
    { "label": "Tamil", "title": "Tamil", "value": 2 },
    { "label": "Kannada", "title": "Kannada", "value": 3 },
    { "label": "Hindi", "title": "Hindi", "value": 4 },
    { "label": "Punjabi", "title": "Punjabi", "value": 5 },
    { "label": "Urdu", "title": "Urdu", "value": 6 },
    { "label": "Lambadi", "title": "Lambadi", "value": 7 },
    { "label": "Marati", "title": "Marati", "value": 8 },
    { "label": "Gujaraathi", "title": "Gujaraathi", "value": 9 },
    { "label": "English", "title": "English", "value": 10 },
    { "label": "Malayalam", "title": "Malayalam", "value": 11 },
    { "label": "Saurashtra", "title": "Saurashtra", "value": 12 }, { "label": "Orea", "title": "Orea", "value": 13 },
    { "label": "telugu", "title": "telugu", "value": 14 }];

var HeightArr = [{ "label": "--Select--", "title": "--select--", "value": "0" },
    { "label": "4'0 in - 122 cms", "title": "4'0 in - 122 cms", "value": 1 }, { "label": "4'1 in - 124 cms", "title": "4'1 in - 124 cms", "value": 2 },
    { "label": "4'2 in - 127 cms", "title": "4'2 in - 127 cms", "value": 3 },
    { "label": "4'3 in - 130 cms", "title": "4'3 in - 130 cms", "value": 4 }, { "label": "4'4 in - 132 cms", "title": "4'4 in - 132 cms", "value": 5 },
    { "label": "4'5 in - 135 cms", "title": "4'5 in - 135 cms", "value": 6 }, { "label": "4'6 in - 137 cms", "title": "4'6 in - 137 cms", "value": 7 },
    { "label": "4'7 in - 140 cms", "title": "4'7 in - 140 cms", "value": 8 },
    { "label": "4'8 in - 142 cms", "title": "4'8 in - 142 cms", "value": 9 },
    { "label": "4'9 in - 144 cms", "title": "4'9 in - 144 cms", "value": 10 }, { "label": "4'10 in - 147 cms", "title": "4'10 in - 147 cms", "value": 11 },
    { "label": "4'11 in - 150 cms", "title": "4'11 in - 150 cms", "value": 12 }, { "label": "5'0 in - 152 cms", "title": "5'0 in - 152 cms", "value": 13 },
    { "label": "5'1 in - 155 cms", "title": "5'1 in - 155 cms", "value": 14 }, { "label": "5'2 in - 157 cms", "title": "5'2 in - 157 cms", "value": 15 },
    { "label": "5'3 in - 160 cms", "title": "5'3 in - 160 cms", "value": 16 }, { "label": "5'4 in - 162 cms", "title": "5'4 in - 162 cms", "value": 17 },
    { "label": "5'5 in - 165 cms", "title": "5'5 in - 165 cms", "value": 18 }, { "label": "5'6 in - 167 cms", "title": "5'6 in - 167 cms", "value": 19 },
    { "label": "5'7 in - 170 cms", "title": "5'7 in - 170 cms", "value": 20 }, { "label": "5'8 in - 172 cms", "title": "5'8 in - 172 cms", "value": 21 },
    { "label": "5'9 in - 175 cms", "title": "5'9 in - 175 cms", "value": 22 }, { "label": "5'10 in - 177 cms", "title": "5'10 in - 177 cms", "value": 23 },
    { "label": "5'11 in - 180 cms", "title": "5'11 in - 180 cms", "value": 24 }, { "label": "6'0 in - 183 cms", "title": "6'0 in - 183 cms", "value": 25 },
    { "label": "6'1 in - 185 cms", "title": "6'1 in - 185 cms", "value": 26 }, { "label": "6'2 in - 188 cms", "title": "6'2 in - 188 cms", "value": 27 },
    { "label": "6'3 in - 190 cms", "title": "6'3 in - 190 cms", "value": 28 }, { "label": "6'4 in - 193 cms", "title": "6'4 in - 193 cms", "value": 29 },
    { "label": "6'5 in - 195 cms", "title": "6'5 in - 195 cms", "value": 30 }, { "label": "6'6 in - 198 cms", "title": "6'6 in - 198 cms", "value": 31 },
    { "label": "6'7 in - 200 cms", "title": "6'7 in - 200 cms", "value": 32 }, { "label": "6'8 in - 203 cms", "title": "6'8 in - 203 cms", "value": 33 },
    { "label": "6'9 in - 205 cms", "title": "6'9 in - 205 cms", "value": 34 }, { "label": "6'10 in - 208 cms", "title": "6'10 in - 208 cms", "value": 35 },
    { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 }, { "label": "7'0 in - 213 cms\t", "title": "7'0 in - 213 cms\t", "value": 37 },
    { "label": "7'1 in - 215 cms\t", "title": "7'1 in - 215 cms\t", "value": 38 }, { "label": "7'2 in - 218 cms\t", "title": "7'2 in - 218 cms\t", "value": 39 }];
var AgeArr = Age();


var educationcate = [{ "label": "Bachelors in Engineering", "title": "Bachelors in Engineering", "value": 1 },
    { "label": "Bachelors in Degree", "title": "Bachelors in Degree", "value": 2 },
    { "label": "Diploma", "title": "Diploma", "value": 3 },
    { "label": "Doctorate/phd", "title": "Doctorate/phd", "value": 4 },
    { "label": "Masters in Engineering", "title": "Masters in Engineering", "value": 5 },
    { "label": "Bachelors in Medicine", "title": "Bachelors in Medicine", "value": 6 },
    { "label": "Masters in Degree", "title": "Masters in Degree", "value": 7 },
    { "label": "Finance - ICWAI/CA/CS", "title": "Finance - ICWAI/CA/CS", "value": 10 },
    { "label": "Union Public Service Commision-Civil Services", "title": "Union Public Service Commision-Civil Services", "value": 11 },
    { "label": "Masters in Medicine", "title": "Masters in Medicine", "value": 13 },
    { "label": "Below Graduation", "title": "Below Graduation", "value": 15 },
    { "label": "Not given", "title": "Not given", "value": 21 },
    { "label": "Other", "title": "Other", "value": 22 }];
var visastatus = [{ "label": "Student Visa", "title": "Student Visa", "value": 284 },
    { "label": "Work Permit", "title": "Work Permit", "value": 285 },
    { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
    { "label": "Citizen", "title": "Citizen", "value": 521 },
    { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
    { "label": "Green Card", "title": "Green Card", "value": 553 }];

var stars = [{ "label": "Bharani", "title": "Bharani", "value": 2 },
    { "label": "Krithika", "title": "Krithika", "value": 3 },
    { "label": "Rohini", "title": "Rohini", "value": 4 },
    { "label": "Mrigasira", "title": "Mrigasira", "value": 5 },
    { "label": "Arudra", "title": "Arudra", "value": 6 },
    { "label": "Punarvasu", "title": "Punarvasu", "value": 7 },
    { "label": "Pushyami", "title": "Pushyami", "value": 8 },
    { "label": "Aslesha", "title": "Aslesha", "value": 9 },
    { "label": "Makha", "title": "Makha", "value": 10 },
    { "label": "Pubba", "title": "Pubba", "value": 11 },
    { "label": "Utharapalguni", "title": "Utharapalguni", "value": 12 },
    { "label": "Hastham", "title": "Hastham", "value": 13 },
    { "label": "Chitta", "title": "Chitta", "value": 14 },
    { "label": "Swathi", "title": "Swathi", "value": 15 },
    { "label": "Vishaka", "title": "Vishaka", "value": 16 },
    { "label": "Anuradha", "title": "Anuradha", "value": 18 },
    { "label": "Jesta", "title": "Jesta", "value": 19 },
    { "label": "Moola", "title": "Moola", "value": 20 },
    { "label": "Poorvashada", "title": "Poorvashada", "value": 21 },
    { "label": "Utharashada", "title": "Utharashada", "value": 22 },
    { "label": "Sravanam", "title": "Sravanam", "value": 23 },
    { "label": "Dhanishta", "title": "Dhanishta", "value": 24 },
    { "label": "Sathabisham", "title": "Sathabisham", "value": 25 },
    { "label": "Poorvabadra", "title": "Poorvabadra", "value": 26 },
    { "label": "Uthirabadra", "title": "Uthirabadra", "value": 27 },
    { "label": "Revathi", "title": "Revathi", "value": 28 },
    { "label": "Anuradha", "title": "Anuradha", "value": 30 },
    { "label": "Arudra", "title": "Arudra", "value": 31 },
    { "label": "Ashwini", "title": "Ashwini", "value": 32 },
    { "label": "Aslesha", "title": "Aslesha", "value": 33 },
    { "label": "Chitra", "title": "Chitra", "value": 34 },
    { "label": "Dhanshita", "title": "Dhanshita", "value": 35 },
    { "label": "Hasta", "title": "Hasta", "value": 36 },
    { "label": "Jyehsta", "title": "Jyehsta", "value": 37 },
    { "label": "Kritika", "title": "Kritika", "value": 38 },
    { "label": "Magha", "title": "Magha", "value": 39 },
    { "label": "Moola", "title": "Moola", "value": 40 },
    { "label": "Mrigasira", "title": "Mrigasira", "value": 41 },
    { "label": "Poorvabhadra", "title": "Poorvabhadra", "value": 42 },
    { "label": "Poorvashadha", "title": "Poorvashadha", "value": 43 },
    { "label": "Punarvasu", "title": "Punarvasu", "value": 44 },
    { "label": "Poorvaphalguni", "title": "Poorvaphalguni", "value": 45 },
    { "label": "Pushya", "title": "Pushya", "value": 46 },
    { "label": "Satabisha", "title": "Satabisha", "value": 47 },
    { "label": "Sravana", "title": "Sravana", "value": 48 },
    { "label": "Swati", "title": "Swati", "value": 49 },
    { "label": "Uttarashadha", "title": "Uttarashadha", "value": 50 },
    { "label": "Uttarabhadrapada", "title": "Uttarabhadrapada", "value": 51 },
    { "label": "Uttaraphalguni", "title": "Uttaraphalguni", "value": 52 },
    { "label": "Visakha", "title": "Visakha", "value": 53 },
    { "label": "Uttara", "title": "Uttara", "value": 54 },
    { "label": "Uttarabhadra", "title": "Uttarabhadra", "value": 55 }];
function StaticBind(dropdownname, data) {
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true
    };

    if (data.length > 0) {

        $('#' + dropdownname + '').multiselect('dataprovider', data);
        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}
function Age() {
    var test = [{ label: "--Select--", title: "--select--", value: "0" }];
    for (var i = 18; i < 78; i++) {
        test.push({ label: i + ' years', title: i + ' years', value: i });
    }
    return test;
}


 var RegionArr = [
    { "label": "Andhra Pradesh", "title": "Andhra Pradesh", "value": 408 },
    { "label": "Tamil Nadu", "title": "Tamil Nadu", "value": 409 },
    { "label": "karnataka", "title": "karnataka", "value": 410 }];