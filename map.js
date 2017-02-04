var map = {
    'driver': {
        'lt': 'Reverse',
        'rt': 'Forward',
        'lb': 'Tote down',
        'rb': 'Tote up',
        'a' : 'Speed boost',
        'b' : 'Eject wheels',
        'x' : 'None',
        'y' : 'None',
        'ls': 'Arcade',
        'rs': 'Slow arcade',
        'up'    : 'Shift up',
        'down'  : 'Shift down',
        'left'  : 'None',
        'right' : 'None',
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

$(document).ready(()=> {
    for(i = 0; i <= 1; i++) {
        if(i == 0) {
            current = map.driver;
            cont = ".driver";
        } else {
            current = map.co;
            cont = ".co";
        }
        $(`${cont} .lt`).text(current.lt);
        $(`${cont} .rt`).text(current.rt);
        $(`${cont} .lb`).text(current.lb);
        $(`${cont} .rb`).text(current.rb);
        $(`${cont} .a`).text(current.a);
        $(`${cont} .b`).text(current.b);
        $(`${cont} .x`).text(current.x);
        $(`${cont} .y`).text(current.y);
        $(`${cont} .ls`).text(current.ls);
        $(`${cont} .rs`).text(current.rs);
        $(`${cont} .up`).text(current.up);
        $(`${cont} .down`).text(current.down);
        $(`${cont} .left`).text(current.left);
        $(`${cont} .right`).text(current.right);
        $(`${cont} .back`).text(current.back);
        $(`${cont} .start`).text(current.start);
    }
});