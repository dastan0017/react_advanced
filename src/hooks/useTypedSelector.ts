import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootsState} from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootsState> = useSelector