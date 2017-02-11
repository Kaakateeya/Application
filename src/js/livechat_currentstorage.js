if (typeof(lhnAccountN) != 'undefined') { lhnAccountN = lhnAccountN.toLowerCase().replace("lhn", "");
    lhnHelpLink = document.getElementById("lhnHelp"); if (lhnHelpLink != null) { lhnHelpLink.style.position = "absolute";
        lhnHelpLink.style.left = "-9999px";
        lhnHelpLink.id = "lhnHelpDone"; } else { if (lhnAccountN.slice(-2) != "-1") { lhnAccountN = lhnAccountN + "-1"; } } if (!isNaN(lhnAccountN.replace("-1", ""))) {
        function addLHNButton(lhnbutton, lhntype, lhnJsHost, lhnAccountN) { element = document.getElementById('lhnContainer');
            element.id = 'lhnContainerDone'; if (lhntype == 'insert') { var lhnScript = document.createElement("a");
                lhnScript.href = "#";
                lhnScript.onclick = function() { OpenLHNChat(); return false; };
                lhnScript.innerHTML = '<img id="lhnchatimg" alt="Live Help" border="0" nocache src="' + lhnJsHost + 'www.livehelpnow.net/lhn/functions/imageserver.ashx?lhnid=' + lhnAccountN + '&amp;navname=&amp;java=&amp;referrer=&amp;pagetitle=&amp;pageurl=&amp;t=f&amp;zimg=' + lhnbutton + '&amp;d=0&amp;rndstr=999" />';
                element.insertBefore(lhnScript, element.firstChild); } else { var lhnScript = document.createElement("script");
                lhnScript.type = "text/javascript";
                lhnScript.src = lhnbutton;
                element.appendChild(lhnScript); } } var lhnChatPosition = typeof(lhnChatPosition) == 'undefined' ? "" : lhnChatPosition; var lhnScriptElement = document.getElementById("lhnscript"); var lhnContainer = document.createElement("div");
        lhnContainer.id = "lhnContainer";
        lhnContainer.style.textAlign = "center"; if (lhnChatPosition != "") { switch (lhnChatPosition) {
                case "topright":
                    lhnContainer.style.top = "10px";
                    lhnContainer.style.right = "10px";
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; break;
                case "topleft":
                    lhnContainer.style.top = "10px";
                    lhnContainer.style.left = "10px";
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; break;
                case "bottomright":
                    lhnContainer.style.bottom = "10px";
                    lhnContainer.style.right = "10px";
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; break;
                case "bottomleft":
                    lhnContainer.style.bottom = "10px";
                    lhnContainer.style.left = "10px";
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; break;
                case "righttab":
                    lhnContainer.style.top = (typeof(lhnChatPositionYVal) == 'undefined' ? 200 + "px" : lhnChatPositionYVal + "px");
                    lhnContainer.style.right = "0px";
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; break;
                case "custom":
                    lhnContainer.style.position = "fixed";
                    lhnContainer.style.zIndex = 9999; if (typeof(lhnChatPositionX) == 'undefined') { lhnChatPositionX = "left"; } if (typeof(lhnChatPositionXVal) == 'undefined') { lhnChatPositionXVal = 0; } if (typeof(lhnChatPositionY) == 'undefined') { lhnChatPositionY = "top"; } if (typeof(lhnChatPositionYVal) == 'undefined') { lhnChatPositionYVal = 0; } switch (lhnChatPositionX) {
                        case "right":
                            lhnContainer.style.right = lhnChatPositionXVal + "px"; break;
                        case "left":
                        default:
                            lhnContainer.style.left = lhnChatPositionXVal + "px"; break; } switch (lhnChatPositionY) {
                        case "bottom":
                            lhnContainer.style.bottom = lhnChatPositionYVal + "px"; break;
                        case "top":
                        default:
                            lhnContainer.style.top = lhnChatPositionYVal + "px"; break; } break; } } var lhnChatButtonContainer = document.createElement("div");
        lhnChatButtonContainer.id = "lhnChatButton";
        lhnContainer.appendChild(lhnChatButtonContainer); if (lhnAccountN.slice(-2) != "-1") { var lhnChatFooter = document.createElement("div");
            lhnChatFooter.style.fontSize = "10px";
            lhnContainer.appendChild(lhnChatFooter); var lhnChatFooterLink = document.createElement("a");
            lhnChatFooterLink.href = "http://www.LiveHelpNow.net/";
            lhnChatFooterLink.target = "_blank";
            lhnChatFooterLink.style.fontSize = "10px";
            lhnChatFooterLink.innerHTML = "Help Desk Software";
            lhnChatFooter.appendChild(lhnChatFooterLink); }
        lhnScriptElement.parentNode.insertBefore(lhnContainer, lhnScriptElement);
        lhnScriptElement.id = "lhnscriptDone"; var lhnScriptAppend = typeof(lhnScriptAppend) == 'undefined' ? '' : lhnScriptAppend;
        lhnAccountN = lhnAccountN.replace("-1", ""); if (lhnButtonCheck === undefined) { var lhnButtonCheck = 1; var lhnVersion = 5.3; var lhnButtonN = typeof(lhnButtonN) == 'undefined' ? 35 : lhnButtonN; var lhnJsHost = typeof(lhnJsHost) == 'undefined' ? (("https:" == document.location.protocol) ? "https://" : "http://") : lhnJsHost; var lhnInviteEnabled = typeof(lhnInviteEnabled) == 'undefined' ? 0 : lhnInviteEnabled; var lhnInviteChime = typeof(lhnInviteChime) == 'undefined' ? 0 : lhnInviteChime; var lhnInviteN = typeof(lhnInviteN) == 'undefined' ? 0 : lhnInviteN; var lhnWindowN = typeof(lhnWindowN) == 'undefined' ? 0 : lhnWindowN; var lhnDepartmentN = typeof(lhnDepartmentN) == 'undefined' ? 0 : lhnDepartmentN; var lhnCustomInvitation = typeof(lhnCustomInvitation) == 'undefined' ? '' : lhnCustomInvitation; var lhnCustom1 = typeof(lhnCustom1) == 'undefined' ? '' : lhnCustom1; var lhnCustom2 = typeof(lhnCustom2) == 'undefined' ? '' : lhnCustom2; var lhnCustom3 = typeof(lhnCustom3) == 'undefined' ? '' : lhnCustom3; var lhnTrackingEnabled = typeof(lhnTrackingEnabled) == 'undefined' ? 't' : lhnTrackingEnabled; var lhnScriptSrc = lhnJsHost + 'www.livehelpnow.net/lhn/scripts/livehelpnow.aspx?lhnid=' + lhnAccountN + '&iv=' + lhnInviteEnabled + '&ivid=' + lhnInviteN + '&d=' + lhnDepartmentN + '&ver=' + lhnVersion + '&rnd=' + Math.random();
            lhnScriptAppend += "lhnButtonN=" + lhnButtonN + ";addLHNButton('" + lhnScriptSrc + "', 'append', '" + lhnJsHost + "', " + lhnAccountN + ");"; var lhnButtonN1 = lhnButtonN; } else { var lhnButtonN2 = typeof(lhnButtonN) == 'undefined' ? 35 : lhnButtonN;
            lhnScriptAppend += "addLHNButton('" + lhnButtonN + "', 'insert', '" + lhnJsHost + "', " + lhnAccountN + ");";
            lhnButtonN2 = undefined;
            lhnButtonN = lhnButtonN1; } if (window.addEventListener) { if (!lhnFinished) { window.addEventListener('load', function() { eval(lhnScriptAppend); }); } var lhnFinished = true; } else { if (!lhnFinished) { window.attachEvent('onload', function() { eval(lhnScriptAppend); }); } var lhnFinished = true; } } else { console.log('LHN - Invalid Account Number provided (' + lhnAccountN.replace("-1", "") + ')'); } } else { console.log('LHN - An Account Number was not provided'); }