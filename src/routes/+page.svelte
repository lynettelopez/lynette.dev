<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="overflow-hidden relative w-screen h-screen flex bg-gray-light">
  <div class="z-0 absolute w-full h-full grid grid-cols-4">
    <div class="w-px h-0 col-start-2 bg-gray-dark opacity-50 animate-grow-down" />
    <div class="w-px h-0 col-start-3 bg-gray-dark opacity-50 animate-grow-down animate-delay-100" />
    <div class="w-px h-0 col-start-4 bg-gray-dark opacity-50 animate-grow-down animate-delay-200" />
  </div>
  <div class="z-0 absolute w-full h-full grid grid-rows-4">
    <div class="w-0 h-px row-start-2 bg-gray-dark opacity-50 animate-grow-right" />
    <div
      class="w-0 h-px row-start-3 bg-gray-dark opacity-50 animate-grow-right animate-delay-100"
    />
    <div
      class="w-0 h-px row-start-4 bg-gray-dark opacity-50 animate-grow-right animate-delay-200"
    />
  </div>
  <div class="z-10 basis-5/6">
    <main class="w-full h-full flex justify-end items-center">
      <div class="w-4/5 space-y-32">
        <h1 class="space-y-4">
          <span
            class="block font-opti-champion text-black text-xl md:text-3xl xl:text-5xl animate-fade-right"
          >
            Hey, web cowboy,
          </span>
          <span
            class="inline-block font-opti-champion text-black text-5xl md:text-7xl xl:text-9xl animate-fade-right"
          >
            I'm Lynette
            <span class="font-knewave text-indigo animate-fade-in animate-delay-500"> * </span>
          </span>
        </h1>
        <p
          class="w-2/4 max-h-60 overflow-auto sm:max-h-none sm:overflow-visible font-nunito-sans font-light text-black text-lg md:text-xl xl:text-2xl animate-fade-down animate-delay-700"
        >
          <span class="font-knewave text-indigo">*</span> A full-stack software engineer based in Rhode
          Island. Obsessed with building beautiful, functional, and accessible web applications. Lover
          of coffee, writing, learning new languages (both human and computer-based), and all things
          modern minimalism.
        </p>
      </div>
    </main>
  </div>
  <div class="z-10 basis-1/6">
    <Navbar />
  </div>
</div>
