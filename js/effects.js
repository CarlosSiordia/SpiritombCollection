// ===============================
// Spiritomb Collection Effects
// ===============================

function createTouchEffect(x, y){

    const colors = [
        "#8B5CF6",
        "#A855F7",
        "#2DD4BF",
        "#C084FC"
    ];

    for(let i=0;i<8;i++){

        const particle = document.createElement("span");

        particle.className = "touchParticle";

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        particle.style.setProperty(
            "--dx",
            (Math.random()-0.5)*80 + "px"
        );

        particle.style.setProperty(
            "--dy",
            (Math.random()-0.5)*80 + "px"
        );

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },700);

    }

    if(navigator.vibrate){

        navigator.vibrate(8);

    }

}

document.addEventListener("pointerdown",(e)=>{

    createTouchEffect(e.clientX,e.clientY);

});