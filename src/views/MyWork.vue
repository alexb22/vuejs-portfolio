<template>
  <div class="work">
    <MainHeading :mainHeadingPosts="mainHeadingPosts"></MainHeading>
	<!-- Document flow -->
	<div class="hello"></div>
	<div class="whiteSpace"></div>
	<ContentHeading :contentHeading="contentHeadingOne" :color="color"></ContentHeading>
	<WorkContent
		v-for="project in projects"
		v-bind:key="project.id"
		v-bind:projectPicPath="project.projectPicPath"
		v-bind:projectPicFlag="project.projectPicFlag"
		v-bind:projectTitle="project.projectTitle"
		v-bind:projectDesc="project.projectDesc"
		v-bind:projectTech="project.projectTech"
		v-bind:projectDataStructsAlg="project.projectDataStructsAlg">
	</WorkContent>
  </div>
</template>

<script>
	import MainHeading from '@/components/MainHeading.vue';
	import ContentHeading from '@/components/ContentHeading.vue';
	import WorkContent from '@/components/WorkContent.vue';

	export default {
		name: "MyWork",
		components: {
			MainHeading,
			ContentHeading,
			WorkContent
		},
		data: function() {
	    	return {
	    		mainHeadingPosts: [
		    		{ id: 1, headingContent: "My Work."},
		    	],
		    	projects: [
		    		{ 
		    			id: 1,
		    		    projectTitle: "Survey Reader",
		    		  	projectDesc: `
		    		  	Application that parses .csv output from a survey and displays results in graphical format.
		    		  `,
		    		  	projectTech: ["Java"],
		    		  	projectDataStructsAlg: ["Custom Linked List", "Selection Sort"],
		    		  	projectPicPath: "survey_new.png",
		    		  	projectPicFlag: false
		    		},
		    		{ 
		    			id: 2,
		    		  	projectTitle: "Geographic Information System",
		    		  	projectDesc: `
		    		  		Application that stores and indexes geographic information. Builds and maintains several in-memory data structures to support different types of searches.
		    		  `,
		    		  	projectTech: ["Java"],
		    		  	projectDataStructsAlg: ["Custom Hash Map", "Custom PR Quadtree", "Buffer Pool"],
		    		  	projectPicPath: "java.svg",
		    		  	projectPicFlag: false
		    		},
		    		{
		    			id: 3,
		    			projectTitle: "Moss Arts Center App",
		    			projectDesc: `
		    				Mobile application concept for the Moss Arts Center, a theater for the performing arts in Blacksburg, VA.
		    			`,
		    			projectTech: ["Java", "Google Firebase"],
		    			projectDataStructsAlg: ["Custom JSON Parser", "Push Notifications"],
		    		  	projectPicPath: "mac1.png",
		    		  	projectPicFlag: true
		    		},
		    		{
		    			id: 4,
		    			projectTitle: "alexbbrothers.com",
		    			projectDesc: `
		    				My personal website where I can showcase my work as a developer and learn about more about front-end technologies.
		    			`,
		    			projectTech: ["Vue.JS", "HTML5", "CSS3", "Vanilla JavaScript"],
		    			projectDataStructsAlg: ["None"],
		    		  	projectPicPath: "personal_website.png",
		    		  	projectPicFlag: false
		    		}
		    	],
		    	contentHeadingOne: [
		    		{ id: 1, data: "My Projects"}
		    	],
		    	waypoints: [],
		    	body: null,
		    	splatElement: null,
		    	splatTrigger: null,
		    	color: "#01abff"
	    	}
	    },
	    methods: {
			cacheElements() {
				this.body = document.getElementById("body");
				this.body.style.backgroundColor = "#0165ff";
				this.splatElement = document.getElementById("splat");
				this.splatElement.style.backgroundColor = "#0165ff";
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


</style>
