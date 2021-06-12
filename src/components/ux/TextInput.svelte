<script>
  export let inputProps = {
    placeholder: '',
    type: '',
    value: '',
  }
</script>

<style lang="postcss">
  .text-input {
    @apply flex items-center relative;
  }
  .text-input input {
    @apply bg-secondary-dark p-3 px-10 rounded-lg outline-none text-lg;
    min-width: 300px;
  }
</style>

<div class="text-input">
  <ion-icon
    name="search-outline"
    class="text-gray-500 absolute left-2 text-lg ml-1" />
  <input
    placeholder={inputProps.placeholder}
    class={inputProps.type}
    bind:value={inputProps.value} />
</div>
