
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Footer from './../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;