import CardPdf from "../components/DocsPage/CardPdf";
import { pdfFiles } from "../utils/file";

const DocsPage: React.FC = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="shadow-xLarge mx-10 mb-10 p-5">
        <h1 className="text-5xl font-bold flex justify-center">
          <p className="text-black">Edu</p>
          <p className="text-[#d90429]">Share</p>
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {pdfFiles.map((pdf, index) => (
          <CardPdf key={index} pdf={pdf} />
        ))}
      </div>
    </section>
  );
};

export default DocsPage;
