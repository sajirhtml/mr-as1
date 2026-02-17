import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import TrendingNow from '../components/TrendingNow';

const HomeLayout = () => {
    return (
        <div >
        <header>
            <Header></Header>
        </header>
        <section>
            <Hero></Hero>
        </section>
        <section>
            <WhyChooseUs></WhyChooseUs>
        </section>
        <section>
            <TrendingNow></TrendingNow>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default HomeLayout;