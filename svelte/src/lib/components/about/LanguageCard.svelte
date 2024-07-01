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
		background-color: rgba($light-brown, 0.2);
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 30vw;
		.language {
			width: 100%;
			h4 {
				margin: 1rem 0 0.5rem 0;
			}
			.level {
				background-color: $accent2;
				height: 1rem;
				border-radius: 1rem;
			}
		}
	}
</style>
