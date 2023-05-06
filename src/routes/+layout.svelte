<script>
	import '../app.css';
	import Footer from '../components/Wrapper/Footer.svelte';
	import Nevbar from '../components/Wrapper/Nevbar.svelte';
	import Animatebg from '../components/Wrapper/Animatebg.svelte';
	import favicon from '../assets/main/favicon.ico';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<body>
	<div id="content-wrapper " class="min-w-[600px]">
		<Nevbar />
		<Animatebg />
		<slot />
		<Footer />
	</div>
</body>

<style>
	/* smooth scroll */
	:global(html) {
		scroll-behavior: smooth;
	}
	/* SAoS keyframe ref https://github.com/shiryel/saos/blob/master/demo/src/Animations.svelte,https://shiryel.github.io/saos/?ref=madewithsvelte.com*/
	@keyframes -global-fade-in-top {
		0% {
			transform: translateY(-25px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes -global-fade-in-bottom {
		0% {
			transform: translateY(40px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes -global-fade-in-left {
		0% {
			transform: translateX(-40px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-fade-in-right {
		0% {
			transform: translateX(40px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-swing-in-top {
		0% {
			transform: rotateX(-100deg);
			transform-origin: top;
			opacity: 0;
		}
		100% {
			transform: rotateX(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}

</style>
