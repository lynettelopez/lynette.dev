<script lang="ts">
  type NavbarItem = {
    isDisabled?: boolean;
    label: string;
    url?: string;
  };

  const navbarItems: NavbarItem[] = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/lynette-lopez/" },
    { label: "GitHub", url: "https://www.github.com/lynettelopez" },
    { isDisabled: true, label: "Blog" },
  ];

  const labelStyle = "font-nunito-sans text-xl uppercase tracking-[2px]";
</script>

<nav class="flex h-full w-full animate-entry-right flex-col items-center justify-evenly">
  {#each navbarItems as { isDisabled, label, url }}
    <div class="w-full origin-center translate-x-1/4 -rotate-90 text-center">
      {#if isDisabled}
        <div class="relative inline-block cursor-default">
          <span class={labelStyle}>{label}</span>
          <div class="absolute -left-1/3 top-1/2 h-1.5 w-24 rotate-12 bg-indigo" />
          <div
            class="absolute -left-6 -top-24 rotate-[100deg] font-knewave text-2xl lowercase text-indigo"
          >
            coming soon!
          </div>
        </div>
      {:else}
        <a class={labelStyle} href={url} target="_blank">{label}</a>
      {/if}
    </div>
  {/each}
</nav>
