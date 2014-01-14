// Base JavaScript file
$(function() {
  // Call function to pin sticky nav
  NEUE.pinToTop();
  
  // Call ZeroClipboard for Flash-based copying to the user's clipboard
  var clipboard = new ZeroClipboard( $(".clipboard"), {
    moviePath: "./vendor/assets/components/zeroclipboard/ZeroClipboard.swf"
  });

  clipboard.on("load", function(client) {
    client.on( "complete", function(client, args) {
      // `this` is the element that was clicked
      this.style.display = "none";
      alert("Copied text to clipboard: " + args.text );
    });
  });
})
