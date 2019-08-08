<template>
	<div id="iconSection">
		<div class="iconContainer">
		  <div class="fontAwesomeContainer">
		  	<font-awesome-icon id="mobile" icon="mobile-alt" class="fa-4x fa" />
		  </div>
	      <h3>Responsive</h3>
	      <p>I design with a mobile first mindset. My applications will work seamlessly on any device.</p>
	    </div>
	    <div class="iconContainer">
	      <div class="fontAwesomeContainer">
		  	<font-awesome-icon id="handPointer" icon="hand-pointer" class="fa-4x fa" />
		  </div>
	      <h3>Interactive</h3>
	      <p>I bring pages to life with immersive animations based on user behavior.</p>
	    </div>
	    <div class="iconContainer">
	      <div class="fontAwesomeContainer">
		  	<font-awesome-icon id="rocket" icon="rocket" class="fa-4x fa" />
		  </div>
	      <h3>Fast</h3>
	      <p>I use the latest technologies and optimize my code to reduce loading times and enhance the user experience.</p>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "IconSection",
	    data: function() {
	    	return {
	    		waypointTrigger: null,
	    		waypoints: []
	    	}
	    },
	    methods: {
	    	cacheElements() {
				this.waypointTrigger = document.getElementById("iconSection");
			},
			initializeWaypoints() {
				var iconContainers = document.getElementsByClassName("iconContainer");
				for (var i = 0; i < iconContainers.length; i++) {
					var waypoint = new Waypoint({
						element: iconContainers[i],
						handler: function(direction) {
							if (direction == "down") {
								this.element.classList.add("fadeInTransition");
							}
							else {
								this.element.classList.remove("fadeInTransition");
							}
						},
						offset: "85%"
					});
					this.waypoints.push(waypoint);
				}
			}
	    },
	    beforeDestroy() {
	      for (var i = 0; i < this.waypoints.length; i++) {
	        this.waypoints[i].destroy();
	      }
	    },
	    mounted() {
	    	this.cacheElements();
	    	this.initializeWaypoints();
	    }
	}
</script>

<style scoped>

	#iconSection {
		padding: 10vh 0 10vh 0;
		width: 95%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.fontAwesomeContainer {
		display: inline-block;
		position: relative;
		height: auto;
		width: auto;
		overflow: visible;
		padding-bottom: 20px;
		/*background-color: #01d401;*/
	}

	.iconSplat {
		position: absolute;
		top: -30%;
		left: -30%;
		width: 160%;
		height: 160%;
		background-color: #01d401;
		z-index: -1;
		border-radius: 50%;
		-webkit-box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.75);
		box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.75);
		will-change: transform;
	}

	.animation1 {
		animation: calmSquishing 5s infinite alternate, calmBlobAnimation 7s infinite alternate;
	}
	.animation2 {
		animation: calmSquishing 4s ease-out infinite alternate, calmBlobAnimation 8s ease-in infinite alternate;
	}

	.animation3 {
		animation: calmSquishing 6s ease-in infinite alternate, calmBlobAnimation 6s ease-out infinite alternate;
	}

	.iconContainer {
		width: 75%;
		text-align: center;
		padding: 5vh 10px 5vh 10px;
		opacity: 0;
		transition: opacity 0.3s ease-in;
	}

	.fa {
		color: white;
	}

	h3 {
		color: white;
	}

	p {
		color: white;
		font-size: 1em;
		font-weight: lighter;
	}

	.fadeInTransition {
		opacity: 1 !important;
	}

	@media only screen and (min-width: 600px) {

	#iconSection {
		padding: 20vh 0 20vh 0;
		flex-direction: row;
		align-items: flex-start;
	}

	.iconContainer {
		width: 33%;
		text-align: center;
		margin: 15px;
		opacity: 0;
		transition: opacity 0.3s ease-in;
	}

	p {
		font-size: 0.75em;
	}
}

</style>