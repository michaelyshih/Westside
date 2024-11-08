import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Contact us"
                title="Get in Touch"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <Contact contactItems={contactItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
