<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { initFlowbite } from 'flowbite';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	let transition2: boolean = false;

	onMount(() => {
		transition2 = true;
		initFlowbite();
	});
</script>

<nav
	transition:slide={{ axis: 'y', duration: 3000 }}
	class="bg-[#45A29E] font-exo2 fixed w-full z-20 top-0 start-0"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/e_logo.png" class="h-12 pt-1" alt="Lemon Logo" />
			<span
				class="self-center text-[#1F2833] text-4xl font-semibold whitespace-nowraptext-[#1F2833]"
				>&nbsp;externref</span
			>
		</a>
		<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<a href="https://github.com/externref/">
				<button
					type="button"
					class="hidden md:block lg:block text-white bg-[#1F2833] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					><i class="bi bi-github" />&nbsp;&nbsp;Github</button
				>
			</a>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
		<div
			class="items-center font-bold justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-sticky"
		>
			<ul
				class="flex flex-col p-4 md:p-0 mt-4 text-lg font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#45A29E]"
			>
				<li>
					<a
						href="/"
						class="block px-3 rounded md:hover:bg-transparent md:p-0 md:hover:text-yellow-100 text-[#1F2833] hover:text-[#1F2833]"
						aria-current="page"><i class="bi bi-house-fill" /> Home</a
					>
				</li>
				<li>
					<a
						href="/stats"
						class="block px-3 rounded md:hover:bg-transparent md:p-0 md:hover:text-yellow-100 text-[#1F2833] hover:bg-gray-700 hover:text-[#1F2833]"
						><i class="bi bi-bar-chart-steps" /> Code Stats</a
					>
				</li>
				<li>
					<a
						href="/blog"
						class="block px-3 rounded md:hover:bg-transparent md:p-0 md:hover:text-yellow-100 text-[#1F2833] hover:bg-gray-700 hover:text-[#1F2833]"
						><i class="bi bi-chat-quote-fill" /> Blog</a
					>
				</li>
				<!-- <li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-yellow-100 dark:text-[#1F2833] dark:hover:bg-gray-700 dark:hover:text-[#1F2833] md:dark:hover:bg-transparent dark:"
						>Contact</a
					>
				</li> -->
			</ul>
		</div>
	</div>
</nav>
