<script lang="ts">
	import { cn } from '$lib/utils';
	import { gsap } from 'gsap';
	let isMenuOpen = $state<boolean>(false);

	let tl: gsap.core.Timeline;
	$effect(() => {
		tl = gsap.timeline({ paused: true });
		tl.to('.menudrop', {
			duration: 0.3,
			top: 0,
			width: '100%',
			ease: 'power4.out'
		});
		tl.to(
			'menu ul li:nth-child(1)',
			{
				duration: 0.5,
				opacity: 1,
				y: 35,
				ease: 'power4.out'
			},
			'-=0.1'
		);
		tl.to(
			'menu ul li:nth-child(2)',
			{
				duration: 0.5,
				opacity: 1,
				y: 35,
				ease: 'power4.out'
			},
			'-=0.4'
		);
		tl.to(
			'menu ul li:nth-child(3)',
			{
				duration: 0.3,
				opacity: 1,
				y: 35,
				ease: 'power4.out'
			},
			'-=0.4'
		);
		tl.to(
			'menu ul li:nth-child(4)',
			{
				duration: 0.2,
				opacity: 1,
				y: 35,
				ease: 'power4.out'
			},
			'-=0.3'
		);
	});

	function toggleMenu() {
		if (isMenuOpen) {
			tl?.play();
		} else {
			tl?.reverse();
		}
	}
</script>

<button
	id="hamburger"
	class={cn(isMenuOpen ? 'on' : 'off', '')}
	onclick={() => {
		isMenuOpen = !isMenuOpen;
		toggleMenu();
	}}
	aria-label="Toggle menu"
>
	<span class="bg-black dark:bg-white"></span>
	<span class="bg-black dark:bg-white"></span>
	<span class="bg-black dark:bg-white"></span>
</button>

<div class="menudrop" class:open={isMenuOpen}>
	<menu>
		<ul>
			<li><a class="hover:text-purple-300" href="/">Home</a></li>
			<li>
				<a
					class="hover:scale-50 hover:text-purple-300 hover:transition hover:duration-700 hover:ease-in-out"
					href="/projects">Projects</a
				>
			</li>
			<li>
				<a
					class="transition hover:scale-110 hover:text-purple-300 hover:duration-500 hover:ease-in-out"
					href="/blog">Blog</a
				>
			</li>
			<li>
				<a
					class="transition hover:scale-110 hover:text-purple-300 hover:duration-500 hover:ease-in-out"
					href="/labs">labs</a
				>
			</li>
		</ul>
	</menu>
</div>
