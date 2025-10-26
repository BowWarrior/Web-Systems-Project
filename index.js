/*  FEATURES TO ADD:
1. when you swipe up on phone with finger, make the selected day's events show up
2. make the sidebar into an hour by hour view of the day's events
3. make it so the a day can have an event
4. make it so the sidebar shows the event that is connected to that day
5. make an 'x' in the sidebar to close it (then make the calendar move to center of page)
6. make so you can add/delete events in frontend
7. look into having no border on tiles (makes less clunky)
*/


/*Could be useful later:
    console.log(month + "/" + day + "/" + year);
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    console.log(d.getDay()); //index of day of the week 0-6
    console.log(d.getFullYear()); //4 digit year
    console.log(d);
    
*/

/*
go to terminal and cd into the folder where this project is saved,
then:

git add .
git commit -m "Describe your changes"
git push
*/

const d = new Date(); //date starts with January at index 0
let month = d.getMonth() + 1;
let day = d.getDate();
let year = d.getFullYear();
const calendar = document.getElementById("calendar");
const displayedMonth = document.getElementsByClassName("monthOfYear")[0];
const sidePanel = document.getElementById("sidePanel");

let selectedTile = null; //keep track currently clicked tile
let tiles = document.getElementsByClassName("tile");
let sidePanelTitle = document.getElementById("sidePanelTitle");
for(let i = 0; i < tiles.length; i++){
    let tile = tiles[i]; //define each individual tile so they're changable

    
    //this jquery makes it so when you click a tile, the side panel pops up with the correct date (and disappears when clicked again)
    tile.addEventListener("click", function () {
        const dayElement = tile.querySelector(".dayNum");
        if (!dayElement) return;

        const tileDate = new Date(dayElement.dataset.date); // real Date object
        const fullDate = tileDate.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

        sidePanelTitle.innerHTML = `${fullDate}`;
        sidePanel.style.opacity = "1";

        //toggle logic
        selectedTile = selectedTile === tile ? null : tile;
        if (selectedTile === null) sidePanel.style.opacity = "0";
    });

    //tile.style.backgroundColor = "lightgreen";
    /*if(tile = tiles[17]){
        tile.style.backgroundColor = "red";
    }*/
}





const weekdays = document.getElementsByClassName("weekday");
const mq = window.matchMedia("(max-width: 480px)");

function updateWeekdays(e) {
    if (e.matches) {
        //for phone
        weekdays[0].innerHTML = "S";
        weekdays[1].innerHTML = "M";
        weekdays[2].innerHTML = "T";
        weekdays[3].innerHTML = "W";
        weekdays[4].innerHTML = "T";
        weekdays[5].innerHTML = "F";
        weekdays[6].innerHTML = "S";
    } else {
        //for laptop
        weekdays[0].innerHTML = "Sunday";
        weekdays[1].innerHTML = "Monday";
        weekdays[2].innerHTML = "Tuesday";
        weekdays[3].innerHTML = "Wednesday";
        weekdays[4].innerHTML = "Thursday";
        weekdays[5].innerHTML = "Friday";
        weekdays[6].innerHTML = "Saturday";
    }
}
updateWeekdays(mq);
//updates when page changes size
mq.addEventListener("change", updateWeekdays);








//resets each panel in the calendar so we can change the calendar month if need be
function clearTiles(){
    for (let tile of tiles) {
        tile.replaceChildren();
        tile.removeAttribute("style");
    }
}

function fillMonth(year, month) {
    clearTiles();
    const startWeekday = new Date(year, month - 1, 1).getDay(); //weekday of the 1st of the current month 
    const daysInPrevMonth = new Date(year, month - 1, 0).getDate(); //# of days in previous month
    const daysInMonth = new Date(year, month, 0).getDate(); //# of days in current month
    let tileIndex = 0;
    const thisMonth = new Date(year, month - 1);
    
    //checks if the year when the function is called is this year
    if(year == d.getFullYear()){
        displayedMonth.innerHTML = thisMonth.toLocaleString('default', { month: 'long' });
    } else{
        displayedMonth.innerHTML = thisMonth.toLocaleString('default', { month: 'long' }) + " " + year;
    }
        
    //start filling in past month's last days
    for (let i = startWeekday - 1; i >= 0; i--) {
        tiles[i].style.backgroundColor = "rgba(132, 132, 132, 0.5)"; 
        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = daysInPrevMonth - (startWeekday - 1 - i); // set text on <p>
        newP.dataset.date = new Date(year, month - 2, newP.innerText).toISOString(); //(for filling in side panel)
        tiles[i].appendChild(newP);
    }

    //start filling in current month's days
    tileIndex = startWeekday;
    for (let day = 1; day <= daysInMonth; day++) {
        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = day;
        newP.dataset.date = new Date(year, month - 1, day).toISOString(); //(for filling in side panel)
        tiles[tileIndex].appendChild(newP);

        tileIndex++;
    }

    //start filling in next month's days
    let nextDay = 1;
    for(i = tileIndex; i < tiles.length; i++) {
        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = nextDay;
        newP.dataset.date = new Date(year, month, nextDay).toISOString(); //(for filling in side panel)
        tiles[tileIndex].appendChild(newP);
        tiles[tileIndex].style.backgroundColor = "rgba(132, 132, 132, 0.5)";
        nextDay++;

        tileIndex++;
    }

    setBackground();    
}

//year, month
//to adjust by 1, just add or subtract by an int
fillMonth(year, 4);




function setBackground(){
    if(displayedMonth.innerHTML.includes("Jan")){
        document.body.style.backgroundImage = "url('images/january2.jpg')";
        
    } else if(displayedMonth.innerHTML.includes("Feb")){
        document.body.style.backgroundImage = "url('images/february2.jpg')";

    } else if(displayedMonth.innerHTML.includes("Mar")){
        document.body.style.backgroundImage = "url('images/march.jpg')";

    } else if(displayedMonth.innerHTML.includes("Apr")){
        document.body.style.backgroundImage = "url('images/april.jpg')";

    } else if(displayedMonth.innerHTML.includes("May")){
        document.body.style.backgroundImage = "url('images/may.jpg')";

    } else if(displayedMonth.innerHTML.includes("Jun")){
        document.body.style.backgroundImage = "url('images/june.jpg')";

    } else if(displayedMonth.innerHTML.includes("Jul")){
        document.body.style.backgroundImage = "url('images/july.webp')";
        //document.body.insertAdjacentHTML('afterbegin', "<div style='position:fixed;inset:0;background:url(images/july.webp) center/cover no-repeat;transform:scaleX(-1);z-index:-1;'></div>");

    } else if(displayedMonth.innerHTML.includes("Aug")){
        document.body.style.backgroundImage = "url('images/august.jpg')";

    } else if(displayedMonth.innerHTML.includes("Sep")){
        document.body.style.backgroundImage = "url('images/september2.jpg')";

    } else if(displayedMonth.innerHTML.includes("Oct")){
        document.body.style.backgroundImage = "url('images/october4.jpg')";

    } else if(displayedMonth.innerHTML.includes("Nov")){
        document.body.style.backgroundImage = "url('images/november2.jpg')";

    } else if(displayedMonth.innerHTML.includes("Dec")){
        document.body.style.backgroundImage = "url('images/december3.jpg')";
        //document.getElementsByClassName("weekdayRowDiv")[0].style.color = "#dafacf";

    }
}





    //const newDiv = document.createElement("div");
    //newDiv.classList.add("tile"); //sets the class of the div to "tile"
    //tiles[i].innerText = "test"; //sets text of the div to the day
    //tiles[i].appendChild(newDiv); //or just 'tile' if you wanna do it to all of them 