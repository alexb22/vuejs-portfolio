<template>
	<div>
		<div v-bind:class="{enterLoadingPage: loadingPageFlag}" class="loadingPage">
			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.22 54"><path class="cls-1" v-bind:class="{animateSvg: loadingPageFlag}" d="M94,93.39a37.25,37.25,0,0,1-5.14,2.23l-.89,2.44c-7,3.48-12,3.75-12,3.75a94.55,94.55,0,0,1,6.24-12.87c-.88.11-1.72.27-2.44.38a42.8,42.8,0,0,0-2.55,5.32c-1.71.54-3.17.92-4.47,1.25-1,2.06-1.5,3.26-1.5,3.26C62.69,101.92,60,101.1,60,101.1A226.7,226.7,0,0,1,81.55,65.48c5-6.9,8.26-11,8.37-11.13,12.83-4.73,22-5.43,22-5.43C104.93,62.17,94.13,93,94,93.39ZM90.8,55.76A208.61,208.61,0,0,0,66,95.24c1.19.05,4.2-.06,10.13-2a60.67,60.67,0,0,1,4.78-8.9,43.39,43.39,0,0,1,7.58-1.52A99.91,99.91,0,0,0,82,95.78a37.49,37.49,0,0,0,10.7-3.53c.94-2.66,10.55-29.81,16.42-41.43C106.86,51.09,100.41,52.23,90.8,55.76Zm.26,18.14-5.77.81c2.13-4,6.91-11.08,6.91-11.08l4.21-1.3C92.62,70,91.06,73.9,91.06,73.9Z" transform="translate(-59.29 -48.35)"/><path class="cls-1" v-bind:class="{animateSvg: loadingPageFlag}" d="M130,71c-.63.6-1.25,1.19-2,1.84,4.78,2.83,5.14,9.29-.47,13.47A30.09,30.09,0,0,1,124,88.61a9.83,9.83,0,0,1-2.24,2.28c-5.92,4.4-18.44,9.62-30.65,10.32,0,0,3.27-13.52,16-39.1l1.77-.81c.83-1.74,1.77-3.59,2.7-5.49,13.3-6.24,27.8-5.43,28.42.76C140.52,62.11,136.73,66.67,130,71Zm-17.36-13.9c-10.91,22-14.81,35-15.69,38.06,11.9-.87,23.95-5.92,29.67-10.15,5.56-4.13,4.1-10.43-3.28-12,11-6,15.64-10.76,15.07-16.24C137.87,51.74,125.25,51.25,112.62,57.12Zm-4.1,29a56.82,56.82,0,0,1,3.22-8.25c2.75-.81,4.57-.76,5.77-.27A2.11,2.11,0,0,1,119,80.14C118,83.07,112.52,85.08,108.52,86.11Zm2.59-2.82-.15.44a8.73,8.73,0,0,0,.88-.28ZM125,64.17c-1.72,2.18-5.77,5.06-10.55,6.63,0,0,1.92-3.86,4.68-9.34,3.17-.87,5.09-1,6-.49S126.08,62.76,125,64.17Zm-6.7,2.5-.52,1.09c.52-.33,1.09-.65,1.61-1A3.06,3.06,0,0,0,118.29,66.67Z" transform="translate(-59.29 -48.35)"/></svg>
		</div>
		<div v-bind:class="{enterLoadingPage: loadingPageFlag}" class="loadingPageBottom"></div>
		
	</div>
</template>

<script>
	export default {
		name: "LoadingPage",
		methods: {

	    },
	    props: ['loadingPageFlag'],
	}
</script>

<style scoped>

	@import url("https://use.typekit.net/ttv2wqs.css");

	.loadingPage {
		position: fixed;
		top: 0;
		left: 0;
		height: 50%;
		width: 100%;
		transition: transform 0.2s ease-in;
		background-color: white;
		z-index: 1000;
		transform: translateY(-100%);
		overflow: visible;
		z-index: 100;
	}

	.loadingPageBottom {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 50%;
		width: 100%;
		transition: transform 0.2s ease-in;
		background-color: white;
		z-index: 1000;
		transform: translateY(100%);
		z-index: 99;
	}

	.test {
		background-color: red !important;
	}

	.enterLoadingPage {
		transform: translateY(0);
	}

	.cls-1 {
		font-size: 54.3px;
		fill: none;
		stroke: #58595b;
		stroke-miterlimit: 10;
		stroke-width: 1.2px;
		font-family: CCBiffBamBoomOutline;
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
	}

	.animateSvg {
		animation: writeSvg 2s ease-in 0.3s forwards;
	}

	#Layer_1 {
		height: 200px;
		width: 200px;
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translate(-50%, 50%);
	}

	@keyframes writeSvg {
		to {
			stroke-dashoffset: 0;
		}
	}

</style>