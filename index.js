import "@tensorflow/tfjs-backend-wasm";
import * as tf from "@tensorflow/tfjs";

function status(text) {
  document.getElementById("status").textContent = text;
}

async function main() {
  
  // Set the backend to WASM and wait for the module to be ready.
  await tf.setBackend("wasm");

  let model = await tf.loadGraphModel(
    "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",
    { fromTFHub: true }
  );
  const imgElement = document.getElementById("img");
  const startTime1 = performance.now();
  status("Model loaded!");

  let img = tf.browser
    .fromPixels(imgElement)
    .resizeBilinear([224, 224])
    .expandDims(0)
    .toFloat();

  
    let startTime2 = performance.now();
  const logits = model.predict(img);

  const totalTime1 = performance.now() - startTime1;
  const totalTime2 = performance.now() - startTime2;
  status(`Done in ${Math.floor(totalTime1)} ms ` +
      `(not including preprocessing: ${Math.floor(totalTime2)} ms)`);

  const values = await logits.data();
  console.log(values);
  
}

main();
