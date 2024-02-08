const MyProjects = () => {
  return (
    <div id="Projects" className="px-4 pt-4 pb-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-8">
      <h2 className="max-w-lg mb-4 md:mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Proyectos</h2>
      {/* PART 1 */}
      <div className="w-full flex justify-center">
        <p className="inline-block bg-emerald-200 p-2 mb-4 text-xs md:text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-center justify-center">
              Algunos proyectos en los que he trabajado
        </p>
      </div>
      <section className="pt-8 lg:pt-4 pb-2 lg:pb-2">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 xl:w-1/3">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707366598/319shots_so_oog9hh.png"
                  alt="Miniso proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-emerald-400 
                        text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Miniso México y Latam
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 h-36 leading-relaxed mb-7">
                    Implementación y mejoras de la tienda en línea de Miniso México y Latam. Utilizando tecnologías como Vtex IO, React, TypeScript, GraphQL, Node JS, entre otras.
                  </p>
                  <a
                    href="https://www.miniso.com.mx/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707367370/288shots_so_rv3cmb.png"
                  alt="Devlyn proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                      font-semibold
                      text-emerald-400 
                      text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                      "
                    >
                      Devlyn
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed h-36 mb-7">
                  Desarrollé e implementé mejoras en la tienda en línea de Devlyn, empleando tecnologías avanzadas como Vtex IO, React, TypeScript, GraphQL y Node JS, entre otras.
                  </p>
                  <a
                    href="https://www.devlyn.com.mx/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar                 
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707367371/521shots_so_amlnjr.png"
                  alt="Vianney proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                      font-semibold
                      text-emerald-400 
                      text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                      "
                    >
                      Vianney
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 h-36 leading-relaxed mb-7">
                  Contribuí al avance y optimización de la tienda virtual de Vianney, integrando tecnologías vanguardistas como Vtex IO, React, TypeScript, GraphQL y Node JS, entre otras.
                  </p>
                  <a
                    href="https://www.mivianney.com/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PART 2 */}
      <section className=" lg:pt-4 pb-4 lg:pb-2">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707368315/995shots_so_x2rcqm.png"
                  alt="Mi tienda del ahorro proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-emerald-400 
                        text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Mi tienda del ahorro
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 h-36 leading-relaxed mb-7">
                    Participación en el rediseńo de la tienda en línea Mi tienda del ahorro. Utilizando tecnologías como Vtex IO, React JS, CSS, entre otras.
                  </p>
                  <a
                    href="https://www.mitienda.mx/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707368315/232shots_so_zsjfle.png"
                  alt="Ramasa proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                      font-semibold
                      text-emerald-400 
                      text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                      "
                    >
                      Ramasa
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed h-36 mb-7">
                  Participación en el desarrollo del sitio Ramasa, empleando tecnologías avanzadas como Vtex IO, React, TypeScript, Yup, entre otras.
                  </p>
                  <a
                    href="https://www.ramasa.com.mx/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar                 
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-md">
                <img
                  src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707368315/712shots_so_r3dvgc.png"
                  alt="HEB proyecto"
                  className="w-full rounded-t-lg h-72"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                      font-semibold
                      text-emerald-400 
                      text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                      "
                    >
                      HEB
                    </a>
                  </h3>
                  <p className="text-base text-gray-600 h-36 leading-relaxed mb-7">
                  Contribuí en el desarrollo y mantenimiento de la tienda en línea de HEB, utilizando tecnologías como Vtex IO, React, TypeScript, GraphQL, Node JS, entre otras.
                  </p>
                  <a
                    href="https://www.heb.com.mx/"
                    target="_blank"
                    className="
                     inline-block
                     bg-emerald-400
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MyProjects;