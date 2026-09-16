// DireccionEvento.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowUpRight,
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

const elementos = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DireccionEvento() {
  return (
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
        flex
        min-h-[720px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#4D6953]
        px-5
        py-24
        sm:px-8
        md:py-28
      "
    >
      {/* TEXTURA SUAVE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.045]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* MARCOS DE LA SECCIÓN */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#C9D0B8]/35
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
          border-white/10
          sm:inset-9
          md:inset-12
        "
      />

      {/* =========================================
          RAMA SUPERIOR DERECHA
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-14
          -top-12
          h-64
          w-52
          rotate-180
          text-[#C9D0B8]/20
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
          RAMA INFERIOR IZQUIERDA
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-14
          h-64
          w-52
          text-[#C9D0B8]/25
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

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* ENCABEZADO */}
        <motion.div
          className="text-center"
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
            duration: 0.8,
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#C9D0B8]
              sm:text-[10px]
            "
          >
            Nuestro gran día
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-[2.6rem]
              font-normal
              leading-tight
              text-[#FFFDF8]
              sm:text-5xl
              md:text-6xl
            "
          >
            Dirección del evento
          </h2>

          <div
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-[210px]
              items-center
              gap-4
            "
          >
            <span className="h-px flex-1 bg-[#C9D0B8]/60" />

            <span className="h-2 w-2 rotate-45 border border-[#E1E4D8]" />

            <span className="h-px flex-1 bg-[#C9D0B8]/60" />
          </div>
        </motion.div>

        {/* =========================================
            TARJETA SIN IMAGEN
        ========================================== */}
        <motion.div
          className="
            relative
            mt-10
            overflow-hidden
            border
            border-[#C9D0B8]
            bg-[#F5F5EF]
            px-6
            py-10
            text-center
            shadow-[0_30px_90px_rgba(25,45,31,0.38)]
            sm:mt-12
            sm:px-10
            sm:py-12
            md:px-14
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
              border
              border-[#98AD91]/35
            "
          />

          {/* NÚMERO Y MES */}
          <motion.div
            variants={elementos}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
              relative
              z-10
              mt-5
              flex
              items-center
              justify-center
              gap-5
              sm:gap-8
            "
          >
            <span className="h-px w-10 bg-[#98AD91] sm:w-16" />

            <div className="flex flex-col items-center">
              <span
                className="
                  font-serif
                  text-7xl
                  font-normal
                  leading-none
                  text-[#4D6953]
                  sm:text-8xl
                "
              >
                27
              </span>

              <span
                className="
                  mt-3
                  text-[10px]
                  uppercase
                  tracking-[0.38em]
                  text-[#59665B]
                  sm:text-xs
                "
              >
                Noviembre
              </span>
            </div>

            <span className="h-px w-10 bg-[#98AD91] sm:w-16" />
          </motion.div>

          {/* AÑO */}
          <motion.p
            variants={elementos}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
            }}
            className="
              relative
              z-10
              mt-6
              font-serif
              text-2xl
              tracking-[0.28em]
              text-[#30382F]
            "
          >
            2026
          </motion.p>

          {/* LÍNEA */}
          <div className="relative z-10 mx-auto my-8 h-px w-full max-w-lg bg-[#98AD91]/40" />

          {/* FECHA Y HORA */}
          <div
            className="
              relative
              z-10
              gap-7
              sm:gap-0
            "
          >

            {/* HORA */}
            <motion.div
              variants={elementos}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
              }}
              className="flex flex-col items-center"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#98AD91]
                  bg-[#E1E4D8]
                  text-[#4D6953]
                "
              >
                <Clock3 size={19} strokeWidth={1.4} />
              </div>

              <p
                className="
                  mt-4
                  text-[15px]
                  uppercase
                  tracking-[0.35em]
                  text-[#30382F]
                "
              >
                Hora
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-xl
                  text-[#30382F]
                "
              >
                1:00 p. m.
              </p>
            </motion.div>
          </div>

          {/* UBICACIÓN */}
          <motion.div
            variants={elementos}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
            }}
            className="
              relative
              z-10
              mt-8
              border-t
              border-[#98AD91]/40
              pt-8
            "
          >
            <MapPin
              size={22}
              strokeWidth={1.4}
              className="mx-auto text-[#4D6953]"
            />

            <p
              className="
                mt-4
                text-[13px]
                uppercase
                tracking-[0.4em]
                text-[#30382F]
              "
            >
              Ubicación
            </p>

            <p
              className="
                mt-3
                font-serif
                text-xl
                text-[#30382F]
                sm:text-2xl
              "
            >
              Lugar de la celebración
            </p>


            <a
              href="https://maps.app.goo.gl/v6AVGmaJW9rFVDCM9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación del evento en Google Maps"
              className="
                group
                mx-auto
                mt-7
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#4D6953]
                px-7
                py-3.5
                text-[9px]
                uppercase
                tracking-[0.27em]
                text-white
                shadow-[0_12px_30px_rgba(77,105,83,0.22)]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#30382F]
              "
            >
              Ver ubicación

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
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}