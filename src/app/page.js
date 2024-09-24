import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import MenuList from "./components/MenuList";


export const metadata = {
  title: "Jp shop",
  description: "E-commerse de productos",
  keywords: ["E-commerse", "Productos", "NextJS", "Vercel", "SSR"],
  openGraph: {
    title: "Proyecto Next js",
    description: "tienda creada con next Js",
    type: "article",
    publishedTime: "2024-08-12",
    authors: ["Juan Pablo Palacios"]
  },
};


export default function Home() {
  return (
    <>
   
      <Header></Header>
     
    </>
  );
}
