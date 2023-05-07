<script>
	import Saos from 'saos';
	import Downloadcard from './Downloadcard.svelte';
</script>

<svelte:head>
	<title>Download</title>
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content flex-col text-center">
		<Saos animation={'fade-in-top 1s'}>
			<i
				class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent text-transparent"
			>
				Roboreactor Genflow Mini For SBC
			</i>
		</Saos>
		<div class="my-10 grid grid-cols-1 gap-10 text-left lg:grid-cols-2 xl:grid-cols-3">
			<Downloadcard
				image="https://avatars.githubusercontent.com/u/118678022?s=400&u=b041c73c56a8bc3dfb8727426ec7fbc81da2c72e&v=4"
				description="Jetson nano Ubuntu 20.04 operating system with pre-installed Roboreactor code generator"
				btn="Download for Jetson Nano"
				link=""
			/>
			<Downloadcard
				image="https://avatars.githubusercontent.com/u/118678022?s=400&u=b041c73c56a8bc3dfb8727426ec7fbc81da2c72e&v=4"
				description="Raspberry pi 3,4 zero 2 w raspbian operating system with pre-installed Roboreactor code
					generator"
				btn="Download for Raspberry pi"
				link=""
			/>
			<Downloadcard
				image="https://avatars.githubusercontent.com/u/118678022?s=400&u=b041c73c56a8bc3dfb8727426ec7fbc81da2c72e&v=4"
				description="Install roboreactor to other system with bash script (support most of linux-based OS)"
				btn="Manual setup guide"
				link=""
			/>
		</div>
	</div>
</div>
