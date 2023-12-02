'use client'
import Image from 'next/image';
const page = () => {
  const faqInfo = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      isExpanded: false,
    },
    {
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
      isExpanded: false,
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      isExpanded: false,
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      isExpanded: false,
    },
  ];

  return (
    <main>
      <div>
        <header>
          <Image src={'/FAQ/images/icon-star.svg'} width={50} height={50} />
          <h1>FAQs</h1>
        </header>
        <section>
       {faqInfo.map((faqItem) => (
            <div key={faqItem.question} className="faq-item">
              <div className="question" onClick={() => faqItem.isExpanded}>
                <h3>{faqItem.question}</h3>
                {faqItem.isExpanded && <span className="arrow">&#9654;</span>}
              </div>
              <div
                className="answer"
                style={{ display: faqItem.isExpanded ? 'block' : 'none' }}
              >
                <p>{faqItem.answer}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
