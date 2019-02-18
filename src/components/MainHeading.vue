<template>
	<div id="mainHeading">
		<h1 id="headingTrigger" class="heading">
			<MainHeadingWords
				v-for="heading in mainHeadingPosts"
				v-bind:key="heading.id"
				v-bind:headingContent="heading.headingContent">
			</MainHeadingWords>
		</h1>
	</div>
</template>

<script>
	import MainHeadingWords from './MainHeadingWords.vue';

	export default {
		name: "MainHeading",
		components: {
			MainHeadingWords
		},
	    data: function() {
	      return {
	        waypoints: [],
	        mainHeadingElement: null,
	        headingTriggerElement: null
	      }
	    },
		props: ['mainHeadingPosts'],
		methods: {
			cacheElements() {
				this.mainHeadingElement = document.getElementById("mainHeading");
				this.headingTriggerElement = document.getElementById("headingTrigger");
			},
			initializeWaypoints() {
				var mainHeading = this.mainHeadingElement;
				var waypoint = new Waypoint({
					element: this.headingTriggerElement,
					handler: function(direction) {
						if (direction == "down") {
							mainHeading.classList.add("fadeOutQuick");
						}
						else {
							mainHeading.classList.remove("fadeOutQuick");
						}
					}
				});
				this.waypoints.push(waypoint);
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

	#mainHeading {
		transition: opacity 0.3s ease-in;
	}

	.heading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		text-align: left;
		/*font-size: 1.4em;*/
		font-weight: bolder;
		color: #F2F2F2;
		width: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media only screen and (min-width: 600px) {
		.heading {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;
			text-align: left;
			/*font-size: 3em;*/
			color: #F2F2F2;
			width: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

</style>