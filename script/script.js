let selectedSeat = 0;
const seats = document.querySelectorAll('.seat');
for(const seat of seats){

    seat.addEventListener("click", function(){
        if (selectedSeat === 4){
            alert("You Can't select more than 4 ");
            return;
        }
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
        p2.innerText = "Economoy";
        p3.innerText = 550;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatInfo.appendChild(div);

        let totalPrice = document.getElementById('total-price').innerText;
        const singleSeatPrice = 550;
        totalPrice = singleSeatPrice * selectedSeat;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById("grand-total-price").innerText = totalPrice;
        grandPrice();
        seat.setAttribute("disabled", true);

    })
}
//  cupon apply
function grandPrice(){
    const cupponApplyBtn = document.getElementById('cuppon-apply-btn');
    const totalPrice = parseInt(document.getElementById('total-price').innerText);
    cupponApplyBtn.addEventListener('click', function(){
        const cuppon = document.getElementById("cuppon").value;

        if(cuppon === "NEW15"){    
            const grandTotalPrice = totalPrice * (15/100);
            document.getElementById("grand-total-price").innerText = totalPrice - grandTotalPrice;
            // console.log(grandTotalPrice)
            // console.log(totalPrice)   
        }
        else if(cuppon === "Couple 20"){ 
            const grandTotalPrice = totalPrice * (20/100);
            document.getElementById("grand-total-price").innerText = totalPrice - grandTotalPrice;   
        }});

}
   

   