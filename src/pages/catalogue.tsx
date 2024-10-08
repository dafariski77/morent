import Sidebar from "@/components/catalogue/sidebar";
import Navbar from "@/components/navbar";
import { Box, Text } from "@mantine/core";
import Head from "next/head";
import React from "react";
import { jakartaSans } from ".";
import Footer from "@/components/footer";
import CatalogueFilter from "@/components/catalogue/catalogue-filter";
import CatalogueBody from "@/components/catalogue/catalogue-body";

export default function Catalogue() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={jakartaSans.className}>
        <Navbar />
        <Sidebar>
          <CatalogueFilter />
          <CatalogueBody />
        </Sidebar>
        <Footer />
      </main>
    </>
  );
}
