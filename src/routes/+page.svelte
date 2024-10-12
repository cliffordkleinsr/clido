<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Command, Toolchain } from '$lib/frontend';
    import { Separator } from "$lib/components/ui/separator"
    
	import { BlurIn } from '$lib/motion';
</script>

<Command />
<div class="container lg:mx-96">
	<div class="h-screen space-y-2 pt-32 font-manrope">
		<BlurIn word="Clifford N." class="text-xl font-thin" />
		<Avatar.Root>
			<Avatar.Image
				src="https://res.cloudinary.com/dmy8yp9el/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1728725657/kratos.webp"
				alt="@cliff"
			/>
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div class="block gap-2 font-light">
			<p>Hi! I’m Clifford,</p>
			<span class="text-lg font-thin text-purple-300">/ˈklɪfəɹd/</span>
		</div>
		<BlurIn word="Avid Data Science enjoyer and based sofware developer 🗿" class="font-extralight text-md leading-relaxed tracking-wider" />
        <Toolchain />
		<Separator />
	</div>
	<div class="h-screen">
		<BlurIn class="text-xl font-thin" word="Recent Projects" />
	</div>
</div>
