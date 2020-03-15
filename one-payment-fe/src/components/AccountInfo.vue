<template>
    <div id="page-top">
        <div id="wrapper">
            <left-menu-bar></left-menu-bar>
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <page-header></page-header>
                    <div class="container-fluid">
                        <h3 class="text-dark mb-1">Hello, User Userovich</h3>
                    </div>
                    <div class="row justify-content-center">
                        <div class="m-10 col-xl-6 col-lg-8 col-md-10">
                            <div class="row m-3 d-block">
                                <div class="table-responsive table mt-2" id="dataTable">
                                    <table class="table dataTable my-0" id="dataTable1">
                                        <thead>
                                        <tr>
                                            <th>Your IBANs</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>CH93 0076 2011 6238 5295 7</td>
                                        </tr>
                                        <tr>
                                            <td>CH93 0076 2011 6238 5295 7</td>
                                        </tr>
                                        <tr>
                                            <td>CH93 0076 2011 6238 5295 7</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <label class="font-weight-bold ml-2">Last transactions:</label>
                                <hr>
                                <div class="card mb-2 border-left-success">
                                    <div class="card-body">
                                        <p class="m-0"><strong>Amount:</strong> 400000$ <strong>Purpouse:</strong> Pizza
                                        </p>
                                    </div>
                                </div>
                                <div class="card mb-2 border-left-success">
                                    <div class="card-body">
                                        <p class="m-0"><strong>Amount:</strong> 400000$ <strong>Purpouse:</strong> Pizza
                                        </p>
                                    </div>
                                </div>
                                <div class="card mb-2 border-left-success">
                                    <div class="card-body">
                                        <p class="m-0"><strong>Amount:</strong> 400000$ <strong>Purpouse:</strong> Pizza
                                        </p>
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
    </div>
</template>

<script>
  import LeftMenuBar from '@/components/LeftMenuBar';
  import PageHeader from '@/components/Header';

  export default {
    name: 'AccountInfo',

    components: {
      LeftMenuBar,
      PageHeader
    }
  }
</script>

<style scoped>

</style>