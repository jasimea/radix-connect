<script>
  import TextInput from '../ux/TextInput.svelte'
  import Avatar from '../ux/Avatar.svelte'
</script>

<style lang="postcss">
  .navbar {
    height: 70px;
    @apply flex items-center border-b border-secondary-dark;
  }

  .navbar-actions {
    @apply flex items-center;
  }
</style>

<nav class="navbar">
  <div class="navbar-details flex-1 pl-6">
    <h1 class="text-xl">Home</h1>
  </div>
  <div class="navbar-actions pr-6">
    <TextInput inputProps={{ placeholder: 'Search By Keyword' }} />
    <div class="ml-5">
      <Avatar
        src="https://i.pravatar.cc/150?img=37"
        size="medium"
        imgCls="rounded-xl" />
    </div>
  </div>
</nav>
