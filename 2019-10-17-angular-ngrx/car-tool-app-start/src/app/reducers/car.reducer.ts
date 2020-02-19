import { createReducer, on } from "@ngrx/store";
import * as CarActions from "../actions/car.actions";

const initialState = [
  {
    "make": "Ford",
    "model": "Fusion Hybrid",
    "year": 2018,
    "color": "black",
    "price": 25000,
    "id": 1
  },
  {
    "id": 2,
    "make": "Tesla",
    "model": "S",
    "year": 2018,
    "color": "red",
    "price": 125000
  },
  {
    "make": "Ford",
    "model": "Escort",
    "year": 1900,
    "color": "Blue",
    "price": 1000,
    "id": 3
  }
];

export const carReducer = createReducer(
  initialState,
  on(CarActions.addCar, (state, { car }) => ([...state, car]))
);
