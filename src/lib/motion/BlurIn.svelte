<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';

	interface Props {
		word?: string;
		variant?: {
		hidden: { filter: string; opacity: number };
		visible: { filter: string; opacity: number };
	};
		duration?: number;
		class?: string;
	}

	let {
		word = 'Blur In',
		variant = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	},
		duration = 1,
		class: className = ''
	}: Props = $props();
	

	let defaultVariants = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	};
	let combinedVariants = variant || defaultVariants;

	let isVisible = $state(false);
	let element = $state<HTMLElement>();

	$effect(() => {
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

		observer.observe(element as HTMLDivElement);

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
