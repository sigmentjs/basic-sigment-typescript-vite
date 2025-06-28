import CodeExample from './CodeExample.js';

function CodeExamples(): HTMLElement {
  const counterExample = `import { signal } from 'sigment';

function Counter(): HTMLElement {
  const [count, setCount] = signal(0);

  return div({ id: "counter" },
    h2('Sigment Reactive Framework'),
    h3('Counter example'),
    button({ onClick: () => setCount(count() + 1) }, 'Increment'),
    p(() => \`Count is: \${count()}\`)
  );
}

export default Counter;`;

  const routingExample = `export const Routes = {
  home: {
    loader: () => import('./Home.js')
  },
  about: {
    loader: () => import('./About.js')
  },
  counter: {
    loader: () => import('./Counter.js')
  },
  // fallback route
  fallback: 'home'
};`;

  const customSigmentExample = `import { addSigment } from "sigment"

type Child = string | HTMLElement;
type Props<T extends keyof HTMLElementTagNameMap> = 
  Partial<HTMLElementTagNameMap[T]> & Record<string, any>;

declare global {
  function hello(props: Props<"div">, ...children: Child[]): HTMLElement;
  function hello(...children: Child[]): HTMLElement;
}

addSigment("hello");`;

  return div({ class: 'code-examples' },
    h1('Sigment Code Examples'),
    
    CodeExample({
      title: 'Reactive Counter Component',
      code: counterExample,
      language: 'typescript'
    }),
    
    CodeExample({
      title: 'Route Configuration',
      code: routingExample,
      language: 'typescript'
    }),
    
    CodeExample({
      title: 'Custom Sigment Elements',
      code: customSigmentExample,
      language: 'typescript'
    }),

    div({ class: 'navigation-links' },
      a({ href: '/' }, '← Back to Home'),
      a({ href: '/counter' }, 'Try Counter →')
    )
  );
}

export default CodeExamples;