<script lang="ts">
    import SiteNavigation from "$lib/components/SiteNavigation.svelte";
    let { children } = $props(); 
</script>

<SiteNavigation />
<div class="page-shell">
    <!-- <div class="page-container">
        {@render children()}
    </div> -->
    {@render children()}
</div>
