'use client'

import axios from "axios";
import { predictionStore } from "../zustand/store";
import { update } from "./update";

// export async function getPredictions() {
//     const state = predictionStore.getState();
//     const response = await axios.get('http://127.0.0.1:5000');
//     const predictions = response.data.prediction;
//     console.log(response);
//     state.setPrediction(predictions);
//     update('/result');
// }

