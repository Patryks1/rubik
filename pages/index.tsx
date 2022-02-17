import type { NextPage } from 'next';
import Head from 'next/head';
import Rubik from '../components/Rubik';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rubik</title>
      </Head>
      <main>
        <Rubik />
      </main>
    </>
  );
};

export default Home;
