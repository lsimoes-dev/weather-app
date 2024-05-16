# Weather App

This project was generated with react-create-app --template typescript in the current version.

## Before running start

Create a new .env file in your root-folder. Use the same environment labels as described in the env-sample file.

## Export environment variables

UNIX/MacOS

```
export $(cat .env | sed 's/#.*//g | xargs)
```

Windows

```
@echo off
for /f "delims=" %%x in (".env") do set "%%x"
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
Tests can be found on the App.test.tsx file.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## How to build image and run (locally)

1. Build the image (for windows, this requires installing Ubuntu)

```
docker build . -t weather-app:latest
```

2. Run image

```
docker run -p 3000:3000 --env-file .env -it weather-app
```
