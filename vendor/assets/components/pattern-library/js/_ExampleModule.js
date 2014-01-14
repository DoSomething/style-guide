/*global _ */

//
//
// An example code module. Example usage:
//
// ```javascript
// window.DS.ExampleModule.initialize(<JQuery element>, {
//   initialColor: "blue"
// });
//
// window.DS.ExampleModule.getStatus();
// ```
//
//

var DS = DS || {};

(function($) {
  "use strict";


  window.DS.ExampleModule = window.NEUE.BaseModule.extend({
    defaultOptions: {
      initialColor: "pink"
    },

    // #### Events: ####
    Events: {
      ".js-example-module-color-btn click": "showColor",
    },

    // #### State Variables: ####
    // - user: name of the current user
    // - color: holds current color
    // - fruit: holds current fruit

    // #### Views: ####
    // - $el
    // - $colorView

    // #### Templates: ####
    Templates: {
      colorView: "#template--example-color"
    },

    // #### Initialization: ####
    // Sets up everything the Location Finder module needs to function.
    _initialize: function() {
      var _this = this;
      _.bindAll(this, "setColor", "showColor", "resetColor");

      // We can either set a bunch of initial state values using the `reset`
      // method, or just add them as needed with `set`.
      this.State.reset({
        user: "Bill",
        color: "blue",
        fruit: "banana"
      });

      // Create view containers:
      this.Views.$colorView = $("<div/>", { className: "color-container" });

      this.State.color = this.Options.initialColor;

      $(document).ready(function() {
        // We'll append our views to the given element.
        _this.Views.$colorView.appendTo(_this.$el);
      });
    },

    // #### Set Color: ####
    // A simple setter method.
    setColor: function(color) {
      this.State.color = color;
    },

    // #### Show Color: ####
    // Shows the current color.
    showColor: function() {
      this.Views.$colorView.html( this.Templates.colorView({ color: this.State.color }) );
    },

    // ##### Reset Color: #####
    resetColor: function() {
      this.State.color = this.Options.initialColor;
    },
  });
})(jQuery);
