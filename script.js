const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

let time = 0;
let hourTime = 0;
let minutesTime = 0;
let secondsTime = 0;
let intervalId;

playButton.addEventListener('click',function(e){
    playButton.classList.add('active');
    pauseButton.classList.remove('active');
    stopButton.classList.remove('active');

    intervalId = setInterval(startTime, 10);
});

pauseButton.addEventListener('click',function(e){
    playButton.classList.remove('active');
    pauseButton.classList.add('active');
    stopButton.classList.remove('active');
    clearInterval(intervalId);
});

stopButton.addEventListener('click',function(e){
    playButton.classList.remove('active');
    pauseButton.classList.remove('active');
    stopButton.classList.add('active');
    stopTime(); 
    clearInterval(intervalId);
});


function startTime(){
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const miliseconds = document.getElementById('miliseconds');
    
    hour.innerHTML = hourTime;
    minutes.innerHTML = minutesTime;
    seconds.innerHTML = secondsTime;
    miliseconds.innerHTML = time;
    
    if(time >= 99){
        secondsTime ++;
        time = 0;    
    }
    else if (secondsTime >= 60){
        minutesTime++;
        secondsTime = 0;
    }
    else if (minutesTime >= 60){
        hourTime++;
        minutesTime = 0;
        }
    else if (hourTime >= 24){
        hourTime = 0;
    }
    else{
        time ++
        if(hourTime == 0){
            if(minutesTime == 5){
                message = `${minutesTime} Menit`
                showFlagNotification(message);
            }
            else if(minutesTime == 10){
                message = `${minutesTime} Menit`
                showFlagNotification(message);
            }
            else if(minutesTime == 15){
                message = `${minutesTime} Menit`
                showFlagNotification(message);
            }
            else if(minutesTime == 30){
                message = `${minutesTime} Menit`
                showFlagNotification(message);
            }
        }
        else if(hourTime == 1){
            message = `${hourTime} Jam`
                showFlagNotification(message);
        }
        else if(hourTime == 5){
            message = `${hourTime} Jam`
                showFlagNotification(message);
        }
        else if(hourTime == 12){
            message = `${hourTime} Jam`
                showFlagNotification(message);
        }
        else if(hourTime == 24){
            message = `${hourTime} Jam`
                showFlagNotification(message);
        }
        
    }
}

function stopTime(){
    hourTime = 0;
    minutesTime = 0;
    secondsTime = 0;
    time = 0;

    hour.innerHTML = hourTime;
    minutes.innerHTML = minutesTime;
    seconds.innerHTML = secondsTime;
    miliseconds.innerHTML = time;
}


function showFlagNotification(message) {
    const notificationBox = document.getElementById('flagNotification');
    const notificationMessage = document.getElementById('message');
    
    notificationMessage.innerHTML = `Waktu sudah memasuki ${message}`;
    notificationBox.style.display = 'block';

    setTimeout(function() {
        notificationBox.style.display = 'none';
    }, 3000);
}

