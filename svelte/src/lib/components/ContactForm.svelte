<script lang="ts">
	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		window.location = `mailto:vanoosten.marchel@gmail.com?subject=${data.get('name')} - ${data.get('email')}&body=${data.get('message')}`;
	}
	
</script>
<!-- form to fill the info and send using <a href="mailto: ? " /> -->
<form action="" method="POST">
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required>
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required>
	<label for="message">Message</label>
	<textarea id="message" name="message" required></textarea>
	<button type="submit" on:click={handleSubmit}>Send</button>
</form>

<style lang="scss">
	@import '../colors';
	form {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 0 auto;
		padding: 2rem;
		background: $light1;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem rgba($light3, 0.2);
	}
	label {
		margin-top: 1rem;
		color: $green2;
		font-weight: bold;
	}
	input, textarea {
		margin-top: 0.5rem;
		padding: 0.5rem;
		border: 1px solid $green2;
		border-radius: 0.25rem;
		font-size: 1rem;
		color: $light3;
		background: $light2;
	}
	textarea {
		height: 15rem;
	}
	input:focus, textarea:focus {
		outline: none;
		border-color: $green1;
		box-shadow: 0 0 0.5rem rgba($green1, 0.5);
	}
	button {
		margin-top: 1rem;
		padding: 0.75rem;
		border: none;
		border-radius: 0.25rem;
		background: $green2;
		color: $light1;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s ease;
	}
	
	button:hover {
		background: $green1;
	}
</style>
