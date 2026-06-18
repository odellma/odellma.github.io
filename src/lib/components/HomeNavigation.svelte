<script lang="ts">
    import { navItems } from '$lib/data/NavItems';

    const homeNavItems = navItems.filter(i => i.label !== 'Home');
</script>
<nav class="mt-6 rounded-2xl border border-ocean-blue/20 bg-ocean-navy shadow-lg">
    <div class="flex justify-center gap-2 p-2">
        {#each homeNavItems as item}
            <a
                href={item.href}
                class="rounded-xl px-5 py-3 text-sm font-medium text-ocean-mist transition hover:bg-ocean-blue hover:text-white"
            >
                {item.label}
            </a>
        {/each}
    </div>
</nav>