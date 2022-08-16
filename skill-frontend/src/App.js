import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListSectorComponent from "./components/ListSectorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route index element={<ListSectorComponent />} />
                    <Route path="/" element={<ListSectorComponent />}></Route>
                    <Route path="/sectors" element={<ListSectorComponent />}></Route>
                    <Route path="*" element={<ListSectorComponent />}></Route>
                    <Route path="/users" element={<ListSectorComponent />}></Route>
                    <Route path="/add-user" element={<ListSectorComponent />}></Route>
                    <Route path="/add-sector" element={<ListSectorComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
