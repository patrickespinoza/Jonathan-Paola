// Vestimenta.jsx

import React from "react";
import { motion } from "framer-motion";
import { Shirt, Sparkles, CircleOff } from "lucide-react";

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

const coloresReservados = [
  {
    nombre: "Verde",
    color: "#4D6953",
    border: "#98AD91",
  },
  {
    nombre: "Blanco",
    color: "#FFFFFF",
    border: "#AEB5AB",
  },
  {
    nombre: "Beige",
    color: "#D8CBB7",
    border: "#B9AA94",
  },
];

export default function Vestimenta() {
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

      {/* DECORACIÓN BOTÁNICA SUPERIOR */}
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
          text-[#4D6953]/17
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

      {/* DECORACIÓN BOTÁNICA INFERIOR */}
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
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ENCABEZADO */}
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
              text-[#4D6953]
              sm:text-[10px]
            "
          >
            Detalles de la celebración
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
            Código de vestimenta
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#98AD91] sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />

            <span className="h-px w-12 bg-[#98AD91] sm:w-20" />
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
            Agradecemos elegir un atuendo acorde con la ocasión.
          </p>
        </motion.div>

        {/* TIPO DE VESTIMENTA */}
        <motion.div
          className="
            relative
            mx-auto
            mt-12
            max-w-3xl
            overflow-hidden
            border
            border-[#98AD91]/50
            bg-[#E1E4D8]
            px-6
            py-10
            text-center
            shadow-[0_20px_60px_rgba(48,56,47,0.12)]
            sm:px-10
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
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-3
              border
              border-white/70
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#4D6953]/45
              bg-[#F5F5EF]
              text-[#4D6953]
            "
          >
            <Sparkles size={19} strokeWidth={1.4} />
          </div>

          <p
            className="
              relative
              z-10
              mt-5
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#4D6953]
            "
          >
            Estilo sugerido
          </p>

          <h3
            className="
              relative
              z-10
              mt-3
              font-serif
              text-3xl
              font-normal
              text-black
              sm:text-4xl
            "
          >
            Casual elegante de cóctel
          </h3>
        </motion.div>

        {/* MUJERES Y HOMBRES */}
        <div
          className="
            mx-auto
            mt-8
            grid
            w-full
            max-w-5xl
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {/* MUJERES */}
          <motion.article
            className="
              relative
              overflow-hidden
              border
              border-[#98AD91]/45
              bg-white
              px-7
              py-12
              text-center
              shadow-[0_20px_60px_rgba(48,56,47,0.09)]
              sm:px-10
            "
            initial={{
              opacity: 0,
              x: -30,
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
                pointer-events-none
                absolute
                inset-3
                border
                border-[#C9D0B8]/50
              "
            />

            <div
              className="
                relative
                z-10
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
                font-serif
                text-2xl
                italic
                text-[#4D6953]
              "
            >
              M
            </div>

            <p
              className="
                relative
                z-10
                mt-6
                text-[12px]
                uppercase
                tracking-[0.4em]
                text-[#4D6953]
              "
            >
              Para mujeres
            </p>

            <div className="relative z-10 mx-auto mt-5 h-px w-14 bg-[#98AD91]" />

            <p
              className="
                relative
                z-10
                mt-6
                text-sm
                leading-7
                text-black
                sm:text-base
              "
            >
              Vestidos midi o largos de telas ligeras. Puedes elegir
              tonos alegres o estampados florales.
            </p>

            <p
              className="
                relative
                z-10
                mt-5
                font-serif
                text-base
                italic
                leading-7
                text-[#4D6953]
              "
            >
              Para mayor comodidad en el jardín, recomendamos tacón
              ancho, cuñas o plataformas.
            </p>
          </motion.article>

          {/* HOMBRES */}
          <motion.article
            className="
              relative
              overflow-hidden
              border
              border-[#98AD91]/45
              bg-white
              px-7
              py-12
              text-center
              shadow-[0_20px_60px_rgba(48,56,47,0.09)]
              sm:px-10
            "
            initial={{
              opacity: 0,
              x: 30,
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
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-3
                border
                border-[#C9D0B8]/50
              "
            />

            <div
              className="
                relative
                z-10
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
              <Shirt size={22} strokeWidth={1.3} />
            </div>

            <p
              className="
                relative
                z-10
                mt-6
                text-[12px]
                uppercase
                tracking-[0.4em]
                text-[#4D6953]
              "
            >
              Para hombres
            </p>

            <div className="relative z-10 mx-auto mt-5 h-px w-14 bg-[#98AD91]" />

            <p
              className="
                relative
                z-10
                mt-6
                text-sm
                leading-7
                text-black
                sm:text-base
              "
            >
              Recomendamos traje en azul pastel u otros
              tonos suaves. También puedes optar por un blazer
              acompañado de pantalón formal.
            </p>

            <p
              className="
                relative
                z-10
                mt-5
                font-serif
                text-base
                italic
                leading-7
                text-[#4D6953]
              "
            >
              El uso de corbata es opcional.
            </p>
          </motion.article>
        </div>

        {/* COLORES RESERVADOS */}
        <motion.div
          className="
            relative
            mx-auto
            mt-8
            max-w-3xl
            overflow-hidden
            bg-[#30382F]
            px-6
            py-12
            text-center
            text-white
            shadow-[0_22px_65px_rgba(48,56,47,0.25)]
            sm:px-10
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
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              pointer-events-none
              absolute
              inset-3
              border
              border-[#C9D0B8]/30
            "
          />

          {/* ICONO */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#C9D0B8]/60
              bg-white/5
              text-white
            "
          >
            <CircleOff size={19} strokeWidth={1.4} />
          </div>

          <p
            className="
              relative
              z-10
              mt-5
              text-[9px]
              uppercase
              tracking-[0.42em]
              text-[#C9D0B8]
            "
          >
            Colores reservados
          </p>

          <h3
            className="
              relative
              z-10
              mt-3
              font-serif
              text-3xl
              font-normal
              text-white
              sm:text-4xl
            "
          >
            Agradecemos evitar
          </h3>

          {/* CÍRCULOS DE COLORES */}
          <div
            className="
              relative
              z-10
              mt-8
              flex
              flex-wrap
              items-start
              justify-center
              gap-7
              sm:gap-12
            "
          >
            {coloresReservados.map((color) => (
              <div
                key={color.nombre}
                className="flex flex-col items-center"
              >
                <div
                  className="
                    h-16
                    w-16
                    rounded-full
                    shadow-[0_8px_22px_rgba(0,0,0,0.30)]
                    sm:h-[72px]
                    sm:w-[72px]
                  "
                  style={{
                    backgroundColor: color.color,
                    border: `2px solid ${color.border}`,
                  }}
                />

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white
                  "
                >
                  {color.nombre}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
              relative
              z-10
              mx-auto
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-white
              sm:text-base
            "
          >
            El verde en cualquiera de sus tonalidades, el blanco y el
            beige están reservados para elementos especiales de la
            celebración.
          </p>


        </motion.div>
      </div>
    </motion.section>
  );
}