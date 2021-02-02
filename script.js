function ticketCount(product, isIncrease){
    const ticketInput = document.getElementById(product + '-ticket');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
    ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
    ticketNewCount = ticketCount - 1;
     }
    ticketInput.value = ticketNewCount;
calculateTotal();
}
function calculateTotal(){
    const firstClassInput = document.getElementById('firstClass-ticket');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-ticket');
    const economyCount = parseInt(economyInput.value);

    const totalTicketPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalTicketPrice;

    const totalPriceVat = totalTicketPrice * 0.10;
    document.getElementById('vat').innerText = '$' + totalPriceVat;

    const totalPayment = totalPriceVat + totalTicketPrice;
document.getElementById('totalPayment').innerText = '$' + totalPayment;
}

const bookingNowBtn = document.getElementById("book-now");
bookingNowBtn.addEventListener("click", function(){
    document.getElementById('firstClassPrice').innerText = document.getElementById('firstClass-ticket').value;
    document.getElementById('economyPrice').innerText = document.getElementById('economy-ticket').value;
    document.getElementById('totalPrice').innerText = document.getElementById('vat').innerText;
    document.getElementById('totalPrice').innerText = document.getElementById('total-price').innerText;
    document.getElementById('totalPrice').innerText = document.getElementById('totalPayment').innerText;            

    
})

    const bookNowBtn = document.getElementById("book-now");
    bookNowBtn.addEventListener("click", function(){
        const contentArea = document.getElementById("content-area");
        contentArea.style.display = "none";
        const confirmationArea = document.getElementById("confirmation");
        confirmationArea.style.display = "block";
    })

    
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", function(){
        const confirmationArea = document.getElementById("confirmation");
        confirmationArea.style.display = "none";
        const greetingArea = document.getElementById("greeting");
        greetingArea.style.display = "block";
    })