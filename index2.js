class StopWatch {
    Start(){
        return "started"
    }

    Stop(){
        return "stopped"
    }

}

class DigitalStopWatch extends StopWatch{
    Alarm(){
        return "Alarm"
    }
}

const sw = new StopWatch();
const dsw = new DigitalStopWatch();

StopWatch.prototype.Snooze1 = function(){
    return "Snooze1"
};


sw.__proto__.Snooze2 = function(){
    return "Snooze2"
};

function outerFunction (){
    let x=5;
    function innerFunction(){
        return x;
    }
    return innerFunction();
            
}

