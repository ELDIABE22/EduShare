import { Button } from "keep-react";
import StepsUploadDocument from "./StepsUploadDocument";
import { Link } from "react-router-dom";

const SectionUploadEducationalDocs = () => {
  return (
    <section className="bg-gray-100 py-8 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto text-center min-h-screen flex flex-col justify-evenly">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quieres Compartir tu Documento?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Participa en nuestra comunidad compartiendo tus documentos
            educativos. Sigue estos pasos para comenzar:
          </p>
        </div>
        <StepsUploadDocument />
        <Link to="/docs/upload" className="flex justify-center">
          <Button color="error" variant="outline">
            Subir Mi PDF
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SectionUploadEducationalDocs;
