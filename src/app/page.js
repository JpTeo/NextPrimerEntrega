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

export default function Home() {
  return (
    <>
    <MenuList></MenuList>
<Header></Header>
      <Footer></Footer>
    </>
  );
}
