export default function CTASection() {
  return (
    <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-medium text-black mb-16 leading-tight tracking-tight">
          Do great work
          <br />
          in Malaysia.
          <br />
          <span className="text-gray-400">Join Build.Malaysia</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-primary text-lg px-10 py-4 font-medium">
            Begin Evaluation
          </button>
          <button className="btn-secondary text-lg px-10 py-4 font-medium">
            Learn More
          </button>
        </div>
        
        <p className="mt-12 text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Join Malaysia's most exclusive network of extraordinary talent building the future of Southeast Asia.
        </p>
      </div>
    </section>
  );
}