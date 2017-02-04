/*
CONFIGURATION
*/
var map = {
    'driver': {
        'lt': 'Reverse', // left trigger
        'rt': 'Forward', // right trigger
        'lb': 'Tote down', // left bumper
        'rb': 'Tote up', // right bumper
        'a' : 'Speed boost',
        'b' : 'Eject wheels', 
        'x' : 'None',
        'y' : 'None',
        'ls': 'Arcade', // left stick
        'rs': 'Slow arcade', // right stick
        'up'    : 'Shift up', // dpad up
        'down'  : 'Shift down', // dpad down
        'left'  : 'None', // dpad left
        'right' : 'None', // dpad right
        'back'  : 'Brake',
        'start' : 'Vision'
    },
    'co': {
        'lt': 'Intake ball',
        'rt': 'Shoot ball',
        'lb': 'Intake Gear',
        'rb': 'Eject Gear',
        'a' : 'Claw down',
        'b' : 'Claw up',
        'x' : 'Open claw',
        'y' : 'Close claw',
        'ls': 'Climb',
        'rs': 'Pivot camera',
        'up'    : 'Move forward',
        'down'  : 'Move backwards',
        'left'  : 'Strafe left',
        'right' : 'Strafe right',
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