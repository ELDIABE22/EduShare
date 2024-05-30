import { Steps } from "keep-react";

const StepsUploadDocument = () => {
  return (
    <Steps stepType="number" className="mb-10">
      <Steps.Item
        numberOfSteps={1}
        active
        title="Tener el documento educativo listo para compartir."
      />
      <Steps.Item
        numberOfSteps={2}
        active
        title="Seleccionar la categoría adecuada."
      />
      <Steps.Item
        numberOfSteps={3}
        active
        title="Subir el archivo a nuestra plataforma."
      />
      <Steps.Item
        active
        numberOfSteps={4}
        title="Esperar aprobación de solicitud."
      />
    </Steps>
  );
};

export default StepsUploadDocument;
