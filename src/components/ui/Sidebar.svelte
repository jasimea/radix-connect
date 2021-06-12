<script>
  import brand from '../../assets/images/brand.svg'
</script>

<style lang="postcss">
  .sidebar {
    width: 80px;
    @apply border-r border-secondary-dark flex flex-col;
  }
  .sidebar-brand {
    height: 70px;
    width: 45px;
    @apply flex items-center justify-center m-auto;
  }
  .sidebar-menus {
    @apply flex-1 mt-10 flex flex-col items-center cursor-pointer;
  }
  .sidebar-menus__item {
    @apply mb-3 p-3 rounded-xl;
  }
  .sidebar-menus__item:hover {
    @apply bg-secondary-dark;
  }
  .sidebar-settings {
    @apply flex flex-col items-center cursor-pointer;
  }
</style>

<div class="sidebar">
  <div class="sidebar-brand">
    <img src={brand} />
  </div>
  <div class="sidebar-menus">
    <div class="sidebar-menus__item">
      <ion-icon name="home-outline" class="text-white text-2xl" />
    </div>
    <div class="sidebar-menus__item">
      <ion-icon
        name="chatbubble-ellipses-outline"
        class="text-white text-2xl" />
    </div>
    <div class="sidebar-menus__item">
      <ion-icon name="time-outline" class="text-white text-2xl" />
    </div>
    <div class="sidebar-menus__item">
      <ion-icon name="calendar-clear-outline" class="text-white text-2xl" />
    </div>
  </div>
  <div class="sidebar-settings mb-10">
    <div
      class="sidebar-menus__item bg-secondary-dark border border-secondary-dark">
      <ion-icon name="cog-outline" class="text-white text-2xl flex" />
    </div>
  </div>
</div>
