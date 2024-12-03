import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Contact({ contactItems }) {
    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className="map_with__pattern">
                                    <iframe
                                        title="Oxybuild contact title"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6330129198288!2d121.58662076954747!3d25.049949913572316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab76dec35ff7%3A0x93204c2cdc93b33c!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5b-g5a2d5p2x6Lev5YWt5q61MTg15be3NOW8hDPomZ8!5e0!3m2!1szh-TW!2stw!4v1733237631172!5m2!1szh-TW!2stw"
                                    />
                                    <div className="map_pattern">
                                        <img
                                            src={contactItem?.mapPattern}
                                            alt={contactItem?.mapPatternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
