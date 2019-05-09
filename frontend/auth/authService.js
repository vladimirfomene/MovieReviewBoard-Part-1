import auth0 from "auth0-js";
import authConfig from "../auth_config.json";
import eventBus from "../event-bus";

const webAuth = new auth0.WebAuth({
  domain: authConfig.domain,
  redirectUri: `${window.location.origin}/callback`,
  clientID: authConfig.clientId,
  audience: authConfig.audience,
  responseType: "token id_token",
  scope: "openid profile email"
});

class AuthService {
  accessToken = null;
  idToken = null;
  profile = null;
  tokenExpiry = null;

  // Starts the user login flow
  login(customState) {
    webAuth.authorize({
      appState: customState
    });
  }

  // Handles the callback request from Auth0
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult.idToken);
        }
      });
    });
  }

  localLogin(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    this.accessToken = authResult.accessToken;

    // Convert the JWT expiry time from seconds to milliseconds
    this.tokenExpiry = new Date(this.profile.exp * 1000);

    localStorage.setItem("loggedIn", "true");

    eventBus.$emit("login");
  }
}

export default new AuthService();
