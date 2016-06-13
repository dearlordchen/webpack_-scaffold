/**
 * Created by lordchen on 16/5/17.
 */

var d = require('date')
var ui_title = require('ui_title')
var ui_line = require('commonjs/ui/ui_line/')
//模块中显示引用zepto
var $ = require('zepto');
console.log(d.format(new Date(),'MM/DD YY'))
var cartImg = require('../img/cart.png');
$("#cart").attr('src',cartImg)
$("#title").html(ui_title.render)
ui_line.init($("#cont"))
