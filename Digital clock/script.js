let hrs = document.getElementById("Hrs")
let min = document.getElementById("Min")
let sec = document.getElementById("Sec")




setInterval(() => {
    let currtime = new Date();
    hrs.innerHTML = (currtime.getHours());
    min.innerHTML = currtime.getMinutes();
    sec.innerHTML = currtime.getSeconds();

}, 1000);




