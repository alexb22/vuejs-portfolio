<template>
  <div class="workContent">
  	<div class="grid" ref="gridTrigger">
  		<div class="picture">
  			<div class="picture-container" ref="projectPicRef">
  				<img v-bind:class="{ verticalFlag: projectPicFlag }" class="project-pic" :src="require('../assets/' + projectPicPath)" />
  			</div>
  			<div class="pictureSplatContainer">
  				<div class="pictureSplat">
  					
  				</div>
  			</div>
  		</div>
  		<div class="information" ref="infoRef">
  			<div class="container">
  				<h3 class="project-title">
  					{{ projectTitle }}
  					<div class="headingUnderline projectUnderline"></div>
	  			</h3>
	  			<p class="project-desc"> {{ projectDesc }} </p>
	  			<div class="project-tech">
	  				<h4 class="project-tech-label">
	  					Technologies
	  					<div class="headingUnderline projectUnderline"></div>
	  				</h4>
	  				<p v-for="tech in projectTech" class="project-desc">{{ tech }}</p>
	  			</div>
	  			<div class="project-data-structs-algs">
	  				<h4 class="project-tech-label">
	  					Data Structures and Algorithms
	  					<div class="headingUnderline projectUnderline"></div>
	  				</h4>
	  				<p v-for="data in projectDataStructsAlg" class="project-desc">{{ data }}</p>
	  			</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>

	export default {
		name: "WorkContent",
		components: {
			
		},
		data: function() {
	    	return {
	    		gridElement: null,
	    		projectPic: null,
	    		waypoints: []
	    	}
	    },
	    props: [
			'projectTitle',
			'projectDesc',
			'projectPicPath',
			'projectPicFlag',
			'projectTech',
			'projectDataStructsAlg'
		],
	    methods: {
			cacheElements() {
				this.gridElement = this.$refs.gridTrigger;
				this.projectPic = this.$refs.projectPicRef;
			},
			initializeWaypoints() {
				// var projectPicContainer = this.projectPic;
				// var waypoint = new Waypoint({
				// 	element: this.gridElement,
				// 	handler: function(direction) {
				// 		if (direction == "down") {
				// 			projectPicContainer.classList.add("fadeInLeft");
				// 		}
				// 		else {
				// 			projectPicContainer.classList.remove("fadeInLeft");
				// 		}
				// 	},
				// 	offset: "80%"
				// });
				// var contentWaypoint = new Waypoint({
				// 	element: this.contentWaypointElement,
				// 	handler: function() {
				// 		this.element.classList.toggle("fadeInTransition");
				// 	},
				// 	offset: "85%"
				// });
				// var fadeOutContentWaypoint = new Waypoint({
				// 	element: this.contentWaypointElement,
				// 	handler: function() {
				// 		this.element.classList.toggle("fadeInTransition");
				// 	}
				// });
				// this.waypoints.push(waypoint);
				// this.waypoints.push(fadeOutContentWaypoint);
		    },
	    },

	    mounted() {
	    	this.cacheElements();
	    	this.initializeWaypoints();
        },
        beforeDestroy() {
        	for (var i = 0; i < this.waypoints.length; i++) {
        		this.waypoints[i].destroy();
        	}
        }
	}
</script>

<style scoped>

	.workContent {
		position: relative;
		height: auto;
		padding: 0vh 0 10vh 0;
		overflow: hidden;
	}

	.container {
		width: 90%;
		margin: auto;
	}
	
	/*.grid {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: 
			"picture"
			"information";
	}*/

	.grid {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: auto;
		grid-template-columns: auto;
		-ms-grid-rows: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		    grid-template-areas: 
			"picture"
			"information";
	}

	/*.picture {
		grid-area: picture;
		position: relative;
		height: auto;
	}*/

	.picture {
		grid-area: picture;
		position: relative;
		height: auto;
		-ms-grid-row:1; 
   		-ms-grid-column:1; 
	}

	.fadeInLeft {
		opacity: 1 !important;
	}

	.information {
		position: relative;
		grid-area: information;
		font-size: 1.3em;
		-ms-grid-row:2; 
   		-ms-grid-column:1;
	}

	.picture-container {
		position: relative;
		height: 100%;
		transition: opacity 0.5s ease-out;
		opacity: 1;
	}

	.project-pic {
		position: absolute;
		height: auto;
	  	width: 95%;
	  	max-width: 300px;
		height: auto;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: opacity 0.3s ease-in 0.2s;
	}

	.verticalFlag {
		height: 300px !important;
		width: auto !important;
	}

	.pictureSplatContainer {
	  position: absolute;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 95%;
	  width: 95%;
	  top: 70%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  overflow: visible;
	  z-index: -1;
	  transition: transform 0.5s ease-in;
	  transform-origin: 50% 50%;
	  will-change: transform;
	}

	.pictureSplat {
	  position: relative;
	  content: "";
	  height: 95%;
	  width: 95%;
	  max-width: 250px;
	  max-height: 250px;
	  border-radius: 50%;
	  animation: calmSquishing 5s infinite alternate, calmBlobAnimation 7s infinite alternate;
	  -webkit-box-shadow: 0px 0px 24px 1px rgba(1, 171, 255, 0.75);
	  -moz-box-shadow: 0px 0px 24px 1px rgba(1, 171, 255, 0.75);
	  box-shadow: 0px 0px 24px 1px rgba(1, 171, 255, 0.75);
	  transition: transform 0.3s ease-in, opacity 0.3s ease-in, background-color 0.1s linear 0.25s;
	  will-change: transform;
	  background-color: #f7f7f7;
	  transition: opacity 0.3s ease-in;
	}

	.project-title {
		font-size: 1.2em;
		text-align: left;
		color: #F2F2F2;
	}

	.project-desc {
		color: white;
		font-size: 0.7em;
		font-weight: lighter;
		margin: 0;
		padding: 0;
	}

	.projectUnderline {
		position: relative;
		content: "";
		height: 3px;
		width: 30%;
		margin: 10px auto 5px 0;
		transition: transform 0.3s ease-out;
		transform: scaleX(0);
		background-color: #01abff;
		transform: scaleX(1) !important;
	}

	.project-tech-label {
		font-size: 0.8em;
		text-align: left;
		color: #F2F2F2;
		display: inline-block;
		width: auto;
		margin: 1.33em 0 0.5em 0;
	}

	@media only screen and (min-width: 760px) {

		/*.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-template-areas: 
				"picture information";
		}*/

		.grid {
			-ms-grid-columns: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
			-ms-grid-rows: 1fr;
			grid-template-rows: 1fr;
			    grid-template-areas: 
				"picture information";
		}

		.information {
			position: relative;
			grid-area: information;
			font-size: 1em;
			-ms-grid-row:1; 
   			-ms-grid-column:2;
		}

		.picture {
			grid-area: picture;
			position: relative;
			height: auto;
			-ms-grid-row:1; 
	   		-ms-grid-column:1; 
		}

		.project-pic {
		  	width: 95%;
		  	top: 50%;
		  	max-width: 400px;
		}

		.pictureSplat {
			height: 90%;
	  		width: 90%;
	  		max-width: 325px;
	  		max-height: 325px;
		}

		.verticalFlag {
			height: 425px !important;
		}

		.workContent {
			padding: 20vh 0 30vh 0;
		}

		.pictureSplatContainer {
			top: 50%;
		}

  	}

</style>



