import { FooterSocial } from "./Components/FooterSocial"
import { Routes, Route } from "react-router-dom"
import { HeaderSimple } from "./Components/HeaderSimple"
import Home from "./Components/Home"
import Details from "./Components/Details"
import Hobbies from "./Components/Hobbies"
import  GetInTouch  from "./Components/GetInTouch"
import { MantineProvider, useMantineColorScheme, Button, Group } from '@mantine/core'

function App() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <div>
       <MantineProvider>
       <HeaderSimple/>
       <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/details" element={<Details />}/>
       <Route path="/Hobbies" element={<Hobbies />}/>
       <Route path="/GetInTouch" element={<GetInTouch />}/>
       </Routes>
       <FooterSocial/>
       <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
       </MantineProvider> 
    </div>
  )
}

export default App