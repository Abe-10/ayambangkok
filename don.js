window.onload = function() {
    let judul = document.getElementById("judul");
    let foto = document.getElementById("foto");

    let posX = 0; 
    let arahX = 1;

    let posY = 0;
    let arahY = 1;

    function animasi() {
        
        posX += arahX;
        if (posX > 20 || posX < -20) arahX *= -1;
        judul.style.left = posX + "px";

        posY += arahY * 0.5;
        if (posY > 10 || posY < -10) arahY *= -1;
        foto.style.top = posY + "px";

        requestAnimationFrame(animasi);
    }

    animasi();
};

