import { useState } from "react";
import { Button, Card, Steps, Upload } from "keep-react";
import {
  AlignCenterHorizontal,
  DownloadSimple,
  HourglassHigh,
  Info,
  Trash,
} from "phosphor-react";

interface FileItem {
  name: string;
  lastModified: number;
  size: number;
  type: string;
}

const DocsUploadPage = () => {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [files, setFiles] = useState<FileItem[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    const pdfFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prevFiles) => [...prevFiles, ...pdfFiles]);
  };

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-8xl font-medium flex justify-center mb-5">
        <p className="text-black">Edu</p>
        <p className="text-[#d90429]">Share</p>
      </h1>
      <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 max-w-4xl">
        <Card.Content>
          <Steps stepType="icon" className="flex gap-5">
            <Steps.Item
              active={step === 0}
              completed={step >= 1}
              icon={<AlignCenterHorizontal size={20} />}
              title="Seleccionar categoria"
            />
            <Steps.Item
              completed={step >= 2}
              active={step === 1}
              icon={<DownloadSimple size={20} />}
              title="Subir archivo"
            />
            <Steps.Item
              completed={step === 3}
              active={step === 2}
              icon={<HourglassHigh size={20} />}
              title="Esperar aprobación"
            />
          </Steps>

          {step === 0 && (
            <select
              id="categorias"
              name="categorias"
              value={selectedCategory}
              onChange={handleSelectionChange}
              className="w-full p-5 shadow-lg"
            >
              <option value="">Seleccione una categoría</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="ordenSuperior">Educación Superior</option>
            </select>
          )}

          {step === 1 && (
            <Upload horizontal options={{ onDrop }} className="shadow-lg">
              <Upload.Body>
                <Upload.Icon>
                  <img
                    src="https://react.keepdesign.io/images/icon/folder.svg"
                    alt="folder"
                  />
                </Upload.Icon>
                <Upload.Text>
                  <p className="text-body-3 font-medium text-metal-600">
                    Elige un archivo para subir
                  </p>
                  <p className="text-body-4 font-normal text-metal-400">
                    Formatos PDF
                  </p>
                </Upload.Text>
              </Upload.Body>
              <Upload.Footer isFileExists={files.length > 0}>
                <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                  <Info size={16} />
                  Archivos subidos
                </p>
                <ul className="space-y-1">
                  {files?.map((file) => (
                    <li
                      key={file?.name}
                      className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600"
                    >
                      {file?.name}
                      <Trash
                        size={16}
                        color="red"
                        onClick={() => removeFile(file.name)}
                        className="cursor-pointer"
                      />
                    </li>
                  ))}
                </ul>
              </Upload.Footer>
            </Upload>
          )}

          <div className="flex items-center justify-center mt-6">
            <Button
              size="sm"
              disabled={step === 3}
              onClick={() => setStep((prev) => prev + 1)}
              color="error"
            >
              {step < 2 && "Continuar"}
              {step === 2 && "Enviar"}
              {step === 3 && "Completado"}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </section>
  );
};

export default DocsUploadPage;
