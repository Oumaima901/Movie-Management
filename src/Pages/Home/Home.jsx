import Topbar from "../../Components/TopBar/Topbar";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import "./home.scss";

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
