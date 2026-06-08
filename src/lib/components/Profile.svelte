<script lang="ts">
    import profile from '$lib/assets/profile-square.webp'
</script>
<section class="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-2xl backdrop-blur">
    <div class="flex flex-col items-center text-center">
        <div class="rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 p-1 shadow-lg">
            <img
                src={profile}
                alt="Matthew O'Dell"
                class="h-44 w-44 rounded-full object-cover"
            />
        </div>

        <p class="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Software Engineer · Biologist
        </p>

        <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Matthew O'Dell
        </h1>

        <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-300">            
        </p>
    </div>
</section>