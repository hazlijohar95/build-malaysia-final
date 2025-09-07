const companies = [
  { name: "gojek", logo: "GOJEK" },
  { name: "grab", logo: "GRAB" },
  { name: "shopee", logo: "SHOPEE" },
  { name: "tiktok", logo: "TIKTOK" },
  { name: "lazada", logo: "LAZADA" },
  { name: "carsome", logo: "CARSOME" },
  { name: "touch-n-go", logo: "TOUCH 'N GO" },
  { name: "airasia", logo: "AIRASIA" },
];

export default function CompaniesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight tracking-tight">
            Extraordinary technology companies
            <br />
            are building in Malaysia.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Across Fintech • E-commerce • Transportation • Travel • Gaming • AI
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-black p-8 lg:p-12 h-24 lg:h-32 flex items-center justify-center transition-all duration-300 hover:shadow-sm border border-white/20">
                <div className="text-gray-300 font-medium text-xs lg:text-sm tracking-wider transition-colors group-hover:text-white">
                  {company.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}