<template>
    <div id="page-top">
        <div id="wrapper">
            <left-menu-bar></left-menu-bar>
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <page-header></page-header>
                    <div class="container-fluid">
                        <h3 class="text-dark mb-1">Accept payment</h3>
                    </div>
                    <div class="card shadow mb-4 m-3 border-left-success">
                        <div class="card-header py-3">
                            <h6 class="text-primary m-0 font-weight-bold">Transaction info</h6>
                        </div>
                        <div class="card-body">
                            <p class="m-0"><strong>Requester info: </strong><br>Adolf
                                Petrovich<br><strong>IBAN:</strong><br>DE 14213 123 12 124124<br><strong>Purpouse of
                                    payment:</strong><br>Pizza<br><strong>Amount:</strong> $3000</p>
                        </div>
                    </div>
                    <div class="container">
                        <form id="contactForm" method="get">
                            <div class="form-row text-left" style="padding: 0px;">
                                <div class="col-md-12 offset-lg-0 offset-xl-0" id="message">
                                    <div class="form-group has-feedback"><label
                                            style="font-size: 20px;">Choose
                                        IBAN</label><select class="form-control d-lg-flex align-items-lg-end"
                                                            style="font-size: 20px;padding: 11px;margin: 0px;height: 47px;">
                                        <option value="">Chillán</option>
                                        <optgroup label="Chillán Viejo"></optgroup>
                                    </select>
                                        <small><a href="LINK TO SETTINGS">Manage your IBANs..</a>.</small>
                                    </div>
                                    <div
                                            class="d-flex justify-content-center"><a
                                            class="btn btn-success btn-icon-split mb-3" role="button"><span
                                            class="text-white-50 icon"><i
                                            class="la la-mail-forward rotate-n-15"></i></span><span
                                            class="text-white text">Pay&nbsp;</span></a></div>
                                </div>
                            </div>
                        </form>
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
    name: 'Payment',

    components: {
      LeftMenuBar,
      PageHeader
    }
  }
</script>

<style scoped>

</style>