const arts = [
    {
        name: "JD",
        image: "images/art/1.jpg"
    },
    {
        name: "Portrait",
        image: "images/art/2.jpg"
    },
    {
        name: "Rehan",
        image: "images/art/3.jpg"
    },
    {
        name: "Pixel",
        icon: "images/art/n2.jpg",
        image: "images/art/4.png"
    },
    {
        name: "Austrich",
        icon: "images/art/n2.jpg",
        image: "images/art/5.png"
    },
    {
        name: "Yaffelo",
        icon: "images/art/n2.jpg",
        image: "images/art/6.png"
    },
    {
        name: "Phip",
        icon: "images/art/n2.jpg",
        image: "images/art/7.png"
    },
    {
        name: "Earth 3D",
        icon: "images/art/n2.jpg",
        image: "images/art/8.png"
    },
    {
        name: "Bail",
        icon: "images/art/n2.jpg",
        image: "images/art/9.jpg"
    },
    {
        name: "Kera",
        icon: "images/art/n2.jpg",
        image: "images/art/a.jpg"
    },
    {
        name: "Halo",
        icon: "images/art/n2.jpg",
        image: "images/art/b.jpg"
    },
    {
        name: "JDC",
        icon: "images/art/n2.jpg",
        image: "images/art/c.jpg"
    },
    {
        name: "Squid",
        icon: "images/art/n2.jpg",
        image: "images/art/d.jpg"
    },
    {
        name: "Project 11018",
        icon: "images/art/n2.jpg",
        image: "images/art/e.jpg"
    },
    {
        name: "Cage",
        icon: "images/art/n2.jpg",
        image: "images/art/f.jpg"
    },
    {
        name: "Dref",
        icon: "images/art/n2.jpg",
        image: "images/art/f1.jpg"
    },
    {
        name: "Magnum",
        icon: "images/art/n2.jpg",
        image: "images/art/f2.jpg",

    },
    {
        name: "Gail",
        icon: "images/art/n2.jpg",
        image: "images/art/f3.jpg"
    },
    {
        name: "Sqliud",
        icon: "images/art/n2.jpg",
        image: "images/art/f4.jpg"
    },
    {
        name: "JDChristo",
        icon: "images/art/n2.jpg",
        image: "images/art/f5.jpg"
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