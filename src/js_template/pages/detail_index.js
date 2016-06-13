/*
* @Author: dmyang
* @Date:   2015-08-05 00:25:43
* @Last Modified by:   dmyang
* @Last Modified time: 2016-03-17 19:23:15
*/

'use strict';

console.info('require page a.');

require('../css/a.scss');

// 直接使用npm模块
var _ = require('lodash');
var moment = require('moment');
var url = require('commonjs/url');
var report = require('commonjs/report');

var component = url.getQuery('component');

var bar = require('../lib/bar');
alert(bar.get()+'ccd');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
if('dialog' === component) {
    require.ensure([], function(require) {
        var dialog = require('commonjs/dialog');
        // todo ...

        $('#dialog').removeClass('none');
    });
}

if('toast' === component) {
    require.ensure([], function(require) {
        var toast = require('commonjs/toast');
        // todo ...1213456

        $('#toast').removeClass('none');
    });
}


var logoImg = require('../img/webpack.png');
var $logo = $('<img />').attr('src', logoImg);

Zepto('#logo').html($logo);
