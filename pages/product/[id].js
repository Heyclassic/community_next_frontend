import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const Page = () {
  const router = useRouter();

  return(
    <Layout>
      <h1>{router.query.name}</h1>
    </Layout>
  )
};

export default Page;