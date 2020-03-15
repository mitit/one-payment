import api from '@/api';
import constants from '@/constants';

export default {

  getAll(params) {
    return api.doGet(`${constants.INVOICES_PATH}`, params);
  },

  getById(id) {
    return api.doGet(`${constants.INVOICES_PATH}/${id}`);
  },

  create(invoice) {
    return api.doPost(`${constants.INVOICES_PATH}`, invoice);
  },

  acceptPayment(invoice) {
    return api.doPost(`${constants.INVOICES_PATH}/${id}/pay`, invoice);
  }
}
