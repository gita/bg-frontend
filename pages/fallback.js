import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import Head from "next/head";
import AboutBanner from "../components/Shared/AboutBanner";
import Image from "next/image";

export default function Fallback() {
  return (
    <div>
      <Head>
        <title>No Internet</title>
      </Head>
      <div className="text-center">
      <Image
          src="/fallback.jpeg"
          alt="BG Home Banner Image"
          height="500"
          width="1100"
          className="xl:rounded-lg block m-auto"
          priority
        />
      </div>
      <div className="text-center max-w-5xl font-inter py-12 mx-auto  px-4 sm:px-6">
        <h1 className="mt-8 text-xl  ">
          It seems your internet connection is broken,
          Please come back with active internet connection 
        </h1>
      </div>
    </div>
  );
}

Fallback.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
