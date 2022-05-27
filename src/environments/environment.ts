// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyASnVc06j0QhDaWawVzOMVXGQcQLpWYtmI",
    authDomain: "mycookbook-87252.firebaseapp.com",
    projectId: "mycookbook-87252",
    storageBucket: "mycookbook-87252.appspot.com",
    messagingSenderId: "821048462829",
    appId: "1:821048462829:web:37fbf415a7f35195cc2be4",
    measurementId: "G-1RQVJR7BHZ"
  },
  spoonacular: {
    key: 'YOUR API KEY HERE',
    url: 'https://api.spoonacular.com/recipes'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
