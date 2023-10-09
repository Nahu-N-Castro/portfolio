const projects = {
  artify: {
    detail: (
      <>
        <div className="text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
          <p className="my-1">
            Artify es una plataforma de E-commerce diseñada para que los
            artesanos puedan vender y publicar de manera fácil y cómoda. Esta
            herramienta asiste a los usuarios al encontrar productos por ciudad,
            precio y categorías. Además, ofrece opciones de ordenamiento y
            filtros avanzados.
          </p>
          <p className="my-1">
            Los usuarios pueden registrarse en Artify a través de Google o
            creando una cuenta localmente. En caso de olvidar la contraseña,
            cuentan con una opción para recuperarla.
          </p>
          <p className="my-1">
            La plataforma presenta una pantalla principal donde se exhiben las
            publicaciones actuales, y se incluye una barra de búsqueda para
            facilitar la localización de productos.
          </p>
          <p className="my-1">
            Artify otorga a los artesanos la posibilidad de tener su propio
            perfil, en el cual se muestra su número de teléfono, redes sociales
            y sus respectivas publicaciones. Además, las publicaciones en Artify
            disponen de un sistema de reseñas, permitiendo a los usuarios
            informarse previamente y, posterior a una compra, proporcionar su
            propia reseña.
          </p>
          <p className="my-1">
            Los visitantes pueden navegar por la página libremente, añadir uno o
            varios productos al carrito y, previo a realizar la transacción,
            editar la lista de productos seleccionados. Para asegurar
            transacciones confiables y seguras, trabajamos en conjunto con
            Mercado Pago.
          </p>
          <p className="my-1">
            Artify integra un sistema de notificaciones por correo, garantizando
            que el usuario esté informado sobre sus acciones en la plataforma.
            Tanto usuarios como vendedores cuentan con un panel de control donde
            pueden visualizar distintos tipos de métricas para analizar sus
            compras o ventas en el sitio.
          </p>

          <section className="flex flex-col">
            <div className="flex flex-row">
              <h2 className="font-bold mr-2">Stack: </h2>
              <p className="italic">
                JavaScript, Next.js, Tailwind, Prisma, NodeJs, PostgreSQL
              </p>
            </div>
            <div className="flex flex-row">
              <h2 className="font-bold  mr-2">Frameworks: </h2>
              <p className="italic">
                React, Next Auth, Redux Toolkit, Nodemailer, Uploadthing,
                Checkout Pro (MP)
              </p>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://artify-3.vercel.app/">
            <button className="mt-3 mx-2 border-0 font-bold focus:outline-none px-4 py-2 rounded-md text-white bg-rose-700">
              Visitar
            </button>
          </a>
          <a href="https://github.com/ignaciocenni/artify">
            <button className="mt-3 mx-2 border-0 font-bold focus:outline-none px-4 py-2 rounded-md text-white bg-rose-700">
              Ver en Github
            </button>
          </a>
        </div>
      </>
    ),
    overview: (
      <>
        <div className="text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
          <p className="mb-3">
            Durante el desarrollo del proyecto grupal en Henry, lideré el diseño
            frontend, creando la estética y estructura visual desde cero. Estas
            son algunas de las habilidades y experiencias que obtuve:
          </p>

          <ul className="list-disc pl-5 mb-3">
            <li>
              Creación y prototipado de interfaces en <strong>Figma</strong>,
              definiendo la experiencia de usuario y transformando ideas en
              diseños visuales funcionales.
            </li>
            <li>
              Implementación de diseños con <strong>Tailwind</strong>, lo que me
              permitió construir un sitio web estético y altamente optimizado.
              El dominio de esta herramienta mejoró enormemente mis habilidades
              en diseño web y desarrollo frontend.
            </li>
            <li>
              Integración de tecnologías como <strong>Next.js</strong> y{" "}
              <strong>Next Auth</strong> para potenciar la funcionalidad y
              seguridad del sitio.
            </li>
            <li>
              Trabajo en equipo, donde la comunicación y colaboración fueron
              esenciales para lograr los objetivos del proyecto. Esta
              experiencia reforzó mi capacidad para colaborar en proyectos
              multidisciplinarios y adaptarme a los desafíos en tiempo real.
            </li>
          </ul>

          <p>
            En resumen, este proyecto no solo fortaleció mis habilidades
            técnicas en diseño y desarrollo web, sino que también reafirmó la
            importancia de la colaboración y la comunicación en proyectos de
            equipo.
          </p>
        </div>
      </>
    ),
  },
  pokedex: {
    detail: (
      <>
        <div className="text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
          <p className="my-1">
            La Pokédex cuenta con una página principal que ofrece paginación,
            facilitando la exploración de los diferentes Pokémon.
          </p>

          <p className="my-1">
            Los usuarios tienen la opción de filtrar y ordenar estos Pokémon
            según sus preferencias. Además, la barra de búsqueda permite
            localizar Pokémon específicos tanto por su ID como por su nombre.
          </p>

          <p className="my-1">
            Al seleccionar un Pokémon, se puede acceder a una página detallada
            que muestra todas sus estadísticas.
          </p>

          <p className="my-1">
            Como característica adicional, la plataforma brinda un apartado
            especial para crear y registrar un nuevo Pokémon, permitiendo al
            usuario introducir y almacenar sus respectivas estadísticas.
          </p>

          <section className="flex flex-col">
            <div className="flex flex-row">
              <h2 className="font-bold mr-2">Stack: </h2>
              <p className="italic">
                JavaScript, Vite.js, CSS, NodeJs, Express.Js, Sequelize,
                PostgreSQL
              </p>
            </div>
            <div className="flex flex-row">
              <h2 className="font-bold  mr-2">Frameworks: </h2>
              <p className="italic">React, Redux</p>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://github.com/Nahu-N-Castro/pokemon-spa">
            <button className="mt-3 mx-2 border-0 font-bold focus:outline-none px-4 py-2 rounded-md text-white bg-rose-700">
              Ver en Github
            </button>
          </a>
        </div>
      </>
    ),
    overview: (
      <div className="p-4 text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
        <p className="mb-3">
          Durante las intensas semanas en el bootcamp de Henry, sumergí en
          diversas tecnologías, construyendo un proyecto integral.
        </p>

        <ul className="list-disc pl-5 mb-3">
          <li>
            Adquirí destrezas avanzadas en <strong>JavaScript</strong>,
            manejando programación asincrónica y manipulación del DOM.
          </li>
          <li>
            Exploré <strong>Vite.js</strong> y sus optimizaciones para
            desarrollo y producción.
          </li>
          <li>
            Creé interfaces con <strong>CSS</strong> animaciones.
          </li>
          <li>
            Configuré servidores con <strong>NodeJs & Express.Js</strong>,
            integrándome con bases de datos y otros servicios.
          </li>
          <li>
            Manejé datos y relaciones en <strong>Sequelize & PostgreSQL</strong>
            .
          </li>
          <li>
            Construí componentes reactivos con <strong>React & Redux</strong>,
            gestionando estado global y optimizando la experiencia del usuario.
          </li>
        </ul>

        <p>
          Además de estas habilidades técnicas, mejoré mis habilidades blandas,
          como la gestión del tiempo y la solución autónoma de problemas. Este
          proyecto fortaleció mi base técnica y me preparó para futuros desafíos
          en desarrollo web.
        </p>
      </div>
    ),
  },
  rym: {
    detail: (
      <>
        <div className="text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
          <p className="my-1">
            Rick and Morty Integrator representó mi primera inmersión profunda
            en el mundo del desarrollo web. A través de esta plataforma, los
            usuarios pueden descubrir personajes de la serie, conocer detalles
            sobre ellos y personalizar su experiencia con opciones de filtrado,
            ordenamiento y búsqueda.
          </p>
          <p className="my-1">
            A pesar de ser mi primer proyecto, me esforcé por brindar una
            experiencia de usuario intuitiva. Implementé una función para que
            los fanáticos marquen a sus personajes favoritos, buscando que cada
            usuario tenga una experiencia única.
          </p>
          <section className="flex flex-col mt-2">
            <div className="flex flex-row">
              <h2 className="font-bold mr-2">Stack: </h2>
              <p className="italic">
                JavaScript, Vite.js, CSS, NodeJs, Express.Js, Sequelize,
                PostgreSQL.
              </p>
            </div>
            <div className="flex flex-row">
              <h2 className="font-bold mr-2">Frameworks: </h2>
              <p className="italic">React, Redux.</p>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://github.com/Nahu-N-Castro/rickmortyapp">
            <button className="mt-3 mx-2 border-0 font-bold focus:outline-none px-4 py-2 rounded-md text-white bg-rose-700">
              Ver en Github
            </button>
          </a>
        </div>
      </>
    ),
    overview: (
      <>
        <div className="text-white bg-neutral-800 border-neutral-800 border-[12px] rounded-b-xl rounded-tr-xl max-h-[25rem] sm:max-h-[10rem] overflow-y-scroll ">
          <p className="mb-3">
            Durante el desarrollo del proyecto Rick and Morty Integrator, me
            embarqué en un emocionante viaje de descubrimiento y aprendizaje.
            Aquí están algunas reflexiones y habilidades adquiridas:
          </p>

          <ul className="list-disc pl-5 mb-3">
            <li>
              Descubrí el poder de <strong>React</strong> y{" "}
              <strong>Redux</strong> y cómo estas herramientas pueden
              transformar ideas en aplicaciones interactivas y dinámicas.
            </li>
            <li>
              Aprendí a consumir y trabajar con APIs, en este caso la de Rick
              and Morty, lo que me dio una comprensión fundamental sobre la
              gestión de datos y su presentación.
            </li>
            <li>
              Fortalecí mis fundamentos en diseño UX/UI, entendiendo la
              importancia de una interfaz amigable y cómo puede influir en la
              experiencia del usuario.
            </li>
            <li>
              La colaboración y el trabajo en equipo se convirtieron en pilares
              de este proyecto, aprendiendo la importancia de la comunicación y
              cómo compartir ideas y feedback puede mejorar enormemente el
              resultado final.
            </li>
          </ul>

          <p>
            Este proyecto fue un punto de partida para mí, marcando el comienzo
            de mi pasión y carrera en el desarrollo web. Agradezco cada desafío
            y obstáculo, ya que me dieron la oportunidad de crecer y aprender.
          </p>
        </div>
      </>
    ),
  },
};

export default projects;
