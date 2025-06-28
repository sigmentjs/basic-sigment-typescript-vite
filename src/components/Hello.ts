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
    
    div({ style: 'margin-bottom: 20px;' },
      button({ onClick: goBack, style: 'margin-right: 10px; background: #6c757d;' }, '← Back'),
      button({ onClick: goHome, style: 'background: #28a745;' }, '🏠 Home')
    ),

    hello({class:"hello"},'Hello from sigment ,' ,
       br(), 
       'inspect this element , ', 
       br(), 
       'and see element name is hello'),

  )

}

export default Hello;