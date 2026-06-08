<script lang="ts">
    import profile from '$lib/assets/profile-square.webp'
</script>
<section class="rounded-3xl border border-ocean-blue/20 bg-ocean-navy px-6 py-10 shadow-2xl backdrop-blur">
    <div class="flex flex-col items-center text-center">
        <div class="rounded-full bg-gradient-to-br from-ocean-aqua to-ocean-blue p-1 shadow-lg shadow-ocean-blue/30">
            <img
                src={profile}
                alt="Matthew O'Dell"
                class="h-44 w-44 rounded-full object-cover"
            />
        </div>

        <p class="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-ocean-aqua">
            Software Engineer · Biologist
        </p>

        <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Matthew O'Dell
        </h1>

        <p class="mt-4 max-w-2xl text-lg leading-8 text-ocean-mist">
        </p>
    </div>
</section>