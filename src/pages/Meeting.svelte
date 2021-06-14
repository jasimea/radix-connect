<script>
  import ParticipantsVideo from '../components/meeting/ParticipantsVideo.svelte'
  import MeetingControls from '../components/meeting/MeetingControls.svelte'

  let userId = 2
  let id = 1

  let participants = [
    {
      audio: true,
      video: true,
      id: ++id,
      local: false,
      user: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=32',
        id: ++id,
      },
    },
    {
      audio: true,
      video: true,
      id: ++id,
      local: userId === 2 ? true : false,
      user: {
        name: 'Muhammed Hashim',
        avatar: 'https://i.pravatar.cc/150?img=12',
        id: ++id,
      },
    },
    {
      audio: true,
      video: true,
      id: ++id,
      local: false,
      user: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=32',
        id: ++id,
      },
    },
    {
      audio: true,
      video: true,
      id: ++id,
      local: userId === 2 ? true : false,
      user: {
        name: 'Muhammed Hashim',
        avatar: 'https://i.pravatar.cc/150?img=12',
        id: ++id,
      },
    },
    {
      audio: true,
      video: true,
      id: ++id,
      local: false,
      user: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=32',
        id: ++id,
      },
    },
    {
      audio: true,
      video: true,
      id: ++id,
      local: userId === 2 ? true : false,
      user: {
        name: 'Muhammed Hashim',
        avatar: 'https://i.pravatar.cc/150?img=12',
        id: ++id,
      },
    },
  ]

</script>

<style>
  .meeting-participants {
    display: grid;
    grid-template-columns: repeat(3, 32.33%);
    grid-gap: 12px;
  }

  .meeting-controls {
    min-height: 150px;
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

<div class="flex items-stretch flex-col meeting h-full">
  {#if participants && participants.length}
    <div class="meeting-participants justify-center items-center flex-1 overflow-auto">
      {#each participants as participant}
        <ParticipantsVideo streamProperties={participant} data="bull" />
      {/each}
    </div>
    <div class="meeting-controls">
      <MeetingControls />
    </div>
  {:else}
    <p>Loading....</p>
  {/if}
</div>
