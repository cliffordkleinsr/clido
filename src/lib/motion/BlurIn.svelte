<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { Motion } from 'motion-start';

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

<Motion.h1
	initial="hidden"
	animate={isVisible ? 'visible' : 'hidden'}
	transition={{ duration }}
	variants={combinedVariants}
	class={cn(className, ' font-manrope leading-[5rem] drop-shadow-sm')}
	bind:el={element}
>
	{word}
</Motion.h1>
