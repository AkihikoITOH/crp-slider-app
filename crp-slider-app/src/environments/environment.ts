// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDlXh5wy4zt06TpBab_6EatamQMVs-qcK4",
    authDomain: "crp-slider-app.firebaseapp.com",
    databaseURL: "https://crp-slider-app.firebaseio.com",
    projectId: "crp-slider-app",
    storageBucket: "crp-slider-app.appspot.com",
    messagingSenderId: "271026784079"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
