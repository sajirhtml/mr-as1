import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div >
        <header>
            <Header></Header>
        </header>
        <section>
            <Hero></Hero>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default HomeLayout;