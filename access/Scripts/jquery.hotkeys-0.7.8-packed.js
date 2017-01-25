(function (B) {
    B.fn.__bind__ = B.fn.bind; B.fn.__unbind__ = B.fn.unbind;
    B.fn.__find__ = B.fn.find; var A = {
        version: "0.7.8", override: /keydown|keypress|keyup/g, triggersMap: {},
        specialKeys: { 27: "esc", 9: "tab", 32: "space", 13: "return", 8: "backspace", 145: "scroll", 20: "capslock", 144: "numlock", 19: "pause", 45: "insert", 36: "home", 46: "del", 35: "end", 33: "pageup", 34: "pagedown", 37: "left", 38: "up", 39: "right", 40: "down", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12" }, shiftNums: { "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ":", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|" }, newTrigger: function (E, D, F) { var C = {}; C[E] = {}; C[E][D] = { cb: F, disableInInput: false }; return C }
    }; if (B.browser.mozilla) {
        A.specialKeys = B.extend(A.specialKeys,
            { 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" })
    } B.fn.find = function (C) { this.query = C; return B.fn.__find__.apply(this, arguments) };
    B.fn.unbind = function (H, E, G) {
        if (B.isFunction(E)) { G = E; E = null } if (E && typeof E === "string")
        { var F = ((this.prevObject && this.prevObject.query) || (this[0].id && this[0].id) || this[0]).toString(); var D = H.split(" "); for (var C = 0; C < D.length; C++) { delete A.triggersMap[F][D[C]][E] } } return this.__unbind__(H, G)
    }; B.fn.bind = function (J, F, K) {
        var H = J.match(A.override); if (B.isFunction(F) || !H)
        { return this.__bind__(J, F, K) } else { var N = null, I = B.trim(J.replace(A.override, "")); if (I) { N = this.__bind__(I, F, K) } if (typeof F === "string") { F = { combi: F } } if (F.combi) { for (var M = 0; M < H.length; M++) { var D = H[M]; var G = F.combi.toLowerCase(), E = A.newTrigger(D, G, K), L = ((this.prevObject && this.prevObject.query) || (this[0].id && this[0].id) || this[0]).toString(); E[D][G].disableInInput = F.disableInInput; if (!A.triggersMap[L]) { A.triggersMap[L] = E } else { if (!A.triggersMap[L][D]) { A.triggersMap[L][D] = E[D] } } var C = A.triggersMap[L][D][G]; if (!C) { A.triggersMap[L][D][G] = [E[D][G]] } else { if (C.constructor !== Array) { A.triggersMap[L][D][G] = [C] } else { A.triggersMap[L][D][G][C.length] = E[D][G] } } this.each(function () { var O = B(this); if (O.attr("hkId") && O.attr("hkId") !== L) { L = O.attr("hkId") + ";" + L } O.attr("hkId", L) }); N = this.__bind__(H.join(" "), F, A.handler) } } return N }
    }; A.findElement = function (C) {
        if (!B(C).attr("hkId")) {
            if (B.browser.opera || B.browser.safari)
            { while (!B(C).attr("hkId") && C.parentNode) { C = C.parentNode } }
        } return C
    }; A.handler = function (E) {
        var O = A.findElement(E.currentTarget), I = B(O), D = I.attr("hkId");
        if (D) {
            D = D.split(";"); var G = E.which, Q = E.type, P = A.specialKeys[G], N = !P && String.fromCharCode(G).toLowerCase(),
                H = E.shiftKey, C = E.ctrlKey, M = E.altKey || E.originalEvent.altKey, F = null; for (var R = 0; R < D.length; R++)
                { if (A.triggersMap[D[R]][Q]) { F = A.triggersMap[D[R]][Q]; break } } if (F) {
                    var J; if (!H && !C && !M) { J = F[P] || (N && F[N]) }
                    else {
                        var L = ""; if (M) { L += "alt+" } if (C) { L += "ctrl+" } if (H) { L += "shift+" } J = F[L + P]; if (!J)
                        { if (N) { J = F[L + N] || F[L + A.shiftNums[N]] || (L === "shift+" && F[A.shiftNums[N]]) } }
                    } if (J) {
                        var S = false; for (var R = 0; R < J.length; R++) {
                            if (J[R].disableInInput)
                            {
                                var K = B(E.target); if (I.is("input") || I.is("textarea") || K.is("input") || K.is("textarea"))
                                { return true }
                            } S = S || J[R].cb.apply(this, [E])
                        } return S
                    }
                }
        }
    }; window.hotkeys = A; return B
})(jQuery);