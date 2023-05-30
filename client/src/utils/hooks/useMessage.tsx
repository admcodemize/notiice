import { useContext } from "react";
import { MessageContext } from "../context/Message";

export const useMessage = () => useContext(MessageContext);