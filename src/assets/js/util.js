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

const removeLocalStorage = (...args) => {
  console.log("localstorage name: ", args);
  for (let keyName of args) {
    window.localStorage.removeItem(keyName);
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
