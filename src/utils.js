import throttle from "lodash/throttle";

//Snippet from Google Books API
export function authenticate() {
  return window.gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/books" })
    .then(
      function() {
        console.log("Sign-in successful");
      },
      function(err) {
        console.error("Error signing in", err);
      }
    );
}

//Snippet from Google Books API
export function loadClient() {
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
}


export const search = async (val, index) => {
  if (val.length >= 2) {
    const i = index || 0;
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${val}&maxResults=12&orderBy=relevance&startIndex=${i}`
    );
    const json = await result.json();
    return json.totalItems ? json : [];
  }
};


export const searchThrottled = throttle(search, 400);
