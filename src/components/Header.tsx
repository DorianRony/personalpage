import React from 'react'

export const Header = () => {
    const string = '<'
    const string2 = '/>'
    return (
        <header className="flex justify-between items-center py-4 mb-16 relative z-10 header">
            <div className="max-content">
                <div className="font-bold font-mono text-xl brand-wordmark">
                    {string}
                    <span className="brand-name">R2ST</span>
                    {string2}
                </div>
                <p className="brand-caption">Soluciones Tecnológicas</p>
                <p className="brand-descriptor">Software · Inteligencia artificial · Automatización</p>
            </div>
        </header>
    )
}
