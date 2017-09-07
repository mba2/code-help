(function($) {
    console.log("... login script...");
    "use strict";
    
    var Login = {
        sectionsBtns : function() {
            $(".js-btn--sign").on("click", function(e) {
                e.preventDefault();                                 // AVOID THE DEFAULT BEHAVOIR OF BUTTONS/ANCHORS
                var target = "." + $(this).attr("data-target");     // SET THE TARGET'S CLASS NAME 
                $(".sign-area").hide()
                                .filter(target)
                                .show();
            });
        }
    
    };

    Login.sectionsBtns();
})(jQuery);