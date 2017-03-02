/*
CONFIGURATION
*/
var map = {
    'driver': {
        'lt': 'None', // left trigger
        'rt': 'Hold drop', // right trigger
        'lb': 'None', // left bumper
        'rb': 'None', // right bumper
        'a' : 'Harvest Gear',
        'b' : 'Toggle Drop', 
        'x' : 'Score Gear',
        'y' : 'Release Gear',
        'ls': 'Arcade', // left stick
        'rs': 'Slow arcade', // right stick
        'up'    : 'Release Gear', // dpad up
        'down'  : 'Harvest Gear', // dpad down
        'left'  : 'Score Gear', // dpad left
        'right' : 'None', // dpad right
        'back'  : 'Move to peg (vision)',
        'start' : 'Harvest Gear'
    },
    'co': {
        'lt': 'None',
        'rt': 'None',
        'lb': 'Rollers in',
        'rb': 'Rollers out',
        'a' : 'Extend Pusher (Hold)',
        'b' : 'Toggle Drop',
        'x' : 'Arm Down (Hold)',
        'y' : 'Claw Open (Hold)',
        'ls': 'None',
        'rs': 'None',
        'up'    : 'None',
        'down'  : 'None',
        'left'  : 'None',
        'right' : 'None',
        'back'  : 'Climb Engage',
        'start' : 'Climb full speed'
    }
}

/*
DONT EDIT
*/
$(document).ready(()=> {
    for(i = 0; i <= 1; i++) {
        if(i == 0) {
            current = map.driver;
            cont = ".driver";
        } else {
            current = map.co;
            cont = ".co";
        }
        $(`${cont} .lt`).text('LT: ' + current.lt);
        $(`${cont} .rt`).text('RT: ' +current.rt);
        $(`${cont} .lb`).text('LB: ' +current.lb);
        $(`${cont} .rb`).text('RB: ' +current.rb);
        $(`${cont} .a`).text('A: ' +current.a);
        $(`${cont} .b`).text('B: ' +current.b);
        $(`${cont} .x`).text('X: ' +current.x);
        $(`${cont} .y`).text('Y: ' +current.y);
        $(`${cont} .ls`).html('LS: ' +current.ls);
        $(`${cont} .rs`).text('RS: ' +current.rs);
        $(`${cont} .up`).text('DPAD: ' +current.up);
        $(`${cont} .down`).text(current.down);
        $(`${cont} .left`).text(current.left);
        $(`${cont} .right`).text(current.right);
        $(`${cont} .back`).text('BACK: ' +current.back);
        $(`${cont} .start`).text('START: ' +current.start);
    }
});
