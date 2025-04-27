
export default function Companies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Previous Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Replace with actual company logos */}
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
            >
              <span className="text-gray-400">Company {index}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
