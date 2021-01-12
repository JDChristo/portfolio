
const skillCircularData = [
    {
        skillName : "C#",
        percent : 95,
    },
    {
        skillName : "C++",
        percent : 93,
    },
    {
        skillName : "Unity",
        percent : 90,
    },
    {
        skillName : "Cocos Creator",
        percent : 85,
    },
    {
        skillName : "TypeScript",
        percent : 89,
    },
    {
        skillName : "Blender",
        percent : 85,
    },
    {
        skillName : "Photoshop",
        percent : 85,
    },
    {
        skillName : "Game Design",
        percent : 90,
    }
];

const skillProgressLeftData = [
    {
        skillName : "C++",
        percent : 93,
    },
    {
        skillName : "C#",
        percent : 95,
    },
    {
        skillName : "TypeScript",
        percent : 89,
    },
    {
        skillName : "JavaScript",
        percent : 90,
    },
    {
        skillName : "Html",
        percent : 90,
    },
    {
        skillName : "Python",
        percent : 75,
    },
    {
        skillName : "Java",
        percent : 85,
    }
];
const skillProgressRightData = [
    {
        skillName : "Unity",
        percent : 90,
    },
    {
        skillName : "Godot",
        percent : 90,
    },
    {
        skillName : "Cocos Creator",
        percent : 85,
    },
    {
        skillName : "OpenGL",
        percent : 75,
    },
    {
        skillName : "Phaser 3",
        percent : 80,
    },
    {
        skillName : "OpenCV",
        percent : 75,
    },
    {
        skillName : "AR Foundation",
        percent : 85,
    }
];
document.getElementById("section-skills-circle").innerHTML = `
${skillCircularData.map(function(skill){
    return`
    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
		<div class="chart" data-percent="${skill.percent}"><span><strong>${skill.skillName}</strong>${skill.percent}%</span></div>
	</div>
    `
}).join(' ')}`

var index = 0;

function currentIndex(){
    index++;
    if(index >6){
        index = 0;
    }
    return index;
}

document.getElementById("section-skills-progress").innerHTML = `
<div class="col-md-6">
    ${skillProgressLeftData.map(function(skill){
        return`
        <div class="progress-wrap">
			<h3><span class="name-left">${skill.skillName}</span><span class="value-right">${skill.percent}</span></h3>
			<div class="progress">
			    <div class="progress-bar progress-bar-${this.currentIndex()} progress-bar-striped active" role="progressbar"
			    aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100" style="width:${skill.percent}%">
				</div>
			</div>
		</div>
        `
    }).join(' ')}
</div>

<div class="col-md-6">
    ${skillProgressRightData.map(function(skill){
        return`
        <div class="progress-wrap">
			<h3><span class="name-left">${skill.skillName}</span><span class="value-right">${skill.percent}</span></h3>
			<div class="progress">
			    <div class="progress-bar progress-bar-${this.currentIndex()} progress-bar-striped active" role="progressbar"
			    aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100" style="width:${skill.percent}%">
				</div>
			</div>
		</div>
        `
    }).join(' ')}
</div>
`