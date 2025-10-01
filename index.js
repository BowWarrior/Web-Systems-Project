/*  FEATURES TO ADD:
1. when you scroll down with mouse or on phone with finger, make the selected day's events show up
2. Put calendar part into a div and make it roughly half screen height (by putting them into a div with size of half screen height)
3. Make it so the rows always have 7 tiles in them no matter what the screen size is
4. Label Month at tippy top
5. label days of week at top
*/


/*Could be useful later:
    console.log(month + "/" + day + "/" + year);
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    console.log(d.getDay()); //index of day of the week 0-6
    console.log(d.getTime()); //milliseconds since January 1, 1970
    console.log(d.getFullYear()); //4 digit year
    console.log(d);
    let firstDayNextMonth = nextMonthDay1.getDay(); //0-6 index of day of the week
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





let daysInMonth = new Date(year, month, 0).getDate(); //gets number of days in the current month. add 1 to month to get next month's day count
for(let i = 0; i < daysInMonth; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("tile"); //sets the class of the div to "tile"
    newDiv.innerText = (i+1); //sets text of the div to the day
    document.body.appendChild(newDiv);
    
}






function hi(){
    alert('hi');
}