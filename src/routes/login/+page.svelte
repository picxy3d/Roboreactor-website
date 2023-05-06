<script>
	import Saos from 'saos';
	import LoginForm from './LoginForm.svelte';
</script>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<Saos animation={'fade-in-left 1s'}>
			<div class=" text-center lg:text-left">
				<h1 class="text-5xl font-bold">Login now !</h1>
				<p class="max-w-lg py-6">
					create your robotics product and automation system faster than ever before
				</p>
			</div>
		</Saos>
		<Saos animation={'fade-in-bottom 1s'}>
			<LoginForm />
		</Saos>
	</div>
</div>
