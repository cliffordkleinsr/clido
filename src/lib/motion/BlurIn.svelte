<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	export let word: string = 'Blur In';
	export let variant: {
		hidden: { filter: string; opacity: number };
		visible: { filter: string; opacity: number };
	} = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	};
	export let duration: number = 1;
	let className = '';
	export { className as class };

	let defaultVariants = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	};
	let combinedVariants = variant || defaultVariants;

	let isVisible = false;
	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<Motion
	initial="hidden"
	animate={isVisible ? 'visible' : 'hidden'}
	transition={{ duration }}
	variants={combinedVariants}
	let:motion
>
	<h1
		bind:this={element}
		class={cn(
			className,
			' font-manrope font-extralight tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]'
		)}
		use:motion
	>
		{word}
	</h1>
</Motion>
