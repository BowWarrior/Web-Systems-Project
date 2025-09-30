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

/*could be useful later:
    console.log(month + "/" + day + "/" + year);
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    console.log(d.getDay()); //index of day of the week 0-6
    console.log(d.getTime()); //milliseconds since January 1, 1970
    console.log(d.getFullYear()); //4 digit year
    console.log(d);
*/


for(let i = 0; i < day; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("tile"); //sets the class of the div to "tile"
    newDiv.innerText = (i+1); //sets text of the div to the day
    document.body.appendChild(newDiv);
    
}






function hi(){
    alert('hi');
}