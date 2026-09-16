// Regalos.jsx

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Eye,
  EyeOff,
  Gift,
  Heart,
  Landmark,
  ShoppingBag,
  X,
} from "lucide-react";

const LIVERPOOL_URL =
  "https://mesaderegalos.liverpool.com.mx/milistaderegalos/52005974";

const DATOS_BANCARIOS = {
  banco: "Banamex",
  titular: "Jonathan Aguilar Cano",
  tarjeta: "5256784772946793",
  concepto: "J&P",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formatearTarjeta = (numero) => {
  return numero.replace(/(\d{4})(?=\d)/g, "$1 ");
};

export default function Regalos() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);
  const [copiado, setCopiado] = useState("");

  /* CERRAR MODAL CON ESCAPE */
  useEffect(() => {
    if (!mostrarModal) return undefined;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        cerrarModal();
      }
    };

    document.addEventListener("keydown", cerrarConEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        cerrarConEscape
      );

      document.body.style.overflow = "";
    };
  }, [mostrarModal]);

  const cerrarModal = () => {
    setMostrarModal(false);
    setMostrarTarjeta(false);
    setCopiado("");
  };

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);

      window.setTimeout(() => {
        setCopiado("");
      }, 2000);
    } catch (error) {
      console.error("No fue posible copiar:", error);
    }
  };

  return (
    <>
      {/* =========================================
          SECCIÓN MESA DE REGALOS
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
          bg-[#E1E4D8]
          px-5
          py-24
          sm:px-8
          md:py-32
        "
      >
        {/* TEXTURA */}
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

        {/* MARCOS */}
        <div
          className="
            pointer-events-none
            absolute
            inset-4
            border
            border-[#4D6953]/30
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
            border-white/60
            sm:inset-9
            md:inset-12
          "
        />

        {/* DECORACIÓN BOTÁNICA */}
        <svg
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-12
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
            fillOpacity="0.15"
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
                bg-[#F5F5EF]
                text-[#4D6953]
              "
            >
              <Gift size={22} strokeWidth={1.3} />
            </div>

            <p
              className="
                mt-6
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#4D6953]
                sm:text-[10px]
              "
            >
              Un detalle para nuestro futuro
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
              Mesa de regalos
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
              Tu presencia es nuestro mejor regalo, pero si deseas
              tener un detalle con nosotros, te compartimos estas
              opciones.
            </p>
          </motion.div>

          {/* =========================================
              OPCIONES DE REGALO
          ========================================== */}
          <div
            className="
              mx-auto
              mt-14
              grid
              w-full
              max-w-5xl
              grid-cols-1
              gap-6
              md:grid-cols-2
            "
          >
            {/* LIVERPOOL */}
            <motion.article
              className="
                relative
                flex
                min-h-[430px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                border
                border-[#98AD91]/60
                bg-[#F5F5EF]
                px-8
                py-14
                text-center
                shadow-[0_24px_70px_rgba(48,56,47,0.14)]
                sm:px-12
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
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  border
                  border-[#C9D0B8]/60
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#98AD91]
                  bg-[#E1E4D8]
                  text-[#4D6953]
                "
              >
                <ShoppingBag size={25} strokeWidth={1.3} />
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-7
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#4D6953]
                "
              >
                Opción uno
              </p>

              <h3
                className="
                  relative
                  z-10
                  mt-4
                  font-serif
                  text-4xl
                  font-normal
                  text-black
                "
              >
                Liverpool
              </h3>

              <div
                className="
                  relative
                  z-10
                  mt-6
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-10 bg-[#98AD91]" />
                <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />
                <span className="h-px w-10 bg-[#98AD91]" />
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-7
                  max-w-sm
                  text-sm
                  leading-7
                  text-black
                  sm:text-base
                "
              >
                Hemos preparado una mesa de regalos con algunas
                opciones para acompañarnos en el comienzo de esta
                nueva etapa.
              </p>

              <a
                href={LIVERPOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  z-10
                  mt-9
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
                Ver mesa de regalos

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
            </motion.article>

            {/* TRANSFERENCIA */}
            <motion.article
              className="
                relative
                flex
                min-h-[430px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                bg-[#4D6953]
                px-8
                py-14
                text-center
                text-white
                shadow-[0_24px_70px_rgba(48,56,47,0.22)]
                sm:px-12
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
                  border-[#C9D0B8]/35
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-white/10
                  text-white
                "
              >
                <Landmark size={25} strokeWidth={1.3} />
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-7
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#C9D0B8]
                "
              >
                Opción dos
              </p>

              <h3
                className="
                  relative
                  z-10
                  mt-4
                  font-serif
                  text-4xl
                  font-normal
                  text-white
                "
              >
                Transferencia
              </h3>

              <div
                className="
                  relative
                  z-10
                  mt-6
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-10 bg-[#C9D0B8]/70" />
                <span className="h-2 w-2 rotate-45 border border-white" />
                <span className="h-px w-10 bg-[#C9D0B8]/70" />
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-7
                  max-w-sm
                  text-sm
                  leading-7
                  text-white
                  sm:text-base
                "
              >
                Si lo prefieres, también puedes realizar una
                aportación mediante transferencia bancaria.
              </p>

              <button
                type="button"
                onClick={() => setMostrarModal(true)}
                className="
                  group
                  relative
                  z-10
                  mt-9
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/60
                  bg-white
                  px-7
                  py-3.5
                  text-[9px]
                  uppercase
                  tracking-[0.27em]
                  text-[#4D6953]
                  shadow-[0_12px_30px_rgba(0,0,0,0.14)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E1E4D8]
                "
              >
                Ver datos bancarios

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
            </motion.article>
          </div>

          {/* CIERRE */}
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
              delay: 0.3,
            }}
          >
            <Heart
              size={20}
              strokeWidth={1.3}
              className="text-[#4D6953]"
            />

            <p
              className="
                mt-5
                font-serif
                text-lg
                italic
                text-black
                sm:text-xl
              "
            >
              Gracias por ser parte de esta nueva etapa de nuestras
              vidas.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          MODAL DE TRANSFERENCIA
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
            onClick={cerrarModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="datos-bancarios-title"
              className="
                relative
                my-auto
                w-full
                max-w-lg
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
              onClick={(event) => {
                event.stopPropagation();
              }}
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

              {/* MARCO */}
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

              {/* CERRAR */}
              <button
                type="button"
                onClick={cerrarModal}
                aria-label="Cerrar datos bancarios"
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

              <div
                className="
                  relative
                  z-20
                  max-h-[88vh]
                  overflow-y-auto
                  px-7
                  py-10
                  text-center
                  sm:px-10
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
                  <Landmark size={21} strokeWidth={1.3} />
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
                  Opción de transferencia
                </p>

                <h2
                  id="datos-bancarios-title"
                  className="
                    mt-4
                    font-serif
                    text-4xl
                    font-normal
                    text-black
                  "
                >
                  Datos bancarios
                </h2>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-[#98AD91]" />
                  <span className="h-2 w-2 rotate-45 border border-[#4D6953]" />
                  <span className="h-px w-10 bg-[#98AD91]" />
                </div>

                {/* TARJETA BANCARIA */}
                <div
                  className="
                    relative
                    mt-9
                    overflow-hidden
                    border
                    border-[#98AD91]/70
                    bg-[#30382F]
                    px-6
                    py-7
                    text-left
                    text-white
                    shadow-[0_20px_55px_rgba(48,56,47,0.30)]
                  "
                >
                  {/* CÍRCULOS DECORATIVOS */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-52
                      w-52
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div className="relative z-10">
                    {/* BANCO */}
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.35em]
                            text-[#C9D0B8]
                          "
                        >
                          Banco
                        </p>

                        <p className="mt-2 font-serif text-2xl text-white">
                          {DATOS_BANCARIOS.banco}
                        </p>
                      </div>

                      <Landmark
                        size={23}
                        strokeWidth={1.2}
                        className="text-[#C9D0B8]"
                      />
                    </div>

                    {/* TITULAR */}
                    <div className="mt-8">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.32em]
                          text-[#C9D0B8]
                        "
                      >
                        Titular
                      </p>

                      <p
                        className="
                          mt-2
                          text-sm
                          uppercase
                          tracking-[0.14em]
                          text-white
                        "
                      >
                        {DATOS_BANCARIOS.titular}
                      </p>
                    </div>

                    {/* NÚMERO DE TARJETA */}
                    <div
                      className="
                        mt-7
                        border-t
                        border-white/15
                        pt-6
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.32em]
                          text-[#C9D0B8]
                        "
                      >
                        Número de tarjeta
                      </p>

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          justify-between
                          gap-3
                        "
                      >
                        <p
                          className="
                            min-w-0
                            flex-1
                            break-all
                            font-mono
                            text-base
                            tracking-[0.12em]
                            text-white
                            sm:text-lg
                          "
                        >
                          {mostrarTarjeta
                            ? formatearTarjeta(
                                DATOS_BANCARIOS.tarjeta
                              )
                            : "•••• •••• •••• ••••"}
                        </p>

                        {/* MOSTRAR/OCULTAR */}
                        <button
                          type="button"
                          onClick={() =>
                            setMostrarTarjeta((prev) => !prev)
                          }
                          aria-label={
                            mostrarTarjeta
                              ? "Ocultar número de tarjeta"
                              : "Mostrar número de tarjeta"
                          }
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/25
                            bg-white/10
                            text-white
                            transition
                            hover:bg-white/20
                          "
                        >
                          {mostrarTarjeta ? (
                            <EyeOff size={17} strokeWidth={1.5} />
                          ) : (
                            <Eye size={17} strokeWidth={1.5} />
                          )}
                        </button>

                        {/* COPIAR */}
                        <button
                          type="button"
                          onClick={() =>
                            copiarTexto(
                              DATOS_BANCARIOS.tarjeta,
                              "tarjeta"
                            )
                          }
                          aria-label="Copiar número de tarjeta"
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/25
                            bg-white/10
                            text-white
                            transition
                            hover:bg-white/20
                          "
                        >
                          {copiado === "tarjeta" ? (
                            <Check size={17} strokeWidth={1.7} />
                          ) : (
                            <Copy size={17} strokeWidth={1.5} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* CONCEPTO */}
                    <div className="mt-7">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.32em]
                          text-[#C9D0B8]
                        "
                      >
                        Concepto
                      </p>

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <p
                          className="
                            font-serif
                            text-xl
                            tracking-[0.15em]
                            text-white
                          "
                        >
                          {DATOS_BANCARIOS.concepto}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            copiarTexto(
                              DATOS_BANCARIOS.concepto,
                              "concepto"
                            )
                          }
                          aria-label="Copiar concepto"
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/25
                            bg-white/10
                            text-white
                            transition
                            hover:bg-white/20
                          "
                        >
                          {copiado === "concepto" ? (
                            <Check size={17} strokeWidth={1.7} />
                          ) : (
                            <Copy size={17} strokeWidth={1.5} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MENSAJE DE COPIADO */}
                <AnimatePresence mode="wait">
                  {copiado && (
                    <motion.div
                      key={copiado}
                      className="
                        mx-auto
                        mt-5
                        flex
                        w-fit
                        items-center
                        gap-2
                        text-sm
                        text-[#4D6953]
                      "
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                    >
                      <Check size={15} strokeWidth={1.6} />

                      {copiado === "tarjeta"
                        ? "Número de tarjeta copiado"
                        : "Concepto copiado"}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p
                  className="
                    mx-auto
                    mt-7
                    max-w-sm
                    font-serif
                    text-base
                    italic
                    leading-7
                    text-black
                  "
                >
                  Gracias por acompañarnos y por ser parte de este
                  nuevo capítulo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}