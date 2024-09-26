import React from "react";
import Header from "../components/layout/Header/Header"
import Section from "../components/layout/Section/Section"
import Projetos from "../components/layout/Projetos/Projetos"
import Fatos from "../components/layout/Fatos/Fatos"
import Pix from "../components/layout/Pix/Pix"
import Footer from "../components/layout/Footer/Footer"
import "./Home.css"
export default function Home() {
    return(
        <>
        <Header/>
        <Section/>
        <Projetos/>
        <Fatos/>
        <Pix/>
        <Footer/>
        </>
    )
}