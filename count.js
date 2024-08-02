    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    const deadline = new Date('August 20, 2024');  //deadine date

  //create function to calculate days
    function updateCountdown() {
      const currentTime = new Date().getTime(); //current time in milli seconds
      const difference = deadline - currentTime; //differences
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      daysElement.textContent = formatTime(days);
      hoursElement.textContent = formatTime(hours);
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds)
      ;
      // console.log(hoursElement.textContent);
    }
     function formatTime(time){
        return time <10? `0${time}` : time; //put 0 when less then 10
     };

    setInterval(updateCountdown, 1000); //to update timmer

  //   var map = function(arr, fn) {
  //     const result = [];
  //     arr.forEach(function(ele1,ele2) {
  //         result.push(fn(ele1,ele2));
  //     });
  //     return result;
  // };

 function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 setCookie();
  