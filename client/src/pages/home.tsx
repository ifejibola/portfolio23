import Work from "../components/workExp";
import Education from "../components/eduction";
import Header from "../components/header";
import Projects from "../components/projects";
import Footer from "../components/footer";

const Page = () => {

    return (
        <div className="">
            <Header />
            <Work />
            <Projects />
            <Education />
            <Footer />
        </div>
    );
};

export default Page;