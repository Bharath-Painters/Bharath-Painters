// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styled from "styled-components";

// // SEO-optimized FAQ data with keywords
// const faqData = [
//   {
//     id: 1,
//     question: "What are Bharath Painters in Bangalore?",
//     answer:
//       "Bharath Painters is a leading painting contractor in Bangalore offering interior, exterior, and waterproofing services. We deliver affordable, professional, and long-lasting painting solutions for homes and commercial spaces. As one of the top painters in Bangalore, we pride ourselves on quality workmanship and customer satisfaction.",
//     keywords: [
//       "top painters in bangalore",
//       "painting contractor in Bangalore",
//       "affordable painting services",
//     ],
//   },
//   {
//     id: 2,
//     question: "How soon will you visit my site for assessment?",
//     answer:
//       "Our team commits to a site visit within 24 hours of your request. As professional painters in Bangalore, we understand the importance of prompt service and quick response times.",
//     keywords: [
//       "painters in bangalore",
//       "painting services bangalore",
//       "quick painting assessment",
//     ],
//   },
//   {
//     id: 3,
//     question: "When will I receive the quotation after a site visit?",
//     answer:
//       "You'll get a transparent quotation within 24 hours after the site assessment. Our affordable painting services in Bangalore come with clear pricing and no hidden costs.",
//     keywords: [
//       "painting quotation bangalore",
//       "affordable painting services",
//       "transparent pricing",
//     ],
//   },
//   {
//     id: 4,
//     question: "What are your working hours and availability?",
//     answer:
//       "We're open Mon–Sat: 8 AM to 6 PM, Sunday: 10 AM to 4 PM, with emergency / same-day services available. As reliable painters in Bangalore, we work around your schedule.",
//     keywords: [
//       "emergency painting services bangalore",
//       "weekend painters bangalore",
//       "same-day painting service",
//     ],
//   },
//   {
//     id: 5,
//     question: "What guarantee do you offer on your work?",
//     answer:
//       "We offer a 100% satisfaction guarantee — we'll ensure quality and correctness of every project. As the best painters in Bangalore, we stand behind our work with confidence.",
//     keywords: [
//       "best painters in bangalore",
//       "guaranteed painting work",
//       "quality painting services",
//     ],
//   },
//   {
//     id: 6,
//     question: "Do you offer free site inspections?",
//     answer:
//       "Yes, Bharath Painters provides free site inspection in Bangalore before giving you a detailed quotation. Our professional house painters in Bangalore evaluate your needs thoroughly.",
//     keywords: [
//       "free painting inspection bangalore",
//       "house painters bangalore",
//       "painting quotation",
//     ],
//   },
//   {
//     id: 7,
//     question: "Do you help with selecting paint colors and finishes?",
//     answer:
//       "Yes, our professional painters in Bangalore offer color consultation to help you choose the right shades, textures, and finishes for your space. Our expert color consultants ensure your home or office looks perfect.",
//     keywords: [
//       "color consultation bangalore",
//       "paint finish experts",
//       "texture painting bangalore",
//     ],
//   },
//   {
//     id: 8,
//     question: "Can you handle both residential and commercial projects?",
//     answer:
//       "Yes, we provide residential painting services for homes and apartments as well as commercial painting services in Bangalore for offices and businesses. No project is too big or small for Bharath Painters.",
//     keywords: [
//       "residential painters bangalore",
//       "commercial painting services",
//       "office painters bangalore",
//     ],
//   },
//   {
//     id: 9,
//     question: "Can I request textured or designer walls?",
//     answer:
//       "Yes, we specialize in designer wall painting, texture painting, and wallpaper installation to give your space a modern look. Our creative painters in Bangalore can transform any wall into a work of art.",
//     keywords: [
//       "texture wall painters bangalore",
//       "designer wall painting",
//       "wallpaper installation bangalore",
//     ],
//   },
//   {
//     id: 10,
//     question: "Do you provide waterproofing solutions before painting?",
//     answer:
//       "Yes, we offer wall waterproofing services in Bangalore to protect your walls and ensure long-lasting paint results. Our comprehensive waterproofing solutions prevent dampness and extend the life of your paint.",
//     keywords: [
//       "waterproofing services bangalore",
//       "damp-proof painting",
//       "long-lasting paint solutions",
//     ],
//   },
//   {
//     id: 11,
//     question: "How do you ensure minimal disruption during painting projects?",
//     answer:
//       "As professional painters in Bangalore, we work efficiently and cleanly, covering furniture and floors, and maintaining a tidy workspace. We respect your property and minimize disruption to your daily routine.",
//     keywords: [
//       "clean painting services bangalore",
//       "minimal disruption painters",
//       "professional house painters",
//     ],
//   },
//   {
//     id: 12,
//     question: "What types of paints do you use?",
//     answer:
//       "We use premium quality, eco-friendly paints from trusted brands. Our expert painters in Bangalore select the best paint types based on your specific requirements and environmental conditions.",
//     keywords: [
//       "eco-friendly painters bangalore",
//       "premium paint services",
//       "quality paint contractors",
//     ],
//   },
// ];

// const FAQContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 1rem 0.5rem;

//   @media (min-width: 768px) {
//     padding: 2rem 1rem;
//   }

//   @media (min-width: 1200px) {
//     padding: 3rem 2rem;
//   }
// `;

// const FAQHeader = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;

//   h2 {
//     font-size: 1.6rem;
//     color: #333;
//     margin-bottom: 0.75rem;
//     position: relative;
//     display: inline-block;

//     @media (min-width: 768px) {
//       font-size: 2.2rem;
//     }

//     &::after {
//       content: "";
//       position: absolute;
//       bottom: -8px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60px;
//       height: 3px;
//       background: linear-gradient(90deg, #3498db, #2c3e50);
//     }
//   }

//   p {
//     color: #666;
//     max-width: 700px;
//     margin: 0 auto;
//     font-size: 0.95rem;

//     @media (min-width: 768px) {
//       font-size: 1.05rem;
//     }
//   }
// `;

// const SearchContainer = styled.div`
//   margin-bottom: 1.5rem;

//   input {
//     width: 100%;
//     padding: 0.75rem;
//     font-size: 0.95rem;
//     border: 2px solid #ddd;
//     border-radius: 8px;
//     transition: all 0.3s ease;

//     &:focus {
//       outline: none;
//       border-color: #3498db;
//       box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
//     }

//     @media (min-width: 768px) {
//       padding: 1rem;
//       font-size: 1rem;
//     }
//   }
// `;

// const FAQList = styled.div`
//   display: grid;
//   gap: 1rem;

//   @media (min-width: 768px) {
//     gap: 1.25rem;
//   }
// `;

// const FAQItem = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//     transform: translateY(-2px);
//   }
// `;

// // ✅ Transient prop $isActive (not passed to DOM)
// const FAQQuestion = styled.div.attrs((props) => ({
//   "data-active": props.$isActive,
// }))`
//   padding: 1rem;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 600;
//   font-size: 1rem;
//   background: ${(props) =>
//     props.$isActive ? "linear-gradient(90deg, #3498db, #2c3e50)" : "#f8f9fa"};
//   color: ${(props) => (props.$isActive ? "#fff" : "#2c3e50")};
//   transition: all 0.3s ease;

//   @media (min-width: 768px) {
//     padding: 1.25rem;
//     font-size: 1.1rem;
//   }

//   .icon {
//     transition: transform 0.3s ease;
//     transform: ${(props) => (props.$isActive ? "rotate(45deg)" : "rotate(0)")};
//     font-size: 1.3rem;
//   }
// `;

// const FAQAnswer = styled(motion.div)`
//   padding: 0 1rem;
//   color: #555;
//   line-height: 1.6;

//   .answer-content {
//     padding: 0 0 1rem;
//     font-size: 0.95rem;

//     @media (min-width: 768px) {
//       padding: 0 0 1.25rem;
//       font-size: 1.05rem;
//     }
//   }
// `;

// const NoResults = styled.div`
//   text-align: center;
//   padding: 2rem;
//   color: #666;
//   font-style: italic;
// `;

// const FAQ = () => {
//   const [activeId, setActiveId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   const toggleFAQ = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   const filteredFAQs = faqData.filter(
//     (faq) =>
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.keywords.some((keyword) =>
//         keyword.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   const visibleFAQs = showAll ? filteredFAQs : filteredFAQs.slice(0, 4);

//   return (
//     <FAQContainer>
//       <FAQHeader>
//         <h2>Frequently Asked Questions</h2>
//         <p>
//           Answers to common questions about Bharath Painters — Bangalore’s top
//           painting contractor.
//         </p>
//       </FAQHeader>

//       <SearchContainer>
//         <input
//           type="text"
//           placeholder="Search questions or keywords..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setShowAll(false); // Reset on search
//           }}
//         />
//       </SearchContainer>

//       <FAQList>
//         <AnimatePresence initial={false}>
//           {visibleFAQs.length > 0 ? (
//             visibleFAQs.map((faq) => (
//               <motion.div
//                 key={faq.id}
//                 layout
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <FAQItem>
//                   <FAQQuestion
//                     $isActive={activeId === faq.id}
//                     onClick={() => toggleFAQ(faq.id)}
//                   >
//                     <span>{faq.question}</span>
//                     <span className="icon">+</span>
//                   </FAQQuestion>

//                   <AnimatePresence>
//                     {activeId === faq.id && (
//                       <FAQAnswer
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="answer-content">{faq.answer}</div>
//                       </FAQAnswer>
//                     )}
//                   </AnimatePresence>
//                 </FAQItem>
//               </motion.div>
//             ))
//           ) : (
//             <NoResults>
//               No matching questions found. Please try a different search.
//             </NoResults>
//           )}
//         </AnimatePresence>
//       </FAQList>

//       {!showAll && filteredFAQs.length > 4 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           style={{ textAlign: "center", marginTop: "1.5rem" }}
//         >
//           <button
//             onClick={() => setShowAll(true)}
//             style={{
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               backgroundColor: "#3498db",
//               color: "#fff",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//             }}
//           >
//             Load More
//           </button>
//         </motion.div>
//       )}
//     </FAQContainer>
//   );
// };

// export default FAQ;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What are Bharath Painters in Bangalore?",
    answer:
      "Bharath Painters is a leading painting contractor in Bangalore offering interior, exterior, and waterproofing services. We deliver affordable, professional, and long-lasting painting solutions for homes and commercial spaces. As one of the top painters in Bangalore, we pride ourselves on quality workmanship and customer satisfaction.",
    keywords: [
      "top painters in bangalore",
      "painting contractor in Bangalore",
      "affordable painting services",
    ],
  },
  {
    id: 2,
    question: "How soon will you visit my site for assessment?",
    answer:
      "Our team commits to a site visit within 24 hours of your request. As professional painters in Bangalore, we understand the importance of prompt service and quick response times.",
    keywords: [
      "painters in bangalore",
      "painting services bangalore",
      "quick painting assessment",
    ],
  },
  {
    id: 3,
    question: "When will I receive the quotation after a site visit?",
    answer:
      "You'll get a transparent quotation within 24 hours after the site assessment. Our affordable painting services in Bangalore come with clear pricing and no hidden costs.",
    keywords: [
      "painting quotation bangalore",
      "affordable painting services",
      "transparent pricing",
    ],
  },
  {
    id: 4,
    question: "What are your working hours and availability?",
    answer:
      "We're open Mon–Sat: 8 AM to 6 PM, Sunday: 10 AM to 4 PM, with emergency / same-day services available. As reliable painters in Bangalore, we work around your schedule.",
    keywords: [
      "emergency painting services bangalore",
      "weekend painters bangalore",
      "same-day painting service",
    ],
  },
  {
    id: 5,
    question: "What guarantee do you offer on your work?",
    answer:
      "We offer a 100% satisfaction guarantee — we'll ensure quality and correctness of every project. As the best painters in Bangalore, we stand behind our work with confidence.",
    keywords: [
      "best painters in bangalore",
      "guaranteed painting work",
      "quality painting services",
    ],
  },
  {
    id: 6,
    question: "Do you offer free site inspections?",
    answer:
      "Yes, Bharath Painters provides free site inspection in Bangalore before giving you a detailed quotation. Our professional house painters in Bangalore evaluate your needs thoroughly.",
    keywords: [
      "free painting inspection bangalore",
      "house painters bangalore",
      "painting quotation",
    ],
  },
  {
    id: 7,
    question: "Do you help with selecting paint colors and finishes?",
    answer:
      "Yes, our professional painters in Bangalore offer color consultation to help you choose the right shades, textures, and finishes for your space. Our expert color consultants ensure your home or office looks perfect.",
    keywords: [
      "color consultation bangalore",
      "paint finish experts",
      "texture painting bangalore",
    ],
  },
  {
    id: 8,
    question: "Can you handle both residential and commercial projects?",
    answer:
      "Yes, we provide residential painting services for homes and apartments as well as commercial painting services in Bangalore for offices and businesses. No project is too big or small for Bharath Painters.",
    keywords: [
      "residential painters bangalore",
      "commercial painting services",
      "office painters bangalore",
    ],
  },
  {
    id: 9,
    question: "Can I request textured or designer walls?",
    answer:
      "Yes, we specialize in designer wall painting, texture painting, and wallpaper installation to give your space a modern look. Our creative painters in Bangalore can transform any wall into a work of art.",
    keywords: [
      "texture wall painters bangalore",
      "designer wall painting",
      "wallpaper installation bangalore",
    ],
  },
  {
    id: 10,
    question: "Do you provide waterproofing solutions before painting?",
    answer:
      "Yes, we offer wall waterproofing services in Bangalore to protect your walls and ensure long-lasting paint results. Our comprehensive waterproofing solutions prevent dampness and extend the life of your paint.",
    keywords: [
      "waterproofing services bangalore",
      "damp-proof painting",
      "long-lasting paint solutions",
    ],
  },
  {
    id: 11,
    question: "How do you ensure minimal disruption during painting projects?",
    answer:
      "As professional painters in Bangalore, we work efficiently and cleanly, covering furniture and floors, and maintaining a tidy workspace. We respect your property and minimize disruption to your daily routine.",
    keywords: [
      "clean painting services bangalore",
      "minimal disruption painters",
      "professional house painters",
    ],
  },
  {
    id: 12,
    question: "What types of paints do you use?",
    answer:
      "We use premium quality, eco-friendly paints from trusted brands. Our expert painters in Bangalore select the best paint types based on your specific requirements and environmental conditions.",
    keywords: [
      "eco-friendly painters bangalore",
      "premium paint services",
      "quality paint contractors",
    ],
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const visibleFAQs = showAll ? filteredFAQs : filteredFAQs.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 lg:py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 relative inline-block after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-gray-700">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Answers to common questions about Bharath Painters — Bangalore’s top
          painting contractor.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
          placeholder="Search questions or keywords..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowAll(false);
          }}
        />
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {visibleFAQs.length > 0 ? (
            visibleFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="bg-white rounded-md shadow hover:shadow-md transition-all overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left font-semibold text-sm sm:text-base ${
                      activeId === faq.id
                        ? "bg-gradient-to-r from-blue-500 to-gray-800 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <span>{faq.question}</span>
                    <span className="text-lg transition-transform duration-300">
                      {activeId === faq.id ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 pt-2 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic py-6">
              No matching questions found.
            </p>
          )}
        </AnimatePresence>
      </div>

      {!showAll && filteredFAQs.length > 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-4"
        >
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition-all"
          >
            Load More
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default FAQ;
