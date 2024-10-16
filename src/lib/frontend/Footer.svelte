<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<!-- ========== FOOTER ========== -->
<footer class="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
	<div class="border-t border-gray-200 py-6 dark:border-neutral-700">
		<div class="flex flex-wrap items-center justify-between gap-2">
			<div>
				<p class="text-xs text-gray-600 dark:text-neutral-400">©2024 Clifford Njoroge.</p>
			</div>
			<!-- End Col -->

			<!-- List -->
			<ul class="flex flex-wrap items-center gap-1">
				<li
					class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"
				>
					<a
						class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
						href="##"
						aria-label="reddit"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
							<mask id="lineMdRedditLoop0">
								<g fill="#fff">
									<path
										fill-opacity="0"
										stroke="#fff"
										stroke-dasharray="48"
										stroke-dashoffset="48"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.1"
										d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"
									>
										<animate
											fill="freeze"
											attributeName="fill-opacity"
											begin="0.6s"
											dur="0.4s"
											values="0;1"
										/>
										<animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											dur="0.6s"
											values="48;0"
										/>
									</path>
									<circle cx="7.24" cy="11.97" r="2.24" opacity="0">
										<animate
											fill="freeze"
											attributeName="cx"
											begin="1s"
											dur="0.2s"
											values="7.24;3.94"
										/>
										<set fill="freeze" attributeName="opacity" begin="1s" to="1" />
									</circle>
									<circle cx="16.76" cy="11.97" r="2.24" opacity="0">
										<animate
											fill="freeze"
											attributeName="cx"
											begin="1s"
											dur="0.2s"
											values="16.76;20.06"
										/>
										<set fill="freeze" attributeName="opacity" begin="1s" to="1" />
									</circle>
									<circle cx="18.45" cy="4.23" r="1.61" opacity="0">
										<animate
											attributeName="cx"
											begin="2.4s"
											dur="6s"
											repeatCount="indefinite"
											values="18.45;5.75;18.45"
										/>
										<set fill="freeze" attributeName="opacity" begin="2.6s" to="1" />
									</circle>
								</g>
								<path
									fill="none"
									stroke="#fff"
									stroke-dasharray="12"
									stroke-dashoffset="12"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0.8"
									d="M12 8.75L13.18 3.11L18.21 4.18"
								>
									<animate
										attributeName="d"
										begin="2.4s"
										dur="6s"
										repeatCount="indefinite"
										values="M12 8.75L13.18 3.11L18.21 4.18;M12 8.75L12 2L12 4.18;M12 8.75L10.82 3.11L5.79 4.18;M12 8.75L12 2L12 4.18;M12 8.75L13.18 3.11L18.21 4.18"
									/>
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="2.4s"
										dur="0.2s"
										values="12;0"
									/>
								</path>
								<g fill-opacity="0">
									<circle cx="8.45" cy="13.59" r="1.61">
										<animate
											fill="freeze"
											attributeName="fill-opacity"
											begin="1.2s"
											dur="0.4s"
											values="0;1"
										/>
									</circle>
									<circle cx="15.55" cy="13.59" r="1.61">
										<animate
											fill="freeze"
											attributeName="fill-opacity"
											begin="1.6s"
											dur="0.4s"
											values="0;1"
										/>
									</circle>
								</g>
								<path
									fill="none"
									stroke="#000"
									stroke-dasharray="10"
									stroke-dashoffset="10"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0.8"
									d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"
								>
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="2s"
										dur="0.2s"
										values="10;0"
									/>
								</path>
							</mask>
							<rect width="24" height="24" fill="currentColor" mask="url(#lineMdRedditLoop0)" />
						</svg>
					</a>
				</li>
				<li
					class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"
				>
					<a
						class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
						href="##"
						aria-label="Discord"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
							<g fill="currentColor" fill-opacity="0">
								<circle cx="9" cy="12" r="1.5">
									<animate
										fill="freeze"
										attributeName="fill-opacity"
										begin="1.3s"
										dur="0.15s"
										values="0;1"
									/>
								</circle>
								<circle cx="15" cy="12" r="1.5">
									<animate
										fill="freeze"
										attributeName="fill-opacity"
										begin="1.45s"
										dur="0.15s"
										values="0;1"
									/>
								</circle>
							</g>
							<g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.1"
							>
								<path
									stroke-dasharray="32"
									stroke-dashoffset="32"
									d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"
								>
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										dur="0.7s"
										values="32;0"
									/>
								</path>
								<path stroke-dasharray="16" stroke-dashoffset="16" d="M5.5 16c5 2.5 8 2.5 13 0">
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.8s"
										dur="0.4s"
										values="16;0"
									/>
								</path>
							</g>
						</svg>
					</a>
				</li>
				<li class="inline-block pe-4 text-xs">
					<a
						class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
						href="##"
						aria-label="Github"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
							<mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
								<g fill="#fff">
									<ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
									<ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
								</g>
							</mask>
							<g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.1"
							>
								<path
									stroke-dasharray="32"
									stroke-dashoffset="32"
									d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
								>
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										dur="0.7s"
										values="32;0"
									/>
								</path>
								<path
									stroke-dasharray="10"
									stroke-dashoffset="10"
									d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
								>
									<animate
										attributeName="d"
										dur="3s"
										repeatCount="indefinite"
										values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
									/>
									<animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.8s"
										dur="0.2s"
										values="10;0"
									/>
								</path>
							</g>
							<rect
								width="8"
								height="4"
								x="8"
								y="11"
								fill="currentColor"
								mask="url(#lineMdGithubLoop0)"
							>
								<animate
									attributeName="y"
									dur="10s"
									keyTimes="0;0.45;0.46;0.54;0.55;1"
									repeatCount="indefinite"
									values="11;11;7;7;11;11"
								/>
							</rect>
						</svg>
					</a>
				</li>
				<li class="inline-block">
					<!-- Dark Mode -->

					<Button onclick={toggleMode} variant="outline" size="icon">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
					<!-- End Dark Mode -->
				</li>
			</ul>
			<!-- End List -->
		</div>
	</div>
</footer>
<!-- ========== END FOOTER ========== -->
