import React from 'react'

export const Header = () => {
    const string = '<'
    const string2 = '/>'
    return (
        <header className="flex justify-between items-center py-4 mb-16 relative z-10 header">
            <div className="max-content">
                <h1 className="font-bold font-mono text-xl">
                    {string}
                    <span className="text-indigo-500">R2Develop</span>
                    {string2}
                </h1>
            </div>
        </header>
    )
}
