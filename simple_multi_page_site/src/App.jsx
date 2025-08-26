import { BrowserRouter, Route, Routes } from "react-router-dom"
import ColorChanger from "./Components/ColorChanger"
import CounterApp from "./Components/CounterApp"
import Form_Data from "./Components/Form_Data"
import Main_Layout from "./Layout/Main_Layout"

function App() {
  

  return (
    <>
        <BrowserRouter>
          <Routes>
            {/* This Means Main_Layout is Parent and its outlet shows nested routes */}
              <Route path="/" element={<Main_Layout/>}>
              {/* index prop on the route means It’s the default child route that loads when its parent route is matched — without requiring an extra path segment. */}
                <Route index element={<CounterApp/>}></Route>
                <Route path="/ColorChanger" element={<ColorChanger/>}></Route>
                <Route path="/Form_Data" element={<Form_Data/>}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
