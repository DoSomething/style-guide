// Base JavaScript file
$(function() {
  // Toggle navigation visibility on ☰ click
  $('#toggle').on('click', function() {
    $('.nav').slideToggle();
  });

  // Call function to pin sticky nav
  NEUE.pinToTop();
  
  // Call ZeroClipboard for Flash-based copying to the user's clipboard
  var clipboard = new ZeroClipboard( $(".clipboard"), {
    moviePath: "./vendor/assets/components/zeroclipboard/ZeroClipboard.swf"
  });
})
