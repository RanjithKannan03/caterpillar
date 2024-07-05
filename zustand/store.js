import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export const predictionStore = create(
    (set, get) => ({
        prediction: null,
        setPrediction: (prediction) => set({ prediction: prediction })
    })
);