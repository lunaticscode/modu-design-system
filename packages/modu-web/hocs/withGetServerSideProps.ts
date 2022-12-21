import { GetServerSideProps, GetServerSidePropsContext } from "next";

const withGetServerSideProps = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const pagePath = context.resolvedUrl;
      return await getServerSideProps(context).then(
        (res: { [key: string]: any }) => {
          return {
            ...res,
            props: {
              ...res.props,
              isError: false,
              pagePath,
            },
          };
        }
      );
    } catch (error) {
      return {
        props: {
          isError: true,
          error,
        },
      };
    }
  };
};

export default withGetServerSideProps;
