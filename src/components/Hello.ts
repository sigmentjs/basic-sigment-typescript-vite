import './sigments/sigments.js';

function Hello(): HTMLElement  {

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return div(

    h2('Custom Sigment Element Demo'),

    hello({class:"hello"},'Hello from sigment ,' ,
       br(), 
       'inspect this element , ', 
       br(), 
       'and see element name is hello'),

    div({ style: 'margin-top: 20px;' },
      button({ onClick: goBack, style: 'margin-right: 10px; background: #6c757d;' }, '← Back'),
      button({ onClick: goHome, style: 'background: #28a745;' }, '🏠 Home')
    ),

  )

}

export default Hello;