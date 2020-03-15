<template>
    <nav ref="leftMenuBar"
         class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-success p-0">
        <div class="container-fluid d-flex flex-column p-0">
            <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div class="sidebar-brand-icon rotate-n-15"><i class="la la-mail-forward"></i></div>
                <div class="sidebar-brand-text mx-3"><span>Onepayment</span></div>
            </a>
            <hr class="sidebar-divider my-0">
            <ul class="nav navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item" role="presentation"><a class="nav-link"
                                                            @click="$router.push({name: 'CreatePayment'})"><i
                        class="fas fa-qrcode" style="font-size: 35px;"></i><span
                        style="margin: 10px;">Create QR-code</span></a>
                </li>
                <li class="nav-item" role="presentation"><a class="nav-link"
                                                            @click="$router.push({name: 'AccountInfo'})"><i
                        class="fas fa-user" style="font-size: 35px;"></i><span
                        style="margin: 10px;">Profile</span></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="table.html"><i
                        class="fas fa-table" style="font-size: 35px;"></i><span
                        style="margin: 10px;">Transactions</span></a>
                </li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="login.html"><i
                        class="far fa-user-circle" style="font-size: 35px;"></i><span style="margin: 10px;">Login</span></a>
                </li>
                <li class="nav-item d-flex justify-content-center" role="presentation"><a class="nav-link"
                                                                                          href="register.html"><i
                        class="fas fa-user-circle" style="font-size: 35px;"></i><span class="d-inline-flex"
                                                                                      style="margin: 10px;">Register</span></a>
                </li>
                <li class="nav-item" role="presentation"></li>
                <li class="nav-item" role="presentation"></li>
                <li class="nav-item" role="presentation"></li>
            </ul>
            <div class="text-center d-none d-md-inline">
                <button @click="toggle" class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'LeftMenuBar',

    methods: {
      toggle() {
        this.$refs.leftMenuBar.classList.toggle('toggled');
      }
    }
  }
</script>

<style scoped>

</style>