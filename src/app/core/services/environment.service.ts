import {environment} from '../../../environments/environment';

export class AppEnvService {
  constructor() {
  }

  /**
   * Get environment key
   *
   * @param {String} key
   *
   * @return {String}
   */
  getEnv(key: string) {
    return environment ? environment[key] : null;
  }
}
