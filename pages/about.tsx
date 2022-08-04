import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Main from '../layouts/Main';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <Main
      title="ABOUT"
      metaContent='ABOUT - PRUEBA'
    >
      <h1>ABOUT</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/"><a>Home</a></Link>
      </h1>
      <span>{`ESTAS EN ${pathname}`}</span>
    </Main>
  );
};

export default About;