import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutTwo from '../components/about/index-2';
import Hero from '../components/home-page/hero';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function HomePage({ heroItems, aboutItemsTwo, footerItems }) {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="title"
                    content="Westside Ltd. | Global Quality Sealing Products Since 1981"
                />
                <meta
                    name="description"
                    content="Westside Ltd. has supplied quality sealing products globally since 1981. Offering mechanical seals and customized molded and machined parts for industrial applications. Contact us for your sealing solutions!"
                />
                <meta
                    name="keywords"
                    content="mechanical seals, sealing products, industrial seals, molded parts, machined parts, Teflon, Viton, silicon rubber, stainless steel, Silicon carbide, customized sealing solutions, global industrial market"
                />
            </Head>
            <Hero heroItems={heroItems} />
            <AboutTwo aboutItemsTwo={aboutItemsTwo} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const aboutItemsTwo = getAllItems('about-2');
    const footerItems = getAllItems('footer');

    return {
        props: {
            heroItems,
            aboutItemsTwo,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
