# Tensorflow.js running on WebAssembly backend

This repo is the code used in my blog post introducing how to run Tensorflow.js on a WebAssembly backend which is a new addition to its greatness.

## Close the repo

Clone the repository:

```bash
git clone https://github.com/yashints/tjfs-wasm-demo
```

## Install the dependencies

Install the dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn
```

## Run the app

Run the app:

```bash
yarn watch
```

The app opens in a new browser window/tab.

## Switching between WASM and normal backend

Simply comment the below line in `index.js` file and run the app again:

```js
await tf.setBackend("wasm");
```