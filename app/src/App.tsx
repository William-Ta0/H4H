
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./components/pages/Home.tsx";
import MainLayout from "./components/layouts/MainLayout.tsx";
import NotFound from "./components/pages/NotFound.tsx";


function App() {

  return (
        <>
            <div>
            <BrowserRouter>
                <Routes>
                    {/* MainLayout is the parent layout */}
                    <Route path="/" element={<MainLayout />}>
                        {/* Home is the index child for "/" */}
                        <Route index element={<Home />} />
                        {/* NotFound matches all unmatched routes */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            </div>

        </>
  )
}

export default App
