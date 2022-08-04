import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import styles from '../styles/Home.module.css';

interface MainProps {
  title: string;
  metaContent: string;
  children: ReactNode;
};

const Main = ({ title, metaContent, children }: MainProps) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
};

export default Main;