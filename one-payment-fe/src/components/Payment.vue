<template>
    <div id="page-top">
        <div id="wrapper">
            <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-success p-0">
                <div class="container-fluid d-flex flex-column p-0">
                    <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div class="sidebar-brand-icon rotate-n-15"><i class="la la-mail-forward"></i></div>
                        <div class="sidebar-brand-text mx-3"><span>Onepayment</span></div>
                    </a>
                    <hr class="sidebar-divider my-0">
                    <ul class="nav navbar-nav text-light" id="accordionSidebar">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="index.html"><i
                                class="fas fa-qrcode" style="font-size: 35px;"></i><span style="margin: 10px;">Create QR-code</span></a>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="profile.html"><i
                                class="fas fa-user" style="font-size: 35px;"></i><span
                                style="margin: 10px;">Profile</span></a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="table.html"><i
                                class="fas fa-table" style="font-size: 35px;"></i><span style="margin: 10px;">Transactions</span></a>
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
                        <button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                    </div>
                </div>
            </nav>
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
  export default {
    name: 'Payment'
  }
</script>

<style scoped>

</style>