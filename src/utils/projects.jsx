const projects = {
  artify: {
    detail: (
      <>
        <div className="text-white bg-neutral-800 p-2 rounded-b-xl rounded-tr-xl ">
          <p className="my-1">
            Artify es una plataforma E-commerce para que artesanos puedan vender
            y publicar de manera facil y comoda. Ayuda al usuario a encontrar
            productos por ciudad, precios y categorias contando tambien con
            ordenamiento y filtros de productos.
          </p>
          <p className="my-1">
            Artify permite a los usuarios registrarse con Google o creando una
            cuenta de manera local. Si el usuario olvida la contraseña, podrá
            recuperala.
          </p>
          Cuenta con una pantalla principal donde se muestran todas las
          publicaciones actuales, el usuario puede buscar en la barra de
          búsqueda,
          <p className="my-1">
            Artify permite al artesano tener su propio perfil, donde encontraran
            su numero de telefono, redes sociales y tambien las publicaciones.
            Las publicaciones en artify cuentan con un sistemas de reseña, asi
            el usuario podrá saberla antes de comprar, luego podra reseñar el
            producto post compra
          </p>
          <p className="my-1">
            El usuario podra navegar libremente por la página y agregar al
            carrito uno o varios productos a la vez, luego dirigirse al carrito
            donde podra modificar toda la lista antes de realizar la
            transaccion. Para que la transacción sea confiable y segura, estamos
            trabajando a traves de Mercado Pago.
          </p>
          <p className="my-1">
            Artify cuenta con un sistemas de notificaciones por correo, para que
            el usuario lleve un seguimiento sobre sus acciones en la web. Tanto
            como le usuario como el vendedor, tendran un apartado de Panel de
            Control. Alli mismo, podran ver distintos tipos de metricas para
            analizar sus compras/ventas en la web.
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
              Web
            </button>
          </a>
          <a href="https://github.com/ignaciocenni/artify">
            <button className="mt-3 mx-2 border-0 font-bold focus:outline-none px-4 py-2 rounded-md text-white bg-rose-700">
              Github
            </button>
          </a>
        </div>
      </>
    ),
    overview: <h1 className="text-base sm:text-xl">yo hice...</h1>,
  },
  pokedex: {
    detail: (
      <>
        <h2 className="">
          Donde cuenta con un home con paginado para explorar los distintos
          Pokémons filtrándolos ordenándolos, buscando por barra de búsqueda Un
          detalle de cada Pokémon con sus estadísticas Un apartado para crear un
          nuevo Pokémon y cargar sus estadísticas
        </h2>
        <section>
          <div className="flex items-center">
            <h1 className="text-base font-bold pr-1">Front-End:</h1>
            <h3 className="text-sm"> JavaScript, Vite.js, CSS.</h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Back-End:</h1>
            <h3 className="text-sm">NodeJs, Express.Js, Sequelize.</h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Base de datos:</h1>
            <h3 className="text-sm"> PostgreSQL. </h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Frameworks:</h1>
            <h3 className="text-sm">React, Redux.</h3>
          </div>
        </section>
      </>
    ),
    overview: <h1>App de enciclopedia de Pokémons</h1>,
  },
  rym: {
    detail: (
      <>
        <h2 className="">
          Donde cuenta con un home con paginado para explorar los distintos
          personajes filtrándolos ordenándolos, buscando por barra de búsqueda
          Un detalle de cada personaje con sus estadísticas. Un apartado para
          agregar como favorito un personaje.
        </h2>
        <section>
          <div className="flex items-center">
            <h1 className="text-base font-bold pr-1">Front-End:</h1>
            <h3 className="text-sm"> JavaScript, Vite.js, CSS.</h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Back-End:</h1>
            <h3 className="text-sm">NodeJs, Express.Js, Sequelize.</h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Base de datos:</h1>
            <h3 className="text-sm"> PostgreSQL. </h3>
          </div>
          <div className="flex items-center">
            <h1 className="text-base  font-bold pr-1">Frameworks:</h1>
            <h3 className="text-sm">React, Redux.</h3>
          </div>
        </section>
      </>
    ),
    overview: <h1>App de Rick & Morty</h1>,
  },
};

export default projects;
