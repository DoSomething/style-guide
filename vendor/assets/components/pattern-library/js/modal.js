//
//
//  **Show/hide modals.** Link should have `.js-trigger-modal` class, and
// it's `href` should point to the hash of the modal. By convention, the
// modal ID should be prefixed with `modal--`.
//
//

(function($) {
  "use strict";

  $(document).ready(function() {
    // Trigger modal on click:
    $(".js-trigger-modal").on("click", function(e) {
      e.preventDefault();

      // We find the modal based on the ID in the link"s `href`. For example,
      // `<a href="#modal--faq">Click me</a>` would open `<div id="modal--faq"></div>`.
      var href = $(e.target.hash);

      $("body").addClass("modal-open");

      $(href).show();

      if(Modernizr.cssanimations) {
        $(href).addClass("animated fade-in");
        $(href).find(".modal-content").addClass("animated fade-in-up");
      }

      // Close modal when "x" is clicked:
      $(".js-close-modal").on("click", function(e) {
        e.preventDefault();
        var modal = $(this).closest(".modal");

        if(Modernizr.cssanimations) {
          modal.find(".modal-content").addClass("fade-out-down");
          modal.addClass("fade-out");

          $("body").removeClass("modal-open");

          modal.one("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() {
            modal.hide();

            modal.removeClass("animated fade-in fade-out");
            modal.find(".modal-content").removeClass("animated fade-in-up fade-out-down");
          });
        } else {
          modal.hide();
        }

      });
    });

  });

})(jQuery);
