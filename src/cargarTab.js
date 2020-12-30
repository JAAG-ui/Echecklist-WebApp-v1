const cargarTab_ = (tab) => {
  const htmlServ = HtmlService.createTemplateFromFile(tab);
  return htmlServ.evaluate().getContent();
};

const cargarEquipo = () => {
  return cargarTab_("equipo");
};

const cargarActividades = () => {
  return cargarTab_("actividades");
};

const cargarOm = () => {
  return cargarTab_("om");
};

const cargarObservaciones = () => {
  return cargarTab_("observaciones");
};
