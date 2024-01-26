import { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItemContext = createContext();

export function useAccordionItemContext(){
  const ctx=useContext(AccordionItemContext);
  if(!ctx){
    throw new Error("AccodrionItemContext must be used inside of <Accordion.Item>")
  }
  return ctx
}

export default function AccordionItem({id, className, children }) {
  return (
    <AccordionItemContext.Provider value={{id}}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
