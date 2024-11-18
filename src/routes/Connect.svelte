<script lang="ts">
	const urls = {
		github: {
			name: 'Github',
			url: 'https://github.com/externref'
		},
		steam: {
			name: 'Steam',
			url: 'https://steamcommunity.com/id/externref/'
		},
		linkedin: {
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/defsarthak'
		},
		discord: {
			name: 'Discord',
			url: 'https://discord.com/users/1134016724132446208'
		},
		'envelope-fill': {
			name: 'E-Mail',
			url: 'mailto:shiva02939@gmail.com'
		},
		instagram: {
			name: 'Instagram',
			url: 'https://instagram.com/sarthak.sh_'
		}
	};
</script>

<div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 font-exo2">
	<div>
		<div class="text-4xl md:text-5xl font-exo2">
			<span id="connect" class="text-[#4d557d]">Connect </span> with me.
		</div>
		<div class="mt-4 text-base">
			Feel free to connect with me on these platforms for any kind of discussions or collaborations!
		</div>
	</div>

	<div class="md:mt-5 flex items-center justify-center">
		<div class="grid md:grid-flow-row justify-between grid-cols-3 font-exo2">
			{#each Object.entries(urls) as [name, url]}
				<div class="p-1">
					<button class="bg-[#4d557d] hover:bg-[#3e4254] py-1 px-2 rounded-sm"
						><a
							href={url.url}
							target="_blank"
							class="flex items-center space-x-2 text-sm md:text-lg"
						>
							<i class="bi bi-{name}"></i>
							<span>{url.name}</span>
						</a></button
					>
				</div>
			{/each}<br />
			<div class="bg-green-50 mt-5 h-1">&nbsp;</div>
		</div>
	</div>
</div>
