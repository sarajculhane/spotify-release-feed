# Spotify New Release Feed (Work in Progress)

Production Instance : https://spotify-release.herokuapp.com/

Updated as of 1/28/21. Note key changes:

* Search by title or song name
* Makes calls to additional endpoint to receive specific info about tracks (duration and preview for the app's purposes)
* Player for each track to listen to a preview (if available)
* Toggle the details specific track within the feed and other UI improvements



## About the App



While Spotify has many complex and highly effective recommendation methods and provides users with some release updates via it's curated playlists, it does not have a full feed of new releases based on a user's followed artists. Thus, this application utilizes the Spotify Web API (see https://developer.spotify.com/documentation/web-api/ for more info and documentation) to get an authorized user's followed artists and show a reverse choronology release feed based on these artists. The following endpoints are currently utilized in this application:

1. User Profile to get the current user's profile information (/v1/me)
2. User Following to get all followed Artists (/v1/me/following)
3. Artists Albums to get all users new releases (/v1/artists/{id}/albums) - it will show singles as well as new albums based on the API 
4. Album Tracks based on "Album" id that provides further details about a given track if available (v1/albums/${id}/tracks)


Using these endpoints, the application renders the most recent tracks by all of the users artist in reverse chronological order.  Note that it is limited to the 3 most recent tracks/albums per artist.  

Also note that sometimes the same track will appear multiple times if a user follows multiple artists who were on that specific track (eg. features, producers, etc).  This can be fixed and will be eventually but does not impact the functionality of the app substansially.

## Technologies

This app primarly utilizes an Express server (primarily to obtain token for OAuth) and React/axios (fetches data from all other endpoints and renders).

## Limitations & Possible Improvements

### Load Time / Server Timeouts

The key limitation of this app is that, for users that follow a larger number of artists (this has been tested with two accounts, one with ~100 followed artists and one with ~500), the loading can be incredibly slow or timeout can occur with the API.  The ideal solution would be to implement lazy loading, but in order to show a reverse chronological order, all artist album data must be fully loaded in order to properly sort by date.  I am hoping to find a way to, at minimum improve,the user experience while the data loads or to implement some caching method.

### Redesign with GraphQL

The Spotify API supports GraphQL and has strong documentation regarding how to utilize it. I am considering leveraging it as opposed to REST eventually.

### UI Improvements

There are handful of simple and more involved UI improvements that I intend to make in the future, the most critical being providing a better user loading experience through webpack code splitting or similar methods to reduce the weight of the bundle.js.

## Search Functionality

Users are now to able to search by artist or title once the data loads.

## Screenshots

* The current UI is minimalist, and initially the App was built solely with plain CSS Flexbox but recently some Bootstrap components have been added to simply the build.

## User Profile 

The user profile is in the works but will only be fully functional once features are implemented to better maintain state at the app level (either thru Redux or useContext and possible some caching methods)

### Login

![ScreenShot](/login.png)

### Feed

![ScreenShot](/releases.png)

### Search/Toggle/Player Example 

![ScreenShot](/search.png)



## How to Run

If you would like to try out this App for yourself in a development environment, you will first need to obtain a `client_id` and `client_secret` from the Spotify Web Api and then add these credentials to the user off page.  Subsquently, you can run the following commands:

```
npm install
npm run build-watch
node run start
```
