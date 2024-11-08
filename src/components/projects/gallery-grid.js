import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectGalleryItem from './gallery-item';

function ProjectGalleryGrid({ projects }) {
    const [noOfElement] = useState(9);
    const slice = projects.slice(0, noOfElement);

    return (
        <div className={classes.project}>
            <Container>
                <Row className="g-0 g-max-30">
                    {slice.map((project) => (
                        <ProjectGalleryItem
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

ProjectGalleryGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGalleryGrid;
