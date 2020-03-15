<template>
    <div id="wrapper">
        <left-menu-bar></left-menu-bar>
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
                    <h3 class="text-dark mb-1">Create QR</h3>
                </div>
                <div class="container">
                    <form id="contactForm" method="get">
                        <div class="form-row text-left" style="padding: 0px;">
                            <div class="col-md-12 offset-lg-0 offset-xl-0" id="message">
                                <div class="form-group has-feedback"><label for="from_name" style="font-size: 20px;">IBAN</label><select
                                        class="form-control d-lg-flex align-items-lg-end"
                                        style="font-size: 20px;padding: 11px;margin: 0px;height: 47px;">
                                    <option value="">Chillán</option>
                                    <optgroup label="Chillán Viejo"></optgroup>
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
                                <div class="form-group"><label for="comments"
                                                               style="font-size: 20px;">Comment</label><textarea
                                        class="form-control" id="comments" name="Comments" rows="5"></textarea></div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block"
                                            @click="$router.push({name: 'GeneratedQr'})" type="submit">Generate QR-code&nbsp;<i
                                            class="fa fa-qrcode"></i>&nbsp;
                                    </button>
                                    <button class="btn btn-primary btn-block" type="submit">Generate link&nbsp;<i
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

  export default {
    name: 'CreatePayment',

    components: {
      LeftMenuBar
    }
  }
</script>

<style scoped>

</style>