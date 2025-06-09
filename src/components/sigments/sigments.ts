 
 import {addSigment} from "sigment"

type Child = string | HTMLElement;
type Props<T extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[T]> & Record<string, any>;


declare global {

  function hello(props: Props<"div">, ...children: Child[]): HTMLElement;
  function hello(...children: Child[]): HTMLElement;

}


addSigment("hello");


export {};