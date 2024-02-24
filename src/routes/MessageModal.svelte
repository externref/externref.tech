<script lang="ts">
	import { blur } from 'svelte/transition';
	import { onMount } from 'svelte';

	let name: string = '';
	let subject: string = '';
	let message: string = '';
	let transition: boolean = false;

	onMount(() => {
		transition = true;
	});

	function sendMsg() {
		fetch('/api/discord', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				subject: subject,
				message: message
			})
		});
	}
</script>

{#if transition}
	<div transition:blur={{ delay: 2000 }} class="pb-44 lg:pb-0 w-[100%]">
		<h2
			class="block lg:hidden mx-4 text-4xl tracking-tight font-extrabold text-[#c5c6c7] pb-5 border-b-[1px] text-center mb-8 lg:mb-16"
		>
			Contact Me
		</h2>
		<div class="block items-center lg:flex lg:flex-row mx-auto max-w-screen-xl">
			<div class=" px-4 w-full h-full md:h-auto">
				<!-- Modal content -->
				<div class="p-4 rounded-lg shadow bg-[#1a2129] sm:p-5">
					<!-- Modal header -->
					<div
						class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600"
					>
						<h3 class="text-3xl font-semibold text-[#c5c6c7]">Send me a message !</h3>
					</div>
					<!-- Modal body -->
					<form>
						<div class="grid gap-4 mb-4 sm:grid-cols-2">
							<div>
								<label for="name" class="block mb-2 text-sm font-medium text-[#c5c6c7]">Name</label>
								<input
									bind:value={name}
									type="text"
									name="name"
									id="name"
									class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-[#c5c6c7] focus:ring-primary-500 focus:border-primary-500"
									placeholder="Enter your name (or discord username)"
									required="true"
								/>
							</div>
							<div>
								<label for="brand" class="block mb-2 text-sm font-medium text-[#c5c6c7]"
									>Subject</label
								>
								<input
									bind:value={subject}
									type="text"
									name="brand"
									id="brand"
									class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-[#c5c6c7] focus:ring-primary-500 focus:border-primary-500"
									placeholder="Reason to contact"
									required="true"
								/>
							</div>

							<div class="sm:col-span-2">
								<label for="description" class="block mb-2 text-sm font-medium text-[#c5c6c7]"
									>Message</label
								>
								<textarea
									bind:value={message}
									id="description"
									rows="4"
									class="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-[#c5c6c7] focus:ring-primary-500 focus:border-primary-500"
									required="true"
									placeholder="Write your message here"
								/>
							</div>
						</div>
						<button
							on:click={sendMsg}
							type="submit"
							class="bg-[#45A29E] inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#66fcf1] focus:ring-[#66fcf1] hover:text-black focus:text-black"
						>
							<i class="bi bi-send-fill" />
							&nbsp;&nbsp;Send Message
						</button>
					</form>
				</div>
			</div>
			<div class="px-4 mx-auto max-w-screen-xl py-10 lg:py-2 lg:px-6">
				<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
					<h2
						class="hidden lg:block mb-4 text-4xl tracking-tight font-extrabold text-[#c5c6c7] pb-5 border-b-[1px]"
					>
						Contact Me
					</h2>
					<p class="font-light lg:mb-5 sm:text-xl text-[#66fcf1]">
						Feel Free to leave a message here or contact me on any socials mentioned here.
					</p>
					<div
						class="my-5 lg:my-0 justify-items-center ml-5 text-[#c5c6c7] text-xl font-exo2 grid grid-rows-4 grid-cols-2 gap-x-4 gap-y-4"
					>
						<a href="https://github.com/externref/" class="text-left"
							><i class="bi bi-github" />&nbsp; Github</a
						>
						<a href="https://linkedin.com/in/externref" class="text-left"
							><i class="bi bi-linkedin" />&nbsp; LinkedIn</a
						>
						<a href="https://instagram.com/_sarthak.sh" class="text-left"
							><i class="bi bi-instagram" />&nbsp; Instagram</a
						>
						<a href="https://discord.com/users/1134016724132446208" class="text-left"
							><i class="bi bi-discord" />&nbsp; Discord</a
						>
						<a href="https://wakatime.com/@externref" class="text-left"
							><i class="bi bi-check-circle" />&nbsp; Wakatime</a
						>
						<a href="https://www.codewars.com/users/externref" class="text-left"
							><i class="bi bi-braces" />&nbsp; Codewars</a
						>
						<a href="mailto:shiva02939@gmail.com" class="text-left"
							><i class="bi bi-envelope-fill" />&nbsp; E-mail</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
