import React from 'react'

export const Presentacion = () => {
    return (
        <div>
            <div className="intro-label">Desarrollador de software · Ecuador</div>
            <h1 className="profile-title">
                Soy Rony Reyna
            </h1>
            <p className="profile-role">Java Senior Developer</p>

            <p>Tengo más de 8 años de experiencia en desarrollo de software, con foco en
                sistemas empresariales, APIs REST e integración de datos. Trabajo en
                SERTECPET desde enero de 2024.</p>
            <p>Mi stack incluye Java 17/21, Spring Boot, Jakarta EE, PostgreSQL,
                SQL Server, React y Docker. Me interesa aplicar inteligencia artificial
                y automatización a problemas concretos del negocio.</p>
            <p>R2ST — Soluciones Tecnológicas es mi marca de servicios para desarrollo de
                software, inteligencia artificial aplicada y automatización. Aquí puedes
                conocer mi trayectoria profesional y mis líneas de trabajo.</p>
            <ul className="stack-list" aria-label="Tecnologías principales">
                {['Java 17/21', 'Spring Boot', 'Jakarta EE', 'APIs REST', 'PostgreSQL', 'SQL Server', 'React', 'Docker'].map(technology =>
                    <li key={technology}>{technology}</li>
                )}
            </ul>
        </div>
    )
}
