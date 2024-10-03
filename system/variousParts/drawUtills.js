'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class DrawUtils {


    text(text, x, y, strokeColor = 'black', fillColor = 'white', drawerForCtxThingieWowICanHaveThisBeLongAndItsFine = ctx) {
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.font = '80px Sans-serif';
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.strokeStyle = strokeColor;
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.lineWidth = 8;
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.lineJoin="miter";
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.miterLimit=2;
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.strokeText(text, x, y);
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.fillStyle = fillColor;
        drawerForCtxThingieWowICanHaveThisBeLongAndItsFine.fillText(text, x, y);

    }
    Text(text, x, y, strokeColor = 'black', fillColor = 'white', Ctx = ctx, size = 80) {
        Ctx.font = `${size}px Sans-serif`;
        Ctx.strokeStyle = strokeColor;
        Ctx.lineWidth = 8;
        Ctx.lineJoin="miter";
        Ctx.miterLimit=2;
        Ctx.strokeText(text, x, y);
        Ctx.fillStyle = fillColor;
        Ctx.fillText(text, x, y);

    }

    // Text(text = "null", x = 100, y = 100, color = "white", width = 1500, size = 80, shadow = true, stroke = "black", linewidth = 8) {
    //     ctx.font = `${size}px Sans-serif`;
    //     ctx.lineWidth = linewidth;
    //     ctx.lineJoin="miter";
    //     ctx.miterLimit=2;
    //     var splitText = this.getLines(ctx, text, width)
    //     for(let i = 0; i < splitText.length; i++){
    //         if(shadow == true){
    //             ctx.strokeStyle = 'rgba(0,0,0,.1)';
    //             ctx.strokeText(splitText[i], x - 5+ this.xOffset, (y + 5) + (75*i));
    //         }
    //         ctx.strokeStyle = stroke;
            
    //         ctx.strokeText(splitText[i], x+ this.xOffset, y + (75*i));
    //         ctx.fillStyle = color;
    //         ctx.fillText(splitText[i], x+ this.xOffset, y + (75*i));
    //     }
    // }
    
    getLines(ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];
    
        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    Line(x1, y1, x2, y2, color, width = 20, outline = true, oColor = "black", weight = 5, drawTime = ctx, cap = "round") {
        if(outline) {
            drawTime.beginPath();
            drawTime.moveTo(x1, y1);
            drawTime.lineTo(x2, y2);
            drawTime.lineWidth = width + weight
            drawTime.strokeStyle = oColor;
            drawTime.lineCap = "round";
            drawTime.stroke();
            drawTime.closePath();
        }
        drawTime.beginPath();
        drawTime.moveTo(x1, y1);
        drawTime.lineTo(x2, y2);
        drawTime.lineWidth = width
        drawTime.strokeStyle = color;
        drawTime.lineCap = "round";
        drawTime.stroke();
        drawTime.closePath();

    }
 
    Circle(x, y, rad, color = "rgba(255, 0, 0, .5)", CTX = ctx) {
        CTX.beginPath();
        //ctx.arc()
        CTX.arc(x, y, rad, 0, 2 * Math.PI);
        CTX.fillStyle = color;
        CTX.fill();
        CTX.closePath();
        //this.Text("orb", 100, 100)
    }

    Rect(x = 0, y = 0, width = 0, height = 0, color = "#000000", drawingTool = ctx) {
        drawingTool.beginPath();
        drawingTool.rect(x, y, width, height) 
        drawingTool.fillStyle = color;
        drawingTool.fill()
        drawingTool.closePath();
    }
    Player(x = 0, y = 0, rotate=0, color = "#afbfaf") {
        ctx.beginPath();
        ctx.translate(x,y)
        ctx.rotate(rotate * Math.PI / 180)
        ctx.moveTo( - 40, +50)
        ctx.lineTo(0, -50)
        ctx.lineTo( + 40, +50)
        ctx.lineTo(0, +30)
        ctx.lineTo( - 40, +50)
        ctx.lineTo(0, -50)
        ctx.fillStyle = color
        ctx.strokeStyle = "#33363f"
        ctx.lineWidth = 15
        ctx.lineJoin = "round";
        
        ctx.stroke()
        ctx.fill()
        ctx.rotate(-(rotate * Math.PI / 180))
        ctx.translate(-x,-y)
        ctx.closePath();
    }

}