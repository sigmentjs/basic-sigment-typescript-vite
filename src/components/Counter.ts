

import { signal } from 'sigment';

function Counter(): HTMLElement  {
  const [count, setCount] = signal(0);

  return div({id:"counter"},

    h2('Sigment Reactive Framework'),
    h3('Counter example'),
    button({ onClick: () => setCount(count() + 1) }, 'Increment'),
    p(() => `Count is: ${count()}`)
    
  )

}

export default Counter;