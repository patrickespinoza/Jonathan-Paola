// Frase.jsx
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Frase() {
  return (
    <motion.section
      className="
        relative
        flex
        min-h-[650px]
        w-full
        items-end
        justify-center
        overflow-hidden
        bg-[#30382F]
        px-6
        pb-8
        pt-24
        text-center
        text-white
        sm:min-h-[750px]
        sm:px-10
        sm:pb-12
        md:min-h-screen
        md:pb-14
      "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
      }}
    >
      {/* =========================================
          IMAGEN DE FONDO
      ========================================== */}
      <motion.img
        src="/frase.jpg"
        alt="Paola y Jonathan"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
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
          duration: 7,
          ease: "easeOut",
        }}
      />

      {/* OSCURECIMIENTO GENERAL */}
      <div className="absolute inset-0 bg-black/15" />

      {/* OSCURECIMIENTO SUPERIOR */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1/4
          bg-gradient-to-b
          from-black/35
          to-transparent
        "
      />

      {/* OSCURECIMIENTO INFERIOR PARA LEER LA FRASE */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[62%]
          bg-gradient-to-t
          from-black/90
          via-black/50
          to-transparent
        "
      />

      {/* TONO VERDE SUAVE */}
      <div className="absolute inset-0 bg-[#4D6953]/10 mix-blend-multiply" />

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
          border-white/15
          sm:inset-9
          md:inset-12
        "
      />

      {/* =========================================
          RAMA BOTÁNICA INFERIOR
      ========================================== */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-10
          z-10
          h-52
          w-44
          text-[#C9D0B8]/40
          sm:h-64
          sm:w-56
          md:h-80
          md:w-72
        "
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M31 310C76 241 95 175 111 97C118 61 132 32 159 8"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M95 173C64 159 42 167 25 194M106 130C79 112 57 116 39 139M116 91C96 70 80 65 59 74M85 212C113 207 134 218 146 242M106 144C133 143 151 155 163 177M125 67C146 69 162 81 171 99"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <path
          d="M27 194C46 181 65 180 94 174C74 202 52 207 27 194ZM40 139C58 126 78 123 105 130C82 151 60 154 40 139ZM59 74C80 68 97 74 115 91C91 96 73 91 59 74ZM86 212C108 206 130 217 145 241C118 239 99 230 86 212ZM107 144C132 140 151 153 162 176C137 175 118 164 107 144ZM126 67C147 68 161 80 170 98C149 96 135 86 126 67Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>

      {/* =========================================
          CONTENIDO DE LA FRASE
      ========================================== */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
        "
      >


        {/* FRASE PRINCIPAL */}
        <motion.blockquote
          className="
            mt-5
            max-w-3xl
            font-serif
            text-[1.4rem]
            font-normal
            italic
            leading-[1.45]
            text-white
            drop-shadow-[0_3px_15px_rgba(0,0,0,0.65)]
            sm:text-[1.85rem]
            md:text-[2.3rem]
            lg:text-[2.65rem]
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
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          “Como llama divina es el fuego ardiente del amor. Ni las
          muchas aguas pueden apagarlo, ni los ríos pueden
          extinguirlo.”
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
            delay: 0.65,
          }}
        >
          <span className="h-px flex-1 bg-[#C9D0B8]/60" />

          <span className="h-1.5 w-1.5 rotate-45 border border-[#E1E4D8]" />

          <span className="h-px flex-1 bg-[#C9D0B8]/60" />
        </motion.div>

        {/* REFERENCIA BÍBLICA */}
        <motion.p
          className="
            text-[8px]
            uppercase
            tracking-[0.38em]
            text-[#E1E4D8]
            sm:text-[10px]
          "
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.75,
          }}
        >
          Cantares 8:6
        </motion.p>
      </div>
    </motion.section>
  );
}