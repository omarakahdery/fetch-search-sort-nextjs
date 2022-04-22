import Head from "next/head";
import PageBtn from "../component/PageBtn";
import classes from "../component/UserCard.module.css";
export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Users App</title>
        <meta name="description" content="This is test app" />
      </Head>
      <div className={classes.Layout}>
        <PageBtn data={results} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://randomuser.me/api/?results=50");
  const results = data.json();
  return {
    props: results,
  };
}
