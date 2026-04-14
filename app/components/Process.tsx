export const Process = () => {
  const steps = [
    "Entendemos tu necesidad",
    "Diseño de solución",
    "Desarrollo",
    "Entrega y soporte",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Cómo trabajo</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-bold mb-2">{i + 1}</div>
            <p className="text-gray-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}