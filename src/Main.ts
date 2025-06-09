
import {MyApp,addSigment} from  "sigment"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import './assets/css/index.css'


MyApp.cleanHtml(true);
MyApp.setMaxCacheSize(50);

async function Main() {  


     const app = fragment(
      Header(),
        await Body(),
      Footer()
    );

     document.getElementById("root")?.appendChild(app); 

}

 Main();


export default Main;