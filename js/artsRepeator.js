const arts = [
    "images/art/n2.jpg",
    "images/art/draw.jpg",
    "images/art/Rahen_nep.jpg",
    "images/art/Main.png",
    "images/art/main1.png",
    "images/art/Main2.png",
    "images/art/icon1.png",
    "images/art/1.jpg",
    "images/art/4.jpg",
    "images/art/7.jpg",
    "images/art/10.jpg",
    "images/art/13.jpg",
    "images/art/14.jpg",
    "images/art/cage.jpg",
    "images/art/dec.jpg",
    "images/art/mini.jpg",
    "images/art/rat.jpg",
    "images/art/sq.jpg"
];

document.getElementById("section-arts").innerHTML = `
    ${arts.map(function(art){
        return`
        <div class="gallery animate-box" >
            <a target="_blank" href=${art}>
                <img src=${art} alt="Art Not Loaded" width="600" height="400" >
                <!--<h3>${art}</h3>-->
            </a>
        </div>
        `
    }).join(' ')}
`