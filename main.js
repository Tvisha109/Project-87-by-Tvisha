canvas = new fabric.Canvas("canvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("Untitled.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}

function block_update(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    })
}

window.addEventListener("keydown", keydown_fun)

function keydown_fun(e){
    keypresed = e.keyCode;
    console.log(keypresed)
    if(e.shiftKey == true && keypresed == "80"){
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if(e.shiftKey == true && keypresed == "77")
    {
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

if(keypresed == "38"){
    up();       
}

if(keypresed == "40"){
    down();       
}

if(keypresed == "37"){
    left();       
}

if(keypresed == "39"){
    right();       
}

if(keypresed == "70")
{
    new_image("ironman_face.png");
    console.log("f")
}

if(keypresed == "66"){
    new_image("spiderman_body.png")
    console.log("b")     
}

if(keypresed == "76"){
    new_image("hulk_legs.png")
    console.log("l")     
}

if(keypresed == "82"){
    new_image("thor_right_hand.png")
    console.log("r")     
}

if(keypresed == "72"){
    new_image("captain_america_left_hand.png")
    console.log("h")     
}

if(keypresed == "18"){
    alt()
    console.log("Alt")     
}

if(keypresed == "91"){
    Ctl()
    console.log("Ctl")     
}

if(keypresed == "27"){
    Esc()
    console.log("Esc")     
}
}