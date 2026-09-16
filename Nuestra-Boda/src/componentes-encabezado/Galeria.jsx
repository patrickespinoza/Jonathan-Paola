// NuestraHistoria.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

/* =========================================
    IMÁGENES Y POSICIÓN INDIVIDUAL
========================================== */
const images = [
  {
    src: "/Carrusel01v.jpeg",
    position: "center 50%",
  },
  {
    src: "/Carrusel02.jpeg",
    position: "center 50%",
  },
  {
    src: "/Carrusel03.jpeg",
    position: "center 50%",
  },
  {
    src: "/Carrusel04.jpeg",
    position: "center 50%",
  },
  {
    src: "/Carrusel05.jpeg",
    position: "center 60%",
  },
  {
    src: "/Carrusel06.jpeg",
    position: "60% 50%",
  },
  {
    src: "/Carrusel07.jpeg",
    position: "center 50%",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NuestraHistoria() {
  const [index, setIndex] = useState(0);
  const [imagenesCargadas, setImagenesCargadas] = useState(false);

  /* =========================================
      PRECARGA DE LAS SIETE IMÁGENES
  ========================================== */
  useEffect(() => {
    let imagenesTerminadas = 0;
    let componenteMontado = true;

    images.forEach(({ src }) => {
      const image = new Image();

      const finalizarCarga = () => {
        imagenesTerminadas += 1;

        if (
          componenteMontado &&
          imagenesTerminadas === images.length
        ) {
          setImagenesCargadas(true);
        }
      };

      image.onload = finalizarCarga;
      image.onerror = finalizarCarga;
      image.src = src;
    });

    return () => {
      componenteMontado = false;
    };
  }, []);

  /* =========================================
      CAMBIO AUTOMÁTICO
  ========================================== */
  useEffect(() => {
    if (!imagenesCargadas || images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [imagenesCargadas]);

  const nextImage = () => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  const prevImage = () => {
    setIndex((prevIndex) => {
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  const selectImage = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#F5F5EF]
        px-5
        py-24
        sm:px-8
        md:py-32
      "
    >
      {/* TEXTURA DE PAPEL */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.035]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* MARCO EXTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#98AD91]/40
          sm:inset-7
          md:inset-10
        "
      />

      {/* MARCO INTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[22px]
          border
          border-white/80
          sm:inset-9
          md:inset-12
        "
      />

      {/* =========================================
          DECORACIÓN BOTÁNICA SUPERIOR
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          -top-10
          -z-10
          h-64
          w-52
          rotate-180
          text-[#4D6953]/18
          sm:h-80
          sm:w-64
        "
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M25 194C45 179 67 179 96 176C76 203 51 208 25 194ZM39 140C59 124 82 122 107 133C83 153 60 155 39 140ZM60 74C82 67 99 73 117 92C93 96 75 91 60 74ZM86 216C112 207 135 219 149 244C120 241 101 231 86 216ZM108 146C134 142 154 156 165 180C139 178 120 166 108 146ZM128 67C149 67 165 81 174 101C151 98 137 87 128 67Z"
          fill="currentColor"
          fillOpacity="0.16"
        />
      </svg>

      {/* =========================================
          DECORACIÓN BOTÁNICA INFERIOR
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-12
          -z-10
          h-64
          w-52
          text-[#4D6953]/20
          sm:h-80
          sm:w-64
        "
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* =========================================
            ENCABEZADO
        ========================================== */}
        <div
          className="
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          <motion.div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#98AD91]
              bg-[#E1E4D8]
              text-[#4D6953]
            "
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <Heart size={18} strokeWidth={1.35} />
          </motion.div>

          <motion.p
            className="
              mt-6
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#4D6953]
              sm:text-[10px]
            "
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            Un recorrido por nuestros recuerdos
          </motion.p>

          <motion.h2
            className="
              mt-4
              font-serif
              text-4xl
              font-normal
              text-black
              sm:text-5xl
              md:text-6xl
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Nuestra historia
          </motion.h2>

          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{
              opacity: 0,
              scaleX: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
            }}
          >
            <span className="h-px w-12 bg-[#98AD91] sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />

            <span className="h-px w-12 bg-[#98AD91] sm:w-20" />
          </motion.div>

        </div>

        {/* =========================================
            CARRUSEL INTEGRADO
        ========================================== */}
        <motion.div
          className="
            relative
            mx-auto
            mt-14
            w-full
            max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* SOMBRA */}
          <div
            className="
              absolute
              inset-x-10
              bottom-16
              h-16
              rounded-full
              bg-black/15
              blur-2xl
            "
          />

          {/* MARCO DE LA FOTOGRAFÍA */}
          <div
            className="
              relative
              border
              border-[#98AD91]
              bg-[#E1E4D8]
              p-3
              shadow-[0_28px_85px_rgba(48,56,47,0.20)]
              sm:p-5
              md:p-6
            "
          >
            {/* MARCO INTERIOR */}
            <div
              className="
                pointer-events-none
                absolute
                inset-2
                border
                border-white/60
                sm:inset-3
              "
            />

            {/* ESQUINAS DECORATIVAS */}
            <span className="pointer-events-none absolute left-2 top-2 z-20 h-7 w-7 border-l border-t border-[#4D6953]/65 sm:left-3 sm:top-3" />

            <span className="pointer-events-none absolute right-2 top-2 z-20 h-7 w-7 border-r border-t border-[#4D6953]/65 sm:right-3 sm:top-3" />

            <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-7 w-7 border-b border-l border-[#4D6953]/65 sm:bottom-3 sm:left-3" />

            <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-7 w-7 border-b border-r border-[#4D6953]/65 sm:bottom-3 sm:right-3" />

            {/* IMÁGENES */}
            <div
              className="
                relative
                z-10
                h-[480px]
                w-full
                overflow-hidden
                bg-[#30382F]
                sm:h-[600px]
                md:h-[880px]
              "
            >
              {/* PANTALLA DE PRECARGA */}
              {!imagenesCargadas && (
                <div
                  className="
                    absolute
                    inset-0
                    z-40
                    flex
                    flex-col
                    items-center
                    justify-center
                    bg-[#30382F]
                  "
                >
                  <motion.div
                    className="
                      h-8
                      w-8
                      rounded-full
                      border-2
                      border-white/20
                      border-t-white
                    "
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <p
                    className="
                      mt-4
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white
                    "
                  >
                    Cargando recuerdos
                  </p>
                </div>
              )}

              {/* 
                Las siete imágenes siempre permanecen montadas.
                De esta forma nunca aparece un fondo blanco.
              */}
              {images.map((image, imageIndex) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={`Recuerdo ${imageIndex + 1} de Paola y Jonathan`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className={`
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    ease-in-out
                    ${
                      index === imageIndex
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-[1.015] opacity-0"
                    }
                  `}
                  style={{
                    objectPosition: image.position,
                  }}
                />
              ))}

              {/* OSCURECIMIENTO INFERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  z-20
                  h-24
                  bg-gradient-to-t
                  from-black/55
                  to-transparent
                "
              />

              {/* CONTADOR */}
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  z-30
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/40
                  bg-black/30
                  px-4
                  py-2
                  text-[9px]
                  tracking-[0.3em]
                  text-white
                  backdrop-blur-md
                "
              >
                {String(index + 1).padStart(2, "0")}

                <span className="mx-2 text-white/50">/</span>

                {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* =========================================
              FLECHAS E INDICADORES ABAJO
          ========================================== */}
          <div
            className="
              relative
              z-20
              mt-7
              flex
              items-center
              justify-center
              gap-4
              sm:gap-6
            "
          >
            <button
              type="button"
              onClick={prevImage}
              aria-label="Ver fotografía anterior"
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#4D6953]
                bg-[#4D6953]
                text-white
                shadow-[0_8px_22px_rgba(48,56,47,0.18)]
                transition
                duration-300
                hover:scale-105
                hover:bg-[#30382F]
                active:scale-95
              "
            >
              <ChevronLeft size={21} strokeWidth={1.5} />
            </button>

            {/* INDICADORES */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {images.map((image, imageIndex) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => selectImage(imageIndex)}
                  aria-label={`Ver fotografía ${imageIndex + 1}`}
                  aria-current={
                    index === imageIndex ? "true" : undefined
                  }
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index === imageIndex
                        ? "w-7 bg-[#4D6953]"
                        : "w-2 bg-[#98AD91]/60 hover:bg-[#98AD91]"
                    }
                  `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Ver fotografía siguiente"
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#4D6953]
                bg-[#4D6953]
                text-white
                shadow-[0_8px_22px_rgba(48,56,47,0.18)]
                transition
                duration-300
                hover:scale-105
                hover:bg-[#30382F]
                active:scale-95
              "
            >
              <ChevronRight size={21} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* =========================================
            TEXTO FINAL
        ========================================== */}
        <motion.div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-col
            items-center
            text-center
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          <span className="h-px w-16 bg-[#4D6953]" />

          <p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.38em]
              text-[#4D6953]
            "
          >
            Y lo mejor de nuestra historia
          </p>

          <p
            className="
              mt-3
              font-serif
              text-xl
              italic
              text-black
              sm:text-2xl
            "
          >
            apenas está por comenzar
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}