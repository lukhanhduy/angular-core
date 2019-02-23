import {Injectable} from '@angular/core';

const APP_PREFIX = 'HX-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  /**
   * Adding some data to local storage
   *
   * @param {string} key
   * @param {any} value
   *
   * @return void
   */
  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  /**
   * Get the value for a particular key
   *
   * @param {string} key
   *
   * @return any
   */
  getItem(key: string) {
    let value = localStorage.getItem(`${APP_PREFIX}${key}`);
    if (value && value != 'undefined') {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  /**
   * Remove key into storage
   *
   * @param {string} key
   *
   * @return any
   */
  remove(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  /**
   * Clear all local storage
   *
   * @return any
   */
  clearAll() {
    localStorage.clear();
  }
}
