const translations = {
  es: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      experience: 'Experiencia',
    },

    // ── Hero ────────────────────────────────────────────────
    hero: {
      badge: 'Disponible para nuevos retos',
      greeting: 'Hola, soy',
      description:
        'Lidero equipos de desarrollo y construyo experiencias web y móviles de alto impacto para clientes',
      specializedIn: 'Especializado en',
      withArchitecture: 'con arquitectura',
      ctaProjects: 'Ver Proyectos',
      ctaCV: 'Descargar CV',
      stats: {
        experience: 'Años de experiencia',
        developers: 'Developers liderados',
        technologies: 'Tecnologías dominadas',
      },
    },

    // ── About ───────────────────────────────────────────────
    about: {
      label: 'Sobre mí',
      title1: 'Liderando equipos que',
      title2: 'construyen a',
      titleHighlight: 'escala',
      p1a: 'Soy un UI Team Leader & Software Engineer con',
      p1b: '6+ años de experiencia',
      p1c:
        'construyendo aplicaciones web y móviles para clientes Fortune 500 en Accenture. Lidero un equipo de 8+ developers, diseñando sistemas de diseño a escala global con Atomic Design y asegurando un estándar de 80% de cobertura en testing.',
      p2: 'Especializado en el ecosistema React, transformo requerimientos complejos de negocio en arquitecturas escalables con zero-latency feel. Apasionado por el puente entre complejidad técnica y crecimiento de negocio.',
      cta: 'Ver trayectoria',
      facts: {
        company: 'Empresa actual',
        role: 'Rol',
        location: 'Ubicación',
        education: 'Educación',
        languages: 'Idiomas',
        architecture: 'Arquitectura',
        testing: 'Testing',
        availability: 'Disponibilidad',
      },
      factValues: {
        availability: 'Remote / Híbrido',
      },
    },

    // ── Skills ──────────────────────────────────────────────
    skills: {
      label: 'Stack Tecnológico',
      title: 'Mis',
      titleHighlight: 'Habilidades',
      subtitle:
        'Tecnologías y herramientas que utilizo para construir productos digitales de clase mundial en Accenture y proyectos propios.',
      ecosystem: 'Ecosistema completo',
    },

    // ── Projects ────────────────────────────────────────────
    projects: {
      label: 'Trabajo',
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      subtitle:
        'Proyectos reales que demuestran liderazgo técnico, arquitectura escalable y desarrollo full-stack.',
      filterAll: 'Todos',
      code: 'Código',
      demo: 'Demo',
      items: {
        atomicDesign: {
          title: 'Atomic Design System — Fortune 500',
          description:
            'Sistema de diseño global desde cero para plataformas web financieras. Arquitectura de componentes reutilizables con Atomic Design, mejorando consistencia de UI y reduciendo tiempo de desarrollo.',
        },
        heb: {
          title: 'Plataforma de Inventario — HEB',
          description:
            'Plataforma interna de alto impacto para gestión de inventario y pricing. Soluciones cross-platform con React y React Native, algoritmos de búsqueda avanzados y state management robusto.',
        },
        crm: {
          title: 'CRM Full-Stack',
          description:
            'Sistema CRM robusto con React, GraphQL y MongoDB. Centralización de inventario, sales tracking y administración de RRHH. Dashboards de analítica en tiempo real.',
        },
        mobileApps: {
          title: 'Cross-Platform Mobile Apps',
          description:
            'Aplicaciones móviles con sincronización offline-first usando React Native y Expo. Patrón de captura de datos sin conexión con sync automático al restaurar conectividad.',
        },
        ecommerce: {
          title: 'E-Commerce MERN Stack',
          description:
            'Plataforma e-commerce especializada para retail con catálogos dinámicos, integraciones de API custom y gestión eficiente de productos.',
        },
        portfolio: {
          title: 'Portfolio Personal',
          description:
            'Este mismo portafolio. Diseño premium con Next.js 15, React 19, partículas interactivas, animaciones con Framer Motion y arquitectura App Router.',
        },
        tanstack: {
          title: 'Basic Example TanStack Query',
          description:
            'Ejemplo básico de uso de TanStack Query, fetch, delete, create y update. Está conectando con una API misma que puedes encontrar en el repo.',
        },
        chat: {
          title: 'Chat App',
          description:
            'Creación de un chat en tiempo real con socket.io, Grafana y Node.js. Desarrollo de front-end y back-end, mismos que se pueden encontrar en el repo.',
        },
        algorithms: {
          title: 'Algoritmos en JavaScript',
          description:
            'Biblioteca técnica de lógica computacional en JavaScript. Soluciones para grafos, árboles y algoritmos de ordenamiento enfocadas en optimizar el rendimiento y entender a fondo la complejidad algorítmica.',
        },
        crmGraphql: {
          title: 'Customer Relationship Management (CRM)',
          description:
            'Sistema de gestión CRM optimizado con GraphQL y React. Implementa consultas de datos eficientes para administración de prospectos, enfocándose en la modularidad, el alto rendimiento y la interactividad en tiempo real.',
        },
        cinema: {
          title: 'Cinema Club',
          description:
            'Plataforma cinematográfica construida con PHP. Enfocada en renderizado dinámico y bases de datos, ofrece una estructura sólida para administrar información multimedia mediante lógica servidor eficiente.',
        },
        instagram: {
          title: 'Copy Instagram',
          description:
            'En el proyecto se buscó realizar una copia de la aplicación Instagram, copiando únicamente lo visual sin conexiones a ninguna API.',
        },
        videoEngine: {
          title: 'Parallel Video Processing Engine',
          description:
            'Motor de procesamiento paralelo en Node.js que optimiza el uso de CPU mediante clusters. Automatiza la extracción, filtrado y renderizado de video utilizando FFmpeg y Jimp.',
        },
      },
    },

    // ── Experience ──────────────────────────────────────────
    experience: {
      label: 'Trayectoria',
      title: 'Mi',
      titleHighlight: 'Experiencia',
      subtitle:
        'De freelancer a líder de equipo en Accenture — una trayectoria de crecimiento constante en el desarrollo de software.',
      present: 'Presente',
      items: {
        accenture: {
          description:
            'Liderazgo de equipo de 8+ developers para clientes Fortune 500 del sector financiero. Arquitectura de sistemas de diseño globales con Atomic Design y desarrollo cross-platform.',
          achievements: [
            'Lideré y mentoricé un equipo de alto rendimiento de 8 developers, supervisando code reviews y crecimiento técnico',
            'Arquitecté un sistema Atomic Design global desde cero para plataformas web financieras Fortune 500',
            'Contribución técnica clave en desarrollo de apps móviles cross-platform con React Native',
            'Reduje drásticamente el time-to-market con spikes arquitectónicos y API mocking con MSW',
            'Modernicé el state management integrando TanStack Query y Redux Toolkit',
            'Establecí estándar mandatorio de 80% de cobertura en unit testing con Jest y RTL',
            'Colaboración con stakeholders multinacionales traduciendo requerimientos complejos a arquitecturas web',
          ],
        },
        heb: {
          description:
            'Desarrollo de plataforma interna de alto impacto para gestión de inventario y pricing. Soluciones cross-platform con React y React Native.',
          achievements: [
            'Desarrollé plataforma interna para gestión de inventario y pricing en tiempo récord',
            'Ingeniería de soluciones cross-platform (web + móvil) con React y React Native',
            'Implementé algoritmos de búsqueda avanzados para optimizar el descubrimiento de productos',
            'Arquitecté state management robusto con Redux y comunicación API con Axios',
            'Diseñé componentes profesionales con Ant Design, traduciendo prototipos Adobe XD pixel-perfect',
          ],
        },
        neoris: {
          description:
            'Desarrollo de APIs RESTful y microservicios. Gestión de bases de datos PostgreSQL y Oracle con enfoque en calidad de código y CI/CD.',
          achievements: [
            'Desarrollé y mantuve APIs RESTful y microservicios con Java y Spring Boot',
            'Gestión de bases de datos PostgreSQL y Oracle, optimizando queries complejas',
            'Implementé unit tests automatizados con JUnit manteniendo alta cobertura',
            'Colaboración en entorno Ágil (Scrum) utilizando Jenkins para CI',
          ],
        },
        freelance: {
          description:
            'Desarrollo full-stack independiente: CRM systems, e-commerce platforms, landing pages y dashboards de analítica para clientes diversos.',
          achievements: [
            'Desarrollé CRM full-stack con React, GraphQL y MongoDB para operaciones de negocio',
            'Ingeniería de dashboards de analítica en tiempo real con Axios y Tailwind CSS',
            'Diseñé plataformas e-commerce especializadas (MERN stack) para retail',
            'Construí landing pages de alto rendimiento con PHP y CSS para sectores industrial y automotriz',
            'Aprendizaje autodidacta de GraphQL para resolver requisitos complejos de data',
          ],
        },
      },
    },

    // ── Contact ─────────────────────────────────────────────
    contact: {
      label: 'Contacto',
      title: '¡Hablemos de tu',
      titleHighlight: 'próximo proyecto',
      titleEnd: '!',
      subtitle:
        'Disponible para posiciones de liderazgo técnico, proyectos freelance y colaboraciones.',
      cardTitle: '¿Tienes un proyecto en mente?',
      cardText:
        'Ya sea liderazgo técnico, desarrollo de aplicaciones o consultoría en arquitectura frontend.',
      locationLabel: 'Ubicación',
      locationValue: 'Querétaro, México 🇲🇽',
      fieldName: 'Tu nombre',
      fieldNamePlaceholder: 'Juan García',
      fieldEmail: 'Email',
      fieldEmailPlaceholder: 'juan@empresa.com',
      fieldMessage: 'Mensaje',
      fieldMessagePlaceholder: 'Cuéntame sobre tu proyecto...',
      btnSend: 'Enviar mensaje',
      btnSending: 'Enviando...',
      btnSent: '¡Mensaje enviado!',
    },

    // ── Footer ──────────────────────────────────────────────
    footer: {
      description:
        'UI Team Leader & Software Engineer especializado en React, Next.js y React Native. Construyendo experiencias digitales de clase mundial.',
      navigation: 'Navegación',
      connect: 'Conecta',
      rights: 'Todos los derechos reservados.',
    },
  },

  // ════════════════════════════════════════════════════════
  //  ENGLISH
  // ════════════════════════════════════════════════════════
  en: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
    },

    // ── Hero ────────────────────────────────────────────────
    hero: {
      badge: 'Available for new challenges',
      greeting: "Hi, I'm",
      description:
        'I lead development teams and build high-impact web and mobile experiences for',
      specializedIn: 'Specialized in',
      withArchitecture: 'with',
      ctaProjects: 'View Projects',
      ctaCV: 'Download CV',
      stats: {
        experience: 'Years of experience',
        developers: 'Developers led',
        technologies: 'Technologies mastered',
      },
    },

    // ── About ───────────────────────────────────────────────
    about: {
      label: 'About me',
      title1: 'Leading teams that',
      title2: 'build at',
      titleHighlight: 'scale',
      p1a: 'I am a UI Team Leader & Software Engineer with',
      p1b: '6+ years of experience',
      p1c:
        'building web and mobile applications for Fortune 500 clients at Accenture. I lead a team of 8+ developers, designing global-scale design systems with Atomic Design and enforcing an 80% testing coverage standard.',
      p2: 'Specialized in the React ecosystem, I transform complex business requirements into scalable architectures with a zero-latency feel. Passionate about bridging technical complexity and business growth.',
      cta: 'View career',
      facts: {
        company: 'Current company',
        role: 'Role',
        location: 'Location',
        education: 'Education',
        languages: 'Languages',
        architecture: 'Architecture',
        testing: 'Testing',
        availability: 'Availability',
      },
      factValues: {
        availability: 'Remote / Hybrid',
      },
    },

    // ── Skills ──────────────────────────────────────────────
    skills: {
      label: 'Tech Stack',
      title: 'My',
      titleHighlight: 'Skills',
      subtitle:
        'Technologies and tools I use to build world-class digital products at Accenture and personal projects.',
      ecosystem: 'Full ecosystem',
    },

    // ── Projects ────────────────────────────────────────────
    projects: {
      label: 'Work',
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle:
        'Real-world projects showcasing technical leadership, scalable architecture, and full-stack development.',
      filterAll: 'All',
      code: 'Code',
      demo: 'Demo',
      items: {
        atomicDesign: {
          title: 'Atomic Design System — Fortune 500',
          description:
            'Global design system built from scratch for financial web platforms. Reusable component architecture with Atomic Design, improving UI consistency and reducing development time.',
        },
        heb: {
          title: 'Inventory Platform — HEB',
          description:
            'High-impact internal platform for inventory and pricing management. Cross-platform solutions with React and React Native, advanced search algorithms, and robust state management.',
        },
        crm: {
          title: 'Full-Stack CRM',
          description:
            'Robust CRM system built with React, GraphQL, and MongoDB. Inventory centralization, sales tracking, and HR management with real-time analytics dashboards.',
        },
        mobileApps: {
          title: 'Cross-Platform Mobile Apps',
          description:
            'Mobile apps with offline-first sync using React Native and Expo. Offline data capture pattern with automatic sync when connectivity is restored.',
        },
        ecommerce: {
          title: 'E-Commerce MERN Stack',
          description:
            'Specialized e-commerce platform for retail with dynamic catalogs, custom API integrations, and efficient product management.',
        },
        portfolio: {
          title: 'Personal Portfolio',
          description:
            'This very portfolio. Premium design with Next.js 15, React 19, interactive particles, Framer Motion animations, and App Router architecture.',
        },
        tanstack: {
          title: 'Basic Example TanStack Query',
          description:
            'Basic usage example of TanStack Query covering fetch, delete, create, and update. Connected to an API you can find in the repo.',
        },
        chat: {
          title: 'Chat App',
          description:
            'Real-time chat built with socket.io, Grafana, and Node.js. Full front-end and back-end implementation available in the repo.',
        },
        algorithms: {
          title: 'JavaScript Algorithms',
          description:
            'Technical library of computational logic in JavaScript. Solutions for graphs, trees, and sorting algorithms focused on performance optimization and deep algorithmic complexity understanding.',
        },
        crmGraphql: {
          title: 'Customer Relationship Management (CRM)',
          description:
            'CRM management system optimized with GraphQL and React. Implements efficient data queries for prospect management, focusing on modularity, high performance, and real-time interactivity.',
        },
        cinema: {
          title: 'Cinema Club',
          description:
            'PHP-based cinematic platform focused on dynamic rendering and databases. Offers a solid structure to manage multimedia information through efficient server-side logic.',
        },
        instagram: {
          title: 'Instagram Clone',
          description:
            'Project focused on replicating the Instagram app visually, without any API connections.',
        },
        videoEngine: {
          title: 'Parallel Video Processing Engine',
          description:
            'Parallel processing engine in Node.js that optimizes CPU usage through clusters. Automates video extraction, filtering, and rendering using FFmpeg and Jimp.',
        },
      },
    },

    // ── Experience ──────────────────────────────────────────
    experience: {
      label: 'Career',
      title: 'My',
      titleHighlight: 'Experience',
      subtitle:
        'From freelancer to team lead at Accenture — a track record of steady growth in software development.',
      present: 'Present',
      items: {
        accenture: {
          description:
            'Leading a team of 8+ developers for Fortune 500 clients in the financial sector. Global design system architecture with Atomic Design and cross-platform development.',
          achievements: [
            'Led and mentored a high-performance team of 8 developers, overseeing code reviews and technical growth',
            'Architected a global Atomic Design system from scratch for Fortune 500 financial web platforms',
            'Key technical contributor to cross-platform mobile app development with React Native',
            'Drastically reduced time-to-market through architectural spikes and API mocking with MSW',
            'Modernized state management by integrating TanStack Query and Redux Toolkit',
            'Established a mandatory 80% unit test coverage standard using Jest and RTL',
            'Collaborated with multinational stakeholders translating complex requirements into web architectures',
          ],
        },
        heb: {
          description:
            'Development of a high-impact internal platform for inventory and pricing management. Cross-platform solutions with React and React Native.',
          achievements: [
            'Built an internal inventory and pricing management platform in record time',
            'Engineered cross-platform solutions (web + mobile) with React and React Native',
            'Implemented advanced search algorithms to optimize product discovery',
            'Architected robust state management with Redux and API communication via Axios',
            'Designed professional components with Ant Design, translating Adobe XD prototypes pixel-perfect',
          ],
        },
        neoris: {
          description:
            'RESTful API and microservice development. PostgreSQL and Oracle database management with a focus on code quality and CI/CD.',
          achievements: [
            'Developed and maintained RESTful APIs and microservices with Java and Spring Boot',
            'Managed PostgreSQL and Oracle databases, optimizing complex queries',
            'Implemented automated unit tests with JUnit maintaining high coverage',
            'Collaborated in an Agile (Scrum) environment using Jenkins for CI',
          ],
        },
        freelance: {
          description:
            'Independent full-stack development: CRM systems, e-commerce platforms, landing pages, and analytics dashboards for diverse clients.',
          achievements: [
            'Built a full-stack CRM with React, GraphQL, and MongoDB for business operations',
            'Engineered real-time analytics dashboards with Axios and Tailwind CSS',
            'Designed specialized e-commerce platforms (MERN stack) for retail',
            'Built high-performance landing pages with PHP and CSS for industrial and automotive sectors',
            'Self-taught GraphQL to solve complex data requirements',
          ],
        },
      },
    },

    // ── Contact ─────────────────────────────────────────────
    contact: {
      label: 'Contact',
      title: "Let's talk about your",
      titleHighlight: 'next project',
      titleEnd: '!',
      subtitle:
        'Available for technical leadership positions, freelance projects, and collaborations.',
      cardTitle: 'Have a project in mind?',
      cardText:
        'Whether it is technical leadership, app development, or frontend architecture consulting.',
      locationLabel: 'Location',
      locationValue: 'Querétaro, México 🇲🇽',
      fieldName: 'Your name',
      fieldNamePlaceholder: 'John Smith',
      fieldEmail: 'Email',
      fieldEmailPlaceholder: 'john@company.com',
      fieldMessage: 'Message',
      fieldMessagePlaceholder: 'Tell me about your project...',
      btnSend: 'Send message',
      btnSending: 'Sending...',
      btnSent: 'Message sent!',
    },

    // ── Footer ──────────────────────────────────────────────
    footer: {
      description:
        'UI Team Leader & Software Engineer specialized in React, Next.js, and React Native. Building world-class digital experiences.',
      navigation: 'Navigation',
      connect: 'Connect',
      rights: 'All rights reserved.',
    },
  },
};

export default translations;
