const setLocalStorage = (props) => {
  for (let prop in props) {
    window.localStorage.setItem(prop, props[prop]);
  }
}

const getLocalStorage = (name) => {
  return window.localStorage.getItem(name)
}

const getLocalStorages = (...objs) => {
  let storage = {};
  for (let obj of objs) {
    storage[obj] = window.localStorage.getItem(obj) || "";
  }
  return storage;
}

const removeLocalStorage = (...objs) => {
  for (let obj in objs) {
    window.localStorage.removeItem(obj);
  }
}

export {
  setLocalStorage,
  getLocalStorage,
  getLocalStorages,
  removeLocalStorage
}

export default {
  install(vm) {
    Object.defineProperties(vm.prototype, {
      $util: {
        value: {
          setLocalStorage,
          getLocalStorage,
          getLocalStorages,
          removeLocalStorage
        }
      }
    })
  }
}
