const videoElement = document.getElementById('camera-view');
const virtualProduct = document.getElementById('virtual-product');
const productSelect = document.getElementById('product-select');
const tryOnButton = document.getElementById('try-on-button');
const updateProductStyle = () => {
    const videoWidth = videoElement.videoWidth;
    const videoHeight = videoElement.videoHeight;
    const productType = productSelect.value;
    switch (productType) {
        case 'hat':
            virtualProduct.style.width = `${videoWidth / 3}px`; 
            virtualProduct.style.height = `${videoHeight / 4}px`;
            virtualProduct.style.left = `${(videoWidth / 2) - (parseInt(virtualProduct.style.width) / 2)}px`;
            virtualProduct.style.top = `${videoHeight / 6}px`; 
            break;
        case 'glasses':
            virtualProduct.style.width = `${videoWidth / 3}px`; 
            virtualProduct.style.height = `${videoHeight / 6}px`;
            virtualProduct.style.left = `${(videoWidth / 2) - (parseInt(virtualProduct.style.width) / 2)}px`;
            virtualProduct.style.top = `${videoHeight / 3}px`; 
            break;
        case 'shirt':
            virtualProduct.style.width = `${videoWidth / 2}px`; 
            virtualProduct.style.height = `${videoHeight / 2}px`;
            virtualProduct.style.left = `${(videoWidth / 2) - (parseInt(virtualProduct.style.width) / 2)}px`;
            virtualProduct.style.top = `${videoHeight / 2}px`; 
            break;
        case 'shoes':
            break;
    }
};

tryOnButton.addEventListener('click', () => {
    const selectedProduct = productSelect.value;
    virtualProduct.src = `${selectedProduct}.png`;
    virtualProduct.style.display = 'block';
    updateProductStyle(); 
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = () => {
            updateProductStyle();
        };
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
    });
