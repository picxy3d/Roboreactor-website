<script>
	import { RoboreactorLogoPath } from '../../assets/main/RoboreactorLogoPath';
	// IMPORT ROUTE LIST
	import routes from '../../routes/Nevbar.json';
	let routes_entries = Object.entries(routes); // [["foo", "bar"], ["batz", "boink"]]
</script>

<div
	class="h-18 navbar sticky top-0 z-50 border-b-[0.5px] border-base-content/20 bg-base-300/70 px-8 backdrop-blur backdrop-filter"
>
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="-1" for="hamberger_menu" class="btn-ghost btn rounded-full lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul tabindex="-1" class="dropdown-content menu menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
				{#each routes_entries as [key, value]}
					<li>
						<a href={value}>{key}</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn-ghost btn mr-14" href="/">
			<svg viewBox="0 0 1380 1680" class="w-[28px] drop-shadow-md">
				<path class="fill-primary" d={RoboreactorLogoPath} />
			</svg>
			<div class="mt-3 text-[28px] normal-case">oboreactor</div>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each routes_entries as [key, value]}
				<li>
					<a href={value}>{key}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn-ghost btn" href="/login/">login</a>
		<a class="btn-outline btn ml-2" href="/sign-up/">sign-up</a>
	</div>
</div>
