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

// Array functions
    var image = ["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.png"];

    var i = 10000;

    

   
    function changeImg(operation){
        if(operation == "next"){
            i++;
            get("image").src = image[i%image.length];
            console.log("add picture");
        }

        else if (operation == "last"){
            i--;
            get("image").src = image[i%image.length];
            console.log("remove picture");
        }
    }

    var left = [49, 50, 51, 52, 53]

    window.addEventListener('keydown', function(e){
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 37:
            case 65:
                console.log("back");
                changeImg('last');
                break;
            case 39:
            case 68:
                changeImg('next');
                break;
            default:
                if(left.includes(e.keyCode) == true){
                    changeImg('last')
                }
        }
    });

    stars_btn.onclick = function (){
        console.log("Showing Stars");

        get("1").style.display = "none";
        get("2").style.display = "none";
        get("3").style.display = "none";
        get("stjerne_div").style.display = "block";

        for(var i = 0; i<2000; i++){
            var stjerne = document.createElement("div");
            console.log(i);
            stjerne.className = "stjerne";
            stjerne.style.position = "absolute";
            stjerne.style.marginLeft = Math.random()*2010 + "px";
            stjerne.style.marginTop = Math.random()*780 + "px";
            stjerne.style.width = Math.random()*10+1+"px";
            stjerne.style.height = stjerne.style.width;
 
            get("photowall_div").style.display = "block";
            get("stjerne_div").appendChild(stjerne);
            get("stars_btn").style.display= "none";
            get("go_back_btn").style.display = "block";
        }
    }

    go_back_btn.onclick = function(){
        console.log("Showing cats");

        get("photowall_div").style.display = "grid";
        get("1").style.display = "block";
        get("2").style.display = "block";
        get("3").style.display = "block";
        get("stjerne_div").style.display = "none";
        get("stars_btn").style.display= "block";
        get("go_back_btn").style.display = "none";

    }
