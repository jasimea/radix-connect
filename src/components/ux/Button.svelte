<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  dispatch('eventName')

  export let text = ''
  export let type = ''
  export let btnCls = ''
</script>

<style lang="postcss">
  .app-btn button {
    @apply text-white p-3 px-4 rounded-lg;
  }
  .btn-primary {
    @apply bg-primary border border-primary;
  }
  .btn-dark {
    @apply bg-secondary-dark;
  }
  .btn-danger {
    @apply bg-danger;
  }
</style>

<div class={'app-btn ' + btnCls}>
  <button
    on:click
    class={type === 'danger' ? 'btn-danger' : type === 'dark' ? 'btn-dark' : 'btn-primary'}>
    {text}
    <slot />
  </button>
</div>
