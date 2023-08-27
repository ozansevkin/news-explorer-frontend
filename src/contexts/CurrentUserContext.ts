import { CurrentUserContextType } from "@/utils/types";
import { createContext } from "react";

const CurrentUserContext = createContext<CurrentUserContextType>(null!);

export default CurrentUserContext;
