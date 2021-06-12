import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";
import { Fragment } from "react";
export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
