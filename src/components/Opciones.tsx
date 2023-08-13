import React from 'react'
import {Button} from "primereact/button";
import {GithubIcon, LinkedinIcon, MailIcon, PDFIcon} from "../icons";
import {Link} from "react-router-dom";


export const Opciones = () => {
    const social = [
        {
            name: 'Email',
            url: 'mailto:ronyreyna1995@gmail.com',
            icon: <MailIcon className="w-6 h-6"/>
        },
        {
            name: 'GitHub',
            url: 'https://github.com/DorianRony',
            icon: <GithubIcon className="w-6 h-6"/>
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ronyreyna/',
            icon: <LinkedinIcon className="w-6 h-6"/>
        },
    ]

    const onButtonClick = async () => {
            const archivoURL = `${process.env.PUBLIC_URL}/Perfilprofesional_RonyReyna.pdf`;
            console.log(archivoURL)
            window.open(archivoURL, '_blank');
    };

    return (
        /*flex items-center gap-2 bg-white border border-gray-900 hover:text-gray-950 text-gray-700 text-sm*/
        <>
            <div className="card flex flex-wrap justify-content-start gap-3">
                {social.map((item, index) =>
                    <Link to={item.url} target={"_blank"}>
                        <Button
                            className="bg-white border-gray-900 p-0 pr-3 text-sm text-gray-700 shadow-5 hover:shadow-8"
                            label={item.name} icon={item.icon}></Button>
                    </Link>
                )}
                <Button label="Descargar CV" icon={<PDFIcon className="w-6 h-6"></PDFIcon>}
                        className="bg-white border-gray-900 p-0 pr-3 text-sm text-gray-700 shadow-5 hover:shadow-8"
                        onClick={e => onButtonClick()}></Button>
            </div>
        </>
    )
}
