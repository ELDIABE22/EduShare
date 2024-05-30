import pdfSharp from "../../assets/c-sharp-para-estudiantes.pdf";
import { Button } from "keep-react";

type PdfProps = {
  pdf: string;
};

const CardPdf: React.FC<PdfProps> = ({ pdf }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfSharp;
    link.download = pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 text-black rounded-lg shadow-md hover:bg-white transition duration-300">
      <img
        src="https://previews.123rf.com/images/topform8/topform81307/topform8130700034/20640609-educaci%C3%B3n-fondo-transparente.jpg"
        alt="pdf"
        width={200}
        height={100}
        className="w-full h-40 object-cover rounded-tl-xl rounded-bl-xl"
      />
      <div className="flex flex-col justify-between items-center h-full p-5">
        <span className="text-lg font-semibold mb-2">{pdf}</span>
        <Button
          onClick={handleDownload}
          className="py-2 px-4 flex gap-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Descargar PDF
        </Button>
      </div>
    </div>
  );
};

export default CardPdf;
