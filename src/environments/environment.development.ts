// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const BASE_URL = "http://localhost:1337/";

export const environment = {
  production: false,
  API: {
    URL_BASE: "",
    CUSTOMER_URL: BASE_URL + "/customers/session",
    CUSTOMER_IMAGE_URL: BASE_URL + "/customers/image",
    PETSITTER_URL: BASE_URL + "/pet_sitter/session",
    SERVICES: BASE_URL + "services",
    SERVICE: BASE_URL + "service",
    PACKAGES: BASE_URL + "packages",
    PACKAGE: BASE_URL + "package",
    CUSTOMERS: BASE_URL + "/customers",
    PET: BASE_URL + "/pet",
    PETS: BASE_URL + "/pets",
    PET_SITTERS: BASE_URL + "/pet_sitters",
    PET_SITTER: BASE_URL + "/pet_sitter",
    PET_SITTERS_ALL: BASE_URL + "/all/pet_sitters",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
