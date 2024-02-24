<script lang="ts">
	import About from './About.svelte';
	import Contacts from './Contacts.svelte';
	import MessageModal from './MessageModal.svelte';
	import Projects from './Projects.svelte';
</script>

<About />
<Projects />
<Contacts />
<MessageModal />
<svelte:head>
	<title>externref | Home</title>
	<meta content="externref.tech" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://i.imgur.com/yMOAhdj.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
