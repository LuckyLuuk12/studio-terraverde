<script lang="ts">
	import favicon from '../images/logo.png';
</script>

<nav>
	<img src={favicon} alt="Company icon">
	<a href="/">home</a>
	<a href="/">work</a>
	<a href="/">about me</a>
	<a href="/">contact</a>
</nav>
<div class="page">
	<slot />
</div>


<style lang="scss">
	@import "../colors";
	nav {
		background-color: $light1;
		color: $dark-brown;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100vw;
		height: 15vh;
		max-height: 15vh;
		font-weight: 800;
		a {
			color: $dark-brown;
			transition: ease all 10ms;
			padding: 0 0.5rem;
			&:hover {
				color: rgba($dark-brown, 0.85);
				border-bottom: 3px solid rgba($dark-brown, 0.85);
			}
		}
		:first-child {
			padding-left: 0;
		}
	}
	.page {
		display: contents;
		height: 85vh;
	}
</style>
