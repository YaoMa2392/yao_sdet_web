import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPurpose from "./pages/Project";
import { NotFound } from "./pages/NotFound";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Introduction from "./pages/Introduction";

const routes = [
    {
        path: "/",
        element: <AboutMe />,
    },
    {
        path: "/Project",
        element: <ProjectPurpose />,
    },
    {
        path: "*", // Catch-all route for not found
        element: <NotFound />,
    },
];

class App extends React.Component {
    render() {
        console.log('Rendering App'); // 确保应用程序正在渲染
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {routes.map((routeData, index) => (
                        <Route
                            key={index}
                            path={routeData.path}
                            element={routeData.element}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
