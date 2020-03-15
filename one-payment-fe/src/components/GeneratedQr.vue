<template>
    <div id="wrapper">
        <left-menu-bar/>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <page-header></page-header>
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
                                    <p class="m-0"><strong>Amount:</strong> 35 € <br><strong>Purpouse:</strong> Roses 15st.</p>
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
  import PageHeader from '@/components/Header';

  export default {
    name: 'GeneratedQr',

    components: {
      LeftMenuBar,
      PageHeader
    }
  }
</script>

<style scoped>

</style>