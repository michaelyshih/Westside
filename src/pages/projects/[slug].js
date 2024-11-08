import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import ProjectDetail from '../../components/projects/project-detail';
import Footer from '../../components/layout/footer';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ProjectDetailPage({
    project,
    projectsSidebar,
    richTexts,
    projectsOverview,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle={project.subTitle}
                title={project.title}
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ProjectDetail
                project={project}
                projectsSidebar={projectsSidebar}
                richTexts={richTexts}
                projectsOverview={projectsOverview}
            />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const project = getItemData(slug, 'projects');
    const projectsSidebar = getAllItems('project-sidebar');
    const richTexts = getAllItems('rich-text');
    const projectsOverview = getAllItems('project-overview');
    const footerItems = getAllItems('footer');

    return {
        props: {
            project,
            projectsSidebar,
            richTexts,
            projectsOverview,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const projectFilenames = getItemsFiles('projects');

    const slugs = projectFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ProjectDetailPage.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetailPage;
