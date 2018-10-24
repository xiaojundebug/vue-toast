import "./toast.css";

let isShow = false;
let vm = null;

function mergeOptions(target, options) {
  for (const key in options) {
    if (target.hasOwnProperty("key")) target[key] = options[key];
  }
  return target;
}

export default {
  install(Vue, options) {
    const opt = mergeOptions(
      {
        position: "bottom",
        duration: 2500
      },
      options
    );

    Vue.prototype.$toast = (msg, position = opt.position) => {
      if (isShow) return;

      const tmpl = `<transition name="z-toast">
                     <div v-if="show" :class="className">{{msg}}</div>
                    </transition>`;

      if (!vm) {
        const Toast = Vue.extend({
          data() {
            return {
              show: false,
              msg: "",
              className: ""
            };
          },
          template: tmpl
        });
        vm = new Toast();
        document.body.appendChild(vm.$mount().$el);
      }

      vm.show = isShow = true;
      vm.msg = msg;
      vm.className = `z-toast z-toast-${position}`;

      setTimeout(() => {
        vm.show = isShow = false;
      }, opt.duration);
    };

    ["bottom", "center", "top"].forEach(position => {
      Vue.prototype.$toast[position] = msg => Vue.prototype.$toast(msg, position);
    });
  }
};
