app.controller("faqs", ['$scope', function (scope) {
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
app.directive('faqdirective', function () {
    return {
        link: function (scope, element, attrs) {

            scope.expanall = function () {
                scope.styleanswer = true;
                scope.activeClass = 'faqs_list_main_item active';
            };
            scope.collapseall = function () {
                debugger;
                scope.activeClass = 'faqs_list_main_item active'
                if (scope.activeClass === 'faqs_list_main_item active') {
                    // scope.removeClass('faqs_list_main_item active');
                    //scope.addClass('faqs_list_main_item');
                    scope.styleanswer = false;
                    scope.activeClass = 'faqs_list_main_item';
                }
                else {
                    scope.styleanswer = false;
                    scope.activeClass = 'faqs_list_main_item';
                }
            };
            scope.toggleans = function () {
                scope.styleanswer = !scope.styleanswer;
                scope.activeClass = scope.styleanswer === true ? 'faqs_list_main_item active' : 'faqs_list_main_item';

            };
        }
    };
});