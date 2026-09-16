import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Volume2, VolumeX } from "lucide-react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const iniciarExperiencia = async (conSonido) => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = !conSonido;
      audio.volume = 0.45;

      try {
        await audio.play();
      } catch (error) {
        console.warn("No fue posible reproducir el audio:", error);
      }
    }

    setMostrarModal(false);
    setMostrarContenido(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* IMAGEN PRINCIPAL */}
      <motion.img
        src="/portada.jpg"
        alt="Jonathan y Paola"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 1.08,
              }
        }
        transition={{
          opacity: {
            duration: 1.3,
          },
          scale: {
            duration: 8,
            ease: "easeOut",
          },
        }}
      />

      {/* OSCURECIMIENTO GENERAL */}
      <div className="absolute inset-0 bg-black/20" />

      {/* DEGRADADO SUPERIOR */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* DEGRADADO INFERIOR */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

      {/* OSCURECIMIENTO LATERAL PARA COMPUTADORA */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/35 via-transparent to-black/15 md:block" />

      {/* MARCOS */}
      <div className="pointer-events-none absolute inset-3 z-20 border border-white/30 sm:inset-5 md:inset-7" />

      <div className="pointer-events-none absolute inset-[18px] z-20 border border-white/10 sm:inset-7 md:inset-9" />

      {/* CONTENIDO SOBRE LA IMAGEN */}
      <motion.div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          items-center
          justify-between
          px-6
          pb-6
          pt-16
          text-center
          sm:px-8
          sm:pb-8
          sm:pt-20
          md:px-12
          md:pb-10
          md:pt-10
        "
        initial={{
          opacity: 0,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
      >
        {/* NOMBRES EN LA PARTE SUPERIOR */}
        <motion.h1
          className="
            w-full
            font-serif
            text-[3.6rem]
            font-normal
            leading-[0.78]
            tracking-[-0.055em]
            text-white
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]
            sm:text-[4.8rem]
            md:text-[5.8rem]
            lg:text-[5.8rem]
          "
          initial={{
            opacity: 0,
            y: -35,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 1.1,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Jonathan

          <span
            className="
              my-2
              block
              font-cursiveDancing
              text-[2.6rem]
              font-normal
              leading-none
              text-[#E6C98D]
              drop-shadow-md
              sm:text-[3.5rem]
              md:my-3
              md:text-[4rem]
            "
          >
            &
          </span>

          Paola
        </motion.h1>

        {/* ESPACIO CENTRAL */}
        <div className="flex-1" />

        {/* CUENTA REGRESIVA */}
        <motion.div
          className="
            w-full
            max-w-[620px]
            rounded-[24px]
            border
            border-white/25
            bg-black/25
            px-3
            py-4
            shadow-[0_18px_55px_rgba(0,0,0,0.30)]
            backdrop-blur-md
            sm:px-6
            sm:py-5
          "
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <p className="mb-4 text-[8px] uppercase tracking-[0.45em] text-white/75 sm:text-[9px]">
            Faltan
          </p>

          <Countdown targetDate="2026-11-27T13:00:00" />
        </motion.div>
      </motion.div>

      {/* INDICADOR DE MÚSICA */}
      {!mostrarModal && (
        <motion.div
          className="
            absolute
            right-7
            top-7
            z-30
            flex
            items-center
            gap-3
            md:right-12
            md:top-12
          "
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <p className="hidden text-[9px] uppercase tracking-[0.35em] text-white drop-shadow-md sm:block">
            Nuestra canción
          </p>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/15
              text-white
              shadow-md
              backdrop-blur-md
            "
          >
            <Music2 size={16} strokeWidth={1.5} />
          </div>
        </motion.div>
      )}

      {/* =========================================
          VENTANA EMERGENTE DE MÚSICA
      ========================================== */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-[#1F2C23]/75
              px-5
              py-8
              backdrop-blur-[9px]
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
              duration: 0.45,
            }}
          >
            <motion.div
              className="
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                rounded-t-[150px]
                border
                border-[#98AD91]/60
                bg-[#F5F5EF]
                px-7
                pb-9
                pt-20
                text-center
                shadow-[0_30px_100px_rgba(20,35,25,0.55)]
                sm:px-9
                sm:pb-10
                sm:pt-24
              "
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* TEXTURA DE PAPEL */}
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
                  inset-2
                  rounded-t-[142px]
                  border
                  border-[#C9D0B8]
                "
              />

              {/* RAMA BOTÁNICA IZQUIERDA */}
              <svg
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-9
                  top-10
                  h-44
                  w-36
                  rotate-[15deg]
                  text-[#4D6953]/25
                "
                viewBox="0 0 250 320"
                fill="none"
              >
                <path
                  d="M31 310C76 241 95 175 111 97C118 61 132 32 159 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M95 173C64 159 42 167 25 194M106 130C79 112 57 116 39 139M116 91C96 70 80 65 59 74M85 212C113 207 134 218 146 242M106 144C133 143 151 155 163 177M125 67C146 69 162 81 171 99"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M27 194C46 181 65 180 94 174C74 202 52 207 27 194ZM40 139C58 126 78 123 105 130C82 151 60 154 40 139ZM59 74C80 68 97 74 115 91C91 96 73 91 59 74ZM86 212C108 206 130 217 145 241C118 239 99 230 86 212ZM107 144C132 140 151 153 162 176C137 175 118 164 107 144ZM126 67C147 68 161 80 170 98C149 96 135 86 126 67Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>

              {/* RAMA BOTÁNICA DERECHA */}
              <svg
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-9
                  top-10
                  h-44
                  w-36
                  -rotate-[15deg]
                  scale-x-[-1]
                  text-[#4D6953]/25
                "
                viewBox="0 0 250 320"
                fill="none"
              >
                <path
                  d="M31 310C76 241 95 175 111 97C118 61 132 32 159 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M95 173C64 159 42 167 25 194M106 130C79 112 57 116 39 139M116 91C96 70 80 65 59 74M85 212C113 207 134 218 146 242M106 144C133 143 151 155 163 177M125 67C146 69 162 81 171 99"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M27 194C46 181 65 180 94 174C74 202 52 207 27 194ZM40 139C58 126 78 123 105 130C82 151 60 154 40 139ZM59 74C80 68 97 74 115 91C91 96 73 91 59 74ZM86 212C108 206 130 217 145 241C118 239 99 230 86 212ZM107 144C132 140 151 153 162 176C137 175 118 164 107 144ZM126 67C147 68 161 80 170 98C149 96 135 86 126 67Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>

              {/* CONTENIDO */}
              <div className="relative z-10">
                {/* ICONO DE MÚSICA */}
                <motion.div
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
                    shadow-[0_10px_28px_rgba(77,105,83,0.15)]
                  "
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Music2 size={21} strokeWidth={1.4} />
                </motion.div>

                {/* ETIQUETA */}
                <p
                  className="
                    mt-6
                    text-[8px]
                    uppercase
                    tracking-[0.48em]
                    text-[#98AD91]
                    sm:text-[9px]
                  "
                >
                  Bienvenidos
                </p>

                {/* TÍTULO */}
                <h2
                  className="
                    mt-3
                    font-serif
                    text-[1.75rem]
                    font-normal
                    leading-tight
                    text-[#30382F]
                    sm:text-[1.9rem]
                  "
                >
                  Nuestra historia

                  <span
                    className="
                      mt-1
                      block
                      font-serif
                      italic
                      text-[#4D6953]
                    "
                  >
                    también tiene una canción
                  </span>
                </h2>

                {/* DIVISOR */}
                <div
                  className="
                    mx-auto
                    my-5
                    flex
                    w-full
                    max-w-[150px]
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px flex-1 bg-[#98AD91]/60" />

                  <span className="h-1.5 w-1.5 rotate-45 border border-[#4D6953]" />

                  <span className="h-px flex-1 bg-[#98AD91]/60" />
                </div>

                {/* DESCRIPCIÓN */}
                <p
                  className="
                    mx-auto
                    max-w-[270px]
                    text-sm
                    leading-6
                    text-[#59665B]
                  "
                >
                  Elige cómo deseas disfrutar esta invitación.
                </p>

                {/* BOTONES */}
                <div className="mt-7 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => iniciarExperiencia(true)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-sm
                      bg-[#4D6953]
                      px-5
                      py-3.5
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white
                      shadow-[0_12px_30px_rgba(77,105,83,0.22)]
                      transition
                      duration-300
                      hover:bg-[#3E5845]
                    "
                  >
                    <Volume2
                      size={15}
                      strokeWidth={1.5}
                      className="transition duration-300 group-hover:scale-110"
                    />

                    Activar sonido
                  </button>

                  <button
                    type="button"
                    onClick={() => iniciarExperiencia(false)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-sm
                      border
                      border-[#98AD91]
                      bg-transparent
                      px-5
                      py-3.5
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#4D6953]
                      transition
                      duration-300
                      hover:bg-[#E1E4D8]
                    "
                  >
                    <VolumeX
                      size={15}
                      strokeWidth={1.5}
                      className="transition duration-300 group-hover:scale-110"
                    />

                    Continuar en silencio
                  </button>
                </div>

                {/* NOMBRES */}
                <p
                  className="
                    mt-6
                    font-serif
                    text-sm
                    italic
                    text-[#718275]
                  "
                >
                Jonathan & Paola
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}