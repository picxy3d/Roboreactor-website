<script>
	import Saos from 'saos';
	export let image;
	export let description;
	export let btn;
	export let link;
</script>

<Saos animation={'fade-in-bottom 1s'}>
	<div
		class="card w-96 bg-base-100 shadow-xl shadow-primary/20 duration-1000 hover:shadow-2xl hover:shadow-primary/40"
	>
		<figure>
			<img class="w-96" src={image} alt="Logo" />
		</figure>
		<div class="card-body">
			<p>{description}</p>
			<div class="card-actions mt-10 justify-end">
				<a class="btn-outline btn-primary btn" href={link}>{btn}</a>
			</div>
		</div>
	</div>
</Saos>
