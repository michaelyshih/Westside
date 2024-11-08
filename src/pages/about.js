import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import Breadcrumb from '../components/breadcrumb';
import BannerOne from '../components/banner';
import CounterTwo from '../components/counter/index-2';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function AboutPage({ aboutItems, bannerItems, footerItems }) {
    return (
        <>
            <Head>
                <title>About Us - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
        </Head>
            <Breadcrumb
                subTitle="What we do"
                title="About us"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <AboutOne aboutItems={aboutItems} />
            <BannerOne bannerItems={bannerItems} />
            <CounterTwo />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');
    const bannerItems = getAllItems('banner');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
