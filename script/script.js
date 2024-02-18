let selectedSeat = 0;
const seats = document.querySelectorAll('.seat');
for(const seat of seats){
    seat.addEventListener("click", function(){
        selectedSeat++;
        const countSeat = document.getElementById("count-seat");
        countSeat.innerText = selectedSeat;
        const totalSeat = parseInt(document.getElementById("total-seat").innerText);
        const totalAbilable = totalSeat-1;
        document.getElementById("total-seat").innerText = totalAbilable;
        seat.classList.add("bg-green-500");
        const seatInfo = document.getElementById("seat-info");
        

    })
}

