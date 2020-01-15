## Simple Next.js App with Firebase

### Initial test mode v1.0.0-alfa2

#### Create Firestore Project in the Firebase Console

In the [Firebase Console](https://console.firebase.google.com), we log in with a Google Account and set up a project with a collection and its respective documents.

* Go to [Google Firebase page](https://firebase.google.com/) and click on the `Get Started Button` (took me to [The Google Firebase Console](https://console.firebase.google.com/)
* Login if necessary with a Google Account
* Click on `Create a Project` or `Add project`
    * Step 1 - project name
        * Project name `Simple Next JS App` 
        * Project ID `simple-next-js-app`
        * Click on `Continue` button
    * Step 2 - Google Analytics
        * For this project it is not necessary to leave Google Analytics enabled, so we disable.
        * Click on `Continue` button
    * Step 3 - Click on `Create project` button
    * `Your new project is ready`
        * Click on `Continue` button
* We'll stay in the free Spark plan for now. The Flame plan is a fixed $25/month usable plan
* When I enter the [The Google Firebase Console](https://console.firebase.google.com/), I see `Create a Project` as well as clickable cards for my already existing projects.

#### Create and populate a Firestore database for your newly created project

* Go to [The Google Firebase Console](https://console.firebase.google.com/) and click on the `Simple Next JS App` project.
* Select `Database` on left-hand sidebar menu
* Click on the Cloud Firestore `Create database` button. (See [Choose a Database: Cloud Firestore or Realtime Database](https://firebase.google.com/docs/database/rtdb-vs-firestore?authuser=0) for why Cloud Firestore is "recommended for most developers starting a new project".
* Select the `Start in test mode` option for now, "to enable quick setup".
* Click on `Next` button and then confirm or select an alternative database storage location, then click on the `Done` button in order to provision the Cloud Firestore database.
* Let's Add data. Say, the first 3 records from [JSONPlaceholder posts collection](https://jsonplaceholder.typicode.com/photos)
    * After creating the database, we can see a `+ Start collection` link, which we click to get started with our first collection (NoSQL terminology, it's similar to table in SQL terms).
    * We enter `photos` as the Collection ID and hit the `Next` button. 
    * Leaving the `Document ID` field on `Auto-ID`, we enter `albumId` into the field labeled `Field`, change the `Type` field to `number` and enter `1` as the initital value.
    * In the same way, we click on the `+ Add field` link to add `title`, `url` and `thumbnailUrl` fields and their corresponding values (all of type `string`) to complete the first document for our `photos` collection, and hit the `Save` button.
    * We click on the `Add document` link for each additional document we care to add. Let's finish adding the first three JSONPlaceholder photo documents. [JSONPlaceholder photos collection](https://jsonplaceholder.typicode.com/photos):

```json
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  }
]
```

#### Show database contents with a simple NextJS app

* Create a web app `simple-nextjs-firebase-app` for our project and its database. In the Firebase Console online, under the Project Overview gear icon click on the Project Settings option. Under `Your apps`, click on the `</>` web app option (or, if you've already created another app for this project, click on the `Add app` button), then add a nickname to Register the app. After entering `simple-nextjs-firebase-app`, click on the `Register app` button. We are shown the Firebase SDK settings, which we will apply in a moment. For now we click on the `Continue to console` button.
* To scaffold our app initially, from a project directory, do `yarn create next-app simple-nextjs-firebase-app` (`npx create-next-app simple-nextjs-firebase-app`)
* `cd simple-nextjs-firebase-app`
* `yarn dev -p 4001` (`npm run dev -- -p 4001`)
* Point browser at `http://awebfactory.org:4001/`
* Install firebase package: `yarn add firebase` (`npm install firebase`)
* After installing the `dotenv` package with `yarn add dotenv` (`npm install dotenv`), we create a file `.env` with firebase config info, obtainable from the Firebase Console Project Overview > Project Settings `Your apps` section. The repo includes an `example.env` file you can copy to create the `.env` file with the necessary environment variable names and format.
* We create the file `next.config.js` (enabling `.env` and its contents for the app)
* We create the file `firebase.config.js`. Thanks to the use of the `dotenv` package, this file never needs to be edited for project and app specific info.
* We edit `pages/index.js` in order to render the contents from our database.
* Run with `yarn dev` (`npm run dev`)

> Based on short article in Spanish along similar lines: [NextJS con Firebase - 20200103](https://medium.com/@lemmusm/nextjs-con-firebase-790adfe988b2). There exists a [Repo: Next.js con Firebase](https://github.com/lemmusm/nextjs-firebase). However our repo is a construction from scratch, and includes details in the README on how to create the Firestore database and handle each step, explaining along the way in the README. Also, we shall be adding newer versions as needed to cover all basic uses of Next.js with Firebase.

### Authentication mode v1.0.0-beta1

Coming soon!

