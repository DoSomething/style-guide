// Base JavaScript file
$(function() {
  // Call function to pin sticky nav
  NEUE.pinToTop();
  
  // Call ZeroClipboard for Flash-based copying to the user's clipboard
  var clipboard = new ZeroClipboard( $(".clipboard"), {
    moviePath: "./vendor/assets/components/zeroclipboard/ZeroClipboard.swf"
  });
})
