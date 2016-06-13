/**
 * Created by lordchen on 16/5/17.
 */
//var $ = require('jquery');

require('../css/c.scss');
var bar = require('../module/bar');
var template = require('../mustache/stoo.html');
var html = template({
    "stooges": [
        { "name": "Moe123667788901" },
        { "name": "Larry" },
        { "name": "Curly" }
    ]
});

alert(bar.get());
$('.c').html('gggcdefghehehegogogodddlalala');
$('#stoos').html(html);
