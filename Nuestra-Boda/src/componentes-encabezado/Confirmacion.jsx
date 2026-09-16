// Confirmacion.jsx

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  HeartHandshake,
  LoaderCircle,
  MessageCircle,
  MessageSquareText,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxrPduepFd6cpbPJRJaOpwDdK3oAQKI7WX7rH44Xu1qKlsJPoGeeRcCUl_xwW0MgvDr/exec";

const WHATSAPP_NUMBER = "529632363861";

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

/* =========================================
    CREAR ENLACE Y MENSAJE DE WHATSAPP
========================================== */
const crearMensajeWhatsApp = ({
  nombre,
  asistencia,
  invitados,
  mensaje,
}) => {
  const confirmaAsistencia =
    asistencia === "Sí asistiré";

  const lineas = [
    "¡Hola! Soy invitado(a) a la boda de Paola y Jonathan. 💍",
    "",
    `Nombre: ${nombre}`,
    `Asistencia: ${asistencia}`,
    `Número de invitados: ${
      confirmaAsistencia ? invitados : 0
    }`,
  ];

  if (mensaje) {
    lineas.push(`Mensaje: ${mensaje}`);
  }

  lineas.push(
    "",
    "Envío mi confirmación por este medio."
  );

  const texto = lineas.join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    texto
  )}`;
};

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] =
    useState("");

  const [mensajeInvitado, setMensajeInvitado] =
    useState("");

  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const seleccionarAsistencia = (opcion) => {
    if (loading || enviado) return;

    setAsistencia(opcion);
    setError("");
    setEnviado(false);

    if (opcion === "No podré asistir") {
      setInvitados(0);
    } else {
      setInvitados("");
    }
  };

  const manejarNumeroInvitados = (event) => {
    const valor = event.target.value;

    setError("");
    setEnviado(false);

    if (valor === "") {
      setInvitados("");
      return;
    }

    const cantidad = Number(valor);

    if (
      Number.isInteger(cantidad) &&
      cantidad >= 1
    ) {
      setInvitados(cantidad);
    }
  };

  const bloquearCaracteresInvalidos = (event) => {
    const teclasBloqueadas = [
      "-",
      "+",
      ".",
      ",",
      "e",
      "E",
    ];

    if (teclasBloqueadas.includes(event.key)) {
      event.preventDefault();
    }
  };

  const enviarConfirmacion = async () => {
    if (loading || enviado) return;

    const nombreLimpio = nombreInvitado
      .replace(/\s+/g, " ")
      .trim();

    const mensajeLimpio = mensajeInvitado
      .replace(/\s+/g, " ")
      .trim();

    if (!nombreLimpio) {
      setError("Escribe tu nombre y apellido.");
      return;
    }

    if (!asistencia) {
      setError(
        "Selecciona si podrás acompañarnos."
      );
      return;
    }

    const numeroInvitados =
      asistencia === "Sí asistiré"
        ? Number(invitados)
        : 0;

    if (
      asistencia === "Sí asistiré" &&
      (
        invitados === "" ||
        !Number.isFinite(numeroInvitados) ||
        !Number.isInteger(numeroInvitados) ||
        numeroInvitados < 1
      )
    ) {
      setError(
        "Escribe un número válido de invitados."
      );
      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);

    const datosConfirmacion = {
      tipo: "confirmacion",
      nombre: nombreLimpio,
      asistencia,
      invitados: numeroInvitados,
      mensaje: mensajeLimpio,
    };

    const whatsappUrl = crearMensajeWhatsApp({
      nombre: nombreLimpio,
      asistencia,
      invitados: numeroInvitados,
      mensaje: mensajeLimpio,
    });

    try {
      /*
        Apps Script recibirá estos datos y determinará que
        pertenecen a la pestaña Confirmacion gracias a "tipo".
      */
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datosConfirmacion),
      });

      setEnviado(true);
      setLoading(false);

      /*
        Abre WhatsApp después de registrar la información
        en Google Sheets.
      */
      window.setTimeout(() => {
        window.location.assign(whatsappUrl);
      }, 700);
    } catch (err) {
      console.error(
        "Error al enviar la confirmación:",
        err
      );

      setLoading(false);
      setEnviado(false);

      setError(
        "No fue posible registrar tu confirmación. Revisa tu conexión e inténtalo nuevamente."
      );
    }
  };

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
        bg-[#4D6953]
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
          opacity-[0.05]
          mix-blend-overlay
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

      {/* BOTÁNICO INFERIOR */}
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
          text-[#C9D0B8]/25
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

      {/* BOTÁNICO SUPERIOR */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-12
          -z-10
          h-72
          w-60
          rotate-180
          text-[#C9D0B8]/20
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
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/10
              text-white
            "
          >
            <HeartHandshake
              size={23}
              strokeWidth={1.25}
            />
          </div>

          <p
            className="
              mt-6
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#C9D0B8]
              sm:text-[10px]
            "
          >
            Nos encantará contar contigo
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-normal
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Confirma tu asistencia
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9D0B8]/70 sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-white" />

            <span className="h-px w-12 bg-[#C9D0B8]/70 sm:w-20" />
          </div>

          <p
            className="
              mt-6
              max-w-xl
              font-serif
              text-lg
              italic
              leading-relaxed
              text-white
              sm:text-xl
            "
          >
            Ayúdanos a preparar cada detalle confirmando tu
            asistencia.
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          className="
            relative
            mx-auto
            mt-14
            w-full
            max-w-3xl
            overflow-hidden
            border
            border-[#C9D0B8]
            bg-[#F5F5EF]
            px-6
            py-10
            shadow-[0_28px_85px_rgba(25,45,31,0.38)]
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

          <div className="relative z-10">
            {/* NOMBRE */}
            <div>
              <label
                htmlFor="nombre-invitado"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.38em]
                  text-[#4D6953]
                "
              >
                Nombre y apellido
              </label>

              <div className="relative mt-3">
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
                  id="nombre-invitado"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombreInvitado}
                  maxLength={60}
                  disabled={loading || enviado}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                    setEnviado(false);
                  }}
                  className="
                    w-full
                    border
                    border-[#98AD91]
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    font-serif
                    text-lg
                    text-black
                    outline-none
                    transition
                    placeholder:text-[#7D897F]
                    focus:border-[#4D6953]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                />
              </div>
            </div>

            {/* ASISTENCIA */}
            <fieldset
              className="mt-9"
              disabled={loading || enviado}
            >
              <legend
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.38em]
                  text-[#4D6953]
                "
              >
                ¿Podrás acompañarnos?
              </legend>

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  className={`
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    border
                    px-5
                    py-4
                    text-left
                    transition
                    duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#4D6953] bg-[#4D6953] text-white"
                        : "border-[#98AD91]/60 bg-white text-black hover:border-[#4D6953] hover:bg-[#E1E4D8]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        asistencia === "Sí asistiré"
                          ? "border-white/45"
                          : "border-[#98AD91] text-[#4D6953]"
                      }
                    `}
                  >
                    <Check size={16} strokeWidth={1.6} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      Sí asistiré
                    </span>

                    <span
                      className={`
                        mt-1
                        block
                        text-xs
                        ${
                          asistencia === "Sí asistiré"
                            ? "text-white/75"
                            : "text-[#4D6953]"
                        }
                      `}
                    >
                      Será un gusto acompañarlos
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia(
                      "No podré asistir"
                    )
                  }
                  className={`
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    border
                    px-5
                    py-4
                    text-left
                    transition
                    duration-300
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#4D6953] bg-[#4D6953] text-white"
                        : "border-[#98AD91]/60 bg-white text-black hover:border-[#4D6953] hover:bg-[#E1E4D8]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        asistencia === "No podré asistir"
                          ? "border-white/45"
                          : "border-[#98AD91] text-[#4D6953]"
                      }
                    `}
                  >
                    <X size={16} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      No podré asistir
                    </span>

                    <span
                      className={`
                        mt-1
                        block
                        text-xs
                        ${
                          asistencia === "No podré asistir"
                            ? "text-white/75"
                            : "text-[#4D6953]"
                        }
                      `}
                    >
                      Estaré presente de corazón
                    </span>
                  </span>
                </button>
              </div>
            </fieldset>

            {/* NÚMERO DE INVITADOS */}
            <AnimatePresence initial={false}>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="mt-9 overflow-hidden"
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <label
                    htmlFor="numero-invitados"
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.38em]
                      text-[#4D6953]
                    "
                  >
                    Número de invitados
                  </label>

                  <div className="relative mt-3">
                    <UsersRound
                      size={17}
                      strokeWidth={1.4}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#4D6953]
                      "
                    />

                    <input
                      id="numero-invitados"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      step="1"
                      placeholder="Escribe el número de invitados"
                      value={invitados}
                      disabled={loading || enviado}
                      onChange={manejarNumeroInvitados}
                      onKeyDown={
                        bloquearCaracteresInvalidos
                      }
                      className="
                        w-full
                        border
                        border-[#98AD91]
                        bg-white
                        py-4
                        pl-12
                        pr-4
                        font-serif
                        text-lg
                        text-black
                        outline-none
                        transition
                        placeholder:text-[#7D897F]
                        focus:border-[#4D6953]
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-[#4D6953]
                    "
                  >
                    Escribe el total de personas que
                    asistirán, incluyéndote.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}
            <div className="mt-9">
              <label
                htmlFor="mensaje-invitado"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.38em]
                  text-[#4D6953]
                "
              >
                Mensaje para los novios
              </label>

              <div className="relative mt-3">
                <MessageSquareText
                  size={17}
                  strokeWidth={1.4}
                  className="
                    absolute
                    left-4
                    top-5
                    text-[#4D6953]
                  "
                />

                <textarea
                  id="mensaje-invitado"
                  placeholder="Escribe un mensaje especial (opcional)"
                  value={mensajeInvitado}
                  maxLength={300}
                  rows={5}
                  disabled={loading || enviado}
                  onChange={(event) => {
                    setMensajeInvitado(event.target.value);
                    setError("");
                    setEnviado(false);
                  }}
                  className="
                    w-full
                    resize-none
                    border
                    border-[#98AD91]
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    leading-7
                    text-black
                    outline-none
                    transition
                    placeholder:text-[#7D897F]
                    focus:border-[#4D6953]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                />
              </div>

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                  text-[#4D6953]
                "
              >
                {mensajeInvitado.length}/300
              </p>
            </div>

            {/* MENSAJES */}
            <div className="mt-6 min-h-[28px]">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="error"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-center
                      text-sm
                      text-red-700
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
                    <X size={15} strokeWidth={1.6} />

                    {error}
                  </motion.div>
                )}

                {enviado && (
                  <motion.div
                    key="success"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-center
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
                    <Check size={15} strokeWidth={1.7} />

                    Confirmación registrada. Abriendo
                    WhatsApp…
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÓN */}
            <button
              type="button"
              onClick={enviarConfirmacion}
              disabled={loading || enviado}
              className={`
                mx-auto
                mt-5
                flex
                min-h-[54px]
                w-full
                max-w-sm
                items-center
                justify-center
                gap-3
                px-7
                py-3.5
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white
                shadow-[0_12px_30px_rgba(77,105,83,0.22)]
                transition
                duration-300
                ${
                  loading || enviado
                    ? "cursor-not-allowed bg-[#98AD91]"
                    : "bg-[#4D6953] hover:-translate-y-0.5 hover:bg-[#30382F]"
                }
              `}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={16}
                    strokeWidth={1.6}
                    className="animate-spin"
                  />

                  Registrando
                </>
              ) : enviado ? (
                <>
                  <Check size={16} strokeWidth={1.6} />

                  Confirmación registrada
                </>
              ) : (
                <>
                  <MessageCircle
                    size={17}
                    strokeWidth={1.5}
                  />

                  Confirmar por WhatsApp
                </>
              )}
            </button>

            <p
              className="
                mx-auto
                mt-7
                max-w-sm
                text-center
                font-serif
                text-sm
                italic
                leading-6
                text-[#4D6953]
              "
            >
              Tu confirmación será registrada y después te
              dirigiremos a WhatsApp para completar el envío.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}