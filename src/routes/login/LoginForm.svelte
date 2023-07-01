<script>
	import { isLoggedIn, authenticationToken, tryLogin } from '../../stores/user.js';
	let objCredential = {
		username: '',
		password: ''
	};
	async function formSubmitHandler() {
		// Try to do the login
		// and let the logic do the magic
		// User checking
		// localStorage Persistent save
		await tryLogin(objCredential);
		// If success
		if (isLoggedIn.get() && authenticationToken.get()) {
			location.replace('/project');
		}
		// If error
		else {
			console.log('Sorry not logged in');
		}
	}
</script>

<form
	class="card w-screen max-w-sm flex-shrink-0 bg-base-100 shadow-xl shadow-primary/20 duration-1000 hover:shadow-2xl hover:shadow-accent/40"
	on:submit|preventDefault={formSubmitHandler}
>
	<div class="card-body">
		<div class="form-control">
			<label class="label" for="email-input">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email-input"
				type="text"
				placeholder="email"
				class="input-bordered input"
				bind:value={objCredential.username}
			/>
		</div>
		<div class="form-control">
			<label class="label" for="password-input">
				<span class="label-text">Password</span>
			</label>
			<input
				id="password-input"
				type="text"
				placeholder="password"
				class="input-bordered input"
				bind:value={objCredential.password}
			/>
		</div>
		<div class="form-control mt-6">
			<button class="btn-primary btn" type="submit">Login</button>
		</div>
		<a href="/" class="link-hover label-text-alt link mt-1 text-right">Forgot password?</a>
	</div>
</form>
