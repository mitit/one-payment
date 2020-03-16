<template>
    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div class="container-fluid">
            <button @click="toggle" class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop"
                    type="button"><i class="fas fa-bars"></i></button>
            <ul class="nav navbar-nav flex-nowrap ml-auto">
                <li class="nav-item no-arrow mx-1" role="presentation">
                    <div class="nav-item no-arrow"><a class="nav-link" aria-expanded="false"
                    ><i class="material-icons fa-fw">settings</i></a>

                    </div>
                    <div class="shadow dropdown-list dropdown-menu dropdown-menu-right"
                         aria-labelledby="alertsDropdown"></div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Header',

    methods: {
      toggle() {
        document.getElementById('leftMenuBar').classList.toggle('toggled');
      }
    }
  }
</script>

<style scoped>

</style>