<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import Calculator from 'lucide-svelte/icons/calculator';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Settings from 'lucide-svelte/icons/settings';
	import House from 'lucide-svelte/icons/house';
	import User from 'lucide-svelte/icons/user';

	let open = $state<boolean>(false);
	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="absolute left-5 top-5">
	<kbd
		class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-manrope font-medium text-muted-foreground opacity-100"
	>
		<span>⌘</span>K
	</kbd>
	<Command.Dialog bind:open>
		<Command.Input placeholder="Type a command or search..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group heading="Suggestions">
				<Command.Item>
					<House class="mr-2 h-4 w-4" />
					<span><a class="font-manrope font-extralight" href="/">Home</a></span>
				</Command.Item>
				<Command.Item>
					<Calculator class="mr-2 h-4 w-4" />
					<span>Calculator</span>
				</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="Settings">
				<Command.Item>
					<User class="mr-2 h-4 w-4" />
					<span>Profile</span>
					<Command.Shortcut>⌘P</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<CreditCard class="mr-2 h-4 w-4" />
					<span>Billing</span>
					<Command.Shortcut>⌘B</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<Settings class="mr-2 h-4 w-4" />
					<span>Settings</span>
					<Command.Shortcut>⌘S</Command.Shortcut>
				</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Dialog>
</div>
