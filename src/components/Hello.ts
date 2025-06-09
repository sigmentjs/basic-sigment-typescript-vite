
import './sigments/sigments.js';

function Hello(): HTMLElement  {

  return div(

    hello({class:"hello"},'Hello from sigment ,' ,
       br(), 
       'inspect this element , ', 
       br(), 
       'and see element name is hello'),

  )

}

export default Hello;