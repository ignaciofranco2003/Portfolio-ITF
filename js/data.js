const portfolioData = {
    hero: {
        title: "Sobre mí",
        paragraphs: [
            "Soy <b>desarrollador Backend / Full Stack</b> y estudiante de 5º año de la <b>Licenciatura en Informática</b>. Mi perfil técnico se centra principalmente en el ecosistema <b>Java con Spring Boot</b> para el desarrollo de sistemas backend robustos y escalables, y en <b>Python con Flask</b> para la creación de servicios y aplicaciones más ligeras y flexibles.",
            "Tengo experiencia en el desarrollo de <b>APIs REST</b>, en el modelado y gestión de bases de datos <b>MySQL</b>, y en la implementación de mecanismos de autenticación y autorización utilizando <b>roles, sesiones y JWT</b>. Manejo herramientas del entorno profesional como <b>Git y GitHub</b> para control de versiones y <b>Postman</b> para pruebas y validación de servicios.",
            "Además, cuento con formación en desarrollo web utilizando <b>HTML, CSS y JavaScript</b>, integrando estas tecnologías con sistemas backend. Mi objetivo es continuar desarrollándome profesionalmente en el área de <b>backend y full stack</b>, participando en proyectos donde pueda aportar valor técnico y seguir profundizando en arquitectura de software y diseño de sistemas."
        ]
    },
    projects: [
        {
            title: "Ciudad Reporta",
            tags: ["Python", "Flask", "MySQL", "Android"],
            description: "Sistema de reportes ciudadanos donde los usuarios pueden registrar incidencias urbanas y visualizar reportes de otros usuarios en un mapa.<br />Incluye backend con API REST y una app Android que consume los servicios.",
            links: [
                { label: "Repositorio", url: "https://github.com/ignaciofranco2003/Ciudad-Reporta" }
            ]
        },
        {
            title: "Gestión de Tareas y Finanzas",
            tags: ["Java", "Spring Boot", "MySQL", "HTML - CSS - JS"],
            description: "Aplicación para organizar finanzas personales y tareas: manejo de cuentas, ingresos/gastos, ahorros y planificación de las tareas.<br />Incluye un backend con autenticación y un frontend web integrado.",
            links: [
                { label: "Repo Backend", url: "https://github.com/ignaciofranco2003/Gestor-finanzas-y-tareas" },
                { label: "Repo Frontend", url: "https://github.com/ignaciofranco2003/Gestion-finanzas-y-tareas-front" }
            ]
        },
        // {
        //     title: "Web ONG",
        //     tags: ["HTML", "CSS", "JS"],
        //     description: "Sitio web institucional para una ONG, pensado para presentar su misión, actividades y formas de colaboración, con diseño responsive y estructura clara para mantenimiento y futuras integraciones.",
        //     links: [
        //         { label: "Ver Pagina", url: "https://ignaciofranco2003.github.io/WEB-ONG/" }
        //     ]
        // },
        {
            title: "Sudoku Lógico y Funcional",
            tags: ["Python", "Prolog", "Tkinter"],
            description: "Aplicación de Sudoku con enfoque híbrido declarativo. Combina Prolog (CLPFD) como motor lógico puro para generar y resolver tableros, y Python para transformaciones funcionales de datos.",
            links: [
                { label: "Ver Repositorio", url: "https://github.com/ignaciofranco2003/Sudoku" }
            ]
        }
    ],
    technologies: [
        {
            category: "Frontend",
            items: [
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
                { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
                { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" }
            ]
        },
        {
            category: "Base de datos",
            items: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            ]
        },
        {
            category: "Utilidades",
            items: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
            ]
        }
    ]
};