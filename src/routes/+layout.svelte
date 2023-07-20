<script lang="ts">
  import '../app.css';
  import Sidenav from '$lib/components/Sidenav.svelte';
</script>

<div class="relative w-screen h-screen flex bg-gray-light">
  <div class="z-0 absolute w-full h-full grid grid-cols-4">
    <div class="w-px h-0 col-start-2 animate-grow-down bg-gray-dark opacity-50" />
    <div class="w-px h-0 col-start-3 animate-grow-down animate-delay-100 bg-gray-dark opacity-50" />
    <div class="w-px h-0 col-start-4 animate-grow-down animate-delay-200 bg-gray-dark opacity-50" />
  </div>
  <div class="z-0 absolute w-full h-full grid grid-rows-4">
    <div class="w-0 h-px row-start-2 animate-grow-right bg-gray-dark opacity-50" />
    <div
      class="w-0 h-px row-start-3 animate-grow-right animate-delay-100 bg-gray-dark opacity-50"
    />
    <div
      class="w-0 h-px row-start-4 animate-grow-right animate-delay-200 bg-gray-dark opacity-50"
    />
  </div>
  <div class="z-10 basis-5/6">
    <slot />
  </div>
  <div class="z-10 basis-1/6">
    <Sidenav />
  </div>
</div>
