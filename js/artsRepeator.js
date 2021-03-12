const arts = [
    {
        name: "JD",
        icon: "images/art/n2.jpg",
        image: "images/art/n2.jpg"
    },
    {
        name: "Portrait",
        icon: "images/art/n2.jpg",
        image: "images/art/draw.jpg"
    },
    {
        name: "Rehan",
        icon: "images/art/n2.jpg",
        image: "images/art/Rahen_nep.jpg"
    },
    {
        name: "Austrich",
        icon: "images/art/n2.jpg",
        image: "images/art/Main.png"
    },
    {
        name: "Yaffelo",
        icon: "images/art/n2.jpg",
        image: "images/art/main1.png"
    },
    {
        name: "Phip",
        icon: "images/art/n2.jpg",
        image: "images/art/Main2.png"
    },
    {
        name: "Earth 3D",
        icon: "images/art/n2.jpg",
        image: "images/art/icon1.png"
    },
    {
        name: "Bail",
        icon: "images/art/n2.jpg",
        image: "images/art/1.jpg"
    },
    {
        name: "Kera",
        icon: "images/art/n2.jpg",
        image: "images/art/4.jpg"
    },
    {
        name: "Halo",
        icon: "images/art/n2.jpg",
        image: "images/art/7.jpg"
    },
    {
        name: "JDC",
        icon: "images/art/n2.jpg",
        image: "images/art/10.jpg"
    },
    {
        name: "Squid",
        icon: "images/art/n2.jpg",
        image: "images/art/13.jpg"
    },
    {
        name: "Project 11018",
        icon: "images/art/n2.jpg",
        image: "images/art/14.jpg"
    },
    {
        name: "Cage",
        icon: "images/art/n2.jpg",
        image: "images/art/cage.jpg"
    },
    {
        name: "Dref",
        icon: "images/art/n2.jpg",
        image: "images/art/dec.jpg"
    },
    {
        name: "Magnum",
        icon: "images/art/n2.jpg",
        image: "images/art/mini.jpg",

    },
    {
        name: "Gail",
        icon: "images/art/n2.jpg",
        image: "images/art/rat.jpg"
    },
    {
        name: "Sqliud",
        icon: "images/art/n2.jpg",
        image: "images/art/sq.jpg"
    }
];

document.getElementById("section-arts").innerHTML = `
    ${arts.map(function (art) {
    return `
        <a class="card" href="${art.image}">
        <div class="card-bg" style="background-image: url(${art.image})">
        </div>
        <div class="card-col">
        <h3 class="card-name">${art.name}</h3>
        </div>
        </a>
        `
}).join(' ')}
`