import styles from '@/styles/global/Footer.module.css'
import Image from 'next/image';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.container}>
        <a
          href="https://github.com/ricardobalk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Ricardo Balk
        </a>
      </footer>
    );
}

export default Footer;