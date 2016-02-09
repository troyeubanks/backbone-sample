var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var Users = require('../collections/users.js');

module.exports = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    this.render();
  },

  render: function() {
    var users = new Users();
    var self = this;

    users.fetch({
      success: function(users) {
        var template = _.template($('#user-list-template').html());
        self.$el.html(template({ users: users.models }));
      }
    });
  }
});