'use strict';
app.filter('dateFilter', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 === 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
app.animation('.fade123', function() {
    return {

        leave: function(element, done) {
            $(element).fadeOut(1000, function() {
                done();
            });
        },
        move: function(element, done) {
            element.css('display', 'none');
            $(element).slideDown(500, function() {
                done();
            });
        }
    };
});
app.constant('arrayConstants', {
    'MaritalStatus': [

        { "label": "Unmarried", "title": "Unmarried", "value": 43 },
        { "label": "Divorce", "title": "Divorce", "value": 44 },
        { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
        { "label": "Separated", "title": "Separated", "value": 46 }
    ],
    "height": [

        { "label": "--select--", "title": "--select--", "value": 0 },
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
        { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 }, { "label": "7'0 in - 213 cms", "title": "7'0 in - 213 cms", "value": 37 },
        { "label": "7'1 in - 215 cms", "title": "7'1 in - 215 cms\t", "value": 38 }, { "label": "7'2 in - 218 cms", "title": "7'2 in - 218 cms", "value": 39 }
    ],
    "Religion": [
        { "label": "--select--", "title": "--select--", "value": 0 },
        { "label": "Hindu", "title": "Hindu", "value": 1 },
        { "label": "Christian", "title": "Christian", "value": 2 },
        { "label": "Muslim", "title": "Muslim", "value": 3 },
        { "label": "Other", "title": "Other", "value": 6 },
        { "label": "Catholic", "title": "Catholic", "value": 9 },
        { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
        { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
    ],
    "Mothertongue": [

        { "label": "Telugu", "title": "Telugu", "value": 1 },
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
        { "label": "Saurashtra", "title": "Saurashtra", "value": 12 },
        { "label": "Orea", "title": "Orea", "value": 13 },
        { "label": "telugu", "title": "telugu", "value": 14 }
    ],
    "Mothertongueselect": [
        { "label": "--select--", "title": "--select--", "value": 0 },
        { "label": "Telugu", "title": "Telugu", "value": 1 },
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
        { "label": "Saurashtra", "title": "Saurashtra", "value": 12 },
        { "label": "Orea", "title": "Orea", "value": 13 },
        { "label": "telugu", "title": "telugu", "value": 14 }
    ],
    "educationcategory": [

        { "label": "Bachelors in Engineering", "title": "Bachelors in Engineering", "value": 1 },
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
        { "label": "Other", "title": "Other", "value": 22 }
    ],
    "visastatus": [

        { "label": "Student Visa", "title": "Student Visa", "value": 284 },
        { "label": "Work Permit", "title": "Work Permit", "value": 285 },
        { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
        { "label": "Citizen", "title": "Citizen", "value": 521 },
        { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
        { "label": "Green Card", "title": "Green Card", "value": 553 }
    ],
    "stars": [

        { "label": "Bharani", "title": "Bharani", "value": 2 },
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
        { "label": "Uttarabhadra", "title": "Uttarabhadra", "value": 55 }
    ],
    "Priority": [
        { "label": "--select--", "title": "--select--", "value": 0 },
        { "label": "HighPriority", "title": "HighPriority", "value": 69 },
        { "label": "MediumPriority", "title": "MediumPriority", "value": 70 },
        { "label": "LowPriority", "title": "LowPriority", "value": 71 },
    ],
    "catgory": [
        { "label": "--select--", "title": "--select--", "value": 0 },
        { "label": "Login", "title": "Login", "value": 374 },
        { "label": "Siteerror", "title": "Siteerror", "value": 375 },
        { "label": "Feed Back", "title": "Feed Back", "value": 376 },
        { "label": "Registration", "title": "Registration", "value": 401 },
        { "label": "Fees Details", "title": "Fees Details", "value": 402 },
        { "label": "Success Stories", "title": "Success Stories", "value": 403 },
        { "label": "Other", "title": "Other", "value": 404 },
        { "label": "Forgot Password", "title": "Forgot Password", "value": 405 },
        { "label": "Billings", "title": "Billings", "value": 406 },
        { "label": "Photos", "title": "Photos", "value": 407 },
        { "label": "MatchMeeting", "title": "MatchMeeting", "value": 430 },
        { "label": "MatchFollowup", "title": "MatchFollowup", "value": 460 },
        { "label": "Reviews", "title": "Reviews", "value": 461 },
        { "label": "Marketing", "title": "Marketing", "value": 462 },
        { "label": "SettledDeletedProfiles", "title": "SettledDeletedProfiles", "value": 474 },
        { "label": "Report Abuse", "title": "Report Abuse", "value": 515 },

    ],
    "region": [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Telangana", "title": "Telangana", "value": 1 },
        { "label": "Andhra Pradesh", "title": "Andhra Pradesh", "value": 408 },
        { "label": "Tamilnadu", "title": "Tamilnadu", "value": 409 },
        { "label": "Karnataka", "title": "Karnataka", "value": 410 },
        { "label": "Panducherry", "title": "Panducherry", "value": 2 },

    ],
    'bodyType': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Athletic", "title": "Athletic", "value": 21 },
        { "label": "Average", "title": "Average", "value": 22 },
        { "label": "Slim", "title": "Slim", "value": 23 },
        { "label": "Heavy", "title": "Heavy", "value": 24 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 37 }
    ],
    'bloodGroup': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "O+", "title": "O+", "value": 61 },
        { "label": "A+", "title": "A+", "value": 63 },
        { "label": "B+", "title": "B+", "value": 64 },
        { "label": "AB+", "title": "AB+", "value": 65 },
        { "label": "O-", "title": "O-", "value": 66 },
        { "label": "A-", "title": "A-", "value": 67 },
        { "label": "B-", "title": "B-", "value": 68 }
    ],
    'healthCondition': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "No Health Problems", "title": "No Health Problems", "value": 220 },
        { "label": "HIV", "title": "HIV", "value": 222 },
        { "label": "Diabetes", "title": "Diabetes", "value": 223 },
        { "label": "LowBP", "title": "LowBP", "value": 224 },
        { "label": "HighBP", "title": "HighBP", "value": 225 },
        { "label": "Heart Ailments", "title": "Heart Ailments", "value": 226 }
    ],
    'lagnam': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Dhansu", "title": "Dhansu", "value": 1 },
        { "label": "Kanya", "title": "Kanya", "value": 2 },
        { "label": "Karkatakam", "title": "Karkatakam", "value": 3 },
        { "label": "Khumbam", "title": "Khumbam", "value": 4 },
        { "label": "Makhram", "title": "Makhram", "value": 5 },
        { "label": "Meenam", "title": "Meenam", "value": 6 },
        { "label": "Mesham", "title": "Mesham", "value": 7 },
        { "label": "Midhunam", "title": "Midhunam", "value": 8 },
        { "label": "Simham", "title": "Simham", "value": 9 },
        { "label": "Thula", "title": "Thula", "value": 10 },
        { "label": "Vrichikam", "title": "Vrichikam", "value": 11 },
        { "label": "Vrushabam", "title": "Vrushabam", "value": 12 }
    ],
    'ZodaicSign': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "mesha", "title": "mesha", "value": 527 },
        { "label": "vrushaba", "title": "vrushaba", "value": 528 },
        { "label": "midhuna", "title": "midhuna", "value": 529 },
        { "label": "karkataka", "title": "karkataka", "value": 530 },
        { "label": "Simha", "title": "Simha", "value": 531 },
        { "label": "Kanya", "title": "Kanya", "value": 532 },
        { "label": "Thula", "title": "Thula", "value": 533 },
        { "label": "Vruchika", "title": "Vruchika", "value": 534 },
        { "label": "Dhanu", "title": "Dhanu", "value": 535 },
        { "label": "Makara", "title": "Makara", "value": 536 },
        { "label": "Kumbha", "title": "Kumbha", "value": 537 },
        { "label": "Meena", "title": "Meena", "value": 538 },
    ],
    'paadam': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "1", "title": "1", "value": 304 },
        { "label": "2", "title": "2", "value": 305 },
        { "label": "3", "title": "3", "value": 306 },
        { "label": "4", "title": "4", "value": 539 },

    ],
    'familyStatus': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Lower Middle Class", "title": "Lower Middle Class", "value": 290 },
        { "label": "Middle Class", "title": "Middle Class", "value": 291 },
        { "label": "Upper Middle Class", "title": "Upper Middle Class", "value": 292 },
        { "label": "Rich", "title": "Rich", "value": 293 },
        { "label": "Affluent", "title": "Affluent", "value": 294 },
        { "label": "Others", "title": "Others", "value": 516 },
        { "label": "High Class", "title": "High Class", "value": 517 }
    ],
    'RelationshipType': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Friend", "title": "Friend", "value": 318 },
        { "label": "Relative", "title": "Relative", "value": 319 },
        { "label": "Not Given", "title": "Not Given", "value": 549 },

    ],
    'starLanguage': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
    ],
    'hereabout': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Search Engine', title: 'Search Engine', value: 481 },
        { label: 'Newspaper', title: 'Newspaper', value: 482 },
        { label: 'Magzine', title: 'Magzine', value: 483 },
        { label: 'Friend', title: 'Friend', value: 484 },
        { label: 'Email', title: 'Email', value: 485 },
        { label: 'No Answer', title: 'No Answer', value: 486 }
    ],
    'improveourwebsite': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Search', title: 'Search', value: 487 },
        { label: 'Registration', title: 'Registration', value: 488 },
        { label: 'Login', title: 'Login', value: 489 },
        { label: 'FAQ', title: 'FAQ', value: 490 },
        { label: 'About Us', title: 'About Us', value: 491 },
        { label: 'No Answer', title: 'No Answer', value: 492 }
    ],
    'prices': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Expensive', title: 'Expensive', value: 493 },
        { label: 'OK', title: 'OK', value: 494 },
        { label: 'Cheap', title: 'Cheap', value: 495 },
        { label: 'No comments', title: 'No comments', value: 496 },
        { label: 'No Answer', title: 'No Answer', value: 497 },
    ],
    'downloadtime': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Fast', title: 'Fast', value: 498 },
        { label: 'Average', title: 'Average', value: 499 },
        { label: 'Slow', title: 'Slow', value: 500 },
        { label: 'No Answer', title: 'No Answer', value: 501 },
    ],
    'yourratethesearch': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Valuable', title: 'Valuable', value: 507 },
        { label: 'Average', title: 'Average', value: 508 },
        { label: 'Bad', title: 'Bad', value: 509 },
        { label: 'No Answer', title: 'No Answer', value: 510 },
    ],
    'comparesites': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Better', title: 'Better', value: 502 },
        { label: 'Same', title: 'Same', value: 503 },
        { label: 'Bad', title: 'Bad', value: 504 },
        { label: 'No Answer', title: 'No Answer', value: 505 },
    ],
    'recomendedtofriends': [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Yes', title: 'Yes', value: 511 },
        { label: 'No', title: 'No', value: 512 },
        { label: 'No Answer', title: 'No Answer', value: 513 },
    ],
    'childStayingWith': [
        { "label": "--select-- ", "title": "--select--", "value": 0 },
        { "label": "Father", "title": "Father", "value": 39 },
        { "label": "Mother", "title": "Mother", "value": 40 },
        { "label": "YoungerBrother", "title": "YoungerBrother", "value": 41 },
        { "label": "ElderBrother", "title": "ElderBrother", "value": 42 },
        { "label": "Self", "title": "Self", "value": 283 },
        { "label": "YoungerSister", "title": "YoungerSister", "value": 321 },
        { "label": "ElderSister", "title": "ElderSister", "value": 322 },
        { "label": "FatherYoungerBrother", "title": "FatherYoungerBrother", "value": 323 },
        { "label": "FatherElderBrother", "title": "FatherElderBrother", "value": 324 },
        { "label": "FatherYoungerSister", "title": "FatherYoungerSister", "value": 325 },
        { "label": "FatherElderSister", "title": "FatherElderSister", "value": 326 },
        { "label": "MotherYoungerBrother", "title": "MotherYoungerBrother", "value": 327 },
        { "label": "MotherElderBrother", "title": "MotherElderBrother", "value": 328 },
        { "label": "MotherYoungerSister", "title": "MotherYoungerSister", "value": 329 },
        { "label": "MotherElderSister", "title": "MotherElderSister", "value": 320 },
        { "label": "Spouse", "title": "Spouse", "value": 334 },
        { "label": "XRelation", "title": "XRelation", "value": 554 },
        { "label": "GrandFather", "title": "GrandFather", "value": 556 },
        { "label": "GrandMother", "title": "GrandMother", "value": 557 },
        { "label": "SisterHusband", "title": "SisterHusband", "value": 558 },
        { "label": "Friend", "title": "Friend", "value": 559 },
        { "label": "Relative", "title": "Relative", "value": 560 },
        { "label": "Uncle", "title": "Uncle", "value": 561 },
        { "label": "Aunt", "title": "Aunt", "value": 562 }

    ],
    'Upgrade': "Upgrade online Membership"

});
app.constant('config', function() {
    return {
        dbPath: '',
        imagepath: '',
        select: 0
    };
});
app.directive("angularMultiselect", ["$injector", 'authSvc',
    'successstoriesdata', 'alert', '$timeout',
    function($injector, authSvc, successstoriesdata, alerts, timeout) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        return {
            restrict: "E",

            scope: {
                array: '=',
                type: '=',
                model: '=',
                castehideval: '@',
                id: '='
            },

            templateUrl: "templates/angualarMaterialmultiselect.html",
            link: function(scope, element, attrs) {
                scope.selectallMdl = false;
                scope.IDs = scope.id;
                scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null && scope.array.length > 0 ? scope.array : [];
                scope.Castehide = scope.array !== undefined && scope.array !== "" && scope.array !== null ? false : true;
                scope.Castehide = scope.castehideval === 'castehid' ? true : false;
                scope.$watch('array', function() {
                    scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null ? scope.array : [];
                });
                scope.$watch('model', function() {

                    if (scope.array !== undefined && scope.array !== "" && scope.array !== null && scope.array.length > 100 && scope.model !== undefined && scope.model !== "" && scope.model !== null && scope.model.length > 100) {
                        if (scope.model.length === scope.array.length) {
                            scope.model = null;
                        }
                    }
                });
                scope.directivechangeevent = function(model) {
                    scope.$emit('directivechangeevent', model, scope.type);
                };

                scope.applycolorsdirecive = function(value, id) {
                    var colors = "selectborderclass";
                    if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value.length > 0) {
                        colors = "selectborderclasscolor";
                        $('#' + id).next().find('button').addClass("bacg");
                    } else {
                        colors = "selectborderclass";
                        $('#' + id).next().find('button').removeClass("bacg");
                    }
                    return colors;
                };

            }
        };
    }
]);
app.factory('dependencybind', ['SelectBindServiceApp', function(SelectBindService) {
    var modalpopupopen;

    return {
        open: function(url, scope, uibModal) {
            modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope
            });
        },
        closepopup: function() {
            modalpopupopen.close();
        },
        listSelectedVal: function(val) {
            var str = null;
            if (val !== null) {
                if (angular.isString(val)) {
                    str = val === '' ? null : val;
                } else {
                    str = val.join(',');
                }
            }
            return str;
        },
        StateBind: function(parentval) {
            var stateArr = [];

            SelectBindService.stateSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return stateArr;
        },
        districtBind: function(parentval) {
            var disttrictArr = [];
            disttrictArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.districtSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    disttrictArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return disttrictArr;
        },
        cityBind: function(parentval) {
            var cityeArr = [];
            cityeArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.citySelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    cityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return cityeArr;
        },

        professionBind: function(parentval) {
            var professionArr = [];
            professionArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.ProfessionSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    professionArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return professionArr;
        },
        educationGroupBind: function(parentval) {
           
            var educationGroupArr = [];
            SelectBindService.EducationGroup(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationGroupArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationGroupArr;
        },
        educationSpeciakisationBind: function(parentval) {
            var educationSpecialArr = [];
            educationSpecialArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.EducationSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationSpecialArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationSpecialArr;
        },

        numbersBind: function(str, from, to) {
            var numArr = [];

            numArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            for (var i = from; i <= to; i++) {
                numArr.push({ "label": i + " " + str, "title": i + " " + str, "value": i });
            }
            return numArr;
        },
        numberBindWithZeros: function(str, from, to) {
            var numArr = [];
            var y;
            numArr.push({ "label": str, "title": str, "value": "" });
            for (var x = from; x <= to; x++) {
                if (x < 10)
                    y = ("0" + x);
                else
                    y = x;
                numArr.push({ "label": y, "title": y, "value": parseInt(y) });
            }
            return numArr;
        },
        starBind: function(parentval) {
            var starArr = [];
            SelectBindService.stars(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    starArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return starArr;
        },
        casteDepedency: function(parentval1, parentval2) {
         
            var casteArr = [];
            SelectBindService.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        },
        subCaste: function(parentval1) {
            var subcasteArr = [];
            subcasteArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.subCasteBind(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    subcasteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return subcasteArr;
        },
        branch: function(parentval1) {
            var branchArr = [];
            branchArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.branch(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    branchArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return branchArr;
        },
        showConfirm: function(ev, mdDialog, header, okTxt, cancelTxt) {

            var status = false;
            var confirm = mdDialog.confirm()
                .title(header)
                //.textContent('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                //.targetEvent(ev)
                .cancel(cancelTxt)
                .ok(okTxt);

            return confirm;

        },
        checkvals: function(val) {
            return (val !== undefined && val !== null && val !== '') ? true : false;
        }

    };

}]);
app.factory('alert', ['$mdDialog', '$uibModal', '$timeout', 'arrayConstants', function($mdDialog, uibModal, timeout, arrayConstants) {
    var modalinstance;
    return {
        open: function(msg, classname) {
            classname = classname || "success";
            toastr.options = {
                "closeButton": true,
                "debug": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": app.global.alertType,
                "preventDuplicates": false,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": 3000,
                "extendedTimeOut": 2000,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
                "onclick": null
            };
            switch (classname) {
                case 'success':
                    toastr.success(msg, "done");
                    break;
                case 'error':
                    toastr.error(msg, 'Oops');
                    break;
                case 'warning':
                    toastr.warning(msg, 'Alert');
                    break;
                case 'info':
                    toastr.info(msg, 'Info');
                    break;
                default:
                    toastr.success(msg, 'Done');
                    break;
            }
        },
        dynamicpopup: function(url, scope, uibModal, size) {
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size || 'lg'
            });
        },
        dynamicpopupclose: function() {
            modalinstance.close();
        },
        showloginpopup: function() {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,

            });
        },
        mddiologcancel: function() {
            $mdDialog.hide();
        },
        timeoutoldalerts: function(scope, cls, msg, time) {
            scope.typecls = cls;
            scope.msgs = msg === "upgrade" ? "<label style='color:maroon;'>Please Click Here To</label><a href='/UpgradeMembership'>" + "  " + arrayConstants.Upgrade + "</a>" : "<label>" + msg + "</label>";
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="{{typecls}}"><div class="modal-header"><a href="javascript:void(0);" ng-click="close();"><ng-md-icon icon="close" style="fill:#c73e5f" class="pull-right" size="20"></ng-md-icon></a><h4 class="modal-title"><center>Alert</center></h4></div></div><div class="modal-body" id="modalbodyID"><p ng-bind-html="msgs"></p></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close();">Close</button></div>',
                scope: scope
            });
            if (msg === "upgrade") {

            } else {
                timeout(function() {
                    modalinstance.close();
                }, time || 4500);
            }
            scope.close = function() {
                modalinstance.close();
            };
        }
    };
}]);
app.directive("forgotPassword", ['authSvc', "customerProfilesettings", "alert",
    '$mdDialog',
    function(authSvc, customerProfilesettings, alerts, $mdDialog) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        return {
            restrict: "E",
            scope: {
                arrayphotos: '='
            },
            templateUrl: "templates/forgotPasswordDirective.html",
            link: function(scope, element, attrs) {
                scope.showforgetpassword = function() {
                    $mdDialog.show({

                        templateUrl: 'forgetpassword.html',
                        parent: angular.element(document.body),
                        clickOutsideToClose: true,
                        scope: scope
                    });
                };

                scope.ValidateEmail = function(email) {
                    var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return expr.test(email);
                };
                scope.Validatnumber = function(num) {
                    var expr1 = /[0-9 -()+]+$/;
                    return expr1.test(num);
                };
                scope.validate = function(form) {

                    if ((form.txtforgetemail).indexOf("@") != -1) {

                        if (!scope.ValidateEmail(form.txtforgetemail)) {
                            form.txtforgetemail = '';
                            alert(" Please enter valid ProfileID/Email");
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        if (!scope.Validatnumber(form.txtforgetemail) || (form.txtforgetemail).length != 9) {
                            alert("Please enter valid ProfileID/Email");
                            form.txtforgetemail = '';
                            return false;

                        } else {
                            return true;
                        }

                    }
                };
                scope.cancel = function() {
                    $mdDialog.cancel();
                };
                scope.forgotpasswordsubmit = function(form) {
                    if (scope.validate(form)) {
                        customerProfilesettings.forgotpassword(form.txtforgetemail).then(function(response) {
                            if (response.data == 1) {
                                alerts.open('Mail sent to your email, To reset your password check your mail.', "success");
                                $mdDialog.cancel();
                            } else if (response.data == 2) {
                                alerts.open("Invalid Matrimony ID OR  E-mail-ID.", "warning");
                            } else {
                                alerts.open("Invalid Matrimony ID OR  E-mail-ID.", "warning");
                            }
                        });
                    }
                };

                scope.$on('showforgetpassword', function(event) {
                    scope.showforgetpassword();
                });
            }
        };
    }
]);
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
app.directive('multiselectdropdown', ['arrayConstants', 'SelectBindServiceApp', '$timeout', function(cons, service, timeout) {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata: "=",
            parentVal: "="
        },
        link: function(scope, element, attrs) {
            scope.options = [];

            scope.databind = function(data) {
                timeout(function() {
                    scope.status = 'multiple' in attrs;
                    if (scope.status === true && data[0] !== undefined && angular.lowercase(data[0].title) === '--select--') {
                        data.splice(0, 1);
                    }
                    element.multiselect('dataprovider', data);
                }, 500);
            };
            timeout(function() {
                element.multiselect('select', scope.ngModel);

            }, 500);
            timeout(function() {
                switch (scope.typeofdata) {

                    case 'MaritalStatus':
                        scope.databind(cons.MaritalStatus);
                        break;

                    case 'height':
                        scope.databind(cons.height);
                        break;

                    case 'Religion':
                        scope.databind(cons.Religion);
                        break;

                    case 'Mothertongue':
                        scope.databind(cons.Mothertongue);
                        break;
                    case 'Mothertongueselect':
                        scope.databind(cons.Mothertongueselect);
                        break;
                    case 'educationcategory':
                        scope.databind(cons.educationcategory);
                        break;

                    case 'visastatus':
                        scope.databind(cons.visastatus);
                        break;

                    case 'stars':
                        scope.databind(cons.stars);
                        break;

                    case 'region':
                        scope.databind(cons.region);
                        break;

                    case 'bodyType':
                        scope.databind(cons.bodyType);
                        break;

                    case 'bloodGroup':
                        scope.databind(cons.bloodGroup);
                        break;

                    case 'healthCondition':
                        scope.databind(cons.healthCondition);
                        break;

                    case 'starLanguage':
                        scope.databind(cons.starLanguage);
                        break;

                    case 'lagnam':
                        scope.databind(cons.lagnam);
                        break;

                    case 'ZodaicSign':
                        scope.databind(cons.ZodaicSign);
                        break;

                    case 'paadam':
                        scope.databind(cons.paadam);
                        break;

                    case 'familyStatus':
                        scope.databind(cons.familyStatus);
                        break;

                    case 'RelationshipType':

                        scope.databind(cons.RelationshipType);
                        break;
                    case "childStayingWith":
                        scope.databind(cons.childStayingWith);
                        break;
                    case 'hereabout':
                        scope.databind(cons.hereabout);
                        break;


                    case 'improveourwebsite':
                        scope.databind(cons.improveourwebsite);
                        break;

                    case 'prices':
                        scope.databind(cons.prices);
                        break;

                    case 'downloadtime':
                        scope.databind(cons.downloadtime);
                        break;

                    case 'yourratethesearch':
                        scope.databind(cons.yourratethesearch);
                        break;

                    case 'comparesites':
                        scope.databind(cons.comparesites);
                        break;

                    case 'recomendedtofriends':
                        scope.databind(cons.recomendedtofriends);
                        break;

                    case 'Country':
                        service.countrySelect().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;

                    case 'ProfCatgory':

                        service.ProfessionCatgory().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;

                    case 'ProfGroup':
                        service.ProfessionGroup().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;

                    case 'indiaStates':
                        service.stateSelect('1').then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;
                    case 'countryCode':
                        service.countryCodeselect().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;
                    case 'caste':
                        service.casteselect().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;
                    case 'Caste':
                        service.casteselect().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;
                    case 'currency':
                        service.currency().then(function(response) {
                            var option = [];
                            option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            _.each(response.data, function(item) {
                                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            });
                            scope.databind(option);
                        });
                        break;
                    case 'catgory':
                        scope.databind(cons.catgory);
                        break;

                    case 'Priority':
                        scope.databind(cons.Priority);
                        break;

                    case 'Age':
                    case 'Ageselect':
                        var test = [];

                        test.push({ label: "--select--", title: "--select--", value: "0" });
                        for (var i = 18; i < 78; i++) {
                            if (scope.typeofdata === "Ageselect") {
                                test.push({ label: i + ' years', title: i + ' years', value: i });
                            } else {
                                test.push({ label: i, title: i, value: i });
                            }
                        }
                        scope.databind(test);
                        break;
                        // case 'Days':

                        //     var Arr = [];
                        //     Arr.push({ label: "--select--", title: "--select--", value: "0" });
                        //     for (var i = 1; i <= 31; i++) {
                        //         var strValue = null;
                        //         if (i <= 9) {
                        //             strValue = "0" + i;
                        //         } else {
                        //             strValue = i;
                        //         }
                        //         Arr.push({ "label": strValue, "title": strValue, "value": strValue });
                        //     }
                        //     scope.databind(Arr);

                        //     break;

                        // case 'Months':
                        //     var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        //     var option = [];
                        //     option.push({ label: "--select--", title: "--select--", value: "0" });
                        //     _.each(monthArr, function(item) {
                        //         option.push({ "label": item, "title": item, "value": item });
                        //     });
                        //     scope.databind(option);
                        //     break;
                        // case "Years":
                        //     var Arr = [];
                        //     Arr.push({ label: "--select--", title: "--select--", value: "0" });
                        //     for (var i = 1998; i >= 1936; i--) {
                        //         Arr.push({ "label": i, "title": i, "value": i });
                        //     }
                        //     scope.databind(Arr);
                        //     break;
                }
            }, 1000);
            element.multiselect({
                buttonClass: 'btn',
                buttonWidth: 'auto',
                inheritClass: true,
                includeSelectAllOption: true,
                disableIfEmpty: true,
                nonSelectedText: 'Any',
                allSelectedText: 'All Selected',
                selectAllText: 'Check all!',
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                filterPlaceholder: 'Type To Search',
                buttonContainer: '<div class="btn-group" />',
                maxHeight: false
            });
            //element.multiselect('setOptions', secondConfigurationSet);
            //element.multiselect('rebuild');
            // Watch for any changes to the length of our select element
            scope.$watch(function() {
                return element[0].length;
            }, function() {
                scope.$applyAsync(element.multiselect('rebuild'));
                element.multiselect('select', scope.ngModel);
            });

            // Watch for any changes from outside the directive and refresh
            scope.$watch(attrs.ngModel, function() {
                element.multiselect('refresh');
            });


        }

    };
}]);
app.directive("alertDirective", ['commonFactory', '$uibModal', '$timeout', '$sce',

    function(commonFactory, uibModal, timeout, $sce) {
        var modalinstance;
        return {
            restrict: "E",
            templateUrl: "templates/oldAlert.html",
            link: function(scope, element, attrs) {

                scope.$on('showAlertPopupccc', function(event, cls, msg, time) {
                    scope.typecls = cls;
                    scope.msgs = msg;
                    modalinstance = uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'oldAlert.html',
                        scope: scope
                    });
                    if (scope.msgs === "upgrade") {

                    } else {
                        scope.msgs = $sce.trustAsHtml(msg);
                        timeout(function() {
                            scope.close();
                        }, time || 4500);
                    }
                });
                scope.close = function() {
                    modalinstance.close();
                };
            }
        };
    }
]);
app.directive("partnerData", ["$injector", 'authSvc', 'successstoriesdata',
    '$mdDialog', 'alert', 'customerDashboardServices', '$uibModal',
    function($injector, authSvc, successstoriesdata, $mdDialog, alerts, customerDashboardServices,
        uibModal) {

        return {
            restrict: "E",
            scope: {
                array: '=',
                typeofsearch: '=',
                pagging: '='
            },
            templateUrl: "templates/Commonpartnerprofiles.html",
            link: function(scope, element, attrs) {
                var logincustid = authSvc.getCustId();
                scope.LcustID = logincustid;
                var loginprofileid = authSvc.getProfileid();
                var loginpaidstatus = authSvc.getpaidstatus();
                var currentslide = 1;
                var photoclass = "";
                scope.searchestype = scope.typeofsearch;
                scope.typeofdiv = scope.pagging === false ? "List" : "Grid";
                scope.slideshowsearches = false;
                scope.playpausebuttons = true;
                scope.pauseplaybuttons = true;
                scope.partnersearchessearches = true;
                scope.lnkLastSlide = 1;
                scope.paggingflag = scope.pagging;
                scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
                scope.startindex = 1;
                scope.endindex = scope.paggingflag === false ? 8 : 9;
                scope.flag = scope.paggingflag === false ? 8 : 9;
                scope.loaderspin = false;
                scope.Norowsend = false;
                scope.PartnerProfilesnew = scope.array;
                scope.indexvalues = 0;
                var i = 0;
                scope.slides = [];
                scope.directivepaging = function() {

                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        scope.loaderspin = true;
                        scope.loadmore = false;
                        scope.flag += scope.paggingflag === false ? 8 : 9;
                        scope.startindex = scope.flag - (scope.paggingflag === false ? 7 : 8);
                        scope.endindex = scope.flag;
                        scope.$emit('directivecallingpaging', scope.startindex, scope.endindex);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.$on('loadmore', function(event, endflag) {

                    scope.loaderspin = false;
                    if (scope.array.length > 0) {
                        scope.endindex = (scope.array[0].TotalRows > scope.endindex === true) ? scope.endindex : scope.array[0].TotalRows;
                        scope.loadmore = (scope.array[0].TotalRows > scope.endindex) ? true : false;
                        scope.Norowsend = (scope.array[0].TotalRows === scope.endindex) ? true : false;
                    }
                });
                scope.$watch('array', function(value) {

                    scope.PartnerProfilesnew = scope.array;
                    if (scope.array.length > 0) {
                        scope.loadmore = scope.array[0].TotalRows > (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows > scope.endindex ? true : false;
                        scope.Norowsend = scope.array[0].TotalRows < (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows < scope.endindex ? true : false;
                        scope.startindex = 1;
                        scope.endindex = scope.paggingflag === false ? 8 : 9;
                        scope.flag = scope.paggingflag === false ? 8 : 9;
                    }
                });
                scope.listclick = function() {
                    scope.typeofdiv = 'List';
                    $('.search_result_items_main').attr("style", "width:80%;");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;

                };
                scope.gridclick = function() {
                    scope.typeofdiv = 'Grid';
                    $('.search_result_items_main').attr("style", "");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;

                };
                scope.servicehttp = function(type, object) {
                    return $injector.invoke(function($http) {
                        return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                            .then(function(response) {

                                console.log(response);
                                switch (type) {
                                    case "B":

                                        if (response.data === 1) {

                                            scope.array.splice(scope.indexvalues, 1);
                                            scope.$emit('incrementcounts');
                                            scope.$emit('successfailer', "bookmarked suceessfully", "success");
                                        } else {
                                            scope.$emit('successfailer', "bookmarked failed", "warning");
                                        }
                                        break;
                                    case "E":


                                        if (response.data == 1) {
                                            scope.array.splice(scope.indexvalues, 1);
                                            scope.$emit('incrementcounts');
                                            scope.$emit('successfailer', "EXpressInterest done SuccessFully", "success");
                                        } else {
                                            scope.$emit('successfailer', "EXpressInterest Fail", "warning");
                                        }

                                        break;
                                    case "I":
                                        if (response.data === 1) {
                                            scope.array.splice(scope.indexvalues, 1);
                                            scope.$emit('incrementcounts');
                                            scope.$emit('successfailer', "Ignore SuccessFully", "success");
                                        } else {
                                            scope.$emit('successfailer', "Ignore profile Fail", "warning");
                                        }
                                        break;
                                    case "M":
                                    case "TH":
                                    case "RP":

                                        if (response.data === 1) {

                                            scope.$emit('successfailer', "Message sent SuccessFully", "success");
                                        } else {
                                            scope.$emit('successfailer', "Message sending Fail", "warning");
                                        }
                                        break;
                                }
                            });
                    });

                };
                scope.serviceactions = function(type, tocustid, typeofactionflag, profileid, form, logid, MessageHistoryId) {

                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        var indexvalue = scope.indexvalues;
                        var object = {
                            IFromCustID: logincustid,
                            IToCustID: tocustid,
                            TypeofInsert: type,
                            EncriptedText: null,
                            EncryptedRejectFlagText: null,
                            EncriptedTextrvr: null,
                            EncryptedRejectFlagTextrvr: null,
                            StrHtmlText: null,
                            MessageLinkId: null,
                            MessageHistoryId: null,
                            Logid: logid !== undefined ? logid : null,
                            FromProfileID: loginprofileid,
                            ToProfileID: profileid !== undefined ? profileid : null
                        };

                        console.log(typeofactionflag);
                        switch (type) {

                            case "B":
                                if (typeofactionflag !== true || typeofactionflag !== 1) {
                                    scope.servicehttp(type, object);
                                } else {
                                    scope.$emit('successfailer', "You have already Bookmark This ProfileID", "warning");
                                }
                                break;
                            case "E":
                                if (typeofactionflag !== true || typeofactionflag !== 1) {
                                    authSvc.paymentstaus(logincustid, scope).then(function(responsepaid) {
                                        console.log(responsepaid);
                                        if (responsepaid === true)
                                            scope.servicehttp(type, object);
                                    });
                                } else {
                                    scope.$emit('successfailer', "You have already ExpressInterest This ProfileID", "warning");
                                }
                                break;
                            case "I":
                                if (typeofactionflag !== true || typeofactionflag !== 1) {
                                    scope.servicehttp(type, object);
                                } else {
                                    scope.$emit('successfailer', "You have already Ignore This ProfileID", "warning");
                                }
                                break;
                            case "M":
                            case "TH":
                            case "RP":
                                scope.servicehttp(type, object);
                                break;
                            case "V":

                                scope.servicehttp(type, object);
                                break;
                        }
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };

                scope.$on('sendmsg', function(event, type, tocustid, typeofactionflag, form, logid, MessageHistoryId) {
                    //scope.serviceactions(type, tocustid, typeofactionflag, undefined, form, logid, MessageHistoryId);
                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        var indexvalue = scope.indexvalues;
                        var object = {
                            IFromCustID: logincustid,
                            IToCustID: tocustid,
                            TypeofInsert: type,
                            EncriptedText: null,
                            EncryptedRejectFlagText: null,
                            EncriptedTextrvr: null,
                            EncryptedRejectFlagTextrvr: null,
                            StrHtmlText: form !== undefined ? form.message : null,
                            MessageLinkId: typeofactionflag !== undefined && typeofactionflag !== "" && typeofactionflag !== null ? typeofactionflag : null,
                            MessageHistoryId: MessageHistoryId !== undefined && MessageHistoryId !== null && MessageHistoryId !== "" ? MessageHistoryId : null,
                            Logid: logid !== undefined ? logid : null,
                            FromProfileID: loginprofileid,
                            ToProfileID: null
                        };
                        scope.servicehttp(type, object);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                    scope.$emit("modalpopupclose", event);
                });
                scope.sendmessegescommon = function(type, tocustid) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        scope.$emit('popuplogin', "myModalContent.html", tocustid);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.redirectToviewfullprofile = function(custid, logid, recentlyviewes) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {

                        scope.$emit('redirectToviewfullprofiles', custid, logid);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.photoRequestMethod = function(tocustid, toprofileieid, password) {
                    password = password !== null && password !== "" ? 468 : 467;
                    return $injector.invoke(function($http) {
                        return $http.get(app.apiroot + 'StaticPages/getSendMail_PhotoRequest_Customer', { params: { FromCustID: tocustid, ToCustID: logincustid, Category: password } })
                            .then(function(response) {

                                if (response.data === 1) {
                                    scope.$emit('successfailer', "Request sent suceessfully", "success");
                                } else {
                                    scope.$emit('successfailer', "Request sent Fail", "warning");
                                }
                            });
                    });
                };
                scope.photoalbum = function(custid, profileid, photocount) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {

                        alerts.dynamicpopup("photopopup.html", scope, uibModal);
                        customerDashboardServices.getphotoslideimages(custid).then(function(response) {
                            scope.slides = [];

                            _.each(response.data, function(item) {
                                scope.slides.push(item);
                            });
                        });

                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.divclassmask = function(logphotostatus, photo, photocount) {
                    logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {

                        return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid);
                    } else {
                        return "";
                    }
                };
                scope.indexvalue = function(index) {
                    scope.indexvalues = index;
                };

                scope.modifyursearch = function() {
                    scope.PartnerProfilesnew = [];
                    scope.listclick();
                    scope.$emit('modifyursearchpartner', 1, 10);
                };

                scope.checkitemnew = function(carouselID) {
                    var $this;
                    $this = $("#" + carouselID);
                    if ($("#" + carouselID + " .carousel-inner .item:first").hasClass("active")) {
                        $("#" + carouselID).find('.left').hide();
                        $("#" + carouselID).find('.right').show();
                    } else if ($("#" + carouselID + " .carousel-inner .item:last").hasClass("active")) {
                        $("#" + carouselID).find('.left').show();
                        $("#" + carouselID).find('.right').hide();

                    } else {
                        $("#" + carouselID).find('.left').show();
                        $("#" + carouselID).find('.right').show();
                    }

                };
                //method to move slide to left or right arrow press
                scope.ArrowMove = function(carouselID) {
                    $(document).bind('keyup', function(e) {
                        var totalItems = $('#' + carouselID).find('.item').length;
                        var currentIndex = $('#' + carouselID).find('div.active').index() + 1;
                        if (e.which == 39) {
                            if (totalItems != currentIndex)
                                $('#' + carouselID).carousel('next');
                        } else if (e.which == 37) {
                            if (currentIndex != 1)
                                $('#' + carouselID).carousel('prev');
                        }
                    });
                };

                scope.checkitemGlobal = function(carouselID) {
                    var checkitem = function() {
                        scope.checkitemnew(carouselID);
                    };
                    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
                };
                scope.pageload = function(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
                    var totalItems = $('#' + carouselID).find('.item').length;
                    if (totalItems === 0) {
                        scope.$emit('slideshowsubmit', 1, 10, "slideshow");
                        scope.checkitemnew(carouselID);
                    }
                    scope.ArrowMove(carouselID);
                    scope.checkitemGlobal(carouselID);
                };
                scope.pageloadslidebind = function() {

                    $('.list-inline li a').removeClass('selected');
                    $('[id=carousel-selector-' + $('#slideShowCarousel').find('div.active').index() + ']').addClass('selected');
                    var totalItems1 = $('#slideShowCarousel').find('.item').length;
                    var currentIndex1 = $('#slideShowCarousel').find('div.active').index() + 1;
                    if (scope.playpausebuttons === false) {
                        $('#slideShowCarousel').carousel('pause');
                        scope.playpausebuttons = false;
                        scope.pauseplaybuttons = true;
                    }
                    $('#slideShowCarousel').find('div.active').index();
                    scope.lnkLastSlide = currentIndex1;

                    if (currentslide < currentIndex1) {
                        if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                            if (parseInt(totalItems1) - parseInt(currentIndex1) === 4) {
                                scope.$emit('slideshowsubmit', totalItems1 + 1, totalItems1 + 10, "slideshow");

                                if ($("#slideShowCarousel .carousel-inner .item:first").hasClass("active")) {
                                    $('#slideShowCarousel').find('.left').show();
                                    $('#slideShowCarousel').find('.right').show();
                                }
                            }
                        } else {

                            if (parseInt(totalItems1) - parseInt(currentIndex1) === 1) {
                                scope.$emit('showloginpopup');
                            }
                        }
                    }
                    currentslide = currentIndex1;
                };
                scope.pageloadslide = function() {
                    var currentslide = 1,
                        totalItems = $('#slideShowCarousel').find('.item').length;
                    if (totalItems === 0) {
                        scope.$emit('slideshowsubmit', 1, 10, "slideshow");
                        if ($("#slideShowCarousel .carousel-inner .item:first").hasClass("active")) {
                            $('#slideShowCarousel').find('.left').show();
                            $('#slideShowCarousel').find('.right').show();
                        }
                        return false;
                    }
                    scope.pageloadslidebind();
                    //play and pause function on click event
                    $('#slideShowCarousel').carousel({
                        interval: 2000,
                        pause: "false"
                    });

                    //hide slide arrows for  first and last slide slides  
                    var checkitem = function() {
                        scope.checkitemnew("slideShowCarousel");
                    };
                    $("#slideShowCarousel").on("slid.bs.carousel", "", checkitem);
                };

                scope.Slideshowpage = function() {
                    scope.slideshowsearches = true;
                    scope.playpausebuttons = false;
                    scope.partnersearchessearches = false;
                    scope.searchestype = true;
                    scope.pageloadslide();
                    $('.search_result_items_main').attr("style", "width:100%;");
                    scope.checkitemnew("slideShowCarousel");
                    scope.pageload("slideShowCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
                    $('#slideShowCarousel').carousel('pause');
                };

                scope.playslide = function() {
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = false;
                    $('#slideShowCarousel').carousel({
                        interval: 2000,
                        pause: "false"
                    });
                };
                scope.pauseslide = function() {
                    scope.playpausebuttons = false;
                    scope.pauseplaybuttons = true;
                    $('#slideShowCarousel').carousel('pause');
                };
                scope.nextslide = function() {
                    scope.pageloadslidebind();
                    var currentIndex1 = $('#slideShowCarousel').find('div.active').index() + 1;
                    scope.lnkLastSlide = currentIndex1 + 1;
                };

                scope.prevslide = function() {
                    $('.list-inline li a').removeClass('selected');
                    $('[id=carousel-selector-' + $('#slideShowCarousel').find('div.active').index() + ']').addClass('selected');
                    var totalItems1 = $('#slideShowCarousel').find('.item').length;
                    var currentIndex1 = $('#slideShowCarousel').find('div.active').index();
                    $('#slideShowCarousel').find('div.active').index();
                    scope.lnkLastSlide = currentIndex1;
                    currentslide = parseInt(currentIndex1 - 1);
                };

                scope.modalpopupclose = function() {
                    alerts.dynamicpopupclose();
                };
                scope.$on("photoalbum", function(event, custid, profileid, photocount) {

                    scope.photoalbum(custid, profileid, photocount);
                });

                scope.$on('setslide', function(event) {
                    scope.listclick();
                });
                scope.$on('viewprofileinsert', function(event, custid) {
                    scope.serviceactions('V', custid);
                });
            }
        };

    }
]);
app.directive("photoPopupalbum", ["$injector", 'authSvc', 'successstoriesdata', '$uibModal', function($injector, authSvc, successstoriesdata, uibModal) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    var modalinstance;

    return {
        restrict: "E",
        scope: {
            arrayphotos: '='
        },
        templateUrl: "templates/photopopup.html",
        link: function(scope, element, attrs) {
             
            var vvv = scope.arrayphotos;
            if (scope.arrayphotos === 1) {
                modalinstance = uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: "photopopup.html",
                    size: 'lg'
                });
            }
            scope.closepopup = function() {
                 
                modalinstance.close();
            };
        }
    };
}]);
app.factory('singlestaticbindings', ['arrayConstants', 'SelectBindServiceApp', function(arrayConstants, SelectBindService) {
    return {
        Age: function() {
            var Age = [];
            Age = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                Age.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return Age;
        },
        Country: function() {
            var Countryi = [];
            SelectBindService.countrySelect().then(function(response) {
                Countryi = [{ label: "--Select--", title: "--select--", value: "0" }];
                _.each(response.data, function(item) {
                    Countryi.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Countryi;
        }

    };

}]);
app.directive('setClassWhenAtTop', function($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's offset top relative to document

            $win.on('scroll', function(e) {
                element[($win.scrollTop() >= offsetTop) ? 'addClass' : 'removeClass'](topClass);
            });
        }
    };
});
app.controller('Controllerpartner', ['$uibModal', '$scope', 'customerDashboardServices', 'authSvc',
    'alert', '$window', '$location', 'successstoriesdata', '$rootScope', '$timeout',
    function(uibModal, scope, customerDashboardServices, authSvc, alerts,
        window, $location, successstoriesdata, $rootscope, $timeout) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var loginpaidstatus = authSvc.getpaidstatus();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.typeodbind = 'C';
        scope.typeofdiv = "Grid";
        scope.PartnerProfilesnew = [];
        scope.counts = 1;
        scope.bindallcounts = {};
        scope.lblUHaveviewd = 'Suitable Profiles that match you';
        scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
        scope.chatstatus = null;
        scope.form = {};
        scope.exactshow = false;
        scope.normaldata = true;
        var searchObjectquery = $location.search();
        scope.Typeofdatabind = searchObjectquery.type;
        scope.gettingpartnerdata = function(type, frompage, topage, headertext, bindvalue, exactflag) {
            scope.exactflagstorage = exactflag;
            if (bindvalue !== null && bindvalue !== 0 && bindvalue !== 'profile') {
                scope.flag = frompage === 1 ? 9 : scope.flag;
                scope.typeodbind = type;
                if (type === 'C') {
                    customerDashboardServices.getCustomercounts(scope.custid, type, frompage, topage, exactflag).then(function(response) {

                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.bindcounts(response.data.DashBoardCounts);

                            scope.bindallcounts = response.data.DashBoardCounts;
                            scope.PersonalInfo = (response.data.PersonalInfo);

                            scope.photopersonal = scope.PersonalInfo.Photo;
                            scope.LoginPhotoIsActive = scope.PersonalInfo.IsActive;
                            sessionStorage.setItem("LoginPhotoIsActive", scope.PersonalInfo.IsActive);
                            scope.Gendercustomer = (scope.PersonalInfo.GenderID) === 2 ? 'Groom' : 'Bride';
                        }
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            scope.typeofdiv = "Grid";
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);

                            });
                        } else {
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });

                        }
                        scope.$broadcast('loadmore');
                        scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew !== null && response.data.PartnerProfilesnew !== undefined ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                        scope.lblUHaveviewd = headertext;

                    });
                } else {
                    customerDashboardServices.getcustomerpartnerdata(scope.custid, type, frompage, topage, exactflag).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            scope.typeofdiv = "Grid";
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });

                        } else {
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.$broadcast('loadmore');
                        scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew !== null && response.data.PartnerProfilesnew !== undefined ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                        scope.lblUHaveviewd = headertext;

                    });
                }
            } else if (bindvalue == 'profile') {

            } else {
                scope.zerorecorsalert();
            }
        };


        scope.paging = function(frompage, topage, typeodbind) {
            scope.counts = 0;
            typeodbind = typeodbind == 'C' ? 'P' : typeodbind;
            scope.gettingpartnerdata(typeodbind, frompage, topage, scope.lblUHaveviewd, 1, scope.exactflagstorage);
        };
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.paging(frompage, topage, scope.typeodbind);
        });
        scope.bindcounts = function(array) {

            scope.leftMenuArr = [
                { value: 'Edit my profile', bindvalue: 'profile', hrefs: 'editview' },
                { value: 'Upgrade your membership', bindvalue: 'profile', hrefs: 'UpgradeMembership' },
                { value: 'manage photo', bindvalue: 'profile', hrefs: 'editview/editManagePhoto' },
                { value: 'My bookmarked profiles', bindvalue: array.MybookMarkedProfCount, clickvalues: 'MB', clickvaluesbind: 'Profiles you have bookmarked', hrefs: 'home?type=MB' },
                { value: 'Who bookmarked me', bindvalue: array.WhobookmarkedCount, clickvalues: 'WB', clickvaluesbind: 'Profiles Who BookMarked You', hrefs: 'home?type=WB' },
                { value: 'Profiles viewed by me', bindvalue: array.RectViewedProfCount, clickvalues: 'RV', clickvaluesbind: 'Profiles viewed by me', hrefs: 'home?type=RV' },
                { value: 'My profile viewed by others', bindvalue: array.RectWhoViewedCout, clickvalues: 'WV', clickvaluesbind: 'Members viewed my profile', hrefs: 'home?type=WV' },
                { value: 'Ignored profiles', bindvalue: array.IgnoreProfileCount, clickvalues: 'I', clickvaluesbind: 'Profiles ignored by you', hrefs: 'home?type=I' },
                { value: 'Saved search', bindvalue: 'profile', hrefs: 'General?selectedIndex=3' },
                { value: 'Profile Settings', bindvalue: 'profile', hrefs: 'profilesettings' },
                { value: 'help', bindvalue: 'profile', hrefs: 'help' },
            ];
        };
        var TypeOfReportexpress = null;
        var yourFilterexpress = null;
        var oppfilterexpress = null;
        scope.flagexpress = 9;
        scope.expressinterestselect = function(count, TypeOfReport, yourFilter, oppfilter, frompage, topage, headertext, typeofinterest, eventclick) {
            if (count !== 0) {
                if (eventclick !== null) {
                    scope.click = eventclick;
                }
                if (headertext === "1" || headertext === "2" || headertext === "3") {
                    scope.flagexpress = 9;
                    if (headertext === "1") {
                        yourFilterexpress = scope.expressmyinterest.indexOf('I interesed in') !== -1 ? 'I' : null;
                        oppfilterexpress = scope.expressmyinterest.indexOf('I interesed in') == -1 ? 'I' : null;
                        TypeOfReportexpress = scope.expressmyinterest.indexOf('I interesed in') !== -1 ? 'R' : 'S';
                    } else if (headertext === "2") {
                        yourFilterexpress = scope.expressmynotinterest.indexOf('I skipped') !== -1 ? 'NI' : null;
                        oppfilterexpress = scope.expressmynotinterest.indexOf('I skipped') == -1 ? 'NI' : null;
                        TypeOfReportexpress = scope.expressmynotinterest.indexOf('I skipped') !== -1 ? 'R' : 'S';
                    } else {
                        yourFilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') !== -1 ? 'V,NV' : null;
                        oppfilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') == -1 ? 'V,NV' : null;
                        TypeOfReportexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') !== -1 ? 'R' : 'S';
                    }
                } else if (headertext === null) {
                    scope.flagexpress = 9;
                    TypeOfReportexpress = TypeOfReport;
                    yourFilterexpress = yourFilter;
                    oppfilterexpress = oppfilter;
                } else {
                    TypeOfReportexpress = TypeOfReport;
                    yourFilterexpress = yourFilter;
                    oppfilterexpress = oppfilter;
                }

                scope.startindexexpress = frompage === 1 ? 1 : scope.startindexexpress;
                scope.endindexexpress = frompage === 1 ? 9 : scope.endindexexpress;
                var exp = {
                    IntCustID: scope.custid,
                    TypeOfReport: TypeOfReportexpress,
                    yourFilter: yourFilterexpress,
                    oppfilter: oppfilterexpress,
                    pagefrom: scope.startindexexpress,
                    pageto: scope.endindexexpress
                };
                customerDashboardServices.getexpressintersetdata(exp).then(function(response) {

                    if (parseInt(frompage) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });

                        if (typeofinterest === "All Profiles") {
                            scope.click = "";
                            scope.flagexpress = 9;
                            scope.typeofdiv = headertext === 'All Profiles' ? 'Expressinterest' : 'Expressinterestsend';
                            scope.expressmyinterest = TypeOfReport === 'R' ? 'I interesed in' : scope.Gendercustomer + ' interesed';
                            scope.expressmynotinterest = TypeOfReport === 'R' ? 'I skipped' : scope.Gendercustomer + ' skipped';
                            scope.expressmynotviewed = TypeOfReport === 'R' ? 'I Viewed/NotViewed' : scope.Gendercustomer + ' Viewed/NotViewed';
                            if (scope.PartnerProfilesnew[0] !== null && scope.PartnerProfilesnew[0] !== undefined && scope.PartnerProfilesnew[0] !== null) {
                                scope.expressmyinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouProceed : scope.PartnerProfilesnew[0].OppProceed;
                                scope.expressmynotinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].Youskipped : scope.PartnerProfilesnew[0].Oppskipped;
                                scope.expressmynotviewedcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouPending : scope.PartnerProfilesnew[0].Opppending;
                                scope.YouProceed = scope.PartnerProfilesnew[0].YouProceed;
                                scope.Youskipped = scope.PartnerProfilesnew[0].Youskipped;
                                scope.YouPending = scope.PartnerProfilesnew[0].YouPending;
                                scope.OppProceed = scope.PartnerProfilesnew[0].OppProceed;
                                scope.Oppskipped = scope.PartnerProfilesnew[0].Oppskipped;
                                scope.Opppending = scope.PartnerProfilesnew[0].Opppending;
                                scope.PartnerProfilesnewTotalrows = response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" ? response.data[0].TotalRows : 0;
                                scope.lblUHaveviewd = TypeOfReport === 'R' ? 'Interest Expressed By ' + scope.Gendercustomer : headertext;
                                scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                                scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                                scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                            }

                        } else {
                            if (scope.PartnerProfilesnew[0] !== null && scope.PartnerProfilesnew[0] !== undefined && scope.PartnerProfilesnew[0] !== null) {
                                scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                                scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                                scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                            }
                        }
                    } else {
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };
        app.animation('.slideexpress', function() {
            var NG_HIDE_CLASS = 'ng-hide';
            return {
                beforeAddClass: function(element, className, done) {
                    if (className === NG_HIDE_CLASS) {
                        element.slideUp(done);
                    }
                },
                removeClass: function(element, className, done) {
                    if (className === NG_HIDE_CLASS) {
                        element.hide().slideDown(done);
                    }
                }
            };
        });
        scope.zerorecorsalert = function() {
            alerts.timeoutoldalerts(scope, 'alert-danger', 'Sorry No Records Found', 2500);
        };
        scope.successfaileralert = function(msg, typewarning) {
            if (typewarning === "success") {
                alerts.timeoutoldalerts(scope, 'alert-success', msg, 3000);
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', msg, 3000);
            }
        };
        scope.$on('successfailer', function(event, msg, typewarning) {
            scope.successfaileralert(msg, typewarning);
        });
        scope.messagecustid = "";
        scope.$on('popuplogin', function(event, url, custid) {
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = "";
            scope.messagecustid = custid;
            scope.modalbodyshow = 1;
            scope.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.viewcontacts = function(custid, empmobile, empemail, custmobile, custemail) {
            customerDashboardServices.getprofilegrade(custid).then(function(response) {
                if (response.data !== null && response.data !== undefined) {
                    if (response.data === 3) {
                        var mobilenumbers = "<b>Mobile number : </b> " + custmobile + "<br/>" + " " + "<b>Emails :</b>" + custemail;
                        alerts.timeoutoldalerts(scope, 'alert-success', mobilenumbers, 3000);

                    } else {
                        var mobilenumber = "<p style='color:black;'> Please Contact The Below Relationship Manager As This Client Hasn't Given Authentication To Show Untill They Agree</p><br><b>Relationship Manager Mobile number : </b> " + empmobile + "<br/>" + " " + "<b>Relationship Manager Emails :</b>" + empemail;
                        alerts.timeoutoldalerts(scope, 'alert-danger', mobilenumber, 3000);
                    }
                }

            });

        };
        scope.Tickethistoryarray = [];
        scope.messagetorm = function(typeofdiv, custid, name, profileid, logid, TicketID) {
            switch (typeofdiv) {
                case "TH":
                    scope.modalbodyshow = 2;
                    scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    break;
                case "Ticket":
                    scope.modalbodyshow = 3;
                    scope.buttonname = "MessageToRM";
                    scope.LogID = logid;
                    scope.messagecustid = custid;
                    scope.modalpopupheadertext = "Match Followup Of " + name + "(" + profileid + ")";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    customerDashboardServices.Tickethistory(TicketID, 'H').then(function(response) {

                        scope.Tickethistoryarray = [];
                        _.each(response.data, function(item) {
                            scope.Tickethistoryarray.push(item);
                        });
                    });
                    break;
                case "RM":
                    scope.modalbodyshow = 2;
                    scope.LogID = logid;
                    scope.messagecustid = custid;
                    scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    break;
            }

        };
        scope.sendmessages = function(form) {
            if (form !== undefined && form.message !== "" && form.message !== null && form.message !== undefined) {
                scope.$broadcast('sendmsg', 'M', scope.messagecustid, undefined, form, undefined);
            } else {
                alert('please enter Message');
            }
        };
        scope.sendmessagesRMM = function(form) {
            alerts.dynamicpopupclose();
            scope.$broadcast('sendmsg', 'TH', scope.messagecustid, undefined, form, scope.LogID);
        };
        scope.loadmorehideshow = function() {
            if (scope.PartnerProfilesnew.length > 0) {
                scope.endindexexpress = (scope.totalrows > scope.endindexexpress === true) ? scope.endindexexpress : scope.totalrows;
                scope.loadmoreexpress = (scope.totalrows > scope.endindexexpress) ? true : false;
                scope.Norowsendexpress = (scope.totalrows === scope.endindexexpress) ? true : false;

            }
        };
        scope.chatsdiv = function(fromindex, toindex, status, headertext, countalert) {
            if (countalert !== 0) {
                if (fromindex === 1) {
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = "chats";
                    scope.chatstatus = status;
                }
                var object = { CustID: scope.custid, Status: scope.chatstatus, iStartIndex: fromindex, iEndIndex: toindex };
                customerDashboardServices.getCustometDashBoardchats(object).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" ? response.data[0].TotalRows : 0;
                    if (parseInt(fromindex) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                            scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                            scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                            scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;

                        });
                    } else {
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });

                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };
        scope.receivesrecphotoss = function(fromindex, toindex, type, headertext, typeofdiv, countalert) {
            if (countalert !== 0) {
                if (fromindex === 1) {
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = typeofdiv;
                    scope.chatstatus = type;
                }
                customerDashboardServices.getcustomerpartnerdata(scope.custid, scope.chatstatus, fromindex, toindex).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew !== null && response.data.PartnerProfilesnew[0] !== undefined && response.data.PartnerProfilesnew[0] !== null && response.data.PartnerProfilesnew[0] !== "" ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                    if (parseInt(fromindex) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data.PartnerProfilesnew, function(item) {
                            scope.PartnerProfilesnew.push(item);

                            scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                            scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                            scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;

                        });
                    } else {
                        _.each(response.data.PartnerProfilesnew, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };

        scope.allloadmorepaging = function() {
            scope.spinexpress = true;
            scope.Norowsendexpress = false;
            scope.flagexpress += 9;
            scope.startindexexpress = scope.flagexpress - 8;
            scope.endindexexpress = scope.flagexpress;
            scope.loadmorehideshow();
            switch (scope.typeofdiv) {
                case "Expressinterest":
                case "Expressinterestsend":
                    scope.expressinterestselect(1, TypeOfReportexpress, yourFilterexpress, oppfilterexpress, scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "chats":
                    scope.chatsdiv(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "Requestphotos":
                case "RequestPassword":

                    scope.receivesrecphotoss(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;

            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.$on("modalpopupclose", function(event) {
            alerts.dynamicpopupclose();
        });
        scope.redirectToviewfull = function(custid, logid) {
            var realpath = '/viewFullProfileCustomer';
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            if (logid !== undefined && logid !== "" && logid !== null) {
                authSvc.paymentstaus(scope.custid, scope).then(function(responsepaid) {
                    console.log(responsepaid);
                    if (responsepaid === true) {
                        window.open(realpath, '_blank');
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade online membership', 3000);
                    }
                });
            } else {
                window.open(realpath, '_blank');
            }

        };
        scope.$on("redirectToviewfullprofiles", function(event, custid, logid) {
            scope.redirectToviewfull(custid, logid);
        });

        scope.communicationmessageshistory = function(messagechatlinkid, messagechatcustid, messagehistoryid) {
            scope.messagechatlinkid = messagechatlinkid;
            scope.messagechatcustid = messagechatcustid;
            scope.messagehistoryid = messagehistoryid;
            alerts.dynamicpopup("mytickethistory.html", scope, uibModal);
            var obj = {
                CustID: scope.custid,
                MessageStatusID: null,
                MessageLinkId: messagechatlinkid,
                i_PageSize: 15,
                i_PageNumber: 1,
                i_StartIndex: 1,
                i_EndIndex: 15,
                MessageID: null
            };
            scope.arraytickethistory = [];
            customerDashboardServices.communicationhistorychats(obj).then(function(response) {

                _.each(response.data, function(item) {
                    scope.arraytickethistory.push(item);
                });
            });
        };
        scope.SubmitMsg = function(form) {
            scope.$broadcast('sendmsg', 'RP', scope.messagechatcustid, scope.messagechatlinkid, form, undefined, scope.messagehistoryid);
        };
        scope.photoPasswordactionss = function(type, tocustid) {
            customerDashboardServices.photopasswordactioninsert(scope.custid, tocustid, type).then(function(response) {

                if (response.data === 1) {
                    if (type === 1) {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Accepted successfully', 2500);

                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Rejected successfully', 2500);
                    }
                } else {
                    if (type === 1) {

                        alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Accepted Fail', 2500);
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Rejected Fail', 2500);
                    }

                }
            });
        };
        scope.acceptlink = function(type) {
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, scope.expressintcustid, scope.expressintlogid, type, null).then(function(response) {
                if (response.data === 1) {
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }
                alerts.dynamicpopupclose();
            });
        };
        scope.acceptlinkexp = function(type, custid, logid) {
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, logid, type, null).then(function(response) {
                if (response.data === 1) {
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }
                alerts.dynamicpopupclose();
            });
        };
        scope.acceptrejectpopup = function(custid, logid, Name) {
            scope.modalpopupheadertext = Name + " Status";
            scope.expressintcustid = custid;
            scope.expressintlogid = logid;
            scope.modalbodyshow = 4;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };


        scope.divclassmaskforall = function(logphotostatus, photo, photocount) {

            logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
            return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, scope.custid);

        };
        scope.incrementsdashboardcounts = function() {
            customerDashboardServices.getCustomercounts(scope.custid, "COU", 1, 9, "UnPaid").then(function(response) {
                scope.bindcounts(response.data.DashBoardCounts);
                scope.bindallcounts = response.data.DashBoardCounts;
            });
        };
        scope.$on("incrementcounts", function() {
            scope.incrementsdashboardcounts();
        });

        scope.newprofileawaiting = function(type, frompage, topage, headertext, bindvalue) {
            authSvc.paymentstaus(scope.custid, scope).then(function(response) {
                console.log(response);
                if (response === true)
                    scope.gettingpartnerdata(type, frompage, topage, headertext, 1, "UnPaid");
            });
        };

        scope.photoalbumdashboard = function(custid, profileid, photocount) {

            scope.$broadcast('photoalbum', custid, profileid, photocount);
        };
        scope.pageloadbind = function(response) {
            scope.bindcounts(response.data.DashBoardCounts);

            scope.bindallcounts = response.data.DashBoardCounts;
            scope.PersonalInfo = (response.data.PersonalInfo);

            scope.photopersonal = scope.PersonalInfo.Photo;
            scope.LoginPhotoIsActive = scope.PersonalInfo.IsActive;
            sessionStorage.setItem("LoginPhotoIsActive", scope.PersonalInfo.IsActive);
            scope.Gendercustomer = (scope.PersonalInfo.GenderID) === 2 ? 'Groom' : 'Bride';

        };
        scope.init = function() {

            scope.PartnerProfilesnew = [];
            switch (scope.Typeofdatabind) {
                case "MB":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('MB', 1, 9, 'My bookmarked profiles', 1, "UnPaid");
                    });
                    break;
                case "WB":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('WB', 1, 9, 'Who BookMarked Me', 1, "UnPaid");
                    });
                    break;
                case "I":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('I', 1, 9, 'Ignored Profiles', 1, "UnPaid");
                    });
                    break;
                case "WV":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('WV', 1, 9, 'My profile viewed by others', 1, "UnPaid");
                    });
                    break;
                case "RV":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('RV', 1, 9, 'Profiles viewed by me', 1, "UnPaid");
                    });
                    break;
                case "Chats":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.chatsdiv(1, 9, 463, 'Total Messages', scope.bindallcounts.NewMsgs);
                    });
                    break;
                case "Requests":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.receivesrecphotoss(1, 9, 'RP', 'Members are requesting to upload your photo', 'Requestphotos', scope.bindallcounts.ReceivedPhotoRequestCount);
                    });
                    break;
                case "Express":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.expressinterestselect(scope.bindallcounts.ExpressAllcount, null, null, null, 1, 9, 'All Profiles', 'All Profiles', null);
                    });
                    break;
                default:
                    scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, "UnPaid");
                    break;
            }
        };
        scope.exactandnormal = function(typebutton) {
            if (typebutton === "exact") {
                scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, 'Paid');
                scope.exactshow = true;
                scope.normaldata = false;
            } else {
                scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, 'UnPaid');
                scope.exactshow = false;
                scope.normaldata = true;
            }
        };

    }
]);
app.controller('footercontrol', ['$scope', 'authSvc', '$rootScope', function(scope, authSvc, $rootscope) {

    scope.showforgetpasswordpopup = function() {
        scope.$broadcast('showforgetpassword');

    };
    scope.searchpage = function(typeurl) {
        sessionStorage.removeItem("homepageobject");
        switch (typeurl) {
            case "profile":
                var realpath = 'General?selectedIndex=2';
                window.open(realpath, "_self");
                $rootscope.$broadcast("profile", 2);
                break;
            case "general":
                var realpathgen = 'General?selectedIndex=0';
                window.open(realpathgen, "_self");
                $rootscope.$broadcast("profile", 0);
                break;
            case "advanced":
                var realpathadvan = 'General?selectedIndex=1';
                window.open(realpathadvan, "_self");
                $rootscope.$broadcast("profile", 1);
                break;
        }
    };
}]);
app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', '$rootScope', '$window',
    '$state', 'missingFieldService', 'customerviewfullprofileservices',
    function(scope, authSvc, ngIdle, alertpopup, uibModal, $rootscope, window, $state, missingFieldService, customerviewfullprofileservices) {
        window.scrollTo(0, 0);
        scope.showhidetestbuttons = function() {
            var datatinfo = authSvc.user();
            if (datatinfo.custid !== "" && datatinfo.custid !== undefined && datatinfo.custid !== null) {
                scope.loginstatus = false;
                scope.loginoutstatus = true;
                scope.usernamepersonal = datatinfo.username;
                scope.profileid = datatinfo.profileid;
                scope.paidstatus = datatinfo.paidstatus == 1 ? "Paid" : "unpaid";
                scope.hrefpaid = datatinfo.paidstatus == 1 ? "UpgradeMembership" : "UpgradeMembership";
                scope.profilepic = datatinfo.profilepic;
                scope.withlogin = true;
                scope.withoutlogin = false;
            } else {
                scope.loginstatus = true;
                scope.loginoutstatus = false;
                scope.usernamepersonal = "";
                scope.profileid = "";
                scope.paidstatus = "";
                scope.profilepic = "";
                scope.withlogin = false;
                scope.withoutlogin = true;
            }
        };

        scope.$on('IdleTimeout', function() {
            //show pop up with two choices,wherther enduser needs to continue session or logout of application
            //Idle.setIdle(5);
            //redirect to home page
            alertpopup.dynamicpopup("sessionalert.html", scope, uibModal, 'sm');
        });
        scope.acceptcontinue = function() {
            ngIdle.setIdle(5 * 60);
            alertpopup.dynamicpopupclose();
        };
        scope.closesession = function() {
            authSvc.logout();
            alertpopup.dynamicpopupclose();
        };
        scope.loginstatus = true;
        scope.loginoutstatus = false;
        scope.loginpopup = false;
        scope.withlogin = false;
        scope.withoutlogin = true;
        scope.showhidetestbuttons();
        scope.divloginblock = function() {
            scope.loginpopup = scope.loginpopup ? false : true;

        };
        scope.validate = function() {

            if ((scope.username).indexOf("@") != -1) {

                if (!scope.ValidateEmail(scope.username)) {
                    scope.username = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!scope.Validatnumber(scope.username) || (scope.username).length != 9) {
                    alert("Please enter valid ProfileID/Email");
                    scope.username = '';
                    return false;

                } else {
                    return true;
                }

            }
        };
        scope.loginsubmit = function() {

            if (scope.username === "" || scope.username === null || scope.username === "ProfileID/EmailID") {
                alert("Please enter user name");
                return false;
            } else if (scope.password === "" || scope.password === null || scope.password === "Enter the Password") {

                alert("Please enter password");
                return false;
            } else {
                if (scope.validate()) {
                    authSvc.login(scope.username, scope.password).then(function(response) {
                        console.log(response);
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        var custidlogin = authSvc.getCustId();
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            console.log('custStatus');
                            console.log(innerresponse.data);

                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (innerresponse.data !== undefined && innerresponse.data !== null && innerresponse.data !== '') ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }

                            if (custProfileStatus === 439) {
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        window.location = "home";
                                    } else {
                                        window.location = "mobileverf";
                                    }
                                } else {
                                    window.location = "missingfields/" + missingStatus;
                                }
                            } else {
                                window.location = "blockerController/" + responsemiss.response[0].VerificationCode;
                            }

                        });
                        scope.loginpopup = false;
                        scope.showhidetestbuttons();
                    });

                }
            }
        };

        scope.ValidateEmail = function(email) {
            var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return expr.test(email);
        };
        scope.Validatnumber = function(num) {
            var expr1 = /[0-9 -()+]+$/;
            return expr1.test(num);
        };
        scope.ClearlocalStorage = function() {
            authSvc.logout();
        };


        scope.viewfullmyprofile = function() {
            var custidlogin = authSvc.getCustId();
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custidlogin);
            var realpath = 'viewFullProfileCustomer';
            window.open(realpath, '_self');
        };
        scope.redirecthomeordashboard = function() {
            sessionStorage.removeItem("LoginPhotoIsActive");
            var custidlogin = authSvc.getCustId();
            if (custidlogin !== null && custidlogin !== "" && custidlogin !== undefined) {
                var realpaths = 'home';
                window.open(realpaths, "_self");

            } else {
                var realpath = '/';
                window.open(realpath, "_self");
            }

        };
        scope.searchpage = function(typeurl) {

            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    var realpath = 'General?selectedIndex=2';
                    window.open(realpath, "_self");
                    $rootscope.$broadcast("profile", 2);
                    break;
                case "general":
                    var realpathgen = 'General?selectedIndex=0';
                    window.open(realpathgen, "_self");
                    $rootscope.$broadcast("profile", 0);
                    break;
                case "advanced":
                    var realpathadvan = 'General?selectedIndex=1';
                    window.open(realpathadvan, "_self");
                    $rootscope.$broadcast("profile", 1);
                    break;
            }
        };

        scope.homepagelinks = function(typeurl) {
            var currentstatte = $state.current;
            switch (typeurl) {
                case "BookMarked":
                    if (currentstatte.name === "dashboardnew") {
                        var realpath = 'home?type=MB';
                        window.open(realpath, "_self");
                    } else {
                        var realpathb = 'Dashboard?type=MB';
                        window.open(realpathb, "_self");
                    }
                    break;
                case "BookMarkedme":

                    if (currentstatte.name === "dashboardnew") {
                        var BookMarkedme = 'home?type=WB';
                        window.open(BookMarkedme, "_self");
                    } else {
                        var BookMarkedmes = 'Dashboard?type=WB';
                        window.open(BookMarkedmes, "_self");
                    }
                    break;
                case "Ignored":

                    if (currentstatte.name === "dashboardnew") {
                        var Ignored = 'home?type=I';
                        window.open(Ignored, "_self");
                    } else {
                        var Ignoreds = 'Dashboard?type=I';
                        window.open(Ignoreds, "_self");
                    }
                    break;
                case "myprofile":

                    if (currentstatte.name === "dashboardnew") {
                        var myprofile = 'home?type=WV';
                        window.open(myprofile, "_self");
                    } else {
                        var myprofiledd = 'Dashboard?type=WV';
                        window.open(myprofiledd, "_self");
                    }
                    break;
                case "myhome":
                    sessionStorage.removeItem("LoginPhotoIsActive");

                    if (currentstatte.name === "dashboardnew") {
                        var myhome = 'home?type=C';
                        window.open(myhome, "_self");
                    } else {
                        var ddddd = 'Dashboard?type=C';
                        window.open(ddddd, "_self");
                    }

                    break;
                case "Chats":

                    if (currentstatte.name === "dashboardnew") {
                        var Chatsss = 'home?type=Chats';
                        window.open(Chatsss, "_self");
                    } else {
                        var Chats = 'Dashboard?type=Chats';
                        window.open(Chats, "_self");
                    }
                    break;
                case "Requests":

                    if (currentstatte.name === "dashboardnew") {
                        var Requests = 'home?type=Requests';
                        window.open(Requests, "_self");
                    } else {
                        var Requestsss = 'Dashboard?type=Requests';
                        window.open(Requestsss, "_self");
                    }
                    break;
                case "Express":

                    if (currentstatte.name === "dashboardnew") {
                        var Express = 'home?type=Express';
                        window.open(Express, "_self");
                    } else {
                        var Expressdd = 'Dashboard?type=Express';
                        window.open(Expressdd, "_self");
                    }
                    break;
            }
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            scope.$broadcast('showforgetpassword');

        };
        scope.$on("notify-error", function(event, value) {
            console.log(value);
            var logincustid = authSvc.getCustId();
            var httperrorpopupstatus = sessionStorage.getItem("httperrorpopupstatus");
            console.log(httperrorpopupstatus);
            if (httperrorpopupstatus !== "1") {
                httperrorpopupstatus = 1;
                alertpopup.dynamicpopup("httperrorpopup.html", scope, uibModal, 'sm');
            }
            customerviewfullprofileservices.getCustomerApplicationErroLog(value.statusText, logincustid, value.data.Message, value.status).then(function(response) {
                console.log(response);
            });

        });

        scope.modalpopupclosehttp = function() {
            var httperrorpopupstatus = 1;
            sessionStorage.setItem("httperrorpopupstatus", httperrorpopupstatus);
            alertpopup.dynamicpopupclose();
        };
        scope.feedbackpage = function() {
            var httperrorpopupstatus = 1;
            sessionStorage.setItem("httperrorpopupstatus", httperrorpopupstatus);
            window.open("feedback", "_self");
        };
    }
]);
app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    '$mdDialog', 'arrayConstants', 'SelectBindServiceApp', '$rootScope', 'alert', '$timeout', 'missingFieldService',
    function(scope, homepageservices, authSvc, successstoriesdata, $mdDialog,
        arrayConstants, service, $rootscope, alerts, timeout, missingFieldService) {
        scope.fromge = 1;
        scope.topage = 5;
        scope.loginpopup = false;
        scope.homeinit = function() {
            timeout(function() {
                successstoriesdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
            }, 1000);
        };
        scope.divloginblock = function() {
            scope.loginpopup = scope.loginpopup ? false : true;
        };
        scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
        scope.validate = function() {
            if ((scope.username).indexOf("@") != -1) {
                if (!scope.ValidateEmail(scope.username)) {
                    scope.username = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!scope.Validatnumber(scope.username) || (scope.username).length != 9) {
                    alert("Please enter valid ProfileID/Email");
                    scope.username = '';
                    return false;

                } else {
                    return true;
                }

            }
        };
        scope.loginsubmit = function() {
            if (scope.username === "" || scope.username === null || scope.username === "ProfileID/EmailID") {
                alert("Please enter user name");
                return false;
            } else if (scope.password === "" || scope.password === null || scope.password === "Enter the Password") {
                alert("Please enter password");
                return false;
            } else {
                if (scope.validate()) {
                    authSvc.login(scope.username, scope.password).then(function(response) {
                        console.log(response);
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            console.log('custStatus');
                            console.log(innerresponse.data);


                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (innerresponse.data !== undefined && innerresponse.data !== null && innerresponse.data !== '') ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }

                            if (custProfileStatus === 439) {
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        window.location = "home";
                                    } else {
                                        window.location = "mobileverf";
                                    }
                                } else {
                                    window.location = "missingfields/" + missingStatus;
                                }
                            } else {
                                window.location = "blockerController/" + responsemiss.response[0].VerificationCode;
                            }

                        });

                    });
                }
            }
        };
        scope.ValidateEmail = function(email) {
            var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return expr.test(email);
        };
        scope.Validatnumber = function(num) {
            var expr1 = /[0-9 -()+]+$/;
            return expr1.test(num);
        };


        scope.ValidatequickRegister = function() {
            var srchobject = {};
            srchobject.intCusID = null;
            srchobject.strCust_id = null;
            srchobject.intGender = scope.gender;
            srchobject.FromAge = scope.Agefrom;
            srchobject.ToAge = scope.Ageto;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country;
            srchobject.State = null;
            srchobject.Visastatus = null;
            srchobject.Educationcategory = null;
            srchobject.Education = null;
            srchobject.Professiongroup = null;
            srchobject.iFromSal = null;
            srchobject.iToSal = null;
            srchobject.iManglinkKujaDosham = null;
            srchobject.iStarLanguage = null;
            srchobject.Stars = null;
            srchobject.iDiet = null;
            srchobject.intPhotoCount = null;
            srchobject.StartIndex = null;
            srchobject.EndIndex = null;
            srchobject.i_Registrationdays = null;
            srchobject.iAnnualincome = null;
            srchobject.flagforurl = null;
            srchobject.SavedSearch = null;
            srchobject.SearchPageID = null;
            srchobject.PageName = null;
            srchobject.SavedSearchresultid = null;
            srchobject.Searchresult = null;

            sessionStorage.setItem("homepageobject", JSON.stringify(srchobject));
            var realpath = 'General?selectedIndex=2';
            window.open(realpath, "_self");

        };

        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            scope.$broadcast('showforgetpassword');

        };
        // scope.searchpage = function() {
        //     sessionStorage.removeItem("homepageobject");
        //     var realpath = 'General?selectedIndex=2';
        //     window.open(realpath, "_self");
        //     //  $rootscope.$broadcast("profile", 2);
        // };

    }
]);
app.controller('missingfieldsctrl', ['$scope', 'commonFactory', 'authSvc', '$mdDialog',
    'missingFieldService', '$timeout', '$stateParams', '$uibModal',

    function(scope, commonFactory,
        authSvc, $mdDialog, missingFieldService, timeout, stateParams, uibModal) {
        var logincustid = authSvc.getCustId();
        scope.MFSelectArray = [];
        scope.dataqr = parseInt(stateParams.id);

        scope.misObj = {};

        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

        scope.showpopup = function() {

            var modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'missingfieldspopup.html',
                scope: scope,
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                windowClass: 'full'
            });

            scope.starArr = commonFactory.starBind(1);
            missingFieldService.missingFieldSelect(scope.custid).then(function(response) {

                scope.MFSelectArray = (JSON.parse(response.data)[0]);
                console.log('test');
                console.log(scope.MFSelectArray);
                scope.divSkip = true;

                if (scope.MFSelectArray.Customerdetailsflag === 1) {
                    scope.divHeight = commonFactory.checkvals(scope.MFSelectArray.Height) ? true : false;
                    scope.divMaritalstatus = commonFactory.checkvals(scope.MFSelectArray.MaritalStatus) ? true : false;
                    scope.divComplexion = commonFactory.checkvals(scope.MFSelectArray.Complexion) ? true : false;
                    if (scope.divHeight === true && scope.divMaritalstatus === true && scope.divComplexion === true) {
                        scope.divSkip = false;
                    }
                }

                if (scope.MFSelectArray.Professionflag === 1) {
                    scope.divProfession = commonFactory.checkvals(scope.MFSelectArray.JoblocationCountryID) ? true : false;
                    scope.divSalary = commonFactory.checkvals(scope.MFSelectArray.Salary) ? true : false;
                }
                if (scope.divProfession === true && scope.divSkip === false) {
                    scope.divCol = 'none';
                }

                if (scope.MFSelectArray.AstroFlag === 1) {
                    scope.divStarlanguage = commonFactory.checkvals(scope.MFSelectArray.TypeofStar) ? true : false;
                    scope.divStar = commonFactory.checkvals(scope.MFSelectArray.StarName) ? true : false;
                    scope.divGothram = commonFactory.checkvals(scope.MFSelectArray.MeternalGothram) ? true : false;
                    //lblAstroFlag.Text = !scope.MFSelectArray.AstroFlag ? dsresult.Tables[0].Rows[0]["AstroFlag"].ToString() : string.Empty;
                }

                if (scope.MFSelectArray.ParentsFatherFlag === 1) {
                    scope.divFatherNative = commonFactory.checkvals(scope.MFSelectArray.FFNative) ? true : false;
                    // lblFFCustFamilyID.Text = !scope.MFSelectArray.FFCustFamilyID ? dsresult.Tables[0].Rows[0]["FFCustFamilyID"].ToString() : string.Empty;
                }
                if (scope.MFSelectArray.ParentsMotherFlag === 1) {
                    scope.divMotherNative = commonFactory.checkvals(scope.MFSelectArray.MFNative) ? true : false;
                    //lblMFCustFamilyID.Text = !scope.MFSelectArray.MFCustFamilyID ? dsresult.Tables[0].Rows[0]["MFCustFamilyID"].ToString() : string.Empty;
                }
                // if (dsresult.Tables[0].Rows[0]["ParentsFatherFlag"].ToString().Equals("1") || dsresult.Tables[0].Rows[0]["ParentsMotherFlag"].ToString().Equals("1")) {
                //     lblParentsFlag.Text = "1";
                // }

                //if (dsresult.Tables[0].Rows[0]["Propertyflag"].ToString().Equals("1"))
                //{
                scope.divProperty = commonFactory.checkvals(scope.MFSelectArray.Property) ? true : false;
                scope.divIssharedproperty = commonFactory.checkvals(scope.MFSelectArray.IsSharedProperty) ? true : false;
                //}

            });


        };
        missingFieldService.GetCustStatus(scope.custid).then(function(response) {
            console.log('custStatus');
            console.log(response);

        });
        scope.cancel = function() {
            $mdDialog.cancel();
        };

        scope.changeBind = function(type, parentval, countryVal) {
            switch (type) {
                case 'Country':
                    scope.stateArr = commonFactory.StateBind(parentval);
                    break;

                case 'State':
                    if (countryVal === '1' || countryVal === 1) {
                        scope.districtArr = commonFactory.districtBind(parentval);
                    } else {
                        scope.districtArr = [];
                        scope.cityeArr = commonFactory.districtBind(parentval);
                    }
                    break;

                case 'District':
                    scope.cityeArr = commonFactory.cityBind(parentval);
                    break;

                case 'star':
                    scope.starArr = commonFactory.starBind(parentval);
                    break;
            }

        };

        scope.misFieldsSubmit = function(obj) {
            var misInputobj = {
                Starlanguage: obj.ddlstarlanguages,
                i_updateflag: 1,
                iJoblocationCountry: obj.lstJoblocCountry,
                iJoblocationDistrict: obj.lstjoblocdistrict,
                iJoblocationState: obj.lstjoblocstate,
                iJobLocation: obj.lstjoblocation,
                IsSharedProperty: obj.rdlSharedProperty,
                AstroFlag: scope.MFSelectArray.AstroFlag,
                ParentsFlag: (scope.MFSelectArray.ParentsFatherFlag || scope.MFSelectArray.ParentsFatherFlag) ? 1 : 0,
                MFCustFamilyID: scope.MFSelectArray.MFCustFamilyID,
                FFCustFamilyID: scope.MFSelectArray.FFCustFamilyID,
                Gothram: obj.txtgothram,
                MotherNative: obj.txtMothernative,
                Salarycurrency: obj.ddlAnnualincome,
                Salary: obj.txtSalary,
                Complexion: obj.lstComplexion,
                Star: obj.lststar,
                FatherNative: obj.txtfathernative,
                Propertylakhs: obj.txtProperty,
                Maritalstatus: obj.lstMaritalstatus,
                Height: obj.ddlFromheight,
                CustID: scope.custid
            };

            console.log(JSON.stringify(misInputobj));
            missingFieldService.missingFieldSubmit(misInputobj).then(function(response) {
                console.log(response);
                scope.redirectToMobVerification();
                scope.cancel();
            });
        };

        scope.redirectToMobVerification = function() { window.location = "mobileverf"; };

        scope.pagerload = function(type) {

            timeout(function() {


                switch (scope.dataqr) {
                    case 1:
                        scope.$broadcast('datagetinedu', 'showEduModal');
                        break;
                    case 2:
                        scope.$broadcast('datagetinedu', 'showProfModal');
                        break;

                    case 3:
                        scope.$broadcast('datagetinParent', 'parent');
                        break;

                    case 4:
                        scope.$broadcast('datagetinAstro');
                        break;
                    case 5:
                        scope.showpopup();
                        break;
                }

            }, 50);

        };
        scope.pagerload(scope.dataqr);

        scope.currencyChange = function() {

            // if (!commonFactory.checkvals(scope.ddlAnnualincome)) {
            //     alert("Please select Curency");
            // }
        };



    }
]);
app.controller('mobileverifyController', ['$scope', 'mobileVerificationService', 'authSvc', function(scope, mobileVerificationService, authSvc) {

    scope.pageloadSelect = {};

    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    scope.pageLoad = function(custid) {

        mobileVerificationService.getmobileverificationData(custid).then(function(res) {

            scope.pageloadSelect = res.data;
            scope.mobVerify = scope.pageloadSelect.ismobileverf === true ? true : false;
            scope.emailVerify = scope.pageloadSelect.isEmailverf === true ? true : false;
            if (scope.pageloadSelect.ismobileverf === true && scope.pageloadSelect.isEmailverf === true) {
                window.location = "home?type=C";
            }
        });

    };

    scope.pageLoad(scope.custid);


    scope.verifyMobileCode = function() {
        if (scope.pageloadSelect.NumberVerificationcode === scope.txtEnteryourpin) {
            mobileVerificationService.verifyMobile(scope.txtEnteryourpin, 2, scope.pageloadSelect.Cust_ContactNumbers_ID).then(function(res) {

                scope.pageloadSelect = scope.pageLoad(scope.custid);
                scope.pageloadSelect.ismobileverf = true;
                if (scope.pageloadSelect.ismobileverf === true && scope.pageloadSelect.isEmailverf === true) {
                    window.location = "home?type=C";
                }
                return false;
            });

        } else {
            alert('Please enter valid mobile verify code');
        }


    };
    scope.resendMobCode = function() {
        var inputOBj = {
            iCountryID: scope.pageloadSelect.CountryCodeID,
            iCCode: scope.pageloadSelect.CountryCodes,
            MobileNumber: scope.pageloadSelect.Number,
            CustContactNumbersID: scope.pageloadSelect.Cust_ContactNumbers_ID
        };
        mobileVerificationService.resendMobileCode(inputOBj).then(function(res) {
            scope.pageLoad(scope.custid);
            alert('Valid Mobile Verify code sent successfully');
        });
    };

    scope.resendMailLink = function() {
        mobileVerificationService.resendEmailLink(scope.custid).then(function(res) {
            alert('We have re-sent a mail to the provided Email');
        });
    };

}]);
app.controller("payment",function()
{

});
app.controller('paymentresponse', ['$scope',
    function(scope) {
        scope.pageloadpayment = function() {
            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
        };
        scope.backtopayment = function() {
            var realpath = 'UpgradeMembership';
            window.open(realpath, "_self");
        };

    }
]);
app.controller("registration", function () {

});
app.controller("registrationReg", function () {

});
app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    '$location', 'getArray', '$timeout', '$rootScope', 'commonFactory', 'missingFieldService',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, getArray, timeout, $rootscope, commonpopup, missingFieldService) {
        scope.searchTerm = 0;
        scope.selectcaste = 0;
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.truepartnerrefine = true;
        scope.showcontrols = true;
        var SearchRequest = 0;
        var logincustid = authSvc.getCustId();
        scope.typesearch = "";
        scope.savedsearchselect = [];
        var globalheight;
        var globalheightto;
        var refineheightfrom;
        var refineheightto;
        scope.getpaidstatus = authSvc.getpaidstatus();
        scope.savedclass = scope.getpaidstatus === '1' ? true : false;
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.genderdiabled = scope.custid !== null ? true : false;
        var searchObjectquery = $location.search();
        scope.selectedIndex = searchObjectquery.selectedIndex;
        scope.loadinging = true;
        scope.activated = true;
        scope.casteshow = true;
        scope.slideshow = "";
        scope.mesagesend = "";
        scope.generalsavedsearchbtn = "Save&Search";
        scope.advancedsavedsearchbtn = "Save&Search";
        scope.SearchResult_IDflag = null;
        scope.filtervalues = function(arr, whereValue) {
            var storeValue = "";
            if (whereValue.indexOf(',') === -1) {
                _.filter(arr, function(obj) {
                    if ((obj.value) == parseInt(whereValue)) {
                        storeValue = obj.label;
                    }
                });
            } else {
                var arrvals = whereValue.split(',');
                _.each(arrvals, function(item, index) {
                    _.filter(arr, function(obj) {
                        if ((obj.value) == parseInt(arrvals[index])) {
                            storeValue = commonpopup.checkvals(storeValue) ? storeValue + ',' + obj.label : obj.label;
                        }
                    });
                });
            }
            return storeValue;
        };

        scope.textlabels = function(fromheight, toheight, caste, education) {
            scope.HeightFromtext = scope.filtervalues(scope.height, fromheight) !== '' ? ((scope.filtervalues(scope.height, fromheight)).split('-'))[0] : '';
            scope.Heighttotext = scope.filtervalues(scope.height, toheight) !== '' ? ((scope.filtervalues(scope.height, toheight)).split('-'))[0] : '';
            scope.educationcategorytxt = scope.filtervalues(scope.educationcategory, education) !== '' ? (scope.filtervalues(scope.educationcategory, education)) : '';
        };
        scope.checkLength = function() {
            var textboxprofileid = document.getElementById("txtProfileid");
            var textbox = document.getElementById("txtFirstNameProfileid");
            var textboxlastname = document.getElementById("txtLastNameProfileid");
            if ((textboxprofileid.value !== "" && textboxprofileid.value !== null) || (textbox.value !== "" && textbox.value !== null) || (textboxlastname.value !== "" && textboxlastname.value !== null)) {
                if (textbox.value !== "" && textbox.value !== null) {
                    if (textbox.value.length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For Name', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else if (textboxlastname.value !== "" && textboxlastname.value !== null) {
                    if (textboxlastname.value.length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For LastName', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please enter atleast one fileld', 2500);
                return false;
            }
        };
        scope.controlsbinding = function() {
            scope.height = arrayConstants.height;
            scope.educationcategory = arrayConstants.educationcategory;
            scope.MaritalStatus = arrayConstants.MaritalStatus;
            scope.Mothertongue = arrayConstants.Mothertongue;
            scope.visastatus = arrayConstants.visastatus;
            scope.stars = arrayConstants.stars;
            timeout(function() {
                scope.Country = getArray.GArray('Country');
                scope.Professiongroup = getArray.GArray('ProfGroup');
                scope.Currency = getArray.GArray('currency');
            }, 1000);
        };

        scope.applycolors = function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        };
        scope.savedsearchselectmethods = function(custid, SaveSearchName, iEditDelete) {
            searches.savedsearchselectmethod(custid, SaveSearchName, iEditDelete).then(function(response) {
                scope.savedsearchselect = [];
                _.each(response.data, function(item) {
                    scope.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(scope.custid, "", 1).then(function(response) {
                    scope.savedsearchselect = [];
                    console.log(response);
                    _.each(response.data, function(item) {

                        scope.savedsearchselect.push(item);
                    });
                });
            }
        };
        scope.$watch("savedsearchselect", function(current, old) {

            scope.savedsearchselect = current;
        });
        scope.arrayToString = function(string) {
            return (string.split(',')).map(Number);
        };
        scope.partnerbindings = function(response) {
            scope.casteshow = false;
            scope.gender = (response.data.intGender) === 2 ? 2 : 1;
            scope.AgeFrom = response.data.Ageto;
            scope.Ageto = response.data.Agefrom;
            scope.HeightFrom = response.data.Heightto;
            scope.Heightto = response.data.Heightfrom;
            scope.maritalstatus = scope.arrayToString(response.data.Maritalstatus);
            scope.educationcat = scope.arrayToString(response.data.Educationcategory);
            scope.country = scope.arrayToString(response.data.Country);
            scope.religion = response.data.Religion;
            scope.mothertongue = scope.arrayToString(response.data.MotherTongue);
            scope.caste = response.data.Caste !== null ? scope.arrayToString(response.data.Caste) : "0";
            scope.castetext = response.data.CasteText;
            scope.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.State = response.data.Country !== null ? commonFactory.StateBind(response.data.Country) : "0";
            scope.stateadvance = response.data.State !== null ? scope.arrayToString(response.data.State) : "0";
            scope.textlabels(response.data.Heightto, response.data.Heightfrom, response.data.Caste, response.data.Educationcategory);
        };



        scope.generalpageload = function() {
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                scope.controlsbinding();
                searches.partnerdetails(scope.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                });
                scope.savedsearchselectmethods(scope.custid, "", 1);
            } else if (scope.object !== undefined && scope.object !== null && scope.object !== null) {
                scope.truepartner = true;
                scope.truepartnerrefine = true;
                SearchRequest = {
                    intCusID: null,
                    strCust_id: null,
                    intGender: (scope.object.intGender) === '2' ? 2 : 1,
                    FromAge: scope.object.FromAge,
                    ToAge: scope.object.ToAge,
                    iFromHeight: null,
                    iToHeight: null,
                    Maritalstatus: null,
                    intReligionID: scope.object.intReligionID,
                    MotherTongue: null,
                    Caste: scope.object.Caste !== null ? scope.object.Caste : null,
                    iPhysicalstatus: null,
                    Complexion: null,
                    Country: scope.object.Country,
                    State: null,
                    Visastatus: null,
                    Educationcategory: null,
                    Education: null,
                    Professiongroup: null,
                    iFromSal: null,
                    iToSal: null,
                    iManglinkKujaDosham: null,
                    iStarLanguage: null,
                    Stars: null,
                    iDiet: null,
                    intPhotoCount: null,
                    StartIndex: 1,
                    EndIndex: 8,
                    i_Registrationdays: null,
                    iAnnualincome: null,
                    flagforurl: null,
                    SavedSearch: null,
                    SearchPageID: null,
                    PageName: null,
                    SavedSearchresultid: null,
                    Searchresult: null
                };
                scope.generalsearchsubmit("homepage", 1, 8);
            } else {
                scope.controlsbinding();
                scope.truepartner = true;
                scope.truepartnerrefine = true;
                scope.gender = 2;
                scope.AgeFrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.HeightFrom = 1;
                scope.Heightto = 38;

            }
        };
        scope.clearSearchTerm = function() {
            scope.searchTerm = '';
        };
        scope.resetfunctionality = function() {
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.gender = 2;
            scope.AgeFrom = 18;
            scope.Ageto = 30;
            scope.religion = 1;
            scope.HeightFrom = 1;
            scope.Heightto = 38;
            scope.maritalstatus = null;
            scope.educationcat = null;
            scope.country = null;
            scope.mothertongue = null;
            scope.caste = null;
            scope.regdays = null;
            scope.physicalstatusadvance = null;
            scope.stateadvance = null;
            scope.visastatusadvance = null;
            scope.Educationadvance = null;
            scope.Professiongroupadvance = null;
            scope.monthsalcurrency = null;
            scope.kujadosham = null;
            scope.starlanguage = null;
            scope.starsadvance = null;
            scope.profileid = "";
            scope.firstname = "";
            scope.lastname = "";
        };
        scope.returnnullvalue = function(value) {
            var obj = value !== null && value !== undefined && value !== "" && (value.toString()) !== "0" && (value.toString()) !== 0 ? (value.toString()) : null;
            return obj;
        };
        scope.submitobjectcommongenad = function(frompage, topage) {
            SearchRequest = {
                intCusID: scope.custid,
                strCust_id: scope.custid !== null ? scope.custid : "",
                intGender: scope.gender,
                FromAge: scope.AgeFrom,
                ToAge: scope.Ageto,
                iFromHeight: scope.HeightFrom,
                iToHeight: scope.Heightto,
                Maritalstatus: scope.returnnullvalue(scope.maritalstatus),
                intReligionID: scope.religion,
                MotherTongue: scope.returnnullvalue(scope.mothertongue),
                Caste: scope.returnnullvalue(scope.caste),
                iPhysicalstatus: scope.typesearch === "advanced" ? scope.physicalstatusadvance : null,
                Complexion: null,
                Country: scope.returnnullvalue(scope.country),
                State: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.stateadvance) : null,
                Visastatus: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.visastatusadvance) : null,
                Educationcategory: scope.returnnullvalue(scope.educationcat),
                Education: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.Educationadvance) : null,
                Professiongroup: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.Professiongroupadvance) : null,
                iFromSal: scope.typesearch === "advanced" ? scope.fromcurrency : null,
                iToSal: scope.typesearch === "advanced" ? scope.tocurrency : null,
                iManglinkKujaDosham: scope.typesearch === "advanced" ? scope.kujadosham : null,
                iStarLanguage: scope.typesearch === "advanced" ? scope.starlanguage : null,
                Stars: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.starsadvance) : null,
                iDiet: scope.typesearch === "advanced" ? scope.diet : null,
                intPhotoCount: scope.isCheckedphoto === true ? 1 : null,
                StartIndex: frompage,
                EndIndex: topage,
                i_Registrationdays: scope.typesearch === "advanced" ? scope.regdays : null,
                iAnnualincome: scope.typesearch === "advanced" ? scope.monthsalcurrency : null,
                flagforurl: null,
                SavedSearch: null,
                SearchPageID: null,
                PageName: null,
                SavedSearchresultid: null,
                Searchresult: null
            };
            return SearchRequest;
        };
        scope.generalsearchsubmit = function(type, frompage, topage, form, searchsavedidupdate) {
            scope.loadinging = frompage === 1 ? false : true;
            scope.showcontrols = false;
            scope.truepartner = false;
            if (scope.custid !== null && scope.custid !== "" && scope.custid !== undefined) {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
            switch (type) {
                case "advanced":
                case "general":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                scope.showcontrols = false;
                                scope.truepartner = false;
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showcontrols = true;
                                scope.truepartner = true;
                                scope.truepartnerrefine = true;
                                alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                            }
                        } else {
                            if (scope.custid !== null && scope.custid !== "" && scope.custid !== undefined) {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showloginpopup();
                            }
                        }
                        scope.loadinging = true;
                    });
                    if (scope.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    break;
                case "homepage":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.PartnerProfilesnew = [];
                        if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                        }
                        scope.loadinging = true;
                    });
                    scope.$broadcast('loadmore');
                    break;
                case "profileid":
                    scope.typesearch = type;
                    if (scope.checkLength()) {
                        SearchRequest = {
                            intCusID: scope.custid,
                            intGender: scope.gender,
                            strLastName: scope.lastname,
                            strFirstName: scope.firstname,
                            strProfileID: scope.profileid,
                            intCasteID: null,
                            StartIndex: frompage,
                            EndIndex: topage,
                        };
                        searches.profileidsearch(SearchRequest).then(function(response) {
                            if (parseInt(frompage) === 1) {
                                scope.PartnerProfilesnew = [];
                                if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                    _.each(response.data, function(item) {
                                        scope.PartnerProfilesnew.push(item);
                                    });
                                } else {
                                    scope.showcontrols = true;
                                    scope.truepartner = true;
                                    scope.truepartnerrefine = true;
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                }
                            } else {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            }
                            scope.loadinging = true;
                        });
                        if (scope.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
                    } else {
                        scope.loadinging = true;
                        scope.showcontrols = true;
                        scope.truepartner = true;
                        scope.truepartnerrefine = true;
                    }
                    break;
                case "savedsearch":
                    scope.submitobjectcommongenad(frompage, topage);
                    scope.submitsavedsearchobject = {
                        customerpersonaldetails: SearchRequest,
                        GetDetails: {
                            CustID: scope.custid !== null ? scope.custid : "",
                            Lookingfor: scope.gender,
                            FromAge: scope.AgeFrom,
                            ToAge: scope.Ageto,
                            FromHeight: scope.HeightFrom,
                            ToHeight: scope.Heightto,
                            Maritalstatus: scope.returnnullvalue(scope.maritalstatus),
                            Religion: scope.religion,
                            Mothertongue: scope.returnnullvalue(scope.mothertongue),
                            Caste: scope.returnnullvalue(scope.caste),
                            Complexion: null,
                            Physicalstatus: type === "advanced" ? scope.physicalstatusadvance : null,
                            CountyWorking: scope.returnnullvalue(scope.country),
                            StateWorking: type === "advanced" ? scope.returnnullvalue(scope.stateadvance) : null,
                            Visastatus: type === "advanced" ? scope.returnnullvalue(scope.visastatusadvance) : null,
                            Educationcategory: scope.returnnullvalue(scope.educationcat),
                            EducationGroup: type === "advanced" ? scope.returnnullvalue(scope.Educationadvance) : null,
                            Educationspecialization: null,
                            professioncategory: null,
                            Professiongroup: type === "advanced" ? scope.returnnullvalue(scope.Professiongroupadvance) : null,
                            Professionspecialization: null,
                            Annualincome: type === "advanced" ? scope.monthsalcurrency : null,
                            FromSalary: type === "advanced" ? scope.fromcurrency : null,
                            ToSalary: type === "advanced" ? scope.tocurrency : null,
                            Starlanguage: type === "advanced" ? scope.starlanguage : null,
                            Star: type === "advanced" ? scope.returnnullvalue(scope.starsadvance) : null,
                            ManglikKujaDosham: type === "advanced" ? scope.kujadosham : null,
                            Drink: null,
                            Smoke: null,
                            Diet: type === "advanced" ? scope.diet : null,
                            Registrationdays: type === "advanced" ? scope.regdays : null,
                            CustSavedSearchName: form.savesearchNames !== null && form.savesearchNames !== undefined && form.savesearchNames !== "" ? form.savesearchNames : null,
                            searchPageName: type === "advanced" ? "Advancesearch" : "Generalsearch",
                            searchPageID: type === "advanced" ? "3" : "2",
                            SearchResult_ID: searchsavedidupdate !== null && searchsavedidupdate !== "" && searchsavedidupdate !== undefined ? searchsavedidupdate : null
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        scope.savedsearchselectmethods(scope.custid, "", 1);
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.loadinging = true;
                    });

                    if (scope.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    scope.modalpopupclose();
                    break;
            }

        };
        scope.savedseapopup = function(type) {
            scope.typesearch = type;
            switch (type) {
                case "general":
                    if (scope.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
                case "advanced":
                    if (scope.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.$on("modifyursearchpartner", function(event) {
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.object !== undefined && scope.object !== null && scope.object !== null) {
                scope.controlsbinding();
                scope.gender = (scope.object.intGender) === 2 ? 2 : 1;
                scope.AgeFrom = scope.object.FromAge;
                scope.Ageto = scope.object.ToAge;
                scope.country = scope.object.Country;
                scope.religion = scope.object.intReligionID;
                scope.caste = scope.object.Caste !== null ? scope.object.Caste : "0";
                scope.HeightFrom = 1;
                scope.Heightto = 38;
                sessionStorage.removeItem("homepageobject");
            }
            scope.showcontrols = true;
            scope.truepartner = true;
            scope.truepartnerrefine = true;
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide, slideshow) {
            scope.slideshow = "slideshow";
            scope.generalsearchsubmit(scope.typesearch, frompageslide, topageslide);
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.State = commonFactory.StateBind(modal);
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind(modal);
                    break;
                case 'caste':
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(scope.religion, (modal).toString());
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind(modal);
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.slideshow = "";
            if (scope.custid !== null && scope.custid !== undefined && scope.custid !== "") {
                scope.generalsearchsubmit(scope.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            scope.generalsearchsubmit(scope.typesearch, 1, 8);
            scope.$broadcast('setslide');
        };
        scope.hightFromrefine = function() {
            scope.HeightFromtext = scope.checkheight(scope.HeightFrom);
        };
        scope.hightTorefine = function() {
            scope.Heighttotext = scope.checkheight(scope.Heightto);
        };

        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        };
        var numberInRange = function(number, lower, upper) {
            return number >= lower && number <= upper;
        };
        var checknumber = function(value) {
            if (numberInRange(value, 0, 11)) {
                return "4'" + value + " in";
            } else if (numberInRange(value, 12, 23)) {

                value = (value % 12);
                return "5'" + value + " in";

            } else if (numberInRange(value, 24, 35)) {
                value = (value % 24);
                return "6'" + value + " in";
            } else if (numberInRange(value, 36, 41)) {
                value = (value % 36);
                return "7'" + value + " in";
            }
        };
        scope.showloginpopup = function() {
            commonpopup.open('login.html', scope, uibModal, 'sm');
        };
        scope.showloginpopupnew = function() {
            commonpopup.closepopup();
            commonpopup.open('loginpopup.html', scope, uibModal, 'sm');
        };

        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });
        scope.cancelpopup = function() {
            commonpopup.closepopup();
        };
        scope.validate = function(formloagin) {
            if ((formloagin.username).indexOf("@") !== -1) {
                if (!scope.ValidateEmail(formloagin.username)) {
                    formloagin.username = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!scope.Validatnumber(formloagin.username) || (formloagin.username).length !== 9) {
                    alert("Please enter valid ProfileID/Email");
                    formloagin.username = '';
                    return false;

                } else {
                    return true;
                }

            }
        };
        scope.loginsubmit = function(formloagin) {
            if (formloagin.username === "" || formloagin.username === null || formloagin.username === "ProfileID/EmailID") {
                alert("Please enter user name");
                return false;
            } else if (formloagin.password === "" || formloagin.password === null || formloagin.password === "Enter the Password") {
                alert("Please enter password");
                return false;
            } else {
                if (scope.validate(formloagin)) {
                    authSvc.login(formloagin.username, formloagin.password).then(function(response) {
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        var custidlogin = authSvc.getCustId();
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (innerresponse.data !== undefined && innerresponse.data !== null && innerresponse.data !== '') ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        window.location = "home";
                                    } else {
                                        window.location = "mobileverf";
                                    }
                                } else {
                                    window.location = "missingfields/" + missingStatus;
                                }
                            } else {
                                window.location = "blockerController/" + responsemiss.response[0].VerificationCode;
                            }
                        });
                        commonpopup.closepopup();
                    });
                }
            }
        };
        scope.ValidateEmail = function(email) {
            var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return expr.test(email);
        };
        scope.Validatnumber = function(num) {
            var expr1 = /[0-9 -()+]+$/;
            return expr1.test(num);
        };
        scope.gettingsavedsearcheditsearch = function(type, SearchResult_ID, SearchpageID) {
            switch (type) {
                case "search":
                    scope.PartnerProfilesnew = [];
                    var typeofsearch;
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.generalsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.advancedsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        }
                        scope.generalsearchsubmit(typeofsearch, 1, 8, "");
                    });
                    break;
                case "edit":
                    scope.PartnerProfilesnew = [];
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        scope.showcontrols = true;
                        scope.truepartner = true;
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                            scope.selectedIndex = 2;
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.selectedIndex = 0;
                            scope.generalsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.selectedIndex = 1;
                            scope.advancedsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        }
                    });
                    break;
            }
        };
        scope.clickvalues = function(text) {
            scope.HeightFromtext = text;
        };
        scope.resetgenral = function(type) {
            switch (type) {
                case "general":
                    if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                        searches.partnerdetails(scope.custid, "", "").then(function(response) {
                            scope.resetfunctionality();
                            scope.partnerbindings(response);
                        });
                    } else {
                        scope.resetfunctionality();
                    }
                    break;
            }
        };

        $rootscope.$on("profile", function(event, indexvalue) {
            sessionStorage.removeItem("homepageobject");
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.showcontrols = true;
            scope.selectedIndex = indexvalue;
        });
        scope.redirectToviewfull = function(custid, logid) {
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '/viewFullProfileCustomer';
            if (logid !== undefined && logid !== "" && logid !== null) {
                authSvc.paymentstaus(scope.custid, scope).then(function(responsepaid) {
                    console.log(responsepaid);
                    if (responsepaid === true) {
                        window.open(realpath, '_blank');
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade online membership', 3000);
                    }
                });
            } else {
                window.open(realpath, '_blank');
            }
        };
        scope.$on("redirectToviewfullprofiles", function(event, custid, logid) {
            scope.redirectToviewfull(custid, logid);
        });
        scope.successfaileralert = function(msg, typewarning) {
            if (typewarning === "success") {
                alerts.timeoutoldalerts(scope, 'alert-success', msg, 2500);
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', msg, 2500);
            }
        };
        scope.$on('successfailer', function(event, msg, typewarning) {
            scope.successfaileralert(msg, typewarning);
        });

        scope.$on('popuplogin', function(event, url, custid) {
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = "";
            scope.messagecustid = custid;
            scope.modalbodyshow = 1;
            scope.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.sendmessages = function(form) {
            if (form !== undefined && form.message !== "" && form.message !== null && form.message !== undefined) {
                scope.$broadcast('sendmsg', 'M', scope.messagecustid, undefined, form, undefined);

            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please enter Message', 2500);
            }
        };
        scope.$on("modalpopupclose", function(event) {
            alerts.dynamicpopupclose();
        });

        scope.onlyAlphabets = function(e, t) {
            var inputValue = window.event.keyCode;
            if (!(inputValue >= 65 && inputValue <= 120) && (inputValue !== 32 && inputValue !== 0)) {
                event.preventDefault();
            }
        };
        scope.checkCasteParents = function() {
            if (commonpopup.checkvals(scope.mothertongue) && commonpopup.checkvals(scope.religion)) {

            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please select mothertongue and religion', 2500);
            }
        };
        // scope.$watch("AgeFrom", function(current, original) {
        //     scope.AgeFrom = current;
        // });
        // scope.$watch("Ageto", function(current, original) {
        //     scope.Ageto = current;
        // });
    }
]);
app.controller('searchregistration', ['$scope', 'getArray', 'commonFactory', 'basicRegistrationService', '$filter', 'authSvc', '$timeout', function(scope, getArray, commondependency, basicRegistrationService, filter, authSvc, timeout) {

    scope.month = 'month';
    scope.reg = {};
    scope.monthArr = [];

    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    scope.monthBind = function() {

        var option = [];

        _.each(monthArr, function(item) {
            option.push({ "label": item, "title": item, "value": item });
        });
        return option;
    };
    scope.date = function(str, from, to) {
        var Arr = [];

        for (var i = from; i <= to; i++) {
            var strValue = null;
            if (i <= 9) {
                strValue = "0" + i;
            } else {
                strValue = i;
            }
            Arr.push({ "label": strValue, "title": strValue, "value": strValue });
        }
        return Arr;
    };

    scope.year = function(str, from, to) {
        var Arr = [];

        for (var i = to; i >= from; i--) {
            Arr.push({ "label": i, "title": i, "value": i });
        }
        return Arr;
    };
    scope.monthArr = scope.monthBind();
    scope.dateArr = scope.date('', 1, 31);
    scope.yearArr = scope.year('', 1936, 1998);


    timeout(function() {
        scope.postedby = getArray.GArray('childStayingWith');
        scope.religion = getArray.GArray('Religion');
        scope.Mothertongue = getArray.GArray('Mothertongue');
        scope.Caste = getArray.GArray('Caste');
        scope.countryCode = getArray.GArray('countryCode');

    }, 1000);
    timeout(function() {
        scope.Country = getArray.GArray('Country');

    }, 500);

    scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];

    scope.dayChange = function(obj, type) {

        var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
        var minth30 = 'Apr,Jun,Sep,Nov';
        var month28 = 'Feb';


        if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {

        } else {
            if (type === 'day') {
                obj.ddlMM = '';
            } else {
                scope.dateArr = [];
                scope.dateArr = scope.date('DD', 1, 31);
                obj.ddlDD = '';
            }
        }
    };

    scope.changeBind = function(parentval, parentval2) {

        scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2) !== undefined && commondependency.listSelectedVal(parentval2) !== null && commondependency.listSelectedVal(parentval2) !== "" ? commondependency.listSelectedVal(parentval2) : 0);
    };

    scope.regSubmit = function(obj) {

        var valmm = _.indexOf(monthArr, obj.ddlMM);
        var date = obj.ddlDD + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.ddlYear;
        var inputObj = {
            strFirstName: obj.txtfirstname,
            strLastName: obj.txtlastname,
            dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
            intGenderID: obj.rbtngender,
            intReligionID: obj.ddlreligion,
            intMotherTongueID: obj.ddlmothertongue,
            intCasteID: obj.ddlcaste,
            intCountryLivingID: obj.ddlcountry,
            intMobileCode: obj.ddlmobilecountry,
            intLandCode: obj.ddllandcountry,
            IsCustomer: 1,
            strMobileNo: obj.txtMobileNo,
            ID: 1,
            strAreaCode: obj.txtArea,
            strLandNo: obj.txtlandNum,
            strEmail: obj.txtEmail,
            strPassword: obj.txtpassword,
            intProfileRegisteredBy: null,
            intEmpID: null,
            intCustPostedBY: obj.ddlpostedby,
            //strMobileVerificationCode: obj.
        };
        console.log(inputObj);
        basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
            console.log(res);
            scope.genderID = 0;
            authSvc.login(scope.reg.txtEmail, scope.reg.txtpassword).then(function(response) {
                console.log(response);
                authSvc.user(response.response !== null ? response.response[0] : null);
                scope.genderID = response.response[0].GenderID;
                window.location = "registration/seconadryRegistration/" + obj.txtfirstname + "/" + obj.txtlastname + "/" + obj.ddlcountry + "/" + response.response[0].GenderID;
                return false;
            });
        });
    };

    scope.valueExists = function(type, flag, val) {
        basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
            console.log(response);
            if (response.data === 1) {
                if (type === 'email') {
                    scope.reg.txtEmail = '';
                    alert('Email Already Exists');
                } else {
                    scope.reg.txtMobileNo = '';
                    alert('Mobile number Already Exists');
                }
            }
        });
    };


    scope.$watch(function() {
        return scope.reg.ddlcountry;
    }, function(current, original) {
        scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
    });



    scope.redirectprivacy = function(type) {
        window.open('privacyPolicy', '_blank');
    };



}]);
app.controller('aboutus', ['$scope', function (scope) {
}]);
 app.controller("AccordionDemoCtrl", ['$scope', function(scope) {
     scope.groups = [{
             title: "Dynamic Group Header - 1",
             content: "Dynamic Group Body - 1",
             open: false
         },
         {
             title: "Dynamic Group Header - 2",
             content: "Dynamic Group Body - 2",
             open: false
         }
     ];

     scope.addNew = function() {
         scope.groups.push({
             title: "New One Created",
             content: "Dynamically added new one",
             open: false
         });
     };

 }]);
 app.controller("ccAvenueCtrl", ['$scope', '$http', function(scope, http) {

     //  scope.submitCCAvenue = function() {
     //      var data = {
     //          merchant_id: 'M_151047_9927',
     //          order_id: 'Ord_91035_7865',
     //          currency: 'INR',
     //          amount: '10000',
     //          redirect_url: 'http://127.0.0.1:3001/ccavResponseHandler',
     //          cancel_url: 'http://127.0.0.1:3001/ccavResponseHandler',
     //          language: 'EN',
     //          billing_name: 'Peter',
     //          billing_address: 'Santacruz',
     //          billing_city: 'Mumbai',
     //          billing_state: 'MH',
     //          billing_zip: '400054',
     //          billing_country: 'India',
     //          billing_tel: '8985201371',
     //          billing_email: 'kusumavishwaneni@gmail.com',
     //          delivery_name: 'Sam',
     //          delivery_address: 'Vile Parle',
     //          delivery_city: 'Mumbai',
     //          delivery_state: 'Maharashtra',
     //          delivery_zip: '400038',
     //          delivery_country: 'India',
     //          delivery_tel: '0123456789',
     //          merchant_param1: 'additional Info.',
     //          merchant_param2: 'additional Info.',
     //          merchant_param3: 'additional Info.',
     //          merchant_param4: 'additional Info.',
     //          merchant_param5: 'additional Info.',
     //          promo_code: '',
     //          customer_identifier: ''
     //      };


     //      http.post('/postCCAvenue', JSON.stringify(data)).then(function(response) {
     //          console.log(response.data);
     //          $('#responseDiv').html(response.data);
     //      });

     //};
 }]);
app.controller('ModalDemoCtrl', function($uibModal, $log, $scope) {
    $scope.ddlvals = "aaaa";
    var $ctrl = this;

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.obj1 = [
        { label: "aaaa", title: "aaaa", value: "1" }, { label: "bbb", title: "bbb", value: "2" }, { label: "ccc", title: "ccc", value: "3" }, { label: "ddd", title: "ddd", value: "4" }

    ];
    $scope.selectedvals = [2, 3];
    $ctrl.animationsEnabled = true;
    $ctrl.open = function(size) {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {
                items: function() {
                    return $ctrl.items;
                }
            }
        });

    };

    $scope.DropDownChnaged = function() {
        $scope.DropDownStatus = $scope.dropValue;
    };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function($uibModalInstance, items, $scope) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };
    $scope.obj1 = [
        { label: "aaaa", title: "aaaa", value: "1" }, { label: "bbb", title: "bbb", value: "2" }, { label: "ccc", title: "ccc", value: "3" }, { label: "ddd", title: "ddd", value: "4" }

    ];
    $ctrl.ok = function() {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});


function getvalues(test) {

    var countries = [];
    $.each($("#" + test + " option:selected"), function() {
        countries.push($(this).val());
    });
    alert(JSON.stringify(countries));
}
app.controller("faqs", ['$scope', function(scope) {
    scope.filters = {
        search: ''
    };


    scope.arrayfaqs = [
        { questons: 'How do I Bookmark profile?', answers: 'In every view profile you will find the book mark option for future reference before you express interest to filter suitable profiles' },
        { questons: 'How do I delete my profile? (Manage Profile)', answers: 'You can delete your profile including your picture by clicking on Delete Profile in the services page after you login. You have to login to your account to delete your profilfre.4r554r' },
        { questons: 'How do I edit profile?', answers: 'You can edit details by going to Menu bar?MY ACCOUNT?EDIT PROFILE.(Note: You can edit all the fields except Name, Lastname, Date of Birth, Height & Caste. If you want to edit them contact us @ 91-40-30666666.' },
        { questons: 'How do I ignore profile and how do I remove ignore profile from the list?', answers: 'In every view profile your will find an ignore profile(with (X) Into symbol)to avoid profile from your list. All ignored profiles list can be checked in the Option MATCHES?IGNORED PROFILES(Note: You cannot remove ignored profile completely but you can either bookmark or express interest)' },
        { questons: 'How do I overwrite an existing photo? (Photograph)', answers: 'Go to Manage photo ,delete the existing photo first to upload new recent photo which will be processed during the business hours and made visible .' },
        { questons: 'How do I register?', answers: 'Click www.kaakateeya.com and get registered for whom your searching(Bride/Groom) with the details' },
        { questons: 'How do I restrict other members from viewing my Profile? (Manage Profile)', answers: 'Click on Hide profile in the profile settlings in my account menu option' },
        { questons: 'How do I Upload my Photograph and which format is acceptable?', answers: 'You can upload upto 3 photographs of JPEG or jpgFormat by going to Menu bar?MY ACCOUNT?MANAGE PHOTO and upload photo. We will activate your photo within 24 hours after we review it. If you experience any issues in uploading your photo please send us at photos@telugumarriages.com or send them through WHATSAPP 9848535373 with your PROFILE ID and we will upload it for you.' },
        { questons: 'How to show interest', answers: 'to show interest to a profile which suits your re-quirements click on Express interest after you completely view that profile ,then proceed if its ok' },
        { questons: 'I am a FREE Member. Can I send any email messages to other members? (Contact Members)', answers: 'If you are registered as a FREE member you cannot send Email Messages to other Members.' },
        { questons: 'I am a FREE service member. How do I upgrade my profile? (Paid Member)', answers: 'Log on to www.kaakateeya.comgo to Menu bar?MY PACKAGE?UPGRADE MEMBERSHIP and choose the package and upgrade by using any visa debit/credit card, also input your correct billing address whatever provided in the banker of the card' },
        { questons: 'I am a paid member of Kaakateeya Marriages India office. I cannot view pictures or request profiles online? (Kaakateeya Marriages Indian Offices)', answers: 'Kaakateeya Marriages India office registered members are only allowed to view, modify their profile and search new profiles on Kaakateeya.com. There is an additional fee to view pictures,addition details also can express interest . online membership details are in the UPGRADE MEMBERSHIP option in UPGRADE menu option' },
        { questons: 'I Forgot Password who can I retrieve password?', answers: 'You can only reset your password by clicking on forgot password link with your registered primary email id' },
        { questons: 'I uploaded my photo but I cannot see it? (Photograph)', answers: 'New photograph uploaded by you will be processed during the business hours from 10 am to 6 pm .' },
        { questons: 'Terms & Conditions to get Register with kaakateeya.com?', answers: 'Everyone who is for marriage can register profile by giving details with genuine information. You can register a new profile with UNIQUE EMAIL AND UNIQUE MOBILE NUMBER. If you get a message like “email id exists” or “mobile number exists”then click on forget password to reset your password otherwise contact us @ 91-40-30666666' },
        { questons: 'What individually identifiable information is logged on your server? (Privacy Policy)', answers: 'All email messages sent using our website Kaakateeya.com are logged on the server. These messages are deleted every week.' },
        { questons: 'What is Bookmarked By section? (Bookmarks)', answers: 'If somebody Bookmarks your profile, you can check the list in the "Who Bookmarked me " in the menu' },
        { questons: 'What is Online Service and Offline(OFFICE) Service?', answers: 'Online Services: You can Register Freely into www.kaakateeya.com and search for Brides/Grooms based on your requirement. You can also become a paid member to express interest, Send and receive messages directly by yourself Offline(OFFICE) Services: Offline Service is provided by our service provider/relationship manager wherein you will be sent profiles to your email regularly as per your requirement manually on behalf of you and will involve in arranging match meetings(PelliChupulu) to Settle' },
        { questons: 'What picture formats are accepted? (Photograph)', answers: 'Pictures of .jpg ,Png etc formats can be uploaded ' },
        { questons: 'Who receives the Messages I send using messages button', answers: 'your messages are sent to the other member ,which will be displayed in my contact list ,messages option' }
    ];
    scope.styleanswer = false;
    scope.activeClass = 'faqs_list_main_item';
}]);
app.directive('faqdirective', function() {
    return {
        link: function(scope, element, attrs) {

            scope.expanall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = true;
                    item.activeClass = 'faqs_list_main_item active';
                });
            };
            scope.collapseall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = false;
                    item.activeClass = 'faqs_list_main_item';
                });


            };
            scope.toggleans = function(faqs) {
                faqs.styleanswer = !faqs.styleanswer;
                faqs.activeClass = (faqs.styleanswer === true ? 'faqs_list_main_item active' : 'faqs_list_main_item');

            };
        }
    };
});
app.controller('feedbackCtrl', ['$scope', 'reCAPTCHA', 'feedbacksubmit',
    'authSvc',
    function(scope, reCAPTCHA, feedbacksubmit, authSvc) {
        reCAPTCHA.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
        // scope.optionhereabout = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Search Engine', title: 'Search Engine', value: 481 },
        //     { label: 'Newspaper', title: 'Newspaper', value: 482 },
        //     { label: 'Magzine', title: 'Magzine', value: 483 },
        //     { label: 'Friend', title: 'Friend', value: 484 },
        //     { label: 'Email', title: 'Email', value: 485 },
        //     { label: 'No Answer', title: 'No Answer', value: 486 }
        // ];
        // scope.improveourwebsite = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Search', title: 'Search', value: 487 },
        //     { label: 'Registration', title: 'Registration', value: 488 },
        //     { label: 'Login', title: 'Login', value: 489 },
        //     { label: 'FAQ', title: 'FAQ', value: 490 },
        //     { label: 'About Us', title: 'About Us', value: 491 },
        //     { label: 'No Answer', title: 'No Answer', value: 492 }
        // ];

        // scope.prices = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Expensive', title: 'Expensive', value: 493 },
        //     { label: 'OK', title: 'OK', value: 494 },
        //     { label: 'Cheap', title: 'Cheap', value: 495 },
        //     { label: 'No comments', title: 'No comments', value: 496 },
        //     { label: 'No Answer', title: 'No Answer', value: 497 },
        // ];

        // scope.downloadtime = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Fast', title: 'Fast', value: 498 },
        //     { label: 'Average', title: 'Average', value: 499 },
        //     { label: 'Slow', title: 'Slow', value: 500 },
        //     { label: 'No Answer', title: 'No Answer', value: 501 },
        // ];

        // scope.yourratethesearch = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Valuable', title: 'Valuable', value: 507 },
        //     { label: 'Average', title: 'Average', value: 508 },
        //     { label: 'Bad', title: 'Bad', value: 509 },
        //     { label: 'No Answer', title: 'No Answer', value: 510 },
        // ];
        // scope.comparesites = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Better', title: 'Better', value: 502 },
        //     { label: 'Same', title: 'Same', value: 503 },
        //     { label: 'Bad', title: 'Bad', value: 504 },
        //     { label: 'No Answer', title: 'No Answer', value: 505 },
        // ];
        // scope.recomendedtofriends = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Yes', title: 'Yes', value: 511 },
        //     { label: 'No', title: 'No', value: 512 },
        //     { label: 'No Answer', title: 'No Answer', value: 513 },
        // ];

        //scope.HearAbout = "481";
        scope.submit = function() {

            var custid = authSvc.getCustId();
            scope.Cust_ID = custid !== undefined && custid !== null && custid !== "" ? custid : null;
            var objectfeedback = {};
            objectfeedback.Cust_ID = scope.Cust_ID;
            objectfeedback.HearAbout = scope.HearAbout !== undefined && scope.HearAbout !== "" ? scope.HearAbout : null;
            objectfeedback.ImproveWebsite = scope.ImproveWebsite !== undefined && scope.ImproveWebsite !== "" ? scope.ImproveWebsite : null;
            objectfeedback.kaaPrices = scope.kaaPrices !== undefined && scope.kaaPrices !== "" ? scope.kaaPrices : null;
            objectfeedback.DownLoadTime = scope.DownLoadTime !== undefined && scope.DownLoadTime !== "" ? scope.DownLoadTime : null;
            objectfeedback.CompareSite = scope.CompareSite !== undefined && scope.CompareSite !== "" ? scope.CompareSite : null;
            objectfeedback.FavSite = scope.FavSite !== undefined && scope.FavSite !== "" ? scope.FavSite : null;
            objectfeedback.SearchRate = scope.SearchRate !== undefined && scope.SearchRate !== "" ? scope.SearchRate : null;
            objectfeedback.Recommend = scope.Recommend !== undefined && scope.Recommend !== "" ? scope.Recommend : null;
            objectfeedback.Comments = scope.Comments !== undefined && scope.Comments !== "" ? scope.Comments : null;
            feedbacksubmit.feedbacksubmitinsert(objectfeedback).then(function(response) {
                if (response.data == 1) {
                    alert("Thank u for your valuable feedback");
                    scope.clearallfields();

                }
            });
        };
        scope.clearallfields = function() {
            scope.Cust_ID = "";
            scope.HearAbout = 0;
            scope.ImproveWebsite = 0;
            scope.kaaPrices = 0;
            scope.DownLoadTime = 0;
            scope.CompareSite = 0;
            scope.FavSite = "";
            scope.SearchRate = 0;
            scope.Recommend = 0;
            scope.Comments = "";
            Recaptcha.reload();
        };

    }
]);
app.controller("help", ['$uibModal', '$scope', 'helpService', 'arrayConstants', 'reCAPTCHA',
    function(uibModal, scope, helpService, arrayConstants, reCAPTCHA) {

        scope.catgory = 'catgory';
        scope.Priority = 'Priority';
        scope.countryCode = 'countryCode';
        scope.lblpopupCategory = 'dffdf';
        scope.open = function(size) {
            scope.modalInstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                scope: scope
            });
        };

        scope.submit = function() {

            if (scope.helpForm.$valid && (scope.ddlcategory !== undefined && scope.ddlcategory !== '0' && scope.ddlcategory !== '') &&
                (scope.ddlpriority !== undefined && scope.ddlpriority !== '0' && scope.ddlpriority !== '')) {

                scope.inputObj = {
                    profile: '210910352',
                    AssignedEmpID: null,
                    BranchID: 0,
                    Name: scope.txtname,
                    Email: scope.txtemail,
                    subject: scope.txtsubject,
                    Category: scope.ddlcategory,
                    Message: scope.txtmsg,
                    Priority: scope.ddlpriority,
                    Image: null,
                    CountryCode: scope.ddlcountrycode,
                    AreaCode: scope.txtphonecode,
                    PhoneNum: scope.txtphnum,
                    EmpID: 0
                };

                helpService.helpSubmit(scope.inputObj).then(function(response) {
                    scope.CustName = scope.txtname;
                    scope.lblTicketID = response.data.Ticket;
                    scope.lblpopupCategory = (_.where(arrayConstants.catgory, { value: parseInt(scope.ddlcategory) }))[0].title;
                    scope.open();
                });
            } else {
                alert('Please enter Catgory and Priority');

            }

        };

        scope.SendMail = function() {
            scope.SendMailObj = {
                TicketID: scope.lblTicketID,
                Name: scope.CustName,
                CategoryName: scope.lblpopupCategory,
                strEmail: scope.txtemail,
                EmpID: 0,
                EmpTicketID: 0
            };

            helpService.SendMail(scope.SendMailObj).then(function(response) {
                if (response.data == 1) {
                    alert('mail has sent successfully');
                    scope.resethelp();
                }
            });
            scope.modalInstance.close();

        };
        scope.resethelp = function() {
            scope.txtname = "";
            scope.txtemail = "";
            scope.txtsubject = "";
            scope.ddlcategory = null;
            scope.ddlcountrycode = null;
            scope.txtmsg = "";
            scope.ddlpriority = null;
            scope.txtphonecode = "";
            scope.txtphnum = "";
            Recaptcha.reload();
        };
    }
]);
 app.controller("blockerController", ['$scope', 'cerateNewPwd', '$stateParams', function(scope, cerateNewPwd, stateParams) {
     cerateNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
         var custData = (res.data).split(';');
         scope.profileID = custData[1];
         //scope.custID = custData[2];
         scope.RelationShipManager = custData[3];
         scope.mngrMob = custData[4] === 'NoEmpOfficialCCn' ? '' : custData[4];
     });
 }]);
app.controller("myorders", ['$scope', 'customerProfilesettings', 'authSvc',
    function(scope, customerProfilesettings, authSvc) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.myorders = [];
        scope.pageinit = function() {
            customerProfilesettings.getmyorderspayments(scope.custid).then(function(response) {
                scope.myorders = [];

                _.each(response.data, function(item) {
                    scope.myorders = JSON.parse(item);

                });
            });
        };
    }
]);
app.controller("ourbranches", ["$scope", "ourBranchService", function(scope, ourBranchService) {

    scope.region = 'region';
    scope.BranchArr = [];
    scope.BranchDetailsArr = [];


    scope.telanganaArr = [{ count: 1, "BranchAddress": "103 , 109, Vijayasree Apartments, Behind Chermas ,", "PhoneNumbers": "23747777", "Mobilenumber": "7675818080", "BranchemailID": "kaakateeya.com@gmail.com", "WorkingEndTime": "8:30:00 PM", "Branch_ID": 319, "Address": "Ameerpet , Hyderabad-500073", "WorkingStartTime": "8:30:00 AM", "Landlineareacode": "40", "Landlinenumber": "23747777", "BranchesName": "Hyderabad - Ameerpet" }, { count: 2, "BranchAddress": "2 nd Floor , Pullareddy Sweets Building ,SaiBaba Temple Lane ,", "PhoneNumbers": "24065959", "Mobilenumber": "9966636222", "BranchemailID": "info@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 320, "Address": "Dilsukhnagar , Hyderabad - 500060", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "40", "Landlinenumber": "24065959", "BranchesName": "Hyderabad-Dilsukhnagar" }, { count: 3, "BranchAddress": "202 , Uday Krishna Complex , Bhagyanagar colony ,", "PhoneNumbers": "23067373", "Mobilenumber": "9392009391", "BranchemailID": "info@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 321, "Address": "opp KPHB , Hyderabad-500072", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "40", "Landlinenumber": "23067373", "BranchesName": "Hyderabad-Kukatpally" }];
    scope.pundicherry = [{ "BranchAddress": "No 10 , 1st Floor , 2 nd Cross , Annanagar East , ", "PhoneNumbers": "43543543", "Mobilenumber": "7668687687", "BranchemailID": "naveena@telugumarriages.com", "WorkingEndTime": "7:0:00 PM", "Branch_ID": 341, "Address": "Behind Housing Board , Puducherry ( Pondicherry ) - 600 005", "WorkingStartTime": "9:0:00 AM", "Landlineareacode": "44", "Landlinenumber": "43543543", "BranchesName": "Pondicheery" }];

    ourBranchService.BranchPageloadSelect().then(function(response) {

        scope.BranchDetailsArr = response.data;
        _.map(scope.BranchDetailsArr, function(item, index) {
            item.count = parseInt(index + 1);
        });

    });
    scope.changeBind = function(type) {

        if (scope.ddlbranches == '1') {

            scope.BranchDetailsArr = [];
            if (scope.ddlbranchaddress !== null && scope.ddlbranchaddress !== undefined) {

                scope.BranchDetailsArr = _.where(scope.telanganaArr, { Branch_ID: parseInt(scope.ddlbranchaddress) });
                _.map(scope.BranchDetailsArr, function(item, index) {
                    item.count = parseInt(index + 1);
                });
            }

            if (type == 'region') {
                scope.BranchDetailsArr = scope.telanganaArr;
                scope.BranchArr = [];
                _.each(scope.telanganaArr, function(item) {
                    scope.BranchArr.push({ "label": item.BranchesName, "title": item.BranchesName, "value": item.Branch_ID });
                });

            }
        } else if (scope.ddlbranches == '2') {
            scope.BranchDetailsArr = [];
            scope.BranchDetailsArr = scope.pundicherry;
            if (type == 'region') {
                scope.BranchArr = [];

            }
        } else {
            if (type == 'region') {
                scope.ddlbranchaddress = undefined;
            }
            ourBranchService.BranchSelect(scope.ddlbranches, scope.ddlbranchaddress).then(function(response) {
                scope.BranchDetailsArr = [];
                scope.BranchDetailsArr = response.data;
                _.map(scope.BranchDetailsArr, function(item, index) {
                    item.count = parseInt(index + 1);
                });
                if (type == 'region') {
                    scope.BranchArr = [];
                    _.each(response.data, function(item) {
                        scope.BranchArr.push({ "label": item.BranchesName, "title": item.BranchesName, "value": item.Branch_ID });
                    });
                }
            });
        }

    };



}]);
app.controller('privacypolicy', ['$scope', function (scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initprivacy = function () {
        // fade in #back-top    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

}]);
app.controller("profilesettings", ['$scope', '$mdDialog', 'customerProfilesettings', 'SelectBindServiceApp', 'authSvc', 'alert', function(scope, $mdDialog, customerProfilesettings, service, authSvc, alerts) {

    scope.selectChanged = function() {
        alert("value changed-->");

    };

    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    scope.days = function() {
        scope.test = [];
        scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
        for (var i = 1; i <= 30; i++) {
            scope.test.push({ label: i + ' days', title: i + ' days', value: i });
        }
        return scope.test;
    };
    scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    scope.countryCode = [];
    scope.arraydays = scope.days();
    scope.mailyes = "1";
    scope.smsyes = "1";
    scope.activated = false;
    scope.disabled = true;
    scope.activatedmobile = false;
    scope.countrycodedisable = true;
    scope.passwordsisableswitch = false;
    scope.passwordsisable = true;
    scope.alertmanageswitch = false;
    scope.manageakerts = true;
    scope.hideprofileswitchs = false;
    scope.hideprofile = true;
    scope.deleteprofileswitch = false;
    scope.deleteprofiledis = true;
    service.countryCodeselect().then(function(response) {
        scope.countryCode = [];

        scope.countryCode = [{ label: "--Select--", title: "--select--", value: "0" }];
        _.each(response.data, function(item) {
            scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
        });

    });
    scope.arrayprofilesettings = {};
    scope.getdetails = function() {
        customerProfilesettings.getprofilesettinginfo(scope.custid).then(function(response) {

            _.each(response.data, function(item) {
                scope.arrayprofilesettings = item;
                scope.mailyes = scope.arrayprofilesettings.AllowEmail === "False" ? "0" : "1";
                scope.smsyes = scope.arrayprofilesettings.AllowSMS === "False" ? "0" : "1";
            });
        });
    };
    scope.pageload = function() {
        scope.getdetails();
    };


    scope.toggleActivationsss = function(btntype) {
        switch (btntype) {
            case "email":

                if (scope.activated)
                    scope.disabled = false;
                else
                    scope.disabled = true;
                break;
            case "mobile":
                if (scope.activatedmobile)
                    scope.countrycodedisable = false;
                else
                    scope.countrycodedisable = true;
                break;
            case "password":
                if (scope.passwordsisableswitch)
                    scope.passwordsisable = false;
                else
                    scope.passwordsisable = true;
                break;
            case "managealerts":
                if (scope.alertmanageswitch)
                    scope.manageakerts = false;
                else
                    scope.manageakerts = true;
                break;
            case "hideprofiles":

                if (scope.hideprofileswitchs)
                    scope.hideprofile = false;
                else
                    scope.hideprofile = true;
                break;
            case "deleteprofile":
                if (scope.deleteprofileswitch)
                    scope.deleteprofiledis = false;
                else
                    scope.deleteprofiledis = true;
                break;
        }
    };
    scope.submitemailamdmobile = function(Typeofsub) {
        switch (Typeofsub) {
            case "email":
                var FamilyID = scope.arrayprofilesettings.EmailCust_Family_ID;
                var NewEmail = scope.NewEmail;
                customerProfilesettings.submitemailmobilesubmit(FamilyID, NewEmail, "", 1).then(function(response) {

                    if (response.data == 1) {
                        scope.Resetallfields('email');
                        alerts.open('Email Upadated successfully', 'success');
                    } else {
                        alerts.open('Email Updated failed', 'warning');
                    }
                });
                break;
            case "mobile":
                var FamilyIDs = scope.arrayprofilesettings.MobileCustFamily_ID;
                var CountryCodeID = scope.ddlcountrycode;
                var number = scope.Confirmnewnumber;
                customerProfilesettings.submitemailmobilesubmit(FamilyIDs, number, CountryCodeID, 0).then(function(response) {

                    if (response.data == 1) {
                        scope.Resetallfields('mobile');
                        alerts.open('Mobile Upadated successfully', 'success');
                    } else {
                        alerts.open('Mobile Updated failed', 'warning');
                    }
                });
                break;
        }
    };
    scope.submitpassword = function() {

        var OldPassword = scope.OldPassword;
        var NewPassword = scope.NewPassword;
        var ConfirmPassword = scope.ConfirmPassword;
        var custId = scope.custid;
        customerProfilesettings.passwordchange(OldPassword, NewPassword, ConfirmPassword, custId).then(function(response) {

            if (response.data == 1) {
                scope.Resetallfields('password');
                alerts.open('Passsword updated successfully', 'success');
            } else {
                alerts.open('Passsword updated failed', 'warning');
            }
        });
    };
    scope.submithideprofile = function() {
        var Expirydate = scope.hideprofiledays;
        var CustID = scope.custid;
        var iflag = 1;
        var Narration = scope.hiddennarration;
        customerProfilesettings.hideprofile(Expirydate, CustID, iflag).then(function(response) {
            if (response.data == 1) {
                scope.Resetallfields('hide');
                alerts.open('Hide Profile successfully', 'success');
            } else {
                alerts.open('Hide Profile failed', 'warning');
            }
        });
    };
    scope.submitdeleteprofile = function() {
        var ProfileID = scope.ProfileID;
        var Narrtion = scope.Narrtion;
        customerProfilesettings.deleteprofile(ProfileID, Narrtion).then(function(response) {
            if (response.data == 1) {
                scope.Resetallfields('deleteprofiles');
                alerts.open('Delete Profile successfully', 'success');
            } else {
                alerts.open('Delete Profile failed', 'warning');
            }
        });
    };
    scope.submitmanagealerts = function() {
        var CustID = scope.custid;
        var AllowEmail = scope.mailyes === 0 ? 0 : 1;
        var AllowSMS = scope.smsyes === 0 ? 0 : 1;
        customerProfilesettings.manageprofiles(CustID, AllowEmail, AllowSMS).then(function(response) {
            if (response.data == 1) {
                scope.Resetallfields('alerts');
                alerts.open('Submit successfully', 'success');
            } else {
                alerts.open('submit failed', 'warning');
            }
        });
    };
    scope.unhideprofile = function() {
        var Expirydate = "";
        var CustID = scope.custid;
        var iflag = 0;
        customerProfilesettings.hideprofile(Expirydate, CustID, iflag).then(function(response) {
            if (response.data == 1) {
                alerts.open('Unhide your Profile successfully', 'success');
            } else {
                alerts.open('Unhide your Profile failed', 'warning');
            }
        });
    };
    scope.Resetallfields = function(type) {
        switch (type) {
            case "email":

                scope.NewEmail = null;
                scope.Confirmnewemail = null;
                scope.getdetails();
                scope.activated = false;
                scope.disabled = true;
                this.emailform.NewEmail = null;
                this.emailform.Confirmnewemail = null;
                this.emailform.$setPristine();
                this.emailform.$setUntouched();
                this.emailform.$setValidity();
                break;
            case "mobile":
                scope.ddlcountrycode = null;
                scope.Confirmnewnumber = null;
                scope.getdetails();
                scope.activatedmobile = false;
                scope.countrycodedisable = true;
                this.mobileform.ddlcountrycode = null;
                this.mobileform.Confirmnewnumber = null;
                this.mobileform.$setPristine();
                this.mobileform.$setUntouched();
                this.mobileform.$setValidity();
                break;
            case "password":
                scope.OldPassword = null;
                scope.NewPassword = null;
                scope.ConfirmPassword = null;
                scope.getdetails();
                scope.passwordsisableswitch = false;
                scope.passwordsisable = true;
                this.projectForm.OldPassword = null;
                this.projectForm.NewPassword = null;
                this.projectForm.ConfirmPassword = null;
                this.projectForm.$setPristine();
                this.projectForm.$setUntouched();
                this.projectForm.$setValidity();
                break;
            case "hide":
                scope.hideprofiledays = null;
                scope.hiddennarration = null;
                scope.getdetails();
                scope.hideprofileswitchs = false;
                scope.hideprofile = true;
                this.hideprofileform.hideprofiledays = null;
                this.hideprofileform.$setPristine();
                this.hideprofileform.$setUntouched();
                this.hideprofileform.$setValidity();
                break;
            case "alerts":
                scope.mailyes = null;
                scope.smsyes = null;
                scope.getdetails();
                scope.alertmanageswitch = false;
                scope.manageakerts = true;
                break;
            case "deleteprofiles":
                scope.Narration = null;
                scope.isChecked = null;
                scope.getdetails();
                scope.deleteprofileswitch = false;
                scope.deleteprofiledis = true;
                this.deleteprofileform.narration = null;
                this.deleteprofileform.$setPristine();
                this.deleteprofileform.$setUntouched();
                this.deleteprofileform.$setValidity();
                break;
        }
    };

}]);
app.controller('suceesstories', ['$scope', 'successstoriesdata', function(scope, suceessdata) {
    scope.success = [];

    scope.flag = 8;
    scope.fromge = 1;
    scope.topage = 8;
    scope.loadmore = true;
    scope.init = function() {
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {

            scope.success = response.data;
        });
    };
    $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            scope.loadmore = false;
            scope.loaderspin = true;
            scope.flag += 8;
            scope.fromge = scope.flag - 7;
            scope.topage = scope.flag;
            suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
                if (response.data !== null && response.data !== "" && response.data !== undefined && response.data.length > 0) {
                    scope.success = $.unique((scope.success).concat(response.data));
                    scope.loadmore = true;
                    scope.loaderspin = false;
                } else {
                    scope.loadmore = false;
                    scope.loaderspin = false;
                }
            });
        }
    });

    scope.loadmorefunction = function() {
        scope.loadmore = false;
        scope.loaderspin = true;
        scope.flag += 8;
        scope.fromge = scope.flag - 7;
        scope.topage = scope.flag;
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
            if (response.data !== null && response.data !== "" && response.data !== undefined && response.data.length > 0) {
                scope.success = $.unique((scope.success).concat(response.data));
                scope.loadmore = true;
                scope.loaderspin = false;
            } else {
                scope.loadmore = false;
                scope.loaderspin = false;
            }
        });
    };
}]);
app.controller("supporttickets", ['$scope', 'customerProfilesettings', 'authSvc', 'alert',
    function(scope, customerProfilesettings, authSvc, alerts) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.supporttickets = [];
        scope.submitsupporttickets = function(pageid) {
            var obj = {
                PageID: pageid,
                CustID: scope.custid,
                TicketID: null,
                ProfileID: null,
                Complaint: null,
                FeedBackStatus: null
            };
            customerProfilesettings.getmysupporttickets(obj).then(function(response) {
                scope.supporttickets = [];

                _.each(response.data, function(item) {
                    scope.supporttickets = JSON.parse(item);

                });
            });
        };
        scope.pageinit = function() {
            scope.submitsupporttickets(1);
        };
        scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    scope.submitsupporttickets(1);
                    break;
                case 1:
                    scope.submitsupporttickets(2);
                    break;
                case 2:
                    scope.submitsupporttickets(3);
                    break;
                case 3:
                    scope.submitsupporttickets(4);
                    break;
            }
        });
        scope.reopenticket = function(ticketid) {
            customerProfilesettings.getopenticket(6, "", ticketid).then(function(response) {
                if (response.data == 1) {
                    alerts.open("Your ticket have been reopened successfully", "success");
                    scope.supporttickets = [];
                    scope.submitsupporttickets(3);
                } else {
                    alerts.open("Failed please contact admin", "warning");
                }

            });
        };
    }
]);
app.controller('termsandconditions', ['$scope', function (scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initconditions = function () {
        // fade in #back-top    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

}]);
app.controller("upgrademembership", ['$scope', '$interval', 'myAppFactory',
    'authSvc', 'alert',
    function(scope, $interval, myAppFactory, authSvc, alerts) {
        scope.paymentarray = [];
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        myAppFactory.getpayment(scope.custid).then(function(response) {

            scope.paymentarray = [];
            scope.paymentarray.push({
                MembershipName: "Services & Features",
                MembershipAmount: "My Plans",
                AllottedServicePoints: "Profile Count",
                onlineaccess: "Online Access",
                offlineaccess: "Offline Access"
            });
            _.each(response.data, function(item) {
                scope.paymentarray.push(item);

            });
        });

        scope.selectpaymantoption = function(membershipd, amount, profilecount, discount, custid, servicename, year) {
            var paymentobject = {
                MembershipID: membershipd,
                Amount: amount,
                Points: profilecount,
                DiscountID: discount,
                CustID: custid,
                MembershipName: servicename,
                Duration: year
            };
            sessionStorage.setItem("paymentobject", JSON.stringify(paymentobject));
            var realpath = 'paymentresponse';
            window.open(realpath, "_self");
        };

        scope.sendsmspayment = function(payment) {
            myAppFactory.sendsms(15, scope.custid, payment.mobilenumber).then(function(response) {

                alerts.open("Thanks ! You shall be contacted soon by our priority manager", 'success');
            });
        };
        scope.ccavenuepage = function() {
            window.open("https://secure.ccavenue.com/transaction/TransactionInitiator", "_self");
        };
    }
]);
app.controller("commonviewfullprofile", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams',
    '$location', 'customerviewfullprofileservices', '$window', '$state',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, customerviewfullprofileservices, $window, $state) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.PageDiv = true;
        scope.searchObjectquery = $location.search();
        var meKey = Object.getOwnPropertyNames(scope.searchObjectquery)[0];
        var meValue = scope.searchObjectquery[meKey];
        console.log(JSON.stringify(meKey));
        scope.MyProfileQSAccept = "?" + (meKey).toString() + "=" + (meValue).toString();
        //scope.MyProfileQSAccept = "?MyProfileQSAccept=7YrKbCteX/RfSC2jOgj8Gcmd5CJeEgGxzzdNKIoh4aNLbFIeuQbobbjEJM1L3JNQ4m3RfyPbdBGS/1fpiGXNg8SVz/a9JEPOJ4YdUBddXsCQsqooF28ehFR9hqwWgD1mD+JPSOU7+mIJukWIlbE27g==";
        console.log(scope.MyProfileQSAccept);
        scope.partnerinformation = function(response) {
            scope.arr = [];
            scope.personalinfo = {};
            scope.aboutmyself = {};
            _.each(response, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {

                    scope.personalinfo = testArr;
                    var photocount = scope.personalinfo[0].PhotoName_Cust;
                    scope.horoscopeimage = scope.personalinfo[0].HoroscopeImage === "" ||
                        scope.personalinfo[0].HoroscopeImage === null ||
                        scope.personalinfo[0].HoroscopeImage === "Not given" ? false : true;

                    scope.horoimagesrc = (scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? 'src/images/view_horoscope_image.jpg' : scope.personalinfo[0].HoroscopeImage;

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.bookmarkexpreessdata = function() {
            customerviewfullprofileservices.getExpressinterst_bookmark_ignore_data(scope.fromcustid, scope.tocustid).then(function(responsebook) {
                _.each(responsebook.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0] !== undefined) {
                        switch (testArr[0].TableName) {
                            case "Bookmark":
                                scope.Bookmark = testArr;
                                break;
                            case "Viewed":
                                scope.Viewed = testArr;
                                break;
                            case "Express":
                                scope.Express = testArr;
                                if (testArr[0].SeenStatus === "Accept" && scope.hdnAccRejFlag !== "MailReject") {
                                    if (scope.flagopen !== 1) {
                                        scope.modalbodyID1 = "You have proceeded this profile";
                                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    }
                                } else if (testArr[0].SeenStatus === "Reject" && scope.hdnAccRejFlag !== "MailAccept") {
                                    if (scope.flagopen !== 1) {
                                        scope.modalbodyID1 = "You have Skipped this profile";
                                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    }
                                }
                                //
                                if (testArr[0].MatchFollowUpStatus === 1) {
                                    if (testArr[0].SeenStatus === "Accept" || testArr[0].SeenStatus === "Reject") {
                                        scope.divacceptreject = true;
                                        scope.btnticket = testArr[0].ViewTicket;
                                        scope.liproceed = false;
                                        scope.liticket = true;
                                    } else {
                                        scope.divacceptreject = true;
                                        scope.liproceed = true;
                                    }
                                } else if (testArr[0].Acceptflag === 1) {
                                    scope.divacceptreject = true;
                                    scope.liproceed = true;

                                } else if (testArr[0].ExpressFlag === 1) {
                                    scope.divacceptreject = true;
                                    scope.liaccept = true;

                                } else {
                                    scope.divacceptreject = false;
                                    scope.liaccept = false;

                                }

                                if (testArr[0].ExpressInterstId !== null) {
                                    scope.hdnexpressinterstfiled = testArr[0].ExpressInterstId;
                                }

                                break;
                            case "Paidstatus":
                                scope.lblpaid = testArr[0].Paidstatus;
                                break;
                            case "Ignore":
                                scope.Ignore = testArr;

                                break;
                        }
                    }
                });

            });
        };
        scope.pagerefersh = function(ToProfileID) {
            customerviewfullprofileservices.getExpressIntrstfullprofile(ToProfileID, "").then(function(responsedata) {
                scope.partnerinformation(responsedata.data);
            });
            scope.bookmarkexpreessdata();
            customerDashboardServices.getphotoslideimages(scope.tocustid).then(function(response) {
                console.log(response);
                scope.slides = [];
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
        };
        scope.Searchfunctionality = function(type, object) {
            switch (type) {
                case "DontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(object).then(function(response) {
                        console.log("secrchfun");
                        console.log(response);
                        if (response.data == 1) {
                            scope.divmodalbodytoClose = "This profile was Skipped successfully";
                            alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                        } else if (response.data == 2 || response.data == 3) {
                            scope.divmodalbodytoClose = "Please upgrade your membership";
                            alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                        }
                    });
                    break;
            }
        };
        scope.Reject_paeload = function() {
            scope.pagerefersh(scope.ToProfileID);
            scope.PageDiv = false;
            var MobjViewprofile = {
                ExpressInrestID: scope.hdnexpressinterstfiled,
                CustID: scope.fromcustid,
                AcceptStatus: 2,
                MatchFollwupStatus: 2
            };
            scope.Searchfunctionality("DontProceed", MobjViewprofile);
        };
        scope.statusalert = function(status) {
            console.log(status);
            switch (status) {
                case 0:
                case 3:
                    scope.divmodalbodytoClose = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 4:
                    scope.divmodalbodytoClose = "Please upgrade your membership";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 5:
                    scope.divmodalbodytoClose = "Please upgrade your membership(No points)";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');

                    break;
                case 6:
                    scope.divmodalbodytoClose = "You have already Skipped this profile";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                    break;
                case 7:
                    scope.modalbodyID1 = "You cannot Skip Accepted Profile";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    scope.pagerefersh(scope.ToProfileID);
                    scope.flagopen = 1;
                    break;
                case 8:
                    scope.Reject_paeload();
                    break;
                case 9:
                    scope.pagerefersh(scope.ToProfileID);
                    break;

                case 10:
                    scope.modalbodydivContent = "You already " + " " + scope.AccRejFlag + " " + "this Profile ,do you want to continue with these action " + " accept";
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    scope.pagerefersh(scope.ToProfileID);
                    scope.flagopen = 1;
                    break;
                case 11:
                    scope.divmodalbodytoClose = "This ProfileID not in active";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 12:
                    scope.divmodalbodytoClose = "This ProfileID not in active";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 13:
                    scope.PopupDivToclosedialog = true;
                    scope.divmodalbodytoClose = "Please verify your primary email id (" + scope.PrimaryEmail + ") Inorder to view the complete profile sent ...check for verification email sent to your mail box";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 14:
                    scope.divmodalbodytoClose = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 15:
                    scope.modalbodyID1 = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    break;
            }
        };

        scope.pageload = function() {
            customerviewfullprofileservices.getViewFullProfileMail(scope.MyProfileQSAccept).then(function(response) {
                console.log(response);
                scope.fromcustid = response.data.FromCustID;
                scope.tocustid = response.data.ToCustID;
                scope.ToProfileID = response.data.ToProfileID;
                scope.FromProfileID = response.data.FromProfileID;
                scope.PrimaryEmail = response.data.PrimaryEmail;
                scope.AccRejFlag = response.data.AccRejFlag;
                scope.statusalert(response.data.status);
            });
        };
        scope.acceptlinkexp = function(type, custid) {
            var locallogid = sessionStorage.getItem("locallogid");
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, locallogid, type, null).then(function(response) {

                if (response.data === 1) {
                    scope.$broadcast("showAlertPopupccc", 'alert-success', "Proceed successfully", 2500);
                } else {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', "sorry Proceed Fail", 2500);
                }
                alerts.dynamicpopupclose();
            });
        };

        scope.photoalbum = function() {
            scope.headerpopup = "Slide show";
            scope.popupmodalbody = false;
            alerts.dynamicpopup("photopopup.html", scope, uibModal);
        };
        scope.modalpopupclose1 = function() {
            alerts.dynamicpopupclose();
        };
        scope.modalpopupclose = function() {

            alerts.dynamicpopupclose();
        };
        scope.modalpopupclosetab = function() {

            window.close();

        };
        scope.viewhoroscopeimage = function() {
            scope.headerpopup = "Horoscope";
            scope.popupmodalbody = true;
            if ((scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1) {
                scope.personalinfo[0].HoroscopeImage = "http://d16o2fcjgzj2wp.cloudfront.net/Images/HoroscopeImages/" + scope.tocustid + "_HaroscopeImage/" + scope.tocustid + "_HaroscopeImage.html";
                window.open(scope.personalinfo[0].HoroscopeImage, '_blank');
            } else {
                alerts.dynamicpopup("photopopup.html", scope, uibModal);
            }
        };

        scope.btnoksubmit = function() {
            switch (scope.AccRejFlag) {
                case "MailAccept":
                    scope.Reject_paeload();
                    break;
                case "MailReject":
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    scope.pagerefersh(scope.ToProfileID);
                    scope.liticket = false;
                    scope.liproceed = true;
                    btnDontProceed.Visible = false;
                    btnProceed.Visible = true;
                    break;
            }
        };
        scope.btnProceed_Click = function(typeofbtn) {
            switch (typeofbtn) {
                case "btnProceed":
                    var MobjViewprofile = {
                        ExpressInrestID: scope.hdnexpressinterstfiled,
                        CustID: scope.fromcustid,
                        FromCustID: scope.fromcustid,
                        ToCustID: scope.tocustid,
                        AcceptStatus: 1,
                        MatchFollwupStatus: 1
                    };
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(MobjViewprofile).then(function(response) {
                        console.log(response);
                        switch (response.data) {
                            case 1:
                                scope.modalbodyID1 = "To Move the Match for MatchFollowup";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade online membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                break;
                        }
                    });
                    break;
                case "btnDontProceed":
                    var MobjViewprofiledont = {
                        ExpressInrestID: scope.hdnexpressinterstfiled,
                        CustID: scope.fromcustid,
                        FromCustID: scope.fromcustid,
                        ToCustID: scope.tocustid,
                        AcceptStatus: 2,
                        MatchFollwupStatus: 2
                    };
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(MobjViewprofiledont).then(function(response) {
                        console.log(response);
                        switch (response.data) {
                            case 1:
                                scope.modalbodyID1 = "Oops go through your search";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade online membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                break;
                        }
                    });
                    break;
            }
            scope.divacceptreject = true;
            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
            scope.pagerefersh(scope.ToProfileID);
        };
        scope.acceptreject = function(typeofaction) {

            if (scope.tocustid !== null && scope.tocustid !== null) {
                var MobjViewprofile = {
                    FromCustID: scope.fromcustid,
                    ToCustID: scope.tocustid
                };
                switch (typeofaction) {
                    case "btnaccept":
                        authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                            console.log(responsepaid);
                            if (responsepaid === true) {
                                //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "divAcceptReject", "$('#divAcceptReject').modal({ backdrop: 'static', keyboard: false});", true);
                            } else {
                                alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                            }
                        });
                        break;
                    case "btnreject":
                        if (scope.lblpaid == "UnPaid") {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade');
                        } else {
                            var MobjViewprofilerej = {
                                ExpressInrestID: scope.hdnexpressinterstfiled,
                                CustID: scope.fromcustid,
                                AcceptStatus: 2,
                                MatchFollwupStatus: 2
                            };
                            scope.Searchfunctionality("DontProceed", MobjViewprofilerej);
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Your action send sucessfully', 3000);
                        }
                        break;
                }
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'ExpressInterest failed please contact Admin', 3000);
            }
            //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "divAcceptReject", "$('#divAcceptReject').modal('hide');", true);
        };
    }
]);
app.controller("viewFullProfileCustomer", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams', '$location',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var localcustid = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        scope.localcustidhide = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        var locallogid = sessionStorage.getItem("locallogid");
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.lnkViewHoro = true;
        scope.BookmarkFlag = false;
        scope.ViewedFlag = false;
        scope.msgflag = false;
        scope.IgnoreFlaghide = false;
        scope.liproceed = false;
        scope.liticket = false;
        scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
        scope.logidliproceed = scope.custid === scope.localcustidhide ? false : true;
        scope.partnerinformation = function(response) {
            scope.arr = [];
            scope.personalinfo = {};
            scope.aboutmyself = {};
            _.each(response.data, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                    scope.personalinfo = testArr;
                    scope.divclassmask = function(logphotostatus) {
                        var photo = scope.slides[0].ApplicationPhotoPath;
                        var photocount = scope.personalinfo[0].PhotoName_Cust;
                        logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
                        if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                            return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid);
                        } else {
                            return "";
                        }
                    };

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.pageload = function() {
            if (scope.custid === localcustid) {
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 283).then(function(response) {
                    scope.partnerinformation(response);
                });
            } else {
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 0).then(function(response) {
                    scope.partnerinformation(response);
                });
                customerDashboardServices.Viewprofileflags(scope.custid, localcustid).then(function(response) {
                    console.log(response);
                    _.each(response.data, function(item) {
                        var testArr = JSON.parse(item);
                        if (testArr[0] !== undefined) {
                            switch (testArr[0].TableName) {
                                case "Bookmark":
                                    scope.Bookmark = testArr;
                                    scope.BookmarkFlag = Bookmark[0].BookmarkFlag === 1 ? false : true;
                                    break;
                                case "Viewed":
                                    scope.Viewed = testArr;
                                    scope.BookmarkFlag = true;
                                    scope.IgnoreFlaghide = true;
                                    scope.ViewedFlag = true;
                                    scope.msgflag = true;
                                    scope.ViewedFlag = true;
                                    scope.liproceed = false;
                                    scope.logidliproceed = false;
                                    scope.lnkViewHoro = true;
                                    break;
                                case "Express":

                                    scope.Express = testArr;
                                    if (scope.Express[0].MatchFollowUpStatus === 1) {
                                        if (scope.Express[0].SeenStatus === "Accept" || scope.Express[0].SeenStatus === "Reject") {
                                            scope.liticket = true;
                                            scope.lnkViewHoro = false;
                                            scope.logidliproceed = false;
                                            scope.BookmarkFlag = false;
                                            scope.IgnoreFlaghide = false;
                                            scope.ViewedFlag = false;
                                            scope.msgflag = false;
                                            scope.ViewTickettext = scope.Express[0].ViewTicket !== null && scope.Express[0].ViewTicket !== undefined ? scope.Express[0].ViewTicket : "View Ticket Status";
                                        } else {
                                            scope.logidliproceed = true;
                                        }
                                    } else if (scope.Express[0].Acceptflag === 1) {
                                        if (scope.custid !== null) {
                                            scope.liproceed = false;
                                            scope.logidliproceed = true;
                                        } else {
                                            scope.liproceed = true;
                                            scope.logidliproceed = false;
                                        }
                                        scope.BookmarkFlag = false;
                                        scope.IgnoreFlaghide = false;
                                        scope.ViewedFlag = false;
                                        scope.msgflag = false;
                                    } else if (scope.Express[0].ExpressFlag === 1) {
                                        if (scope.custid !== null) {
                                            scope.logidliproceed = true;
                                        } else {
                                            scope.logidliproceed = false;
                                        }
                                        scope.BookmarkFlag = false;
                                        scope.IgnoreFlaghide = false;
                                        scope.ViewedFlag = false;
                                        scope.msgflag = false;
                                    } else {
                                        scope.logidliproceed = true;
                                    }
                                    break;
                                case "Paidstatus":
                                    scope.Paidstatus = testArr;
                                    break;
                                case "Ignore":
                                    scope.Ignore = testArr;
                                    break;
                            }
                        }
                    });
                });
                customerDashboardServices.getphotoslideimages(localcustid).then(function(response) {
                    scope.slides = [];

                    _.each(response.data, function(item) {
                        scope.slides.push(item);
                    });
                });
            }

        };

        scope.servicehttp = function(type, object) {
            return $injector.invoke(function($http) {
                return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                    .then(function(response) {

                        switch (type) {
                            case "B":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'bookmarked suceessfully', 2500);

                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'bookmarked failed', 2500);
                                }
                                break;
                            case "E":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'EXpressInterest done SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'EXpressInterest Fail', 2500);
                                }
                                break;
                            case "I":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'Ignore SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Ignore profile Fail', 2500);
                                }
                                break;
                            case "M":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', "Message sent SuccessFully", 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', "Message sending Fail", 2500);
                                }
                                break;
                        }
                    });
            });
        };
        scope.serviceactions = function(type, tocustid, typeofactionflag, profileid, form, logid, MessageHistoryId) {
            var logincustid = authSvc.getCustId();
            var loginprofileid = authSvc.getProfileid();
            var object = {
                IFromCustID: logincustid,
                IToCustID: tocustid,
                TypeofInsert: type,
                EncriptedText: null,
                EncryptedRejectFlagText: null,
                EncriptedTextrvr: null,
                EncryptedRejectFlagTextrvr: null,
                StrHtmlText: form !== undefined ? form.message : null,
                MessageLinkId: typeofactionflag !== undefined ? typeofactionflag : null,
                MessageHistoryId: MessageHistoryId !== undefined ? MessageHistoryId : null,
                Logid: logid !== undefined ? logid : null,
                FromProfileID: loginprofileid,
                ToProfileID: profileid !== undefined ? profileid : null
            };

            switch (type) {
                case "E":
                    authSvc.paymentstaus(logincustid, scope).then(function(responsepaid) {

                        if (responsepaid === true)
                            scope.servicehttp(type, object);
                    });
                    break;

                default:
                    scope.servicehttp(type, object);
                    break;
            }

        };
        scope.sendmessages = function(form) {

            scope.serviceactions("M", scope.messagecustid, undefined, undefined, form, undefined, undefined);
            alerts.dynamicpopupclose();
        };
        scope.sendmessegescommon = function(type, tocustid) {
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);

        };

        scope.acceptlinkexp = function(type, custid) {
            var locallogid = sessionStorage.getItem("locallogid");
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, locallogid, type, null).then(function(response) {
                if (response.data === 1) {
                    scope.$broadcast("showAlertPopupccc", 'alert-success', "Proceed successfully", 2500);
                } else {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', "sorry Proceed Fail", 2500);
                }
                alerts.dynamicpopupclose();
            });
        };

        scope.photoalbum = function() {
            scope.headerpopup = "Slide show";
            scope.popupmodalbody = false;
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                alerts.dynamicpopup("photopopup.html", scope, uibModal);
            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.viewhoroscopeimage = function() {
            scope.headerpopup = "Horoscope";
            scope.popupmodalbody = true;
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                if ((scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1) {
                    scope.personalinfo[0].HoroscopeImage = "http://d16o2fcjgzj2wp.cloudfront.net/Images/HoroscopeImages/" + logincustid + "_HaroscopeImage/" + logincustid + "_HaroscopeImage.html";
                    window.open(scope.personalinfo[0].HoroscopeImage, '_blank');
                } else {
                    alerts.dynamicpopup("photopopup.html", scope, uibModal);
                }
            }
        };
        scope.proceeddont = function(typeofbtn, obj) {
            switch (typeofbtn) {
                case "Proceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(obj).then(function(response) {
                        console.log(response);
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Your action send sucessfully', 3000);
                        scope.pageload();
                    });
                    break;
                case "btnDontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(obj).then(function(response) {
                        console.log(response);
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Your action send sucessfully', 3000);
                        scope.pageload();
                    });
                    break;
            }
            scope.divacceptreject = true;
            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
            scope.pagerefersh(scope.ToProfileID);
        };
        scope.procceddontproceedwilltell = function(type) {
            switch (type) {
                case "Proceed":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        console.log(responsepaid);
                        if (responsepaid === true) {
                            var MobjViewprofile = {
                                ExpressInrestID: scope.Express[0].ExpressInterstId,
                                CustID: scope.custid,
                                FromCustID: scope.custid,
                                ToCustID: localcustid,
                                AcceptStatus: 1,
                                MatchFollwupStatus: 1
                            };
                            scope.proceeddont("Proceed", MobjViewprofile);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
                case "dont":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        console.log(responsepaid);
                        if (responsepaid === true) {
                            var MobjViewprofile = {
                                ExpressInrestID: scope.Express[0].ExpressInterstId,
                                CustID: scope.custid,
                                FromCustID: scope.custid,
                                ToCustID: localcustid,
                                AcceptStatus: 2,
                                MatchFollwupStatus: 2
                            };
                            scope.proceeddont("DontProceed", MobjViewprofile);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
                case "tell":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        console.log(responsepaid);
                        if (responsepaid === true) {
                            alerts.timeoutoldalerts(scope, 'alert-sucess', 'Your action send sucessfully', 3000);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
            }
        };



    }
]);
//  app.factory('authInterceptor', ['$rootScope', '$q', '$window', 'authSvc', function ($rootScope, $q, $window, authSvc) {
//     return {
//       request: function (config) {
//         config.headers = config.headers || {};
//         var user = authSvc.user();
//         if (user.token) {
//           config.headers.Authorization = 'Bearer ' + user.token;
//         }
//         return config;
//       },
//       responseError: function (rejection) {
//         if (rejection.status === 401) {
//           // handle the case where the user is not authenticated
//         }
//         return $q.reject(rejection);
//       }
//     };
//   }]);

app.factory('authSvc', ['$injector', 'Idle', 'alert', '$http', function($injector, Idle, alerts, $http) {


    function setUser(value) {

        setSession('cust.id', value.CustID);
        setSession('cust.username', (value.FirstName + ' ' + value.LastName));
        setSession('cust.profileid', (value.ProfileID));
        setSession('cust.paidstatus', (value.PaidStatus));
        setSession('cust.profilepic', (value.ProfilePic));
        setSession('cust.GenderID', (value.GenderID));
        setSession('cust.isemailverified', (value.isemailverified));
        setSession('cust.isnumberverifed', (value.isnumberverifed));
    }

    function getSession(key) {
        return sessionStorage.getItem(key);
    }

    function setSession(key, value) {
        if (value === undefined || value === null) {
            clearSession(key);
        } else {
            sessionStorage.setItem(key, value);
        }
    }

    function clearSession(key) {
        sessionStorage.removeItem(key);
    }

    function clearUserSession() {

        clearSession('cust.id');
        clearSession('cust.username');
        clearSession('cust.profileid');
        clearSession('cust.paidstatus');
        clearSession('cust.profilepic');
        clearSession('cust.GenderID');
        clearSession('cust.isemailverified');
        clearSession('cust.isnumberverifed');

        sessionStorage.removeItem("LoginPhotoIsActive");
        sessionStorage.removeItem("homepageobject");
        sessionStorage.removeItem("httperrorpopupstatus");
    }

    function getUser() {
        return {
            custid: getSession('cust.id'),
            username: getSession('cust.username'),
            profileid: getSession('cust.profileid'),
            paidstatus: getSession('cust.paidstatus'),
            profilepic: getSession('cust.profilepic'),
            GenderID: getSession('cust.GenderID'),
            isemailverified: getSession('cust.isemailverified'),
            isnumberverifed: getSession('cust.isnumberverifed')
        };
    }

    return {
        user: function(value) {
            if (value) {
                setUser(value);
            }
            return getUser();
        },
        isAuthenticated: function() {
            return !!getSession('cust.id');
        },
        getCustId: function() {
            return getSession('cust.id');
        },
        getProfileid: function() {
            return getSession('cust.profileid');
        },
        getpaidstatus: function() {
            return getSession('cust.paidstatus');
        },
        getprofilepic: function() {
            return getSession('cust.profilepic');
        },
        getGenderID: function() {
            return getSession('cust.GenderID');
        },
        clearUserSessionDetails: function() {
            return clearUserSession();
        },
        logout: function() {
            clearUserSession();
            window.location = "/";
        },
        login: function(username, password) {
            var body = {
                Username: username,
                Password: password
            };

            return $http.post(app.apiroot + 'DB/userLogin/person', body)
                .then(function(response) {
                    if (response.status === 200) {
                        if (response.data !== null) {
                            Idle.watch();
                            return { success: true, response: response.data };
                        } else {
                            alert("Invalid Matrimony ID / E-mail OR Incorrect Password");
                        }
                    }
                    return { success: false, response: response.data };
                });
        },
        paymentstaus: function(custid, scope) {

            return $http.get(app.apiroot + 'Payment/getCustomerPaymentStatus', { params: { CustomerCustID: custid } })
                .then(function(response) {
                    if (response.status === 200 && response.data !== null && response.data !== undefined) {
                        console.log(response);
                        if (response.data === "Paid") {
                            return true;
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade', 3000);
                            return false;
                        }
                    }

                });
        }
    };
}]);
app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage, exactflag) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid, DashboardType: exactflag } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage, exactflag) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid, DashboardType: exactflag } });
        },
        getexpressintersetdata: function(object) {
            return http.post(app.apiroot + 'DashboardRequest/ExpressInterestSelectrequest', object);
        },
        getCustometDashBoardchats: function(object) {
            return http.get(app.apiroot + 'DashboardRequest/getCustometExpressIntrestDashBoardchats', { params: object });
        },
        insertcustomerservices: function(object) {
            return http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object);
        },
        Tickethistory: function(Ticketid, Type) {
            return http.get(app.apiroot + 'DashboardRequest/GetTicketinformation', { params: { Ticketid: Ticketid, Type: Type } });
        },
        Viewprofile: function(logcustid, tocustid, selfflag) {

            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: tocustid, CustID: logcustid, RelationshipID: selfflag } });
        },
        Viewprofileflags: function(logcustid, tocustid) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: logcustid, ToCustID: tocustid } });
        },
        communicationhistorychats: function(obj) {
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        },
        acceptrejectexpressinterest: function(fromid, toid, logid, type, empid) {

            return http.get(app.apiroot + 'DashboardRequest/getInsertCustomerExpressinterest', { params: { fromcustid: fromid, tocustid: toid, logID: logid, interstTYpe: type, empid: "" } });
        },
        photopasswordactioninsert: function(fromcustid, tocustid, type) {
            return http.get(app.apiroot + 'StaticPages/getPhotopasswordAcceptReject', { params: { FromcustID: 91022, TocustID: 91035, Accept_Reject: type } });
        },
        getprofilegrade: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getprofileGrade', { params: { CustID: custid } });
        },
        getphotoslideimages: function(custid) {
            return http.get(app.apiroot + 'StaticPages/GetPhotoSlideImages', { params: { CustID: custid } });
        }
    };
}]);
(function(app) {
    'use strict';

    app.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            responseError: function(rejection) {
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            }
        };
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }]);

}(window.app));
app.factory('feedbacksubmit', ["$http", function(http) {
    return {
        feedbacksubmitinsert: function(object) {
            return http.post(app.apiroot + 'StaticPages/CustomerRating_sendMail', object);
        }

    };
}]);
app.factory('helpService', ["$http", function(http) {
    return {
        helpSubmit: function(object) {

            return http.post(app.apiroot + 'StaticPages/InsertTicketInfo', object);
        },
        SendMail: function(object) {

            return http.post(app.apiroot + 'StaticPages/SendTicketMail', object);
        }
    };
}]);
app.factory('homepageservices', ['authSvc', function(http) {
    return {
        logininfo: function() {
            var person = {
                Username: "011046091",
                Password: "XowIvsTkzINyyKyJrPlmgg=="
            };
            return http.post(app.apiroot + 'DB/userLogin/person', person);
        }
    };
}]);
app.factory('missingFieldService', ['$http', function(http) {
    return {
        missingFieldSubmit: function(object) {
            return http.post(app.apiroot + 'StaticPages/MissingFieldsupdate_Customerdetails', object);
        },
        missingFieldSelect: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getdisplayMissingFieldsupdate_Customerdetails', {
                params: { i_updateflag: 0, CustID: custid }
            });
        },
        GetCustStatus: function(custID) {
            return http.get(app.apiroot + 'StaticPages/getCustomerfilldata', {
                params: { CustomerCustID: custID }
            });
        }
    };
}]);
app.factory('mobileVerificationService', ['$http', function(http) {
    return {
        getmobileverificationData: function(custid) {
            return http.get(app.apiroot + 'EmailMobileVerf/EmailMobileVerfRequest', { params: { id: custid } });
        },
        verifyMobile: function(VCode, flag, CustContactnumID) {
            return http.get(app.apiroot + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: VCode, i_EmilMobileVerification: flag, CustContactNumbersID: CustContactnumID } });
        },
        resendMobileCode: function(obj) {

            return http.get(app.apiroot + 'StaticPages/getResendmobile', { params: { iCountryID: obj.iCountryID, iCCode: obj.iCCode, MobileNumber: obj.MobileNumber, CustContactNumbersID: obj.CustContactNumbersID } });
        },
        resendEmailLink: function(obj) {
            return http.get(app.apiroot + 'StaticPages/getResendEmailVerficationLink', { params: { CustID: obj } });
        }
    };
}]);
app.factory('angularselects', ["SelectBindserviceApp","arrayConstants", function(service,cons) {
    return {
        countrySelect: function() {
            var  Country = [];
          service.countrySelect().then(function(response) {
          _.each(response.data, function(item) {
                Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        return Country;
        },
        casteselect: function() {
             var Caste = [];
         service.casteselect().then(function(response) {
                       _.each(response.data, function(item) {
               Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
         return Caste;
        },
       ProfessionGroup: function() {
            var Professiongroup = [];
       service.ProfessionGroup().then(function(response) {
           
            Professiongroup.push({ "label": "--select--", "title": "--select--", "value": 0 });
            _.each(response.data, function(item) {
               Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        return Professiongroup;
        },
         currency: function() {
                var Currency = [];
         service.currency().then(function(response) {
          
            _.each(response.data, function(item) {
               Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
         return Currency;
        }
     };
}]);
app.factory('ourBranchService', ["$http", function(http) {
    return {
        BranchSelect: function(regionID, BranchId) {
            BranchId = BranchId === undefined ? "" : BranchId;
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: regionID, dependencyflagID: BranchId } });
        },
        BranchPageloadSelect: function(value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: "", dependencyflagID: "" } });
        }
    };
}]);
app.factory('customerProfilesettings', ['$http', function(http) {
    return {
        getprofilesettinginfo: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getcustomerProfilesettings', { params: { CustID: custid } });
        },
        passwordchange: function(oldpassword, newpassword, confirmpassword, custid) {
            return http.get(app.apiroot + 'StaticPages/getUpdatePassword', { params: { OldPassword: oldpassword, NewPassword: newpassword, ConfirmPassword: confirmpassword, custId: custid } });
        },
        hideprofile: function(Expirydate, custid, flag) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { Expirydate: Expirydate, CustID: custid, iflag: flag } });
        },
        deleteprofile: function(ProfileID, Narrtion) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { ProfileID: ProfileID, Narrtion: Narrtion } });
        },
        manageprofiles: function(CustID, AllowEmail, AllowSMS) {
            return http.get(app.apiroot + 'StaticPages/getProfilesettingAllowEmailAllowSMS', { params: { CustID: CustID, AllowEmail: AllowEmail, AllowSMS: AllowSMS } });
        },
        submitemailmobilesubmit: function(FamilyID, MobileEmail, CountryCodeID, imobileEmailflag) {
            return http.get(app.apiroot + 'StaticPages/getProfilesettingEmailMobileChange', { params: { FamilyID: FamilyID, MobileEmail: MobileEmail, CountryCodeID: CountryCodeID, imobileEmailflag: imobileEmailflag } });
        },

        getmyorderspayments: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getpaymentdetailsmethoddal', { params: { CustID: custid } });
        },
        getmysupporttickets: function(obj) {
            return http.post(app.apiroot + 'StaticPages/TicketDetails', obj);
        },
        getopenticket: function(PageID, ProfileID, TicketID) {
            return http.get(app.apiroot + 'StaticPages/getCustomerReopenTicketStatus', { params: { PageID: PageID, ProfileID: ProfileID, TicketID: TicketID } });
        },
        forgotpassword: function(emailorprofileid) {
            return http.get(app.apiroot + 'StaticPages/getForgotPassword', { params: { Username: emailorprofileid } });
        }
    };
}]);
app.factory('searches', ["$http", function(http) {
    return {
        partnerdetails: function(custid, empid, searchresultid) {
            return http.get(app.apiroot + 'CustomerSearch/getPartnerpreferencedetails', { params: { CustID: custid, EmpID: empid, searchresultID: searchresultid } });
        },
        profileidsearch: function(ProfileIDSearch) {

            return http.post(app.apiroot + 'CustomerSearch/CustomerProfileIdsearch', ProfileIDSearch);
        },
        CustomerGeneralandAdvancedSearchsubmit: function(obj) {
            return http.post(app.apiroot + 'CustomerSearch/CustomerGeneralandAdvancedSearch', obj);
        },
        CustomerGeneralandAdvancedSavedSearch: function(obj) {

            return http.post(app.apiroot + 'CustomerSearch/CustomerGeneralandAdvancedSavedSearch', obj);
        },
        CustomerProfileIDSavedSearch: function(obj) {

            return http.post(app.apiroot + 'CustomerSearch/CustomerProfileIDSavedSearch', obj);
        },
        savedsearchselectmethod: function(Cust_ID, SaveSearchName, iEditDelete) {
            return http.get(app.apiroot + 'CustomerSearch/getSearchResultSaveEdit', { params: { Cust_ID: Cust_ID, SaveSearchName: SaveSearchName, iEditDelete: iEditDelete } });
        }
    };
}]);
app.factory('SelectBindServiceApp', ["$http", function(http) {
    return {
        countrySelect: function() {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        Searchcountry: function() {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "Searchcountry", dependencyValue: "" } });
        },
        stateSelect: function(dependencyVal) {

            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal } });
        },
        districtSelect: function(dependencyVal1) {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "distric", dependencyValue: dependencyVal1 } });
        },
        citySelect: function(dependencyVal2) {

            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "city", dependencyValue: dependencyVal2 } });
        },
        EducationCatgory: function() {
            return http.get(app.apiroot + 'Dependency/getEducationDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        EducationGroup: function(dependencyVal2) {

            return http.get(app.apiroot + 'Dependency/getEducationDependency', { params: { dependencyName: "educationGroup", dependencyValue: dependencyVal2 } });
        },
        EducationSpecialisation: function(dependencyVal2) {

            return http.get(app.apiroot + 'Dependency/getEducationDependency', { params: { dependencyName: "educationSpeacialisation", dependencyValue: dependencyVal2 } });
        },
        ProfessionCatgory: function() {
            return http.get(app.apiroot + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionCategory", dependencyValue: "" } });
        },
        ProfessionGroup: function() {
            return http.get(app.apiroot + 'Dependency/getProfessionDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        ProfessionSpecialisation: function(dependencyVal2) {

            return http.get(app.apiroot + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionGroup", dependencyValue: dependencyVal2 } });
        },
        casteselect: function() {

            return http.get(app.apiroot + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
        },
        countryCodeselect: function() {

            return http.get(app.apiroot + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CountryCode" } });
        },
        currency: function() {

            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Currency', dependencyValue: '', dependencyflagID: '' } });
        },
        SearchCurrency: function() {

            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'SearchCurrency', dependencyValue: '', dependencyflagID: '' } });
        },
        stars: function(obj) {
            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'StarType', dependencyValue: obj, dependencyflagID: '' } });
        },
        castedependency: function(obj1, obj2) {

            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Caste', dependencyValue: obj1, dependencyflagID: obj2 } });
        },
        subCasteBind: function(obj1) {

            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'SubCaste', dependencyValue: obj1, dependencyflagID: '' } });
        },
        branch: function(obj1) {

            return http.get(app.apiroot + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Region', dependencyValue: obj1, dependencyflagID: '' } });
        },
    };
}]);
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
        maskclasspartner: function(logphotostatus, photo, photocount, custid) {
            var photoclass = "";
            var PhotoMaskDiv;
            if (custid !== undefined && custid !== null && custid !== "") {
                if (logphotostatus !== "null" && logphotostatus !== null && photo.indexOf("ApplicationPhoto") !== -1)
                    PhotoMaskDiv = logphotostatus !== true && logphotostatus !== "true" && photo.indexOf("ApplicationPhoto") !== -1 ? "cssMaskdivrev clearfix" : "";
                else if (logphotostatus !== "null" && logphotostatus !== null && photo.indexOf("ThumbNail") !== -1)
                    PhotoMaskDiv = logphotostatus !== true && logphotostatus !== "true" && photo.indexOf("ThumbNail") !== -1 ? "cssMaskdivrev clearfix" : "";
                else
                    PhotoMaskDiv = photo.indexOf("ApplicationPhoto") !== -1 || photo.indexOf("ThumbNail") !== -1 ? "cssMaskdiv clearfix" : "";

                if (PhotoMaskDiv === "cssMaskdiv clearfix") {

                    photoclass = PhotoMaskDiv === "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
                } else if (PhotoMaskDiv === "cssMaskdivrev clearfix") {

                    photoclass = PhotoMaskDiv === "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
                } else if (photo.toLowerCase().indexOf("_rev") !== -1) {
                    photoclass = PhotoMaskDiv === "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";

                } else if (photo.indexOf("noimage") !== -1) {
                    photoclass = "Linkdisabled";
                } else if (photo.indexOf("Password-Protected") !== -1) {

                    if (PhotoMaskDiv === "cssMaskdiv clearfix") {
                        photoclass = "cssMaskdiv clearfix Linkdisabled";
                    } else if (PhotoMaskDiv === "cssMaskdivrev clearfix") {
                        photoclass = "cssMaskdivrev clearfix Linkdisabled";
                    }

                    photoclass = "Linkdisabled";
                } else if ((photocount) === 0) {
                    photoclass = "Linkdisabled";

                } else {
                    photoclass = "";
                }
            }
            return photoclass;
        }

    };
}]);
app.factory('myAppFactory', ["$http", function(http) {
    return {
        getData: function() {
            return http({
                method: 'GET',
                url: 'http://angular-data-grid.github.io/demo/data.json'
            });
        },
        getpayment: function(custid) {
            return http.get(app.apiroot + 'Payment/GetPaymentDetails', { params: { CustID: custid } });
        },
        sendsms: function(CategoryID, Cust_ID, SendPhonenumber) {
            return http.get(app.apiroot + 'StaticPages/getUnpaidMembersOwnerNotification', { params: { CategoryID: CategoryID, Cust_ID: Cust_ID, SendPhonenumber: SendPhonenumber } });
        }

    };
}]);
app.factory('customerviewfullprofileservices', ['$http', function(http) {
    return {
        getInsertUnpaidStatus: function(custid, tocustid, empid, typeofaction) {
            return http.get(app.apiroot + 'StaticPages/getInsertUnpaidStatus', { params: { fromCustID: custid, ToCustID: tocustid, Empid: empid, typeofAction: typeofaction } });
        },
        getInsertExpressViewTicket: function(fromcustid, tocustid, decryptedtext, strtypeofreport) {
            return http.get(app.apiroot + 'StaticPages/getInsertExpressViewTicket', { params: { FromCustID: fromcustid, ToCustID: tocustid, DecriptedText: decryptedtext, strtypeOfReport: strtypeofreport } });
        },
        getExpressIntrstfullprofile: function(fromprofileid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { FromProfileID: fromprofileid, EmpID: empid } });
        },
        getExpressinterst_bookmark_ignore_data: function(Loggedcustid, ToCustID) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterst_bookmark_ignore_data', { params: { Loggedcustid: Loggedcustid, ToCustID: ToCustID } });
        },

        getViewFullProfileMail: function(OriginalString) {
            console.log(OriginalString);
            return http.get(app.apiroot + 'StaticPages/getViewFullProfileMail', { params: { OriginalString: OriginalString } });
        },
        UpdateExpressIntrestViewfullprofile: function(obj) {
            return http.post(app.apiroot + 'StaticPages/UpdateExpressIntrestViewfullprofile', obj);
        },
        getCustomerApplicationErroLog: function(ErrorMessage, CustID, PageName, Type) {
            return http.get(app.apiroot + 'StaticPages/getCustomerApplicationErroLog', { params: { ErrorMessage: ErrorMessage, CustID: CustID, PageName: PageName, Type: Type } });
        }


    };
}]);