fPaintHours();
init();

function init(){
    for (var i = 9; i <= 20; i++) {
        document.getElementById("text"+i).textContent = localStorage.getItem(i);
    }

}

function fSave(event) {
console.log("text"+event.id.substring(4));
//     if(event.id === "save9")
     let text = document.getElementById("text"+event.id.substring(4)).value
    localStorage.setItem(event.id.substring(4),text);
     // console.log("->" + localStorage.getItem(event.id.substring(4)));
}

function fPaintHours() {
    let currentDayEl = document.getElementById("currentDay");
    currentDayEl.innerHTML = moment().format("DD/M/YYYY hh:mm:ss a");
    currentDayEl.style="font-weight: bolder;"

    let hourOfDay = moment().format("H");
// console.log(hourOfDay);
    for (var i = 9; i <= 20; i++) {
      //  console.log("this is i:" + i);
        let classTime = "";
        if (i < hourOfDay) {
            classTime = "past";
        } else if (i == hourOfDay) {
            classTime = "present";
        } else if (i > hourOfDay) {
            classTime = "future";
        }
        //console.log("class applied: " + classTime);
       // console.log(i + "hr");
        let hourRowEl = document.getElementById(i + "hr");
        hourRowEl.setAttribute("class", "col-10 " + classTime);
       // console.log("class applied");

    }


    setTimeout(fPaintHours, 1000);
}
