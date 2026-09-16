// ImagenSeparacion.jsx

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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

export default function ImagenSeparacion() {
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
        w-full
        overflow-hidden
        bg-[#30382F]
      "
    >
      {/* =========================================
          CONTENEDOR DE LA FOTOGRAFÍA
      ========================================== */}
      <div
        className="
          relative
          h-[78svh]
          min-h-[620px]
          max-h-[780px]
          w-full
          overflow-hidden
          sm:h-[82vh]
          sm:min-h-[720px]
          sm:max-h-[900px]
          md:h-screen
          md:min-h-[780px]
          md:max-h-none
        "
      >
        {/* IMAGEN */}
        <motion.img
          src="/final.jpg"
          alt="Paola y Jonathan"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          style={{
            objectPosition: "center 30%",
          }}
          initial={{
            scale: 1.08,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 6,
            ease: "easeOut",
          }}
        />

        {/* OSCURECIMIENTO GENERAL */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        {/* TONO VERDE SUAVE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#4D6953]/10
            mix-blend-multiply
          "
        />

        {/* OSCURECIMIENTO INFERIOR */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[62%]
            bg-gradient-to-t
            from-black/90
            via-black/45
            to-transparent
          "
        />

        {/* OSCURECIMIENTO SUPERIOR */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-1/4
            bg-gradient-to-b
            from-black/30
            to-transparent
          "
        />

        {/* =========================================
            MARCOS
        ========================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-4
            z-10
            border
            border-white/45
            sm:inset-7
            md:inset-10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-[22px]
            z-10
            border
            border-[#C9D0B8]/30
            sm:inset-9
            md:inset-12
          "
        />

        {/* =========================================
            DECORACIÓN BOTÁNICA INFERIOR
        ========================================== */}
        <svg
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-14
            z-10
            h-64
            w-52
            text-[#C9D0B8]/30
            sm:h-80
            sm:w-64
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

        {/* =========================================
            FRASE EN LA PARTE INFERIOR
        ========================================== */}
        <motion.div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
            flex
            flex-col
            items-center
            px-8
            pb-8
            text-center
            text-white
            sm:px-12
            sm:pb-12
            md:pb-14
          "
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
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* ICONO */}
          <motion.div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/10
              backdrop-blur-sm
              sm:h-12
              sm:w-12
            "
            initial={{
              opacity: 0,
              scale: 0.8,
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
              delay: 0.35,
            }}
          >
            <Heart size={18} strokeWidth={1.3} />
          </motion.div>

          {/* ETIQUETA */}
          <motion.p
            className="
              mt-4
              text-[8px]
              uppercase
              tracking-[0.5em]
              text-[#C9D0B8]
              sm:text-[10px]
            "
            initial={{
              opacity: 0,
              y: 12,
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
              delay: 0.45,
            }}
          >
            Una promesa
          </motion.p>

          {/* FRASE */}
          <motion.blockquote
            className="
              mt-5
              max-w-3xl
              font-serif
              text-[1.55rem]
              font-normal
              italic
              leading-[1.4]
              text-white
              drop-shadow-[0_3px_15px_rgba(0,0,0,0.70)]
              sm:text-[2rem]
              md:text-[2.5rem]
              lg:text-[2.8rem]
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
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            “A su debido tiempo, yo, el Señor, haré que esto
            suceda.”
          </motion.blockquote>

          {/* DIVISOR */}
          <motion.div
            className="
              my-5
              flex
              w-full
              max-w-[190px]
              items-center
              justify-center
              gap-4
            "
            initial={{
              opacity: 0,
              scaleX: 0.6,
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
              delay: 0.7,
            }}
          >
            <span className="h-px flex-1 bg-[#C9D0B8]/65" />

            <span
              className="
                h-1.5
                w-1.5
                rotate-45
                border
                border-white
              "
            />

            <span className="h-px flex-1 bg-[#C9D0B8]/65" />
          </motion.div>

          {/* REFERENCIA */}
          <motion.p
            className="
              text-[8px]
              uppercase
              tracking-[0.4em]
              text-[#C9D0B8]
              sm:text-[10px]
            "
            initial={{
              opacity: 0,
              y: 12,
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
              delay: 0.8,
            }}
          >
            Isaías 60:22
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}