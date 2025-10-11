/*  FEATURES TO ADD:
1. when you scroll down with mouse or on phone with finger, make the selected day's events show up
2. Put calendar part into a div and make it roughly half screen height (by putting them into a div with size of half screen height)
3. Make it so the rows always have 7 tiles in them no matter what the screen size is
4. Label Month at tippy top
5. label days of week at top
6. make the days line up on the days of the week (so if month starts on a wednesday, the 1st is on the 3rd tile)
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


let tiles = document.getElementsByClassName("tile");
for(let i = 0; i < tiles.length; i++){
    let tile = tiles[i]; //define each individual tile so they're changable
    //tile.style.backgroundColor = "lightgreen";
    /*if(tile = tiles[17]){
        tile.style.backgroundColor = "red";
    }*/
}

















// to adjust to last month:
// month = month-1;


fillMonth(2099, 10);



function clearTiles(){
    for (let tile of tiles) {
        tile.replaceChildren(); //removes all children
        tile.removeAttribute("style");
    }
}

function fillMonth(year, month) {
    clearTiles();
    const startWeekday = new Date(year, month - 1, 1).getDay(); // weekday of 1st day of current month
    const daysInPrevMonth = new Date(year, month - 1, 0).getDate(); // number of days in previous month
    const daysInMonth = new Date(year, month, 0).getDate(); // number of days in current month

    let tileIndex = 0;

    //start filling in past month's last days
    for (let i = startWeekday - 1; i >= 0; i--) {

        tiles[i].style.backgroundColor = "#ababab"; 

        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = daysInPrevMonth - (startWeekday - 1 - i); // set text on <p>

        tiles[i].appendChild(newP); //adds <p> inside tile
    }

    //start filling in current month's days
    tileIndex = startWeekday;
    for (let day = 1; day <= daysInMonth; day++) {
        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = day;
        tiles[tileIndex].appendChild(newP); //adds <p> inside tile


        tileIndex++;
    }

    //start filling in next month's days
    let nextDay = 1;
    while (tileIndex < tiles.length) {
        const newP = document.createElement("p");
        newP.classList.add("dayNum");
        newP.innerText = nextDay;
        tiles[tileIndex].appendChild(newP); //adds <p> inside tile



        tiles[tileIndex].style.backgroundColor = "#ababab";
        nextDay++;



        tileIndex++;
    }
}







fillMonth(year-1, 10);











    //const newDiv = document.createElement("div");
    //newDiv.classList.add("tile"); //sets the class of the div to "tile"
    //tiles[i].innerText = "test"; //sets text of the div to the day
    //tiles[i].appendChild(newDiv); //or just 'tile' if you wanna do it to all of them 