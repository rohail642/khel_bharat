document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "black";
    const totalAnimationTime = (4) * 1000;
    setTimeout(function() {
        document.body.style.backgroundColor = "white";
        document.querySelector('.main-loader').style.display = 'none';
        // document.querySelector('.content').style.display = 'block';
    }, totalAnimationTime);
});

