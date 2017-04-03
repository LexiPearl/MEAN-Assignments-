function $Dojo(id) {
    this.myId = document.getElementById(id);
    this.click = function (callback) {
        this.myId.addEventListener("click", callback);
    };


    this.hover = function (hoverin, hoverout) {
        this.myId.addEventListener("mounseenter", hoverin);
        this.myId.addEventListener("mouseleave", hoverout);
    };
}


// var $Dojo = (function(selector) {
//     'use strict';
//     function DomElement(ele) {
//
//     }
//     function Dojo(selector) {
//         return new DomElement(element)
//     }
//     return Dojo
// }()); //pass some selector
//
// // $("div").click(function)
//
// function $(selector){
//     return {
//         // 'click':function()
//     }
// }
//
// function objectMaker(){
//     return {
//         click: function(name){
//             name()
//         }
//     }
// }
// var obj = objectMaker()
//
//
// var x=obj.click("Lexi")
