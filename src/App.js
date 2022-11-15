import { SideBar } from "./cmps/side-bar.jsx";
import './assets/scss/style.scss'
import { MainApp } from "./views/main-app.jsx";
function App() {
  return (
    <section className='app'>
        <SideBar />
        <MainApp />

    </section>
  );
}

export default App;
