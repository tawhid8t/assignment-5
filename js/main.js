let count = 0;
let selectedButtons = [];
const couponBtn = document.getElementById('coupon-btn');
couponBtn.disabled = true;
const mainApply = document.getElementById('main-apply-btn');
mainApply.disabled = true;

const seatsBtn = document.getElementsByClassName('seat-btn');
for(const seatBtn of seatsBtn){
    seatBtn.addEventListener('click', function(e){
        const setBg = e.target;

        const text = e.target.innerText;
        selectedSeat('selected-ticket', text);

       
        

        if (selectedButtons.indexOf(seatBtn) !== -1) {
            let index = selectedButtons.indexOf(seatBtn);
            selectedButtons.splice(index, 1);
            button.style.backgroundColor = '';
        } else if (selectedButtons.length < 4) {
            selectedButtons.push(seatBtn);
            setBg.style.background = '#1DD100'
            setBg.style.color = '#ffffff'  
        }
        if (selectedButtons.length >= 4) {
            // Disable all buttons if 4 buttons are selected
            for (let i = 0; i < seatsBtn.length; i++) {
                seatsBtn[i].disabled = true;
            }
            couponBtn.disabled = false;
            mainApply.disabled = false;
        }

        const count2 = count+= 1;
        document.getElementById('count').innerText = count2;
        const totalSeat = document.getElementById('total-seat').innerText;
        const count3 = parseInt(totalSeat) - 1;
        document.getElementById('total-seat').innerText = count3;
        
        totalCost();
        grandTotalCost();
        
    },{once: true})
}

function customerDetails(){
    
    const passengerName = document.getElementById('name').value;
    const phoneNumber = parseInt(document.getElementById('number').value);
    const emailId = document.getElementById('email').value;
    
    
}

