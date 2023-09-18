import { Blog } from "@pages/Blog";
import { Home } from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../styles/DefaultLayout";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Route>
        </Routes>
    )

}