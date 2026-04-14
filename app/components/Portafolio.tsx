export const Portfolio = () => {
  const projects = [
    {
      name: "Dashboard financiero",
      desc: "Panel con métricas en tiempo real.",
    },
    {
      name: "Sistema de gestión",
      desc: "Automatización de procesos internos.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="border p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}