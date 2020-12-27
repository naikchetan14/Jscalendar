console.log("hii this is my calendar");
let d=new Date();
function rendardate()
{
let today=d.getDate();
console.log(today);
d.setDate(1);
console.log(d.getDay());
let day=d.getDay();
let enddate=new Date(
    d.getUTCFullYear(),
    d.getMonth()+1,
    0
).getDate();
let prevdate=new Date(
    d.getUTCFullYear(),
    d.getMonth(),
    0
).getDate();


console.log(enddate);
// let n=d.getMonth();
// d.setMonth(9);
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December"
];
console.log(months[9]);
// console.log(n);
document.getElementById("demo").innerHTML=months[d.getMonth()];
document.getElementById("tod").innerHTML=d.toDateString();

let cells="";
for(let x=day;x>0;x--)
{
    cells+="<div>" + (prevdate-x+1) +"</div>";
}

for(let i=1;i<=enddate;i++)
{
    if(today==i)
    {
cells+="<div class='today'>"+ i + "</div>";
}
else {
    cells+="<div>" + i +"</div>"
}
}
document.getElementsByClassName("days")[0].innerHTML=cells;
}

function movedate(para)
{
    if(para=='prev')
    {
        d.setMonth(d.getMonth()-1);
        rendardate();
        }
        else if(para=='next')
        {
            d.setMonth(d.getMonth()+1);
            rendardate();
        }
}