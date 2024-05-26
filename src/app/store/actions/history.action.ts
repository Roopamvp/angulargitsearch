import { createAction, props } from "@ngrx/store";

export const loadHistory = createAction('[History] Load History');
export const saveSearch = createAction(
  '[History] Save Search',
  props<{query: string; results: any}>()
);
export const clearSearch = createAction(
  '[History] Clear Search',
  props<{ index: number}>()
);

export const clearAllHistory = createAction('[History] Clear All History');
