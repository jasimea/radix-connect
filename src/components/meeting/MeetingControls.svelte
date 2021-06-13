<script>
  import Button from '../ux/Button.svelte'

  const onHandleClick = () => {
    alert(true)
  }
</script>

<div
  class="border-t w-full border-secondary-dark py-4 px-11 flex items-center
  justify-center">
  <Button type="dark" btnCls="mr-5">
    <ion-icon name="mic" class="text-2xl flex items-center" />
  </Button>
  <Button type="dark" btnCls="mr-5" :on:click={onHandleClick}>
    <ion-icon name="videocam-outline" class="text-2xl flex items-center" />
  </Button>
  <Button type="dark" btnCls="mr-5 relative">
    <span class="absolute top-2 right-3 text-xs">6</span>
    <ion-icon name="people-outline" class="text-2xl flex items-center" />
  </Button>
  <Button type="danger" btnCls="mr-5">End Meeting</Button>
  <Button type="dark" btnCls="mr-5">
    <ion-icon name="share-outline" class="text-2xl flex items-center" />
  </Button>
  <Button type="dark" btnCls="mr-5">
    <ion-icon name="stop-circle-outline" class="text-2xl flex items-center" />
  </Button>
  <Button type="primary" btnCls="mr-5">
    <div class="flex items-center w-full">
      <ion-icon name="chatbox-ellipses" class="text-2xl flex items-center " />
      <ion-icon name="chevron-forward" class="ml-2" />
    </div>
  </Button>
</div>
