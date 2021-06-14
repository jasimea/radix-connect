<script>
  import { onMount } from 'svelte'

  import Button from '../ux/Button.svelte'
  import Avatar from '../ux/Avatar.svelte'

  export let streamProperties = {}
  export let data = ''

  const generateStreamUrl = async () => {
    if (streamProperties.local) {
      const remoteStream = getUserMedia()
      if (remoteStream) {
        Promise.resolve(remoteStream).then((data) => {
          const mediaPlayer = document.getElementById(
            'video_' + streamProperties.user.id,
          )
          mediaPlayer.srcObject = data
        })
      }
    } else {
      const mediaPlayer = document.getElementById(
        'video_' + streamProperties.user.id,
      )
      mediaPlayer.src =
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    }
  }

  const getUserMedia = async () => {
    if (
      navigator &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
    ) {
      const mediaData = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      return mediaData
    } else {
      // Browser not support
      alert('Browser issue')
    }
  }

  onMount(async () => {
    generateStreamUrl()
  }, [streamProperties])
</script>

<style type="postcss">
  .participants-video h1 {
    background: #0000004f;
  }
  .participants-video video {
    /* max-height: 270px; */
  }
  .no-video-layout {
    @apply bg-secondary-dark rounded-xl flex items-center justify-center;
    max-height: 257px;
  }
</style>

<div
  class={'rounded relative participants-video w-full h-full ' + (!streamProperties.video ? 'no-video-layout' : '')}>
  {#if streamProperties.video}
    <video
      autoplay
      muted
      id={'video_' + streamProperties.user.id}
      class="rounded-xl w-full h-full object-cover" />
    <div class="absolute top-8 flex items-center w-full ">
      <div class="flex-1 ml-5">
        <h1 class="p-2.5 rounded-md w-max flex items-center">
          {streamProperties.user.name}
          <span class="h-3 w-3 bg-green-500 ml-3 rounded-full" />
        </h1>
      </div>
      <Button btnCls="mr-10">
        <ion-icon name="mic" class="text-xl flex items-center" />
      </Button>
    </div>
  {:else}
    <div
      class="flex flex-col items-center relative h-full w-full justify-center">
      <Button btnCls="right-3 absolute top-2">
        <ion-icon name="mic" class="text-2xl flex items-center" />
      </Button>
      <Avatar
        src={streamProperties.user.avatar}
        size="xl"
        imgCls="rounded-full" />
      <h2 class="text-2xl text-center mt-3">{streamProperties.user.name}</h2>
    </div>
  {/if}

</div>
