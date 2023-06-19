function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const containerElement = document.getElementById('mainContainer');

if (isMobileDevice()) {
    containerElement.classList.add('mobile');
} else {
    containerElement.classList.add('desktop');
}