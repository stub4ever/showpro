import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  return null;
}

export const getServerSideProps = (context) => {
  const country = context.query.country || "us"; // return 'us'

  // console.log("browser", process.browser); // using process.browser to test if page is using client-side

  process.browser
    ? Router.replace("/[country]", `${country}`) // if browser is client-side return path
    : context.res.writeHead(302, { Location: `/${country}` }); // else redirect server-side => code 302 means redirect

  context.res.end(); // Call the response is finished else it will loading forever

  return {
    props: {},
  };
};
