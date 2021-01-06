import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  update() {

  }
}

export const mainStore = new Store();