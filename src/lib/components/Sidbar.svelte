<!-- src/lib/components/ArticleSidebar.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	type Heading = {
		id: string;
		text: string;
	};

	let { headings = [] }: { headings: Heading[] } = $props();

	let activeId = $state('');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{
				rootMargin: '-20% 0px -70% 0px',
				threshold: 0
			}
		);

		for (const heading of headings) {
			const element = document.getElementById(heading.id);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	});
</script>
<div class="hidden w-56 shrink-0 lg:block">
	<nav class="sticky top-8">
		<div class="space-y-2">
			{#each headings as heading}
				<a
					href={`#${heading.id}`}
					class={[
						'block border-l-2 py-1 pl-3 text-sm transition-colors',
						activeId === heading.id
							? 'border-cyan-400 text-cyan-300'
							: 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
					]}
				>
					{heading.text}
				</a>
			{/each}
		</div>
	</nav>
</div>
