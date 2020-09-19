// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Fragment from 'vue-fragment';

export default function (Vue, { head }) {
  // adding material design icons
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css',
  });

  Vue.use(Fragment.Plugin);
  Vue.use(Buefy);

  Vue.component('Layout', DefaultLayout);
}
