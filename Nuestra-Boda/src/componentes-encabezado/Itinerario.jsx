// Itinerario.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  UtensilsCrossed,
  CarFront,
} from "lucide-react";

const Itinerario = () => {
  const events = [
    {
      time: "1:00",
      period: "P. M.",
      title: "Ceremonia",
      description:
        "El momento en el que uniremos nuestras vidas, acompañados de nuestras familias y seres queridos.",
      icon: Church,
    },
    {
      time: "3:00",
      period: "P. M.",
      title: "Comida",
      description:
        "Compartiremos una comida preparada especialmente para celebrar este día tan importante.",
      icon: UtensilsCrossed,
    },
    {
      time: "6:00",
      period: "P. M.",
      title: "Salida de los novios",
      description:
        "Cerraremos nuestra celebración agradeciendo tu compañía en este día tan especial.",
      icon: CarFront,
    },
  ];

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#C9D0B8]
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
          opacity-[0.04]
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
          border-[#4D6953]/35
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
          border-white/55
          sm:inset-9
          md:inset-12
        "
      />

      {/* =========================================
          DECORACIÓN BOTÁNICA IZQUIERDA
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-16
          -z-10
          h-72
          w-60
          text-[#4D6953]/20
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
          fillOpacity="0.16"
        />
      </svg>

      {/* =========================================
          DECORACIÓN BOTÁNICA DERECHA
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-10
          -z-10
          h-72
          w-60
          rotate-180
          text-[#4D6953]/16
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
          fillOpacity="0.14"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* =========================================
            ENCABEZADO
        ========================================== */}
        <motion.div
          className="
            mx-auto
            flex
            max-w-2xl
            flex-col
            items-center
            text-center
          "
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#4D6953]
              sm:text-[10px]
            "
          >
            Programa de celebración
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
            Itinerario
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#4D6953]/60 sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />

            <span className="h-px w-12 bg-[#4D6953]/60 sm:w-20" />
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
            Cada momento ha sido preparado para compartirlo contigo.
          </p>
        </motion.div>

        {/* =========================================
            PROGRAMA
        ========================================== */}
        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-4xl
            overflow-hidden
            border
            border-[#4D6953]/40
            bg-[#F5F5EF]
            px-5
            py-3
            shadow-[0_25px_75px_rgba(48,56,47,0.16)]
            sm:px-8
            md:px-10
          "
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              pointer-events-none
              absolute
              inset-2
              border
              border-[#98AD91]/30
            "
          />

          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                className={`
                  relative
                  z-10
                  grid
                  grid-cols-[85px_1fr]
                  gap-5
                  px-1
                  py-10
                  sm:grid-cols-[150px_1fr]
                  sm:gap-10
                  sm:px-6
                  sm:py-12
                  md:grid-cols-[190px_1fr]
                  ${
                    index !== events.length - 1
                      ? "border-b border-[#98AD91]/40"
                      : ""
                  }
                `}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* HORA */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    border-r
                    border-[#98AD91]/45
                    pr-5
                    text-center
                    sm:pr-10
                  "
                >
                  <span
                    className="
                      font-serif
                      text-2xl
                      leading-none
                      text-black
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    {event.time}
                  </span>

                  <span
                    className="
                      mt-3
                      text-[7px]
                      uppercase
                      tracking-[0.35em]
                      text-[#4D6953]
                      sm:text-[9px]
                    "
                  >
                    {event.period}
                  </span>
                </div>

                {/* INFORMACIÓN */}
                <div className="flex items-center gap-4 sm:gap-7">
                  {/* ICONO EN TABLET Y COMPUTADORA */}
                  <div
                    className="
                      hidden
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#98AD91]
                      bg-[#E1E4D8]
                      text-[#4D6953]
                      sm:flex
                    "
                  >
                    <Icon size={21} strokeWidth={1.3} />
                  </div>

                  <div>
                    {/* ICONO EN CELULAR */}
                    <div className="mb-3 flex items-center gap-3 sm:hidden">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#4D6953]"
                      />

                      <span className="h-px w-8 bg-[#98AD91]" />
                    </div>

                    <h3
                      className="
                        font-serif
                        text-[1.6rem]
                        font-normal
                        leading-tight
                        text-black
                        sm:text-3xl
                        md:text-4xl
                      "
                    >
                      {event.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        text-sm
                        leading-6
                        text-black
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* NÚMERO DECORATIVO */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-2
                    top-1/2
                    hidden
                    -translate-y-1/2
                    font-serif
                    text-[5rem]
                    leading-none
                    text-[#4D6953]/5
                    md:block
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            CIERRE
        ========================================== */}
        <motion.div
          className="
            mx-auto
            mt-14
            flex
            max-w-xl
            flex-col
            items-center
            text-center
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
            delay: 0.25,
          }}
        >
          <span className="h-px w-16 bg-[#4D6953]" />

          <p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#4D6953]
            "
          >
            Te esperamos
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
            para celebrar juntos cada instante
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario;