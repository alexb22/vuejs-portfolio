<template>
  <div class="contact">
    <MainHeading :mainHeadingPosts="mainHeadingPosts"></MainHeading>
  </div>
</template>

<script>
	import MainHeading from '@/components/MainHeading.vue';

	export default {
		name: "Contact",
		components: {
			MainHeading
		},
		data: function() {
	    	return {
	    		mainHeadingPosts: [
		    		{ id: 1, headingContent: "hello@alexbbrothers.com" },
		    	],
		    	body: null,
		    	splatElement: null,
		    	arrow: null
	    	}
	    },
	    methods: {
			cacheElements() {
				this.body = document.getElementById("body");
				this.body.style.backgroundColor = "#02bf8b";
				this.splatElement = document.getElementById("splat");
				this.splatElement.style.backgroundColor = "#02bf8b";
				this.arrow = document.getElementById("arrow");
				this.arrow.style.display = "none";
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
	    	// this.initializeWaypoints();
        },
        // beforeDestroy() {
        // 	for (var i = 0; i < this.waypoints.length; i++) {
        // 		this.waypoints[i].destroy();
        // 	}
        // }
	}
</script>

<style scoped>
	
	* {
		font-size: 3.5vw;
	}

	@media only screen and (min-width: 760px) {

		* {
			font-size: 3vw;
		}
		
	}

</style>