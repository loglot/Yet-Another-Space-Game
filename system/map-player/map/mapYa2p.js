import { Hitbox } from "../hitbox.js"
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
export class Map{
    map = []
    fillColor = ["#aaa", "#000", "#0f0f0f", "#88985b"]
    strokeColor = ["rgba(0,0,0,0)","white","rgba(0,0,0,0)","#4d5966"]

    game
    constructor(game){
        this.makeMap()
        this.game = game
    }
    makeMap(){
        this.map[this.map.length] = new Hitbox(-1010, 561, 3496, 1550);
        this.map[this.map.length] = new Hitbox(-2452,-3521,2564,5660 )
        this.map[this.map.length] = new Hitbox(-101,-1800,2239,1985 )
        this.map[this.map.length] = new Hitbox(3244,562,2582,1485 )
        this.map[this.map.length] = new Hitbox(2030,-1824,2437,1555 )
        this.map[this.map.length] = new Hitbox(3617,-1733,1672,1917 )
        this.map[this.map.length] = new Hitbox(5606,-89,2138,249 )
        this.map[this.map.length] = new Hitbox(5169,-1733,1066,1321 )
        this.map[this.map.length] = new Hitbox(5512,1868,1388,163 )
        this.map[this.map.length] = new Hitbox(6038,1720,126,165 ) 
        this.map[this.map.length] = new Hitbox(6528,1722,133,161 ) 
        this.map[this.map.length] = new Hitbox(6789,1869,611,156 )
        this.map[this.map.length] = new Hitbox(6945,1727,133,211 )
        this.map[this.map.length] = new Hitbox(5653,905,2045,639 )
        this.map[this.map.length] = new Hitbox(6209,648,170,89 )
        this.map[this.map.length] = new Hitbox(6868,653,227,94 )
        this.map[this.map.length] = new Hitbox(6702,-2508,971,2490 )
        this.map[this.map.length] = new Hitbox(7366,560,1370,1444 )
        this.map[this.map.length] = new Hitbox(7598,-2395,753,2554 )
        this.map[this.map.length] = new Hitbox(8719,-591,953,2631 )
        this.map[this.map.length] = new Hitbox(8154,-2472,1534,1496 )
        this.map[this.map.length] = new Hitbox(9616,-590,2043,2439 )
        this.map[this.map.length] = new Hitbox(9596,-1129,220,153 )
        this.map[this.map.length] = new Hitbox(10436,-2094,822,1645 )
        this.map[this.map.length] = new Hitbox(10249,-1125,224,580 )
        this.map[this.map.length] = new Hitbox(10248,-1645,229,188 )
        this.map[this.map.length] = new Hitbox(9595,-2080,231,216 )
        this.map[this.map.length] = new Hitbox(10248,-1744,250,390 )
        this.map[this.map.length] = new Hitbox(10253,-2134,1005,146 )
        this.map[this.map.length] = new Hitbox(9536,-1586,311,273 )
        this.map[this.map.length] = new Hitbox(8150,-3204,1538,796 ) 
        this.map[this.map.length] = new Hitbox(9226,-4165,2042,1434 )
        this.map[this.map.length] = new Hitbox(7337,-4341,2020,1397 )
        this.map[this.map.length] = new Hitbox(8672,-591,69,1231 )
        this.map[this.map.length] = new Hitbox(11188,-1339,1789,1060 )
        this.map[this.map.length] = new Hitbox(11533,-1518,206,252 )
        this.map[this.map.length] = new Hitbox(11933,-1518,229,202 )
        this.map[this.map.length] = new Hitbox(12347,-1520,281,195 )
        this.map[this.map.length] = new Hitbox(10991,-2134,2073,926 ) 
        this.map[this.map.length] = new Hitbox(13050,-2136,2041,1128 )
        this.map[this.map.length] = new Hitbox(11073,-4835,2869,1436 )
        this.map[this.map.length] = new Hitbox(13243,-4601,1383,1873 )
        this.map[this.map.length] = new Hitbox(15019,-2909,737,1490 )
        this.map[this.map.length] = new Hitbox(14419,-4602,1358,1152 )
        this.map[this.map.length] = new Hitbox(15091,-2909,1591,1819 )
        this.map[this.map.length] = new Hitbox(14468,-5355,3131,986 )
        this.map[this.map.length] = new Hitbox(16429,-3947,1202,1144 )
        this.map[this.map.length] = new Hitbox(16348,-3947,117,96 ) 
        this.map[this.map.length] = new Hitbox(14516,-3318,1383,96 )
        this.map[this.map.length] = new Hitbox(13244,-2867,1382,382 )
        this.map[this.map.length] = new Hitbox(14588,-3546,1190,318 ) // 50
        this.map[this.map.length] = new Hitbox(11150,-2756,119,124 )
        this.map[this.map.length] = new Hitbox(16571,-2920,1058,3786 )
        this.map[this.map.length] = new Hitbox(14647,-1214,1943,2224 )
        this.map[this.map.length] = new Hitbox(17610,-3946,110,94 )
        this.map[this.map.length] = new Hitbox(18444,-6141,1980,7010 )
        this.map[this.map.length] = new Hitbox(18444,-9851,2195,10720 )
        this.map[this.map.length] = new Hitbox(16334,-9838,1265,3962 )
        this.map[this.map.length] = new Hitbox(17593,-5980,108,105 )
        this.map[this.map.length] = new Hitbox(14468,-6327,1274,1026 )
        this.map[this.map.length] = new Hitbox(15687,-6327,142,105 )
        this.map[this.map.length] = new Hitbox(16252,-5972,115,96 )
        this.map[this.map.length] = new Hitbox(14453,-8067,1937,1264 )
        this.map[this.map.length] = new Hitbox(11074,-5413,3604,915 )
        this.map[this.map.length] = new Hitbox(13504,-6057,229,716 )
        this.map[this.map.length] = new Hitbox(13436,-6108,368,128 )
        this.map[this.map.length] = new Hitbox(13492,-8551,254,2004 )
        this.map[this.map.length] = new Hitbox(13424,-6660,382,124 )
        this.map[this.map.length] = new Hitbox(12731,-6171,320,112 )
        this.map[this.map.length] = new Hitbox(12800,-8877,182,2737 )
        this.map[this.map.length] = new Hitbox(11926,-5959,215,570 )
        this.map[this.map.length] = new Hitbox(11876,-6014,341,110 )
        this.map[this.map.length] = new Hitbox(11876,-6517,339,119 )
        this.map[this.map.length] = new Hitbox(11867,-7000,348,126 )
        this.map[this.map.length] = new Hitbox(11952,-6938,190,499 )
        this.map[this.map.length] = new Hitbox(11874,-7488,344,108 )
        this.map[this.map.length] = new Hitbox(11959,-8930,194,1479 )
        this.map[this.map.length] = new Hitbox(12003,-8871,889,860 )
        this.map[this.map.length] = new Hitbox(12944,-8886,799,1706 )
        this.map[this.map.length] = new Hitbox(14383,-6328,107,103 )
        this.map[this.map.length] = new Hitbox(14385,-6908,188,105 )
        this.map[this.map.length] = new Hitbox(14454,-8710,1936,701 )
        this.map[this.map.length] = new Hitbox(7337,-5413,4206,2080 )
        this.map[this.map.length] = new Hitbox(4966,-3088,3343,942 )
        this.map[this.map.length] = new Hitbox(11026,-7362,154,355 )
        this.map[this.map.length] = new Hitbox(9537,-7296,1521,215 )
        this.map[this.map.length] = new Hitbox(9448,-7360,160,348 )
        this.map[this.map.length] = new Hitbox(10205,-7202,189,635 )
        this.map[this.map.length] = new Hitbox(10153,-6646,312,130 )
        this.map[this.map.length] = new Hitbox(10447,-9050,201,1809 )
        this.map[this.map.length] = new Hitbox(10581,-9050,1430,1240 )
        this.map[this.map.length] = new Hitbox(9855,-8588,664,202 )
        this.map[this.map.length] = new Hitbox(9855,-8581,183,607 )
        this.map[this.map.length] = new Hitbox(9788,-8013,323,147 )
        this.map[this.map.length] = new Hitbox(10449,-12262,3290,3494 )
        this.map[this.map.length] = new Hitbox(9211,-9929,1320,151 )
        this.map[this.map.length] = new Hitbox(9211,-9862,151,632 )
        this.map[this.map.length] = new Hitbox(9153,-9323,257,146 )
        this.map[this.map.length] = new Hitbox(8086,-11087,2482,1348 )
        this.map[this.map.length] = new Hitbox(7391,-8806,945,227 )
        this.map[this.map.length] = new Hitbox(5278,-8640,2806,6079 ) // 100
        this.map[this.map.length] = new Hitbox(5277,-8807,2179,313 )
        this.map[this.map.length] = new Hitbox(5278,-9491,2133,770 )
        this.map[this.map.length] = new Hitbox(8087,-9776,124,135 )
        this.map[this.map.length] = new Hitbox(6421,-11597,1739,1563 )
        this.map[this.map.length] = new Hitbox(7662,-12639,3026,1694 )
        this.map[this.map.length] = new Hitbox(11125,-3551,2358,241 )
        this.map[this.map.length] = new Hitbox(7378,-9489,89,64 )
        this.map[this.map.length] = new Hitbox(7378,-9489,142,108 )
        this.map[this.map.length] = new Hitbox(4054,-11594,1651,3434 )
        this.map[this.map.length] = new Hitbox(5605,-10839,488,144 )
        this.map[this.map.length] = new Hitbox(6419,-12552,668,1011 )
        this.map[this.map.length] = new Hitbox(4116,-12552,2971,482 )
        this.map[this.map.length] = new Hitbox(4117,-13385,2975,1090 )
    }
    draw(){
        //ctx.beginPath(
        ctx.beginPath()
        for(let i = 0; i < this.map.length; i++){

            this.map[i].tempDraw()
        }
        //ctx.fill()
        //ctx.lineWidth = 8
        //ctx.strokeStyle = "ff0000"
        ctx.lineWidth = 32
        ctx.strokeStyle = this.strokeColor[this.game.menu.settings[0].var1]
        ctx.stroke()
        ctx.fillStyle = this.fillColor[this.game.menu.settings[0].var1]
        ctx.fill()
        ctx.closePath();
        //ctx.closePath();
    }
}