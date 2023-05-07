<script>
	import Saos from 'saos';
	import Featuresandbox from './page/Featuresandbox.svelte';
	import Pricing from './page/Pricing.svelte';
</script>

<svelte:head>
	<title>Roboreactor</title>
</svelte:head>

<div class="hero">
	<div class="hero-content text-center">
		<div class="max-w-5xl">
			<Saos animation={'swing-in-top 1s'}>
				<a
					class="badge border-[0.5px] border-base-content/20 bg-base-100/10 py-4 text-base-content duration-500 hover:shadow-inner hover:shadow-accent/20"
					href="https://github.com/roboreactor/genflow-mini"
				>
					Introducing Genflow Mini
					<span class="icon-[material-symbols--arrow-forward-ios-rounded] ml-2 h-3 w-3" />
				</a>
			</Saos>
			<Saos animation={'fade-in-top 1s'}>
				<p class="py-6 text-5xl font-bold text-base-content duration-1000 md:text-6xl">
					The world's your automation playground with
					<i
						class="bg-gradient-to-r from-primary to-secondary bg-clip-text py-6 text-5xl font-bold text-transparent text-transparent duration-1000 md:text-6xl"
					>
						Roboreactor
					</i>
				</p>
			</Saos>
			<Saos animation={'fade-in-top 1s'}>
				<p class="pb-6 text-xl">
					<span class="icon-[ic--baseline-check] h-4 w-4" />
					Web-Based &nbsp;&nbsp;
					<span class="icon-[ic--baseline-check] h-4 w-4" />
					Real-time &nbsp;&nbsp;
					<span class="icon-[ic--baseline-check] h-4 w-4" />
					Feature-rich
				</p>
			</Saos>
			<Saos animation={'fade-in-top 1.5s'}>
				<a class="btn-primary btn" href="https://roboreactor.com/demo"> Try demo now </a>
				<a class="btn-outline btn-primary btn ml-2" href="/sign-up">Get Started</a>
			</Saos>
			<Saos animation={'fade-in-bottom 1s'}>
				<div
					class="mockup-window my-10 aspect-square w-full border-2 border-base-300 bg-base-300/50 shadow shadow-primary/20 duration-1000 hover:shadow-lg hover:shadow-primary/20 lg:aspect-video"
				>
					<iframe
						src="https://roboreactor.com/motion_control/eyJlbWFpbCI6Imtvcm5ib3QzODBAaG90bWFpbC5jb20iLCJwcm9qZWN0X25hbWUiOiJTbWFydF9ib3RzIn0="
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

<div class="hero bg-base-100">
	<div class="hero-content flex-col lg:flex-row">
		<Saos animation={'fade-in-top 1s'}>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Downloads</div>
					<div class="stat-value">31K</div>
				</div>

				<div class="stat">
					<div class="stat-title">New Users</div>
					<div class="stat-value">4,200</div>
				</div>

				<div class="stat">
					<div class="stat-title">New Registers</div>
					<div class="stat-value">1,200</div>
				</div>
			</div>
		</Saos>
		<div class="max-w-lg">
			<Saos animation={'fade-in-right 1s'}>
				<p class="py-6">
					Roboreactor is a platform that allows you to construct robotic and automation systems more
					quickly and with greater capabilities. It enables you to control general-purpose mobile
					computers in order to quickly develop robotics and automation systems while reducing
					complexity.in tasks.
				</p>
			</Saos>
		</div>
	</div>
</div>

<Featuresandbox
	title="Node Generator"
	description="With the Roboreactor node generator, you can generate code from the website into the robot
				and automation system from anywhere in the world with no gap in development."
	link="https://roboreactor.com/demo"
/>

<Featuresandbox
	title="Motion controll and navigation visualizer"
	description="we have motion planning and navigation visualizer to connect with your robot remotely via our fast IoT system,
					allowing you to control the robot's  faster from anywhere. This allows you to
					run the robot under development with no gap in distances."
	link="https://roboreactor.com/motion_control/eyJlbWFpbCI6Imtvcm5ib3QzODBAaG90bWFpbC5jb20iLCJwcm9qZWN0X25hbWUiOiJTbWFydF9ib3RzIn0="
/>

<div class="mt-10" />

<Pricing />

<div class="hero h-fit">
	<div class="hero-content mb-24 mt-10 text-center">
		<div class="max-w-5xl">
			<Saos animation={'fade-in-top 1s'}>
				<p class="pb-6 text-4xl font-bold text-base-content duration-1000">
					Start create your robotics product and automation system now!
				</p>
			</Saos>
			<Saos animation={'fade-in-top 1.5s'}>
				<a class="btn-primary btn" href="https://roboreactor.com/demo"> Try demo now </a>
				<a class="btn-outline btn-primary btn ml-2" href="/sign-up">Get Started</a>
			</Saos>
		</div>
	</div>
</div>
