import { createAction, props } from "@ngrx/store";
import { Car } from "../car-tool/models/car";

export const addCar = createAction(
  "[Car] Add Car",
  props<{ car: Car; }>()
);
