<script>
  import Button from '../ux/Button.svelte'
  import Avatar from '../ux/Avatar.svelte'

  export let url = ''
</script>

<style>
  .participants-video h1 {
    background: #0000004f;
  }
  .participants-video video {
    max-height: 400px;
  }
  .no-video-layout {
    @apply bg-secondary-dark m-auto rounded-xl flex items-center justify-center;
    max-height: 257px;
  }
</style>

<div
  class={'rounded relative participants-video p-3 w-full h-full ' + (!url ? 'no-video-layout' : '')}>
  {#if url}
    <video src={url} class="rounded-xl w-full h-full object-cover" />
    <div class="absolute top-8 flex items-center w-full ">
      <div class="flex-1 ml-5">
        <h1 class="p-2.5 rounded-md w-max flex items-center">
          Muhammed Hashim Ea
          <span class="h-3 w-3 bg-green-500 ml-3 rounded-full" />
        </h1>
      </div>
      <Button btnCls="mr-10">
        <ion-icon name="mic" class="text-2xl flex items-center" />
      </Button>
    </div>
  {:else}
    <div
      class="flex flex-col items-center relative h-full w-full justify-center">
      <Button btnCls="right-3 absolute top-2">
        <ion-icon name="mic" class="text-2xl flex items-center" />
      </Button>
      <Avatar
        src="https://i.pravatar.cc/150?img=12"
        size="xl"
        imgCls="rounded-full" />
      <h2 class="text-2xl text-center mt-3">Muhammed Hashim Ea</h2>
    </div>
  {/if}

</div>
