# Bloinx App
## Files

```bash
bloinxap
|- app
|   |- .expo
|   |- .expo-shared
|   |- assets
|   |- components
|   |- containers
|   |- contracts
|   |- utils
|   |- App.js
|   |- package.json >>> React Native project dependencies with Expo.
|
|- contracts
|- migrations
|- package.json >>> Dependencies for configuration of contracts.
```
***
## Installation

Install the dependencies necessary for the execution and configuration of the contracts.
```bash
yarn install
```
### After
Install the application dependencies for React Native.
```bash
cd app
yarn install
```
To run the project.
```bash
yarn start
```

### Android
To run on android devices.
```bash
yarn android
```

### iOS
To run on iOS devices.
```bash
yarn ios
```
***
## Testing
To run global tests.
```bash
yarn test
```
To run unit tests
```bash
yarn test:coverage
```
If you need to run a test in development run:
```bash
yarn test:watch url/example.test.js
```
***
## License
[MIT](https://choosealicense.com/licenses/mit/)