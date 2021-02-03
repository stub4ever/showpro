import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import cookies from "nookies";

export default function Home() {
  return null;
}

export const getServerSideProps = (context) => {
  const { defaultCountry } = cookies.get(context);
  const country = context.query.country || defaultCountry || "us"; // return 'us'
  // const myAppCookies = cookies.get(context);
  // console.log(
  //   "🚀 ~ file: index.js ~ line 76 ~ getServerSideProps ~ myAppCookies",
  //   myAppCookies
  // ); // show terminal

  // console.log("browser", process.browser); // using process.browser to test if page is using client-side

  process.browser
    ? Router.replace("/[country]", `${country}`) // if browser is client-side return path
    : context.res.writeHead(302, { Location: `/${country}` }); // else redirect server-side => code 302 means redirect

  context.res.end(); // Call the response is finished else it will loading forever

  return {
    props: {},
  };
};
