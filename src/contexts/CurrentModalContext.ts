import { CurrentModalContextType } from "@/utils/types";
import { createContext } from "react";

const CurrentModalContext = createContext<CurrentModalContextType>(null!);

export default CurrentModalContext;
