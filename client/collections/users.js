var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.Collection.extend({
  url: '/users'
});