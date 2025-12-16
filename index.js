/*  FEATURES TO ADD:
1. when you swipe up on phone with finger, make the selected day's events show up
2. make the sidebar into an hour by hour view of the day's events
4. make it so the sidebar shows the event that is connected to that day
5. make an 'x' in the sidebar to close it
6. make so you can delete events in frontend
7. look into having no border on tiles (makes less clunky)
8. make the dropdown menu to add events look cooler
9. add recurring alarms and tasks
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
const calendar = document.getElementsByClassName("calendar")[0];
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

        // If clicking the same tile, hide panel and exit
        if (selectedTile === tile) {
            sidePanel.style.opacity = "0";
            calendar.style.transform = ""; //reverts calendar to css transform rules (media queries take over)
            sidePanel.classList.remove("active");
            selectedTile = null; // deselect
            return;
        }

        // Clicking a new tile: show panel and update
        selectedTile = tile;

        const tileDate = new Date(dayElement.dataset.date);
        const fullDate = tileDate.toLocaleDateString('default', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        sidePanelTitle.innerHTML = `${fullDate}`;
        sidePanel.style.opacity = "1";
        sidePanel.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        calendar.style.transform = "translateX(0%)";
        sidePanel.classList.add("active");
        sidePanelEvents();
    });


    //tile.style.backgroundColor = "lightgreen";
    /*if(tile = tiles[17]){
        tile.style.backgroundColor = "red";
    }*/
}

function sidePanelEvents(){
    sidePanel.querySelectorAll(".eventDetails").forEach(item => item.remove()); //clears events previously 
    let tileItems = selectedTile.querySelector(".tileItems");
    if (!tileItems){
        return;
    }

    
    Array.from(tileItems.querySelectorAll(".item")).forEach(item => {
        let eventDesc = document.createElement("div");
        eventDesc.classList.add("eventDetails") //make this in css
        eventDesc.innerText = item.dataset.title + " from " + item.dataset.startTime + " to " + item.dataset.endTime;
        sidePanel.append(eventDesc);
    });

    //probably an issue with manually added items not having a title
    //Array.from(forms).forEach(f => {
    //tileItems.array.forEach(element => {  });
    //for (item in tileItems){ }
    // const newP = document.createElement("p");
    //     newP.classList.add("dayNum");
    //     newP.innerText = daysInPrevMonth - (startWeekday - 1 - i); // set text on <p>
    //     newP.dataset.date = new Date(year, month - 2, newP.innerText).toISOString(); //(for filling in side panel)
    //     tiles[i].appendChild(newP);
}


//scrolls through events on tile hover
function tileScroll() {
    document.querySelectorAll(".tileItems").forEach(tile => {
        let scrollInterval;

        tile.addEventListener("mouseenter", () => {
            const target = tile.scrollHeight - tile.clientHeight; // bottom
            const speed = 1; //pixels per frame, lower = slower
            scrollInterval = setInterval(() => {
                if (tile.scrollTop < target) {
                    tile.scrollTop += speed;
                } else {
                    clearInterval(scrollInterval);
                }
            }, 16);
        });

        tile.addEventListener("mouseleave", () => {
            clearInterval(scrollInterval);
            tile.scrollTop = 0; //scroll back to top
        });
    });
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
    //clearTiles();
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
fillMonth(year, month);
tileScroll();



function setBackground(){
    let bg = document.getElementById("bgImg"); //background image

    if(!bg){
        bg = document.createElement("img");
        bg.id = "bgImg";
        document.body.prepend(bg);
    }

    if(displayedMonth.innerHTML.includes("Jan")){
        bg.src="images/january2.jpg";
        bg.alt="background image of snowy trees";
    } else if(displayedMonth.innerHTML.includes("Feb")){
        bg.src="images/february2.jpg";
        bg.alt="background image of heart on tree";
    } else if(displayedMonth.innerHTML.includes("Mar")){
        bg.src="images/march.jpg";
        bg.alt="background image of tulips";
    } else if(displayedMonth.innerHTML.includes("Apr")){
        bg.src="images/april.jpg";
        bg.alt="background image of purple flowers";
    } else if(displayedMonth.innerHTML.includes("May")){
        bg.src="images/may.jpg";
        bg.alt="background image of pink May flowers";
    } else if(displayedMonth.innerHTML.includes("Jun")){
        bg.src="images/june.jpg";
        bg.alt="background image of wildflowers";
    } else if(displayedMonth.innerHTML.includes("Jul")){
        bg.src="images/july.webp";
        bg.alt="background image of ocean sunset";
    } else if(displayedMonth.innerHTML.includes("Aug")){
        bg.src="images/august.jpg";
        bg.alt="background image of wheat field";
    } else if(displayedMonth.innerHTML.includes("Sep")){
        bg.src="images/september2.jpg";
        bg.alt="background image of fall leaves";
    } else if(displayedMonth.innerHTML.includes("Oct")){
        bg.src="images/october4.jpg";
        bg.alt="background image of glowing pumpkins";
    } else if(displayedMonth.innerHTML.includes("Nov")){
        bg.src="images/november2.jpg";
        bg.alt="background image of pie";
    } else if(displayedMonth.innerHTML.includes("Dec")){
        bg.src="images/december3.jpg";
        bg.alt="background image of holiday lights";
    }
}





    //const newDiv = document.createElement("div");
    //newDiv.classList.add("tile"); //sets the class of the div to "tile"
    //tiles[i].innerText = "test"; //sets text of the div to the day
    //tiles[i].appendChild(newDiv); //or just 'tile' if you wanna do it to all of them 

function addEvent() {
    const startInput = document.getElementById("eventStartTime");
    console.log("Start time", startInput.value);
    const endInput = document.getElementById("eventEndTime");
    console.log("End time", endInput.value);
    const titleInput = document.getElementById("eventName");
    const eventName = titleInput.value.toLowerCase();
    console.log("Event to add:", eventName);

    const taskData = {
        date: selectedTile.querySelector(".dayNum").dataset.date.split("T")[0],
        start_time: startInput ? startInput.value : null,
        end_time: endInput ? endInput.value : null,
        type: "task",
        title: eventName,
        //can add for later functionality:
        //description: descInput ? descInput.value : "",
        recurring: "none"
    };
    console.log(taskData.date);
    saveEventToDB(taskData).then(data => {
        if (data.status === "success"){
            addEventToTile(taskData);
        }
    });
}


// ------------------------------
// SAVE TO DATABASE
// ------------------------------
function saveEventToDB(taskData) {
    return fetch("save_event.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData)
    })
    .then(res => res.json())
    // .then(data => {
    //     console.log("PHP returned:", data);
    //     return data;
    // });
}


// ------------------------------
// ADD VISUALLY TO A TILE
// ------------------------------
function addEventToTile(taskData) {
    console.log("ran");
    let tileItems = selectedTile.querySelector(".tileItems");

    if (!tileItems) {
        tileItems = document.createElement("div");
        tileItems.classList.add("tileItems");
        selectedTile.appendChild(tileItems);
        tileScroll();
    }

    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerText = taskData.title;

    //creates button so event can be deleted when clicked
    //for testing purposes, this button only works for item events created here, doesn't work if button manually added to html
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); //prevents calling parent click function to open/close sidepanel
        newItem.remove();
    });

    //display title of event on calendar
    //time will be display in side panel when item expanded, but somehow has to be stored someplace in the meantime (needs to be modified)
    if (document.getElementById("eventName").value){ //proceed if eventName has a value
        newItem.dataset.title = document.getElementById("eventName").value;
        newItem.dataset.startTime = document.getElementById("eventStartTime").value; //times are stored as strings
        newItem.dataset.endTime = document.getElementById("eventEndTime").value;
        newItem.innerHTML = newItem.dataset.title;
    }else if(document.getElementById("alarmName").value){ //proceed if alarmName has a value
        //the form information is saved in a way that won't differentiate between alarm or task
        newItem.dataset.title = document.getElementById("alarmName").value;
        newItem.dataset.startTime = document.getElementById("alarmStartTime").value; //times are stored as strings
        newItem.dataset.endTime = document.getElementById("alarmEndTime").value; 
        newItem.innerHTML = newItem.dataset.title;
    }
    
    newItem.appendChild(deleteBtn);
    tileItems.appendChild(newItem);
    sidePanelEvents();

    //should somehow edit side panel
}





const eventForm = document.getElementById("eventFormWrapper");
const closeFormBtn = document.getElementById("closeForm");
const eventSelection = document.getElementById("addEventType");
const saveEvent = document.getElementById("saveEvent");
const saveAlarm = document.getElementById("saveAlarm");
const forms = document.getElementsByClassName("taskForm"); 

//hide all inner forms:
function hideAllInnerForms() {
    Array.from(forms).forEach(f => f.style.display = "none");
    
}

// show the correct inner form and save buttons based on selection value
function showInnerFormForSelection() {
    hideAllInnerForms();

    if (eventSelection.value === "task") {
        if (forms[0]){ 
            forms[0].style.display = "block"
        };
        saveEvent.style.display = "inline-block";
        saveAlarm.style.display = "none";
    } else if (eventSelection.value === "alarm") {
        if (forms[1]){
            forms[1].style.display = "block";
        }
        saveEvent.style.display = "none";
        saveAlarm.style.display = "inline-block";
    } else {
        saveEvent.style.display = "none";
        saveAlarm.style.display = "none";
    }
}

//toggle wrapper visibility
function showForm() {
  const isVisible = window.getComputedStyle(eventForm).display !== "none";
  if (isVisible) {
    //hide wrapper and all inner forms
    eventForm.style.display = "none";
    hideAllInnerForms();
  } else {
    //show wrapper and the inner forms
    eventForm.style.display = "block";
    showInnerFormForSelection();
  }
}

eventSelection.addEventListener("change", function() {
    showInnerFormForSelection();
});

closeFormBtn.addEventListener("click", function () {
    eventForm.style.display = "none";
    hideAllInnerForms();
});


saveEvent.addEventListener("click", function () {
    eventForm.style.display = "none";
    addEvent();
});

saveAlarm.addEventListener("click", function () {
    eventForm.style.display = "none";
    addEvent();
});







//for phone view swipe up:
let touchStartY = 0;

document.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
    const touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchStartY - touchEndY;
    const sidePanel = document.getElementById("sidePanel");

    //detects swipe up (you can adjust 50 px threshold)
    if (swipeDistance > 50) {
        sidePanel.classList.add("expanded");
        sidePanel.classList.remove("contracted");
    }
    if (swipeDistance < -50) {
        sidePanel.classList.remove("expanded");
        sidePanel.classList.add("contracted");
    }
});




function prevMonth(){
    month--;
    if(month < 1){
        month = 12;
        year--;
    }
    clearTiles();
    fillMonth(year, month);
    tileScroll();
}

function nextMonth(){
    month++;
    if(month > 12){
        month = 1;
        year++;
    }
    clearTiles();
    fillMonth(year, month);
    tileScroll();
}


function closeSidePanel(){
    sidePanel.style.opacity = "0";
    calendar.style.transform = ""; //reverts calendar to css transform rules (media queries take over)
    sidePanel.classList.remove("active");
    selectedTile = null; // deselect
}
