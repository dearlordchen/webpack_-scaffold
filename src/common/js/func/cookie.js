/**
 * Created by lordchen on 16/5/24.
 */
define("cookie", function(require, exports, module) {
    // 废弃方法，不推荐使用
    exports.get = getCookie;
    // 废弃方法，不推荐使用
    exports.set = setCookie;

    // 推荐方法
    exports.getC = getCookieV2;
    // 推荐方法
    exports.setC = setCookieV2;
    exports.del = delCookie;

    // 废弃方法，不推荐使用
    function getCookie(name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
            val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : "";
    }

    function getCookieV2(name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
            val = document.cookie.match(reg);
        return val ? (val[2] ? decodeURIComponent(val[2]) : "") : "";
    }

    // 废弃方法，不推荐使用
    function setCookie(name, value, expires, path, domain, secure) {
        var exp = new Date(),
            expires = arguments[2] || null,
            path = arguments[3] || "/",
            domain = arguments[4] || null,
            secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }

    function setCookieV2(name, value, expires, path, domain, secure) {
        var exp = new Date(),
            expires = arguments[2] || null,
            path = arguments[3] || "/",
            domain = arguments[4] || null,
            secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + encodeURIComponent(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }

    function delCookie(name, path, domain, secure) {
        var value = getCookie(name);
        if (value != null) {
            var exp = new Date();
            exp.setMinutes(exp.getMinutes() - 1000);
            path = path || "/";
            document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
        }
    }
});