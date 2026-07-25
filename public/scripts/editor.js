let tipoActual = 'temporada';

const CAMPOS = [
  { id: 'campo-arrendador-nombre',      clase: 'etiqueta-arrendador-nombre' },
  { id: 'campo-arrendador-nombre',      clase: 'etiqueta-arrendador-nombre2' },
  { id: 'campo-arrendador-dni',         clase: 'etiqueta-arrendador-dni' },
  { id: 'campo-arrendador-dni',         clase: 'etiqueta-arrendador-dni2' },
  { id: 'campo-arrendador-direccion',   clase: 'etiqueta-arrendador-direccion' },
  { id: 'campo-arrendador-estado',      clase: 'etiqueta-arrendador-estado' },
  { id: 'campo-arrendador-regimen',     clase: 'etiqueta-arrendador-regimen' },
  { id: 'campo-arrendador-telefono',    clase: 'etiqueta-arrendador-telefono' },
  { id: 'campo-arrendador-email',       clase: 'etiqueta-arrendador-email' },
  { id: 'campo-arrendatario-nombre',    clase: 'etiqueta-arrendatario-nombre' },
  { id: 'campo-arrendatario-nombre',    clase: 'etiqueta-arrendatario-nombre2' },
  { id: 'campo-arrendatario-dni',       clase: 'etiqueta-arrendatario-dni' },
  { id: 'campo-arrendatario-dni',       clase: 'etiqueta-arrendatario-dni2' },
  { id: 'campo-arrendatario-direccion', clase: 'etiqueta-arrendatario-direccion' },
  { id: 'campo-arrendatario-estado',    clase: 'etiqueta-arrendatario-estado' },
  { id: 'campo-arrendatario-regimen',   clase: 'etiqueta-arrendatario-regimen' },
  { id: 'campo-arrendatario-domicilio', clase: 'etiqueta-arrendatario-domicilio' },
  { id: 'campo-arrendatario-telefono',  clase: 'etiqueta-arrendatario-telefono' },
  { id: 'campo-arrendatario-email',     clase: 'etiqueta-arrendatario-email' },
  { id: 'campo-avalista-nombre',        clase: 'etiqueta-avalista-nombre' },
  { id: 'campo-avalista-nombre',        clase: 'etiqueta-avalista-nombre2' },
  { id: 'campo-avalista-dni',           clase: 'etiqueta-avalista-dni' },
  { id: 'campo-avalista-dni',           clase: 'etiqueta-avalista-dni2' },
  { id: 'campo-avalista-direccion',     clase: 'etiqueta-avalista-direccion' },
  { id: 'campo-avalista-estado',        clase: 'etiqueta-avalista-estado' },
  { id: 'campo-avalista-regimen',       clase: 'etiqueta-avalista-regimen' },
  { id: 'campo-avalista-telefono',      clase: 'etiqueta-avalista-telefono' },
  { id: 'campo-avalista-telefono2',     clase: 'etiqueta-avalista-telefono' },
  { id: 'campo-avalista-email',         clase: 'etiqueta-avalista-email' },
  { id: 'campo-avalista-email2',        clase: 'etiqueta-avalista-email' },
  { id: 'campo-inmueble-direccion',     clase: 'etiqueta-inmueble-direccion' },
  { id: 'campo-inmueble-sup-construida', clase: 'etiqueta-inmueble-sup-construida' },
  { id: 'campo-inmueble-sup-util',      clase: 'etiqueta-inmueble-sup-util' },
  { id: 'campo-inmueble-notaria',       clase: 'etiqueta-inmueble-notaria' },
  { id: 'campo-inmueble-notario-nombre', clase: 'etiqueta-inmueble-notario-nombre' },
  { id: 'campo-inmueble-fecha-escritura', clase: 'etiqueta-inmueble-fecha-escritura' },
  { id: 'campo-registro-numero',        clase: 'etiqueta-registro-numero' },
  { id: 'campo-registro-finca',         clase: 'etiqueta-registro-finca' },
  { id: 'campo-registro-catastro',      clase: 'etiqueta-registro-catastro' },
  { id: 'campo-contrato-lugar-fecha',   clase: 'etiqueta-contrato-lugar-fecha' },
  { id: 'campo-contrato-motivo',        clase: 'etiqueta-contrato-motivo' },
  { id: 'campo-contrato-inicio',        clase: 'etiqueta-contrato-inicio' },
  { id: 'campo-contrato-fin',           clase: 'etiqueta-contrato-fin' },
  { id: 'campo-renta-letra',            clase: 'etiqueta-renta-letra' },
  { id: 'campo-renta-numero',           clase: 'etiqueta-renta-numero' },
  { id: 'campo-contrato-iban',          clase: 'etiqueta-contrato-iban' },
  { id: 'campo-contrato-fianza',        clase: 'etiqueta-contrato-fianza' },
  { id: 'campo-contrato-convivientes',  clase: 'etiqueta-contrato-convivientes' },
  { id: 'campo-vivienda-inicio',        clase: 'etiqueta-vivienda-inicio' },
  { id: 'campo-vivienda-duracion',      clase: 'etiqueta-vivienda-duracion' },
  { id: 'campo-vivienda-renta-letra',   clase: 'etiqueta-vivienda-renta-letra' },
  { id: 'campo-vivienda-renta-numero',  clase: 'etiqueta-vivienda-renta-numero' },
  { id: 'campo-vivienda-iban',          clase: 'etiqueta-vivienda-iban' },
  { id: 'campo-vivienda-fianza',        clase: 'etiqueta-vivienda-fianza' },
  { id: 'campo-vivienda-seguro-rc',     clase: 'etiqueta-vivienda-seguro-rc' },
  { id: 'campo-local-destino',          clase: 'etiqueta-local-destino' },
  { id: 'campo-local-duracion',         clase: 'etiqueta-local-duracion' },
  { id: 'campo-local-fecha-fin',        clase: 'etiqueta-local-fecha-fin' },
  { id: 'campo-local-renta-letra',      clase: 'etiqueta-local-renta-letra' },
  { id: 'campo-local-renta-numero',     clase: 'etiqueta-local-renta-numero' },
  { id: 'campo-local-iban',             clase: 'etiqueta-local-iban' },
  { id: 'campo-local-gastos',           clase: 'etiqueta-local-gastos' },
  { id: 'campo-local-renuncia',         clase: 'etiqueta-local-renuncia' },
  { id: 'campo-local-fianza',           clase: 'etiqueta-local-fianza' },
  { id: 'campo-registro-tomo',          clase: 'etiqueta-registro-tomo' },
  { id: 'campo-registro-libro',         clase: 'etiqueta-registro-libro' },
  { id: 'campo-registro-folio',         clase: 'etiqueta-registro-folio' },
  { id: 'campo-grandes-registro-ciudad', clase: 'etiqueta-grandes-registro-ciudad' },
  { id: 'campo-grandes-dia',            clase: 'etiqueta-grandes-dia' },
  { id: 'campo-grandes-mes',            clase: 'etiqueta-grandes-mes' },
  { id: 'campo-grandes-anyo',           clase: 'etiqueta-grandes-anyo' },
  { id: 'campo-grandes-inicio',         clase: 'etiqueta-grandes-inicio' },
  { id: 'campo-grandes-renta-anual',    clase: 'etiqueta-grandes-renta-anual' },
  { id: 'campo-grandes-renta-mensual',  clase: 'etiqueta-grandes-renta-mensual' },
  { id: 'campo-grandes-titular',        clase: 'etiqueta-grandes-titular' },
  { id: 'campo-grandes-iban',           clase: 'etiqueta-grandes-iban' },
  { id: 'campo-grandes-entidad',        clase: 'etiqueta-grandes-entidad' },
  { id: 'campo-grandes-oficina',        clase: 'etiqueta-grandes-oficina' },
  { id: 'campo-grandes-dc',             clase: 'etiqueta-grandes-dc' },
  { id: 'campo-grandes-cuenta',         clase: 'etiqueta-grandes-cuenta' },
  { id: 'campo-grandes-fianza',         clase: 'etiqueta-grandes-fianza' },
];

const VALORES_DEFECTO = {};

function procesarCambios() {
  for (const campo of CAMPOS) {
    const input = document.getElementById(campo.id);
    if (!input) continue;
    const valor = input.value;
    const nodos = document.querySelectorAll('.' + campo.clase);
    for (let i = 0; i < nodos.length; i++) {
      nodos[i].textContent = valor;
    }
  }
  actualizarTextoSuministros();
}

function actualizarTextoSuministros() {
  const select = document.getElementById('campo-contrato-suministros');
  if (!select) return;
  const opciones = {
    opcion1: 'Opción 1. La PARTE ARRENDADORA informará a la PARTE ARRENDATARIA del importe de los mismos debiendo ser abonados junto con el recibo de la renta del mes siguiente al que hayan sido comunicados.',
    opcion2: 'Opción 2. La PARTE ARRENDATARIA deberá facilitar su número de cuenta bancaria a efectos de domiciliar el pago de los mismos, para lo que la PARTE ARRENDADORA comunicará los datos de las empresas suministradoras.',
    opcion3: 'Opción 3. Deberá la PARTE ARRENDATARIA, cambiar la titularidad de los suministros a su nombre durante la duración del Contrato de Arrendamiento.'
  };
  const nodos = document.querySelectorAll('.etiqueta-contrato-suministros');
  for (let i = 0; i < nodos.length; i++) {
    nodos[i].textContent = opciones[select.value] || select.options[select.selectedIndex].text;
  }
}

function seleccionarTipo(tipo) {
  tipoActual = tipo;
  document.querySelectorAll('.tipo-card').forEach(c => c.classList.remove('activo'));
  const card = document.querySelector(`.tipo-card[data-tipo="${tipo}"]`);
  if (card) card.classList.add('activo');
  document.querySelectorAll('.nota-legal').forEach(n => n.classList.remove('visible'));
  const nota = document.getElementById('nota-' + tipo);
  if (nota) nota.classList.add('visible');
  document.querySelectorAll('.grupo-tipo').forEach(g => {
    const mostrar = g.dataset.mostrar;
    if (!mostrar) return;
    const tipos = mostrar.split(',').map(t => t.trim());
    g.classList.toggle('visible', tipos.includes(tipo) || tipos.includes('ambos'));
  });
  procesarCambios();
}

function ejecutarImpresion() {
  const nombreArrendatario = document.getElementById('campo-arrendatario-nombre').value || 'contrato';
  const labels = { temporada: 'Temporada', vivienda: 'Vivienda', local: 'Local', grandes: 'GrandesTenedores' };
  const tipoLabel = labels[tipoActual] || 'Contrato';
  document.title = 'Contrato_' + tipoLabel + '_' + nombreArrendatario;
  const contratoEl = document.getElementById('contrato-' + tipoActual);
  document.querySelectorAll('.vista-impresion').forEach(el => el.style.display = 'none');
  if (contratoEl) contratoEl.style.display = 'block';
  mostrarNotificacion('Generando PDF...', true);
  setTimeout(() => {
    window.print();
    document.title = 'Editor de Contratos de Alquiler';
    if (contratoEl) contratoEl.style.display = 'none';
  }, 300);
}

function restablecerValores() {
  for (const campo of CAMPOS) {
    const input = document.getElementById(campo.id);
    if (input) input.value = VALORES_DEFECTO[campo.id] || '';
  }
  const formaPago = document.getElementById('campo-contrato-forma-pago');
  if (formaPago) formaPago.selectedIndex = 0;
  const suministros = document.getElementById('campo-contrato-suministros');
  if (suministros) suministros.selectedIndex = 0;
  procesarCambios();
  mostrarNotificacion('Valores restablecidos correctamente', true);
}

function mostrarNotificacion(mensaje, exito) {
  const notif = document.getElementById('notificacion');
  if (!notif) return;
  notif.textContent = mensaje;
  notif.className = 'notificacion mostrar ' + (exito ? 'exito' : '');
  setTimeout(() => { notif.className = 'notificacion'; }, 3000);
}

function inicializarSelector() {
  const cards = document.querySelectorAll('.tipo-card');
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      const tipo = this.dataset.tipo;
      seleccionarTipo(tipo);
    });
  });
}

function inicializarFormulario() {
  for (const campo of CAMPOS) {
    const input = document.getElementById(campo.id);
    if (input) {
      VALORES_DEFECTO[campo.id] = input.value;
      input.addEventListener('input', procesarCambios);
    }
  }
  const suministros = document.getElementById('campo-contrato-suministros');
  if (suministros) {
    suministros.addEventListener('change', procesarCambios);
  }
}

function inicializarBotones() {
  const btnPdf = document.getElementById('btn-pdf');
  const btnImprimir = document.getElementById('btn-imprimir');
  const btnRestablecer = document.getElementById('btn-restablecer');
  if (btnPdf) btnPdf.addEventListener('click', ejecutarImpresion);
  if (btnImprimir) btnImprimir.addEventListener('click', () => window.print());
  if (btnRestablecer) btnRestablecer.addEventListener('click', restablecerValores);
}

document.addEventListener('DOMContentLoaded', () => {
  inicializarSelector();
  inicializarFormulario();
  inicializarBotones();
  seleccionarTipo('temporada');
});
