export default function Head() {
  return (
    <>
      {/* Canonical for homepage */}
      <link rel="canonical" href="https://www.bharathpainters.com/" />
      {/* FAQPage structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are Bharath Painters in Bangalore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Bharath Painters is a leading painting contractor in Bangalore offering interior, exterior, and waterproofing services. We deliver affordable, professional, and long-lasting painting solutions for homes and commercial spaces. As one of the top painters in Bangalore, we pride ourselves on quality workmanship and customer satisfaction."
    }
  },{
    "@type": "Question",
    "name": "How soon will you visit my site for assessment?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our team commits to a site visit within 24 hours of your request. As professional painters in Bangalore, we understand the importance of prompt service and quick response times."
    }
  },{
    "@type": "Question",
    "name": "When will I receive the quotation after a site visit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You'll get a transparent quotation within 24 hours after the site assessment. Our affordable painting services in Bangalore come with clear pricing and no hidden costs."
    }
  },{
    "@type": "Question",
    "name": "What are your working hours and availability?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're open Mon–Sat: 8 AM to 6 PM, Sunday: 10 AM to 4 PM, with emergency / same-day services available. As reliable painters in Bangalore, we work around your schedule."
    }
  },{
    "@type": "Question",
    "name": "What guarantee do you offer on your work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer a 100% satisfaction guarantee — we'll ensure quality and correctness of every project. As the best painters in Bangalore, we stand behind our work with confidence."
    }
  },{
    "@type": "Question",
    "name": "Do you offer free site inspections?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Bharath Painters provides free site inspection in Bangalore before giving you a detailed quotation. Our professional house painters in Bangalore evaluate your needs thoroughly."
    }
  },{
    "@type": "Question",
    "name": "Do you help with selecting paint colors and finishes?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our professional painters in Bangalore offer color consultation to help you choose the right shades, textures, and finishes for your space. Our expert color consultants ensure your home or office looks perfect."
    }
  },{
    "@type": "Question",
    "name": "Can you handle both residential and commercial projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we provide residential painting services for homes and apartments as well as commercial painting services in Bangalore for offices and businesses. No project is too big or small for Bharath Painters."
    }
  },{
    "@type": "Question",
    "name": "Can I request textured or designer walls?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we specialize in designer wall painting, texture painting, and wallpaper installation to give your space a modern look. Our creative painters in Bangalore can transform any wall into a work of art."
    }
  },{
    "@type": "Question",
    "name": "Do you provide waterproofing solutions before painting?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer wall waterproofing services in Bangalore to protect your walls and ensure long-lasting paint results. Our comprehensive waterproofing solutions prevent dampness and extend the life of your paint."
    }
  },{
    "@type": "Question",
    "name": "How do you ensure minimal disruption during painting projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "As professional painters in Bangalore, we work efficiently and cleanly, covering furniture and floors, and maintaining a tidy workspace. We respect your property and minimize disruption to your daily routine."
    }
  },{
    "@type": "Question",
    "name": "What types of paints do you use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We use premium quality, eco-friendly paints from trusted brands. Our expert painters in Bangalore select the best paint types based on your specific requirements and environmental conditions."
    }
  }]
}`,
        }}
      />
    </>
  );
}
