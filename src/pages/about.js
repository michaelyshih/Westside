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
                <title>About Us</title>
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
            <Breadcrumb
                subTitle="What we do"
                title="About us"
                desc="Since 1981, Westside Ltd. has been supplying quality sealing products to the global industrial market, striving to reduce pump parts life cycle costs and ensuring customer satisfaction."
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
