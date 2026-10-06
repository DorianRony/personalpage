import React from 'react'
import {Presentacion} from "./Presentacion";
import {Opciones} from "./Opciones";
import {Proyectos} from "./Proyectos";
import {Experiencia} from "./Experiencia";
import {Header} from "./Header";
import {TabPanel, TabView} from "primereact/tabview";



export const Home = () => {
    return (
        <main id="contenido" className="grid portfolio-layout">
            <div className="text-center p-3 col-12 lg:col-6 lg:col-offset-3">
                <Header></Header>
            </div>
            <div className="p-3 col-12 lg:col-6 lg:col-offset-3 profile-intro">
                <Presentacion></Presentacion>
                <Opciones></Opciones>
            </div>
            <div className="text-center p-5 font-bold col-12 lg:col-6 lg:col-offset-3">
            </div>
            <TabView className="text-center p-0 font-bold col-12 lg:col-6 lg:col-offset-3" >
                <TabPanel header={<u>Experiencia</u>}>
                    <Experiencia></Experiencia>
                </TabPanel>
                <TabPanel header={<u>Proyectos</u>}>
                    <Proyectos></Proyectos>
                </TabPanel>
            </TabView>
            <footer className="portfolio-footer col-12 lg:col-6 lg:col-offset-3">
                Rony Reyna · Ecuador<br />R2ST — Soluciones Tecnológicas
            </footer>
        </main>
    )
}
