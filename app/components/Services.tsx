export const Services = () => {
  const services = [
    {
      title: "Landing Pages",
      desc: "Páginas optimizadas para convertir visitantes en clientes.",
    },
    {
      title: "Dashboards",
      desc: "Visualización de datos clara para tomar decisiones.",
    },
    {
      title: "Automatización",
      desc: "Ahorra tiempo automatizando procesos repetitivos.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="border p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}