<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let transition: boolean = false;

	onMount(() => {
		transition = true;
	});
</script>

{#if transition}
	<section transition:blur={{ delay: 2000, duration: 1000 }} id="projects">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
			<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#c5c6c7] pb-5 border-b-[1px]">
					Projects
				</h2>
				<p class="font-light lg:mb-16 sm:text-xl text-[#66fcf1]">
					Here are some major projects that I made in my journey as a Software development
					enthusiast.
				</p>
			</div>
			<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
				<div class="items-center rounded-lg shadow sm:flex bg-[#1a2129] border-gray-700">
					<a href="https://github.com/externref/wyvern" class="w-[370px] hidden lg:block">
						<img
							class="py-2 pl-5 rounded-lg sm:rounded-none sm:rounded-l-lg"
							src="/projects/wyvern.png"
							alt="wyvern icon"
						/>
					</a>
					<div class="py-5 px-5">
						<h3
							class="text-2xl font-semibold tracking-tight text-[#C5C6C7] border-b-[1px] mb-2 p-1"
						>
							<a href="https://github.com/externref/wyvern">wyvern</a>
						</h3>
						<span class=" text-gray-400">Discord API library</span>
						<p class="mt-3 mb-4 font-light text-gray-400">
							wyvern is an asynchronus discord API library written in python to develop bots and
							automations of applications.
						</p>
						<ul class="flex space-x-4 sm:mt-0">
							<li>
								<a
									href="https://github.com/externref/wyvern"
									class="text-gray-500 hover:text-white"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
							<li>
								<a
									href="https://wyvern.readthedocs.io/en/latest/"
									class="text-gray-500 hover:text-white"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="items-center rounded-lg shadow sm:flex bg-[#1a2129] border-gray-700">
					<a href="https://github.com/externref/pinaka" class="w-[400px] hidden lg:block">
						<img
							class="py-2 pl-5 rounded-lg sm:rounded-none sm:rounded-l-lg"
							src="/projects/pinaka.png"
							alt="Pinaka Icon"
						/>
					</a>
					<div class="py-5 px-5">
						<h3
							class="text-2xl font-semibold tracking-tight text-[#C5C6C7] border-b-[1px] mb-2 p-1"
						>
							<a href="https://github.com/externref/pinaka">pinaka</a>
						</h3>
						<span class=" text-gray-400">Shloka querying API</span>
						<p class="mt-3 mb-4 font-light text-gray-400">
							An API written in svelte-kit for querying and viewing sanatana texts like gita,
							ramcharitmanas, etc. using web requests or loading the site.
						</p>
						<ul class="flex space-x-4 sm:mt-0">
							<li>
								<a
									href="https://github.com/externref/pinaka"
									class="text-gray-500 hover:text-white"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
							<li>
								<a href="https://pinaka.up.railway.app" class="text-gray-500 hover:text-white">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="items-center rounded-lg shadow sm:flex bg-[#1a2129] border-gray-700">
					<a href="https://github.com/externref/aoi" class="hidden lg:block w-[350px]">
						<img
							class="py-2 pl-5 rounded-lg sm:rounded-none sm:rounded-l-lg"
							src="/projects/aoi.png"
							alt="Aoi Icon"
						/>
					</a>
					<div class="py-5 px-5">
						<h3
							class="text-2xl font-semibold tracking-tight text-[#C5C6C7] border-b-[1px] mb-2 p-1"
						>
							<a href="https://github.com/externref/aoi">aoi</a>
						</h3>
						<span class=" text-gray-400">SQLITE3 CLI</span>
						<p class="mt-3 mb-4 font-light text-gray-400">
							Sqlite3 CLI built on top of the python sqlite3 module. Supports recent query history
							and exception support
						</p>
						<ul class="flex space-x-4 sm:mt-0">
							<li>
								<a href="https://github.com/externref/aoi" class="text-gray-500 hover:text-white">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
							<li>
								<a href="https://pypi.org/project/aoi" class="text-gray-500 hover:text-white">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
											clip-rule="evenodd"
										/></svg
									>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<!-- <div class="items-center rounded-lg shadow sm:flex bg-gray-800 border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar">
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-semibold tracking-tight  text-white">
                        <a href="#">Lana Byrd</a>
                    </h3>
                    <span class=" text-gray-400">Marketing & Sale</span>
                    <p class="mt-3 mb-4 font-light  text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500  hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500  hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500  hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500  hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>   -->
			</div>
			<p class="border-b-[1px]" />
		</div>
	</section>
{/if}
