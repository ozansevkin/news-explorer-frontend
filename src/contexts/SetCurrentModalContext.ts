import { Dispatch, SetStateAction, createContext } from "react";

type SetCurrentModalContextType = Dispatch<
  SetStateAction<"sign-in" | "sign-up" | null>
>;

const SetCurrentModalContext = createContext<SetCurrentModalContextType>(null!);

export default SetCurrentModalContext;
