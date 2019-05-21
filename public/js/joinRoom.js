$(document).ready(() => {
    $.ajaxSetup({
        headers: {
          "auth-token": localStorage.getItem("auth-token")
        }
    });

    function updateCosmetics() {
    $.ajax({
      type: "get",
      url: "/users/updateCosmetics",
      success: function(data) {
        $("html").css(
          "background-image",
          `url(${data.activeBackground.imageLink})`
        );
      },
      error: function(e) {
        console.log(e.responseText);
      }
    });
  }

  updateCosmetics();

		/** Takes user gameLobby page */
    $("#submit").click(() => {
    	window.location.href="gameLobby";
    });

    /** Takes user back to main menu */
    $("#back").click(() => {
    	window.location.href="main";
		});
});
