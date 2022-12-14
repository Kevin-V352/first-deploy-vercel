import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Main from '../layouts/Main';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <Main
      title="HOME"
      metaContent='HOME - PRUEBA'
    >
       <h1>HOME</h1>
       <h1 className={styles.title}>
          Ir a <Link href="/about"><a>About</a></Link>
        </h1>
        <span>{`ESTAS EN ${pathname}`}</span>
    </Main>
  );
};

export default Home
