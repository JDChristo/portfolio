const projectData = [
    {
        projectName : "Design Patterns",
        projectType : "Study",
        imageSrc    : "images/app/dp.jpg",
        projectLink : "https://github.com/JDChristo/Design-Pattern-in-c-sharp",
        description : " Git Repo for Design Patterns "
    },
    {
        projectName : "Keanu",
        projectType : "Game",
        imageSrc    : "images/app/keanu.png",
        projectLink : "https://jd-christo.itch.io/keanu",
        description : " Keanu is a cube lost in unknown space. Help him in his journey through this musical puzzle game"
    },
    {
        projectName : "GEHENNA",
        projectType : "Game",
        imageSrc    : "images/app/geh.png",
        projectLink : "https://jd-christo.itch.io/",
        description : "Open World Survival, Worked on - Player Controller - NPC Manager - NPC Crowd System - Crafting System - UI System - Art & Animation"
    },
    {
        projectName : "Basic 3",
        projectType : "Game",
        imageSrc    : "images/app/tile_2.png",
        projectLink : "http://jd-christo.itch.io/basic-3",
        description : " Combine The Tiles And Eat Them, But Look Out For Void. Merge and feed on number blocks and increase your score."
    },
    {
        projectName : "Dot in Black and White",
        projectType : "Game",
        imageSrc    : "images/app/Tile.png",
        projectLink : "https://jd-christo.itch.io/dot",
        description : " Jump and float your way through dangerous black and white platform in this rhythmic platform game. Prepare for almost impossible challenges."
    },
    {
        projectName : "Missile",
        projectType : "Game",
        imageSrc    : "images/app/icon.jpg",
        projectLink : "https://jd-christo.itch.io/missile-game",
        description : " Missile is a clone game of same name - Missile! "
    },
    {
        projectName : "Squashy Traffic",
        projectType : "Game",
        imageSrc    : "images/app/ve.png",
        projectLink : "https://jd-christo.itch.io/squash",
        description : " This is a game about managing a Road Junction by controlling the traffic lights. You can use coins to repair damaged traffic lights when they need maintenance. "
    },
    {
        projectName : "Ar Earth Project",
        projectType : "Game",
        imageSrc    : "images/app/ear.png",
        projectLink : "https://jd-christo.itch.io/ar-earth",
        description : " Marker based AR Project. Download Target png. "
    },
    {
        projectName : "Simple Chess",
        projectType : "Game",
        imageSrc    : "images/app/Chessboard.png",
        projectLink : "https://jd-christo.itch.io/simple-chess",
        description : " Its Chess. "
    },
    {
        projectName : "Runner",
        projectType : "Game",
        imageSrc    : "images/app/run.png",
        projectLink : "https://jd-christo.itch.io/runner-demo",
        description : " A hyper-casual game. Jump to the higher stage  and don't fall. Jump using Mouse Button or Tap for android. The Game in development state. "
    },
    {
        projectName : "Little Explorer",
        projectType : "Game",
        imageSrc    : "images/app/ex.png",
        projectLink : "https://jd-christo.itch.io/little-explorer",
        description : " A small gravity physics game. Control and Explore to collect stars "
    }
];
const labData = [
    {
        projectName : "Lazy Ham Name",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "Follow piggy is on a quest for an amount of fruit beyond any pigs dreams. Lazy Ham is upcoming game inspired from SnakeBird. Lazy Ham is a challenging puzzle game"
    },
    {
        projectName : "Kitchen CartName",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "Two player 2d cooking game. Highly inspired by Overcooked, Good Pizza"
    },
    {
        projectName : "Squashy Traffic 2",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "Game is a puzzle game of increasing difficulty in which each level is a challenging game of logic and intelligence. To complete the level, you have to rotate the road and create a perfect road way."
    },
    {
        projectName : "Excul",
        projectType : "Tool",
        imageSrc    : "images/portfolio-1.jpg",
        description : "A unity tool to read excel sheet."
    },
    {
        projectName : "Ping Pong RX",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "Multiplayer Ping Pong game with power ups and extras."
    },
    {
        projectName : "All UI",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "All UI I created in single game"
    },
    {
        projectName : "Helio",
        projectType : "Game",
        imageSrc    : "images/portfolio-1.jpg",
        description : "Helio - multiplayer game"
    }
];

document.getElementById("section-works").innerHTML = `

<div id="fh5co-work" class="fh5co-bg-dark">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading-white">
					<h2>Work</h2>
				</div>
            </div>
            <div class="row">
                ${projectData.map(function(project){
                    return`
                    <div class="col-md-3 text-center col-padding animate-box">
					<a target="_blank" href="${project.projectLink}" class="work" style="background-image: url(${project.imageSrc});">
						<div class="desc">
                            <h3>${project.projectName}</h3>
                            <p>${project.description}</p>
							<span>${project.projectType}</span>
						</div>
					</a>
				    </div>
                    `
                }).join(' ')}
				
			</div>
		</div>
	</div>
`
document.getElementById("section-labs").innerHTML = `
    ${labData.map(function(project){
        return`
        <div class="col-md-4">
			<div class="fh5co-blog animate-box">
				<image class="blog-bg" style="background-image: url(${project.imageSrc});"></image>
				<div class="blog-text">
					<h3>${project.projectName}</h3>
					<span class="posted_on">${project.projectType}</span>
					<p>${project.description}</p>
				</div> 
			</div>
		</div>
        `
    }).join(' ')}
`
