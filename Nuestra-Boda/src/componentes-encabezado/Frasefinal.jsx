// FraseBiblica.jsx

import { motion } from "framer-motion";

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

export default function FraseBiblica() {
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
        bg-[#4D6953]
        px-5
        py-12
        sm:px-8
        sm:py-16
        md:px-12
        md:py-20
      "
    >
      {/* TEXTURA SUAVE DEL FONDO */}
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

      {/* MARCO EXTERIOR DE LA SECCIÓN */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          border
          border-[#C9D0B8]/30
          sm:inset-5
          md:inset-7
        "
      />

      {/* CONTENEDOR PRINCIPAL */}
      <motion.div
        className="
          relative
          mx-auto
          w-full
          max-w-5xl
        "
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* SOMBRA */}
        <div
          className="
            absolute
            inset-x-10
            -bottom-4
            h-16
            rounded-full
            bg-black/30
            blur-2xl
          "
        />

        {/* MARCO DE LA FOTOGRAFÍA */}
        <div
          className="
            relative
            border
            border-[#C9D0B8]/70
            bg-[#E1E4D8]
            p-2
            shadow-[0_25px_70px_rgba(20,35,25,0.38)]
            sm:p-3
            md:p-4
          "
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              pointer-events-none
              absolute
              inset-4
              z-20
              border
              border-white/40
              sm:inset-5
              md:inset-6
            "
          />

          {/* ESQUINAS DECORATIVAS */}
          <span
            className="
              pointer-events-none
              absolute
              left-2
              top-2
              z-30
              h-8
              w-8
              border-l
              border-t
              border-[#4D6953]/70
              sm:left-3
              sm:top-3
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              right-2
              top-2
              z-30
              h-8
              w-8
              border-r
              border-t
              border-[#4D6953]/70
              sm:right-3
              sm:top-3
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              bottom-2
              left-2
              z-30
              h-8
              w-8
              border-b
              border-l
              border-[#4D6953]/70
              sm:bottom-3
              sm:left-3
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              bottom-2
              right-2
              z-30
              h-8
              w-8
              border-b
              border-r
              border-[#4D6953]/70
              sm:bottom-3
              sm:right-3
            "
          />

          {/* FOTOGRAFÍA */}
          <div
            className="
              relative
              h-[72svh]
              min-h-[600px]
              max-h-[680px]
              w-full
              overflow-hidden
              bg-[#30382F]
              sm:h-[74vh]
              sm:min-h-[570px]
              sm:max-h-[760px]
              md:h-[650px]
              md:max-h-none
            "
          >
            <motion.img
              src="/separador.jpg"
              alt="Paola y Jonathan"
              loading="eager"
              decoding="async"
              draggable={false}
              className="
                h-full
                w-full
                object-cover
              "
              style={{
                objectPosition: "center 50%",
              }}
              initial={{
                scale: 1.06,
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

            {/* OSCURECIMIENTO MUY SUAVE */}
            <div className="pointer-events-none absolute inset-0 bg-black/5" />

            {/* TONO VERDE LIGERO PARA INTEGRAR LA PALETA */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#4D6953]/5
                mix-blend-multiply
              "
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}