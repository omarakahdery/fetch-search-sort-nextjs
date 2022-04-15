import { createContext } from "react";

const runContext = createContext({ value: [], setValue: () => {} });

export default runContext;
