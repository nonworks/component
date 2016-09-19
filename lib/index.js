// Generated by CoffeeScript 1.10.0
(function() {
  var Component, Event, extend;

  Event = require('event');

  extend = require('extend');

  module.exports = Component = function() {
    var component;
    component = extend({}, Event());
    component.mixin = function(otherObj) {
      return extend(component, otherObj);
    };
    component.getEl = function() {
      throw "The method #getEl has not been implemented";
    };
    component.show = function() {
      return component.getEl().style.display = 'block';
    };
    component.hide = function() {
      return component.getEl().style.display = 'none';
    };
    return component;
  };

}).call(this);