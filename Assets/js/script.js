const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const cardHours = document.querySelectorAll('.card-hours');
const lastTime = document.querySelectorAll('.last-time');


function hours(event){
    const hoursType = event.target;
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(json) {
        if (hoursType.classList.contains('daily')){
            cardHours.forEach((hour, index) => {
                cardHours[index].innerHTML = json[index].timeframes.daily.current + "hrs";
                lastTime[index].innerHTML = "Last day - " + json[index].timeframes.daily.previous + "hrs"
            });
        }
        else if (hoursType.classList.contains('weekly')){
            cardHours.forEach((hour, index) => {
                cardHours[index].innerHTML = json[index].timeframes.weekly.current + "hrs";
                lastTime[index].innerHTML = "Last week - " + json[index].timeframes.weekly.previous + "hrs"
            });
        }else{
            cardHours.forEach((hour, index) => {
                cardHours[index].innerHTML = json[index].timeframes.monthly.current + "hrs";
                lastTime[index].innerHTML = "Last month - " + json[index].timeframes.monthly.previous + "hrs"
            });
        }
    })
    .catch(function(error){
        console.log("Something is wrong!");
    })
}


daily.addEventListener('click', hours);

weekly.addEventListener('click', hours);

monthly.addEventListener('click', hours);