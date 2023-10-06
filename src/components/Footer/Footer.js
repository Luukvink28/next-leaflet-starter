import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          © Luuk Vink 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
