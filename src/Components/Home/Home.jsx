import Featured from "../Featured/Featured";
import Topbar from "../TopBar/Topbar";
import "./home.scss";
import List from "../List/List";
const Home = () => {
    return (
        <div className="home">
            <Topbar/>
            <Featured />
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
};

export default Home;
