import type { GetServerSideProps, NextPage } from "next";
import withGetServerSideProps from "../hocs/withGetServerSideProps";

const Home: NextPage = () => {
  return <div>IndexPage</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    return {
      props: {},
    };
  }
);
