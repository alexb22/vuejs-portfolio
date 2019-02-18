<template>
	<div class="home">
		<MainHeading :mainHeadingPosts="mainHeadingPosts"></MainHeading>
		<!-- Document flow -->
		<div class="hello"></div>
		<div class="whiteSpace"></div>
		<ContentHeading :contentHeading="contentHeadingOne" :color="color"></ContentHeading>
		<div id="introContent">
			<div class="allContent">
				<h3 id="contentWaypoint">
					{{ contentData.data }}
				</h3>
			</div>
		</div>
		<div class="whiteSpace"></div>
		<ContentHeading :contentHeading="contentHeadingTwo" :color="color"></ContentHeading>
		<IconSection></IconSection>
		<div class="whiteSpace"></div>
	</div>
</template>

<script>
	import MainHeading from '@/components/MainHeading.vue';
	import ContentHeading from '@/components/ContentHeading.vue';
	import IconSection from '@/components/IconSection.vue';

	export default {
		name: "Home",
		components: {
			MainHeading,
			ContentHeading,
			IconSection
		},
		data: function() {
	    	return {
	    		mainHeadingPosts: [
		    		{ id: 1, headingContent: "Hi,"},
		    		{ id: 2, headingContent: "I'm Alex Brothers."}
		    	],
		    	contentHeadingOne: [
		    		{ id: 1, data: "Welcome to my"},
		    		{ id: 2, data: "portfolio."}
		    	],
		    	contentHeadingTwo: [
		    		{ id: 1, data: "My Expertise"}
		    	],
		    	contentData: {
		    		data: `
		    			I'm a developer based in the Washington DC metro area. I'm experienced 
						with Java, JavaScript, and front end frameworks like Vue.js, which I used to 
						make this website.
		    		`
		    	},
		    	color: "#01d401",
		    	waypoints: [],
		    	splatElement: null,
		    	contentWaypointElement: null,
		    	splatTrigger: null,
		    	body: null
	    	}
	    },
		methods: {
			cacheElements() {
				this.body = document.getElementById("body");
				this.body.style.backgroundColor = "#008B00";
				this.splatElement = document.getElementById("splat");
				this.splatElement.style.backgroundColor = "#008B00";
				this.contentWaypointElement = document.getElementById("contentWaypoint");
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
				var contentWaypoint = new Waypoint({
					element: this.contentWaypointElement,
					handler: function(direction) {
						if (direction == "down") {
							this.element.classList.add("fadeInTransition");
							console.log("test");
						}
						else {
							this.element.classList.remove("fadeInTransition");
						}
					},
					offset: "85%"
				});
				// var fadeOutContentWaypoint = new Waypoint({
				// 	element: this.contentWaypointElement,
				// 	handler: function(direction) {
				// 		if (direction == "down") {
				// 			this.element.classList.remove("fadeInTransition");
				// 		}
				// 		else {
				// 			this.element.classList.add("fadeInTransition");
				// 		}
				// 	}
				// });
				this.waypoints.push(waypoint);
				this.waypoints.push(contentWaypoint);
				// this.waypoints.push(fadeOutContentWaypoint);
			}
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

#introContent {
	position: relative;
	padding: 10vh 0 10vh 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.allContent {
	margin: 20px;
	width: 95%;
	position: relative;
	z-index: 0;
	margin: auto;
	font-size: 0.8em;
	text-align: center;
	color: #F2F2F2;
}

.allContent > h3 {
	width: 90%;
	margin: auto;
	font-weight: lighter;
}

#contentWaypoint {
	opacity: 0;
	transition: opacity 0.3s ease-in;
}

.transformDown {
	animation: transformDown 0.5s ease-out;
}



@media only screen and (min-width: 600px) {

	#introContent {
		padding: 20vh 0 20vh 0;
	}

	.allContent {
		margin: 10px;
		width: 80%;
	}
}
</style>