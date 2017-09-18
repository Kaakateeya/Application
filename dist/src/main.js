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
        { "label": "--select--", "title": "--select--", "value": "" },
        { "label": "Unmarried", "title": "Unmarried", "value": 43 },
        { "label": "Divorce", "title": "Divorce", "value": 44 },
        { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
        { "label": "Separated", "title": "Separated", "value": 46 }
    ],
    "height": [
        { "label": "--select--", "title": "--select--", "value": "" },
        { "label": "4'0 in - 122 cms", "title": "4'0 in - 122 cms", "value": 1 },
        { "label": "4'1 in - 124 cms", "title": "4'1 in - 124 cms", "value": 2 },
        { "label": "4'2 in - 127 cms", "title": "4'2 in - 127 cms", "value": 3 },
        { "label": "4'3 in - 130 cms", "title": "4'3 in - 130 cms", "value": 4 },
        { "label": "4'4 in - 132 cms", "title": "4'4 in - 132 cms", "value": 5 },
        { "label": "4'5 in - 135 cms", "title": "4'5 in - 135 cms", "value": 6 },
        { "label": "4'6 in - 137 cms", "title": "4'6 in - 137 cms", "value": 7 },
        { "label": "4'7 in - 140 cms", "title": "4'7 in - 140 cms", "value": 8 },
        { "label": "4'8 in - 142 cms", "title": "4'8 in - 142 cms", "value": 9 },
        { "label": "4'9 in - 144 cms", "title": "4'9 in - 144 cms", "value": 10 },
        { "label": "4'10 in - 147 cms", "title": "4'10 in - 147 cms", "value": 11 },
        { "label": "4'11 in - 150 cms", "title": "4'11 in - 150 cms", "value": 12 },
        { "label": "5'0 in - 152 cms", "title": "5'0 in - 152 cms", "value": 13 },
        { "label": "5'1 in - 155 cms", "title": "5'1 in - 155 cms", "value": 14 },
        { "label": "5'2 in - 157 cms", "title": "5'2 in - 157 cms", "value": 15 },
        { "label": "5'3 in - 160 cms", "title": "5'3 in - 160 cms", "value": 16 },
        { "label": "5'4 in - 162 cms", "title": "5'4 in - 162 cms", "value": 17 },
        { "label": "5'5 in - 165 cms", "title": "5'5 in - 165 cms", "value": 18 },
        { "label": "5'6 in - 167 cms", "title": "5'6 in - 167 cms", "value": 19 },
        { "label": "5'7 in - 170 cms", "title": "5'7 in - 170 cms", "value": 20 },
        { "label": "5'8 in - 172 cms", "title": "5'8 in - 172 cms", "value": 21 },
        { "label": "5'9 in - 175 cms", "title": "5'9 in - 175 cms", "value": 22 },
        { "label": "5'10 in - 177 cms", "title": "5'10 in - 177 cms", "value": 23 },
        { "label": "5'11 in - 180 cms", "title": "5'11 in - 180 cms", "value": 24 },
        { "label": "6'0 in - 183 cms", "title": "6'0 in - 183 cms", "value": 25 },
        { "label": "6'1 in - 185 cms", "title": "6'1 in - 185 cms", "value": 26 },
        { "label": "6'2 in - 188 cms", "title": "6'2 in - 188 cms", "value": 27 },
        { "label": "6'3 in - 190 cms", "title": "6'3 in - 190 cms", "value": 28 },
        { "label": "6'4 in - 193 cms", "title": "6'4 in - 193 cms", "value": 29 },
        { "label": "6'5 in - 195 cms", "title": "6'5 in - 195 cms", "value": 30 },
        { "label": "6'6 in - 198 cms", "title": "6'6 in - 198 cms", "value": 31 },
        { "label": "6'7 in - 200 cms", "title": "6'7 in - 200 cms", "value": 32 },
        { "label": "6'8 in - 203 cms", "title": "6'8 in - 203 cms", "value": 33 },
        { "label": "6'9 in - 205 cms", "title": "6'9 in - 205 cms", "value": 34 },
        { "label": "6'10 in - 208 cms", "title": "6'10 in - 208 cms", "value": 35 },
        { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 },
        { "label": "7'0 in - 213 cms", "title": "7'0 in - 213 cms", "value": 37 },
        { "label": "7'1 in - 215 cms", "title": "7'1 in - 215 cms", "value": 38 },
        { "label": "7'2 in - 218 cms", "title": "7'2 in - 218 cms", "value": 39 }
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
        { "label": "--select--", "title": "--select--", "value": "" },
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
    "educationcategorywithoutselect": [
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
    'Upgrade': "Upgrade Membership",
    'Complexion': [
        { "label": "--select-- ", "title": "--select--", "value": "" },
        { "label": "Very Fair", "title": "Very Fair", "value": 17 },
        { "label": "Fair", "title": "Fair", "value": 18 },
        { "label": "Medium", "title": "Medium", "value": 19 },
        { "label": "Dark", "title": "Dark", "value": 20 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 38 }
    ]

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
                scope.$watch('model', function(current, old) {
                    if (scope.array !== undefined && scope.array !== "" && scope.array !== null && scope.array.length > 100 && scope.model !== undefined && scope.model !== "" && scope.model !== null && scope.model.length > 100) {
                        if (scope.model.length === scope.array.length) {
                            scope.model = null;
                        }
                    } else if (scope.model !== undefined && scope.model !== "" && scope.model !== null && scope.model.length > 0) {
                        scope.model = current;
                    }
                });
                scope.directivechangeevent = function(model) {
                    scope.$emit('directivechangeevent', model, scope.type);
                };
                scope.applycolorsdirecive = function(value, id) {
                    var colors = "selectborderclass";
                    if (value !== 0 && value !== "0" && value !== "" && value !== null && value !== undefined && value.length > 0) {
                        if (value.toString() !== "0") {
                            colors = "selectborderclasscolor";
                            $('#' + id).next().find('button').addClass("bacg");
                        }
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
app.controller('CarouselDemoCtrl', function($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
    $('#playButton').click(function() {
        $scope.myInterval = 3000;
    });
    $('#pauseButton').click(function() {
        $scope.myInterval = 0;
    });
});
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
app.factory('alert', ['$mdDialog', '$uibModal', '$timeout', 'arrayConstants', 'customerProfilesettings', function($mdDialog, uibModal, timeout, arrayConstants, customerProfilesettings) {
    var modalinstance, forgetpassword;

    function closepopup($scope) {
        $scope.hide = function() {
            forgetpassword.hide();
        };
        $scope.ValidateEmail = function(email) {
            var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return expr.test(email);
        };
        $scope.Validatnumber = function(num) {
            var expr1 = /[0-9 -()+]+$/;
            return expr1.test(num);
        };
        $scope.validate = function(form) {
            if ((form.txtforgetemail).indexOf("@") != -1) {
                if (!$scope.ValidateEmail(form.txtforgetemail)) {
                    form.txtforgetemail = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!$scope.Validatnumber(form.txtforgetemail) || (form.txtforgetemail).length != 9) {
                    alert("Please enter valid ProfileID/Email");
                    form.txtforgetemail = '';
                    return false;

                } else {
                    return true;
                }
            }
        };
        $scope.forgotpasswordsubmit = function(form) {
            if ($scope.validate(form)) {
                customerProfilesettings.forgotpassword(form.txtforgetemail).then(function(response) {
                    if (response.data == 1) {
                        alert('Mail sent to your email, To reset your password check your mail');
                        forgetpassword.hide();
                    } else if (response.data == 2) {
                        alert("Invalid Matrimony ID OR  E-mail-ID.");
                    } else {
                        alert("Invalid Matrimony ID OR  E-mail-ID.");
                    }
                });
            }
        };
    }
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
                size: size || 'lg',
                backdrop: 'static',
                keyboard: false
            });
        },
        dynamicpopupclose: function() {
            modalinstance.close();
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
        },
        applycolors: function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value !== null) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        },
        applycolorsfortextboxes: function(value, id) {
            var colors = "textboxremvecolor";
            if (value !== "" && value !== undefined && value !== null) {
                colors = "bacg";
                $('#' + id).addClass("bacg");
            } else {
                colors = "textboxremvecolor";
                $('#' + id).removeClass("bacg");
            }
            return colors;
        },
        showforgetpopup: function(scope) {
            forgetpassword = $mdDialog;
            forgetpassword.show({
                templateUrl: 'templates/forgotPasswordDirective.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                controller: closepopup,
            });
        },
    };
}]);
app.directive('focus',
    function($timeout) {
        return {
            scope: {
                trigger: '@focus'
            },
            link: function(scope, element) {
                scope.$watch('trigger', function(value) {
                    if (value === "true") {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    }
);
app.directive("forgotPassword", ['authSvc', "customerProfilesettings", "alert",
    '$mdDialog',
    function(authSvc, customerProfilesettings, alerts, $mdDialog) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var modalinstance;
        return {
            restrict: "E",
            scope: {
                arrayphotos: '='
            },
            // templateUrl: "templates/forgotPasswordDirective.html",
            link: function(scope, element, attrs) {
                scope.showforgetpassword = function() {
                    $mdDialog.show({
                        templateUrl: 'templates/forgotPasswordDirective.html',
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
                    $mdDialog.hide();
                    //modalinstance.cancel();
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
                scope.$on('showforgetpassworddirective', function(event) {
                    scope.showforgetpassword();
                });
            }
        };
    }
]);
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
app.directive('multiselectdropdown', ['arrayConstants', 'SelectBindServiceApp', '$timeout',
    'countryArrayModel', 'eduprofArrayModel', 'otherArrayModel',
    function(cons, service, timeout, countryArrayModel, eduprofArrayModel, otherArrayModel) {
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

                            // service.countrySelect().then(function(response) {
                            //     var option = [];

                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(countryArrayModel.Country);

                            break;
                        case 'ProfCatgory':
                            // service.ProfessionCatgory().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(eduprofArrayModel.ProfCatgory);



                            break;
                        case 'ProfGroup':
                            // service.ProfessionGroup().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(eduprofArrayModel.ProfGroup);


                            break;
                        case 'indiaStates':
                            // service.stateSelect('1').then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.IndiaStates);


                            break;
                        case 'countryCode':
                            // service.countryCodeselect().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.countryCode);

                            break;
                        case 'caste':
                        case 'Caste':
                            // service.casteselect().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(otherArrayModel.caste);
                            break;

                            // case 'Caste':
                            //     service.casteselect().then(function(response) {
                            //         var option = [];
                            //         option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                            //         _.each(response.data, function(item) {
                            //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //         });
                            //         scope.databind(option);
                            //     });
                            //     scope.databind(otherArrayModel.caste);
                            //     break;


                        case 'currency':
                            // service.currency().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.currency);

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
                                    test.push({ "label": i + ' years', "title": i + ' years', "value": i });
                                } else {
                                    test.push({ "label": i, "title": i, "value": i });
                                }
                            }
                            scope.databind(test);
                            break;
                        case "Complexion":
                            scope.databind(cons.Complexion);
                            break;
                        case 'newProfessionCatgory':

                            // service.newProfessionCat().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });
                            scope.databind(eduprofArrayModel.newProfessionCatgory);

                            break;

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
                    //console.log("TYPEDROP   " + scope.typeofdata);
                    // console.log(element[0].length);
                    element.multiselect('select', scope.ngModel);
                    return element[0].length;
                }, function() {
                    scope.$applyAsync(element.multiselect('rebuild'));
                    element.multiselect('select', scope.ngModel);
                });
                // Watch for any changes from outside the directive and refresh
                scope.$watch(attrs.ngModel, function() {
                    // console.log(scope.ngModel);
                    element.multiselect('refresh');
                });
            }
        };
    }
]);
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
    '$mdDialog', 'alert', 'customerDashboardServices', '$uibModal', '$http', 'helperservice',
    function($injector, authSvc, successstoriesdata, $mdDialog, alerts, customerDashboardServices,
        uibModal, $http, helperservice) {
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
                scope.loginpaidstatus = authSvc.getpaidstatus();
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
                scope.loadmore = false;
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
                    if (scope.array !== undefined && scope.array.length > 0) {
                        scope.endindex = (scope.array[0].TotalRows > scope.endindex === true) ? scope.endindex : scope.array[0].TotalRows;
                        scope.loadmore = (scope.array[0].TotalRows > scope.endindex) ? true : false;
                        scope.Norowsend = (scope.array[0].TotalRows === scope.endindex) ? true : false;
                    }
                });
                scope.$watch('array', function(value) {
                    scope.PartnerProfilesnew = scope.array;
                    if (scope.array !== undefined && scope.array.length > 0) {
                        scope.loadmore = scope.array[0].TotalRows > (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows > scope.endindex ? true : false;
                        scope.Norowsend = scope.array[0].TotalRows < (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows < scope.endindex ? true : false;
                        scope.startindex = 1;
                        scope.endindex = scope.paggingflag === false ? 8 : 9;
                        scope.flag = scope.paggingflag === false ? 8 : 9;
                    }
                });
                scope.listclick = function() {
                    scope.$emit('slideshowrefineshow');
                    scope.typeofdiv = 'List';
                    $('.search_result_items_main').attr("style", "width:80%;");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;
                };
                scope.gridclick = function() {
                    scope.$emit('slideshowrefineshow');
                    scope.typeofdiv = 'Grid';
                    $('.search_result_items_main').attr("style", "");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;
                };
                scope.servicehttp = function(type, object) {
                    return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                        .then(function(response) {

                            switch (type) {
                                case "B":
                                    if (response.data === 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "bookmarked suceessfully", "success");
                                    } else {
                                        scope.$emit('successfailer', "bookmarked failed", "warning");
                                    }
                                    break;
                                case "E":
                                    if (response.data == 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "EXpressInterest done SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "EXpressInterest Fail", "warning");
                                    }
                                    break;
                                case "I":
                                    if (response.data === 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
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

                        if (typeofactionflag === 1) {
                            typeofactionflag = true;
                        }
                        switch (type) {
                            case "B":
                                if (typeofactionflag !== true) {
                                    scope.servicehttp(type, object);
                                } else {
                                    scope.$emit('successfailer', "You have already Bookmark This ProfileID", "warning");
                                }
                                break;
                            case "E":
                                if (typeofactionflag !== true) {
                                    authSvc.paymentstaus(logincustid, scope).then(function(responsepaid) {

                                        if (responsepaid === true)
                                            scope.servicehttp(type, object);
                                    });
                                } else {
                                    scope.$emit('successfailer', "You have already ExpressInterest This ProfileID", "warning");
                                }
                                break;
                            case "I":
                                if (typeofactionflag !== true) {
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
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        password = password !== null && password !== "" ? 468 : 467;
                        return $http.get(app.apiroot + 'StaticPages/getSendMail_PhotoRequest_Customer', { params: { FromCustID: tocustid, ToCustID: logincustid, Category: password } })
                            .then(function(response) {
                                if (response.data === 1) {
                                    scope.$emit('successfailer', "Request sent suceessfully", "success");
                                    // scope.$emit('photosrequests', "photorequest");
                                } else {
                                    scope.$emit('successfailer', "Request sent Fail", "warning");
                                }
                            });
                    } else {
                        scope.$emit('showloginpopup');
                    }
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
                    var photostatuslogin = helperservice.checkstringvalue(authSvc.getprofilepic()) ? authSvc.getprofilepic() : "";
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid, photostatuslogin);
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
                    scope.loadmore = false;
                    scope.loaderspin = false;
                    scope.Norowsend = false;
                    scope.$emit('modifyursearchpartner', 1, 10);
                };

                //Bootstrap Carousal
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

                function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
                    currentslide = 1;
                    var totalItems = $('#' + carouselID).find('.item').length;
                    if (totalItems === 0) {
                        scope.$emit('slideshowsubmit', 1, 10, "slideshow");
                        scope.checkitemnew(carouselID);
                    }
                    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
                    ArrowMove(carouselID);
                    checkitemGlobal(carouselID);
                }



                function slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
                    $('#' + carouselID).bind('slide.bs.carousel', function(e) {
                        $('.list-inline li a').removeClass('selected');
                        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
                        var totalItems1 = $('#' + carouselID).find('.item').length;
                        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
                        $("#lnkLastSlide").text(currentIndex1);
                        $('#' + carouselID).find('div.active').index();
                        if (currentslide < currentIndex1) {
                            if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                                if (parseInt(totalItems1) - parseInt(currentIndex1) === 4) {
                                    scope.$emit('slideshowsubmit', totalItems1 + 1, totalItems1 + 10, "slideshow");
                                }
                            } else {
                                if (parseInt(totalItems1) - parseInt(currentIndex1) === 1) {
                                    scope.$emit('showloginpopup');
                                }
                            }
                        }
                        currentslide = currentIndex1;

                    });
                }
                //method to move slide to left or right arrow press
                function ArrowMove(carouselID) {
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
                }

                function checkitemGlobal(carouselID) {
                    var checkitem = function() {
                        scope.checkitemnew(carouselID);
                    };
                    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
                }
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

                scope.Slideshowpage = function() {
                    scope.$emit('slideshowrefinehide');
                    scope.slideshowsearches = true;
                    scope.playpausebuttons = false;
                    scope.partnersearchessearches = false;
                    scope.searchestype = true;
                    pageload("slideShowCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
                    $('.search_result_items_main').attr("style", "width:100%;");
                    scope.checkitemnew("slideShowCarousel");
                    $('#slideShowCarousel').carousel('pause');
                };

                ///////
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
                offsetTop = element.offset().top;
                // element[($win.scrollTop() >= offsetTop) ? 'addClass' : 'removeClass'](topClass);
                element[($win.scrollTop() !== 0) ? 'addClass' : 'removeClass'](topClass);
            });
        }
    };
});
(function(angular) {
    'use strict';

    function factory($http, service, timeout) {
        var model = {};
        model.Country = [];
        model.IndiaStates = [];
        model.countryCode = [];
        model.currency = [];

        model.init = function() {
            model.Country = [];
            model.IndiaStates = [];
            model.countryCode = [];
            model.currency = [];
            // timeout(function() {
            model.Countryf();
            model.stateSelectf();
            model.countryCodeselectf();
            model.currencyf();
            // model.allAtOnce();

            // });
            return model;
        };

        model.Countryf = function() {
            if (model.Country.length === 0) {
                service.countrySelect().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.Country = option;
                });
            }
        };

        model.stateSelectf = function() {

            if (model.IndiaStates.length === 0) {
                service.stateSelect('1').then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.IndiaStates = option;
                });
            }

        };

        model.countryCodeselectf = function() {
            if (model.countryCode.length === 0) {
                service.countryCodeselect().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.countryCode = option;
                });
            }
        };

        model.currencyf = function() {
            if (model.currency.length === 0) {
                service.currency().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.currency = option;
                });
            }
        };


        // model.allAtOnce = function() {
        //     if (model.Country.length === 0) {
        //         timeout(function() {
        //             service.getCustomerBindings().then(function(response) {
        //                 if (response.data) {
        //                     model.IndiaStates = [];
        //                     model.countryCode = [];
        //                     model.Country = [];
        //                     model.profgroup = [];
        //                     model.profcatgory = [];
        //                     model.currency = [];
        //                     model.newProfcatgory = [];

        //                     model.Country = model.returnFormatArray(JSON.parse(response.data[2]));
        //                     model.ProfCatgory = model.returnFormatArray(JSON.parse(response.data[4]));
        //                     model.ProfGroup = model.returnFormatArray(JSON.parse(response.data[3]));
        //                     model.IndiaStates = model.returnFormatArray(JSON.parse(response.data[0]));
        //                     model.countryCode = model.returnFormatArray(JSON.parse(response.data[1]));
        //                     model.currency = model.returnFormatArray(JSON.parse(response.data[5]));
        //                     model.newProfessionCatgory = model.returnFormatArray(JSON.parse(response.data[6]));
        //                     model.caste = model.returnFormatArray(JSON.parse(response.data[7]));
        //                     // response.data = JSON.parse(response.data);

        //                 }
        //             });
        //         }, 500);
        //     }
        // };

        // model.returnFormatArray = function(arr) {
        //     var option = [];
        //     if (arr.length > 0) {
        //         option.push({ "label": "--select--", "title": "--select--", "value": "" });
        //         _.each(arr, function(item) {
        //             option.push({ "label": item.NAME, "title": item.NAME, "value": item.ID });
        //         });
        //     }
        //     return option;
        // };
        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('countryArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);
(function(angular) {
    'use strict';


    function factory($http, serviceApp, timeout) {
        var model = {};
        model.ProfCatgory = [];
        model.ProfGroup = [];
        model.newProfessionCatgory = [];

        model.init = function() {
            model.ProfCatgoryf();
            model.ProfessionGroupf();
            model.newProfessionCatgoryf();
            return model;
        };

        model.ProfCatgoryf = function() {
            if (model.ProfCatgory.length === 0) {
                serviceApp.ProfessionCatgory().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.ProfCatgory = option;
                });
            }
        };
        model.ProfessionGroupf = function() {
            if (model.ProfGroup.length === 0) {
                serviceApp.ProfessionGroup().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.ProfGroup = option;
                });
            }
        };

        model.newProfessionCatgoryf = function() {
            if (model.newProfessionCatgory.length === 0) {
                serviceApp.newProfessionCat().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.newProfessionCatgory = option;
                });
            }
        };

        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('eduprofArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);
(function(angular) {
    'use strict';

    function factory($http, serviceApp, timeout) {
        var model = {};
        var option = [];
        model.caste = [];
        model.init = function() {
            model.casteselectf();
            return model;
        };

        model.casteselectf = function() {
            if (model.caste.length === 0) {
                serviceApp.casteselect().then(function(response) {
                    option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.caste = option;
                });
            }
        };

        // model.empNamesSelectf = function() {
        //     serviceApp.EmpBinding(1, 2, '').then(function(response) {
        //         option = [];
        //         option.push({ "label": "--Select--", "title": "--Select--", "value": "" });
        //         _.each(response.data, function(item) {
        //             if (item.CountryCode === 'Profile Owner') {
        //                 option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //             }
        //         });
        //         model.empNames = option;
        //     });
        // };

        // model.branchf = function() {
        //     option = [];
        //     //  option.push({ "label": "--Select--", "title": "--Select--", "value": "" });
        //     serviceApp.BranchName().then(function(response) {
        //         _.each(response.data, function(item) {
        //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //         });
        //         model.branch = option;
        //     });
        // };

        // model.Applicationstatusf = function() {
        //     option = [];
        //     serviceApp.Applicationstatus().then(function(response) {
        //         _.each(response.data, function(item) {
        //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //         });
        //         model.Applicationstatus = option;
        //     });
        // };

        // model.Smokef = function() {
        //     option = [];
        //     serviceApp.Smoke().then(function(response) {
        //         _.each(response.data, function(item) {
        //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //         });
        //         model.Smoke = option;
        //     });
        // };


        // model.Dietf = function() {
        //     option = [];
        //     serviceApp.Diet().then(function(response) {
        //         _.each(response.data, function(item) {
        //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //         });
        //         model.Diet = option;
        //     });
        // };

        // model.EmpNameswithBranchf = function() {
        //     option = [];
        //     serviceApp.EmpwithBranch('ProfileBranch', '').then(function(response) {
        //         _.each(response.data, function(item) {
        //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID, ParentName: item.BranchesName });
        //         });
        //         model.EmpNameswithBranch = option;
        //     });
        // };

        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('otherArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);
app.controller('Controllerpartner', ['$uibModal', '$scope', 'customerDashboardServices', 'authSvc',
    'alert', '$window', '$location', 'successstoriesdata', '$rootScope', '$timeout', 'route',
    '$stateParams', 'commonFactory', 'helperservice',
    function(uibModal, scope, customerDashboardServices, authSvc, alerts,
        window, $location, successstoriesdata, $rootscope, $timeout, route,
        $stateParams, commonFactory, helperservice) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var loginpaidstatus = authSvc.getpaidstatus();
        var photostatuslogin = helperservice.checkstringvalue(authSvc.getprofilepic()) ? authSvc.getprofilepic() : "";
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
        scope.exactshow = (scope.typeodbind === 'C' || scope.typeodbind === 'P') && loginpaidstatus === "1" ? false : true;
        scope.normaldata = true;
        scope.notificationtxt = [];
        scope.notifytype = 'page';
        scope.notificationpopup = [];
        scope.Typeofdatabind = $stateParams.type;
        scope.oldnotificationpopup = [];
        scope.newnitify = false;
        scope.oldnitify = false;


        scope.catchfunction = function() {
            var obj = {
                ExpressAllcount: 0,
                ExpressIntReceived: 0,
                ExpressIntSent: 0,
                IgnoreProfileCount: 0,
                MenuName: null,
                MybookMarkedProfCount: 0,
                NewMsgs: 0,
                OnlyName: null,
                PageName: null,
                ReceivedHoroRequestCount: 0,
                ReceivedPhotoRequestCount: 0,
                ReceivedProtectedAccept: 0,
                ReceivedProtectedNew: 0,
                ReceivedProtectedReject: 0,
                RectViewedProfCount: 0,
                RectWhoViewedCout: 0,
                SaveSearchCount: 0,
                SentHoroRequestCount: 0,
                SentPhotoRequestCount: 0,
                SentProtectedAccept: 0,
                SentProtectedReject: 0,
                SentProtectedReply: 0,
                TotalMsgs: 0,
                WhobookmarkedCount: 0
            };
            scope.bindcounts(obj);
            scope.bindallcounts = obj;
        };
        scope.gettingpartnerdata = function(type, frompage, topage, headertext, bindvalue, exactflag) {
            scope.exactflagstorage = exactflag;
            if (bindvalue !== null && bindvalue !== 0 && bindvalue !== 'profile') {
                scope.flag = frompage === 1 ? 9 : scope.flag;
                scope.typeodbind = type;
                scope.exactshow = (scope.typeodbind === 'C' || scope.typeodbind === 'P') && loginpaidstatus === "1" ? false : true;
                if (type === 'C') {
                    customerDashboardServices.getCustomercounts(scope.custid, type, frompage, topage, exactflag).then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.bindcounts(response.data.DashBoardCounts);
                            scope.bindallcounts = response.data.DashBoardCounts;
                            scope.PersonalInfo = (response.data.PersonalInfo);
                            scope.photopersonal = helperservice.checkarraylength(scope.PersonalInfo) && helperservice.checkstringvalue(scope.PersonalInfo.Photo) ? scope.PersonalInfo.Photo : "";
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
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                            scope.lblUHaveviewd = headertext;
                        }
                    }).catch(function(response) {
                        scope.catchfunction();
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
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                            scope.lblUHaveviewd = headertext;
                        }
                    }).catch(function(response) {
                        scope.catchfunction();

                    });
                }
            } else if (bindvalue == 'profile') {} else {
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
            if ((array === undefined) || (array === null) || (array === "")) {
                array = {};
                array.MybookMarkedProfCount = 0;
                array.WhobookmarkedCount = 0;
                array.RectViewedProfCount = 0;
                array.RectWhoViewedCout = 0;
                array.IgnoreProfileCount = 0;
                array.SaveSearchCount = 0;
            }
            scope.leftMenuArr = [
                { value: 'Edit my profile', bindvalue: 'profile', statename: 'editview', object: {} },
                { value: 'Upgrade your membership', bindvalue: 'profile', statename: 'UpgradeMembership', object: {} },
                { value: 'manage photo', bindvalue: 'profile', statename: 'editview.editManagePhoto', object: {} },
                { value: 'My bookmarked profiles', bindvalue: array.MybookMarkedProfCount, clickvalues: 'MB', clickvaluesbind: 'Profiles you have bookmarked' },
                { value: 'Who bookmarked me', bindvalue: array.WhobookmarkedCount, clickvalues: 'WB', clickvaluesbind: 'Profiles Who BookMarked You' },
                { value: 'Profiles viewed by me', bindvalue: array.RectViewedProfCount, clickvalues: 'RV', clickvaluesbind: 'Profiles viewed by me' },
                { value: 'My profile viewed by others', bindvalue: array.RectWhoViewedCout, clickvalues: 'WV', clickvaluesbind: 'Members viewed my profile' },
                { value: 'Ignored profiles', bindvalue: array.IgnoreProfileCount, clickvalues: 'I', clickvaluesbind: 'Profiles ignored by you' },
                { value: 'Saved search', bindvalue: array.SaveSearchCount, statename: 'General', object: { id: 3 } },
                { value: 'Profile Settings', bindvalue: 'profile', statename: 'profilesettings', object: {} },
                { value: 'help', bindvalue: 'profile', statename: 'help', object: {} },
            ];
        };
        var TypeOfReportexpress = null;
        var yourFilterexpress = null;
        var oppfilterexpress = null;
        scope.flagexpress = 9;
        scope.expressinterestselect = function(count, TypeOfReport, yourFilter, oppfilter, frompage, topage, headertext, typeofinterest, eventclick) {
            scope.exactshow = true;
            if (count !== 0) {
                if (eventclick !== null) {
                    scope.click = eventclick;
                }
                if (headertext === "1" || headertext === "2" || headertext === "3") {
                    scope.flagexpress = 9;
                    if (headertext === "1") {
                        yourFilterexpress = scope.expressmyinterest.indexOf('I interested in') !== -1 ? 'I' : null;
                        oppfilterexpress = scope.expressmyinterest.indexOf('I interested in') == -1 ? 'I' : null;
                        TypeOfReportexpress = scope.expressmyinterest.indexOf('I interested in') !== -1 ? 'R' : 'S';
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
                            scope.expressmyinterest = TypeOfReport === 'R' ? 'I interested in' : scope.Gendercustomer + ' interested';
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
                                scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data[0]) ? response.data[0].TotalRows : 0;
                                scope.lblUHaveviewd = TypeOfReport === 'R' ? 'Interest Expressed By ' + scope.Gendercustomer : headertext;
                                scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                                scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                                scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                            }
                        } else {
                            if (helperservice.checkstringvalue(scope.PartnerProfilesnew[0])) {
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
                if (helperservice.checkstringvalue(response.data)) {
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
            if (form !== undefined && helperservice.checkstringvalue(form.message)) {
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
            scope.exactshow = true;
            if (countalert !== 0) {
                if (fromindex === 1) {
                    window.scrollTo(0, 0);
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = "chats";
                    scope.chatstatus = status;
                }
                var object = { CustID: scope.custid, Status: scope.chatstatus, iStartIndex: fromindex, iEndIndex: toindex };
                customerDashboardServices.getCustometDashBoardchats(object).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data[0]) ? response.data[0].TotalRows : 0;
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
        scope.receivesrecphotoss = function(fromindex, toindex, type, headertext, typeofdiv, countalert, exactflag) {

            scope.exactshow = true;

            if (countalert !== 0) {
                if (fromindex === 1) {
                    window.scrollTo(0, 0);
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = typeofdiv;
                    scope.chatstatus = type;
                    scope.exactflagstorage = exactflag;
                }
                customerDashboardServices.getcustomerpartnerdata(scope.custid, scope.chatstatus, fromindex, toindex, scope.exactflagstorage).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
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
            window.open(realpath, '_blank');
            // authSvc.paymentstaus(scope.custid, scope).then(function(responsepaid) {
            //     if (responsepaid === true) {
            //         window.open(realpath, '_blank');
            //     }
            // });
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
        scope.pageloadbind = function(response) {
            scope.bindcounts(response.data.DashBoardCounts);
            scope.bindallcounts = response.data.DashBoardCounts;
            scope.PersonalInfo = (response.data.PersonalInfo);
            scope.photopersonal = scope.PersonalInfo.Photo;
            scope.LoginPhotoIsActive = scope.PersonalInfo.IsActive;
            sessionStorage.setItem("LoginPhotoIsActive", scope.PersonalInfo.IsActive);
            scope.Gendercustomer = (scope.PersonalInfo.GenderID) === 2 ? 'Groom' : 'Bride';
        };
        scope.photoPasswordactionss = function(type, tocustid) {

            customerDashboardServices.photopasswordactioninsert(scope.custid, tocustid, type).then(function(response) {
                if (response.data === 1) {
                    if (type === 1) {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Accepted successfully', 2500);
                        customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                            if (scope.counts === 1) {
                                sessionStorage.removeItem("LoginPhotoIsActive");
                                scope.pageloadbind(response);
                            }
                        });
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
                alerts.dynamicpopupclose();
                if (response.data === 1) {
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }

            });
        };
        scope.acceptlinkexp = function(type, custid, logid) {
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, logid, type, null).then(function(response) {
                if (response.data === 1) {
                    alerts.dynamicpopupclose();
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }
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
            return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, scope.custid, photostatuslogin);
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
        var paidstatus;
        scope.newprofileawaiting = function(type, frompage, topage, headertext, bindvalue) {
            if (paidstatus === undefined) {
                authSvc.paymentstaus(scope.custid, scope).then(function(response) {
                    paidstatus = response;
                    if (response === true)
                        scope.gettingpartnerdata(type, frompage, topage, headertext, 1, "UnPaid");
                });
            } else {
                if (paidstatus === true)
                    scope.gettingpartnerdata(type, frompage, topage, headertext, 1, "UnPaid");
                else
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade', 3000);
            }
        };
        scope.photoalbumdashboard = function(custid, profileid, photocount) {
            scope.$broadcast('photoalbum', custid, profileid, photocount);
        };

        scope.init = function() {
            scope.PartnerProfilesnew = [];
            scope.exactshow = (scope.Typeofdatabind === 'C' || scope.Typeofdatabind === 'P') && loginpaidstatus === "1" ? false : true;
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
                        scope.receivesrecphotoss(1, 9, 'RP', 'Members are requesting to upload your photo', 'Requestphotos', "UnPaid", scope.bindallcounts.ReceivedPhotoRequestCount);
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

        // scope.$on('photosrequests', function(event, typerequest) {
        //     switch (TypeOfReportexpress) {
        //         case "photorequest":
        //             customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
        //                 if (scope.counts === 1) {
        //                     sessionStorage.removeItem("LoginPhotoIsActive");
        //                     scope.pageloadbind(response);
        //                 }
        //             });
        //             break;
        //     }
        // });

        scope.getNotifyArray = function(Startval, Endval, notifyID, insertType) {
            notifyID = notifyID === undefined ? '' : notifyID;
            var inobj = { Cust_NotificationID: notifyID, CustID: scope.custid, Startindex: Startval, EndIndex: Endval };
            customerDashboardServices.getNotifications(inobj).then(function(response) {
                var dddddd = JSON.parse(response.data);

                var notifalgg = sessionStorage.getItem('unpaidNotifyflag');
                if (notifalgg !== 'false' && Startval === 1 && dddddd.length > 0 && dddddd[0] !== undefined && dddddd[0] !== null && dddddd[0] !== "" && dddddd[0].unpaidnotify !== null && dddddd[0].unpaidnotify !== undefined) {
                    // dddddd.splice(0, 0, { ActionType: dddddd[0].unpaidnotify });
                    dddddd.push({ ActionType: dddddd[0].unpaidnotify, hideviewprofile: true });
                    sessionStorage.setItem('unpaidNotifyflag', true);
                } else {
                    if (notifalgg !== 'false' && Startval === 1 && loginpaidstatus === "0" || loginpaidstatus === 0) {
                        dddddd.splice(0, 0, { ActionType: 'upgrade your membership for more bride/bride groom information and quality followups', hideviewprofile: true });
                        sessionStorage.setItem('unpaidNotifyflag', true);
                    }
                }
                _.each(dddddd, function(item, index) {
                    if ((index % 2 === 0) || index === 0) {
                        item.bakcolor = { "background-color": "#f47370" };
                        item.linkcolor = { "color": "maroon" };
                    } else {
                        item.bakcolor = { "background-color": "#c3a332" };
                        item.linkcolor = { "color": "#66643e" };
                    }
                });

                if (scope.notifytype === 'page') {
                    scope.notificationtxt = dddddd;
                } else {
                    if (from === 1) {
                        scope.newnitify = true;
                        from = to;
                        scope.notificationpopup = dddddd;
                    } else {
                        from = to;
                        if (insertType !== undefined && insertType === 'Action') {
                            insertType = undefined;
                        } else {
                            if (scope.oldnotificationpopup.length > 0) {
                                scope.newnitify = false;
                                scope.notificationpopup = $.unique((scope.notificationpopup).concat(scope.oldnotificationpopup));
                            }
                            scope.oldnotificationpopup = $.unique((scope.oldnotificationpopup).concat(dddddd));
                        }
                    }
                }


                scope.showdiv = scope.notificationtxt.length === 0 ? false : true;
                scope.hidemorelnk = false;
                var totalrows = (scope.notificationpopup.length > 0 && scope.notificationpopup[0].TotalRows !== undefined) ? scope.notificationpopup[0].TotalRows : 0;

                var arrayCount = (scope.oldnotificationpopup.length > 0 ? scope.oldnotificationpopup.length : 0) + (scope.notificationpopup.length > 0 ? scope.notificationpopup.length : 0);

                if (arrayCount === parseInt(totalrows) + 1) {
                    scope.hidemorelnk = true;
                }
                // else if(arrayCount === parseInt(totalrows) + 1){

                // }
            });
        };
        scope.getNotify = function() {
            scope.getNotifyArray(1, 5);
        };
        scope.getNotify();
        scope.moreNotification = function() {
            from = 1;
            scope.disClass = '';
            scope.loadMore();
        };
        scope.cancel = function() {
            commonFactory.closepopup();
        };
        $(function() {
            $('.marquee').marquee({
                direction: 'up',
                pauseOnHover: true
            });

            $('#modalbody').bind('scroll', function(e) {
                alert(1);
                var elem = $(e.currentTarget);
                if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight()) {}
            });
        });
        scope.readNotify = function(notifyID, type, index, versiontype) {

            if (notifyID === undefined || notifyID === null || notifyID === '') {
                var notiFlag = sessionStorage.getItem('unpaidNotifyflag');
                if (notiFlag === "true") {
                    sessionStorage.setItem('unpaidNotifyflag', false);
                    if (type === 'page') {
                        scope.notificationtxt.splice(index, 1);
                        scope.showdiv = scope.notificationtxt.length === 0 ? false : true;
                    } else {
                        scope.notificationpopup.splice(index, 1);
                        scope.showdiv = scope.notificationpopup.length === 0 ? false : true;
                    }
                }

            } else {
                scope.disClass = index;
                scope.notifytype = type;
                if (type === 'page') {
                    scope.getNotifyArray(1, 5, notifyID);
                } else {
                    scope.getNotifyArray(1, 10, notifyID, 'Action');
                }

                if (versiontype === 'new') {
                    scope.notificationpopup.splice(index, 1);
                } else {
                    scope.oldnotificationpopup.splice(index, 1);
                }
            }
        };
        var from = 1,
            to = 10;
        scope.loadMore = function(e) {

            scope.notifytype = 'popup';
            if (from === 1) {
                scope.notificationpopup = [];
                scope.getNotifyArray(1, 10);
                commonFactory.open('notifyPopup.html', scope, uibModal);
            } else {
                scope.getNotifyArray(to + 1, to + 10);
                to = to + 10;
                $("#modalbody").animate({ scrollTop: 0 }, 1000);

                scope.newnitify = false;
                scope.oldnitify = true;

            }
        };
        scope.notifyViewProfile = function(ToCust_Id, logid, notifyID, type, index, versiontype) {
            if (ToCust_Id !== undefined && ToCust_Id !== null && ToCust_Id !== '') {
                scope.readNotify(notifyID, type, index);
                scope.redirectToviewfull(ToCust_Id);
            }
        };
        scope.leftmenulinks = function(item) {
            switch (item.value) {
                case "My bookmarked profiles":
                case "Who bookmarked me":
                case 'Profiles viewed by me':
                case "My profile viewed by others":
                case "Ignored profiles":
                    scope.gettingpartnerdata(item.clickvalues, 1, 9, item.clickvaluesbind, item.bindvalue, 'UnPaid');
                    break;
                default:
                    route.go(item.statename, item.object);
                    break;
            }
        };
    }
]);
app.controller('footercontrol', ['$scope', 'authSvc', '$rootScope', 'route', 'alert',
    function(scope, authSvc, $rootscope, route, alerts) {
        scope.showforgetpasswordpopup = function() {
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function(typeurl) {
            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    route.go('General', { id: 2 });
                    break;
                case "general":
                    route.go('General', { id: 0 });
                    break;
                case "advanced":
                    route.go('General', { id: 1 });
                    break;
            }
        };
    }
]);
app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', '$rootScope', '$window',
    '$state', 'missingFieldService', 'customerviewfullprofileservices', 'route', 'helperservice', '$timeout', '$http',
    function(scope, authSvc, ngIdle, alertpopup, uibModal,
        $rootscope, window, $state, missingFieldService, customerviewfullprofileservices, route, helperservice, timeout, $http) {
        scope.showhidetestbuttons = function() {
            var datatinfo = authSvc.user();
            if (helperservice.checkstringvalue(datatinfo.custid)) {
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
        scope.headerinit = function() {
            scope.loginstatus = true;
            scope.loginoutstatus = false;
            scope.loginpopup = false;
            scope.withlogin = false;
            scope.withoutlogin = true;
            window.scrollTo(0, 0);
            scope.showhidetestbuttons();
        };
        scope.$on('IdleTimeout', function() {
            // alertpopup.dynamicpopup("sessionalert.html", scope, uibModal, 'sm');
            // timeout(function() {
            //     authSvc.logout();
            //     alertpopup.dynamicpopupclose();
            // }, 600 * 1000);
        });
        scope.acceptcontinue = function() {
            ngIdle.setIdle(5 * 60);
            alertpopup.dynamicpopupclose();
        };
        scope.closesession = function() {
            authSvc.logout();
            alertpopup.dynamicpopupclose();
        };
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
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            route.go(realpath, {});
        };
        scope.redirecthomeordashboard = function() {
            sessionStorage.removeItem("LoginPhotoIsActive");
            var custidlogin = authSvc.getCustId();
            if (custidlogin !== null && custidlogin !== "" && custidlogin !== undefined) {
                route.go("dashboard", { type: 'C' });
            } else {
                var realpath = '/';
                route.go('home', {});
            }
        };
        scope.searchpage = function(typeurl) {
            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    route.go('General', { id: 2 });
                    $rootscope.$broadcast("profile", 2);
                    break;
                case "general":
                    route.go('General', { id: 0 });
                    $rootscope.$broadcast("profile", 0);
                    break;
                case "advanced":
                    route.go('General', { id: 1 });
                    $rootscope.$broadcast("profile", 1);
                    break;
                case "profilesearch":
                    route.go('General', { id: 2 });
                    $rootscope.$broadcast("profile", 2);
                    break;
            }
        };
        scope.homepagelinks = function(typeurl) {
            var currentstatte = $state.current;
            switch (typeurl) {
                case "BookMarked":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'MB' });
                    } else {
                        route.go('dashboardnew', { type: 'MB' });
                    }
                    break;
                case "BookMarkedme":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'WB' });
                    } else {
                        route.go('dashboardnew', { type: 'WB' });
                    }
                    break;
                case "Ignored":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'I' });
                    } else {
                        route.go('dashboardnew', { type: 'I' });
                    }
                    break;
                case "myprofile":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'WV' });
                    } else {
                        route.go('dashboardnew', { type: 'WV' });
                    }
                    break;
                case "myhome":
                    sessionStorage.removeItem("LoginPhotoIsActive");
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'C' });
                    } else {
                        route.go('dashboardnew', { type: 'C' });
                    }
                    break;
                case "Chats":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Chats' });
                    } else {
                        route.go('dashboardnew', { type: 'Chats' });
                    }
                    break;
                case "Requests":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Requests' });
                    } else {
                        route.go('dashboardnew', { type: 'Requests' });
                    }
                    break;
                case "Express":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Express' });
                    } else {
                        route.go('dashboardnew', { type: 'Express' });
                    }
                    break;
            }
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alertpopup.showforgetpopup(scope);
        };
        scope.$on("notify-error", function(event, value) {
            console.log(value);
            var logincustid = authSvc.getCustId();
            var httperrorpopupstatus = sessionStorage.getItem("httperrorpopupstatus");
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
            route.go('feedback', {});
        };
        $(document).ready(function() {
            $('.menu_toggle').click(function(e) {
                $('.profile_own_menu>ul').slideToggle();
            });
            $('.profile_own_menu>ul>li').click(function(e) {
                $(this).find('ul').slideToggle();
                $(this).siblings().find('ul').slideUp();
            });
        });


        $http.get('your-server-endpoint');
    }
]);
app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    '$mdDialog', 'arrayConstants', 'SelectBindServiceApp', '$rootScope', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice', '$uibModal', '$window', '$http',
    function(scope, homepageservices, authSvc, successstoriesdata, $mdDialog,
        arrayConstants, service, $rootscope, alerts, timeout, missingFieldService, $state, route, helperservice, uibModal, $window, $http) {
        scope.homeinit = function() {
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            timeout(function() {
                // successstoriesdata.suceessdataget(1, 5).then(function(response) {
                //     scope.successstoriesarray = response.data;
                // });
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
            }, 500);
            scope.successstoriesarray = [];
        };
        scope.destroy = function() {
            scope.loginpopup = false;
            scope.emailss = "";
            scope.username = '';
            scope.password = "";
            scope.gender = "";
            scope.Agefrom = "";
            scope.Ageto = "";
            scope.religion = "";
        };
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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {

            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };

        var i = 0;
        // angular.element($window).bind("scroll", function(e) {

        // });

        scope.loadSuccessStories = function() {
            if (i === 0) {
                i++;
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
            }
        };

        scope.$on('loadStories', function(event) {
            scope.loadSuccessStories();
        });

        $http.get('your-server-endpoint');
    }
]);


app.directive("scroll", function() {
    return {
        link: function(scope, element, attrs) {
            element.bind("wheel", function() {
                scope.$emit('loadStories');
            });
        }
    };
});
app.controller("loggedascustomers", ['$scope', '$mdDialog',
    'authSvc', 'alert', 'loggedascustomerservice', 'route',
    function(scope, $mdDialog, authSvc, alerts, loggedascustomerservice, route) {
        scope.authentication = true;
        scope.Customerprofileiddiv = false;
        scope.submitcheckpassword = function() {
            loggedascustomerservice.getcheckpassword(scope.employeeusername, scope.employeepassword).then(function(response) {
                if (response.data === 1) {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = true;
                } else {
                    scope.authentication = true;
                    scope.Customerprofileiddiv = false;
                    alert("Authenication Failed Try Again");
                }
            });
        };
        scope.submitgetpassword = function() {
            loggedascustomerservice.getcustomerpassword(scope.customerprofileid).then(function(response) {
                if (response.data !== null && response.data !== undefined && response.data !== "" && response.data.length > 0) {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = false;
                    var passwords = (response.data).split(';');
                    scope.customerpassword = (passwords[0].split(':'))[1];
                    scope.customerpasswordencrypt = (passwords[1].split(':'))[1];
                    //scope.getcustomerinformation(scope.customerprofileid, scope.customerpassword, 1);
                    authSvc.login(scope.customerprofileid, scope.customerpasswordencrypt).then(function(response) {
                        sessionStorage.removeItem("loggedAscustomerPage");
                        sessionStorage.removeItem("homepageobject");
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        if (response.response !== null && response.response !== undefined && response.response !== "") {
                            authSvc.user(response.response !== null ? response.response[0] : null);
                            sessionStorage.setItem("loggedAscustomerPage", true);
                            route.go('dashboard', { type: 'C' });
                        } else {
                            route.go('loggedAscustomer', {});
                            scope.authentication = true;
                            scope.Customerprofileiddiv = false;
                        }
                    });
                } else {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = true;
                    alert("Please Use Another Profileid");
                }
            });
        };
        scope.getcustomerinformation = function(customerprofileid, customerpassword, iflag) {
            loggedascustomerservice.getcustomerinfo(customerprofileid, customerpassword, iflag).then(function(response) {
                console.log(response);
            });
        };
    }
]);
app.controller('missingfieldsctrl', ['$scope', 'commonFactory', 'authSvc', '$mdDialog',
    'missingFieldService', '$timeout', '$stateParams', '$uibModal', 'route',
    function(scope, commonFactory,
        authSvc, $mdDialog, missingFieldService, timeout, stateParams, uibModal, route) {
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

            missingFieldService.missingFieldSelect(scope.custid).then(function(response) {
                scope.MFSelectArray = (JSON.parse(response.data)[0]);
                // scope.missingfileldsflag = sessionStorage.setItem("missingfileldsflag", 1);
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

                    scope.starArr = scope.divStar === false ? commonFactory.starBind(1) : [];
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
        // missingFieldService.GetCustStatus(scope.custid).then(function(response) {

        // });
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

            missingFieldService.missingFieldSubmit(misInputobj).then(function(response) {

                scope.redirectToMobVerification();
                scope.cancel();
            });
        };
        scope.redirectToMobVerification = function() {
            sessionStorage.removeItem('missingStatus');
            route.go('mobileverf', {});
        };
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
app.controller('mobileverifyController', ['$scope', 'mobileVerificationService', 'authSvc', 'route',
    function(scope, mobileVerificationService, authSvc, route) {
        scope.pageloadSelect = {};
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.pageLoad = function(custid) {
            mobileVerificationService.getmobileverificationData(custid).then(function(res) {
                scope.pageloadSelect = res.data;
                scope.mobVerify = scope.pageloadSelect.ismobileverf === true ? true : false;
                scope.emailVerify = scope.pageloadSelect.isEmailverf === true ? true : false;
                if (scope.pageloadSelect.ismobileverf === true && scope.pageloadSelect.isEmailverf === true) {
                    sessionStorage.setItem("cust.isemailverified", true);
                    sessionStorage.setItem("cust.isnumberverifed", true);
                    route.go('dashboard', { type: 'C' });
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
                        sessionStorage.setItem("cust.isnumberverifed", true);
                        route.go('dashboard', { type: 'C' });
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
    }
]);
app.controller('locationparicular', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$stateParams', '$rootScope',

    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $stateParams, $root) {
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        scope.branchesarray = [];
        scope.happystoriesarray = [];
        scope.matrimonyarray = [];
        scope.locationname = $stateParams.location;
        $root.casteTitle = '';
        var childStayingWitharray = [
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
        ];
        var Mothertongueselect = [
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
        ];
        var Religion = [
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ];
        scope.ageselect = function() {
            var test = [];
            test.push({ label: "--select--", title: "--select--", value: "" });
            for (var i = 18; i < 78; i++) {
                test.push({ "label": i, "title": i, "value": i });
            }
            return test;
        };
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        };
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        };
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": 'Month', "title": 'Month', "value": "" });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.countryCodeselect = function() {
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
                scope.Regi.regcontrycodes = "";
            });
        };
        scope.castedependency = function(parentval1, parentval2) {
            var casteArr = [];
            service.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Date', "title": 'Date', "value": "" });
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
            Arr.push({ "label": 'Year', "title": 'Year', "value": "" });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.homeinit = function() {
            scope.Regi = {};
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            scope.Age = [];
            scope.Religionarray = [];
            scope.MotherTonguearray = [];
            scope.postedby = [];
            scope.monthArr = [];
            scope.dateArr = [];
            scope.yearArr = [];
            scope.countryCode = [];
            scope.castearrayreg = [];
            //
            scope.Age = scope.ageselect();
            scope.Religionarray = Religion;
            scope.MotherTonguearray = Mothertongueselect;
            scope.postedby = childStayingWitharray;
            timeout(function() {
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.monthArr = scope.monthBind();
                scope.dateArr = scope.date('', 1, 31);
                scope.yearArr = scope.year('', 1936, 1998);
                scope.castebind();
                scope.countrybind();
                scope.countryCodeselect();
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.caste = "";
                scope.country = "";
                scope.Regi.regcountry = "";
                scope.Regi.regmothertongue = "";
                scope.Regi.regreligion = "";
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.stateparamsredirect(scope.locationname);
            scope.getalldata('', '', '', 1, 4, 2, scope.isActiveid);
        };

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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            srchobject.FromAge = scope.Agefrom !== null && scope.Agefrom !== 0 ? scope.Agefrom : null;
            srchobject.ToAge = scope.Ageto !== null && scope.Ageto !== 0 ? scope.Ageto : null;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion !== null && scope.religion !== 0 ? scope.religion : null;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country !== null && scope.country !== 0 ? scope.country : null;
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {
            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };
        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.regdate <= 30 && minth30.indexOf(obj.regmonth) !== -1) || (obj.regdate <= 31 && months31.indexOf(obj.regmonth) !== -1) || ((obj.regdate <= 28 && month28.indexOf(obj.regmonth) !== -1))) {} else {
                if (type === 'day') {
                    obj.regmonth = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.regdate = '';
                }
            }
        };
        scope.changeBind = function(parentval, parentval2) {
            scope.castearrayreg = [];
            if (parentval !== undefined && parentval !== 0 && parentval2 !== 0 && parentval2 !== undefined && parentval2 !== "" && parentval2 !== null && parentval !== "" && parentval !== null) {
                scope.castearrayreg = scope.castedependency((parentval), (parentval2));
            }
        };
        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.Regi.regemail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.Regi.regmobilenumber = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };
        scope.regSubmit = function(obj) {
            var date;
            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
            }
            var inputObj = {
                strFirstName: obj.regfirstname,
                strLastName: obj.reglastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.reggender,
                intReligionID: obj.regreligion,
                intMotherTongueID: obj.regmothertongue,
                intCasteID: obj.regcaste,
                intCountryLivingID: obj.regcountry,
                intMobileCode: obj.regcontrycodes,
                intLandCode: null,
                IsCustomer: 1,
                strMobileNo: obj.regmobilenumber,
                ID: 1,
                strAreaCode: null,
                strLandNo: null,
                strEmail: obj.regemail,
                strPassword: obj.regpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.regpostedby
            };

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.Regi.regemail, scope.Regi.regpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.regfirstname, ln: obj.reglastname, countryID: obj.regcontrycodes, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.getalldata = function(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive) {
            newhomepageservices.getCustomerHomePageDesignData(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive).then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data[0];
                    scope.branchesarray = response.data[1];
                    scope.happystoriesarray = response.data[2];
                    scope.matrimonyarray = response.data[3];
                }
            });
        };
        scope.redirecttocastepage = function(obj) {
            var url = "/";
            switch (obj.CasteName) {
                case 'Kamma Matrimony':
                    url = "caste/kamma-matrimony";
                    break;
                case 'Reddy Matrimony':
                    url = "caste/reddy-matrimony";
                    break;
                case 'Kapu Matrimony':
                    url = "caste/kapu-matrimony";
                    break;
                case 'Balija Matrimony':
                    url = "caste/balija-matrimony";
                    break;
                case 'Yadava Matrimony':
                    url = "caste/yadava-matrimony";
                    break;
                case 'Padmashali Matrimony':
                    url = "caste/padmashali-matrimony";
                    break;
                case 'Gowda Matrimony':
                    url = "caste/gowda-matrimony";
                    break;
                default:
                    route.go('home', {});
                    break;
            }
            return url;
        };
        scope.redirecttolocation = function(obj) {
            var url = "/";
            switch (obj) {
                case 'Hyderabad Matrimony':
                    url = "location/matrimony-marriage-bureau-in-hyderabad";
                    break;
                case 'Vijayawada Matrimony':
                    url = "location/marriage-bureau-in-vijayawada";
                    break;
                case 'Bangalore Matrimony':
                    url = "location/marriage-bureau-in-bangalore";
                    break;
                case 'Chennai Matrimony':
                    url = "location/chennai-matrimony";
                    break;
                case 'Pondicherry Matrimony':
                    url = "location/pondicherry-matrimony";
                    break;
                case 'Coimbatore Matrimony':
                    url = "location/matrimony-in-coimbatore";
                    break;
                default:
                    route.go('home', {});
                    break;
            }
            return url;
        };
        scope.stateparamsredirect = function(statename) {
            switch (statename) {
                case 'pondicherry-matrimony':
                    scope.isActiveid = 9;
                    scope.castenameparam = "Pondicherry Matrimony";
                    scope.aboutus = "<b>Pondicherry Matrimony</b> by Kaakateeya.com, one of the leading and most reliable matrimonial sites in Pondicherry offers effective and highly personalized matrimonial services. The site offers visitors thousands of matrimony profiles to find out the perfect match. We provide secure, convenient matrimonial experience for brides and grooms with the best profile to meet all your needs for a flourishing relationship. Register now for Free and find your desired partner.";
                    scope.firstsuccessstory = "I would like to thank the Pondicherry matrimony for their wonderful matrimonial services. I found my perfect partner from Pondicherry matrimony, who gets all my cons and pros of our relationship. It’s a pleasant experience to deal with Pondicherry Matrimony.";
                    scope.secondsuccessstory = "It’s been 2 years, my family especially,  my mom was looking for a perfect girl for me to marry, but luck was not in my favour. I came across Kaakateeya matrimony by chance and met the right girl, as we were looking for. And finally we are going to be together soon. I can claim that you never get such customized services and family like support that I got from Pondicherry Matrimony.";
                    $root.casteTitle = 'Pondicherry Matrimony | Best Matrimony in Pondicherry';
                    $root.keyWord = 'Pondicherry matrimony, matrimony in Pondicherry';
                    $root.description = 'Kaakateeya Pondicherry matrimony – The best Matrimony in Pondicherry. Add your Matrimonial profile now! And find your partner. Register for Free!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/pondicherry-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Pondicherry Matrimony | Best Matrimony in Pondicherry";
                    $root.propertydescriptioncontent = "Kaakateeya Pondicherry matrimony – The best Matrimony in Pondicherry. Add your Matrimonial profile now! And find your partner. Register for Free!";
                    $root.propertyContenturl = "www.kaakateeya.com/location/pondicherry-matrimony";
                    $root.propertysite_name = "Pondicherry Matrimony | Best Matrimony in Pondicherry";
                    $root.twitterdescription = "Kaakateeya Pondicherry matrimony – The best Matrimony in Pondicherry. Add your Matrimonial profile now! And find your partner. Register for Free!";
                    $root.twittertitle = "Pondicherry Matrimony | Best Matrimony in Pondicherry";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";


                    break;
                case 'matrimony-in-coimbatore':
                    scope.isActiveid = 7;
                    scope.castenameparam = "Coimbatore Matrimony";
                    scope.aboutus = "Looking for a trusted matrimonial websites in Coimbatore? Congratulations! You are at the right place. Kaakateeya.com, the perfect <b>Matrimony in Coimbatore</b> proffers professional matchmaking services for different religions. We believe in unbreakable wedlock and value our customers. We are here to assist you find a worthy and best Life Partner for you. Register now and create your own profile to take a tour of our profiles of various hues and shades to chose from.";
                    scope.firstsuccessstory = "I am very grateful to Kaakateeya.com, the top drawer matrimony services in Coimbatore for their assistance and support to guide me time to time regarding the best way to find my partner. We are going to start a whole new life very soon with full of joy and it’s all because of the medium that Kaakateeya Matrimony has provided to us. We thank kaakateeya.com for bringing us together and helping us to find our true love.";
                    scope.secondsuccessstory = "Literally, finding a loyal partner with 100% compatibility is not an easy task ever. I was looking for a good looking and settled Punjabi guy in Coimbatore as I didn’t want to quit my job. Then I heard about Kaakateeya matrimony in Coimbatore from one of my close friends and supposed to visit the site. Amazing! Just a single page registration with minimal requirements and you are all set to hunt your dream boy, just like me. Thank you Kaakateeya matrimony to let me find my better half with ease. Found him love him.";
                    $root.casteTitle = 'Matrimony in Coimbatore | Matrimony Services in Coimbatore';
                    $root.keyWord = 'Matrimony in Coimbatore, matrimony services in Coimbatore';
                    $root.description = 'Matrimony in Coimbatore - The best matrimony services in Coimbatore. Search your life partner among thousands of best Coimbatore matrimony profiles. Join For Free!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/matrimony-in-coimbatore";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Matrimony in Coimbatore | Matrimony Services in Coimbatore";
                    $root.propertydescriptioncontent = "Matrimony in Coimbatore - The best matrimony services in Coimbatore. Search your life partner among thousands of best Coimbatore matrimony profiles. Join For Free!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/location/matrimony-in-coimbator";
                    $root.propertysite_name = "Matrimony in Coimbatore | Matrimony Services in Coimbatore";
                    $root.twitterdescription = "Matrimony in Coimbatore - The best matrimony services in Coimbatore. Search your life partner among thousands of best Coimbatore matrimony profiles. Join For Free!";
                    $root.twittertitle = "Matrimony in Coimbatore | Matrimony Services in Coimbatore";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'marriage-bureau-in-vijayawada':
                    scope.isActiveid = 5;
                    scope.castenameparam = "Vijayawada Matrimony";
                    scope.aboutus = "Kaakateeya.com is one of the most trusted marriage bureaus in Vijayawada to deal with all communities. We at <b>Marriage bureau in Vijayawada</b> provide the effective matching solutions to prospective brides and grooms. We have been running the bureau since 1982 with the prime objective to offer a superior match-making experience to our clients. Start searching your partner with a Single Page registration for free and enjoy the experience of best online matrimonial search ever.";
                    scope.firstsuccessstory = "I am grateful to kaakateeya.com for this amazing matrimonial website. Technically, it’s super easy to use and verbally, this organization is doing a great job to get blessings from billions of people from all over the world. I would like to thank the whole team from the core of my heart to make the way to meet my perfect soul mate. Thank you Kakateeya.com and keep shining!";
                    scope.secondsuccessstory = "Marriage is not just a tie, it’s the strongest string made up of trust and faith. And in my case it was quite difficult to find a perfect match to tie the knot with. In the mean while Kaakateeya matrimony, a certified marriage bureau in Vijayawada helped me to get the perfect girl for me. And it’s beyond my expectation to have such a well behaved, organised and a beautiful lady next to me. Thank you Kaakateeya matrimony for all your cooperation and support.";
                    $root.casteTitle = 'Marriage Bureau in Vijayawada | Matrimony in Vijayawada';
                    $root.keyWord = 'Marriage Bureau in Vijayawada, Matrimony in Vijayawada';
                    $root.description = 'Kaakateeya Marriage bureau in Vijayawada is Trusted by Thousands of our customers. Add Your Profile and Find Your Perfect Life Partner, Register for Free!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/marriage-bureau-in-vijayawada";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Marriage Bureau in Vijayawada | Matrimony in Vijayawada";
                    $root.propertydescriptioncontent = "Kaakateeya Marriage bureau in Vijayawada is Trusted by Thousands of our customers. Add Your Profile and Find Your Perfect Life Partner, Register for Free!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/location/marriage-bureau-in-vijayawada";
                    $root.propertysite_name = "Marriage Bureau in Vijayawada | Matrimony in Vijayawada";
                    $root.twitterdescription = "Kaakateeya Marriage bureau in Vijayawada is Trusted by Thousands of our customers. Add Your Profile and Find Your Perfect Life Partner, Register for Free!";
                    $root.twittertitle = "Marriage Bureau in Vijayawada | Matrimony in Vijayawada";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'matrimony-marriage-bureau-in-hyderabad':
                    scope.isActiveid = 4;
                    scope.castenameparam = "Hyderabad Matrimony";
                    scope.aboutus = "Kaakateeya.com, the leading <b>Marriage Bureau in Hyderabad</b> is a great place to find your perfect match to kick-start a brand new life. We are the one stop source for bride and groom to communicate with each other. We at Hyderabad Matrimony provide safe, secure and verified choices to search for an ideal marriage partner. Create your profile now on our matrimonial website & start searching prospective Indian brides and Indian grooms today!";
                    scope.firstsuccessstory = "I really express my sincere thanks and gratitude to Hyderabad matrimony for tying us together as God decided. It’s a reliable matrimonial website that helped me to find my perfect partner for the rest of my life. We are very happy to have found each other on Kakateeya.com. Thank you so much again for your wonderful services.";
                    scope.secondsuccessstory = "I am from Hyderabad, settled in the US, but my family was looking for an Indian traditional girl for me. Frankly speaking, I had rejected almost 10 marriage proposal till last year. At last my parents told me to find a girl of my own and I thought to go with matrimony site. Though I was not sure about my decision, I started my search with matrimonial sites before settling down with Kaakateeya matrimony, one of the finest marriage bureaus in Hyderabad. It has a huge collection of very attractive profiles and offers thousands of options to choose from as per your specification. Thank you Kaakateeya matrimony.";
                    $root.casteTitle = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya';
                    $root.keyWord = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad';
                    $root.description = 'Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/matrimony-marriage-bureau-in-hyderabad";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    $root.propertydescriptioncontent = "Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/location/matrimony-marriage-bureau-in-hyderabad";
                    $root.propertysite_name = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    $root.twitterdescription = "Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!";
                    $root.twittertitle = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'chennai-matrimony':
                    scope.isActiveid = 6;
                    scope.castenameparam = "Chennai Matrimony";
                    scope.aboutus = "Your search for a reliable matrimonial services from Chennai ends here. Kakateeya's <b>Channai Matrimony</b> is the right choice. We have been providing successful  matrimonial services since 1982 at most economical prices. Our professional team will work with you, at your pace and help you find apt match consistent with your requirements. Kaakateeya <b>matrimony in Chennai</b> is an exclusive matrimonial website to make the final match.";
                    scope.firstsuccessstory = "Chennai Matrimony has laid an excellent platform in finding my life partner. I would sincerely appreciate and thank the whole matrimony team in providing assistance with boundless energy in my endeavor of finding my better half. We found each other and now we are celebrating 2 years of our togetherness.";
                    scope.secondsuccessstory = "Our story starts from Chennai Matrimony. In brief, it’s the one stop solution for marriage. Kaakateeya matrimony and the team has more than 5 years of experience over matchmaking and it has a very good collection of candidates. I found my soulmate here and now we are happy together. Thank you Chennai matrimony.";
                    $root.casteTitle = 'Chennai Matrimony, Matrimony in Chennai- Kaakateeya';
                    $root.keyWord = 'Chennai Matrimony, Matrimony in Chennai';
                    $root.description = 'Kaakateeya Chennai Matrimony – First-rate Matrimony site in Chennai. Add your Matrimonial Profile Now and find your dream partner, Register for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/chennai-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Chennai Matrimony, Matrimony in Chennai- Kaakateeya";
                    $root.propertydescriptioncontent = "Kaakateeya Chennai Matrimony – First-rate Matrimony site in Chennai. Add your Matrimonial Profile Now and find your dream partner, Register for Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/location/chennai-matrimony";
                    $root.propertysite_name = "Chennai Matrimony, Matrimony in Chennai- Kaakateeya";
                    $root.twitterdescription = "Kaakateeya Chennai Matrimony – First-rate Matrimony site in Chennai. Add your Matrimonial Profile Now and find your dream partner, Register for Free.";
                    $root.twittertitle = "Chennai Matrimony, Matrimony in Chennai- Kaakateeya";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'marriage-bureau-in-bangalore':
                    scope.isActiveid = 9;
                    scope.castenameparam = "Bangalore Matrimony";
                    scope.aboutus = "Kakateeya.com is one of the best <b>marriage bureaus in Bangalore</b> to find suitable life partner.  We offer the most comprehensive matchmaking services through our dedicated website to help you find your soulmate. Our customized packages lend satisfying experience by offering a service that is easy, safe and secure. Our unique matchmaking system at Kakateeya.com will ensure you meet only the most suitable candidate. Sign up now and find the ideal partner for the rest of your life. Register for free. Absolute privacy guaranteed.";
                    scope.firstsuccessstory = "This Kaakateeya matrimonial website is doing a great social work of helping people get married. I got my life partner and now we are living a happy life together. I appreciate their outreach and I feel elated for using their services and reach my beau.  Thank you Kakateeya.com. Keep doing the noble work.";
                    scope.secondsuccessstory = "Three years earlier I met a girl in a conference in Delhi, but because of busy schedule I didn’t have enough communication with her to have her contact info. Last year I found her in Kaakateeya matrimony in Bangalore. It might be a coincidence but I found her and after one month we are going to celebrate our 1st wedding anniversary. Thank you Kaakateeya matrimony.";
                    $root.casteTitle = 'Marriage bureau in Bangalore | Matrimony in Bangalore';
                    $root.keyWord = 'Marriage bureau in Bangalore, matrimony in Bangalore, Matrimony services in Bangalore';
                    $root.description = 'Kaakateeya Marriage bureau in Bangalore is a top matchmaking portal for Matrimony in Bangalore. We offer matrimony services in Bangalore. Register for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/location/marriage-bureau-in-bangalore";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Marriage bureau in Bangalore | Matrimony in Bangalore";
                    $root.propertydescriptioncontent = "Kaakateeya Marriage bureau in Bangalore is a top matchmaking portal for Matrimony in Bangalore. We offer matrimony services in Bangalore. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/location/marriage-bureau-in-bangalore";
                    $root.propertysite_name = "Marriage bureau in Bangalore | Matrimony in Bangalore";
                    $root.twitterdescription = "Kaakateeya Marriage bureau in Bangalore is a top matchmaking portal for Matrimony in Bangalore. We offer matrimony services in Bangalore. Register for FREE!";
                    $root.twittertitle = "Marriage bureau in Bangalore | Matrimony in Bangalore";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";


                    break;
                default:

                    // scope.isActiveid = 4;
                    // scope.castenameparam = "Hyderabad Matrimony";
                    // scope.aboutus = "Kaakateeya.com, the leading <b>Marriage Bureau in Hyderabad</b> is a great place to find your perfect match to kick-start a brand new life. We are the one stop source for bride and groom to communicate with each other. We at Hyderabad Matrimony provide safe, secure and verified choices to search for an ideal marriage partner. Create your profile now on our matrimonial website & start searching prospective Indian brides and Indian grooms today!";
                    // scope.firstsuccessstory = "I really express my sincere thanks and gratitude to Hyderabad matrimony for tying us together as God decided. It’s a reliable matrimonial website that helped me to find my perfect partner for the rest of my life. We are very happy to have found each other on Kakateeya.com. Thank you so much again for your wonderful services.";
                    // scope.secondsuccessstory = "I am from Hyderabad, settled in the US, but my family was looking for an Indian traditional girl for me. Frankly speaking, I had rejected almost 10 marriage proposal till last year. At last my parents told me to find a girl of my own and I thought to go with matrimony site. Though I was not sure about my decision, I started my search with matrimonial sites before settling down with Kaakateeya matrimony, one of the finest marriage bureaus in Hyderabad. It has a huge collection of very attractive profiles and offers thousands of options to choose from as per your specification. Thank you Kaakateeya matrimony.";
                    // $root.casteTitle = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya';
                    // $root.keyWord = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad';
                    // $root.description = 'Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!';
                    // // seo content
                    // $root.canonicalhref = "http://www.kaakateeya.com/location/matrimony-marriage-bureau-in-hyderabad";
                    // $root.propertytypecontent = "article";
                    // $root.propertytitlecontent = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    // $root.propertydescriptioncontent = "Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!";
                    // $root.propertyContenturl = "http://www.kaakateeya.com/location/matrimony-marriage-bureau-in-hyderabad";
                    // $root.propertysite_name = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    // $root.twitterdescription = "Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!";
                    // $root.twittertitle = "Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya";
                    // $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";


                    route.go('home', {});


                    break;
            }
        };
    }
]);
app.controller('locationall', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$rootScope',
    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $rootScope) {



        //caste dynamic root initialisation


        $rootScope.casteTitle = 'Location-Kaakateeya';
        $rootScope.keyWord = '';
        $rootScope.description = '';
        // $rootScope.canonicalhref = "http://www.kaakateeya.com";
        $rootScope.propertytypecontent = "website";
        $rootScope.propertytitlecontent = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.propertydescriptioncontent = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        $rootScope.propertyContenturl = "http://www.kaakateeya.com";
        $rootScope.propertysite_name = "Best Marriage Bureau In India";
        $rootScope.twitterdescription = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        $rootScope.twittertitle = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.twitterimage = "";
        $rootScope.robots = "nofollow, noindex";





        //end here



        scope.message = "qqqqqqq";
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        var childStayingWitharray = [
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
        ];
        var Mothertongueselect = [
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
        ];
        var Religion = [
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ];
        scope.ageselect = function() {
            var test = [];
            test.push({ label: "--select--", title: "--select--", value: "" });
            for (var i = 18; i < 78; i++) {
                test.push({ "label": i, "title": i, "value": i });
            }
            return test;
        };
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        };
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        };
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": 'Month', "title": 'Month', "value": "" });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.countryCodeselect = function() {
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
                scope.Regi.regcontrycodes = "";
            });
        };
        scope.castedependency = function(parentval1, parentval2) {
            var casteArr = [];
            service.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Date', "title": 'Date', "value": "" });
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
            Arr.push({ "label": 'Year', "title": 'Year', "value": "" });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.homeinit = function() {
            scope.Regi = {};
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            scope.Age = [];
            scope.Religionarray = [];
            scope.MotherTonguearray = [];
            scope.postedby = [];
            scope.monthArr = [];
            scope.dateArr = [];
            scope.yearArr = [];
            scope.countryCode = [];
            scope.castearrayreg = [];
            scope.Age = scope.ageselect();
            scope.Religionarray = Religion;
            scope.MotherTonguearray = Mothertongueselect;
            scope.postedby = childStayingWitharray;
            timeout(function() {
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.monthArr = scope.monthBind();
                scope.dateArr = scope.date('', 1, 31);
                scope.yearArr = scope.year('', 1936, 1998);
                scope.castebind();
                scope.countrybind();
                scope.countryCodeselect();
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.caste = "";
                scope.country = "";
                scope.Regi.regcountry = "";
                scope.Regi.regmothertongue = "";
                scope.Regi.regreligion = "";
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.getalldata('Branch', '', '', 1, 3, 2, 4);
        };

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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            srchobject.FromAge = scope.Agefrom !== null && scope.Agefrom !== 0 ? scope.Agefrom : null;
            srchobject.ToAge = scope.Ageto !== null && scope.Ageto !== 0 ? scope.Ageto : null;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion !== null && scope.religion !== 0 ? scope.religion : null;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country !== null && scope.country !== 0 ? scope.country : null;
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {
            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };


        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.regdate <= 30 && minth30.indexOf(obj.regmonth) !== -1) || (obj.regdate <= 31 && months31.indexOf(obj.regmonth) !== -1) || ((obj.regdate <= 28 && month28.indexOf(obj.regmonth) !== -1))) {} else {
                if (type === 'day') {
                    obj.regmonth = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.regdate = '';
                }
            }
        };

        scope.changeBind = function(parentval, parentval2) {
            scope.castearrayreg = [];
            if (parentval !== undefined && parentval !== 0 && parentval2 !== 0 && parentval2 !== undefined && parentval2 !== "" && parentval2 !== null && parentval !== "" && parentval !== null) {
                scope.castearrayreg = scope.castedependency((parentval), (parentval2));
            }
        };

        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.Regi.regemail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.Regi.regmobilenumber = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };
        scope.regSubmit = function(obj) {
            var date;
            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
            }
            var inputObj = {
                strFirstName: obj.regfirstname,
                strLastName: obj.reglastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.reggender,
                intReligionID: obj.regreligion,
                intMotherTongueID: obj.regmothertongue,
                intCasteID: obj.regcaste,
                intCountryLivingID: obj.regcountry,
                intMobileCode: obj.regcontrycodes,
                intLandCode: null,
                IsCustomer: 1,
                strMobileNo: obj.regmobilenumber,
                ID: 1,
                strAreaCode: null,
                strLandNo: null,
                strEmail: obj.regemail,
                strPassword: obj.regpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.regpostedby
            };

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.Regi.regemail, scope.Regi.regpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.regfirstname, ln: obj.reglastname, countryID: obj.regcontrycodes, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.getalldata = function(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive) {
            newhomepageservices.getCustomerHomePageDesignData(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive).then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data;
                }
            });
        };
        scope.redirecttolocationpage = function(obj) {
            var url = "#";
            switch (obj.TableName) {
                case 'Pondicherry Matrimony':
                    url = "location/pondicherry-matrimony";
                    break;
                case 'Coimbatore Matrimony':
                    url = "location/matrimony-in-coimbatore";
                    break;
                case 'Vijayawada Matrimony':
                    url = "location/marriage-bureau-in-vijayawada";
                    break;
                case 'Hyderabad Matrimony':
                    url = "location/matrimony-marriage-bureau-in-hyderabad";
                    break;
                case 'Chennai Matrimony':
                    url = "location/chennai-matrimony";
                    break;
                case 'Bangalore Matrimony':
                    url = "location/marriage-bureau-in-bangalore";
                    break;
            }
            return url;
        };
    }
]);
app.controller('newhomepcontroller', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$stateParams', '$rootScope',

    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $stateParams, $root) {
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        scope.branchesarray = [];
        scope.happystoriesarray = [];
        scope.matrimonyarray = [];
        scope.castename = $stateParams.caste;
        $root.casteTitle = '';
        var childStayingWitharray = [
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
        ];
        var Mothertongueselect = [
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
        ];
        var Religion = [
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ];
        scope.ageselect = function() {
            var test = [];
            test.push({ label: "--select--", title: "--select--", value: "" });
            for (var i = 18; i < 78; i++) {
                test.push({ "label": i, "title": i, "value": i });
            }
            return test;
        };
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        };
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        };
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": 'Month', "title": 'Month', "value": "" });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.countryCodeselect = function() {
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
                scope.Regi.regcontrycodes = "";
            });
        };
        scope.castedependency = function(parentval1, parentval2) {
            var casteArr = [];
            service.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Date', "title": 'Date', "value": "" });
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
            Arr.push({ "label": 'Year', "title": 'Year', "value": "" });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.homeinit = function() {
            scope.Regi = {};
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            scope.Age = [];
            scope.Religionarray = [];
            scope.MotherTonguearray = [];
            scope.postedby = [];
            scope.monthArr = [];
            scope.dateArr = [];
            scope.yearArr = [];
            scope.countryCode = [];
            scope.castearrayreg = [];
            //
            scope.Age = scope.ageselect();
            scope.Religionarray = Religion;
            scope.MotherTonguearray = Mothertongueselect;
            scope.postedby = childStayingWitharray;
            timeout(function() {
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.monthArr = scope.monthBind();
                scope.dateArr = scope.date('', 1, 31);
                scope.yearArr = scope.year('', 1936, 1998);
                scope.castebind();
                scope.countrybind();
                scope.countryCodeselect();
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.caste = "";
                scope.country = "";
                scope.Regi.regcountry = "";
                scope.Regi.regmothertongue = "";
                scope.Regi.regreligion = "";
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.stateparamsredirect(scope.castename);
            scope.getalldata('', scope.stateparamsid, '', 1, 4, 2, scope.isActiveid);
        };

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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            srchobject.FromAge = scope.Agefrom !== null && scope.Agefrom !== 0 ? scope.Agefrom : null;
            srchobject.ToAge = scope.Ageto !== null && scope.Ageto !== 0 ? scope.Ageto : null;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion !== null && scope.religion !== 0 ? scope.religion : null;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country !== null && scope.country !== 0 ? scope.country : null;
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {
            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };
        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.regdate <= 30 && minth30.indexOf(obj.regmonth) !== -1) || (obj.regdate <= 31 && months31.indexOf(obj.regmonth) !== -1) || ((obj.regdate <= 28 && month28.indexOf(obj.regmonth) !== -1))) {} else {
                if (type === 'day') {
                    obj.regmonth = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.regdate = '';
                }
            }
        };
        scope.changeBind = function(parentval, parentval2) {
            scope.castearrayreg = [];
            if (parentval !== undefined && parentval !== 0 && parentval2 !== 0 && parentval2 !== undefined && parentval2 !== "" && parentval2 !== null && parentval !== "" && parentval !== null) {
                scope.castearrayreg = scope.castedependency((parentval), (parentval2));
            }
        };
        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.Regi.regemail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.Regi.regmobilenumber = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };
        scope.regSubmit = function(obj) {
            var date;
            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
            }
            var inputObj = {
                strFirstName: obj.regfirstname,
                strLastName: obj.reglastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.reggender,
                intReligionID: obj.regreligion,
                intMotherTongueID: obj.regmothertongue,
                intCasteID: obj.regcaste,
                intCountryLivingID: obj.regcountry,
                intMobileCode: obj.regcontrycodes,
                intLandCode: null,
                IsCustomer: 1,
                strMobileNo: obj.regmobilenumber,
                ID: 1,
                strAreaCode: null,
                strLandNo: null,
                strEmail: obj.regemail,
                strPassword: obj.regpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.regpostedby
            };

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.Regi.regemail, scope.Regi.regpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.regfirstname, ln: obj.reglastname, countryID: obj.regcontrycodes, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.getalldata = function(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive) {
            newhomepageservices.getCustomerHomePageDesignData(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive).then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data[0];
                    scope.branchesarray = response.data[1];
                    scope.happystoriesarray = response.data[2];
                    scope.matrimonyarray = response.data[3];
                }
            });
        };
        scope.redirecttocastepage = function(obj) {
            var url = "#";
            switch (obj) {
                case 'Kamma Matrimony':
                    url = "caste/kamma-matrimony";
                    break;
                case 'Reddy Matrimony':
                    url = "caste/reddy-matrimony";
                    break;
                case 'Kapu Matrimony':
                    url = "caste/kapu-matrimony";
                    break;
                case 'Balija Matrimony':
                    url = "caste/balija-matrimony";
                    break;
                case 'Yadava Matrimony':
                    url = "caste/yadava-matrimony";
                    break;
                case 'Padmashali Matrimony':
                    url = "caste/padmashali-matrimony";
                    break;
                case 'Gowda Matrimony':
                    url = "caste/gowda-matrimony";
                    break;

                case 'Mudaliar Matrimony':
                    url = "caste/mudaliar-matrimony";

                    break;
                case 'Pillai Matrimony':
                    url = "caste/pillai-matrimony";
                    break;
                case 'ST Matrimony':
                    url = "caste/st-matrimony";
                    break;
                case 'Christian Matrimony':
                    url = "caste/christian-matrimony";
                    break;
                case 'Second marriage bureau':
                    url = "caste/second-marriage-bureau";
                    break;
                default:

                    route.go('home', {});
                    break;
            }
            return url;
        };
        scope.redirecttolocation = function(obj) {
            var url = "#";
            switch (obj) {
                case 'Hyderabad Matrimony':
                    url = "location/matrimony-marriage-bureau-in-hyderabad";
                    break;
                case 'Vijayawada Matrimony':
                    url = "location/marriage-bureau-in-vijayawada";
                    break;
                case 'Bangalore Matrimony':
                    url = "location/marriage-bureau-in-bangalore";
                    break;
                case 'Chennai Matrimony':
                    url = "location/chennai-matrimony";
                    break;
                case 'Pondicherry Matrimony':
                    url = "location/pondicherry-matrimony";
                    break;
                default:

                    route.go('home', {});
                    break;
            }
            return url;
        };
        scope.stateparamsredirect = function(statename) {
            switch (statename) {
                case 'kamma-matrimony':
                    scope.stateparamsid = 402;
                    scope.isActiveid = 1;
                    scope.aboutus = "Caste based matrimonial services are the most effective in Indian context. Taking cue from this phenomenon, Kakateeya.com launched <b>Kamma Matrimony</b> to offer online matrimonial services for this segment of society.  We are providing the user friendly search features to find a bride or groom keeping all your preferences in mind. Now find your Kamma bride or groom in Hyderabad, Guntur, and Vijayawada with ease. We offer a wonderful platform for interaction between the families for fostering a long lasting relationship. Register now at Kakateeya.com to find a partner from your own community.";
                    scope.firstsuccessstory = "This is really an ideal matrimonial service centre replete with Successful partners’ stories. With in just 3 months of the online proposals, we have got married successfully with the blessings of our respective families. No doubt, Kamma Matrimony is such a special force helps everyone in finding out the perfect match.";
                    scope.secondsuccessstory = "A cordial greeting to the entire team of Kamma matrimony for their pronounced job. The website is too good and functional with hundreds of verified profiles. All because of Kaakateeya Kamma matrimony I got my perfect match.";
                    scope.castenameparam = "Kamma Matrimony";

                    $root.casteTitle = 'Kamma Matrimony,Kamma Matrimony sites,Kamma Marriage bureau';

                    $root.keyWord = 'Kamma matrimony, Kamma marriage bureau, Kamma marriage bureau in Hyderabad, Kamma marriage bureau in Vijayawada, Kamma marriage bureau in Guntur';
                    // $root.description = 'Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.';
                    $root.description = 'Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.';


                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/kamma-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.propertydescriptioncontent = "Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/kamma-matrimony";
                    $root.propertysite_name = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.twitterdescription = "Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.";
                    $root.twittertitle = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'reddy-matrimony':
                    scope.stateparamsid = 404;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Reddy Matrimony";
                    scope.aboutus = "Get the premium matrimonial services from the leading matrimony website Kakateeya.com. Are you from the Reddy community? Looking for bride/ groom in your community?  Check out for ideal matches from <b>Reddy Matrimony</b> by Kakateeya.com - a virtual platform where one can express all his/ her needs and also find the person who can satisfy them. We offer superior matchmaking services to meet your prospective life partners along with the detailed family and background information to help you take the next step with confidence.";
                    scope.firstsuccessstory = "Actually I am from the Reddy community and looking for a well educated girl from the last couple of years. I really don’t know how the online matrimony portals help. As a trial I registered myself at kakateeya.com and completed all my profile details. Sneha shows an interest on my profile and contacted me. We met and talked to each other and approached our parents for ratification of our decision. Now our marriage is on the cards. Am very thankful to the Reddy Matrimony team for providing me an avenue to my find my better half easily.";
                    scope.secondsuccessstory = "I am happy to thanks the entire team of Reddy matrimony. My parents demanded me to register with Kaakateeya.com but I said no to them having a really bad experience with other matrimonial sites. Later with curiosity I registered my name there. But this time, my experience was quite good and I found that these guys are different from others. They did what  exactly they promised and within 3 months I got engaged. I got good service from the team.";
                    $root.casteTitle = 'Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial';
                    $root.keyWord = 'Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial';
                    $root.description = 'Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/reddy-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.propertydescriptioncontent = "Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/reddy-matrimony";
                    $root.propertysite_name = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.twitterdescription = "Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!";
                    $root.twittertitle = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'kapu-matrimony':
                    scope.stateparamsid = 405;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Kapu Matrimony";
                    scope.aboutus = "Kapu Matrimony by Kakateeya.com is a great place to find your life partner for marriage, or even meet someone with serious relationship potential near you. We offer a wide choice of profiles, matching your criteria and expectations.  We at <b>Kapu Matrimony</b> are the most creditable professionals in rendering the online matrimonial services by expanding the horizon of opportunities for the singles to find their dream partners. Register now and start searching for your dream match.";
                    scope.firstsuccessstory = "I convey my sincere thanks to Kakateeya.com, as I got my life partner from the Kapu community through this matrimony site. We met here and shared our feelings and by regularly chatting found out that we are perfect for each other.  Now we are happily married and life has been beautiful with full of memories since then.";
                    scope.secondsuccessstory = "I would like to thank the Kapu matrimony that helped me to find my match on Kaakateeya.com. I found my soulmate here with whom I can set the rest of my journey. I found Kaakateeya, one of the most reliable matrimony sites and we both are thankful and grateful to Team Kaakateeya for having carved our paths towards a beautiful journey ahead!";
                    $root.casteTitle = 'Kapu Matrimony, Find your perfect match in Kapu marriage bureau';
                    $root.keyWord = 'Kapu matrimony, Kapu marriage bureau';
                    $root.description = 'Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/kapu-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.propertydescriptioncontent = "Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/kapu-matrimony";
                    $root.propertysite_name = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.twitterdescription = "Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!";
                    $root.twittertitle = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'padmashali-matrimony':
                    scope.stateparamsid = 410;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Padmashali Matrimony";
                    scope.aboutus = "Kakateeya.com is one of the largest and trusted matrimonial websites in India, where you can get the perfect bride/ groom from different communities. Whether you are looking for Padmasali singles only or anyone from any part of the World, you will find at Kakateeya.com for sure. We render revolutionary matchmaking services along with 1000's of profiles cutting across age, interests and personalities that are in sync with your interests and status.  Join <b>Padmasali Matrimony</b> to meet your special one today!";
                    scope.firstsuccessstory = "I would like to thank the Padmashali Matrimony for giving us the platform to choose our soul mates as per our choice and I am really grateful to you for giving me the Man of my Dreams from our community.  By the grace of God and the good offices of Padmasali Matrimony, we are all set to launch our life journey of eternal bonding of happiness & bliss.";
                    scope.secondsuccessstory = "I have great experience with Kaakateeya Padmasali matrimony as I got my perfect match through your site. Thanks to Kaakateeya.Com.";
                    $root.casteTitle = 'Padmashali Matrimony, Find your patrner in Padmasali Matrimony';
                    $root.keyWord = 'Padmashali Matrimony, Padmasali Matrimony';
                    $root.description = 'Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/padmashali-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.propertydescriptioncontent = "Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/padmashali-matrimony";
                    $root.propertysite_name = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.twitterdescription = "Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.";
                    $root.twittertitle = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'mudaliar-matrimony':
                    scope.stateparamsid = 438;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Mudaliar Matrimony";
                    scope.aboutus = "Thanks for making my life beautiful and I suggest Mudaliyar matrimony website for people who are still looking for their dream life partners as this website provides a wide range of choices and profiles within your community so that we can make a successful decision on our own. I found my life partner here and today I changed my status from unmarried to married.";
                    scope.firstsuccessstory = "Thanks for making my life beautiful and I suggest <b>Mudaliyar matrimony</b> website for people who are still looking for their dream life partners as this website provides a wide range of choices and profiles within your community so that we can make a successful decision on our own. I found my life partner here and today I changed my status from unmarried to married.";
                    scope.secondsuccessstory = "I registered my profile on Kaakateeya.com as I was looking for a good looking girl from Mudaliyar community and found my better half from Kaakateeya Mudaliyar Matrimony and we both are happy together.";
                    $root.casteTitle = 'Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms';
                    $root.keyWord = 'Mudaliyar Matrimony, Mudaliyar brides, Mudaliyar grooms';
                    $root.description = 'Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages. Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/mudaliar-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.propertydescriptioncontent = "Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/mudaliar-matrimony";
                    $root.propertysite_name = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.twitterdescription = "Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages.";
                    $root.twittertitle = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'gowda-matrimony':
                    scope.stateparamsid = 413;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Gowda Matrimony";
                    scope.aboutus = "If you're looking for a true Jodi, we are sure you've landed at the right place!. <b>Gowda matrimony</b> by Kakateeya.com offers dedicated matrimonial services by providing genuine profiles, matches which suit you the best. We lay bare a huge trove of profiles of brides and grooms within your community. Through Gowda Matrimony, pick your choice and proceed to lay a beautiful life path with your choice. Register your profile now at Kakateeya.com and start finding the right one in your life.";
                    scope.firstsuccessstory = "It's really true that love happens and when it happens it is not possible to exactly express our happiness with the love of our life. Finally i found my Love partner and got connected to her through the Kaakateeya portal.  Everything happened in a jiffy! It was a dream come true meeting. Keep up the spirit and goodwill.";
                    scope.secondsuccessstory = "We met through Gowda matrimony of Kaakateeya.com. Our parents showed interest in each other’s profile and arranged a meeting. We met with each other and decided to take things forward and tied the knot in less than a month. I am really thankful to kaakateeya.com for helping me in finding my soulmate.";
                    $root.casteTitle = 'Gowda Matrimony - Find your perfect Partner for marriage';
                    $root.keyWord = 'Gowda Matrimony, Gowda brides, Gowda grooms';
                    $root.description = 'Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/gowda-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.propertydescriptioncontent = "Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/gowda-matrimony";
                    $root.propertysite_name = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.twitterdescription = "Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.";
                    $root.twittertitle = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'pillai-matrimony':
                    scope.stateparamsid = 439;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Pillai Matrimony";
                    scope.aboutus = "<b>Pillai Matrimony</b> by Kakateeya.com is a top notch matrimonial website providing the best matrimonial services on the globe. With us you are sure to find a perfect match with whom he/she expects to lead a life laced with  bliss and happiness. Our great and timely customer support aids you in taking a right decision in finding your ideal soul mate. We are here to build a better life through happy marriages. Sign up now and find the suitable matrimonial profiles that match all your interests.";
                    scope.firstsuccessstory = "I am thankful to my parents for having registered with Pillai Matrimony. They laid bare a huge list of potential matches for me. The profiles are systematically and scientifically sorted out to vie with my needs and demands. What more could I ask for! It made my decision easy to identify the right one for my life. Finally we are happily married. Thanks to Pillai matrimony that helps me to find a perfect partner for my life.";
                    scope.secondsuccessstory = "I met my dream partner on Pillai matrimony at Kaakateeya.com. The whole team offered great support to me for searching my life partner. Kudos to your services.";
                    $root.casteTitle = 'Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony';
                    $root.keyWord = 'Pillai Matrimony, Pillai Matrimonial';
                    $root.description = 'Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/pillai-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.propertydescriptioncontent = "Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/pillai-matrimony";
                    $root.propertysite_name = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.twitterdescription = "Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.";
                    $root.twittertitle = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'christian-matrimony':
                    scope.stateparamsid = '';
                    scope.isActiveid = 2;
                    scope.castenameparam = "Christian Matrimony";
                    scope.aboutus = "A dedicated portal for the Christian community -Kakateeya.com. We are offering our dedicated matrimonial services since 1982 across all communities. Our main aim is to fulfil the needs of singles in search of prospective spouses without any hassle, where you can search for your best match. This Christian marriage website seeks to help those who are preparing for marriage. Register now at Kakateeya.com to find your life partner at your fingertips.";
                    scope.firstsuccessstory = "Finding a life partner on any online website is usually ripe with difficulties.  Kaakateeya.com proved me wrong with their methodical approach to address the issue of match making. I appreciate their work and their ideas to find a life partner for the prospects of Christian community. Because of them i found the man of my dreams, my loving and caring husband. I am very thankful to whole your team.";
                    scope.secondsuccessstory = "I found my match on Kaakateeya.com and we are being married next month. Thank you so much to the whole team of Kaakateeya Christian matrimony.";
                    $root.casteTitle = 'Christian Matrimony - Finest Site for Christian Matrimonial';
                    $root.keyWord = 'Christian Matrimony, Christian brides.';
                    $root.description = 'Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/christian-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.propertydescriptioncontent = "Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/christian-matrimony";
                    $root.propertysite_name = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.twitterdescription = "Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free";
                    $root.twittertitle = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'st-matrimony':
                    scope.stateparamsid = 407;
                    scope.isActiveid = 1;
                    scope.castenameparam = "ST Matrimony";
                    scope.aboutus = "We, at <b>St Matrimony</b> are proud to offer services to easily filter out the most perfect online bride/groom for you within your community in just a few clicks of your mouse. We provide genuine profiles matching with your preferences and requests. Sign up and find the several best matches for your future life partner from kakateeya.com.";
                    scope.firstsuccessstory = "I am on the lookout for the perfect life partner from my community over the last 2years. After registering with ST Matrimony, I got a message from Leela, who accepted my profile. Actually I'm working at Chennai and she was at Delhi. But for ST matrimony it was neigh impossible for us to meet. Thank you team and we as a happy married couple and would highly recommend you in our circle.";
                    scope.secondsuccessstory = "It was a nice experience on Kaakateeya.com having thousands of better and reliable profiles on this platform. Me and my Husband met through ST matrimony of Kaakateeya.com and are really happy to have each other.";
                    $root.casteTitle = 'ST Matrimony – Find your perfect Match in ST Matrimonial';
                    $root.keyWord = 'ST Matrimony, ST Matrimonial';
                    $root.description = 'ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/st-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.propertydescriptioncontent = "ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/st-matrimony";
                    $root.propertysite_name = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.twitterdescription = "ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!";
                    $root.twittertitle = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'second-marriage-bureau':
                    scope.stateparamsid = '';
                    scope.isActiveid = 3;
                    scope.castenameparam = "Second Marriage Bureau";
                    scope.aboutus = "Though remarriage in India has always been a topic best left untouched,  we at Kakateeya.com understand the need and the requirements of this segment better than anyone else. We have genuine and reliable profiles to choose from. If you are you divorced, separated, widow women/ men, register now at kakateeya.com to find the perfect life partner for the rest of your life. We are here to provide an effective platform for individuals seeking remarriage and yearning to start a new life. Our investigation team provides 100 % secure and safe profiles, which suit you the best.";
                    scope.firstsuccessstory = "Feeling very happy to share my story of how I found my love and soulmate through you guys. After chancing upon Kaakateeya.com, I abandoned all my other efforts of locating my life partner and I am happy about my decision.  One day my phone rang and we had decided to meet up for a coffee and later on we started meeting frequently but we were not sure about taking this relationship to the next level. Destiny wanted us to be together and we both are really thankful to <b>Second Marriage Bureau!<b>";
                    scope.secondsuccessstory = "Finding a perfect guy for second marriage is so tough for me when I set to go further in my life leaving my dark past a mile back. But no such platform I got for a half year. Finally I went through Kaakateeya.com and found the Second marriage bureau, where I found my loving and caring partner to give my life a second chance. All credit goes to Kaakateeya.com for their verified and outstanding collections and the support they offered me to set my life with new found happiness.";
                    $root.casteTitle = 'Second Marriage Bureau - Kaakateeya Matrimonial Services';
                    $root.keyWord = "Second marriage bureau, second marriage matrimony";
                    $root.description = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/second-marriage-bureau";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.propertydescriptioncontent = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/second-marriage-bureau";
                    $root.propertysite_name = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.twitterdescription = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";
                    $root.twittertitle = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'balija-matrimony':
                    scope.stateparamsid = 403;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Balija Matrimony";
                    $root.casteTitle = '';
                    $root.keyWord = '';
                    $root.description = '';

                    $root.canonicalhref = "";
                    $root.propertytypecontent = "";
                    $root.propertytitlecontent = "";
                    $root.propertydescriptioncontent = "";
                    $root.propertyContenturl = "";
                    $root.propertysite_name = "";
                    $root.twitterdescription = "";
                    $root.twittertitle = "";
                    $root.twitterimage = "";

                    break;
                case 'yadava-matrimony':
                    scope.stateparamsid = 406;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Yadava Matrimony";
                    $root.casteTitle = '';
                    $root.keyWord = '';
                    $root.description = '';

                    $root.canonicalhref = "";
                    $root.propertytypecontent = "";
                    $root.propertytitlecontent = "";
                    $root.propertydescriptioncontent = "";
                    $root.propertyContenturl = "";
                    $root.propertysite_name = "";
                    $root.twitterdescription = "";
                    $root.twittertitle = "";
                    $root.twitterimage = "";
                    break;
                default:
                    route.go('home', {});
                    break;
            }
        };
    }
]);
app.factory('newhomepageservices', ['$http', function(http) {
    return {
        getCustomerHomePageDesignData: function(flag, casteID, CustID, fromindex, EndIndex, GenderID, isActive) {
            return http.get(app.apiroot183 + 'StaticPages/getCustomerHomePageDesignData', { params: { flag: flag, casteID: casteID, CustID: CustID, intStartIndex: fromindex, intEndIndex: EndIndex, GenderID: GenderID, isActive: isActive } });
        }
    };
}]);
app.controller('newhomepagecastecontroller', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$window', '$rootScope',
    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $window, $rootScope) {

        //caste dynamic root initialisation


        $rootScope.casteTitle = 'Caste-Kaakateeya';
        $rootScope.keyWord = '';
        $rootScope.description = '';
        // $rootScope.canonicalhref = "http://www.kaakateeya.com";
        $rootScope.propertytypecontent = "website";
        $rootScope.propertytitlecontent = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.propertydescriptioncontent = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        //$rootScope.propertyContenturl = "http://www.kaakateeya.com";
        $rootScope.propertysite_name = "Best Marriage Bureau In India";
        $rootScope.twitterdescription = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        $rootScope.twittertitle = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.twitterimage = "";
        $rootScope.robots = "nofollow, noindex";





        //end here





        scope.message = "qqqqqqq";
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        var childStayingWitharray = [
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
        ];
        var Mothertongueselect = [
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
        ];
        var Religion = [
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ];
        scope.ageselect = function() {
            var test = [];
            test.push({ label: "--select--", title: "--select--", value: "" });
            for (var i = 18; i < 78; i++) {
                test.push({ "label": i, "title": i, "value": i });
            }
            return test;
        };
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        };
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        };
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": 'Month', "title": 'Month', "value": "" });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.countryCodeselect = function() {
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
                scope.Regi.regcontrycodes = "";
            });
        };
        scope.castedependency = function(parentval1, parentval2) {
            var casteArr = [];
            service.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Date', "title": 'Date', "value": "" });
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
            Arr.push({ "label": 'Year', "title": 'Year', "value": "" });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.homeinit = function() {
            scope.Regi = {};
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            scope.Age = [];
            scope.Religionarray = [];
            scope.MotherTonguearray = [];
            scope.postedby = [];
            scope.monthArr = [];
            scope.dateArr = [];
            scope.yearArr = [];
            scope.countryCode = [];
            scope.castearrayreg = [];
            scope.Age = scope.ageselect();
            scope.Religionarray = Religion;
            scope.MotherTonguearray = Mothertongueselect;
            scope.postedby = childStayingWitharray;
            timeout(function() {
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.monthArr = scope.monthBind();
                scope.dateArr = scope.date('', 1, 31);
                scope.yearArr = scope.year('', 1936, 1998);
                scope.castebind();
                scope.countrybind();
                scope.countryCodeselect();
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.caste = "";
                scope.country = "";
                scope.Regi.regcountry = "";
                scope.Regi.regmothertongue = "";
                scope.Regi.regreligion = "";
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.getalldata(1, '', '', 1, 3, 2, '');
        };

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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
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
            srchobject.FromAge = scope.Agefrom !== null && scope.Agefrom !== 0 ? scope.Agefrom : null;
            srchobject.ToAge = scope.Ageto !== null && scope.Ageto !== 0 ? scope.Ageto : null;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion !== null && scope.religion !== 0 ? scope.religion : null;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country !== null && scope.country !== 0 ? scope.country : null;
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {
            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };


        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.regdate <= 30 && minth30.indexOf(obj.regmonth) !== -1) || (obj.regdate <= 31 && months31.indexOf(obj.regmonth) !== -1) || ((obj.regdate <= 28 && month28.indexOf(obj.regmonth) !== -1))) {} else {
                if (type === 'day') {
                    obj.regmonth = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.regdate = '';
                }
            }
        };

        scope.changeBind = function(parentval, parentval2) {
            scope.castearrayreg = [];
            if (parentval !== undefined && parentval !== 0 && parentval2 !== 0 && parentval2 !== undefined && parentval2 !== "" && parentval2 !== null && parentval !== "" && parentval !== null) {
                scope.castearrayreg = scope.castedependency((parentval), (parentval2));
            }
        };

        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.Regi.regemail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.Regi.regmobilenumber = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };
        scope.regSubmit = function(obj) {
            var date;
            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
            }
            var inputObj = {
                strFirstName: obj.regfirstname,
                strLastName: obj.reglastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.reggender,
                intReligionID: obj.regreligion,
                intMotherTongueID: obj.regmothertongue,
                intCasteID: obj.regcaste,
                intCountryLivingID: obj.regcountry,
                intMobileCode: obj.regcontrycodes,
                intLandCode: null,
                IsCustomer: 1,
                strMobileNo: obj.regmobilenumber,
                ID: 1,
                strAreaCode: null,
                strLandNo: null,
                strEmail: obj.regemail,
                strPassword: obj.regpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.regpostedby
            };

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.Regi.regemail, scope.Regi.regpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.regfirstname, ln: obj.reglastname, countryID: obj.regcontrycodes, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.getalldata = function(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive) {
            newhomepageservices.getCustomerHomePageDesignData(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive).then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data;
                }
            });
        };
        scope.redirecttocastepage = function(obj) {
            var url = "#";
            switch (obj.TableName) {
                case 'Kamma Matrimony':
                    url = "caste/kamma-matrimony";
                    break;
                case 'Reddy Matrimony':
                    url = "caste/reddy-matrimony";
                    break;
                case 'Kapu Matrimony':
                    url = "caste/kapu-matrimony";
                    break;
                case 'Balija Matrimony':
                    url = "caste/balija-matrimony";
                    break;
                case 'Yadava Matrimony':
                    url = "caste/yadava-matrimony";

                    break;
                case 'Padmashali Matrimony':
                    url = "caste/padmashali-matrimony";

                    break;
                case 'Mudaliar Matrimony':
                    url = "caste/mudaliar-matrimony";
                    break;
                case 'Pillai Matrimony':
                    url = "caste/pillai-matrimony";

                    break;
                case 'ST Matrimony':
                    url = "caste/st-matrimony";

                    break;
                case 'Christian Matrimony':
                    url = "caste/christian-matrimony";
                    break;
                case 'Second marriage bureau':
                    url = "caste/second-marriage-bureau";
                    break;
                case 'Gowda Matrimony':
                    url = "caste/gowda-matrimony";
                    break;
            }
            return url;
        };
    }
]);
  app.controller('myCtrl', function($scope, $http) {

      $scope.myFunc = function() {

          $http.get('http://183.82.0.58:8010/Api/Payment/getProfilePaymentDetails_NewDesigns', { params: { intProfileID: $scope.tProfileID } }).success(function(data, status, headers, config) {
              $scope.array = JSON.parse(data);
              $scope.ProfileID = $scope.array[0].ProfileID;
              $scope.Branch = $scope.array[0].Branch;
              $scope.Name = $scope.array[0].FirstName;
              $scope.Surname = $scope.array[0].LastName;
              $scope.Gender = $scope.array[0].Gender;
              $scope.CasteName = $scope.array[0].CasteName;
              $scope.MemberShipType = $scope.array[0].MemberShipType;
              $scope.ApplicationName = $scope.array[0].ApplicationName;
              $scope.AgreedAmountNew = $scope.array[0].AgreedAmountNew;
              $scope.Duration = $scope.array[0].Duration;
              $scope.MemberShipName = $scope.array[0].MemberShipName;
              $scope.MemberShipDescription = $scope.array[0].MemberShipDescription;
              $scope.StartDate = $scope.array[0].StartDate;
              $scope.EndDate = $scope.array[0].EndDate;
              $scope.NoofPoints = $scope.array[0].NoofPoints;
              $scope.SettlementAmount = $scope.array[0].SettlementAmount;
              $scope.ServiceTax = $scope.array[0].ServiceTax;
              $scope.MembershipID = $scope.array[0].MembershipID;
              $scope.GenderID = $scope.array[0].GenderID;
              $scope.CasteID = $scope.array[0].CasteID;
              $scope.Cust_ID = $scope.array[0].Cust_ID;
              $scope.MemberShipTypeID = $scope.array[0].MemberShipTypeID;
              $scope.display = 1;
          }).error(function(data, status, headers, config) {
              alert("No  Data found");
          });
      };

      $scope.gridView = function() {
          $scope.display = 3;
          $http.get('http://183.82.0.58:8010/Api/Payment/getProfilePaymentDetailsGridview', { params: { intProfileID: $scope.tProfileID } }).success(function(data, status, headers, config) {
              $scope.array = JSON.parse(data);
              $scope.ProfileID = $scope.array[0].ProfileID;
          }).error(function(data, status, headers, config) {
              alert("No  Data found");
          });
      };

      $scope.btnsubmit = function(display) {
          if (display == 1) {
              var obj = {
                  ProfileID: $scope.ProfileID,
                  Cust_id: $scope.Cust_ID,
                  Payment_Id: $scope.rbtPaymenttype,
                  Renual_Type: $scope.MemberShipTypeID,
                  NoofPoints: $scope.NoofPoints,
                  AgreedAmount: $scope.AgreedAmountNew,
                  SettlementAmount: $scope.SettlementAmount,
                  DateDuration: $scope.Duration,
                  ServiceTax: $scope.ServiceTax,
                  ServiceTaxAmt: $scope.txtServiceTaxSettleMent,
                  AmountPaid: $scope.AmountPaid,
                  StartDate: $scope.StartDate,
                  EndDate: $scope.EndDate,
                  ReceiptNumber: $scope.ReceiptBillNumber,
                  TransactionID: $scope.TransactionID,
                  ChequeNoOrDDNo: $scope.Cheque,
                  BranchName: $scope.BranchName,
                  BankName: $scope.BankName,
                  Place: $scope.Place,
                  Paydescription: $scope.Paydescription,
                  ModeOfPayment: $scope.Paymode,
                  EmpID: 2,
                  AccessFeatureID: $scope.rbtAccessFeature,
                  PaysmsID: $scope.SendEmailSms
              };
              $http.post('http://183.82.0.58:8010/Api/Payment/CustomerInsertPaymentDetilsInfo_NewDesign', obj).then(function(response) {
                  alert("Payment Success......");
              });
          } else {
              $scope.tProfileID = null;
              $scope.AgreedAmountNew = null;
              $scope.searchMemberonline = null;
              $scope.display = 2;
          }
      };
  });

  function isNumberKey(evt) {
      var charCode = (evt.which) ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
      return true;
  }
app.controller("payment",function()
{

});
app.controller('paymentresponse', ['$scope', 'route', 'myAppFactory',
    function(scope, route, myAppFactory) {
        scope.pageloadpayment = function() {
            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
            scope.randomNumbers = Math.round((Math.random() * 100) * 100);
            scope.orderid = "Ord_" + scope.paymentobject.CustID + "_" + scope.randomNumbers;
        };
        scope.backtopayment = function() {
            route.go('UpgradeMembership', {});
        };
        scope.paymentinsert = function() {
            var obj = {
                intCustID: scope.paymentobject.CustID,
                intMembershipID: scope.paymentobject.MembershipID,
                DiscountID: scope.paymentobject.DiscountID !== "" ? scope.paymentobject.DiscountID : null,
                Points: scope.paymentobject.Points,
                MembershipName: scope.paymentobject.MembershipName,
                Duration: scope.paymentobject.Duration,
                MembershipAmount: scope.paymentobject.Amount
            };
            myAppFactory.Paymentinsert(obj).then(function(response) {

            });
        };
    }
]);
app.controller('ccavenueresponsectrl', ['$scope', '$stateParams', '$http', 'alert', 'myAppFactory',
    function(scope, stateParams, http, alerts, myAppFactory) {
        scope.paymentobject = {};
        scope.orderid = '';
        scope.trackingID = '';
        scope.orderStatus = '';
        scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));

        scope.points = scope.paymentobject.Points;
        scope.MembershipName = scope.paymentobject.MembershipName;
        scope.Duration = scope.paymentobject.Duration;
        scope.MembershipAmount = scope.paymentobject.Amount;
        scope.ExpiryDate = moment().add(scope.Duration, 'M').format("DD-MM-YYYY");
        scope.paymentinsert = function() {
            var obj = {
                intCustID: scope.paymentobject.CustID,
                intMembershipID: scope.paymentobject.MembershipID,
                DiscountID: scope.paymentobject.DiscountID !== "" ? scope.paymentobject.DiscountID : null,
                Points: scope.paymentobject.Points,
                MembershipName: scope.paymentobject.MembershipName,
                Duration: scope.paymentobject.Duration,
                MembershipAmount: scope.paymentobject.Amount
            };
            myAppFactory.Paymentinsert(obj).then(function(response) {

            });
        };

        http.post('/decrypt', JSON.stringify({ keyname: stateParams.data })).then(function(response) {

            if (response.data !== undefined && response.data !== null) {
                var paymentStatus = (response.data).split(',');
                scope.orderid = paymentStatus[0].split('=')[1];
                scope.trackingID = paymentStatus[1].split('=')[1];
                scope.orderStatus = paymentStatus[3].split('=')[1];
                if (scope.orderStatus === 'Success') {
                    scope.paymentinsert();
                    sessionStorage.setItem('cust.paidstatus', 1);
                    alerts.timeoutoldalerts(scope, 'alert-success', 'your transaction was successful', 3000);
                } else if (scope.orderStatus === 'Aborted') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'You have aborted the transaction', 3000);
                } else if (scope.orderStatus === 'Failure') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'Your transaction failed', 3000);
                } else if (scope.orderStatus === 'Invalid') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'Some error occured while transaction', 3000);
                }
            }
        });


    }
]);
app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    '$location', 'getArray', '$timeout', '$rootScope', 'commonFactory', 'missingFieldService',
    '$stateParams', 'route', 'helperservice',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, getArray,
        timeout, $rootscope, commonpopup, missingFieldService, $stateParams, route, helperservice) {
        var SearchRequest = {};
        var logincustid = authSvc.getCustId();
        var globalheight;
        var globalheightto;
        var refineheightfrom;
        var refineheightto;
        scope.reset = {};
        scope.Country = [];
        scope.MaritalStatus = [];
        scope.selectedIndex = $stateParams.id;
        scope.Professiongroup = [];
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.truepartnerrefine = true;
        scope.refinesubmitflag = "normal";
        scope.filtervalues = function(arr, whereValue) {
            var storeValue = "";
            if (whereValue !== null && whereValue !== "" && whereValue !== undefined) {
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
            }
            return storeValue;
        };
        scope.textlabels = function(fromheight, toheight, caste, education) {
            scope.modelsearch.HeightFromtext = scope.filtervalues(scope.modelsearch.height, fromheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, fromheight)).split('-'))[0] : '';
            scope.modelsearch.Heighttotext = scope.filtervalues(scope.modelsearch.height, toheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, toheight)).split('-'))[0] : '';
            scope.modelsearch.educationcategorytxt = scope.filtervalues(scope.modelsearch.educationcategory, education) !== '' ? (scope.filtervalues(scope.modelsearch.educationcategory, education)) : '';
        };
        scope.checkLength = function() {
            if (helperservice.checkstringvalue(scope.modelsearch.profileid) || helperservice.checkstringvalue(scope.modelsearch.firstname) || helperservice.checkstringvalue(scope.modelsearch.lastname)) {
                if (helperservice.checkstringvalue(scope.modelsearch.firstname)) {
                    if ((scope.modelsearch.firstname).length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For Name', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else if (helperservice.checkstringvalue(scope.modelsearch.lastname)) {
                    if ((scope.modelsearch.lastname).length < 3) {
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
            scope.modelsearch.height = arrayConstants.height;
            scope.modelsearch.educationcategory = arrayConstants.educationcategorywithoutselect;
            timeout(function() {
                if (angular.lowercase(arrayConstants.MaritalStatus[0].title) === '--select--') {
                    arrayConstants.MaritalStatus.splice(0, 1);
                }
                scope.MaritalStatus = arrayConstants.MaritalStatus;
                scope.modelsearch.Mothertongue = arrayConstants.Mothertongue;
                scope.modelsearch.visastatus = arrayConstants.visastatus;
                scope.modelsearch.stars = arrayConstants.stars;
                scope.Country = getArray.GArray('Country');
                scope.Professiongroup = getArray.GArray('ProfGroup');
            }, 1000);
        };

        function resetmultipleselect(id) {
            $('option', $('#' + id)).each(function(element) {
                $(this).removeAttr('selected').prop('selected', false);
            });
            $("#" + id).multiselect('refresh');
        }
        scope.applycolors = function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value !== null) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        };

        function controlResetMultiselects() {
            resetmultipleselect('maritalstatusid');
            resetmultipleselect('generaleducation');
            resetmultipleselect('countrygeneral');
            resetmultipleselect('generalmothertongue');
            resetmultipleselect('generalcaste');
            resetmultipleselect('advancedmaritalstatusid');
            resetmultipleselect('advancedmothertongue');
            resetmultipleselect('advancedcaste');
            resetmultipleselect('advancedcountryliving');
            resetmultipleselect('advancedstateliving');
            resetmultipleselect('advancedsvisastatus');
            resetmultipleselect('advancedEducationcat');
            resetmultipleselect('advancedEducationgroup');
            resetmultipleselect('advancedprofessiongroup');
            resetmultipleselect('advancedstars');
            return false;
        }
        scope.savedsearchselectmethods = function(custid, SaveSearchName, iEditDelete) {
            searches.savedsearchselectmethod(custid, SaveSearchName, iEditDelete).then(function(response) {
                scope.modelsearch.savedsearchselect = [];
                _.each(response.data, function(item) {
                    scope.modelsearch.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(scope.modelsearch.custid, "", 1).then(function(response) {
                    scope.modelsearch.savedsearchselect = [];

                    _.each(response.data, function(item) {
                        scope.modelsearch.savedsearchselect.push(item);
                    });
                });
            }
        };
        scope.$watch("savedsearchselect", function(current, old) {
            scope.modelsearch.savedsearchselect = current;
        });
        scope.arrayToString = function(string) {
            return string !== null ? (string.split(',')).map(Number) : null;
        };
        scope.partnerbindings = function(response) {
            scope.modelsearch.casteshow = false;
            scope.modelsearch.gender = (response.data.intGender) === 2 ? 2 : 1;
            scope.modelsearch.AgeFrom = response.data.Ageto !== null && response.data.Ageto !== "" ? parseInt(response.data.Ageto) : "0";
            scope.modelsearch.Ageto = response.data.Agefrom !== null && response.data.Agefrom !== "" ? parseInt(response.data.Agefrom) : "0";
            scope.modelsearch.HeightFrom = response.data.Heightto !== null && response.data.Heightto !== "" ? parseInt(response.data.Heightto) : "0";
            scope.modelsearch.Heightto = response.data.Heightfrom !== null && response.data.Heightfrom !== "" ? parseInt(response.data.Heightfrom) : "0";
            scope.modelsearch.maritalstatus = scope.arrayToString(response.data.Maritalstatus);
            scope.modelsearch.educationcat = scope.arrayToString(response.data.Educationcategory);
            scope.modelsearch.country = scope.arrayToString(response.data.Country);
            scope.modelsearch.religion = response.data.Religion;
            scope.modelsearch.mothertongue = scope.arrayToString(response.data.MotherTongue);
            scope.modelsearch.caste = response.data.Caste !== null ? scope.arrayToString(response.data.Caste) : "0";
            scope.modelsearch.castetext = response.data.CasteText;
            scope.modelsearch.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.modelsearch.State = response.data.Country !== null ? commonFactory.StateBind(response.data.Country) : "0";
            scope.modelsearch.stateadvance = response.data.State !== null ? scope.arrayToString(response.data.State) : "0";
            scope.modelsearch.Educationgroup = commonFactory.educationGroupBind(helperservice.checkstringvalue(response.data.Educationcategory) ? (response.data.Educationcategory).toString() : "");
            scope.textlabels(response.data.Heightto, response.data.Heightfrom, response.data.Caste, response.data.Educationcategory);
        };
        var numberInRange = function(number, lower, upper) {
            return number >= lower && number <= upper;
        };
        var checknumber = function(value) {
            if (numberInRange(value, 1, 12)) {
                return "4'" + (value - 1) + " in";
            } else if (numberInRange(value, 13, 24)) {

                value = (value % 13);
                return "5'" + value + " in";

            } else if (numberInRange(value, 25, 36)) {
                value = (value % 25);
                return "6'" + value + " in";
            } else if (numberInRange(value, 37, 39)) {
                value = (value % 37);
                return "7'" + value + " in";
            }
        };
        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        };
        scope.nologindata = function() {
            scope.controlsbinding();
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.gender = 2;
            scope.modelsearch.AgeFrom = 18;
            scope.modelsearch.Ageto = 30;
            scope.modelsearch.religion = 1;
            scope.modelsearch.HeightFrom = 1;
            scope.modelsearch.Heightto = 38;
        };

        function returnPaid() {
            return authSvc.getpaidstatus() === "1" ? true : false;
        }

        function returnCustid() {
            return helperservice.checkstringvalue(authSvc.getCustId()) ? authSvc.getCustId() : null;
        }
        scope.generalpageload = function() {
            scope.selectedIndex = $stateParams.id;
            scope.modelsearch = {
                showcontrols: true,
                typesearch: "",
                savedsearchselect: [],
                getpaidstatus: returnPaid(),
                savedclass: returnPaid(),
                custid: returnCustid(),
                genderdiabled: helperservice.checkstringvalue(returnCustid()),
                loadinging: true,
                activated: true,
                casteshow: true,
                slideshow: "",
                mesagesend: "",
                generalsavedsearchbtn: "Save&Search",
                advancedsavedsearchbtn: "Save&Search",
                HeightFromtext: "",
                Heighttotext: "",
                educationcategorytxt: "",
                educationcategory: [],
                SearchResult_IDflag: null,
                height: [],
                Mothertongue: [],
                visastatus: [],
                stars: [],
                Professiongroup: [],
                gender: 1,
                AgeFrom: null,
                Ageto: null,
                HeightFrom: null,
                Heightto: null,
                maritalstatus: null,
                educationcat: null,
                country: null,
                religion: null,
                mothertongue: null,
                caste: null,
                castetext: null,
                physicalstatusadvance: null,
                State: [],
                stateadvance: null,
                regdays: null,
                visastatusadvance: null,
                Educationadvance: null,
                Professiongroupadvance: null,
                monthsalcurrency: null,
                kujadosham: null,
                starlanguage: null,
                starsadvance: null,
                profileid: null,
                firstname: null,
                lastname: null,
                fromcurrency: null,
                tocurrency: null,
                diet: null,
                isCheckedphoto: false,
                object: {},
                Educationgroup: [],
                Caste: []
            };
            scope.modelsearch.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.controlsbinding();
                searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                    angular.copy(scope.modelsearch, scope.reset);

                });
                if (scope.modelsearch.getpaidstatus === true) {
                    scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);
                }

            } else if (helperservice.checkstringvalue(scope.modelsearch.object)) {
                scope.truepartner = true;
                scope.truepartnerrefine = true;
                SearchRequest = {
                    intCusID: null,
                    strCust_id: null,
                    intGender: (scope.modelsearch.object.intGender) === '2' ? 2 : 1,
                    FromAge: scope.modelsearch.object.FromAge,
                    ToAge: scope.modelsearch.object.ToAge,
                    iFromHeight: null,
                    iToHeight: null,
                    Maritalstatus: null,
                    intReligionID: scope.modelsearch.object.intReligionID,
                    MotherTongue: null,
                    Caste: scope.modelsearch.object.Caste !== null ? scope.modelsearch.object.Caste : null,
                    iPhysicalstatus: null,
                    Complexion: null,
                    Country: scope.modelsearch.object.Country,
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
                angular.copy(scope.modelsearch, scope.reset);

            } else {
                scope.nologindata();
                angular.copy(scope.modelsearch, scope.reset);

            }

            scope.$on("$destroy", scope.destroy);
        };
        scope.destroy = function() {
            scope.modelsearch.object = {};
            scope.reset = {};
        };
        scope.resetfunctionality = function() {
            // scope.truepartner= true;
            //  scope.truepartnerrefine = true;
            // scope.modelsearch.gender = 2;
            // scope.modelsearch.AgeFrom = 18;
            // scope.modelsearch.Ageto = 30;
            // scope.modelsearch.religion = 1;
            // scope.modelsearch.HeightFrom = 1;
            // scope.modelsearch.Heightto = 38;
            // scope.modelsearch.maritalstatus = null;
            // scope.modelsearch.educationcat = null;
            // scope.modelsearch.country = null;
            // scope.modelsearch.mothertongue = null;
            // scope.modelsearch.caste = null;
            // scope.modelsearch.regdays = null;
            // scope.modelsearch.physicalstatusadvance = null;
            // scope.modelsearch.stateadvance = null;
            // scope.modelsearch.visastatusadvance = null;
            // scope.modelsearch.Educationadvance = null;
            // scope.modelsearch.Professiongroupadvance = null;
            // scope.modelsearch.monthsalcurrency = null;
            // scope.modelsearch.kujadosham = null;
            // scope.modelsearch.starlanguage = null;
            // scope.modelsearch.starsadvance = null;
            // scope.modelsearch.profileid = "";
            // scope.modelsearch.firstname = "";
            // scope.modelsearch.lastname = "";
            angular.copy(scope.reset, scope.modelsearch);

        };
        scope.returnnullvalue = function(value) {
            var obj = helperservice.checkstringvalue(value) && (value.toString()) !== "0" && (value.toString()) !== 0 ? (value.toString()) : null;
            return obj;
        };
        scope.submitobjectcommongenad = function(frompage, topage) {
            SearchRequest = {
                intCusID: scope.modelsearch.custid,
                strCust_id: scope.modelsearch.custid !== null ? scope.modelsearch.custid : "",
                intGender: scope.modelsearch.gender,
                FromAge: scope.modelsearch.AgeFrom !== "0" && scope.modelsearch.AgeFrom !== 0 ? scope.modelsearch.AgeFrom : null,
                ToAge: scope.modelsearch.Ageto !== "0" && scope.modelsearch.Ageto !== 0 ? scope.modelsearch.Ageto : null,
                iFromHeight: scope.modelsearch.HeightFrom !== "0" && scope.modelsearch.HeightFrom !== 0 ? scope.modelsearch.HeightFrom : null,
                iToHeight: scope.modelsearch.Heightto !== "0" && scope.modelsearch.Heightto !== 0 ? (scope.modelsearch.Heightto) : null,
                Maritalstatus: scope.returnnullvalue(scope.modelsearch.maritalstatus),
                intReligionID: scope.modelsearch.religion !== "0" && scope.modelsearch.religion !== 0 ? scope.modelsearch.religion : null,
                MotherTongue: scope.returnnullvalue(scope.modelsearch.mothertongue),
                Caste: scope.returnnullvalue(scope.modelsearch.caste),
                iPhysicalstatus: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.physicalstatusadvance : null,
                Complexion: null,
                Country: scope.returnnullvalue(scope.modelsearch.country),
                State: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.stateadvance) : null,
                Visastatus: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.visastatusadvance) : null,
                Educationcategory: scope.returnnullvalue(scope.modelsearch.educationcat),
                Education: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.Educationadvance) : null,
                Professiongroup: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.Professiongroupadvance) : null,
                iFromSal: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.fromcurrency : null,
                iToSal: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.tocurrency : null,
                iManglinkKujaDosham: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.kujadosham : null,
                iStarLanguage: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.starlanguage : null,
                Stars: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.starsadvance) : null,
                iDiet: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.diet : null,
                intPhotoCount: scope.modelsearch.isCheckedphoto === true ? 1 : null,
                StartIndex: frompage,
                EndIndex: topage,
                i_Registrationdays: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.regdays : null,
                iAnnualincome: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.monthsalcurrency : null,
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
            scope.modelsearch.loadinging = frompage === 1 ? false : true;
            scope.modelsearch.showcontrols = false;
            scope.truepartner = false;
            if (helperservice.checkstringvalue(scope.modelsearch.custid) && scope.modelsearch.slideshow !== "slideshow") {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
            switch (type) {
                case "advanced":
                case "general":
                    scope.modelsearch.AgeFrom = helperservice.checkstringvalue(scope.modelsearch.AgeFrom) ? parseInt(scope.modelsearch.AgeFrom) : "0";
                    scope.modelsearch.Ageto = helperservice.checkstringvalue(scope.modelsearch.Ageto) ? parseInt(scope.modelsearch.Ageto) : "0";
                    scope.modelsearch.HeightFrom = helperservice.checkstringvalue(scope.modelsearch.HeightFrom) ? parseInt(scope.modelsearch.HeightFrom) : "0";
                    scope.modelsearch.Heightto = helperservice.checkstringvalue(scope.modelsearch.Heightto) ? parseInt(scope.modelsearch.Heightto) : "0";

                    scope.textlabels(helperservice.checkstringvalue(scope.modelsearch.HeightFrom) ? (scope.modelsearch.HeightFrom).toString() : "0", helperservice.checkstringvalue(scope.modelsearch.Heightto) ? (scope.modelsearch.Heightto).toString() : "0", null,
                        helperservice.checkstringvalue(scope.modelsearch.educationcat) ? (scope.modelsearch.educationcat).toString() : "0");
                    scope.modelsearch.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            if (helperservice.checkarraylength(response.data)) {
                                scope.modelsearch.showcontrols = false;
                                scope.truepartner = false;
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                if (scope.refinesubmitflag === "refine") {
                                    scope.refinesubmitflag = "normal";
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change your Refine search cretria', 2500);
                                } else {
                                    scope.modelsearch.showcontrols = true;
                                    scope.truepartner = true;
                                    scope.truepartnerrefine = true;
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                }
                            }
                        } else {
                            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showloginpopup();
                            }
                        }
                        scope.modelsearch.loadinging = true;

                        if (scope.modelsearch.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
                    });
                    break;
                case "homepage":
                    scope.modelsearch.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.PartnerProfilesnew = [];
                        if (helperservice.checkarraylength(response.data)) {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                        }
                        scope.modelsearch.loadinging = true;
                        scope.$broadcast('loadmore');
                    });
                    break;
                case "profileid":
                    scope.modelsearch.typesearch = type;
                    scope.truepartnerrefine = true;
                    if (scope.checkLength()) {
                        SearchRequest = {
                            intCusID: scope.modelsearch.custid,
                            intGender: scope.modelsearch.gender,
                            strLastName: scope.modelsearch.lastname !== '' ? scope.modelsearch.lastname : null,
                            strFirstName: scope.modelsearch.firstname !== '' ? scope.modelsearch.firstname : null,
                            strProfileID: scope.modelsearch.profileid !== '' ? scope.modelsearch.profileid : null,
                            intCasteID: null,
                            StartIndex: frompage,
                            EndIndex: topage,
                        };
                        if (scope.modelsearch.custid !== undefined && scope.modelsearch.custid !== null && scope.modelsearch.custid !== "") {
                            searches.profileidsearch(SearchRequest).then(function(response) {
                                if (parseInt(frompage) === 1) {
                                    scope.PartnerProfilesnew = [];
                                    if (helperservice.checkarraylength(response.data)) {
                                        _.each(response.data, function(item) {
                                            scope.PartnerProfilesnew.push(item);
                                        });
                                    } else {
                                        if (scope.refinesubmitflag === "refine") {
                                            scope.refinesubmitflag = "normal";
                                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change your Refine search cretria', 2500);
                                        } else {
                                            scope.modelsearch.showcontrols = true;
                                            scope.truepartner = true;
                                            scope.truepartnerrefine = true;
                                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                        }
                                    }
                                } else {
                                    _.each(response.data, function(item) {
                                        scope.PartnerProfilesnew.push(item);
                                    });
                                }
                                scope.modelsearch.loadinging = true;
                                if (scope.modelsearch.slideshow !== "slideshow") {
                                    scope.$broadcast('loadmore');
                                }
                            });

                        } else {
                            scope.modelsearch.showcontrols = true;
                            scope.truepartner = true;
                            scope.truepartnerrefine = true;
                            alerts.dynamicpopup("login.html", scope, uibModal);
                        }
                    } else {
                        scope.modelsearch.loadinging = true;
                        scope.modelsearch.showcontrols = true;
                        scope.truepartner = true;
                        scope.truepartnerrefine = true;
                    }
                    break;
                case "savedsearch":
                    scope.textlabels((scope.modelsearch.HeightFrom).toString(), (scope.modelsearch.Heightto).toString(), null, (scope.modelsearch.educationcat).toString());
                    scope.submitobjectcommongenad(frompage, topage);
                    scope.submitsavedsearchobject = {
                        customerpersonaldetails: SearchRequest,
                        GetDetails: {
                            CustID: scope.modelsearch.custid !== null ? scope.modelsearch.custid : "",
                            Lookingfor: scope.modelsearch.gender,
                            FromAge: scope.modelsearch.AgeFrom !== "0" && scope.modelsearch.AgeFrom !== 0 ? scope.modelsearch.AgeFrom : null,
                            ToAge: scope.modelsearch.Ageto !== "0" && scope.modelsearch.Ageto !== 0 ? scope.modelsearch.Ageto : null,
                            FromHeight: scope.modelsearch.HeightFrom !== "0" && scope.modelsearch.HeightFrom !== 0 ? scope.modelsearch.HeightFrom : null,
                            ToHeight: scope.modelsearch.Heightto !== "0" && scope.modelsearch.Heightto !== 0 ? scope.modelsearch.Heightto : null,
                            Maritalstatus: scope.returnnullvalue(scope.modelsearch.maritalstatus),
                            Religion: scope.modelsearch.religion !== "0" && scope.modelsearch.religion !== 0 ? scope.modelsearch.religion : null,
                            Mothertongue: scope.returnnullvalue(scope.modelsearch.mothertongue),
                            Caste: scope.returnnullvalue(scope.modelsearch.caste),
                            Complexion: null,
                            Physicalstatus: type === "advanced" ? scope.modelsearch.physicalstatusadvance : null,
                            CountyWorking: scope.returnnullvalue(scope.modelsearch.country),
                            StateWorking: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.stateadvance) : null,
                            Visastatus: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.visastatusadvance) : null,
                            Educationcategory: scope.returnnullvalue(scope.modelsearch.educationcat),
                            EducationGroup: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.Educationadvance) : null,
                            Educationspecialization: null,
                            professioncategory: null,
                            Professiongroup: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.Professiongroupadvance) : null,
                            Professionspecialization: null,
                            Annualincome: type === "advanced" ? scope.modelsearch.monthsalcurrency : null,
                            FromSalary: type === "advanced" ? scope.modelsearch.fromcurrency : null,
                            ToSalary: type === "advanced" ? scope.modelsearch.tocurrency : null,
                            Starlanguage: type === "advanced" ? scope.modelsearch.starlanguage : null,
                            Star: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.starsadvance) : null,
                            ManglikKujaDosham: type === "advanced" ? scope.modelsearch.kujadosham : null,
                            Drink: null,
                            Smoke: null,
                            Diet: type === "advanced" ? scope.modelsearch.diet : null,
                            Registrationdays: type === "advanced" ? scope.modelsearch.regdays : null,
                            CustSavedSearchName: helperservice.checkstringvalue(form.savesearchNames) ? form.savesearchNames : null,
                            searchPageName: type === "advanced" ? "Advancesearch" : "Generalsearch",
                            searchPageID: type === "advanced" ? "3" : "2",
                            SearchResult_ID: helperservice.checkstringvalue(searchsavedidupdate) ? searchsavedidupdate : null
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);
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
                        scope.modelsearch.loadinging = true;
                        if (scope.modelsearch.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
                    });
                    scope.modalpopupclose();
                    break;
            }
        };
        scope.savedseapopup = function(type) {
            scope.modelsearch.typesearch = type;
            switch (type) {
                case "general":
                    if (scope.modelsearch.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.modelsearch.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
                case "advanced":
                    if (scope.modelsearch.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.modelsearch.SearchResult_IDflag);
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
            scope.modelsearch.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (helperservice.checkstringvalue(scope.modelsearch.object)) {
                scope.controlsbinding();
                scope.modelsearch.gender = (scope.modelsearch.object.intGender) === 2 ? 2 : 1;
                scope.modelsearch.AgeFrom = scope.modelsearch.object.FromAge;
                scope.modelsearch.Ageto = scope.modelsearch.object.ToAge;
                scope.modelsearch.country = scope.modelsearch.object.Country;
                scope.modelsearch.religion = scope.modelsearch.object.intReligionID;
                scope.modelsearch.caste = scope.modelsearch.object.Caste !== null ? scope.modelsearch.object.Caste : "0";
                scope.modelsearch.HeightFrom = 1;
                scope.modelsearch.Heightto = 38;
                sessionStorage.removeItem("homepageobject");
            }
            scope.modelsearch.showcontrols = true;
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.slideshow = "";

            scope.$watch("modelsearch.AgeFrom", function(current, old) {
                scope.modelsearch.AgeFrom = current;
            });
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide, slideshow) {
            scope.truepartnerrefine = true;
            scope.modelsearch.slideshow = "slideshow";
            scope.generalsearchsubmit(scope.modelsearch.typesearch, frompageslide, topageslide);
        });
        scope.$on('slideshowrefinehide', function(event) {
            scope.truepartnerrefine = true;
        });

        scope.$on('slideshowrefineshow', function(event) {
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.modelsearch.State = commonFactory.StateBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
                case 'EducationCatgory':
                    scope.modelsearch.Educationgroup = commonFactory.educationGroupBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
                case 'caste':
                    scope.modelsearch.Caste = [];
                    scope.modelsearch.Caste = commonFactory.casteDepedency(scope.modelsearch.religion, (helperservice.checkstringvalue(modal) ? (modal).toString() : ""));
                    break;
                case 'star':
                    scope.modelsearch.stars = commonFactory.starBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.slideshow = "";
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.generalsearchsubmit(scope.modelsearch.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            scope.refinesubmitflag = "refine";
            scope.generalsearchsubmit(scope.modelsearch.typesearch, 1, 8);
            scope.$broadcast('setslide');
        };
        scope.hightFromrefine = function(type) {
            switch (type) {
                case "heightfrom":
                    scope.modelsearch.HeightFromtext = scope.checkheight(scope.modelsearch.HeightFrom);
                    break;
                case "heightto":
                    scope.modelsearch.Heighttotext = scope.checkheight(scope.modelsearch.Heightto);
                    break;
            }
        };
        scope.showloginpopup = function() {
            alerts.dynamicpopup('login.html', scope, uibModal, 'sm');
        };
        scope.showloginpopupnew = function() {
            alerts.dynamicpopupclose();
            alerts.dynamicpopup('loginpopup.html', scope, uibModal, 'sm');
        };
        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });
        scope.cancelpopup = function() {
            alerts.dynamicpopupclose();
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
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
                            }
                        });
                        alerts.dynamicpopupclose();
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
                    searches.partnerdetails(scope.modelsearch.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.modelsearch.generalsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.modelsearch.advancedsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        }
                        scope.generalsearchsubmit(typeofsearch, 1, 8, "");
                    });
                    break;
                case "edit":
                    scope.PartnerProfilesnew = [];
                    searches.partnerdetails(scope.modelsearch.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        scope.modelsearch.showcontrols = true;
                        scope.truepartner = true;
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                            scope.selectedIndex = 2;
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.selectedIndex = 0;
                            scope.modelsearch.generalsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.selectedIndex = 1;
                            scope.modelsearch.advancedsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        }
                    });
                    break;
            }
        };
        scope.clickvalues = function(text) {
            scope.modelsearch.HeightFromtext = text;
        };
        scope.resetgenral = function(type) {
            switch (type) {
                case "general":
                    if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                        searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
                            // scope.resetfunctionality();
                            scope.partnerbindings(response);
                        });
                    } else {
                        //controlResetMultiselects();
                        scope.resetfunctionality();
                    }
                    break;
            }
        };
        $rootscope.$on("profile", function(event, indexvalue) {
            sessionStorage.removeItem("homepageobject");
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.showcontrols = true;
            scope.selectedIndex = indexvalue;
        });
        scope.redirectToviewfull = function(custid, logid) {
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '/viewFullProfileCustomer';
            window.open(realpath, '_blank');
            // authSvc.paymentstaus(scope.modelsearch.custid, scope).then(function(responsepaid) {
            //     if (responsepaid === true) {
            //         window.open(realpath, '_blank');
            //     }

            // });

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
            scope.modelsearch.modalpopupheadertext = "Enter your message here";
            scope.modelsearch.messagecustid = "";
            scope.modelsearch.messagecustid = custid;
            scope.modelsearch.modalbodyshow = 1;
            scope.modelsearch.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.sendmessages = function(form) {
            if (form !== undefined && helperservice.checkstringvalue(form.message)) {
                scope.$broadcast('sendmsg', 'M', scope.modelsearch.messagecustid, undefined, form, undefined);
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
            if (commonpopup.checkvals(scope.modelsearch.mothertongue) && commonpopup.checkvals(scope.modelsearch.religion)) {

            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please select mothertongue and religion', 2500);
            }
        };
        scope.salarycurrencyalert = function(id) {

            switch (id) {
                case 1:
                    if (scope.modelsearch.monthsalcurrency !== "0" && scope.modelsearch.monthsalcurrency !== 0 && scope.modelsearch.monthsalcurrency !== null && scope.modelsearch.monthsalcurrency !== undefined && scope.modelsearch.monthsalcurrency !== "") {

                    } else {
                        scope.modelsearch.fromcurrency = "";
                        alert('Please Select Currency');
                    }
                    break;
                case 2:
                    if (scope.modelsearch.monthsalcurrency !== "0" && scope.modelsearch.monthsalcurrency !== 0 && scope.modelsearch.monthsalcurrency !== null && scope.modelsearch.monthsalcurrency !== undefined && scope.modelsearch.monthsalcurrency !== "") {

                    } else {
                        scope.modelsearch.tocurrency = "";
                        alert('Please Select Currency');
                    }
                    break;
                case 3:
                    if (scope.modelsearch.fromcurrency !== "" && scope.modelsearch.fromcurrency !== null && scope.modelsearch.fromcurrency !== undefined) {
                        if (scope.modelsearch.monthsalcurrency === "0" || scope.modelsearch.monthsalcurrency === 0 || scope.modelsearch.monthsalcurrency === "") {
                            scope.modelsearch.fromcurrency = "";
                        }
                    }
                    if (scope.modelsearch.tocurrency !== "" && scope.modelsearch.tocurrency !== null && scope.modelsearch.tocurrency !== undefined) {
                        if (scope.modelsearch.monthsalcurrency === "0" || scope.modelsearch.monthsalcurrency === 0 || scope.modelsearch.monthsalcurrency === "") {
                            scope.modelsearch.tocurrency = "";
                        }
                    }
                    break;
            }

        };
    }
]);
app.controller('searchregistration', ['$scope', 'getArray', 'commonFactory', 'basicRegistrationService',
    '$filter', 'authSvc', '$timeout', 'route', 'alert', 'SelectBindServicereg',
    function(scope, getArray, commondependency, basicRegistrationService, filter,
        authSvc, timeout, route, alerts, SelectBindServicereg) {
        scope.month = 'month';
        scope.reg = {};
        scope.monthArr = [];
        scope.casteArr = [];
        scope.casteArr.push({ "label": '--select--', "title": '--select--', "value": '0' });
        scope.reg.ddlcaste = '0';
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": '--select--', "title": '--select--', "value": '0' });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            scope.reg.ddlDD = "0";
            return option;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": '--select--', "title": '--select--', "value": '0' });
            for (var i = from; i <= to; i++) {
                var strValue = null;
                if (i <= 9) {
                    strValue = "0" + i;
                } else {
                    strValue = i;
                }
                Arr.push({ "label": strValue, "title": strValue, "value": strValue });
            }
            scope.reg.ddlMM = "0";
            return Arr;
        };
        scope.year = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": '--select--', "title": '--select--', "value": '0' });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            scope.reg.ddlYear = "0";
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
            // scope.countryCode = getArray.GArray('countryCode');
        }, 1000);
        // timeout(function() {
        //     scope.Country = getArray.GArray('Country');
        // }, 500);

        timeout(function() {
            var Country = [],
                CountryCode = [];
            Country.push({ "label": '--select--', "title": '--select--', "value": '0' });
            CountryCode.push({ "label": '--select--', "title": '--select--', "value": '0' });
            SelectBindServicereg.CountryWithCode().then(function(response) {
                _.each(response.data, function(item) {
                    Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
                });
                console.log('test..');
                console.log(Country);
                scope.Country = Country;
                scope.countryCode = CountryCode;
                scope.reg.ddlcountry = '0';
                scope.reg.ddlmobilecountry = '0';
            });

        }, 100);

        scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];
        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {} else {
                if (type === 'day') {
                    obj.ddlMM = '0';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.ddlDD = '0';
                }
            }
        };
        scope.changeBind = function(parentval, parentval2) {
            scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2) !== undefined && commondependency.listSelectedVal(parentval2) !== null && commondependency.listSelectedVal(parentval2) !== "" ? commondependency.listSelectedVal(parentval2) : 0);
            scope.reg.ddlcaste = 0;
        };
        scope.regSubmit = function(obj) {
            var valmm = _.indexOf(monthArr, obj.ddlMM);
            valmm = (valmm != -1 ? parseInt(valmm) + 1 : 0);
            valmm = valmm >= 10 ? valmm : '0' + valmm;
            var date = obj.ddlDD + '-' + valmm + '-' + obj.ddlYear;
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

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.reg.txtEmail, scope.reg.txtpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.txtfirstname, ln: obj.txtlastname, countryID: obj.ddlcountry, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
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
            }
        };
        scope.$watch(function() {
            return scope.reg.ddlcountry;
        }, function(current, original) {
            scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
        });
        scope.redirectprivacy = function(type) {
            window.open('privacyPolicy', '_blank');
        };
        scope.dynamicaapplycolors = function(value, id) {
            alerts.applycolors(value, id);
        };
        scope.dynamictextboxcolor = function(value, id) {
            alerts.applycolorsfortextboxes(value, id);
        };
    }
]);
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
(function() {
    'use strict';

    angular
        .module('Kaakateeya')
        .controller('empLogCustomerCtrl', controller);
    controller.$inject = ['$scope', '$stateParams', 'loggedascustomerservice', 'missingFieldService', 'authSvc', 'helperservice', 'route'];

    function controller(scope, stateParams, loggedascustomerservice, missingFieldService, authSvc, helperservice, route) {
        /* jshint validthis:true */
        var vm = this;
        var profileID = stateParams.profileID;
        scope.activate = function() {
            loggedascustomerservice.getcustomerpassword(profileID).then(function(response) {
                if (response.data !== null && response.data !== undefined && response.data !== "" && response.data.length > 0) {
                    var passwords = (response.data).split(';');
                    scope.customerpassword = (passwords[0].split(':'))[1];
                    scope.customerpasswordencrypt = (passwords[1].split(':'))[1];
                    //scope.getcustomerinformation(scope.customerprofileid, scope.customerpassword, 1);
                    authSvc.login(profileID, scope.customerpasswordencrypt, 2).then(function(response) {
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
                            }
                        });

                    });
                }
            });
        };
        // scope.activate();
    }
})();
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
 app.controller("forgetpasswordemail", ['$scope', 'forgetPwdservices', '$stateParams', 'alert', '$uibModal', 'route', '$location',
     function(scope, forgetPwdservices, stateParams, alerts, uibModal, route, location) {
         // scope.custidpassword = stateParams.custid;
         scope.custidpassword = (location.search()).CustID;
         scope.statuspassword = null;
         scope.divngit = function() {
             alerts.dynamicpopup("forgetpasswordemail.html", scope, uibModal);
             forgetPwdservices.getstatuscustid(scope.custidpassword).then(function(response) {
                 _.each(response.data, function(item) {
                     var passwordarray = JSON.parse(item);
                     if (passwordarray !== undefined && passwordarray !== null && passwordarray !== "" && passwordarray[0] !== undefined && passwordarray[0] !== null && passwordarray[0] !== "") {
                         if (passwordarray[0].STATUS === 1) {
                             scope.statuspassword = passwordarray[0].Password;
                         } else if (passwordarray[0].STATUS === 2) {
                             alerts.timeoutoldalerts(scope, 'alert-danger', 'You have already reseted your password', 2500);
                         }

                     }
                 });

             });
         };
         scope.passwordsubmit = function(formloagin) {
             alerts.dynamicpopupclose();
             forgetPwdservices.getChangePassword(scope.custidpassword, formloagin.txtPassword).then(function(response) {
                 if (response.data === 1) {
                     alerts.timeoutoldalerts(scope, 'alert-success', 'Your password updated successfully', 2500);
                     route.go('home', {});
                 }
             });
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
                    if (response.data !== null) {
                        scope.lblTicketID = response.data.Ticket !== null ? response.data.Ticket : '';
                    }
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
app.controller("ourbranches", ["$scope", "ourBranchService", "helperservice", function(scope, ourBranchService, helperservice) {
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
            if (helperservice.checkstringvalue(scope.ddlbranchaddress)) {
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
app.controller("profilesettings", ['$scope', '$mdDialog', 'customerProfilesettings', 'SelectBindServiceApp',
    'authSvc', 'alert', 'helperservice', 'basicRegistrationService',
    function(scope, $mdDialog, customerProfilesettings, service, authSvc, alerts, helperservice, basicRegistrationService) {
        scope.selectedIndex = 0;
        scope.getdetails = function() {
            var logincustid = authSvc.getCustId();
            scope.custid = helperservice.checkstringvalue(logincustid) ? logincustid : null;
            var profileid = authSvc.getProfileid();
            scope.ProfileID = helperservice.checkstringvalue(profileid) ? profileid : null;
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
            customerProfilesettings.getprofilesettinginfo(scope.custid).then(function(response) {
                _.each(response.data, function(item) {
                    scope.arrayprofilesettings = item;
                    scope.mailyes = scope.arrayprofilesettings.AllowEmail === false ? 0 : 1;
                    scope.smsyes = scope.arrayprofilesettings.AllowSMS === false ? 0 : 1;
                    scope.ProfileStatusID = scope.arrayprofilesettings.ProfileStatusID !== 55 ? { 'display': 'block' } : { 'display': 'none' };
                    scope.ProfileStatusIDunhide = scope.arrayprofilesettings.ProfileStatusID === 55 ? { 'display': 'block' } : { 'display': 'none' };
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
                            alerts.open('Email Upadated successfully', 'success');
                            scope.Resetallfields('email');
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
                            alerts.open('Mobile Upadated successfully', 'success');
                            scope.Resetallfields('mobile');
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
                    alerts.open('Passsword updated successfully', 'success');
                    scope.Resetallfields('password');
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
                    alerts.open('Hide Profile successfully', 'success');
                    scope.Resetallfields('hide');

                } else {
                    alerts.open('Hide Profile failed', 'warning');
                }
            });
        };
        scope.submitdeleteprofile = function() {
            var ProfileID = scope.custid;
            var Narrtion = scope.Narration;

            customerProfilesettings.deleteprofile(ProfileID, Narrtion).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Delete Profile successfully', 'success');
                    scope.Resetallfields('deleteprofiles');
                } else {
                    alerts.open('Delete Profile failed', 'warning');
                }
            });
        };
        scope.submitmanagealerts = function() {
            var CustID = scope.custid;
            var AllowEmail = scope.mailyes === '0' ? 0 : 1;
            var AllowSMS = scope.smsyes === '0' ? 0 : 1;
            customerProfilesettings.manageprofiles(CustID, AllowEmail, AllowSMS).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Submit successfully', 'success');
                    scope.Resetallfields('alerts');
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
                    scope.getdetails();
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
                    this.emailform.$setinValidity();
                    scope.selectedIndex = 0;
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
                    this.mobileform.$setinValidity();
                    scope.selectedIndex = 0;
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
                    this.projectForm.$setinValidity();
                    scope.selectedIndex = 1;
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
                    this.hideprofileform.$setinValidity();
                    scope.selectedIndex = 3;
                    break;
                case "alerts":
                    scope.mailyes = null;
                    scope.smsyes = null;
                    scope.getdetails();
                    scope.alertmanageswitch = false;
                    scope.manageakerts = true;
                    scope.selectedIndex = 2;
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
                    this.deleteprofileform.$setinValidity();
                    scope.selectedIndex = 4;
                    break;
            }
        };



        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.NewEmail = '';
                            alerts.open('Email Already Exists', 'warning');
                        } else {
                            scope.Confirmnewnumber = '';
                            alerts.open('Mobile number Already Exists', 'warning');
                        }
                    }
                });
            }
        };



    }
]);
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
    scope.showhideliphoto = function(path) {
        if (path !== "" && path !== null && path !== undefined && path !== " ") {
            return true;
        } else {
            return false;
        }
    };
}]);
app.controller("supporttickets", ['$scope', 'customerProfilesettings', 'authSvc', 'alert',
    function(scope, customerProfilesettings, authSvc, alerts) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.supporttickets = [];
        scope.selectedIndex = 0;
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
        // scope.pageinit = function() {
        //     scope.submitsupporttickets(1);
        // };
        // scope.$watch('selectedIndex', function(current, old) {
        //     switch (current) {
        //         case 0:
        //             scope.submitsupporttickets(1);
        //             break;
        //         case 1:
        //             scope.submitsupporttickets(2);
        //             break;
        //         case 2:
        //             scope.submitsupporttickets(3);
        //             break;
        //         case 3:
        //             scope.submitsupporttickets(4);
        //             break;
        //     }
        // });
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
    'authSvc', 'alert', 'route',
    function(scope, $interval, myAppFactory, authSvc, alerts, route) {
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
            route.go("paymentresponse", {});
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
app.controller("upgrademembershipnew", ['$scope', '$interval', 'myAppFactory',
    'authSvc', 'alert', 'route',
    function(scope, $interval, myAppFactory, authSvc, alerts, route) {
        scope.paymentarray = [];
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        myAppFactory.getpaymentnew(scope.custid).then(function(response) {
            scope.paymentarray = [];
            scope.paymentarray.push({
                MembershipName: "Services & Features",
                MembershipAmount: "My Plans",
                AllottedServicePoints: "Profile Count",
                AccessFeatue: "Access",
            });
            _.each(JSON.parse(response.data[0]), function(item) {
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
            route.go("paymentresponse", {});
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
        $mdDialog, $stateParams, $location, customerviewfullprofileservices, window, $state) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.PageDiv = true;
        scope.searchObjectquery = $location.search();
        var meKey = Object.getOwnPropertyNames(scope.searchObjectquery)[0];
        var mekey2 = Object.getOwnPropertyNames(scope.searchObjectquery)[1];
        var meValue = scope.searchObjectquery[meKey];
        var meValue2 = scope.searchObjectquery[mekey2];
        scope.MyProfileQSAccept = "?" + (meKey).toString() + "=" + (meValue).toString();
        scope.tocustid = null;
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
                    if (scope.personalinfo[0].HoroscopeImage !== undefined && scope.personalinfo[0].HoroscopeImage !== null) {
                        scope.horoimagesrc = (scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? 'src/images/view_horoscope_image.jpg' : scope.personalinfo[0].HoroscopeImage;
                    }
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
                                        if (meValue2 !== "1") {
                                            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                        }

                                    }
                                } else if (testArr[0].SeenStatus === "Reject" && scope.hdnAccRejFlag !== "MailAccept") {
                                    if (scope.flagopen !== 1) {
                                        scope.modalbodyID1 = "You have Skipped this profile";
                                        if (meValue2 !== "1") {
                                            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                        }
                                    }
                                }
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
        scope.pagerefersh = function(ToProfileID, Fromprofileid) {
            // customerviewfullprofileservices.getExpressIntrstfullprofile(ToProfileID, Fromprofileid, "").then(function(responsedata) {
            //     scope.partnerinformation(responsedata.data);
            // });

            if (scope.interestedflag === true) {
                customerviewfullprofileservices.Viewprofilepartial(ToProfileID, "").then(function(responseunpaid) {
                    scope.partnerinformation(responseunpaid.data);
                });
            } else {
                customerviewfullprofileservices.getpaidstatusforviewprfile(scope.fromcustid).then(function(responsepaid) {
                    if (responsepaid.status === 200 && responsepaid.data !== null && responsepaid.data !== undefined) {
                        if (responsepaid.data === "Paid") {
                            // customerviewfullprofileservices.getExpressIntrstfullprofile(ToProfileID, "").then(function(responsedata) {
                            //     scope.partnerinformation(responsedata.data);
                            // });
                            customerviewfullprofileservices.getExpressIntrstfullprofilepaidandunpaid(scope.FromProfileID, scope.tocustid, "").then(function(responsedata) {
                                scope.partnerinformation(responsedata.data);
                            });
                        } else {
                            scope.unpaidflag = true;
                            // customerDashboardServices.Viewprofile(scope.fromcustid, scope.tocustid, 283).then(function(responseunpaid) {
                            //     scope.partnerinformation(responseunpaid.data);
                            // });
                            customerviewfullprofileservices.getExpressIntrstfullprofilepaidandunpaid(scope.FromProfileID, scope.tocustid, "").then(function(responsedata) {
                                scope.partnerinformation(responsedata.data);
                            });
                        }
                    }
                });
            }
            scope.bookmarkexpreessdata();
            // customerDashboardServices.getphotoslideimages(scope.tocustid).then(function(response) {
            //     scope.slides = [];
            //     _.each(response.data, function(item) {
            //         scope.slides.push(item);
            //     });
            // });
        };
        scope.Searchfunctionality = function(type, object) {
            switch (type) {
                case "DontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(object).then(function(response) {
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
            // scope.pagerefersh(scope.tocustid, scope.fromcustid);
            scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            scope.PageDiv = false;
            timeout(function() {
                var MobjViewprofile = {
                    ExpressInrestID: scope.hdnexpressinterstfiled,
                    CustID: scope.fromcustid,
                    AcceptStatus: 2,
                    MatchFollwupStatus: 2
                };
                scope.Searchfunctionality("DontProceed", MobjViewprofile);
            }, 500);
        };
        scope.statusalert = function(status) {

            switch (status) {
                case 0:
                case 3:
                    scope.divmodalbodytoClose = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 4:
                    scope.divmodalbodytoClose = "Please upgrade your membership";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    scope.unpaidflag = true;
                    break;
                case 5:
                    scope.divmodalbodytoClose = "Please upgrade your membership(No points)";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    scope.unpaidflag = true;
                    break;
                case 6:
                    scope.divmodalbodytoClose = "You have already Skipped this profile";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                    break;
                case 7:
                    scope.modalbodyID1 = "You cannot Skip Accepted Profile";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    //scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    scope.flagopen = 1;
                    break;
                case 8:
                    scope.Reject_paeload();
                    break;
                case 9:
                case 16:
                    scope.interestedflag = status === 9 ? true : false;
                    //scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    break;
                case 10:
                    scope.AccRejFlag = "MailReject";
                    scope.modalbodydivContent = "You have already Rejected this profile. Do you want to continue to view the profile?";
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    // scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
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
            // if (scope.interestedflag === true) {
            //     alerts.dynamicpopupclose();
            //     window.open('/commonviewfull' + scope.MyProfileQSAccept + '&&Vale=1', '_blank');
            // } else {
            alerts.dynamicpopupclose();
            //}
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.modalpopupclosetab = function() {
            // if (scope.divmodalbodytoClose === "Please upgrade your membership" || scope.divmodalbodytoClose === "Please upgrade your membership(No points)") {
            //     alerts.dynamicpopupclose();
            //     // scope.pagerefersh(scope.tocustid, scope.fromcustid);
            //     scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            // } else {
            //     window.close();
            // }
            if (scope.divmodalbodytoClose === "Please upgrade your membership" || scope.divmodalbodytoClose === "Please upgrade your membership(No points)") {
                alerts.dynamicpopupclose();
                window.close();
                // scope.pagerefersh(scope.tocustid, scope.fromcustid);
                //scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            } else {
                window.close();
            }
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
            alerts.dynamicpopupclose();
            switch (scope.AccRejFlag) {
                case "MailAccept":
                    alerts.dynamicpopupclose();
                    scope.Reject_paeload();
                    break;
                case "MailReject":
                    alerts.dynamicpopupclose();
                    //alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    //scope.pagerefersh(scope.ToProfileID, scope.FromProfileID);
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
                        switch (response.data) {
                            case 1:
                                if (scope.unpaidflag) {
                                    scope.modalbodyID1 = "You need to Upgrade  membership";
                                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                } else {
                                    scope.modalbodyID1 = "To Move the Match for MatchFollowup";
                                    window.open('/commonviewfull' + scope.MyProfileQSAccept + '&&Vale=1', '_blank');
                                    scope.divacceptreject = true;
                                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                                }
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade  membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
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
                        switch (response.data) {
                            case 1:
                                scope.modalbodyID1 = "Oops go through your search";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade  membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                break;
                        }
                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                        scope.divacceptreject = true;
                        scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    });
                    break;
            }

            //scope.pagerefersh(scope.tocustid, scope.fromcustid);
            // alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);

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
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog',
    '$stateParams', '$location', 'helperservice', '$http',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, helperservice, $http) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var localcustid = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        scope.localcustidhide = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        var locallogid = sessionStorage.getItem("locallogid");
        scope.custid = helperservice.checkstringvalue(logincustid) ? logincustid : null;
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.lnkViewHoro = true;
        scope.BookmarkFlag = true;
        scope.ViewedFlag = true;
        scope.msgflag = true;
        scope.IgnoreFlaghide = true;
        scope.liproceed = false;
        scope.liticket = false;
        scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
        //scope.logidliproceed = scope.custid === scope.localcustidhide ? false : true;
        scope.Bookmark = [];
        scope.Viewed = [];
        scope.Express = [];
        scope.Paidstatus = [];
        scope.Ignore = [];
        scope.arr = [];
        scope.personalinfo = {};
        scope.aboutmyself = {};
        scope.modalheader = 1;
        scope.partnerinformation = function(response) {
            _.each(response.data, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                    scope.personalinfo = testArr;
                    scope.divclassmask = function(logphotostatus) {
                        var photo = scope.personalinfo[0].ApplicationPhotoPath;
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
        scope.slideshowimages = function() {
            customerDashboardServices.getphotoslideimages(localcustid).then(function(response) {
                scope.slides = [];
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
        };
        scope.getallflags = function() {
            customerDashboardServices.Viewprofileflags(scope.custid, localcustid).then(function(response) {
                _.each(response.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0] !== undefined) {
                        switch (testArr[0].TableName) {
                            case "Bookmark":
                                scope.Bookmark = testArr;
                                scope.BookmarkFlag = scope.Bookmark[0].BookmarkFlag === 1 ? false : true;
                                break;
                            case "Viewed":
                                scope.Viewed = testArr;
                                scope.BookmarkFlag = scope.BookmarkFlag === true ? true : false;
                                scope.IgnoreFlaghide = scope.IgnoreFlaghide === true ? true : false;
                                scope.ViewedFlag = true;
                                scope.msgflag = true;
                                scope.liproceed = false;
                                scope.logidliproceed = false;
                                scope.lnkViewHoro = true;
                                break;
                            case "Express":
                                scope.Express = testArr;
                                if (scope.Express[0].MatchFollowUpStatus === 1) {
                                    if (scope.Express[0].SeenStatus === "Accept" || scope.Express[0].SeenStatus === "Reject") {
                                        scope.liticket = true;
                                        scope.lnkViewHoro = true;
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
                                scope.IgnoreFlaghide = scope.Ignore[0].IgnoreFlag === 1 ? false : true;
                                break;
                        }
                    }
                });
            });
            return false;
        };
        scope.showmyname = true;

        scope.pageload = function() {
            if (scope.custid === localcustid) {
                scope.showmyname = true;
                scope.logidliproceed = false;
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 0).then(function(response) {
                    // scope.slideshowimages();
                    scope.partnerinformation(response);
                });
            } else {
                scope.showmyname = false;
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 283).then(function(response) {

                    // scope.slideshowimages();
                    scope.partnerinformation(response);
                    scope.getallflags();
                });

            }
        };

        scope.servicehttp = function(type, object) {
            return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                .then(function(response) {
                    switch (type) {
                        case "B":
                            if (response.data === 1) {
                                // scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'bookmarked suceessfully', 2500);

                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'bookmarked failed', 2500);
                            }
                            break;
                        case "E":
                            if (response.data === 1) {
                                //scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'EXpressInterest done SuccessFully', 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'EXpressInterest Fail', 2500);
                            }
                            break;
                        case "I":
                            if (response.data === 1) {
                                //scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'Ignore SuccessFully', 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Ignore profile Fail', 2500);
                            }
                            break;
                        case "M":
                        case "TH":
                            if (response.data === 1) {
                                scope.$broadcast("showAlertPopupccc", 'alert-success', "Message sent SuccessFully", 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', "Message sending Fail", 2500);
                            }
                            break;
                    }
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
            scope.modalheader = 1;
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
        scope.sendmessegestoRMTicket = function(tocustid) {
            scope.modalheader = 2;
            scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
        scope.sendmessagestoRM = function(form) {
            var locallogid = sessionStorage.getItem("locallogid");
            scope.serviceactions('TH', scope.messagecustid, undefined, undefined, form, locallogid, undefined);
            alerts.dynamicpopupclose();
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

            scope.slideshowimages();
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
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Your action send sucessfully', 3000);
                        scope.pageload();
                    });
                    break;
                case "btnDontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(obj).then(function(response) {
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
(function(angular) {
    'use strict';

    function factory(employeeViewfullprofileservice, stateParams, alerts, SelectBindServiceApp, uibModal, customerDashboardServices) {
        var model = {};
        model.scope = {};
        model.viewprofilearray = [];
        model.aboutmyself = {};
        model.personalinfo = [];
        model.basicinfo = [];
        model.custid = 0;
        model.stateprofileid = stateParams.ProfileID;
        model.statecontacts = stateParams.contacts;
        model.textboxshowhide = true;
        model.fullprofileshow = true;
        model.EmpViewfullProfile = function(stateprofileid, type) {
            model.viewprofilearray = [];
            model.aboutmyself = {};
            model.personalinfo = [];
            model.basicinfo = [];
        };

        model.getprofileData = function(stateprofileid, empid) {
            employeeViewfullprofileservice.getEmpViewfullProfile(stateprofileid, empid).then(function(response) {
                model.fullprofileshow = false;
                if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                    _.each(response.data, function(item) {
                        var testArr = JSON.parse(item);
                        if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                            model.aboutmyself = testArr;
                        } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                            model.personalinfo = testArr;
                            model.custid = model.personalinfo[0].Cust_ID;
                            var photocount = model.personalinfo[0].PhotoName_Cust;
                            model.horoscopeimage = model.personalinfo[0].HoroscopeImage === "" ||
                                model.personalinfo[0].HoroscopeImage === null ||
                                model.personalinfo[0].HoroscopeImage === "Not given" ? false : true;
                            if (model.personalinfo[0].HoroscopeImage !== undefined && model.personalinfo[0].HoroscopeImage !== null) {
                                model.ViewHoroshow = (model.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? true : false;
                            }
                        } else {
                            if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "My Basic Details") {
                                model.basicinfo = testArr;
                            }
                            if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                                model.viewprofilearray.push({ header: testArr[0].TableName, value: testArr });
                            }
                        }
                    });

                }
            });
        };

        model.getprofileDataencryptedID = function(stateprofileid) {
            employeeViewfullprofileservice.getdecryptedProfileID(stateprofileid).then(function(response) {
                if (response.data) {
                    model.getprofileData(response.data, 2);
                }

            });
        };

        model.showPhotoPopup = function() {
            alerts.ShowPhotoPopup(model.custid, model.scope);
        };

        model.applyCls = function(header) {
            if (header === 'My Location Information') {
                return 'personal_inform_main_in_list clearfix';
            } else if (header === 'My Basic Details') {

                return 'personal_inform_main_in_list clearfix displayCls';
            }
            return '';
        };

        model.photoalbum = function() {
            var logincustid = model.personalinfo[0].Cust_ID;
            model.slideshowimages();
            model.headerpopup = "Slide show";
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                alerts.dynamicpopup("photopopup.html", model.scope, uibModal);
            }
        };
        model.cancel = function() {
            alerts.dynamicpopupclose();
        };
        model.slideshowimages = function() {
            customerDashboardServices.getphotoslideimages(model.personalinfo[0].Cust_ID).then(function(response) {
                model.slides = [];
                _.each(response.data, function(item) {
                    model.slides.push(item);
                });
            });
        };

        model.viewhoroscopeimage = function(horopath) {
            if (horopath.indexOf('.html') !== -1) {
                window.open(horopath, '_blank');
            } else {
                model.image = horopath;
                alerts.dynamicpopup("astroPopup.html", model.scope, uibModal);
            }
        };

        return model;
    }
    angular
        .module('Kaakateeya')
        .factory('employeeViewfullprofilePrintModel', factory);
    factory.$inject = ['employeeViewfullprofilePrintservice',
        '$stateParams', 'alert', 'SelectBindServiceApp', '$uibModal', 'customerDashboardServices'
    ];

})(angular);
 (function() {


     function controller(employeeViewfullprofileModel, scope, $location) {
         var vm = this,
             model;
         vm.init = function() {
             vm.model = model = employeeViewfullprofileModel;
             vm.model.scope = scope;
             vm.refForm = {};
             model.viewprofilearray = [];
             model.aboutmyself = {};
             model.personalinfo = {};
             model.basicinfo = [];
             model.selfProfileID = '';
             model.fullprofileshow = true;
             model.searchObjectquery = $location.search();
             model.updatepaymentllink = false;
             var meKey = Object.getOwnPropertyNames(model.searchObjectquery)[0];
             var meKeyempid = Object.getOwnPropertyNames(model.searchObjectquery)[1];
             model.selfProfileID = model.searchObjectquery[meKey];
             model.selfEmp = model.searchObjectquery[meKeyempid];
             if (model.selfProfileID) {
                 model.getprofileDataencryptedID(model.selfProfileID);
             }
         };


         vm.init();
     }
     angular
         .module('Kaakateeya')
         .controller('ViewfullprofileEmailCtrl', controller);
     controller.$inject = ['employeeViewfullprofilePrintModel', '$scope', '$location'];

 })(angular);
(function() {
    'use strict';

    function factory(http) {
        return {
            getEmpViewfullProfile: function(ProfileID, EmpID) {
                return http.get(app.apiroot183 + 'StaticPages/getCustomerViewAdminFullDetails', {
                    params: {
                        ProfileID: ProfileID,
                        EmpID: EmpID
                    }
                });
            },
            inbitdata: function(profileid, empid) {
                return http.get(app.apiroot183 + 'StaticPages/getInbitdataInfo', {
                    params: {
                        ProfileID: profileid,
                        empid: empid
                    }
                });
            },
            NoDataFoundDisplay: function(profileid) {
                return http.get(app.apiroot183 + 'StaticPages/getNoDataFoundDisplay', {
                    params: {
                        ProfileID: profileid
                    }
                });
            },
            getdecryptedProfileID: function(profileid) {
                return http.get(app.apiroot183 + 'StaticPages/getdecryptedProfileID', {
                    params: {
                        ProfileID: profileid
                    }
                });
            }
        };
    }
    angular
        .module('Kaakateeya')
        .factory('employeeViewfullprofilePrintservice', factory);
    factory.$inject = ['$http'];
})(angular);
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

app.factory('authSvc', ['$injector', 'Idle', 'alert', '$http', 'route', function($injector, Idle, alerts, $http, route) {
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
        sessionStorage.removeItem("missingStatus");
        sessionStorage.removeItem("localcustid");
        sessionStorage.removeItem("unpaidNotifyflag");
        sessionStorage.removeItem("loggedAscustomerPage");

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
            route.go('home', {});
        },
        login: function(username, password, empFlag) {
            var body = {
                Username: username,
                Password: password,
                iflag: empFlag ? empFlag : null
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

            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: (tocustid !== "" && tocustid !== undefined) ? tocustid : null, CustID: (logcustid !== "" && logcustid !== undefined) ? logcustid : null, RelationshipID: selfflag } });
        },
        Viewprofileflags: function(logcustid, tocustid) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: (logcustid !== "" && logcustid !== undefined) ? logcustid : null, ToCustID: (tocustid !== "" && tocustid !== undefined) ? tocustid : null } });
        },
        communicationhistorychats: function(obj) {
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        },
        acceptrejectexpressinterest: function(fromid, toid, logid, type, empid) {

            return http.get(app.apiroot + 'DashboardRequest/getInsertCustomerExpressinterest', { params: { fromcustid: fromid, tocustid: toid, logID: logid, interstTYpe: type, empid: "" } });
        },
        photopasswordactioninsert: function(fromcustid, tocustid, type) {
            return http.get(app.apiroot + 'StaticPages/getPhotopasswordAcceptReject', { params: { FromcustID: fromcustid, TocustID: tocustid, Accept_Reject: type } });
        },
        getprofilegrade: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getprofileGrade', { params: { CustID: custid } });
        },
        getphotoslideimages: function(custid) {
            return http.get(app.apiroot + 'StaticPages/GetPhotoSlideImages', { params: { CustID: custid } });
        },
        getNotifications: function(obj) {
            return http.get(app.apiroot + 'StaticPages/getCust_NotificationDetails', { params: { Cust_NotificationID: obj.Cust_NotificationID, CustID: obj.CustID, Startindex: obj.Startindex, EndIndex: obj.EndIndex } });
        }
    };
}]);
(function(app) {
    'use strict';
    app.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            request: function(config) {
                //if (config.url.match(apiRe)) {
                $rootScope.loading = true;
                // }
                config.headers = config.headers || {};
                return config;
            },
            responseError: function(rejection) {
                $rootScope.loading = false;
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            },
            response: function(config) {
                $rootScope.loading = false;
                var deferred = $q.defer();
                deferred.resolve(config);
                return deferred.promise;
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
app.factory('forgetPwdservices', ["$http", function(http) {
    return {
        getstatuscustid: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getCheckForgotPasswordStatus', { params: { StrCustID: custid } });
        },
        getChangePassword: function(custid, Password) {
            return http.get(app.apiroot + 'StaticPages/getChangePassword', { params: { StrCustID: custid, Password: Password } });
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
app.service('helperservice', function() {
    this.checkstringvalue = function(value) {
        if (value !== null && value !== "" && value !== undefined) {
            return true;
        } else {
            return false;
        }
    };
    this.checkarraylength = function(value) {
        if (value !== null && value !== "" && value !== undefined && value.length > 0) {
            return true;
        } else {
            return false;
        }
    };
});
app.factory('loggedascustomerservice', ['$http', function(http) {
    return {
        getcheckpassword: function(employeeusername, employeepassword) {
            return http.get(app.apiroot + 'Registration/getCheckUserPwd', { params: { Username: employeeusername, Password: employeepassword } });
        },
        getcustomerpassword: function(customerpassword) {
            return http.get(app.apiroot + 'Registration/getPassword', { params: { Username: customerpassword } });
        },
        getcustomerinfo: function(customerprofileid, customerpassword, iflag) {
            return http.get(app.apiroot + 'Registration/getloginCustinformation', { params: { Username: customerprofileid, Password: customerpassword, iflag: iflag } });
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
app.factory('angularselects', ["SelectBindserviceApp", "arrayConstants", function(service, cons) {
    return {
        countrySelect: function() {
            var Country = [];
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
            return http.get(app.apiroot + 'StaticPages/getDeletecustomerProfilesettings', { params: { ProfileID: ProfileID, Narrtion: Narrtion } });
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
app.service('route', ['$state', function($state) {
    this.go = function(stateName, param) {
        $state.go(stateName, param);
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
        newProfessionCat: function() {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "NewProfessionCat", dependencyValue: '' } });
        },
        getCustomerBindings: function() {
            return http.get(app.apiroot + 'StaticPages/getCustomerBindings', { params: {} });
        }

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
        maskclasspartner: function(logphotostatus, photo, photocount, custid, photostatuslogin) {
            var photoclass = "";
            var PhotoMaskDiv;
            if (custid !== undefined && custid !== null && custid !== "") {
                if (logphotostatus !== "null" && logphotostatus !== null && photo.indexOf("ApplicationPhoto") !== -1)
                    PhotoMaskDiv = logphotostatus !== true && logphotostatus !== "true" && photo.indexOf("ApplicationPhoto") !== -1 ? "cssMaskdivrev clearfix" : "";
                else if (logphotostatus !== "null" && logphotostatus !== null && photo.indexOf("ThumbNail") !== -1)
                    PhotoMaskDiv = logphotostatus !== true && logphotostatus !== "true" && photo.indexOf("ThumbNail") !== -1 ? "cssMaskdivrev clearfix" : "";
                else {
                    if ((logphotostatus === "null" || logphotostatus === null) && photostatuslogin !== undefined && photostatuslogin.toLowerCase().indexOf("_rev") !== -1) {
                        PhotoMaskDiv = photo.indexOf("ApplicationPhoto") !== -1 || photo.indexOf("ThumbNail") !== -1 ? "cssMaskdivrev clearfix" : "";
                    } else {
                        PhotoMaskDiv = photo.indexOf("ApplicationPhoto") !== -1 || photo.indexOf("ThumbNail") !== -1 ? "cssMaskdiv clearfix" : "";
                    }
                }
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
        },
        Paymentinsert: function(Mobj) {
            return http.post(app.apiroot + 'Payment/InsertPaymentDetails', Mobj);
        },
        getpaymentnew: function(custid) {
            return http.get(app.apiroot + 'Payment/getCustomerPaymentPackagesDisplay', { params: { LcustID: custid } });
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
        // getExpressIntrstfullprofile: function(toprofileid, strFromProfileID, empid) {
        //     return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { ToProfileID: toprofileid, FromProfileID: strFromProfileID, EmpID: empid } });
        // },
        // getExpressIntrstfullprofile: function(toprofileid, strFromProfileID, empid) {
        //     return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { tocustid: toprofileid, fromcustid: strFromProfileID, EmpID: empid } });
        // },
        getExpressIntrstfullprofile: function(toprofileid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { ToProfileID: toprofileid, EmpID: empid } });
        },
        getExpressinterst_bookmark_ignore_data: function(Loggedcustid, ToCustID) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterst_bookmark_ignore_data', { params: { Loggedcustid: Loggedcustid, ToCustID: (ToCustID !== "") && (ToCustID !== undefined) ? ToCustID : null } });
        },
        getViewFullProfileMail: function(OriginalString) {
            return http.get(app.apiroot + 'StaticPages/getViewFullProfileMail', { params: { OriginalString: OriginalString } });
        },
        UpdateExpressIntrestViewfullprofile: function(obj) {
            return http.post(app.apiroot + 'StaticPages/UpdateExpressIntrestViewfullprofile', obj);
        },
        getCustomerApplicationErroLog: function(ErrorMessage, CustID, PageName, Type) {
            return http.get(app.apiroot + 'StaticPages/getCustomerApplicationErroLog', { params: { ErrorMessage: (ErrorMessage !== null && ErrorMessage !== undefined && ErrorMessage !== "") ? ErrorMessage : "Not Defined", CustID: CustID, PageName: (PageName !== null && PageName !== undefined && PageName !== "") ? PageName : "Not Defined", Type: (Type !== null && Type !== undefined && Type !== "") ? Type : "Not Defined" } });
        },
        getpaidstatusforviewprfile: function(custid) {
            return http.get(app.apiroot + 'Payment/getCustomerPaymentStatus', { params: { CustomerCustID: custid } });
        },
        Viewprofilepartial: function(toprofileid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofilepartial', { params: { ToProfileID: toprofileid, EmpID: empid } });
        },
        getExpressIntrstfullprofilepaidandunpaid: function(fromprofileid, tocustid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofilepaidandunpaid', { params: { fromProfileID: fromprofileid, toustid: tocustid, EmpID: empid } });
        }

    };
}]);