<script lang="ts">
    let {
        text,
        author
    }: {
        text: string;
        author?: string;
    } = $props();
</script>

<blockquote class="my-12 border-l-4 border-ocean-teal pl-6">
    <p class="text-xl italic leading-relaxed">
        {text}
    </p>

    {#if author}
        <footer class="mt-4 text-sm opacity-70">
            — {author}
        </footer>
    {/if}
</blockquote>