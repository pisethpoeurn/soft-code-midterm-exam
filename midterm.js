var clock = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    // Add "0" .....
    if ( hours < 10 ) {
        hours = "0" + hours;
    }
    if ( minutes < 10 ) {
        minutes = "0" + minutes;
    }
    if ( seconds < 10 ) {
        seconds = "0" + seconds;
    }
    
    // outputTime ....
    let outputTime = document.querySelector("h1");
    outputTime.innerHTML = hours + " : " + minutes + " : " + seconds ;
    
    // Add AM or PM.... 
    if ( hours < 12 ) {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " AM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Morning !";
    }else {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " PM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Afternoon !";
    }

    if ( time.getHours() === 12 ) {
        outputTime.innerHTML = time.getHours() + " : " + minutes + " : " + seconds + " PM";
        
    }

    // Show Message .....
    if ( time.getHours() < 12 ) {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " AM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Morning !";
    } else if ( time.getHours() >= 17 ) {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " PM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Evening !";
    }
    
    if ( time.getHours() >= 19 ) {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " PM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Night !";
    }else if ( time.getHours() > 12) {
        outputTime.innerHTML = hours + " : " + minutes + " : " + seconds + " PM";
        let message = document.querySelector('h2');
        message.innerHTML = " Good Afternoon !";
    }  
} 
setInterval(clock , 1000);
clock();