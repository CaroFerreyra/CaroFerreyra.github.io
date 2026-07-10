// Case-study content for the portfolio — bilingual (es/en).
// Plain global script consumed by CaseStudy.dc.html via window.CF_CASES.
// Blocks render in order: {h, p} heading+paragraphs, {list} bullet list,
// {img} full-bleed image, {quote} pull-quote, {grid} phone-screen grid,
// {compare} phone before/after wipe, {phones} floating devices, {desktop}/{browser} mockups.
window.CF_CASES = {
  datalog: {
    index: '01',
    kicker: { es: 'Práctica · Proyecto Profesional', en: 'Internship · Professional Project' },
    title: 'Datalog',
    lede: {
      es: 'Dashboard de consumo de servicios públicos: agua, gas y electricidad. Visualización de datos intuitiva con insights personalizados de sostenibilidad para traducir datos complejos en pantallas accesibles.',
      en: 'A utilities-consumption dashboard for water, gas and electricity. Intuitive data visualization with personalized sustainability insights, translating complex data into accessible screens.'
    },
    tags: ['UX Design', 'Data Viz', 'Design System', 'Dashboards', 'Figma'],
    meta: [
      { l: { es: 'Rol', en: 'Role' }, v: { es: 'UX Designer (Práctica)', en: 'UX Designer (Internship)' } },
      { l: { es: 'Contexto', en: 'Context' }, v: { es: 'Proyecto Profesional', en: 'Professional Project' } },
      { l: { es: 'Herramientas', en: 'Tools' }, v: { es: 'Figma', en: 'Figma' } }
    ],
    overview: {
      es: 'Plataforma web para monitorear y optimizar el consumo de servicios públicos: agua, gas y electricidad. El foco del proyecto fue traducir datos complejos en pantallas accesibles para todo tipo de usuarios, desde hogares hasta gestores de edificios.',
      en: 'A web platform to monitor and optimize utility consumption for water, gas and electricity. The project focused on translating complex data into accessible screens for every kind of user, from households to building managers.'
    },
    blocks: [
      { h: { es: 'Contexto', en: 'Context' }, p: {
        es: ['Datalog es una plataforma que permite monitorear y optimizar el consumo de servicios públicos: agua, gas y electricidad.', 'Al convertir datos complejos en visualizaciones claras, ayuda a tomar decisiones informadas y conservar recursos.', 'Ofrece insights personalizados en tiempo real para comparar el consumo con hogares similares y adoptar prácticas más sostenibles.'],
        en: ['Datalog lets people monitor and optimize utility consumption for water, gas and electricity.', 'By turning complex data into clear visualizations, it helps users make informed decisions and conserve resources.', 'It offers personalized, real-time insights to compare consumption with similar households and adopt more sustainable habits.']
      } },
      { h: { es: 'Desafío', en: 'Challenge' }, p: {
        es: ['Datalog busca consolidar todos los datos de consumo en una única plataforma adaptada a cada individuo.', 'El desafío fue visualizar información compleja de manera efectiva, personalizando al mismo tiempo las recomendaciones.', 'Buscamos formas innovadoras de presentar los datos para que los usuarios recibieran sugerencias según sus patrones únicos de consumo.'],
        en: ['Datalog aims to consolidate all consumption data into a single platform tailored to each individual.', 'The challenge was visualizing complex information effectively while personalizing recommendations.', 'We explored innovative ways to present data so users would get suggestions based on their unique consumption patterns.']
      } },
      { h: { es: 'Objetivo', en: 'Goal' }, p: {
        es: ['El objetivo principal fue transformar datos complejos en pantallas amigables. Para lograrlo nos enfocamos en:'],
        en: ['The main goal was to turn complex data into friendly screens. To get there we focused on:']
      }, list: {
        es: ['Analizar los datos para proporcionar insights valiosos.', 'Ayudar a comprender el consumo y ofrecer sugerencias para actividades más sostenibles.', 'Diseñar wireframes atractivos, accesibles e intuitivos para todo tipo de usuarios.'],
        en: ['Analyze the data to surface valuable insights.', 'Help users understand their consumption and suggest more sustainable habits.', 'Design attractive, accessible and intuitive wireframes for every kind of user.']
      } },
      { browser: 'assets/work/datalog-fullpage.svg', map: 'assets/work/datalog-map.png', small: true, url: 'datalog.barcelona', alt: { es: 'Datalog: plataforma de visualización de consumo', en: 'Datalog: consumption visualization platform' } }
    ],
    next: { id: 'welly', title: 'Welly', sub: { es: 'E-Commerce · UX/UI · ELISAVA', en: 'E-Commerce · UX/UI · ELISAVA' } },
    prev: null
  },

  welly: {
    index: '02',
    kicker: { es: 'E-Commerce · Máster ELISAVA', en: 'E-Commerce · ELISAVA Master’s' },
    title: 'Welly',
    lede: {
      es: 'Rediseño de la funcionalidad de filtros para Welly, una plataforma e-commerce especializada en vendas corporales. La nueva función permite encontrar fácilmente el producto correcto según talla, cantidad y necesidades específicas. Especialmente útil para usuarios nuevos.',
      en: 'A filter-experience redesign for Welly, an e-commerce platform specialized in body bandages. The new feature makes it easy to find the right product by size, quantity and specific needs. Especially useful for new users.'
    },
    tags: ['UX/UI Design', 'E-Commerce', 'Design System', 'User Research', 'Filtros & Búsqueda', 'Figma'],
    meta: [
      { l: { es: 'Rol', en: 'Role' }, v: { es: 'UX/UI Designer', en: 'UX/UI Designer' } },
      { l: { es: 'Contexto', en: 'Context' }, v: { es: 'Proyecto de Máster · ELISAVA', en: 'Master’s Project · ELISAVA' } },
      { l: { es: 'Herramientas', en: 'Tools' }, v: { es: 'Figma', en: 'Figma' } }
    ],
    overview: {
      es: 'Welly es una plataforma e-commerce especializada en vendas corporales con una amplia variedad de productos. El reto: los usuarios nuevos no sabían cómo elegir el producto correcto. Se rediseñó la experiencia de filtros para guiar por talla, zona corporal, cantidad y tipo de uso, reduciendo la fricción y mejorando la conversión.',
      en: 'Welly is an e-commerce platform specialized in body bandages with a wide product range. The problem: new users didn’t know how to pick the right product. We redesigned the filter experience to guide by size, body zone, quantity and use, reducing friction and improving conversion.'
    },
    blocks: [
      { h: { es: 'Contexto', en: 'Context' }, p: {
        es: ['Welly es una plataforma de e-commerce especializada en vendas corporales diseñadas para distintas partes del cuerpo. En este proyecto mejoramos la experiencia de usuario introduciendo una nueva funcionalidad de filtros, que permite encontrar fácilmente el producto correcto según talla, cantidad y necesidades específicas.'],
        en: ['Welly is an e-commerce platform specialized in body bandages designed for different parts of the body. In this project we improved the user experience by introducing a new filter feature that makes finding the right product easy by size, quantity and specific needs.']
      } },
      { h: { es: 'Sobre la marca', en: 'About the brand' }, p: {
        es: ['Welly se especializa en crear vendas diseñadas para distintas zonas del cuerpo. Sus productos no solo ofrecen protección, sino también un toque divertido a la experiencia. Con colores vibrantes y estampados alegres, están pensadas para que puedas llevar tus heridas con orgullo.'],
        en: ['Welly specializes in bandages designed for different body zones. Its products offer protection plus a playful twist, with vibrant colors and cheerful prints, made so you can wear your wounds with pride.']
      } },
      { h: { es: 'Solución', en: 'Solution' }, p: {
        es: ['Proponemos implementar filtros que permitan una búsqueda más personalizada y controlada. Estos filtros clasifican las vendas para facilitar la comparación entre opciones. Especialmente útil para nuevos usuarios que no conocen la variedad de productos Welly.', 'Cada filtro muestra en tiempo real cuántos productos coinciden, evitando búsquedas sin resultados.'],
        en: ['We proposed filters that enable a more personalized, controlled search. They classify the bandages to make comparison between options easier. Especially useful for new users unfamiliar with Welly’s range.', 'Each filter shows in real time how many products match, avoiding zero-result searches.']
      } },
      { phones: [
        { src: 'assets/work/welly-inicio.png', label: { es: 'Inicio', en: 'Home' } },
        { src: 'assets/work/welly-comparar.png', label: { es: 'Comparar', en: 'Compare' } },
        { src: 'assets/work/welly-flexibles.png', label: { es: 'Producto', en: 'Product' } }
      ] },
      { h: { es: 'Baja fidelidad', en: 'Low fidelity' }, p: {
        es: ['Este wireframe de baja fidelidad ilustra el flujo de usuario en la plataforma Welly, desde la selección del producto hasta el proceso de compra. Se enfoca en estructura, layout y usabilidad antes de avanzar a diseños de alta fidelidad.'],
        en: ['This low-fidelity wireframe illustrates the user flow on Welly, from product selection to checkout. It focuses on structure, layout and usability before moving to high-fidelity designs.']
      }, list: {
        es: ['Flujo de usuario: cómo navegan las categorías, aplican filtros y llegan al checkout.', 'Retroalimentación e iteración: las anotaciones señalan áreas de mejora detectadas en las pruebas tempranas.', 'Próximos pasos: estos insights guiarán las iteraciones hacia prototipos de alta fidelidad más intuitivos.'],
        en: ['User flow: how users browse categories, apply filters and reach checkout.', 'Feedback & iteration: annotations flag improvement areas found in early testing.', 'Next steps: these insights guide iterations toward more intuitive high-fidelity prototypes.']
      } },
      { h: { es: 'Sistema de Diseño', en: 'Design System' }, p: {
        es: ['El sistema de diseño de Welly promueve consistencia y escalabilidad integrando colores, tipografía, grillas e iconos para una experiencia visual unificada.'],
        en: ['Welly’s design system promotes consistency and scalability, integrating color, typography, grids and icons for a unified visual experience.']
      }, list: {
        es: ['Migración de marca: evaluamos el sitio actual y transferimos los elementos de branding a Figma.', 'Creación de componentes: botones, dropdowns e inputs desde cero en una librería reutilizable.', 'Estructura en grilla: layout responsivo adaptable a distintos dispositivos.', 'Documentación: todos los componentes documentados en Figma para facilitar la colaboración.'],
        en: ['Brand migration: audited the current site and moved branding elements into Figma.', 'Component creation: buttons, dropdowns and inputs built from scratch into a reusable library.', 'Grid structure: a responsive layout adaptable across devices.', 'Documentation: every component documented in Figma to ease collaboration.']
      } },
      { h: { es: 'Aprendizajes', en: 'Learnings' }, list: {
        es: ['Visualización del diseño: mejoré en representar y comunicar conceptos con claridad.', 'Resolución de problemas: desarrollé habilidades al enfrentar y resolver fallos de interacción.', 'Comunicación con el equipo: garanticé la comprensión del diseño para una implementación exitosa.', 'Consistencia: agregué nuevas funciones manteniendo colores y acciones coherentes.', 'Simplificación del flujo: hice la navegación más intuitiva en distintos productos.'],
        en: ['Design visualization: I got better at representing and communicating concepts clearly.', 'Problem solving: built skills facing and resolving interaction issues.', 'Team communication: ensured design understanding for successful implementation.', 'Consistency: added new features while keeping colors and actions coherent.', 'Flow simplification: made navigation more intuitive across products.']
      } },
      { desktop: 'assets/work/welly-desktop.svg', hifi: 'assets/work/welly-comparar-hifi.png', url: 'getwelly.com/comparar', caption: { es: 'Del wireframe de baja fidelidad a la pantalla final. Desliza para comparar', en: 'From the low-fidelity wireframe to the final screen. Wipe to compare' }, lo: { es: 'Baja fidelidad', en: 'Low fidelity' }, hi: { es: 'Alta fidelidad', en: 'High fidelity' }, alt: { es: 'Welly: comparador (escritorio)', en: 'Welly: compare (desktop)' } }
    ],
    prev: { id: 'datalog', title: 'Datalog', sub: { es: 'Visualización de Datos · Práctica', en: 'Data Visualization · Internship' } },
    next: { id: 'nodos', title: 'Nodos', sub: { es: 'App Móvil · UX/UI · Máster', en: 'Mobile App · UX/UI · Master’s' } }
  },

  nodos: {
    index: '03',
    kicker: { es: 'App Móvil · TFM · Barcelona', en: 'Mobile App · Master’s Thesis · Barcelona' },
    title: 'Nodos',
    lede: {
      es: 'App móvil que combina datos de calidad del aire en tiempo real con rutas urbanas para promover una movilidad más saludable en Barcelona. Para ciclistas, atletas y personas con condiciones respiratorias.',
      en: 'A mobile app that combines real-time air-quality data with urban routes to promote healthier mobility in Barcelona. For cyclists, athletes and people with respiratory conditions.'
    },
    tags: ['UX/UI Design', 'Mobile App', 'Data Viz', 'Mapas & Rutas', 'Calidad del Aire', 'Figma'],
    meta: [
      { l: { es: 'Rol', en: 'Role' }, v: { es: 'UX/UI Designer (Equipo de 5)', en: 'UX/UI Designer (Team of 5)' } },
      { l: { es: 'Contexto', en: 'Context' }, v: { es: 'Proyecto Final de Máster', en: 'Master’s Thesis Project' } },
      { l: { es: 'Herramientas', en: 'Tools' }, v: { es: 'Figma', en: 'Figma' } }
    ],
    overview: {
      es: 'El 99% de las personas en el mundo respiran aire insalubre. Nodos nació como respuesta a este problema: una app que integra datos de sensores de calidad del aire de Barcelona con un sistema de rutas, permitiendo a ciclistas, atletas y personas con asma o alergias elegir los caminos más saludables en tiempo real.',
      en: '99% of the world breathes unhealthy air. Nodos was born to address that: an app integrating Barcelona’s air-quality sensor data with a routing system, letting cyclists, athletes and people with asthma or allergies choose the healthiest paths in real time.'
    },
    blocks: [
      { compares: [
        { lo: 'assets/work/nodos-home-low.png', hi: 'assets/work/nodos-home-high.png', alt: { es: 'Nodos: Inicio', en: 'Nodos: Home' } },
        { lo: 'assets/work/nodos-aprende-low.png', hi: 'assets/work/nodos-aprende-high.jpg', alt: { es: 'Nodos: Aprende', en: 'Nodos: Learn' } },
        { lo: 'assets/work/nodos-detalle-low.png', hi: 'assets/work/nodos-detalle-high.jpg', alt: { es: 'Nodos: Detalle del consejo', en: 'Nodos: Tip detail' } }
      ] },
      { h: { es: 'Contexto', en: 'Context' }, p: {
        es: ['El equipo busca promover cambios positivos en el bienestar de los habitantes de Barcelona y en la salud medioambiental de la ciudad, usando datos de calidad del aire en tiempo real de CALIOPE y el Mapa de Calles Saludables de Barcelona.', 'Proyecto realizado en equipo con Álvaro Villegas, Angela García, Iván Lopez y Josefa Lozano.'],
        en: ['The team set out to drive positive change in the wellbeing of Barcelona’s residents and the city’s environmental health, using real-time air-quality data from CALIOPE and Barcelona’s Healthy Streets Map.', 'A team project with Álvaro Villegas, Angela García, Iván Lopez and Josefa Lozano.']
      } },
      { h: { es: 'Desafío', en: 'Challenge' }, p: {
        es: ['En Barcelona, la salud física y mental se ve afectada por contaminantes como NO2 y PM2.5, la falta de espacios verdes y el alto ruido urbano. La movilidad no sostenible limita la actividad física necesaria.', 'Hay poca conciencia pública sobre los riesgos de la mala calidad del aire, dificultando la adopción de alternativas de movilidad más saludables.'],
        en: ['In Barcelona, physical and mental health is affected by pollutants like NO2 and PM2.5, lack of green space and high urban noise. Unsustainable mobility limits much-needed physical activity.', 'Public awareness of poor air-quality risks is low, making it hard to adopt healthier mobility alternatives.']
      } },
      { h: { es: 'Investigación', en: 'Research' }, list: {
        es: ['Encuestas: el 62% desconocía la calidad del aire que respiraba.', 'Observación: personas haciendo actividad al aire libre en zonas contaminadas sin saberlo.', 'Entrevistas: pacientes con asma y atletas destacaron la falta de información en tiempo real para planificar rutas seguras.', 'Benchmark: comparación con apps similares para identificar oportunidades de mejora.'],
        en: ['Surveys: 62% didn’t know the quality of the air they were breathing.', 'Observation: people exercising outdoors in polluted areas without knowing.', 'Interviews: asthma patients and athletes highlighted the lack of real-time information to plan safe routes.', 'Benchmark: compared similar apps to identify improvement opportunities.']
      }, p: {
        es: ['Resultado: una plataforma con información en tiempo real y rutas personalizadas que priorizan salud y sostenibilidad.'],
        en: ['Result: a platform with real-time information and personalized routes that prioritize health and sustainability.']
      } },
      { h: { es: 'Arquitectura de la App', en: 'App Architecture' }, p: {
        es: ['Tres puntos de acceso: login, entrada como invitado o creación de cuenta.'],
        en: ['Three entry points: log in, continue as guest, or create an account.']
      }, list: {
        es: ['Mapa y Rutas: crear rutas nuevas, acceder a las guardadas, iniciar/finalizar recorridos y ver resúmenes con datos de calidad del aire.', 'Aprender: contenido por pronóstico, salud, deporte, hogar y calles, con consejos diarios personalizados.', 'Perfil: datos personales y ajustes personalizables.'],
        en: ['Map & Routes: create new routes, access saved ones, start/finish trips and see summaries with air-quality data.', 'Learn: content by forecast, health, sport, home and streets, with personalized daily tips.', 'Profile: personal data and customizable settings.']
      } },
      { quote: {
        es: 'Nodos es un servicio digital que proporciona datos precisos en tiempo real sobre la calidad del aire, ayudándote a convertir tus trayectos urbanos en Barcelona en experiencias más saludables.',
        en: 'Nodos is a digital service that provides accurate, real-time air-quality data, helping turn your urban trips around Barcelona into healthier experiences.'
      } },
      { h: { es: 'Aprendizajes', en: 'Learnings' }, p: {
        es: ['Comunicar temas complejos como la calidad del aire y explorar distintas representaciones de diseño fue el mayor aprendizaje del proyecto.', 'Destacó la importancia del trabajo en equipo, la retroalimentación constante y la iteración: la colaboración aseguró un producto funcional, alineado con las necesidades de los usuarios y la viabilidad técnica.'],
        en: ['Communicating complex topics like air quality and exploring different design representations was the biggest learning of the project.', 'Teamwork, constant feedback and iteration stood out: collaboration ensured a functional product aligned with user needs and technical feasibility.']
      } }
    ],
    prev: { id: 'welly', title: 'Welly', sub: { es: 'E-Commerce · UX/UI · ELISAVA', en: 'E-Commerce · UX/UI · ELISAVA' } },
    next: { id: 'casona', title: 'Modo Casona', sub: { es: 'CX Management · Web Design', en: 'CX Management · Web Design' } }
  },

  casona: {
    index: '04',
    kicker: { es: 'Proyecto Personal · End-to-End', en: 'Personal Project · End-to-End' },
    title: 'Modo Casona',
    lede: {
      es: 'Gestión creativa y experiencia de cliente en un centro cultural en Montevideo durante 5 años, coordinando equipos, proyectos y comunidad. Además, diseño y desarrollo de su web oficial con sincronización automática Notion — GitHub.',
      en: 'Creative management and client experience at a cultural center in Montevideo over 5 years, coordinating teams, projects and community. Plus design and development of its official website with automatic Notion — GitHub sync.'
    },
    tags: ['CX Management', 'Web Design', 'Vibecoding', 'Liderazgo'],
    meta: [
      { l: { es: 'Rol', en: 'Role' }, v: { es: 'Creative Project Manager & Web Designer', en: 'Creative Project Manager & Web Designer' } },
      { l: { es: 'Contexto', en: 'Context' }, v: { es: 'Mayo 2019 - Feb 2024 · Montevideo, Uruguay', en: 'May 2019 - Feb 2024 · Montevideo, Uruguay' } },
      { l: { es: 'Herramientas', en: 'Tools' }, v: { es: 'Claude Code · Notion · GitHub Actions · Figma', en: 'Claude Code · Notion · GitHub Actions · Figma' } }
    ],
    overview: {
      es: '5 años liderando la experiencia completa de un espacio cultural: desde la gestión de equipos hasta el canal digital. Sin agencia, sin intermediarios.',
      en: '5 years leading the full experience of a cultural space: from team management to the digital channel. No agency, no middlemen.'
    },
    blocks: [
      { h: { es: 'Gestión de Proyectos', en: 'Project Management' }, p: {
        es: ['Lideré proyectos creativos de principio a fin: coordiné equipos multidisciplinarios gestionando recursos, tiempos y presupuesto con metodologías ágiles.'],
        en: ['I led creative projects end to end: coordinating multidisciplinary teams while managing resources, timelines and budget with agile methodologies.']
      } },
      { h: { es: 'Experiencia de Cliente', en: 'Client Experience' }, p: {
        es: ['Diseñé experiencias alineadas con la identidad del espacio y su comunidad, desarrollando soluciones que fortalecieron el vínculo entre el espacio y sus usuarios.'],
        en: ['I designed experiences aligned with the space’s identity and community, developing solutions that strengthened the bond between the space and its users.']
      } },
      { h: { es: 'Web Design & Vibecoding', en: 'Web Design & Vibecoding' }, p: {
        es: ['Web para una casa patrimonial de 1896 en Ciudad Vieja. Agenda dinámica sincronizada desde Notion vía GitHub Actions. El equipo actualiza contenido sin tocar código.', 'Accesibilidad validada con una herramienta de auditoría de navegación construida en Claude, creada específicamente para este proyecto.'],
        en: ['A website for a heritage house built in 1896 in Ciudad Vieja. A dynamic agenda synced from Notion via GitHub Actions. The team updates content without touching code.', 'Accessibility validated with a navigation-audit tool built in Claude, created specifically for this project.']
      } },
      { h: { es: 'Aprendizajes', en: 'Learnings' }, list: {
        es: ['Gestionar equipos creativos requiere tanto criterio de diseño como habilidades de liderazgo.', 'La experiencia de cliente empieza antes de llegar al espacio físico.', 'Automatizar procesos libera al equipo para enfocarse en lo que importa.', '5 años en el mismo proyecto enseñan más que 5 proyectos en un año.'],
        en: ['Managing creative teams takes design judgment as much as leadership skills.', 'Client experience starts before people ever reach the physical space.', 'Automating processes frees the team to focus on what matters.', '5 years on the same project teach more than 5 projects in one year.']
      } },
      { illustrations: true, caption: {
        es: 'Tres piezas visuales sin texto — el espacio, la agenda viva y la auditoría de accesibilidad construida a medida.',
        en: 'Three wordless visual pieces — the space, the living agenda, and the purpose-built accessibility audit.'
      } },
      { browser: 'assets/work/casona-real-index.png', url: 'modocasona.com', alt: {
        es: 'Home de modocasona.com', en: 'modocasona.com home' }, caption: {
        es: 'Captura real del sitio en producción — modocasona.com. Scrolleá dentro del navegador para recorrerlo.',
        en: 'Real capture of the live site — modocasona.com. Scroll inside the browser to walk through it.'
      } }
    ],
    prev: { id: 'nodos', title: 'Nodos', sub: { es: 'App Móvil · UX/UI · Máster', en: 'Mobile App · UX/UI · Master’s' } },
    next: null
  }
};
