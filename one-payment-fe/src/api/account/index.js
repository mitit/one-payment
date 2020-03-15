import api from '@/api';
import constants from '@/constants';

export default {

  getById(id) {
    return api.doGet(`${constants.PROFILE_PATH}/${id}`);
  }
}
