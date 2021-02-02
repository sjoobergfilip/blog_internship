import "./App.css";
import BlogPost from "./components/BlogPost";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route component={BlogPost} path="/" exact />
                <Route component={SinglePost} path="/post/:slug" />
                <Route component={AboutUs} path="/about" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
