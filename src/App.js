import NavigationBar from './Components/NavigationBar/index'
// import SearchBar from './Components/SearchBar/index'
// import Map from './Components/Map/index'

import { Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/index'
import TransportPage from './pages/Transports/index'
import UserPage from './pages/User/index'
import MapPage from './pages/Map/index'

const App = () => {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/map" element={<MapPage />} />

      </Routes>

      <NavigationBar/>
      <div className="bg_bottom"></div>

    </div>
  );
}

export default App;