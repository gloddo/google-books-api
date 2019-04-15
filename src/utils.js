import debounce from "lodash/debounce";

export function loadClient() {
  window.onGoogleScriptLoaded = () => {
    window.gapi.client.setApiKey("AIzaSyBqY-l7aOx8RAQX3D51GAU2ibPLtXanJiE");
    return window.gapi.client
      .load("https://content.googleapis.com/discovery/v1/apis/books/v1/rest")
      .then(
        function() {
          console.log("GAPI client loaded for API");
        },
        function(err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  };
}

export const searchDebounced = debounce(async val => {
  if (val.length >= 2) {
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${val}`
    );
    return await result.json();
  }
}, 300);
