<script lang="ts">
    const navItems = [
        { label: 'Home', href: '/' },
		// { label: 'News', href: '/site/news' },
		// { label: 'Projects', href: '/site/projects' },
		// { label: 'CV', href: '/site/cv' }
	];
</script>
<nav class="mt-6 rounded-2xl border border-ocean-blue/20 bg-ocean-navy shadow-lg">
    <div class="flex justify-center gap-2 p-2">
        {#each navItems as item}
            <a
                href={item.href}
                class="rounded-xl px-5 py-3 text-sm font-medium text-ocean-mist transition hover:bg-ocean-blue hover:text-white"
            >
                {item.label}
            </a>
        {/each}
    </div>
</nav>