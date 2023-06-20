import Image from "next/image";
import styles from "./page.module.css";
import LeftNavbar from "./components/LeftNavbar";
import Header from "./components/Header";
import Content  from "./components/Content";
import Chartsection from "./chartsection/page";
import Table from "./table/page";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <LeftNavbar />
      <Header/>
      <Content/>
      <Chartsection/>
      <Table/>
      <Footer/>
    </>
  );
}
