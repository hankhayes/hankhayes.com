function isMobileFooter() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const footerElement = document.getElementById('footerContainer');

if (isMobileFooter()) {
    footerElement.classList.add('mobile');
} else {
    footerElement.classList.add('desktop');
}