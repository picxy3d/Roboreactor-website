<script>
	import Saos from 'saos';
	export let title;
	export let description;
</script>

<div class="hero">
	<div class="hero-content mt-10 text-left">
		<div class="max-w-5xl">
			<Saos animation={'fade-in-left 1s'}>
				<h1 class="text-5xl font-bold">{title}</h1>
				<p class="py-6">{description}</p>
			</Saos>
			<Saos animation={'fade-in-bottom 1s'}>
				<div
					class="mockup-window mt-10 aspect-video w-full border-2 border-base-300 bg-base-200/50 shadow-xl shadow-secondary/20 duration-1000 hover:shadow-2xl hover:shadow-accent/40"
				>
					<slot />
				</div>
			</Saos>
		</div>
	</div>
</div>
