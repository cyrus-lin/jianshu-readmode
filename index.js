// ==UserScript==
// @name               简书文章阅读模式
// @namespace        https://tampermonkey.net/
// @version             0.1
// @description       简书文章阅读模式
// @author             Cyrus
// @homepage         https://github.com/cyrus-lin/jianshu-readmode
// @match              https://www.jianshu.com/p/*
// @updateURL        https://raw.githubusercontent.com/cyrus-lin/jianshu-readmode/main/index.js
// @downloadURL    https://raw.githubusercontent.com/cyrus-lin/jianshu-readmode/main/index.js
// @grant               none
// ==/UserScript==

(function() {
    'use strict';

    if(location.hostname == "www.jianshu.com" && location.pathname.startsWith("/p/")) {
        document.querySelector("._2OwGUo").remove();                   // 移除右边栏目
        document.querySelector("._2xr8G8").parentNode.remove();    // 移除 footer
        document.querySelector("._3Pnjry").remove();                      // 移除左边的浮动按钮
        document.querySelector("._3VRLsv").setAttribute("style", "margin-left:0px;margin-right:0px;width:95%");  // 扩大正文区域
        document.querySelector("._gp-ck").setAttribute("style", "width:100%");
    }
})();
