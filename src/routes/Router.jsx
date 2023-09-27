import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, SignupPage, FeedPage, ErrorPage } from "../pages";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/feed" element={<FeedPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router