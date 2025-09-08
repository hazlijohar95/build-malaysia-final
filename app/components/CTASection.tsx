export default function CTASection() {
  return (
    <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-12 leading-tight">
          Do great work in Malaysia.
          <br />
          <span className="text-gray-400">Join Build.Malaysia</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            Check Eligibility
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            See Who Qualified
          </button>
        </div>
        
      </div>
    </section>
  );
}