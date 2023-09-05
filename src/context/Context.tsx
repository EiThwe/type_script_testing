import { createContext, useContext, useReducer } from "react";

interface ChildrenType {
  children: React.ReactNode;
}
interface StateContextType {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
}

interface InitialStateType {
  count: number;
}

enum CounterAction {
  increase = "increment",
  decrease = "decrement",
}
interface IncrementType {
  type: CounterAction.increase;
  payload: number;
}
interface DecrementType {
  type: CounterAction.decrease;
  payload: string;
}
type ActionType = IncrementType | DecrementType;

const initialState: InitialStateType = {
  count: 0,
};
const reducer = (state: InitialStateType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case CounterAction.increase:
      return { count: state.count + payload };
      break;
    case CounterAction.decrease:
      return { count: state.count - Number(payload) };
      break;
    default:
      return state;
      break;
  }
};
export const StateContext = createContext<StateContextType>({
  state: initialState,
  dispatch: () => {},
});

export const StateContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
