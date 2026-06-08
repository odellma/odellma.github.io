<script lang="ts">
    const navItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'CV', href: '/cv.pdf' }
	];
</script>
<nav class="mt-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
    <div class="flex justify-center gap-2 p-2">
        {#each navItems as item}
            <a
                href={item.href}
                class="rounded-xl px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
                {item.label}
            </a>
        {/each}
    </div>
</nav>