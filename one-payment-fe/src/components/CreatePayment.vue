<template>
    <div id="wrapper">
        <left-menu-bar></left-menu-bar>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <page-header></page-header>
                <div class="container-fluid">
                    <h3 class="text-dark mb-1">Create QR</h3>
                </div>
                <div class="container col-xl-6 col-lg-8 col-md-10">
                    <form id="contactForm" method="get">
                        <div class="form-row text-left" style="padding: 0px;">
                            <div class="col-md-12 offset-lg-0 offset-xl-0" id="message">
                                <div class="form-group has-feedback"><label for="from_name" style="font-size: 20px;">IBAN</label><select
                                        class="form-control d-lg-flex align-items-lg-end"
                                        style="font-size: 12px;padding: 11px;margin: 0px;height: 47px;">
                                    <option value="">DE89 3704 0044 0532 0130 00</option>
                                    <optgroup label="DE89 3704 3244 5432 1350 00"></optgroup>
                                </select></div>
                                <div
                                        class="form-group has-feedback"><label for="from_name" style="font-size: 20px;">Purpose
                                    of payment</label><input class="form-control" type="text" id="from_name"
                                                             tabindex="-1" name="from_name" required=""
                                                             style="font-size: 21px;height: 45.5px;"></div>
                                <div
                                        class="form-group has-feedback"><label
                                        style="font-size: 20px;filter: brightness(0%);">Amount</label><input
                                        class="form-control" type="tel" style="font-size: 21px;"></div>
                                <div class="form-group">
                                    <button class="btn btn-success btn-block"
                                            @click="$router.push({name: 'GeneratedQr'})" type="submit">Generate QR-code&nbsp;<i
                                            class="fa fa-qrcode"></i>&nbsp;
                                    </button>
                                    <button class="btn btn-success btn-block" type="submit">Generate link&nbsp;<i
                                            class="fa fa-link"></i></button>
                                </div>
                                <hr>
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
</template>

<script>
  import LeftMenuBar from '@/components/LeftMenuBar';
  import PageHeader from '@/components/Header';

  export default {
    name: 'CreatePayment',

    components: {
      LeftMenuBar,
      PageHeader
    }
  }
</script>

<style scoped>

</style>