<script lang="ts">
  import GridLines from "./GridLines.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="relative flex h-screen w-screen overflow-hidden bg-gray-light">
  <GridLines />
  <div class="z-10 basis-5/6">
    <slot />
  </div>
  <div class="z-10 basis-1/6">
    <Navbar />
  </div>
</div>
