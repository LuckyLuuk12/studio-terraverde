<script lang="ts">
	export let languages: (string|number)[][] = [];
</script>
<div class="languages">
	{#each languages as [language, level], i}
		<div class="language">
			<h4>{language}</h4>
			<div class="level" style="width: {level*10}%"></div>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../colors';
	.languages {
		background-color: rgba($light2, 0.2);
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 30vw;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		@media (max-width: 900px) {
			width: 100%;
		}
		.language {
			width: 100%;
			h4 {
				margin: 1rem 0 0.5rem 0;
			}
			.level {
				background: linear-gradient(90deg, $accent2 0%, $accent2 45%, lighten($accent2, 10%) 50%, $accent2 55%, $accent2 100%);
				height: 1rem;
				border-radius: 1rem;
				background-size: 200% 100%;
				border: 1px solid rgba($light3, 0.2);
				animation: pulse 3.5s linear infinite;
			}
		}
	}
	
	@keyframes pulse {
		0% {
			background-position: 100% 0;
		}
		100% {
			background-position: 0 0;
		}
	}
</style>
