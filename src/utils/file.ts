export const handleDownload = (pdf: string) => {
  const link = document.createElement("a");
  link.href = pdf;
  link.download = getFileName(pdf);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getFileName = (url: string): string => {
  return url.split("/").pop() || "";
};

export const pdfFiles = [
  // Primaria
  "Matematicas_Primaria_1.pdf",
  "Ciencias_Naturales_Primaria_2.pdf",
  "Lengua_y_Literatura_Primaria_3.pdf",
  "Historia_Primaria_4.pdf",
  "Geografia_Primaria_5.pdf",
  "Educacion_Artistica_Primaria_6.pdf",

  // Secundaria
  "Matematicas_Secundaria_1.pdf",
  "Fisica_Secundaria_2.pdf",
  "Quimica_Secundaria_3.pdf",
  "Biologia_Secundaria_4.pdf",
  "Lengua_y_Literatura_Secundaria_5.pdf",
  "Historia_Secundaria_6.pdf",

  // Educación Superior
  "Calculo_Educacion_Superior_1.pdf",
  "Algebra_Lineal_Educacion_Superior_2.pdf",
  "Fisica_Educacion_Superior_3.pdf",
  "Quimica_Organica_Educacion_Superior_4.pdf",
  "Literatura_Universal_Educacion_Superior_5.pdf",
  "Historia_Contemporanea_Educacion_Superior_6.pdf",
];
