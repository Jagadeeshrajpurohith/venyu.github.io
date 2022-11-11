const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieselect=document.getElementById("movie");
populateui();

let ticketprice=parseInt(movieselect.value);



function setmoviedata(movieindex,movieprice){
    localStorage.setItem("selectedmovieindex",movieindex);
    localStorage.setItem("selectedmovieprice",movieprice);
}







function updateseletedcount(){
    const selectedseats=document.querySelectorAll(".row .seat.Selected");

    const seatsindex=[...selectedseats].map(seat=>[...seats].indexOf(seat));

    localStorage.setItem("selectedseats",JSON.stringify(seatsindex));
    const selectedseatscount=selectedseats.length;
    console.log(selectedseatscount)

    count.innerHTML = selectedseatscount;
    total.innerText = selectedseatscount * ticketprice;
}

function populateui(){
    const selectedseats=JSON.parse(localStorage.getItem("selectedseats"));

    if (selectedseats!==null && selectedseats.length>0){
        seats.forEach(seat,index)=>{

        }

    
    }
}

movieselect.addEventListener("click", e=>{
    ticketprice=parseInt(e.target.value);
    setmoviedata(e.target.selectedindex,e.target.value);
    updateseletedcount();
})




container.addEventListener("click",e=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("Occupied")){
        e.target.classList.toggle("Selected");
        updateseletedcount();
    }

});