# Spotify New Release Feed (Work in Progress)

## About the App

While Spotify has many complex and highly effective recommendation methods and provides users with some release updates via it's curated playlists, it does not have a full feed of new releases based on a user's followed artists. Thus, this application utilizes the Spotify Web API (see https://developer.spotify.com/documentation/web-api/) for more info and documentation) to get an authorized user's followed artists and show a reverse choronology Release feed based on these artists. The following endpoints are currently utilized in this application:

1. User Profile to get the current user's profile information (/v1/me)
2. User Following to get all followed Artists (/v1/me/following)
3. Artists Albums to get all users new releases (/v1/artists/{id}/albums) - it will show singles as well as new albums based on the API 


Using these endpoints, the application renders the most recent tracks by all of the users artist in reverse chronological order.  Note that it is limited to the 3 most recent tracks/albums per artist.  

Also note that sometimes the same track will appear multiple times if a user follows multiple artists who were on that specific track (eg. features, producers, etc).  This can be fixed and will be eventually but does not impact the functionality of the app substainsially.

## Technologies

This app primarly utilizes an Express server (primarily obtain token for OAuth) and React/axios (fetches data from all other endpoints and renders).

## Limitations & Possible Improvements

### Load Time / Server Timeouts

The key limitation of this app is that, for users that follow a larger number of artists (this has been tested with two accounts, one with ~100 followed artists and one with ~500), the loading can be incredibly slow or timeout can occur with the API.  The ideal solution would be to implement lazy loading, but in order to show a reverse chronological order, all artist album data must be fully loaded in order to properly sort by date.  I am hoping to find a way to, at minimum improve,the user experience while the data loads or to implement some caching method.

### Track Info Feature

With the current endpoints, the track info is not available.  To obtain, a Tracks endpoint will need to be called and then those tracks(s) obtains through the Album Id.

### Redesign with GraphQL

The Spotify API supports GraphQL and has strong documentation regarding how to utilize it. I am considering leveraging it as opposed to REST eventually.

### UI Improvements

There are handful of simple and more involved UI improvements that I intend to make in the future, the most critical being providing a better user loading experience as well as allow the user to see track info.

## Screenshots

* The current UI is minimalist and built solely with plain CSS Flexbox and is fully responsive.  I will continued to update the UI as I improve other features but have intentionally opted out of using CSS Frameworks for the time being.

### Login

![ScreenShot](/login.png)

### Feed

![ScreenShot](/releases.png)



## How to Run

If you would like to try out this App for yourself, you will first need to obtain a `client_id` and `client_secret` from the Spotify Web Api and then add these credentials to the user off page.  Subsquently, you can run the following commands:

```
npm install
npm run build-watch
node user_auth.js
```