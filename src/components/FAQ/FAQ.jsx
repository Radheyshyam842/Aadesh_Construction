import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer free site visits?",
      answer: "Yes, we offer a free site visit within city limits before estimation."
    },
    {
      question: "How do you ensure construction quality?",
      answer: "We only use branded materials and have strict quality checks at every stage."
    },
    {
      question: "Do you handle government projects or tenders?",
      answer: "Yes, we are fully registered and experienced in public sector projects."
    },
    {
      question: "How do payments work?",
      answer: "Flexible milestones based on progress. No hidden charges."
    },
    {
      question: "Do you offer post-construction support?",
      answer: "Absolutely. We stay in touch even after handover."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="transform transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-amber-500/10">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <FaQuestionCircle className="text-amber-500 text-xl" />
                    <span className="font-semibold text-gray-200">{faq.question}</span>
                  </div>
                  {activeIndex === index ? 
                    <FaMinus className="text-amber-500 transform rotate-180 transition-transform duration-300" /> : 
                    <FaPlus className="text-amber-500 transform transition-transform duration-300" />
                  }
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-4 bg-black/20 text-gray-300 border-t border-amber-500/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
