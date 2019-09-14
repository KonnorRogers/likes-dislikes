This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Using docker

If this is your first time running the container or
anytime a new dependency needs to be installed, run the following:

```bash
# Rebuilds the docker file and then runs docker-compose
docker-compose up --build
```

For all subsequent runs you can simply use

```bash
docker-compose up
```

Both commands will allow you to view the container on:
[http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
