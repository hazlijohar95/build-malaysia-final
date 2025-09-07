import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Evaluation · Build.Malaysia' },
    { name: 'description', content: 'Discover if you qualify as extraordinary talent for Malaysia\'s premier professional network. Complete our comprehensive assessment to unlock exclusive opportunities.' },
    { name: 'keywords', content: 'talent assessment, Malaysia evaluation, extraordinary professional, skills assessment, career evaluation' },
    { property: 'og:title', content: 'Evaluation · Build.Malaysia' },
    { property: 'og:description', content: 'Discover if you qualify as extraordinary talent for Malaysia\'s premier professional network.' },
    { name: 'twitter:title', content: 'Evaluation · Build.Malaysia' },
    { name: 'twitter:description', content: 'Discover if you qualify as extraordinary talent for Malaysia\'s premier professional network.' },
  ];
};

const steps = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself and your connection to Malaysia'
  },
  {
    id: 2,
    title: 'Professional Background',
    description: 'Share your career achievements and current role'
  },
  {
    id: 3,
    title: 'Extraordinary Criteria',
    description: 'Demonstrate your exceptional accomplishments'
  },
  {
    id: 4,
    title: 'Malaysia Connection',
    description: 'Explain your relationship and commitment to Malaysia'
  },
  {
    id: 5,
    title: 'Future Intentions',
    description: 'Outline your plans and potential contributions'
  }
];

interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  nationality: string;
  malaysianConnection: string;
  
  // Professional Background
  currentRole: string;
  currentCompany: string;
  industry: string;
  experienceYears: string;
  education: string;
  linkedinProfile: string;
  
  // Extraordinary Criteria
  achievements: string;
  awards: string;
  publications: string;
  patents: string;
  leadership: string;
  mediaRecognition: string;
  
  // Malaysia Connection
  connectionType: string;
  familyTies: string;
  previousExperience: string;
  culturalContribution: string;
  
  // Future Intentions
  returnTimeframe: string;
  interestedRoles: string;
  contributionAreas: string;
  longTermGoals: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  currentLocation: '',
  nationality: '',
  malaysianConnection: '',
  currentRole: '',
  currentCompany: '',
  industry: '',
  experienceYears: '',
  education: '',
  linkedinProfile: '',
  achievements: '',
  awards: '',
  publications: '',
  patents: '',
  leadership: '',
  mediaRecognition: '',
  connectionType: '',
  familyTies: '',
  previousExperience: '',
  culturalContribution: '',
  returnTimeframe: '',
  interestedRoles: '',
  contributionAreas: '',
  longTermGoals: ''
};

const industries = [
  'Technology & Software',
  'Financial Services',
  'Healthcare & Biotechnology',
  'Consulting',
  'Manufacturing',
  'Energy & Utilities',
  'Media & Entertainment',
  'Education & Research',
  'Government & Policy',
  'Aerospace & Defense',
  'Other'
];

const experienceRanges = [
  '0-2 years',
  '3-5 years',
  '6-10 years',
  '11-15 years',
  '16-20 years',
  '20+ years'
];

const connectionTypes = [
  'Malaysian citizen',
  'Malaysian permanent resident',
  'Born in Malaysia',
  'Malaysian parents/family',
  'Studied in Malaysia',
  'Previously worked in Malaysia',
  'Strong cultural ties',
  'Other'
];

const returnTimeframes = [
  'Immediately',
  'Within 6 months',
  'Within 1 year',
  'Within 2 years',
  'Within 5 years',
  'Exploring options',
  'Not planning to return'
];

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-medium ${
              index + 1 < currentStep
                ? 'bg-black border-black text-white'
                : index + 1 === currentStep
                ? 'bg-black border-black text-white'
                : 'bg-white border-gray-300 text-gray-400'
            }`}>
              {index + 1 < currentStep ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                step.id
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                index + 1 < currentStep ? 'bg-black' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{steps[currentStep - 1].title}</h2>
        <p className="text-gray-600 mt-1">{steps[currentStep - 1].description}</p>
      </div>
    </div>
  );
}

function PersonalInformationStep({ formData, setFormData }: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="+60 12 345 6789"
            required
          />
        </div>
        
        <div>
          <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700 mb-2">
            Current Location *
          </label>
          <input
            type="text"
            id="currentLocation"
            value={formData.currentLocation}
            onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="City, Country"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
            Nationality *
          </label>
          <input
            type="text"
            id="nationality"
            value={formData.nationality}
            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Malaysian, American, etc."
            required
          />
        </div>
        
        <div>
          <label htmlFor="malaysianConnection" className="block text-sm font-medium text-gray-700 mb-2">
            Connection to Malaysia
          </label>
          <select
            id="malaysianConnection"
            value={formData.malaysianConnection}
            onChange={(e) => setFormData({ ...formData, malaysianConnection: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Select connection type</option>
            {connectionTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function ProfessionalBackgroundStep({ formData, setFormData }: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">
            Current Role/Title *
          </label>
          <input
            type="text"
            id="currentRole"
            value={formData.currentRole}
            onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="e.g., Senior Software Engineer"
            required
          />
        </div>
        
        <div>
          <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
            Current Company *
          </label>
          <input
            type="text"
            id="currentCompany"
            value={formData.currentCompany}
            onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="e.g., Google, Microsoft, Goldman Sachs"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            id="industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          >
            <option value="">Select your industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience *
          </label>
          <select
            id="experienceYears"
            value={formData.experienceYears}
            onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          >
            <option value="">Select experience range</option>
            {experienceRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
          Education Background *
        </label>
        <textarea
          id="education"
          value={formData.education}
          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="e.g., MBA from Harvard Business School, BS Computer Science from Stanford"
          required
        />
      </div>
      
      <div>
        <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Profile
        </label>
        <input
          type="url"
          id="linkedinProfile"
          value={formData.linkedinProfile}
          onChange={(e) => setFormData({ ...formData, linkedinProfile: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
    </div>
  );
}

function ExtraordinaryCriteriaStep({ formData, setFormData }: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-2">What makes you extraordinary?</h3>
        <p className="text-sm text-gray-700">
          Share your exceptional achievements, recognition, and contributions that set you apart from your peers. 
          Be specific about awards, publications, patents, leadership roles, or any other notable accomplishments.
        </p>
      </div>
      
      <div>
        <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-2">
          Key Professional Achievements *
        </label>
        <textarea
          id="achievements"
          value={formData.achievements}
          onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Describe your most significant professional accomplishments, including quantifiable results where possible"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="awards" className="block text-sm font-medium text-gray-700 mb-2">
            Awards & Recognition
          </label>
          <textarea
            id="awards"
            value={formData.awards}
            onChange={(e) => setFormData({ ...formData, awards: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="List any awards, honors, or formal recognition you've received"
          />
        </div>
        
        <div>
          <label htmlFor="publications" className="block text-sm font-medium text-gray-700 mb-2">
            Publications & Research
          </label>
          <textarea
            id="publications"
            value={formData.publications}
            onChange={(e) => setFormData({ ...formData, publications: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Academic papers, articles, research contributions, etc."
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="patents" className="block text-sm font-medium text-gray-700 mb-2">
            Patents & Innovations
          </label>
          <textarea
            id="patents"
            value={formData.patents}
            onChange={(e) => setFormData({ ...formData, patents: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Patents held, innovations created, or technical breakthroughs"
          />
        </div>
        
        <div>
          <label htmlFor="leadership" className="block text-sm font-medium text-gray-700 mb-2">
            Leadership Roles
          </label>
          <textarea
            id="leadership"
            value={formData.leadership}
            onChange={(e) => setFormData({ ...formData, leadership: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Significant leadership positions, team sizes managed, etc."
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="mediaRecognition" className="block text-sm font-medium text-gray-700 mb-2">
          Media Coverage & Speaking
        </label>
        <textarea
          id="mediaRecognition"
          value={formData.mediaRecognition}
          onChange={(e) => setFormData({ ...formData, mediaRecognition: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Media appearances, conference speaking, thought leadership, etc."
        />
      </div>
    </div>
  );
}

function MalaysiaConnectionStep({ formData, setFormData }: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Your Malaysia Story</h3>
        <p className="text-sm text-gray-700">
          Help us understand your relationship with Malaysia and how you plan to contribute to the country's development.
        </p>
      </div>
      
      <div>
        <label htmlFor="connectionType" className="block text-sm font-medium text-gray-700 mb-2">
          Type of Malaysia Connection *
        </label>
        <select
          id="connectionType"
          value={formData.connectionType}
          onChange={(e) => setFormData({ ...formData, connectionType: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          required
        >
          <option value="">Select your connection to Malaysia</option>
          {connectionTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="familyTies" className="block text-sm font-medium text-gray-700 mb-2">
          Family & Personal Ties
        </label>
        <textarea
          id="familyTies"
          value={formData.familyTies}
          onChange={(e) => setFormData({ ...formData, familyTies: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Describe your family connections, personal ties, or emotional connection to Malaysia"
        />
      </div>
      
      <div>
        <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
          Previous Malaysia Experience
        </label>
        <textarea
          id="previousExperience"
          value={formData.previousExperience}
          onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Any previous work, study, or significant experience in Malaysia"
        />
      </div>
      
      <div>
        <label htmlFor="culturalContribution" className="block text-sm font-medium text-gray-700 mb-2">
          Cultural & Social Contribution *
        </label>
        <textarea
          id="culturalContribution"
          value={formData.culturalContribution}
          onChange={(e) => setFormData({ ...formData, culturalContribution: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="How do you plan to contribute to Malaysia's cultural, social, or economic development? What unique value can you bring?"
          required
        />
      </div>
    </div>
  );
}

function FutureIntentionsStep({ formData, setFormData }: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Your Malaysia Future</h3>
        <p className="text-sm text-gray-700">
          Share your vision for how you'll contribute to Malaysia's growth and development.
        </p>
      </div>
      
      <div>
        <label htmlFor="returnTimeframe" className="block text-sm font-medium text-gray-700 mb-2">
          Return/Contribution Timeframe *
        </label>
        <select
          id="returnTimeframe"
          value={formData.returnTimeframe}
          onChange={(e) => setFormData({ ...formData, returnTimeframe: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          required
        >
          <option value="">Select your timeframe</option>
          {returnTimeframes.map((timeframe) => (
            <option key={timeframe} value={timeframe}>{timeframe}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="interestedRoles" className="block text-sm font-medium text-gray-700 mb-2">
          Roles/Opportunities of Interest *
        </label>
        <textarea
          id="interestedRoles"
          value={formData.interestedRoles}
          onChange={(e) => setFormData({ ...formData, interestedRoles: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="What types of roles, opportunities, or positions interest you in Malaysia?"
          required
        />
      </div>
      
      <div>
        <label htmlFor="contributionAreas" className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Contribution *
        </label>
        <textarea
          id="contributionAreas"
          value={formData.contributionAreas}
          onChange={(e) => setFormData({ ...formData, contributionAreas: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Which sectors or areas would you like to contribute to? (e.g., technology innovation, financial services, healthcare, education, policy)"
          required
        />
      </div>
      
      <div>
        <label htmlFor="longTermGoals" className="block text-sm font-medium text-gray-700 mb-2">
          Long-term Vision *
        </label>
        <textarea
          id="longTermGoals"
          value={formData.longTermGoals}
          onChange={(e) => setFormData({ ...formData, longTermGoals: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Describe your long-term goals and vision for your contribution to Malaysia's development"
          required
        />
      </div>
    </div>
  );
}

export default function Evaluation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInformationStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ProfessionalBackgroundStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <ExtraordinaryCriteriaStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <MalaysiaConnectionStep formData={formData} setFormData={setFormData} />;
      case 5:
        return <FutureIntentionsStep formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-3xl mx-auto container-padding text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Evaluation Submitted Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for completing the Build.Malaysia talent evaluation. Our team will review your submission and contact you within 5-7 business days.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium text-black mr-2">1.</span>
                    Our evaluation committee reviews your application
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-black mr-2">2.</span>
                    Initial assessment and scoring based on extraordinary criteria
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-black mr-2">3.</span>
                    Potential follow-up interview or request for additional information
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-black mr-2">4.</span>
                    Final decision and next steps notification
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                You should receive a confirmation email at <strong>{formData.email}</strong> within the next few minutes.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-primary"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Talent Evaluation
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Discover if you qualify as extraordinary talent for Malaysia's premier professional network. 
              This comprehensive assessment helps us understand your background and potential contribution to Malaysia.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              <span>Estimated time: 10-15 minutes</span> • <span>All information is confidential</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto container-padding">
          <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {renderCurrentStep()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </span>
                {currentStep === steps.length ? (
                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    Submit Evaluation
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="btn-primary"
                  >
                    Next Step
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:evaluation@buildmalaysia.com" className="text-black hover:underline">
                evaluation@buildmalaysia.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}