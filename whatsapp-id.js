document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const productName = this.dataset.product; // Get the product name from data-product
        const whatsappNumber = "6281212344321";
        const whatsappMessage = `Halo! Saya ingin tahu lebih lanjut tentang ${productName}.`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank'); // Open WhatsApp link in a new tab
    });
});