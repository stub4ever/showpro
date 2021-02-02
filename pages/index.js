import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is home page</h1>
    </div>
  );
}

export const getServerSideProps = (context) => {
  console.log("browser", process.browser); // using process.browser to test if page is using client-side

  return {
    test: "testing",
  };
};
