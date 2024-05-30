import { Link } from "react-router-dom";
import { Button } from "keep-react";
import CardDocs from "./CardDocs";
import pdfAnatomia from "../../assets/Anatomía.pdf";
import pdfDerivada from "../../assets/Derivadas.pdf";
import pdfSharp from "../../assets/c-sharp-para-estudiantes.pdf";

const SectionExplorePDFs = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-8 relative min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explora Nuestros PDFs Educativos
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Descubre una amplia gama de documentos educativos para todos los
          niveles. Ya sea que busques materiales para tu clase o desees expandir
          tus conocimientos, tenemos algo para ti.
        </p>
        <div className="flex gap-5 mb-5">
          <CardDocs pdf={pdfAnatomia} />
          <CardDocs pdf={pdfDerivada} />
          <CardDocs pdf={pdfSharp} />
        </div>
        <Link to="/docs" className="flex justify-center mb-2">
          <Button color="error" variant="outline">
            Ver todos los documentos
          </Button>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color="#000000"
          fill="none"
          className="absolute inset-x-0 bottom-1 flex items-center justify-center w-full"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 10.5C16 10.5 13.054 13.5 12 13.5C10.9459 13.5 8 10.5 8 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default SectionExplorePDFs;
