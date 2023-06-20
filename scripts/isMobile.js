function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const mainContainer = document.getElementById('mainContainer');
const mainTC = document.getElementById('mainTC');

if (isMobileDevice()) {
    mainContainer.classList.add('mobile');
    mainTC.classList.add('mobile');
} else {
    mainContainer.classList.add('desktop');
    mainTC.classList.add('desktop');
}