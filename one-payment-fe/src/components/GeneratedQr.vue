<template>
    <div id="wrapper">
        <left-menu-bar/>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <ul class="nav navbar-nav flex-nowrap ml-auto">
                            <li class="nav-item no-arrow mx-1" role="presentation">
                                <div class="nav-item no-arrow"><a class="nav-link" aria-expanded="false" href="settings"><i class="material-icons fa-fw">settings</i></a>
                                    
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <h3 class="text-dark mb-1">Generated QR-code</h3>
                </div>
                <div class="row justify-content-center">
                    <div class="m-10 col-xl-4 col-lg-5 col-md-6 col-sm-6"><img class="w-100"
                                                                               src="../img/QR_code_for_mobile_English_Wikipedia.svg.png">
                        <div class="d-flex justify-content-center p-1"><a class="btn btn-success btn-icon-split"
                                                                          role="button" style="margin: 5px;"><span
                                class="text-white-50 icon"><i class="fas fa-print"></i></span><span
                                class="text-white text">Print</span></a><a class="btn btn-success btn-icon-split"
                                                                           role="button" style="margin: 5px;"><span
                                class="text-white-50 icon"><i class="fas fa-print"></i></span><span
                                class="text-white text">Download</span></a></div>
                        <div class="row d-flex justify-content-center m-3">
                            <div class="card mb-4 border-left-success">
                                <div class="card-header py-3">
                                    <h6 class="m-0">Info</h6>
                                </div>
                                <div class="card-body">
                                    <p class="m-0"><strong>Amount:</strong> 400000$ <strong>Purpouse:</strong> Pizza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>OnePayment - F10</span></div>
                </div>
            </footer>
        </div>
        <a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
</template>

<script>
  import LeftMenuBar from '@/components/LeftMenuBar';

  export default {
    name: 'GeneratedQr',

    components: {
      LeftMenuBar
    }
  }
</script>

<style scoped>

</style>