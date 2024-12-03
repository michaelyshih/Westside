import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ProjectOverview from '../../project-overview';
import RichText from '../../rich-text';
import classes from './index.module.scss';

function ProjectContent({ project, richTexts, projectsOverview }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            <div className={`${classes.banner} row g-0`}>
                <Col md={{ span: 5 }} className="mb-max-sm-20">
                    <div className={classes.single_img}>
                        <img src={imagePath} alt={project?.title} />
                    </div>
                </Col>
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{project?.title}</h2>
                <h3 className={`${classes.subtitle} mb-40`}>
                    {project?.detailSubTitle}
                </h3>
                <h3 className={classes.summery_title}>
                    {project?.summeryTitle}
                </h3>
                <p className={classes.summery_desc}>{project?.summeryDesc}</p>
            </div>
        </Col>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
