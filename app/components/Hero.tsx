export const Hero = () => {
  return (
    <section className="py-24 px-6 text-center bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Luis Carlos de la Torre Flores
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold mb-4">FullStack Developer</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Te ayudo a crear dashboards, sistemas y páginas que convierten visitas en clientes.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#contact" className="bg-black text-white px-6 py-3 rounded-xl">
          Solicitar cotización
        </a>
        <a href="#portfolio" className="border px-6 py-3 rounded-xl">
          Ver proyectos
        </a>
      </div>
    </section>
  );
}