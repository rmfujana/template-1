document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const productName = this.dataset.product; // Get the product name from data-product
        const whatsappNumber = "6281252290686";
        const whatsappMessage = `Hello! I want to know about these ${productName} further.`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
    });
});