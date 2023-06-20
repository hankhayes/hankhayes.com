function isMobileTC() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const headerElement = document.getElementById('mainTC');

if (isMobileTC()) {
    headerElement.classList.add('mobile');
} else {
    headerElement.classList.add('desktop');
}