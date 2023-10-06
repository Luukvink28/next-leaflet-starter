import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
            <Image width={300} height={30} src={"https://www.denhaag.nl/static/denhaagrestylepresentation/images/DH-NL-Rgb-CS6.svg"}></Image>
        </p>
      </Container>
    </header>

  );
};

export default Header;
