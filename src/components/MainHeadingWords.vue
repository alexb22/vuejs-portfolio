<template>
	<div class="mainHeadingWords">
		<span class="newLine">
			<span v-bind:class="{ animateWords: !this.$root.loading }" class="words">{{ headingContent }}</span>
		</span>
	</div>
</template>

<script>
	export default {
		name: "MainHeadingWords",
		methods: {

	    },
	    props: ['headingContent']
	}
</script>

<style scoped>

	.newLine {
		display: block;
		position: relative;
		z-index: 0;
		overflow: hidden;
		white-space: nowrap;
	}

	.words {
		display: inline-block;
		transform: translateY(100%);
		
	}

	.animateWords {
		animation: transformUp 0.5s ease-out forwards;
	}

</style>


