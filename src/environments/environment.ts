// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const signInConfig = {
  WEB_PROTOCOL:'https://',
  DOMAIN_NAME: 'dev-recursion.auth.ap-southeast-1.amazoncognito.com',
  CLIENT_ID: '7ethpq6dh46j85qrb9qkmngsib',
  RESPONSE_TYPE: 'code',  // or 'token', note that REFRESH token will only be generated when the responseType is code
  REDIRECT_SIGN_IN: 'http://localhost:4200/login',
  REDIRECT_SIGN_OUT: 'http://localhost:4200/',
  SCOPE: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
}

export const environment = {
  production: false,

  // API FOR CBM - NEO4J
  hostURL: '',

  // AMPLIFY environments
  domainName: `${signInConfig.DOMAIN_NAME}`,
  clientId: `${signInConfig.CLIENT_ID}`,
  responseType: `${signInConfig.RESPONSE_TYPE}`,
  redirectUri: `${signInConfig.REDIRECT_SIGN_IN}`,
  redirectSignIn: `${signInConfig.REDIRECT_SIGN_IN}`,
  redirectSignOut: `${signInConfig.REDIRECT_SIGN_OUT}`,
  scope: `${signInConfig.SCOPE}`,
  signIn: `${signInConfig.WEB_PROTOCOL}${signInConfig.DOMAIN_NAME}/login?response_type=${signInConfig.RESPONSE_TYPE}&client_id=${signInConfig.CLIENT_ID}&redirect_uri=${signInConfig.REDIRECT_SIGN_IN}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
