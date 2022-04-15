import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import Layout from "../component/Layout";
import PageBtn from "../component/PageBtn";
import UserCard from "../component/UserCard";
import runContext from "../store/context";
export default function Home({ results }) {
  const ctx = useContext(runContext);
  const [hazirData, setHazirData] = useState([]);
  const setValue = (data) => {
    setHazirData(data);
  };
  const tt = (dataTow) => {
    console.log(hazirData);
    ctx.setValue(dataTow);
  };
  return (
    <runContext.Provider value={{ value: hazirData, setValue: setValue }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This is test app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <PageBtn data={results} sliceData={tt} />
        <UserCard data={results} />
      </Layout>
    </runContext.Provider>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://randomuser.me/api/?results=54");
  const results = data.json();
  return {
    props: results, // will be passed to the page component as props
  };
}
