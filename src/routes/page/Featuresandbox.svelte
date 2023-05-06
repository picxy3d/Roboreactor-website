<script>
	import Saos from 'saos';
	export let title;
	export let description;
	export let link;
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
					class="mockup-window mt-10 aspect-square w-full border-2 border-base-300 bg-base-300/50 lg:aspect-video"
				>
					<iframe
						src={link}
						title="sandbox"
						style="visibility:hidden; "
						onload="this.style.visibility = 'visible'; "
						class="h-full w-full"
					/>
				</div>
			</Saos>
		</div>
	</div>
</div>
