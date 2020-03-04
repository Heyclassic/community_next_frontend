import Layout from '../components/Layout';
import { useState } from 'react';

const [ profile, setProfile ] = useState({ email: ''});

export default function Profile() {
  return(
    <Layout>
      You are here because you have signed in
    </Layout>
  )
};