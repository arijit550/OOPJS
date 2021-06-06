function Stopwatch(){
    let startTime, endTime, duration = 0, running;

    this.start = function(){
        if(running == true)
            throw new Error('Stopwatch has already started');
        
        running = true;
        startTime = new Date();
    }

    this.stop = function(){
        if(running == false)
            throw new Error('Stopwatch has already stopped');
        
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration+= seconds;

    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        },
        set: function(value){
            if (value < 0)
                throw new Error("duration cannot be negative!")
            duration = value;
        }

    });

}