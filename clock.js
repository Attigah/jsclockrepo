 setInterval(setClock, 1000)

 function Setclock() {
    const currentDate = new Date
   const secondsRatio = currentDate.getSeconds()/60
   const minutesRatioRatio = currentDate.getMinutes()/60
   const hoursRatio = currentDate.getHours()/60
 
 