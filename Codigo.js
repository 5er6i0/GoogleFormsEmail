function EnvioCorreoFormulario(e) {
  // Declaro e inicializo variables (cambia el valor dentro de los corchetes por el número de columna donde se encuentra el dato)
  // ej. La columna 0 contiene la hora
  var RespuestasLibro = e.values; 
  var Hora = RespuestasLibro[0]; 
  var nombre = RespuestasLibro[1]; 
  var email = RespuestasLibro[2];
  
  // Mensaje HTML
  var mensaje = '<p>Gracias ' + nombre + ', por contestar el formulario. Tus respuestas fueron registradas el: '+ Hora + ' con éxito y serán atendidas a la brevedad.</p>';
  mensaje += '<p><strong>No responda a este mensaje, es un envío automático.</strong></p>';
  
  // Verifica si el correo electrónico y el mensaje no están vacíos
  if (email && mensaje) {
    // Enviamos el correo electrónico con el mensaje HTML
    GmailApp.sendEmail(email, "Email de confirmación de formulario sistemas", "", {htmlBody: mensaje});
  }
}
