import React from 'react'
import {Button} from "primereact/button";
import {GithubIcon, LinkedinIcon, MailIcon} from "../icons";
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


    return (
        /*flex items-center gap-2 bg-white border border-gray-900 hover:text-gray-950 text-gray-700 text-sm*/
        <>
            <div className="card flex justify-content-start gap-3">
                {social.map((item, index) =>
                    <Button className="bg-white border-gray-900 p-0 pr-3 text-sm text-gray-700 shadow-5 hover:shadow-8"
                        label={item.name} icon={item.icon}></Button>
                )}
            </div>
        </>
    )
}
