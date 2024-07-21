'use client';

import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

import dynamic from "next/dynamic";

// @ts-ignore
const Charts = dynamic(() => import('dashboard/charts').then((mod) => mod.Charts));
// @ts-ignore
// const Stats = dynamic(() => import('settings/stats').then((mod) => mod.Stats));
// @ts-ignore
// const Users = dynamic(() => import('users/charts').then((mod) => mod.Charts));

export default function Home() {
  return (
    <>
    <Header />
    <>
    {/* <Stats /> */}
    <Charts />
    {/* <Users /> */}
    </>
    <Footer />
    </>
  )
};