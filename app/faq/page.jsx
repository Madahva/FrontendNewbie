import Image from 'next/image';
import FAQ from './FAQ';
import { faqData } from './faqData';

const page = () => {

  return (
    <main>
      <div>
        <header>
          <Image src={'/FAQ/images/icon-star.svg'} width={50} height={50} />
          <h1>FAQs</h1>
        </header>
        <section>
          {faqData.map((faqItem) => (
            <FAQ question={faqItem.question} answer={faqItem.answer} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
