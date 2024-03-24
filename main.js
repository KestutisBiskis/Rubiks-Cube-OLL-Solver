function start(){
    top();
    side();
    mouseClickMethod(click);
    keyDownMethod(key);
 
}
var rectangles = [];
// draw the center 3x3
function top(){
    for(var i = 0; i < 240; i += 80){
        for(var j = 0; j < 240; j+= 80){
            var rect = new Rectangle(60, 60);
            rect.setPosition(85 + i,85 + j);
            rect.setColor("gray")
            rectangles.push(rect);
            add(rect);
        }
    }
}
// draw the outside buttons
function side(){
    for(var i = 0; i < 240; i += 80){
        for(var j = 0; j < 950; j += 270){
            var rect = new Rectangle(60, 30);
            rect.setPosition(85 + i, 45 + j);
            rect.setColor("gray");
            rectangles.push(rect);
            add(rect);
            
        }
    }
    for(var i = 0; i < 950; i += 270){
        for(var j = 0; j < 240; j += 80){
            var rect = new Rectangle(30, 60);
            rect.setPosition(45 + i, 85 + j);
            rect.setColor("gray");
            rectangles.push(rect);
            add(rect);
            
        }
    }
    
}
// make the buttons turn yellow when clicked
function click(e){
    var x = e.getX();
    var y = e.getY();
    
    for(var i = 0; i < rectangles.length; i++){
        var square = rectangles[i];
        if((x > square.getX() && x < square.getX() + 60) && (y > square.getY() && y < square.getY() + 60)){
            if(square.color == "yellow"){
                square.setColor("gray");
            }else if(square.color == "gray"){
                square.setColor("yellow");
            }else{
                break;
            }
        }
    }
}

var codes = ["0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0", "0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0", "0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0", "0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0", "1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0", "0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0", "0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0", "1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"];
// OLL algorithms from http://badmephisto.com/2LookOLL.pdf
var algos = ["(R U R' U) (R U2 R')", "(L' U' L U') (L' U2 L)", "F (R U R' U') (R U R' U') (R U R' U') F'", "R U2 (R2' U' R2 U') (R2' U2 R)", "R2 D (R' U2 R) D' (R' U2 R')", "(r U R' U') (r' F R F')", "F' (r U R' U') (r' F R)", "Already solved!"];
// pushes a 1 to the key array if the square is yellow and a 0 if its not
var text = new Text("", "15pt Arial")
text.setPosition(20, 400);
text.setColor("white");
var keys = [];
function key(e){
    if(e.key == "Enter"){
        for(var i = 0; i < rectangles.length; i++){
            
            var rect = rectangles[i];
            var color = rect.getColor();
            
            if(color == "yellow"){
                
                keys.push(1);
                
            }else{
                
                keys.push(0);
                
            }
        }
    }
    for(var i = 0; i < codes.length ; i++){
        if(keys.join(',') == codes[i]){
            text.setText(algos[i])
            break;
        }else{
            text.setText("Not an OLL case!");
        }
        
    }
    add(text);
    keys = [];
}
