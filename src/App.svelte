<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Navbar from './components/ui/navbar.svelte'
  import Sidebar from './components/ui/sidebar.svelte'

  import Meeting from './pages/Meeting.svelte'
</script>

<Router>
  <main class="w-full h-full flex">
    <Sidebar />
    <div class="w-full">
      <Navbar />
      <Route path="/">
        <Meeting />
      </Route>
    </div>
  </main>
</Router>

<style>
  
</style>
