<template>
  <div class="resume">
    <MainHeading :mainHeadingPosts="mainHeadingPosts"></MainHeading>
	<!-- Document flow -->
	<div class="hello"></div>
	<div class="whiteSpace"></div>
	<ContentHeading :contentHeading="contentHeadingOne" :color="color"></ContentHeading>
	<EmploymentTimeline></EmploymentTimeline>
	<div class="whiteSpace"></div>
	<ContentHeading :contentHeading="contentHeadingTwo" :color="color"></ContentHeading>
	<div class="skills-area">
		<div class="skills-block">
			<div class="progress-bar">
				<h4>Java</h4>
				<div class="bar">
					<div id="javaBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>JavaScript</h4>
				<div class="bar">
					<div id="javascriptBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>HTML</h4>
				<div class="bar">
					<div id="htmlBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>CSS</h4>
				<div class="bar">
					<div id="cssBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
		</div>
		<div class="skills-block">
			<div class="progress-bar">
				<h4>NoSQL</h4>
				<div class="bar">
					<div id="nosqlBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>Vue.js</h4>
				<div class="bar">
					<div id="vueBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>SQL</h4>
				<div class="bar">
					<div id="sqlBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
			<div class="progress-bar">
				<h4>Android</h4>
				<div class="bar">
					<div id="androidBar" class="bar-filler">
						<br>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="whiteSpace"></div>
	<ContentHeading :contentHeading="contentHeadingThree" :color="color"></ContentHeading>
	<div class="education-block">
		<font-awesome-icon icon="graduation-cap" class="education-icon fa-3x fa" />
		<h3 class="education-heading">
			B.S., Business Information Technology - Computer-Based Decision Support Systems
		</h3>
		<h4 class="education-secondary">Virginia Tech</h4>
		<h4 class="education-secondary">Overall GPA: 3.92</h4>
	</div>
	<div class="education-block">
		<font-awesome-icon icon="laptop" class="education-icon fa-3x fa" />
		<h3 class="education-heading">
			Computer Science - Minor
		</h3>
		<h4 class="education-secondary">Virginia Tech</h4>
		<h4 class="education-secondary">Computer Science GPA: 3.95</h4>
	</div>
	<div class="whiteSpace"></div>
  </div>
</template>

<script>
	import MainHeading from '@/components/MainHeading.vue';
	import ContentHeading from '@/components/ContentHeading.vue';
	import EmploymentTimeline from '@/components/EmploymentTimeline.vue'

	export default {
		name: "MyWork",
		components: {
			MainHeading,
			ContentHeading,
			EmploymentTimeline
		},
		data: function() {
	    	return {
	    		mainHeadingPosts: [
		    		{ id: 1, headingContent: "My Resume." },
		    	],
		    	contentHeadingOne: [
		    		{ id: 1, data: "Employment" }
		    	],
		    	contentHeadingTwo: [
		    		{ id: 1, data: "Skills" }
		    	],
		    	contentHeadingThree: [
		    		{ id: 1, data: "Education" }
		    	],
		    	waypoints: [],
		    	body: null,
		    	splatElement: null,
		    	splatTrigger: null,
		    	color: "#6e00ff"
	    	}
	    },
	    methods: {
			cacheElements() {
				this.body = document.getElementById("body");
				this.body.style.backgroundColor = "#4800a7";
				this.splatElement = document.getElementById("splat");
				this.splatElement.style.backgroundColor = "#4800a7";
				this.splatTrigger = document.getElementsByClassName("contentHeadingContainer")[0];
			},
			initializeWaypoints() {
				var splat = this.splatElement;
				var waypoint = new Waypoint({
					element: this.splatTrigger,
					handler: function(direction) {
						if (direction == "down") {
							splat.classList.add("shrinkTransition");
						}
						else {
							splat.classList.remove("shrinkTransition");
						}
					},
					offset: "85%"
				});
			// 	var contentWaypoint = new Waypoint({
			// 		element: this.contentWaypointElement,
			// 		handler: function() {
			// 			this.element.classList.toggle("fadeInTransition");
			// 		},
			// 		offset: "85%"
			// 	});
			// 	var fadeOutContentWaypoint = new Waypoint({
			// 		element: this.contentWaypointElement,
			// 		handler: function() {
			// 			this.element.classList.toggle("fadeInTransition");
			// 		}
			// 	});
				this.waypoints.push(waypoint);
			// 	this.waypoints.push(contentWaypoint);
			// 	this.waypoints.push(fadeOutContentWaypoint);
			// }
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
	
	.skills-area {
		position: relative;
		width: 85%;
		margin: auto;
		display: column;
		flex-direction: row;
		justify-content: center;
		padding: 10vh 0 10vh 0;
	}

	.skills-block {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		color: #F2F2F2;
		margin: 0;
	}

	.bar {
		background-color: #F2F2F2;
		border-radius: 30px;
		border: 5px solid white;
		overflow: hidden;
		-webkit-box-shadow: 0 16px 6px -10px #444;
	    -moz-box-shadow: 0 16px 6px -10px #444;
	    box-shadow: 0 16px 6px -10px #444;
	    width: 100%;
	    height: 20px;
	}

	#javaBar.bar-filler {
		width: 90%;
	}

	#javascriptBar.bar-filler {
		width: 80%;
	}

	#htmlBar.bar-filler {
		width: 80%;
	}

	#cssBar.bar-filler {
		width: 75%;
	}

	#nosqlBar.bar-filler {
		width: 72%;
	}

	#vueBar.bar-filler {
		width: 70%;
	}

	#sqlBar.bar-filler {
		width: 65%;
	}

	#androidBar.bar-filler {
		width: 65%;
	}

	.bar-filler {
		background: linear-gradient(to right, #6e00ff 50%, #04e8ff);
	}

	.progress-bar {
		width: 100%;
		margin-bottom: 30px;
	}

	.progress-bar > h4 {
		font-size: 1.3em;
		margin: 10px 0 10px 0;
	}

	.education-block {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #F2F2F2;
		padding: 10vh 0 0 0;
	}

	.education-icon {
		color: #6e00ff;
	}

	.education-heading {
		margin: 15px 0 15px 0;
		font-size: 1.1em;
	}

	.education-secondary {
		margin: 15px 0 15px 0;
		font-weight: lighter;
	}

	@media only screen and (min-width: 760px) {

		.skills-area {
			position: relative;
			width: 85%;
			margin: auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 10vh 0 10vh 0;
		}

		.skills-block {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 100%;
			color: #F2F2F2;
			margin: 30px;
		}
	}

</style>