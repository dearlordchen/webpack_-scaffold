/**
 * Created by lordchen on 16/5/24.
 */

require('./index.scss')

exports.init = function($dom){

    var template = require('./stoo.html');
    var html = template({
        "stooges": [
            { "name": {"cc":["Moe","gg","hh"]} },
            { "name": "Larry" },
            { "name": "Curly" }
        ]
    });

     $dom.html(html)
     var $line = $('.line').click(function(e){
         var _this = $(this)
         alert(_this.html())
     })
}