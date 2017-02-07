/*
CONFIGURATION
*/
var map = {
    'driver': {
        'lt': 'None', // left trigger
        'rt': 'None', // right trigger
        'lb': 'Rollers in', // left bumper
        'rb': 'Rollers out', // right bumper
        'a' : 'Claw Down',
        'b' : 'Claw Up', 
        'x' : 'Claw Close',
        'y' : 'Claw Open',
        'ls': 'Arcade (press for drop drive)', // left stick
        'rs': 'Slow arcade', // right stick
        'up'    : 'None', // dpad up
        'down'  : 'None', // dpad down
        'left'  : 'None', // dpad left
        'right' : 'None', // dpad right
        'back'  : 'Retract pusher',
        'start' : 'Extend pusher'
    },
    'co': {
        'lt': 'None',
        'rt': 'None',
        'lb': 'None',
        'rb': 'None',
        'a' : 'None',
        'b' : 'None',
        'x' : 'None',
        'y' : 'None',
        'ls': 'None',
        'rs': 'None',
        'up'    : 'None',
        'down'  : 'None',
        'left'  : 'None',
        'right' : 'None',
        'back'  : 'None',
        'start' : 'None'
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
        $(`${cont} .ls`).text('LS: ' +current.ls);
        $(`${cont} .rs`).text('RS: ' +current.rs);
        $(`${cont} .up`).text('DPAD: ' +current.up);
        $(`${cont} .down`).text(current.down);
        $(`${cont} .left`).text(current.left);
        $(`${cont} .right`).text(current.right);
        $(`${cont} .back`).text('BACK: ' +current.back);
        $(`${cont} .start`).text('START: ' +current.start);
    }
});
