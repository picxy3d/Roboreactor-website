<script>
	import Saos from 'saos';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error.message}</title>
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-5xl">
			<Saos animation={'fade-in-bottom 1s'}>
				<i
					class="bg-gradient-to-r from-primary to-secondary bg-clip-text py-6 text-6xl font-bold text-transparent text-transparent"
				>
					{$page.error.message}
				</i>
			</Saos>
		</div>
	</div>
</div>
