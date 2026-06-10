<!-- src/lib/components/ArticleLayout.svelte -->
<script lang="ts">
	import ArticleSidebar from '$lib/components/Sidbar.svelte';

	type Heading = {
		id: string;
		text: string;
	};

	let { headings = [], children } = $props();
</script>

<div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[14rem_minmax(0,1fr)]">
	<ArticleSidebar {headings} />

	<article class="prose ocean-prose max-w-none text-left">
		{@render children()}
	</article>
</div>