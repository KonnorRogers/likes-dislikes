This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

### Without docker

#### Development

```bash
yarn install
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### Pushing to github pages

```bash
yarn install
yarn build
yarn deploy
```

If your repo is public, it will push your build/ directory to github pages

### Using docker

#### Development

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

I have set the docker-compose file to use volumes so that file changes
automatically appear without the need to rebuild the app. Rebuilds
should only happen when you add a new dependency.

Both commands will allow you to view the container on:
[http://localhost:3000](http://localhost:3000)

#### Deployment

```bash
# This will build the files into a /build directory
docker-compose -f docker-compose.production.yml up --build
# unfortunately, unless you go into docker and set your username / password
# then you cannot deploy to github pages. There may be another way,
# but from my host machine, i run:

yarn global add gh-pages
yarn run deploy
# this will run 'gh-pages -d build'
```

### Issues

Feel free to email me konnor7414@gmail.com with issues.
