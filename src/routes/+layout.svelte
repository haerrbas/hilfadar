<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const tabs = [
		{ href: '/angebote', label: 'Need', icon: '📋' },
		{ href: '/angebote/neu', label: 'Give', icon: '➕' },
		{ href: '/profil', label: 'Profile', icon: '👤' }
	];

	function isActive(href: string): boolean {
		const pathname = page.url?.pathname ?? '';
		if (href === '/angebote/neu') return pathname === '/angebote/neu';
		if (href === '/angebote') return pathname === '/angebote';
		return pathname.startsWith(href);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<nav class="bottom-nav" aria-label="Hauptnavigation">
	{#each tabs as tab}
		<a href={tab.href} class:aktiv={isActive(tab.href)}>
			<span class="icon">{tab.icon}</span>
			<span class="label">{tab.label}</span>
		</a>
	{/each}
</nav>

<style>
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: white;
		border-top: 1px solid #e5e7eb;
		display: flex;
		justify-content: space-around;
		padding: 0.4rem 0 calc(0.4rem + env(safe-area-inset-bottom));
		z-index: 50;
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);
		font-family: sans-serif;
	}
	.bottom-nav a {
		flex: 1;
		text-align: center;
		text-decoration: none;
		color: #888;
		padding: 0.4rem 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15rem;
		transition: color 0.15s;
	}
	.bottom-nav a:hover {
		color: #4f46e5;
	}
	.bottom-nav a.aktiv {
		color: #4f46e5;
		font-weight: 600;
	}
	.bottom-nav .icon {
		font-size: 1.4rem;
		line-height: 1;
	}
	.bottom-nav .label {
		font-size: 0.75rem;
	}
</style>
