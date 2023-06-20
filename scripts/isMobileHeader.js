function isMobileHeader() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const headerElement = document.getElementById('mainTC');

if (isMobileHeader()) {
    headerElement.classList.add('mobile');
} else {
    headerElement.classList.add('desktop');
}