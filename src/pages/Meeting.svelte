<script>
  import ParticipantsVideo from '../components/meeting/ParticipantsVideo.svelte'
  import MeetingControls from '../components/meeting/MeetingControls.svelte'

  let videos = [
    {
      url:
        ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
      url:
        ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
      url: null,
    },
    {
      url:
        ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
      url:
        ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
      url:
        ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
  ]
</script>

<style>
  .meeting-participants {
    display: grid;
    grid-template-columns: repeat(3, 32.33%);
    grid-gap: 8px;
    height: 80%;
  }
  @media screen and (max-width: 990px) {
    .meeting-participants {
      grid-template-columns: repeat(2, 49.33%);
    }
  }
  @media screen and (max-width: 640px) {
    .meeting-participants {
      grid-template-columns: repeat(1, 100%);
    }
  }
</style>

<div class="flex items-center flex-col meeting h-full">
  <div class="meeting-participants w-full">
    {#each videos as video}
      <ParticipantsVideo url={video.url} />
    {/each}
  </div>

  <div class="meeting-controls w-full">
    <MeetingControls />
  </div>
</div>
