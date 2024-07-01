<script lang="ts">
	export let studies: string[][];
</script>

<div class="studies">
	{#each studies as [study, date], i}
		<div class="study">
			<h4>{study}</h4>
			<h6>{date}</h6>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../colors';
	.studies {
		background-color: rgba($light-brown, 0.2);
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 30vw;
		.study {
			width: 100%;
			h4 {
				margin: 1rem 0 0.5rem 0;
			}
			h6 {
				color: $accent2;
			}
		}
	}
</style>
