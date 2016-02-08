'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.url = 'http://jsonplaceholder.typicode.com' + options.url;
});


//Views
var UserList = require('./client/views/user-list');

//Models
var User = require('./client/models/user');

//Collections
var Users = require('./client/collections/users');

var userList = new UserList();