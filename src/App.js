import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/Project/Project";
// import Challenges from "./pages/Challenges/Challenges";
import Regression from "./pages/Test/Regression/Regression";

const routes = [
    {
        path: "/",
        element: <AboutMe />,
    },
    {
        path: "/Project",
        element: <Project />,
    },
    // {
    //     path: "/Challenges",
    //     element: <Challenges />,
    // },

    {
        path: "/Test/Regression",
        element: <Regression />,
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
