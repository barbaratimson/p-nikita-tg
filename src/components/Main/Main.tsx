import {Navbar} from "../Navbar/Navbar";
import {Router} from "../Router/Router";
import {MainWrapper} from "../components";
import {BackButton} from "../BackButton/BackButton";

export const Main = () => {
    return (
        <MainWrapper>
            <BackButton/>
            <Router/>
            <Navbar/>
        </MainWrapper>
    );
};