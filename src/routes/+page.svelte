<script>
	import Saos from 'saos';
	import Featuresandbox from './page/Featuresandbox.svelte';
	import Pricing from './page/Pricing.svelte';
	import Whyroboreactor from './page/Whyroboreactor.svelte';
	import projectpageIMG from './page/img/projectpageIMG.jpg';
</script>

<svelte:head>
	<title>Roboreactor</title>
</svelte:head>

<div class="hero">
	<div class="hero-content text-center">
		<div class="max-w-5xl">
			<Saos animation={'swing-in-top 1s'}>
				<a
					class="badge border-[0.5px] border-base-content/20 bg-base-100/10 py-4 text-base-content duration-500 hover:shadow-inner hover:shadow-accent/40"
					href="https://github.com/roboreactor/genflow-mini"
				>
					🎉 Introducing Genflow Mini 
					<span class="icon-[material-symbols--arrow-forward-ios-rounded] ml-2 h-3 w-3" />
				</a>
			</Saos>
			<Saos animation={'fade-in-top 1s'}>
				<p class="py-6 text-5xl font-bold text-base-content duration-1000 md:text-6xl">
					The world's your automation playground with
					<i
						class="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text py-6 text-5xl font-bold text-transparent duration-1000 md:text-6xl"
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
					class="mockup-window my-10 aspect-square w-full border-2 border-base-300 bg-base-200/50 shadow-xl shadow-secondary/20 duration-1000 hover:shadow-2xl hover:shadow-accent/40 lg:aspect-video"
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

<Whyroboreactor />

<Featuresandbox
	title="1. Create a project"
	description="Build the hardware for your robot and automation system. Create a project token and configure your device specifications by logging in and visiting the project page. "
>
	<img src={projectpageIMG} alt="projectpage" class=" h-full w-full" />
</Featuresandbox>

<Featuresandbox
	title="2. Generate code"
	description="Download and flash the genflow image to your single board computer. You can now produce code for your robot single board computer extremely quickly with the Roboreactor node generator without having to write code or understand low level algorithm."
>
	<iframe
		src="https://roboreactor.com/demo"
		title="sandbox"
		style="visibility:hidden; "
		onload="this.style.visibility = 'visible'; "
		class="h-full w-full"
	/>
</Featuresandbox>

<Featuresandbox
	title=""
	description="Using our urdf editor, you can upload and construct your cad model, as well as add motion joints, to design the motion system. You can now use our node generator to program and visualize it in real time with our motion control."
>
	<iframe
		src="https://roboreactor.com/create_urdf/eyJlbWFpbCI6Imtvcm5ib3QzODBAaG90bWFpbC5jb20iLCJwcm9qZWN0X25hbWUiOiJTbWFydF9ib3RzIn0="
		title="sandbox"
		style="visibility:hidden; "
		onload="this.style.visibility = 'visible'; "
		class="h-full w-full"
	/>
</Featuresandbox>

<Featuresandbox
	title="3. Controlling and visualizing"
	description="with our motion control you can remotely connect with your robot utilizing our rapid IoT system, allowing you to operate your robot's real-time from anywhere. It enables you to run the robot in development mode with no gaps in between."
>
	<iframe
		src="https://roboreactor.com/motion_control/eyJlbWFpbCI6Imtvcm5ib3QzODBAaG90bWFpbC5jb20iLCJwcm9qZWN0X25hbWUiOiJTbWFydF9ib3RzIn0="
		title="sandbox"
		style="visibility:hidden; "
		onload="this.style.visibility = 'visible'; "
		class="h-full w-full"
	/>
</Featuresandbox>

<Featuresandbox
	title=""
	description="You can view the point cloud map that your robot scans in real time with lidar radar or a camera using our navigation visualizer. You can also monitor where your robot traveled and sync multiple robots to form a swarm."
>
	<iframe
		src="https://roboreactor.com/Navigation_system/eyJlbWFpbCI6Imtvcm5ib3QzODBAaG90bWFpbC5jb20iLCJwcm9qZWN0X25hbWUiOiJTbWFydF9ib3RzIn0="
		title="sandbox"
		style="visibility:hidden; "
		onload="this.style.visibility = 'visible'; "
		class="h-full w-full"
	/>
</Featuresandbox>

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
