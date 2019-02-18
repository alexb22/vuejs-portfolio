<template>
	<div id="employment-timeline">
		<div class="grid">
			<div class="timeline">
				<div class="date">
					Jan 2019
				</div>
				<div class="line top">
					
				</div>
				<div class="circle">
					
				</div>
			</div>
			<div class="employment">
				<h3 class="employment-title">
					Business & Technology Senior Analyst
				</h3>
				<h4 class="employment-company">
					Accenture Federal Services
				</h4>
			</div>
		</div>
		<div class="grid">
			<div class="timeline">
				<div class="date">
					July 2017
				</div>
				<div class="line bottom">
					
				</div>
				<div class="circle">
					
				</div>
			</div>
			<div class="employment">
				<h3 class="employment-title">
					Business & Technology Analyst
				</h3>
				<h4 class="employment-company">
					Accenture Federal Services
				</h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "EmploymentTimeline",
	    data: function() {
	    	return {
	    		waypoints: []
	    	}
	    },
	    methods: {
	    	cacheElements() {
				
			},
			initializeWaypoints() {
				// var iconContainers = document.getElementsByClassName("iconContainer");
				// for (var i = 0; i < iconContainers.length; i++) {
				// 	var waypoint = new Waypoint({
				// 		element: iconContainers[i],
				// 		handler: function(direction) {
				// 			if (direction == "down") {
				// 				this.element.classList.add("fadeInTransition");
				// 			}
				// 			else {
				// 				this.element.classList.remove("fadeInTransition");
				// 			}
				// 		},
				// 		offset: "85%"
				// 	});
				// 	this.waypoints.push(waypoint);
				// }
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

	#employment-timeline {
		width: 95%;
		margin: auto;
		padding: 10vh 0 10vh 0;
	}

	/*.grid {
		display: grid;
		grid-template-columns: 35% auto;
		grid-template-rows: 1fr;
		grid-template-areas: 
			"timeline employment";
	}*/

	.grid {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 35% auto;
		grid-template-columns: 35% auto;
		-ms-grid-rows: 1fr;
		grid-template-rows: 1fr;
		    grid-template-areas: 
			"timeline employment";
	}

	.timeline {
		position: relative;
		grid-area: timeline;
		min-height: 50vh;
		font-size: 0.9em;
		-ms-grid-row:1; 
	   	-ms-grid-column:1; 
	}

	.employment {
		position: relative;
		grid-area: employment;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #F2F2F2;
		padding-left: 10px;
		-ms-grid-row:1; 
	   	-ms-grid-column:2;
	}

	.line {
		position: absolute;
		top: -5%;
		left: 80%;
		height: 110%;
		width: 10px;
		background-color: #F2F2F2;
		border-radius: 5px;
	}

	.circle {
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 80%;
		transform: translate(-8px, -50%);
		background-color: #6e00ff;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border-color: #F2F2F2;
		border-width: 3px;
		border-style: solid;
	}

	.date {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(0, -50%);
		font-weight: lighter;
		color: #F2F2F2;
		width: 60%;
		white-space: nowrap;
		text-align: right;
	}

	.employment-title {
		font-size: 1.1em;
		font-weight: 2em;
	}

	.employment-company {
		margin: 0.5em 0 0.5em 0;
		font-weight: lighter;
	}

	.top {
		top: 10% !important;
	}

	.bottom {
		height: 90% !important;
	}

	@media only screen and (min-width: 760px) {

		#employment-timeline {
			width: 80%;
			margin: auto;
			padding: 10vh 0 10vh 0;
		}

		.employment {
			position: relative;
			grid-area: employment;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #F2F2F2;
		}

		.date {
			position: absolute;
			top: 50%;
			left: 0%;
			transform: translate(0, -50%);
			font-weight: lighter;
			color: #F2F2F2;
			width: 60%;
			white-space: nowrap;
			text-align: right;
		}

		.circle {
			position: absolute;
			z-index: 1;
			top: 50%;
			left: 80%;
			transform: translate(-13.5px, -50%);
			background-color: #6e00ff;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			border-color: #F2F2F2;
			border-width: 4px;
			border-style: solid;
		}
		
	}

</style>