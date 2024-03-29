function selectedSeat(id, value){
    const selectedDiv = document.getElementById(id)
    const div = document.createElement('div');
    div.classList.add("div-p-class")
    const p1 = document.createElement('p');
    p1.classList.add("p-class");
    p1.innerText = value;
    const p2 = document.createElement('p');
    p2.classList.add("p-class");
    p2.innerText = 'Economy';
    const p3 = document.createElement('p');
    p3.classList.add("p-class");
    p3.innerText = '500'
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedDiv.appendChild(div);
}

function totalCost(){
    const ticketPrice = 500; 
    const totalPrice = document.getElementById('total-price').innerText;
    const updatedPrice = parseInt(totalPrice) + ticketPrice;
    document.getElementById('total-price').innerText = updatedPrice
}

function grandTotalCost(status){
    const value = document.getElementById('apply-input').value;
    const totalPrice = document.getElementById('total-price').innerText;
    if(status){
        if (value == 'new15') {
            discount20 = totalPrice * 0.15;
            discountedPrice = totalPrice - discount20;
            document.getElementById('grand-total').innerText = discountedPrice;
            document.getElementById('apply-input').value = ''
        }
        else if(value == 'couple20'){
            discount30 = totalPrice * 0.2;
            discountedPrice = totalPrice - discount30;
            document.getElementById('grand-total').innerText = discountedPrice;
            
            document.getElementById('apply-input').value = ''
        }
        else{
            couponAlert();
            document.getElementById('apply-input').value = ''
        }   
    }
    else{
        const ticketPrice = 500;
        const totalPrice = document.getElementById('total-price').innerText;
        document.getElementById('grand-total').innerText = totalPrice;
    }
    
    
}

// coupon alert
function couponAlert(){
    const couponAlert = document.getElementById('coupon-alert');
    const h6 = document.createElement('h6');
    h6.innerText = 'Inter a valid coupon';
    h6.style.color = 'red'
    couponAlert.appendChild(h6);
}