import React from 'react'

export const Proyectos = () => {
    return (
        <section className="project-section" aria-labelledby="projects-title">
            <h2 id="projects-title">Proyectos y líneas de trabajo</h2>
            <article className="project-card">
                <h3>R2ST — Soluciones Tecnológicas</h3>
                <p>Mi marca de servicios: software empresarial, inteligencia artificial
                    aplicada y automatización e integración de sistemas.</p>
                <p>El punto de partida es entender el proceso y construir una solución
                    con un alcance claro y validación por etapas.</p>
                <a href="https://www.linkedin.com/in/ronyreyna/" target="_blank" rel="noopener noreferrer">
                    Hablemos de tu proyecto en LinkedIn
                </a>
            </article>
            <article className="project-card">
                <h3>Intense IA</h3>
                <p>Proyecto compartido relacionado con inteligencia artificial. Participo
                    en colaboración con otras personas.</p>
            </article>
            <a className="project-link" href="https://github.com/DorianRony?tab=repositories"
               target="_blank" rel="noopener noreferrer">Explorar mis repositorios públicos en GitHub</a>
        </section>
    )
}
