import VueCountDown from '@xkeshi/vue-countdown';
export default {
  install(vm) {
    vm.component('countdown', VueCountDown);
  }
}
