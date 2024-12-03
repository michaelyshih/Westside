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
                <title>Contact</title>
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
            <Breadcrumb subTitle="Contact us" title="Get in Touch" />
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
