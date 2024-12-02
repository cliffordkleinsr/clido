<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Command, Toolchain } from '$lib/frontend';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { BlurIn, OrbitingCircles } from '$lib/motion';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import { Moai } from '$lib/SVG';

	interface Projex {
		title: { description: string; src?: string };
		subtitle: string;
		footer?: { github?: string; npm?: string; pub?: string };
	}
	let projexes = $state([
		{
			title: {
				description: 'Motion Start',
				src: 'https://raw.githubusercontent.com/JonathonRP/motion-start/main/static/logo.webp'
			},
			subtitle: 'Svelte Port of framer motion with inbuilt typescript support',
			footer: {
				github: 'https://github.com/JonathonRP/motion-start',
				npm: 'https://www.npmjs.com/package/motion-start'
			}
		},
		{
			title: {
				description: 'DE-SRFREN',
				src: 'https://pytorch.org/assets/images/logo-white.svg'
			},
			subtitle: 'Video Restoration Processing Pipeline',
			footer: {
				github: 'https://github.com/cliffordkleinsr/DE-SRFREN',
				pub: 'https://colab.research.google.com/drive/1sWBOUMiT_lRO8HGYxW2aQRtixQUnL3Yo?usp=sharing%5D'
			}
		},
		{
			title: {
				description: 'Musegan Pytorch',
				src: 'https://hermandong.com/musegan/figs/logo.png'
			},
			subtitle:
				'MuseGAN is a project on music generation. In a nutshell, we aim to generate polyphonic music of multiple tracks (instruments), only this time using Pytorch',
			footer: {
				github: 'https://github.com/cliffordkleinsr/musegan-pytorch',
				pub: 'https://vixra.org/pdf/2311.0079v1.pdf'
			}
		},
		{
			title: {
				description: 'Pianoroll Generator',
				src: 'https://pypi.org/static/images/logo-small.8998e9d1.svg'
			},
			subtitle: 'Pianoroll generator (PianoGen) A package to generate pianoroll (NPZ) datasets',
			footer: {
				github: 'https://github.com/cliffordkleinsr/pianoroll-generator',
				pub: 'https://pypi.org/project/pianogen/'
			}
		},
		{
			title: {
				description: 'Wav Transcription2Midi',
				src: 'https://magenta.tensorflow.org/assets/magenta-logo-card.jpg'
			},
			subtitle:
				'This is a PyTorch implementation of Google"s Onsets and Frames model  further adapted from Jongwook onsets-and-frames to accomodate more recent pytorch implementations specifically torch-2.2.0+cu12.3',
			footer: {
				github: 'https://github.com/cliffordkleinsr/wav-transcription2-midi'
			}
		}
	]);
</script>

<Command />
<div class="m-2 flex h-[300dvh] flex-col gap-3 lg:mx-auto lg:h-[300vh]">
	<div class="h-screen space-y-2 pt-16 font-manrope">
		<BlurIn word="BIO" class="text-xl" />
		<Avatar.Root>
			<Avatar.Image
				src="https://res.cloudinary.com/dmy8yp9el/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1728725657/kratos.webp"
				alt="@cliff"
			/>
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div class="grid w-full gap-2">
			<p class=" font-semibold">Hello There! I’m Clifford,</p>
			<span class="text-lg text-purple-300">/ˈklɪfəɹd/</span>
		</div>
		<p class="text-md flex gap-1">
			Avid Data Science enjoyer and based sofware developer {@html Moai}
		</p>
		<div class="pt-11">
			<h1 class="font-manrope text-lg font-thin">My Tech</h1>
		</div>
		<OrbitingCircles />
		<Toolchain />
	</div>
	<Separator />
	<div class="mb-56 h-dvh space-y-2 font-manrope lg:h-screen">
		<BlurIn class="text-xl" word="Selected Projects" />
		<div class="grid max-w-lg gap-2">
			{#each projexes as projex}
				{@render items(projex)}
			{/each}
			<div class="z-20 flex gap-2">
				<Button variant='outline' class='bg-transparent/20'>Read More <ArrowUpRight class=" size-4" /></Button>
			</div>
		</div>
	</div>
	<div class="my-auto space-y-2 font-manrope">
		<Separator />
		<span
			class=" inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-xl font-medium leading-[5rem] text-transparent duration-1000"
		>
			Lets Connect
		</span>
		<h1 class="font-light">Reach out to me via email or on social media.</h1>
		<div class="grid max-w-md grid-cols-2 gap-1 space-y-2">
			<p class="text-sm">Email</p>
			<p class="z-20 text-sm text-muted-foreground underline underline-offset-4">
				cnjoroge925@gmail.com
			</p>
			<p class="text-sm">Discord</p>
			<p class="z-20 text-sm text-muted-foreground underline underline-offset-4">clidegamer254</p>
		</div>
	</div>
</div>

<!-- snippent scope -->
{#snippet items(projex: Projex)}
	<Card.Root>
		<Card.Header>
			<Card.Title>
				{projex.title.description}
				<img class="float-end w-11" src={projex.title.src} alt={projex.title.description} />
			</Card.Title>
			<Card.Description>
				{projex.subtitle}
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Separator />
		</Card.Content>
		<Card.Footer>
			<div class="grid grid-cols-2 gap-1">
				{#if projex.footer?.github}
					<Button variant="outline"  href={projex.footer.github} class="z-20 flex gap-1 bg-transparent/20">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
							/>
						</svg>
						Github
						<ArrowUpRight class="size-4" />
					</Button>
				{/if}
				{#if projex.footer?.npm}
					<Button variant="default" href={projex.footer.npm} class="z-20 flex gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
							<path fill="#c12127" d="M0 256V0h256v256z" />
							<path fill="#fff" d="M48 48h160v160h-32V80h-48v128H48z" />
						</svg>
						NPM
						<ArrowUpRight class="size-4" />
					</Button>
				{/if}
				{#if projex.footer?.pub}
					<Button variant="secondary" href={projex.footer.pub} class="z-20 flex gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M16.5 11.74c0-.59-.07-1.16-.14-1.74h3.38c.08.33.15.67.19 1c.72.07 1.41.23 2.07.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12s4.5 10 10 10c.87 0 1.71-.12 2.5-.33a6.6 6.6 0 0 1-1.46-3.47c-.31.61-.65 1.2-1.04 1.76c-.83-1.2-1.5-2.53-1.91-3.96h3.09c.17-.72.46-1.39.85-2H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.5a6.4 6.4 0 0 1 2.1-1.76M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m2.09 0c.41-1.43 1.08-2.77 1.91-3.97c.83 1.2 1.5 2.54 1.91 3.97zm8.83 0h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M23 17.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20z"
							/>
						</svg>
						URL
						<ArrowUpRight class="size-4" />
					</Button>
				{/if}
			</div>
		</Card.Footer>
	</Card.Root>
{/snippet}
