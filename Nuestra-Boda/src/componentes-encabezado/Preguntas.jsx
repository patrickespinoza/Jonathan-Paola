// Preguntas.jsx

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Camera,
  Check,
  ChevronRight,
  Crown,
  RotateCcw,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxrPduepFd6cpbPJRJaOpwDdK3oAQKI7WX7rH44Xu1qKlsJPoGeeRcCUl_xwW0MgvDr/exec";

const preguntas = [
  {
    pregunta: "¿Dónde se conocieron Jonathan y Paola?",
    opciones: [
      "En una fiesta",
      "En un retiro",
      "En la escuela",
      "Por redes sociales",
      "En el trabajo",
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Cuántos años fueron novios Jonathan y Paola?",
    opciones: [
      "1 año",
      "2 años",
      "3 años",
      "4 años",
      "5 años",
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Quién dio el primer beso?",
    opciones: [
      "Jonathan",
      "Paola",
      "Fue al mismo tiempo",
      "Ninguno lo recuerda",
      "Fue por accidente",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Dónde vivirán los futuros esposos?",
    opciones: [
      "San Cristóbal de las Casas",
      "Tuxtla Gutiérrez",
      "Comitán de Domínguez",
      "Ciudad de México",
      "Tapachula",
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Dónde fue su primera cita?",
    opciones: [
      "En una cafetería",
      "En el cine",
      "En un acuario",
      "En un parque",
      "En un restaurante",
    ],
    correcta: 2,
  },
];

const letras = ["A", "B", "C", "D", "E"];

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

export default function Preguntas() {
  const [nombre, setNombre] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(true);
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [score, setScore] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorNombre, setErrorNombre] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resultadoRef = useRef(null);
  const respuestaBloqueadaRef = useRef(false);

  /* TAMAÑO DE LA VENTANA PARA EL CONFETI */
  useEffect(() => {
    const actualizarTamano = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    actualizarTamano();
    window.addEventListener("resize", actualizarTamano);

    return () => {
      window.removeEventListener("resize", actualizarTamano);
    };
  }, []);

  /* ENVIAR RESULTADO A GOOGLE SHEETS */
  const enviarResultado = async (resultadoFinal) => {
    try {
      setEnviando(true);

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          score: resultadoFinal,
        }),
      });
    } catch (error) {
      console.error("Error enviando el resultado:", error);
    } finally {
      setEnviando(false);
    }
  };

  /* OBTENER RANKING */
  const obtenerRanking = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("No fue posible obtener el ranking.");
      }

      const data = await response.json();

      const rankingOrdenado = Array.isArray(data)
        ? [...data]
            .map((participante) => ({
              ...participante,
              score: Number(participante.score) || 0,
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
        : [];

      setRanking(rankingOrdenado);
    } catch (error) {
      console.error("Error obteniendo el ranking:", error);
      setRanking([]);
    }
  };

  /* FINALIZAR JUEGO */
  const finalizarJuego = async (resultadoFinal) => {
    setScore(resultadoFinal);
    setTerminado(true);
    setShowConfetti(true);

    await enviarResultado(resultadoFinal);

    window.setTimeout(() => {
      obtenerRanking();
    }, 1400);

    window.setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  /* SELECCIONAR RESPUESTA */
  const manejarRespuesta = (optionIndex) => {
    if (respuestaBloqueadaRef.current) return;

    if (mostrarNombre && !nombre.trim()) {
      setErrorNombre("Escribe tu nombre para comenzar.");
      return;
    }

    setErrorNombre("");
    respuestaBloqueadaRef.current = true;
    setSeleccion(optionIndex);

    const esCorrecta =
      optionIndex === preguntas[paso].correcta;

    const siguienteScore = esCorrecta
      ? score + 1
      : score;

    window.setTimeout(() => {
      setSeleccion(null);

      if (mostrarNombre) {
        setMostrarNombre(false);
      }

      if (paso + 1 < preguntas.length) {
        setScore(siguienteScore);
        setPaso((prev) => prev + 1);
        respuestaBloqueadaRef.current = false;
      } else {
        finalizarJuego(siguienteScore);
        respuestaBloqueadaRef.current = false;
      }
    }, 750);
  };

  /* DESCARGAR RESULTADO COMO IMAGEN */
  const guardarResultado = async () => {
    if (!resultadoRef.current || guardando) return;

    try {
      setGuardando(true);

      const canvas = await html2canvas(
        resultadoRef.current,
        {
          backgroundColor: "#F5F5EF",
          scale: 2,
          useCORS: true,
        }
      );

      const enlace = document.createElement("a");

      enlace.download = `resultado-${
        nombre.trim() || "invitado"
      }.png`;

      enlace.href = canvas.toDataURL("image/png");
      enlace.click();
    } catch (error) {
      console.error(
        "No fue posible guardar el resultado:",
        error
      );
    } finally {
      setGuardando(false);
    }
  };

  /* REINICIAR */
  const reiniciar = () => {
    setNombre("");
    setMostrarNombre(true);
    setPaso(0);
    setSeleccion(null);
    setScore(0);
    setTerminado(false);
    setRanking([]);
    setShowConfetti(false);
    setErrorNombre("");
    respuestaBloqueadaRef.current = false;
  };

  const progreso =
    ((paso + 1) / preguntas.length) * 100;

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
        overflow-hidden
        bg-[#F5F5EF]
        px-5
        py-24
        sm:px-8
        md:py-32
      "
    >
      {/* CONFETI */}
      {showConfetti && windowSize.width > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[70]">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={240}
            recycle={false}
            gravity={0.16}
            colors={[
              "#4D6953",
              "#98AD91",
              "#C9D0B8",
              "#E1E4D8",
              "#FFFFFF",
            ]}
          />
        </div>
      )}

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

      {/* DECORACIÓN BOTÁNICA */}
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
          text-[#4D6953]/18
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

      <div className="relative z-10 mx-auto w-full max-w-5xl">
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
              bg-[#E1E4D8]
              text-[#4D6953]
            "
          >
            <Sparkles size={21} strokeWidth={1.3} />
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
            Un reto para nuestros invitados
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
            ¿Cuánto nos conoces?
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
            Pon a prueba cuánto sabes de nuestra historia y descubre
            tu lugar en el ranking.
          </p>
        </motion.div>

        {/* JUEGO */}
        <div className="relative mx-auto mt-14 w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {!terminado ? (
              <motion.div
                key={`pregunta-${paso}`}
                className="
                  relative
                  overflow-hidden
                  border
                  border-[#98AD91]/55
                  bg-white
                  px-6
                  py-10
                  shadow-[0_28px_85px_rgba(48,56,47,0.13)]
                  sm:px-10
                  sm:py-12
                  md:px-14
                "
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.55,
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

                <div className="relative z-10">
                  {/* PROGRESO */}
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.35em]
                        text-[#4D6953]
                      "
                    >
                      Pregunta {paso + 1} de {preguntas.length}
                    </p>

                    <p className="font-serif text-sm italic text-black">
                      {Math.round(progreso)}%
                    </p>
                  </div>

                  <div
                    className="
                      mt-4
                      h-1
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[#E1E4D8]
                    "
                  >
                    <motion.div
                      className="h-full bg-[#4D6953]"
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${progreso}%`,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                    />
                  </div>

                  {/* NOMBRE */}
                  <AnimatePresence>
                    {mostrarNombre && (
                      <motion.div
                        className="mx-auto mt-10 max-w-md"
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                      >
                        <label
                          htmlFor="nombre-jugador"
                          className="
                            block
                            text-center
                            text-[9px]
                            uppercase
                            tracking-[0.38em]
                            text-[#4D6953]
                          "
                        >
                          Antes de comenzar
                        </label>

                        <div className="relative mt-4">
                          <UserRound
                            size={17}
                            strokeWidth={1.4}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#4D6953]
                            "
                          />

                          <input
                            id="nombre-jugador"
                            type="text"
                            value={nombre}
                            onChange={(event) => {
                              setNombre(event.target.value);
                              setErrorNombre("");
                            }}
                            placeholder="Escribe tu nombre"
                            maxLength={40}
                            className="
                              w-full
                              border
                              border-[#98AD91]
                              bg-[#F5F5EF]
                              py-3.5
                              pl-12
                              pr-4
                              text-center
                              font-serif
                              text-lg
                              text-black
                              outline-none
                              transition
                              placeholder:text-[#7D897F]
                              focus:border-[#4D6953]
                            "
                          />
                        </div>

                        {errorNombre && (
                          <p className="mt-3 text-center text-xs text-red-700">
                            {errorNombre}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* PREGUNTA */}
                  <motion.div
                    className="mt-10 text-center"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.12,
                    }}
                  >
                    <span
                      className="
                        mx-auto
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#98AD91]
                        bg-[#E1E4D8]
                        font-serif
                        text-lg
                        text-[#4D6953]
                      "
                    >
                      {String(paso + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        mx-auto
                        mt-6
                        max-w-xl
                        font-serif
                        text-2xl
                        font-normal
                        leading-snug
                        text-black
                        sm:text-3xl
                        md:text-4xl
                      "
                    >
                      {preguntas[paso].pregunta}
                    </h3>
                  </motion.div>

                  {/* OPCIONES */}
                  <div
                    className="
                      mx-auto
                      mt-9
                      grid
                      max-w-xl
                      grid-cols-1
                      gap-3
                    "
                  >
                    {preguntas[paso].opciones.map(
                      (opcion, optionIndex) => {
                        const seleccionada =
                          seleccion === optionIndex;

                        return (
                          <motion.button
                            key={opcion}
                            type="button"
                            onClick={() =>
                              manejarRespuesta(optionIndex)
                            }
                            disabled={seleccion !== null}
                            className={`
                              group
                              flex
                              min-h-[58px]
                              w-full
                              items-center
                              gap-4
                              border
                              px-4
                              py-3
                              text-left
                              transition
                              duration-300
                              sm:px-5
                              ${
                                seleccionada
                                  ? "border-[#4D6953] bg-[#4D6953] text-white"
                                  : "border-[#98AD91]/60 bg-[#F5F5EF] text-black hover:-translate-y-0.5 hover:border-[#4D6953] hover:bg-[#E1E4D8]"
                              }
                              disabled:cursor-default
                            `}
                            whileTap={{
                              scale:
                                seleccion === null ? 0.99 : 1,
                            }}
                          >
                            <span
                              className={`
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                font-serif
                                text-sm
                                ${
                                  seleccionada
                                    ? "border-white/50 text-white"
                                    : "border-[#98AD91] text-[#4D6953]"
                                }
                              `}
                            >
                              {seleccionada ? (
                                <Check
                                  size={15}
                                  strokeWidth={1.7}
                                />
                              ) : (
                                letras[optionIndex]
                              )}
                            </span>

                            <span className="flex-1 text-sm sm:text-base">
                              {opcion}
                            </span>

                            <ChevronRight
                              size={16}
                              strokeWidth={1.4}
                              className={
                                seleccionada
                                  ? "text-white"
                                  : "text-[#4D6953] transition-transform group-hover:translate-x-1"
                              }
                            />
                          </motion.button>
                        );
                      }
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* RESULTADO */
              <motion.div
                ref={resultadoRef}
                key="resultado"
                className="
                  relative
                  overflow-hidden
                  border
                  border-[#98AD91]
                  bg-[#F5F5EF]
                  px-6
                  py-12
                  text-center
                  shadow-[0_30px_90px_rgba(48,56,47,0.17)]
                  sm:px-10
                  md:px-14
                "
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-3
                    border
                    border-[#C9D0B8]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mx-auto
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
                    <Award size={27} strokeWidth={1.25} />
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
                    Resultado final
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
                    ¡Muy bien, {nombre}!
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-5
                      max-w-lg
                      font-serif
                      text-lg
                      italic
                      leading-relaxed
                      text-black
                      sm:text-xl
                    "
                  >
                    Acertaste

                    <span className="mx-2 not-italic text-[#4D6953]">
                      {score}
                    </span>

                    de {preguntas.length} preguntas.
                  </p>

                  {/* PUNTUACIÓN */}
                  <div
                    className="
                      mx-auto
                      mt-8
                      flex
                      h-28
                      w-28
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#98AD91]
                      bg-[#E1E4D8]
                    "
                  >
                    <span className="font-serif text-5xl leading-none text-black">
                      {score}
                    </span>

                    <span
                      className="
                        mt-2
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-[#4D6953]
                      "
                    >
                      Aciertos
                    </span>
                  </div>

                  {/* RANKING */}
                  <div
                    className="
                      mt-12
                      border-t
                      border-[#98AD91]/45
                      pt-10
                    "
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Trophy
                        size={18}
                        strokeWidth={1.3}
                        className="text-[#4D6953]"
                      />

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.38em]
                          text-[#4D6953]
                        "
                      >
                        Ranking de invitados
                      </p>
                    </div>

                    {ranking.length > 0 ? (
                      <div
                        className="
                          mt-9
                          flex
                          items-end
                          justify-center
                          gap-2
                          sm:gap-5
                        "
                      >
                        {ranking[1] && (
                          <Podio
                            posicion={2}
                            participante={ranking[1]}
                            altura="h-20 sm:h-24"
                            delay={0.15}
                          />
                        )}

                        {ranking[0] && (
                          <Podio
                            posicion={1}
                            participante={ranking[0]}
                            altura="h-28 sm:h-32"
                            principal
                            delay={0.05}
                          />
                        )}

                        {ranking[2] && (
                          <Podio
                            posicion={3}
                            participante={ranking[2]}
                            altura="h-16 sm:h-20"
                            delay={0.25}
                          />
                        )}
                      </div>
                    ) : (
                      <p
                        className="
                          mt-7
                          font-serif
                          text-base
                          italic
                          text-[#4D6953]
                        "
                      >
                        {enviando
                          ? "Guardando tu resultado…"
                          : "Actualizando el ranking…"}
                      </p>
                    )}
                  </div>

                  {/* BOTONES */}
                  <div
                    className="
                      mx-auto
                      mt-12
                      flex
                      max-w-md
                      flex-col
                      gap-3
                      sm:flex-row
                    "
                  >
                    <button
                      type="button"
                      onClick={guardarResultado}
                      disabled={guardando}
                      className="
                        group
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-3
                        bg-[#4D6953]
                        px-6
                        py-3.5
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white
                        transition
                        hover:-translate-y-0.5
                        hover:bg-[#30382F]
                        disabled:opacity-60
                      "
                    >
                      <Camera size={15} strokeWidth={1.5} />

                      {guardando
                        ? "Guardando…"
                        : "Guardar resultado"}
                    </button>

                    <button
                      type="button"
                      onClick={reiniciar}
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-3
                        border
                        border-[#4D6953]
                        px-6
                        py-3.5
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-[#4D6953]
                        transition
                        hover:bg-[#E1E4D8]
                      "
                    >
                      <RotateCcw size={15} strokeWidth={1.5} />

                      Jugar de nuevo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

function Podio({
  posicion,
  participante,
  altura,
  principal = false,
  delay = 0,
}) {
  return (
    <motion.div
      className="flex min-w-0 flex-1 flex-col items-center"
      initial={{
        opacity: 0,
        y: 45,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {principal && (
        <Crown
          size={22}
          strokeWidth={1.25}
          className="mb-3 text-[#4D6953]"
        />
      )}

      <p
        className="
          mb-3
          max-w-full
          truncate
          font-serif
          text-sm
          text-black
          sm:text-base
        "
      >
        {participante.nombre}
      </p>

      <div
        className={`
          flex
          w-full
          max-w-[110px]
          flex-col
          items-center
          justify-center
          border
          border-[#98AD91]
          ${
            principal
              ? "bg-[#4D6953] text-white"
              : "bg-[#E1E4D8] text-black"
          }
          ${altura}
        `}
      >
        <span className="font-serif text-2xl">
          {posicion}
        </span>

        <span
          className={`
            mt-1
            text-[8px]
            uppercase
            tracking-[0.25em]
            ${
              principal
                ? "text-white/80"
                : "text-[#4D6953]"
            }
          `}
        >
          {participante.score} pts
        </span>
      </div>
    </motion.div>
  );
}