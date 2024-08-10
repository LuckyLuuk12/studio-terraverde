<script lang="ts">
	export let studies: string[][];
	export let links: string[] = [];
</script>

<div class="studies">
	{#each studies as [study, date], i}
		<div class="study">
			<h4>{study}</h4>
			<h6>{date}</h6>
			{#if links[i]}
				<a href={links[i]} target="_blank" rel="noopener noreferrer" class="icon-link">
					<i class="fa fa-link icon"></i>
				</a>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../colors';
	.studies {
		background-color: $light3;
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 30vw;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		.study {
			background-color: $light2;
			padding: 0.25rem 1.5rem 2.75rem 1rem;
			border-radius: 0.5rem;
			width: 100%;
			position: relative;
			transition: all 0.3s ease;
			cursor: pointer;
			&:hover {
				background: linear-gradient(135deg, rgba($accent1, 0.4) 0%, rgba($accent1, 0.2) 100%);
				color: white;
			}
			h4 {
				margin: 1rem 0 0.5rem 0;
			}
			h6 {
				color: $accent2;
			}
			.icon-link {
				position: absolute;
				right: 1rem;
				top: 50%;
				transform: translateY(-50%);
				color: $accent2;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
				.icon {
					font-size: 1rem;
				}
			}
		}
	}
</style>
