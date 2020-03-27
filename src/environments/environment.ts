// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const URL = {
  HEROKU_URL: 'https://cocktail-store-backend.herokuapp.com',
  DEV_URL: 'http://localhost:3000',
  CLIENT_DEV_URL: 'http://localhost:4200'
};

export const environment = {
  production: false,
  API_URL: URL.DEV_URL,
  CLIENT_URL: URL.CLIENT_DEV_URL,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
