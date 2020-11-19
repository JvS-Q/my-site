import Link from 'next/link'
import Container from "../container";
import styles from "./topNav.module.css";

export default () => (
  <navigation className={styles.navigation}>
    <Container>
        <div className="flex items-center">
            <Link href="/"><a title="Home" className="self-start"><img alt="Qualogy Icon Logo" src="/assets/qualogy-logo.svg" /></a></Link>
            <div className={styles.links}>
                <Link href="/blog"><a title="Blog" className={styles.link}>Blog</a></Link>
                <Link href="/about"><a tilte="About" className={styles.link}>About</a></Link>
            </div>
        </div>
    </Container>
  </navigation>
);
