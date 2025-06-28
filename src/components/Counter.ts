import { signal } from 'sigment';

function Counter(): HTMLElement  {
  const [count, setCount] = signal(0);

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return div({id:"counter"},

    h2('Sigment Reactive Framework'),
    h3('Counter example'),
    
    div({ style: 'margin-bottom: 20px;' },
      button({ onClick: goBack, style: 'margin-right: 10px; background: #6c757d;' }, '← Back'),
      button({ onClick: goHome, style: 'background: #28a745;' }, '🏠 Home')
    ),
    
    button({ onClick: () => setCount(count() + 1) }, 'Increment'),
    p(() => `Count is: ${count()}`)
    
  )

}

export default Counter;