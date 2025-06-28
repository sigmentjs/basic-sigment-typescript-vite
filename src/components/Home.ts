import './sigments/sigments.js';

function Home(): HTMLElement {
  return div({ id: "home" },
    
    h1('Hello from Sigment',
      br(),
      span('  +TypeScript'),
      br(),
      span('   +Vite')
    ),
    
    div({ class: "examples" },
      div(
        a({ href: "/counter" }, "Counter Example State")
      ),
      div(
        a({ href: "/hello" }, "Add Sigment Hello Example")
      ),
      div(
        a({ href: "/examples" }, "Code Examples with Syntax Highlighting")
      )
    ),
  );
}

export default Home;