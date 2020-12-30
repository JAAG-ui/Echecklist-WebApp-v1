const ui = SpreadsheetApp.getUi();

const onOpen = () => {
  crearMenu_();
};

const crearMenu_ = () => {
  // El underscore(_) se usa para hacer privada la función
  const menu = ui.createMenu("E-checklist");
  menu.addItem("Mostrar", "cargarFormulario");
  menu.addToUi();
};

const cargarFormulario = () => {
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate().setWidth(850).setHeight(600);
  ui.showModalDialog(html, "E-checklist WebApp");
};
