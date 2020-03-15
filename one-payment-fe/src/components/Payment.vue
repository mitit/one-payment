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
                    <div class="container col-xl-6 col-lg-8 col-md-10">
                        <div class="card shadow mt-4 mb-4 border-left-success">
                        <div class="card-header py-3">
                            <h6 class="text-primary m-0 font-weight-bold">Transaction info</h6>
                        </div>
                        <div class="card-body">
                            <p class="m-0"><strong>Requester info: </strong><br>Maria Sommer<br>
                            <strong>IBAN:</strong><br>DE89 3704 0044 0532 0130 00<br><strong>Purpouse of
                                    payment:</strong><br>Roses 15st.<br><strong>Amount:</strong> 35 €</p>
                        </div>
                    </div>
                        <form id="contactForm" method="get">
                            <div class="form-row text-left" style="padding: 0px;">
                                <div class="col-md-12 offset-lg-0 offset-xl-0" id="message">
                                    <div class="form-group has-feedback"><label
                                            style="font-size: 20px;">Choose
                                        IBAN</label><select class="form-control d-lg-flex align-items-lg-end"
                                                            style="font-size: 12px;padding: 11px;margin: 0px;height: 47px;">
                                        <option value="">ES91 2100 0418 4502 0005 13</option>
                                        <optgroup label="ES91 2100 1234 4502 1234 53"></optgroup>
                                    </select>
                                        <small><a href="/settings">Manage your IBANs..</a>.</small>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a class="btn btn-success btn-icon-split mb-3" role="button"><span
                                            class="text-white-50 icon"><i
                                            class="la la-mail-forward rotate-n-15"></i></span><span
                                            class="text-white text">OnePayment&nbsp;</span></a>
                                    </div>
                                    <hr>
                                    <div class="d-flex justify-content-center">
                                        <a class="btn btn-primary btn-icon-split mb-3" role="button"><span
                                            class="text-white-50 icon"><i
                                            class="la la-mail-forward rotate-n-15"></i></span><span
                                            class="text-white text">eBanking payment&nbsp;</span></a>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <div class="apple-pay-button-with-text apple-pay-button-black-with-text mb-3">
                                            <span class="text"></span>
                                            <span class="logo"></span>
                                        </div>
                                    </div>
                                    
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
            </div>
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