const projectData = [
    {
        projectName : "Project Name",
        projectType : "Illustration",
        imageSrc    : "images/portfolio-1.jpg",
        projectLink : "#"
    },
    {
        projectName : "Project Name",
        projectType : "Illustration",
        imageSrc    : "images/portfolio-1.jpg",
        projectLink : "#"
    }
];
const labData = [
    {
        projectName : "Project Name",
        projectType : "Illustration",
        imageSrc    : "images/portfolio-1.jpg",
        description : "fjdagjldafjkahsjafshk ahsfkjhaksfhaksjhfjfhaksjfhaks hfkajshfkajhsfkja hfskjahfkashkfjhakjf"
    },
    {
        projectName : "Project Name",
        projectType : "Illustration",
        imageSrc    : "images/portfolio-1.jpg",
        description : "fjdagjldafjkahsj afshkahsfkjhaksfhaksjhfjfhak sjfhakshfkajshfkajhsfk jahfskjahfkashkfjhakjf"
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
					<a href="${project.projectLink}" class="work" style="background-image: url(${project.imageSrc});">
						<div class="desc">
							<h3>${project.projectName}</h3>
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
					<span class="posted_on">${project.projectType}</span>
					<h3>${project.projectName}</h3>
					<p>${project.description}</p>
				</div> 
			</div>
		</div>
        `
    }).join(' ')}
`
