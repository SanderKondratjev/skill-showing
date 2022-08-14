import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListSectorComponent from "./components/ListSectorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route index element={<ListSectorComponent/>}/>
                <Route path="/" element={ListSectorComponent}></Route>
                <Route path="/sectors" element={ListSectorComponent}></Route>
                <Route path="*" element={<ListSectorComponent />}></Route>
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    );
}

export default App;
