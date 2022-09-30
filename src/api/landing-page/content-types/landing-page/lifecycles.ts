const axios = require("axios")
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook")

export default {
  async afterCreate(event) {
    const { result, params } = event;
    netlifyWebhook && axios.post(netlifyWebhook);
    // do something to the result;
  },

  async afterUpdate(event){
    const { result, params } = event;
    netlifyWebhook && axios.post(netlifyWebhook);
  }
};
