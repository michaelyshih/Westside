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
                <title>Home - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
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
