function get(id) {
    return document.getElementById(id);
}

//  Modal   
    // Modal Variables    
    var modal = get('pageinfo_modal');
    var modal_button = get("modal_button");
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
