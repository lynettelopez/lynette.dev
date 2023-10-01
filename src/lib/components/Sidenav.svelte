<script lang="ts">
  type SidenavItem = {
    isDisabled?: boolean;
    label: string;
    url?: string;
  };

  const sidenavItems: SidenavItem[] = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/lynette-lopez/" },
    { label: "GitHub", url: "https://www.github.com/lynettelopez" },
    { isDisabled: true, label: "Blog" },
  ];

  const labelStyle = "font-nunito-sans text-xl uppercase tracking-[2px]";
</script>

<nav class="w-full h-full flex flex-col justify-evenly items-center animate-entry-right">
  {#each sidenavItems as { isDisabled, label, url }}
    <div class="w-full text-center origin-center -rotate-90 translate-x-1/4">
      {#if isDisabled}
        <div class="relative inline-block cursor-default">
          <span class={labelStyle}>{label}</span>
          <div class="absolute top-1/2 -left-1/3 w-24 h-1.5 rotate-12 bg-indigo" />
          <div
            class="absolute -top-24 -left-6 rotate-[100deg] font-knewave text-2xl text-indigo lowercase"
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
