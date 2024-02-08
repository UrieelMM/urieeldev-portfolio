const Hero = () => {
  return (
    <div id="Home" className="relative mt-10 lg:mt-0 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-contain w-full h-72 rounded md:h-96 lg:h-full xl:object-contain"
          src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1707346934/avatar-hdremovebg_qqmnps.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block bg-emerald-200 p-2 mb-4 text-xs md:text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Creador de código
          </p>
          <h2 className="mb-5 font-sans md:text-left text-5xl text-center font-bold tracking-tight sm:text-6xl sm:leading-none bg-gradient-to-r from-emerald-300 via-green-500 to-emerald-600  text-transparent bg-clip-text">
            Hola, soy Uriel
            <br/>
            <span className="inline-block text-deep-purple-accent-400">
              Frotend developer
            </span>
          </h2>
          <p className="pr-5 mb-5 text-center md:text-left text-base text-gray-600 md:text-lg">
            Con experiencia en proyectos ecommerces y sitios de gran escala, creando experiencias web excepcionales que han impactado a miles de usuarios.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex  bg-emerald-400 p-4 rounded-lg items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Sobre mí
            </a>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/FCMImages%2FUrielMojicaMejiaCV.pdf?alt=media&token=22acc4fa-6cf1-49df-bc3a-30d72f607dea"
              download="Uriel_Mejia_CV.pdf"
              target="blank"
              className="inline-fle items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;