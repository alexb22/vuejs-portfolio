<template>
	<div class="contentHeadingContainer" ref="triggerRef">
		<div class="allHeadings">
			<h1>
				<span 
				v-for="content in contentHeading"
				v-bind:key="content.id"
				v-bind:data="content.data" 
				class="headingWords">
					{{ content.data }}
				</span>
				<div v-bind:style="{ backgroundColor: color }" class="headingUnderline" ref="headingUnderline"></div>
			</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ContentHeading",
		props: ['contentHeading', 'color'],
		data: function() {
			return {
				waypoints: [],
				contentTrigger: null,
				headingUnderline: null
			}
		},
		methods: {
			cacheElements() {
				this.contentTrigger = this.$refs.triggerRef;
				this.headingUnderline = this.$refs.headingUnderline;
			},
			initializeWaypoints() {
				var underlineElement = this.headingUnderline;
				var waypoint = new Waypoint({
					element: this.contentTrigger,
					handler: function(direction) {
						if (direction == "down") {
							this.element.classList.add("fadeInTransition");
							underlineElement.classList.add("scaleBig");
						}
						else {
							this.element.classList.remove("fadeInTransition");
							underlineElement.classList.remove("scaleBig");
						}
					},
					offset: "85%"
				});
				// var fadeOutWaypoint = new Waypoint({
				// 	element: this.contentTrigger,
				// 	handler: function(direction) {
				// 		if (direction == "down") {
				// 			this.element.classList.remove("fadeInTransition");
				// 			underlineElement.classList.remove("scaleBig");
				// 		}
				// 		else {
				// 			this.element.classList.add("fadeInTransition");
				// 			underlineElement.classList.add("scaleBig");
				// 		}
				// 	}
				// });
				this.waypoints.push(waypoint);
				// this.waypoints.push(fadeOutWaypoint);
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

	.contentHeadingContainer {
		height: 20vh;
		width: 90%;
		margin: auto;
		position: relative;
		z-index: 20;
		opacity: 0;
		transition: opacity 0.3s ease-out;
	}

	.allHeadings {
		position: absolute;
		width: 90%;
		margin: auto;
		z-index: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: auto;
		/*font-size: 1.2em;*/
		text-align: center;
		color: #F2F2F2;
	}

	.headingWords {
		position: relative;
		z-index: 0;
		display: block;
		opacity: 1;
		overflow: hidden;
		white-space: nowrap;
		font-weight: bold;
	}

	@media only screen and (min-width: 600px) {
		.contentHeadingContainer {
			width: 80%;
		}

		.allHeadings {
			position: absolute;
			z-index: 0;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 70%;
			margin: auto;
			/*font-size: 3em;*/
			text-align: center;
			color: #F2F2F2;
		}
	}

</style>