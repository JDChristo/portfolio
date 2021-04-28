const projectData = [
    {
        projectName: "Design Patterns",
        projectType: "Study, C#",
        imageSrc: "images/app/dp.jpg",
        projectLink: "https://github.com/JDChristo/Design-Pattern-in-c-sharp",
        description: " Git Repo for Design Patterns "
    },
    {
        projectName: "Tanks War",
        projectType: "Phaser 3, JS, Html, CSS",
        imageSrc: "images/app/tank.png",
        projectLink: "https://jd-christo.itch.io/tanks-war",
        description: "Simple tank war game made using phaser 3"
    },
    {
        projectName: "Pong AI",
        projectType: "Love2D, Lua, AI",
        imageSrc: "images/app/pong.png",
        projectLink: "https://jd-christo.itch.io/pong-ai",
        description: "Pong with ai. Made with love2d engine"
    },
    {
        projectName: "Keanu",
        projectType: "Unity, C#",
        imageSrc: "images/app/keanu.png",
        projectLink: "https://jd-christo.itch.io/keanu",
        description: " Keanu is a cube lost in unknown space. Help him in his journey through this musical puzzle game"
    },
    {
        projectName: "GEHENNA",
        projectType: "Unity, C#",
        imageSrc: "images/app/geh.png",
        projectLink: "https://jd-christo.itch.io/",
        description: "Open World Survival, Player Controller, NPC Manager, NPC Crowd System, Crafting System, UI System, Art & Animation"
    },
    {
        projectName: "Basic 3",
        projectType: "Unity, C#",
        imageSrc: "images/app/tile_2.png",
        projectLink: "http://jd-christo.itch.io/basic-3",
        description: " Combine The Tiles And Eat Them, But Look Out For Void. Merge and feed on number blocks and increase your score."
    },
    {
        projectName: "Dot in Black and White",
        projectType: "Unity, C#",
        imageSrc: "images/app/Tile.png",
        projectLink: "https://jd-christo.itch.io/dot",
        description: " Jump and float your way through dangerous black and white platform in this rhythmic platform game. Prepare for almost impossible challenges."
    },
    {
        projectName: "Missile",
        projectType: "Unity, C#",
        imageSrc: "images/app/icon.jpg",
        projectLink: "https://jd-christo.itch.io/missile-game",
        description: " Missile is a clone game of same name - Missile! "
    },
    {
        projectName: "Squashy Traffic",
        projectType: "Unity, C#",
        imageSrc: "images/app/ve.png",
        projectLink: "https://jd-christo.itch.io/squash",
        description: " Manage Road Junction by controlling the traffic lights. You can use coins to repair damaged traffic lights when they need maintenance. "
    },
    {
        projectName: "Ar Earth Project",
        projectType: "Unity, C#",
        imageSrc: "images/app/ear.png",
        projectLink: "https://jd-christo.itch.io/ar-earth",
        description: " Marker based AR Project. Download Target png. "
    },
    {
        projectName: "Simple Chess",
        projectType: "Unity, C#",
        imageSrc: "images/app/Chessboard.png",
        projectLink: "https://jd-christo.itch.io/simple-chess",
        description: " Its Chess. "
    },
    {
        projectName: "Runner",
        projectType: "Unity, C#",
        imageSrc: "images/app/run.png",
        projectLink: "https://jd-christo.itch.io/runner-demo",
        description: " A hyper-casual game. Jump to the higher stage. Jump using Mouse Button or Tap for android. The Game in development state. "
    },
    {
        projectName: "Little Explorer",
        projectType: "Unity, C#",
        imageSrc: "images/app/ex.png",
        projectLink: "https://jd-christo.itch.io/little-explorer",
        description: " A small gravity physics game. Control and Explore to collect stars "
    },
    {
        projectName: "Tic Tac Toe",
        projectType: "C#, WPF",
        imageSrc: "images/app/ttt.png",
        projectLink: "https://jd-christo.itch.io/tictactoe",
        description: " Simple tic tac toe game made using c# and WPF"
    },
    {
        projectName: "JD Template",
        projectType: "Unity, C#, Tool",
        imageSrc: "images/portfolio-1.jpg",
        projectLink: "https://jd-christo.itch.io/",
        description: "Starter Template"
    }
];
const labData = [
    {
        projectName: "Lazy Ham Name",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "Follow piggy is on a quest for an amount of fruit beyond any pigs dreams. Lazy Ham is upcoming game inspired from SnakeBird."
    },
    {
        projectName: "Kitchen CartName",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "Two player 2d cooking game. Highly inspired by Overcooked, Good Pizza"
    },
    {
        projectName: "Squashy Traffic 2",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "Game is a puzzle game of increasing difficulty in which each level is a challenging game of logic. To complete the level, you have to rotate the road and create a perfect road way."
    },
    {
        projectName: "Excul",
        projectType: "Tool",
        imageSrc: "images/portfolio-1.jpg",
        description: "A unity tool to read excel sheet."
    },
    {
        projectName: "Ping Pong RX",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "Multiplayer Ping Pong game with power ups and extras."
    },
    {
        projectName: "All UI",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "All UI I created in single game"
    },
    {
        projectName: "Helio",
        projectType: "Game",
        imageSrc: "images/portfolio-1.jpg",
        description: "Helio - multiplayer game"
    }
];

document.getElementById("section-works").innerHTML = `

<div id="fh5co-work" class="fh5co-bg-dark">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading-white">
					<h2>Made with Unity</h2>
				</div>
            </div>
            <div class="row work-cards">
                ${projectData.map(function (project) {
    if (project.projectType == "Unity, C#") {
        return `
                    <div class="col-md-3 col-padding animate-box">
                    <div class="cards">
				    <figure class="card">
                    
					<img src="${project.imageSrc}" />
					<figcaption>${project.projectName} 
                    <p>${project.projectType} </p>
                    <p>${project.description} </p>
                    <a target="_blank" href="${project.projectLink}">
                    <button><span>Play</span></button>
                    </a>
                    </figcaption>
				    </figure>
			        </div>
			        </div>
                    `
    }
}).join(' ')}
				
            </div>
		</div>
	</div>
`
document.getElementById("section-others").innerHTML = `

<div id="fh5co-work" class="fh5co-bg-dark">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading-white">
					<h2>Others</h2>
				</div>
            </div>
            <div class="row work-cards">
                ${projectData.map(function (project) {
    if (project.projectType !== "Unity, C#") {
        return `
                    <div class="col-md-3 col-padding animate-box">
                    <div class="cards">
				    <figure class="card">
					<img src="${project.imageSrc}" />
					
					<figcaption>${project.projectName} 
                    <p>${project.projectType} </p>
                    <p>${project.description} </p>
                    <a target="_blank" href="${project.projectLink}">
                    <button><span>Play</span></button>
                    </a>
                    </figcaption>
				    </figure>
			        </div>
			        </div>
                    `
    }
    else {
        return
    }
}).join(' ')}
				
            </div>
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <p> <br> <br>
                        <a target="_blank" href="https://jd-christo.itch.io/" class="btn btn-default btn-lg">More at Itch.io</a>
					</p>
				</div>
			</div>
		</div>
	</div>s
`
document.getElementById("section-labs").innerHTML = `
    ${labData.map(function (project) {
    return `
        <div class="col-md-4 animate-box">
        <div class="post">
		<div class="title-post">
		<img src=${project.imageSrc} alt="">
		</div>
		<div class="descr">
        <div class="descr-content">
		<h1>${project.projectName}</h1>
        <p>${project.description}</p>
		<div class="cont-infos">
		<div class="toolUsed">
		<span>${project.projectType}</span>
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
        `
}).join(' ')}
`
