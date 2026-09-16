// AlbumCompartido.jsx

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Images,
  ArrowUpRight,
  Download,
  X,
} from "lucide-react";

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

export default function AlbumCompartido() {
  const [open, setOpen] = useState(false);

  /* CERRAR MODAL CON ESCAPE */
  useEffect(() => {
    if (!open) return undefined;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =========================================
          SECCIÓN ÁLBUM COMPARTIDO
      ========================================== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          isolate
          overflow-hidden
          bg-[#98AD91]
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
            opacity-[0.045]
            mix-blend-multiply
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />

        {/* MARCOS */}
        <div
          className="
            pointer-events-none
            absolute
            inset-4
            border
            border-white/35
            sm:inset-7
            md:inset-10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-[22px]
            border
            border-[#4D6953]/20
            sm:inset-9
            md:inset-12
          "
        />

        {/* RAMA BOTÁNICA SUPERIOR */}
        <svg
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-14
            -top-12
            -z-10
            h-72
            w-60
            rotate-180
            text-[#4D6953]/25
            sm:h-96
            sm:w-80
          "
          viewBox="0 0 250 320"
          fill="none"
        >
          <path
            d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <path
            d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <path
            d="M25 194C45 179 67 179 96 176C76 203 51 208 25 194ZM39 140C59 124 82 122 107 133C83 153 60 155 39 140ZM60 74C82 67 99 73 117 92C93 96 75 91 60 74ZM86 216C112 207 135 219 149 244C120 241 101 231 86 216ZM108 146C134 142 154 156 165 180C139 178 120 166 108 146ZM128 67C149 67 165 81 174 101C151 98 137 87 128 67Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </svg>

        {/* RAMA BOTÁNICA INFERIOR */}
        <svg
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-14
            -z-10
            h-72
            w-60
            text-[#4D6953]/25
            sm:h-96
            sm:w-80
          "
          viewBox="0 0 250 320"
          fill="none"
        >
          <path
            d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <path
            d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* ENCABEZADO */}
          <motion.div
            className="
              mx-auto
              mb-14
              flex
              max-w-2xl
              flex-col
              items-center
              text-center
            "
            initial={{
              opacity: 0,
              y: 25,
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
            }}
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#30382F]
                sm:text-[10px]
              "
            >
              Comparte tus recuerdos
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-4xl
                font-normal
                text-black
                sm:text-5xl
                md:text-6xl
              "
            >
              Álbum compartido
            </h2>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#4D6953]/70 sm:w-20" />

              <span className="h-2 w-2 rotate-45 border border-[#30382F]" />

              <span className="h-px w-12 bg-[#4D6953]/70 sm:w-20" />
            </div>

            <p
              className="
                mt-6
                max-w-xl
                font-serif
                text-lg
                italic
                leading-relaxed
                text-black
                sm:text-xl
              "
            >
              Cada fotografía será parte de los recuerdos que
              guardaremos de este día.
            </p>
          </motion.div>

          {/* CONTENIDO */}
          <motion.div
            className="
              relative
              mx-auto
              grid
              w-full
              max-w-5xl
              grid-cols-1
              overflow-hidden
              border
              border-[#4D6953]/45
              bg-[#F5F5EF]
              shadow-[0_28px_80px_rgba(48,56,47,0.22)]
              md:grid-cols-[1.15fr_0.85fr]
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* MARCO INTERIOR */}
            <div
              className="
                pointer-events-none
                absolute
                inset-3
                z-20
                border
                border-[#98AD91]/35
              "
            />

            {/* IMAGEN */}
            <motion.div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                border-b
                border-[#98AD91]/40
                bg-[#30382F]
                md:min-h-[620px]
                md:border-b-0
                md:border-r
              "
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/albun.png"
                alt="Fotografías del álbum compartido"
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  border
                  border-white/40
                  bg-black/25
                  px-5
                  py-4
                  text-center
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  sm:bottom-10
                  sm:left-10
                  sm:right-10
                "
              >
                <p className="text-[9px] uppercase tracking-[0.35em]">
                  Un día para recordar
                </p>
              </div>
            </motion.div>

            {/* INFORMACIÓN */}
            <motion.div
              className="
                relative
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                px-8
                py-16
                text-center
                sm:px-12
                md:min-h-[620px]
              "
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#98AD91]
                  bg-[#E1E4D8]
                  text-[#4D6953]
                "
              >
                <Images size={22} strokeWidth={1.3} />
              </div>

              <p
                className="
                  mt-7
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#4D6953]
                "
              >
                Nuestros recuerdos
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-4xl
                  font-normal
                  text-black
                  sm:text-5xl
                "
              >
                Comparte tus fotos
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#98AD91]" />

                <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />

                <span className="h-px w-10 bg-[#98AD91]" />
              </div>

              <p
                className="
                  mt-7
                  max-w-sm
                  text-sm
                  leading-7
                  text-black
                  sm:text-base
                "
              >
                Captura cada instante especial y compártelo en nuestro
                álbum para que podamos revivir juntos esta celebración.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#4D6953]
                  px-8
                  py-3.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  shadow-[0_12px_30px_rgba(77,105,83,0.22)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#30382F]
                "
              >
                Abrir álbum

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          MODAL DEL ÁLBUM
      ========================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-[#1F2C23]/80
              px-4
              py-8
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="album-modal-title"
              className="
                relative
                my-auto
                w-full
                max-w-md
                overflow-hidden
                border
                border-[#98AD91]
                bg-[#F5F5EF]
                shadow-[0_35px_100px_rgba(0,0,0,0.38)]
              "
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* TEXTURA */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                  mix-blend-multiply
                "
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
                }}
              />

              {/* MARCO INTERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  z-10
                  border
                  border-[#98AD91]/40
                "
              />

              {/* BOTÓN CERRAR */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar álbum compartido"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#98AD91]
                  bg-[#F5F5EF]
                  text-[#4D6953]
                  transition
                  duration-300
                  hover:bg-[#4D6953]
                  hover:text-white
                "
              >
                <X size={17} strokeWidth={1.5} />
              </button>

              {/* CONTENIDO DEL MODAL */}
              <div
                className="
                  relative
                  z-20
                  max-h-[88vh]
                  overflow-y-auto
                  px-7
                  py-10
                  text-center
                  sm:px-9
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#98AD91]
                    bg-[#E1E4D8]
                    text-[#4D6953]
                  "
                >
                  <Images size={21} strokeWidth={1.3} />
                </div>

                <p
                  className="
                    mt-6
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-[#4D6953]
                  "
                >
                  Comparte tus recuerdos
                </p>

                <h2
                  id="album-modal-title"
                  className="
                    mt-4
                    font-serif
                    text-4xl
                    font-normal
                    text-black
                  "
                >
                  Álbum compartido
                </h2>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-[#98AD91]" />

                  <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />

                  <span className="h-px w-10 bg-[#98AD91]" />
                </div>

                {/* APLICACIÓN */}
                <div className="mt-9">
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.38em]
                      text-[#4D6953]
                    "
                  >
                    Aplicación
                  </p>

                  <p className="mt-3 font-serif text-2xl text-black">
                    Wedshoots
                  </p>

                  <a
                    href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      bg-[#4D6953]
                      px-7
                      py-3
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#30382F]
                    "
                  >
                    <Download size={15} strokeWidth={1.5} />

                    Descargar app
                  </a>
                </div>

                {/* CÓDIGO */}
                <div className="mt-9">
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.38em]
                      text-[#4D6953]
                    "
                  >
                    Código del álbum
                  </p>

                  <div
                    className="
                      mt-4
                      border
                      border-[#98AD91]
                      bg-[#E1E4D8]
                      px-4
                      py-4
                      font-mono
                      text-xl
                      tracking-[0.24em]
                      text-black
                      shadow-inner
                      sm:text-2xl
                      sm:tracking-[0.32em]
                    "
                  >
                    MXc8268d08
                  </div>
                </div>

                {/* QR */}
                <div className="mt-9 flex justify-center">
                  <div
                    className="
                      border
                      border-[#98AD91]
                      bg-white
                      p-3
                      shadow-[0_16px_40px_rgba(48,56,47,0.14)]
                    "
                  >
                    <img
                      src="/qr.jpg"
                      alt="Código QR del álbum compartido"
                      className="
                        h-40
                        w-40
                        object-contain
                        sm:h-44
                        sm:w-44
                      "
                    />
                  </div>
                </div>

                <p
                  className="
                    mx-auto
                    mt-7
                    max-w-xs
                    font-serif
                    text-base
                    italic
                    leading-7
                    text-black
                  "
                >
                  Escanea el código QR o utiliza la aplicación para
                  compartir tus fotografías con nosotros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}