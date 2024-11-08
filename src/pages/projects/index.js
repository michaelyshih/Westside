import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ProjectGallery from '../../components/projects/gallery';
import { getAllItems } from '../../lib/items-util';

function ServicePage({ projects, footerItems }) {
    return (
        <>
            <Head>
                <title>Projects Gallery - OxyBuild</title>
                <meta name="description" content="Projects Gallery" />
            </Head>
            <Breadcrumb
                subTitle="Our Project"
                title="Gallery"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ProjectGallery projects={projects} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projects: allItems,
            footerItems,
        },
    };
}

ServicePage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicePage;
