
import { Action, createReducer, on } from "@ngrx/store";
import { clearAllHistory, clearSearch, loadHistory, saveSearch } from "../actions/history.action";

export interface HistoryState {
  history: any[];
}


const getInitialState = (): HistoryState => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return {
      history: JSON.parse(localStorage.getItem('searchHistory') || '[]')
    };
  }
  return { history: [] };
};

export const initialState: HistoryState = getInitialState();

const _historyReducer = createReducer(
  initialState,
  on(loadHistory, state => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return {
        ...state,
        history: JSON.parse(localStorage.getItem('searchHistory') || '[]')
      };
    }
    return state;
  }),
  on(saveSearch, (state, { query, results }) => {
    const newHistory = [...state.history, { query, results }];
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
    return { ...state, history: newHistory };
  }),
  on(clearSearch, (state, { index }) => {
    const newHistory = state.history.slice();
    newHistory.splice(index, 1);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
    return { ...state, history: newHistory };
  }),
  on(clearAllHistory, state => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('searchHistory');
    }
    return { ...state, history: [] };
  })
);

export function historyReducer(state: HistoryState | undefined, action: Action) {
  return _historyReducer(state, action);
}
