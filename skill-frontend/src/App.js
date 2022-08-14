import './App.css';
import ListSectorComponent from "./components/ListSectorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <ListSectorComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
