function isMobileBody() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const bodyElement = document.getElementById('bodyContainer');

if (isMobileBody()) {
    bodyElement.classList.add('mobile');
} else {
    bodyElement.classList.add('desktop');
}