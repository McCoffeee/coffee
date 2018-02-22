    function get(id) {
        return document.getElementById(id);
    }

//  Modal   
    // Modal Variables    
    var modal = document.getElementById('pageinfo_modal');
    var modal_button = document.getElementById("modal_button");
    var span = document.getElementsByClassName("close")[0];

    // Modal functions
        modal_button.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

// Function for sticky nav and menu
    window.onscroll = function() {sticky_top()};

    function sticky_top() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            get("top_div").style.position = "fixed";
            get("top_div").style.top = "0px";
            get("top_div").style.left = "0px";
            
            get("board_buttons").className = "board_buttons_scroll";
            document.getElementsByClassName("menu_p").style.fontSize = "30px";

            console.log("Sticking to top!")
        } else {
            get("top_div").style.position = "absolute";
            get("top_div").style.top = "";
            get("top_div").style.left = "";
            
            get("board_buttons").className = "board_buttons_scroll";
            document.getElementsByClassName("menu_p").style.fontSize = "";
            console.log("Unsticking")
        }
    }


// Functions for posts
    get("new_post_button").onclick = function() {new_post()};

    
    function new_post(){
        var output = get("user_post_div");
        var post_data = get("new_post_text").value
        console.log("Making New Post");
        output.innerHTML += "<div class='post_styles'>" + post_data +   "</div>";

        

    }