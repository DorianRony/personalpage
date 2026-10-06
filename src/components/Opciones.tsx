import React from 'react'
import {GithubIcon, LinkedinIcon, MailIcon} from "../icons";


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
            <nav className="contact-links" aria-label="Contacto y perfiles profesionales">
                {social.map(item =>
                    <a key={item.name} href={item.url}
                       target={item.url.startsWith('https:') ? '_blank' : undefined}
                       rel={item.url.startsWith('https:') ? 'noopener noreferrer' : undefined}>
                        {item.icon}<span>{item.name}</span>
                    </a>
                )}
            </nav>
        </>
    )
}
