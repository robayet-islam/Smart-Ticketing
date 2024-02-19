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
        
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seat.innerText;
        p2.innerText = " Economoy";
        p3.innerText = 550;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatInfo.appendChild(div);
        // ////////////////////////////////////////////////////////////////////////
        let totalPrice = document.getElementById('total-price').innerText;
        const singleSeatPrice = 550;
        totalPrice = singleSeatPrice * selectedSeat;
        document.getElementById('total-price').innerText = totalPrice;

       

       
        

        

        

    })
}

