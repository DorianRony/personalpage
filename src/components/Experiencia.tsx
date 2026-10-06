import React from 'react'
import {Card} from "primereact/card";

export const Experiencia = () => {
    const experienciaData = [
        {
            position: "Desarrollador de software",
            location: "Ecuador",
            company: "SERTECPET",
            time: "ene. 2024 - actualidad",
            resume: "Mi etapa profesional actual en desarrollo de software. Mi enfoque es el software empresarial, las APIs y la integración de sistemas."
        },
        {
            position: "Software Developer",
            location:"Quito - Ecuador - Remoto",
            company: "Kruger Corp",
            time: "abr. 2022 - ene. 2024",
            resume:
                "En Kruger, como desarrollador Java, fui responsable de diseñar y desarrollar " +
                "microservicios utilizando Java y Spring Boot. Mi experiencia en el desarrollo de software me permite " +
                "crear soluciones escalables y eficientes para satisfacer las necesidades de negocio de nuestros clientes." +
                " Además, me encargué del mantenimiento de aplicaciones desarrolladas con Angular y Java, revisión " +
                "de servicios con Postman, consultas y manejo de bases de datos con SQL, y versionamiento de código con " +
                "Git, manejo de Jira, Bitbucket, y Confluence. Estoy comprometido con el aprendizaje continuo y la adopción " +
                "de las últimas tecnologías para mejorar el rendimiento y la funcionalidad del software."
        },
        {
            position: "Software Developer",
            company: "Sicon Ecuador",
            location:"Quito - Ecuador",
            time: "mar. 2019 - abr. 2022",
            resume: "En Sistemas Construlivianos (Sicon), como desarrollador Java, fui responsable de diseñar," +
                " desarrollar y mantener aplicaciones ERP web utilizando Java, Spring, Primefaces, MySQL y " +
                "JasperReport. Mi experiencia en el desarrollo de software me permitió crear soluciones eficientes " +
                "y escalables para satisfacer las necesidades de negocio de nuestros clientes. Además, me encargaba" +
                " de la implementación de Integración continua con Jenkins, despliegue de aplicaciones en ambientes" +
                " de prueba y producción, desarrollo de reportes y consultas SQL. Estaba comprometido con el" +
                " aprendizaje continuo y la adopción de las últimas tecnologías para mejorar el rendimiento y la " +
                "funcionalidad del software."
        },
        {
            position: "Software Developer",
            company: "Bellgenica",
            location:"Quito - Ecuador",
            time: "abr. 2018 - ene. 2019",
            resume: "En Bellgenica, como desarrollador Java, fui responsable de diseñar, desarrollar y " +
                "mantener aplicaciones de software CRM utilizando Java, el framework Stark, MySQL y Vaadin. " +
                "Mi experiencia en el desarrollo de software me permitió crear soluciones eficientes y escalables " +
                "para satisfacer las necesidades de negocio de nuestros clientes. Además, me encargaba de la" +
                " creación de reportes mediante consultas SQL y programación, garantizando la integridad y" +
                " precisión de la información. Estaba comprometido con el aprendizaje continuo y la adopción " +
                "de las últimas tecnologías para mejorar el rendimiento y la funcionalidad del software."
        }
    ]


    return (
        <>
            <div className="card">
                {experienciaData.map(item =>
                    <Card key={item.company} title={<>{item.position} - {item.company}</>}
                          subTitle={<>
                              <div>
                                  <label>{item.location}</label>
                              </div>
                              <div>
                                  <label>{item.time}</label>
                              </div>
                          </>}>
                        <p className="m-0 text-justify">
                            {item.resume}
                        </p>
                    </Card>
                )}
            </div>
        </>
    )
}
