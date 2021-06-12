<script>
  export let src = ''
  export let size = ''
  export let customCls = ''
  export let imgCls = ''
</script>

<style>
  .avatar-md {
    width: 45px;
    height: 45px;
  }
  .avatar-lg {
    width: 60px;
    height: 60px;
  }
  .avatar-xl {
    width: 80px;
    height: 80px;
  }
  .avatar-sm {
    width: 30px;
    height: 30px;
  }
  .avatar img {
    border-radius: 10px;
  }
</style>

<div
  class={size === 'small' ? 'avatar-sm' : size === 'medium' ? 'avatar-md' : size === 'large' ? 'avatar-lg' : size === 'xl' ? 'avatar-xl' : 'avatar-medium' + customCls}>
  <img {src} class={imgCls} />
</div>
