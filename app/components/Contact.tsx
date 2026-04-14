export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-600 mb-6">
        Cuéntame sobre tu proyecto y te respondo rápido.
      </p>
      <a
        href="mailto:tuemail@email.com"
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Enviar correo
      </a>
    </section>
  );
}