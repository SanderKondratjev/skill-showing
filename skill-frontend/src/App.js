import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListSectorComponent from "./components/ListSectorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import SelectedSectorsComponent from "./components/SelectedSectorsComponent";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route index element={<ListSectorComponent />} />
                    <Route path="/" element={<ListSectorComponent />}></Route>
                    <Route path="/sectors" element={<ListSectorComponent />}></Route>
                    <Route path="/users" element={<ListSectorComponent />}></Route>
                    <Route path="/users/:id" element={<ListSectorComponent />}></Route>
                    <Route path="/selected-sectors" element={<SelectedSectorsComponent />}></Route>
                    <Route path="*" element={<ListSectorComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
