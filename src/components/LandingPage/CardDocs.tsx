import { Button, Card } from "keep-react";
import { getFileName, handleDownload } from "../../utils/file";

interface PdfProps {
  pdf: string;
}

const CardDocs: React.FC<PdfProps> = ({ pdf }) => {
  const fileName = getFileName(pdf);

  return (
    <Card>
      <Card.Header className="relative">
        <img
          src="https://previews.123rf.com/images/sanek13744/sanek137441712/sanek13744171200361/92330261-descargar-pdf-de-fondo-sin-patr%C3%B3n-ilustraci%C3%B3n-de-vector-plano-de-negocios-patr%C3%B3n-de-s%C3%ADmbolo-de.jpg"
          alt="image"
          className="filter blur-sm"
        />
        <p className="absolute text-2xl font-bold inset-0 flex items-center justify-center">
          {fileName}
        </p>
      </Card.Header>
      <Card.Content>
        <Button
          className="w-full flex gap-2"
          size="sm"
          color="primary"
          onClick={() => handleDownload(pdf)}
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
          Descargar
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CardDocs;
