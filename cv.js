// CURRÍCULUM INTERACTIVO - Shirin Rahman
// Los datos están separados del programa para poder cambiarlos fácilmente.

const perfil = {
  resumen: 'Desarrolladora Front-end Junior especializada en UX/UI y QA. Creo interfaces claras, accesibles y centradas en las personas.',
  disponibilidad: 'DISPONIBLE PARA NUEVAS OPORTUNIDADES',
  presentacion: 'Combino desarrollo web, diseño UX/UI y control de calidad para construir experiencias digitales funcionales. Actualmente curso el Certificado de Profesionalidad IFCD0110 de Confección y Publicación de Páginas Web.',
  email: 'shirin.rmn@gmail.com'
}

const datosPersonales = [
  { etiqueta: 'UBICACIÓN', dato: 'Barcelona, España' },
  { etiqueta: 'ENFOQUE', dato: 'Front-end · UX/UI · QA' },
  { etiqueta: 'IDIOMAS', dato: 'Español · Inglés profesional' }
]

const trayectoria = [
  {
    ano: '2026',
    titulo: 'Desarrolladora Web Front-end Junior · Prácticas FCT',
    lugar: 'Certificado profesional IFCD0110 · Próxima incorporación',
    detalle: 'Maquetación con HTML5 y CSS3, diseño responsive, adaptación de interfaces, accesibilidad web y optimización del rendimiento.'
  },
  {
    ano: '2025 - ACT.',
    titulo: 'UX/UI & QA · Proyecto de aplicación hostelera',
    lugar: 'Freelance / Independiente',
    detalle: 'Evaluación funcional y de experiencia de usuario, pruebas manuales y User Testing, detección de incidencias y propuestas de mejora.'
  },
  {
    ano: '2025 - 2026',
    titulo: 'Web Developer & UX/UI Designer · PataLimpia',
    lugar: 'Freelance',
    detalle: 'Desarrollo de una web para una cadena de peluquerías caninas con HTML5, CSS3 y JavaScript; diseño responsive y mejora de la experiencia de usuario.'
  },
  {
    ano: '2024',
    titulo: 'QA Tester · Becaria',
    lugar: 'Barcelona · 6 meses',
    detalle: 'Ejecución de casos de prueba en aplicaciones web y mobile, registro de incidencias, revisión de requisitos y trabajo con metodología Agile / Scrum.'
  },
  {
    ano: '2021 - 2023',
    titulo: 'UX/UI Designer',
    lugar: 'Proyecto de diseño de interfaces',
    detalle: 'Diseño de interfaces y prototipos interactivos con Figma y Adobe XD, definición de flujos de usuario y arquitectura de la información.'
  }
]

const habilidades = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'PHP',
  'SQL',
  'Bootstrap',
  'WordPress',
  'Responsive Design',
  'Figma',
  'Adobe XD',
  'User Testing',
  'Agile / Scrum'
]

// El gráfico muestra cuántas herramientas aparecen en cada área, no un nivel de dominio.
const areasHabilidades = [
  { nombre: 'Front-end', total: 5, ancho: 100 },
  { nombre: 'CMS y datos', total: 3, ancho: 60 },
  { nombre: 'UX/UI', total: 2, ancho: 40 },
  { nombre: 'QA y metodología', total: 2, ancho: 40 }
]

const talentos = [
  {
    id: 'frontend',
    codigo: '</>',
    nombre: 'Front-end',
    titulo: 'Construyo páginas web',
    texto: 'HTML, CSS y JavaScript para crear interfaces claras, responsive y fáciles de usar.',
    puntos: ['Maquetación', 'Responsive', 'Interacción'],
    codigoDemo: [
      'const proyecto = "web responsive";',
      '',
      'maquetarHTML();',
      'aplicarCSSModerno();',
      'activarInteraccionJS();',
      '',
      'publicar(proyecto);'
    ]
  },
  {
    id: 'uxui',
    codigo: 'UX',
    nombre: 'UX/UI',
    titulo: 'Diseño experiencias',
    texto: 'Organizo pantallas, flujos y prototipos pensando en cómo navega cada persona.',
    puntos: ['Flujos', 'Prototipos', 'Usabilidad'],
    codigoDemo: [
      'const usuario = investigarNecesidades();',
      '',
      'crearFlujo(usuario);',
      'prototiparPantallas();',
      'validarUsabilidad();',
      '',
      'mejorarExperiencia();'
    ]
  },
  {
    id: 'qa',
    codigo: 'QA',
    nombre: 'Calidad',
    titulo: 'Reviso antes de publicar',
    texto: 'Hago pruebas manuales, detecto incidencias y propongo mejoras de calidad.',
    puntos: ['Testing', 'Incidencias', 'Mejora continua'],
    codigoDemo: [
      'const pruebas = ejecutarChecklist();',
      '',
      'detectarIncidencias(pruebas);',
      'documentarErrores();',
      'verificarCorrecciones();',
      '',
      'aprobarEntrega();'
    ]
  }
]

const proyectos = [
  {
    titulo: 'PataLimpia',
    tipo: 'web',
    texto: 'Web para una cadena de peluquerías caninas: desarrollo front-end, diseño responsive y enfoque UX/UI.',
    enlace: 'https://srahman25-ops.github.io/mi-proyecto-web/'
  },
  {
    titulo: 'Aplicación hostelera',
    tipo: 'javascript',
    texto: 'Proyecto de UX/UI y QA: pruebas funcionales, análisis de incidencias y mejora de la experiencia.',
    enlace: 'https://hostelella.com/'
  },
  {
    titulo: 'Currículum interactivo',
    tipo: 'javascript',
    texto: 'CV web con filtros de proyectos, modo visual persistente y secciones desplegables.',
    enlace: '#inicio'
  }
]

const tipoProyecto = {
  todos: 'Todos',
  web: 'Web',
  javascript: 'UX/UI · QA'
}

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const elementos = {
  resumenHero: $('#hero-summary'),
  disponibilidad: $('#availability'),
  textoPerfil: $('#profile-text'),
  listaDatos: $('#facts'),
  listaTrayectoria: $('#timeline'),
  listaHabilidades: $('#skills'),
  graficoHabilidades: $('#skills-chart'),
  listaProyectos: $('#projects'),
  escaparateTalentos: $('#talent-showcase'),
  nodosTalentos: $('#talent-nodes'),
  talentoEyebrow: $('#talent-eyebrow'),
  talentoTitulo: $('#talent-title'),
  talentoTexto: $('#talent-copy'),
  talentoPuntos: $('#talent-points'),
  codigoHero: $('#code-typing'),
  filtros: $('.filters'),
  botonTema: $('.theme-toggle'),
  botonMenu: $('.menu-toggle'),
  botonImprimir: $('#print-cv'),
  barraProgreso: $('#progress-bar'),
  anoFooter: $('#year'),
  enlacesNav: $$('nav a'),
  secciones: $$('main section[id]')
}

let talentoActivo = 0
let rotacionTalentos
let escrituraCodigo
let reinicioCodigo

function crearElemento(etiqueta, clases, texto) {
  const elemento = document.createElement(etiqueta)

  if (clases) elemento.className = clases
  if (texto) elemento.textContent = texto

  return elemento
}

function escribirCodigoHero(lineas) {
  if (!elementos.codigoHero) return

  const codigoCompleto = lineas.join('\n')

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elementos.codigoHero.textContent = codigoCompleto
    return
  }

  clearInterval(escrituraCodigo)
  clearTimeout(reinicioCodigo)
  elementos.codigoHero.textContent = ''

  let indice = 0

  escrituraCodigo = setInterval(() => {
    elementos.codigoHero.textContent = codigoCompleto.slice(0, indice)
    indice++

    if (indice > codigoCompleto.length) {
      clearInterval(escrituraCodigo)
      reinicioCodigo = setTimeout(() => escribirCodigoHero(lineas), 2600)
    }
  }, 42)
}

function actualizarTalento(indice) {
  const talento = talentos[indice]

  talentoActivo = indice
  elementos.talentoEyebrow.textContent = talento.nombre
  elementos.talentoTitulo.textContent = talento.titulo
  elementos.talentoTexto.textContent = talento.texto
  elementos.escaparateTalentos.dataset.active = talento.id
  escribirCodigoHero(talento.codigoDemo)

  elementos.talentoPuntos.replaceChildren()
  talento.puntos.forEach((punto) => {
    elementos.talentoPuntos.append(crearElemento('span', '', punto))
  })

  $$('.talent-node').forEach((nodo) => {
    nodo.classList.toggle('active', Number(nodo.dataset.talento) === indice)
  })
}

function iniciarRotacionTalentos() {
  clearInterval(rotacionTalentos)
}

function mostrarTalentos() {
  elementos.nodosTalentos.replaceChildren()

  talentos.forEach((talento, indice) => {
    const boton = crearElemento('button', 'talent-node', talento.nombre)

    boton.type = 'button'
    boton.dataset.talento = indice
    boton.dataset.code = talento.codigo
    boton.setAttribute('aria-label', `Mostrar talento: ${talento.nombre}`)
    elementos.nodosTalentos.append(boton)
  })

  actualizarTalento(0)
  iniciarRotacionTalentos()
}

function seleccionarTalento(evento) {
  const boton = evento.target.closest('.talent-node')
  if (!boton) return

  const indice = Number(boton.dataset.talento)
  if (indice === talentoActivo) return

  actualizarTalento(indice)
  iniciarRotacionTalentos()
}

function moverEscaparateTalentos(evento) {
  if (window.innerWidth <= 960 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const rectangulo = elementos.escaparateTalentos.getBoundingClientRect()
  const x = ((evento.clientX - rectangulo.left) / rectangulo.width - .5) * 18
  const y = ((evento.clientY - rectangulo.top) / rectangulo.height - .5) * 18

  elementos.escaparateTalentos.style.setProperty('--mx', `${x}px`)
  elementos.escaparateTalentos.style.setProperty('--my', `${y}px`)
}

function centrarEscaparateTalentos() {
  elementos.escaparateTalentos.style.setProperty('--mx', '0px')
  elementos.escaparateTalentos.style.setProperty('--my', '0px')
}

function mostrarDatosPersonales() {
  elementos.listaDatos.replaceChildren()

  datosPersonales.forEach((dato) => {
    const tarjeta = crearElemento('div', 'fact')
    const etiqueta = crearElemento('span', '', dato.etiqueta)
    const contenido = crearElemento('strong', '', dato.dato)

    tarjeta.append(etiqueta, contenido)
    elementos.listaDatos.append(tarjeta)
  })
}

function mostrarTrayectoria() {
  elementos.listaTrayectoria.replaceChildren()

  trayectoria.forEach((experiencia, indice) => {
    const articulo = crearElemento('article', 'timeline-item')
    const ano = crearElemento('span', 'timeline-year', experiencia.ano)
    const contenido = crearElemento('div')
    const titulo = crearElemento('h3', '', experiencia.titulo)
    const lugar = crearElemento('p', '', experiencia.lugar)
    const boton = crearElemento('button', 'btnDetalle', '+')
    const detalle = crearElemento('div', 'details')
    const detalleTexto = crearElemento('p', '', experiencia.detalle)
    const detalleId = `detalle-${indice}`

    boton.type = 'button'
    boton.dataset.indice = indice
    boton.setAttribute('aria-expanded', 'false')
    boton.setAttribute('aria-controls', detalleId)
    boton.setAttribute('aria-label', `Ver detalle de ${experiencia.titulo}`)

    detalle.id = detalleId
    detalle.append(detalleTexto)
    contenido.append(titulo, lugar)
    articulo.append(ano, contenido, boton, detalle)
    elementos.listaTrayectoria.append(articulo)
  })
}

function alternarDetalle(boton) {
  const tarjeta = boton.closest('.timeline-item')
  const abierto = tarjeta.classList.toggle('open')

  boton.textContent = abierto ? '-' : '+'
  boton.setAttribute('aria-expanded', String(abierto))
  boton.setAttribute('aria-label', abierto ? 'Cerrar detalle' : 'Ver detalle')
}

function mostrarHabilidades() {
  elementos.listaHabilidades.replaceChildren()

  habilidades.forEach((habilidad) => {
    elementos.listaHabilidades.append(crearElemento('span', 'skill featured', habilidad))
  })
}

function mostrarGraficoHabilidades() {
  elementos.graficoHabilidades.replaceChildren()
  elementos.graficoHabilidades.append(crearElemento('h3', '', 'Áreas de conocimiento'))

  areasHabilidades.forEach((area) => {
    const grupo = crearElemento('div', 'skill-bar-group')
    const etiqueta = crearElemento('div', 'skill-bar-label')
    const nombre = crearElemento('span', '', area.nombre)
    const total = crearElemento('span', '', `${area.total} herramientas`)
    const pista = crearElemento('div', 'skill-track')
    const barra = crearElemento('div', 'skill-bar')

    pista.setAttribute('role', 'progressbar')
    pista.setAttribute('aria-label', `${area.nombre}: ${area.total} herramientas`)
    pista.setAttribute('aria-valuenow', area.total)
    pista.setAttribute('aria-valuemin', '0')
    pista.setAttribute('aria-valuemax', '5')
    barra.style.width = `${area.ancho}%`

    etiqueta.append(nombre, total)
    pista.append(barra)
    grupo.append(etiqueta, pista)
    elementos.graficoHabilidades.append(grupo)
  })
}

function crearEnlaceProyecto(proyecto) {
  if (!proyecto.enlace) return crearElemento('span', 'link-pending', 'Enlace pendiente')

  const enlace = crearElemento('a', '', 'Ver proyecto ↗')
  enlace.href = proyecto.enlace
  enlace.setAttribute('aria-label', `Abrir ${proyecto.titulo}`)

  if (!proyecto.enlace.startsWith('#')) {
    enlace.target = '_blank'
    enlace.rel = 'noopener noreferrer'
  }

  return enlace
}

function mostrarProyectos(tipoSeleccionado = 'todos') {
  elementos.listaProyectos.replaceChildren()

  const proyectosFiltrados = proyectos.filter((proyecto) => {
    return tipoSeleccionado === 'todos' || proyecto.tipo === tipoSeleccionado
  })

  proyectosFiltrados.forEach((proyecto, indice) => {
    const tarjeta = crearElemento('article', 'project')
    const numero = crearElemento('span', 'project-number', `0${indice + 1}`)
    const titulo = crearElemento('h3', '', proyecto.titulo)
    const tipo = crearElemento('span', 'project-type', tipoProyecto[proyecto.tipo].toUpperCase())
    const texto = crearElemento('p', '', proyecto.texto)
    const enlace = crearEnlaceProyecto(proyecto)

    tarjeta.append(numero, titulo, tipo, texto, enlace)
    elementos.listaProyectos.append(tarjeta)
  })
}

function cambiarBotonActivo(tipoSeleccionado) {
  $$('.filter').forEach((boton) => {
    boton.classList.toggle('active', boton.dataset.filter === tipoSeleccionado)
  })
}

function filtrarProyectos(evento) {
  const boton = evento.target.closest('.filter')
  if (!boton) return

  const tipoSeleccionado = boton.dataset.filter
  mostrarProyectos(tipoSeleccionado)
  cambiarBotonActivo(tipoSeleccionado)
}

function aplicarTema(tema) {
  const esOscuro = tema === 'oscuro'

  document.body.classList.toggle('dark', esOscuro)
  elementos.botonTema.setAttribute('aria-label', esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
  elementos.botonTema.querySelector('span').textContent = esOscuro ? '☀' : '◐'
}

function cambiarTema() {
  const nuevoTema = document.body.classList.contains('dark') ? 'claro' : 'oscuro'

  localStorage.setItem('temaCV', nuevoTema)
  aplicarTema(nuevoTema)
}

function recuperarTema() {
  const temaGuardado = localStorage.getItem('temaCV')
  const temaSistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches

  aplicarTema(temaGuardado || (temaSistemaOscuro ? 'oscuro' : 'claro'))
}

function alternarMenu(abierto) {
  const menuAbierto = abierto ?? !document.body.classList.contains('menu-open')

  document.body.classList.toggle('menu-open', menuAbierto)
  elementos.botonMenu.setAttribute('aria-expanded', String(menuAbierto))
  elementos.botonMenu.setAttribute('aria-label', menuAbierto ? 'Cerrar menu' : 'Abrir menu')
}

function actualizarProgreso() {
  const alturaDocumento = document.documentElement.scrollHeight - window.innerHeight
  const progreso = alturaDocumento > 0 ? window.scrollY / alturaDocumento : 0

  elementos.barraProgreso.style.transform = `scaleX(${Math.min(progreso, 1)})`
}

function activarNavegacion(seccionActiva) {
  elementos.enlacesNav.forEach((enlace) => {
    enlace.classList.toggle('active', enlace.getAttribute('href') === `#${seccionActiva}`)
  })
}

function observarSecciones() {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) activarNavegacion(entrada.target.id)
    })
  }, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  })

  elementos.secciones.forEach((seccion) => observador.observe(seccion))
}

function registrarEventos() {
  elementos.listaTrayectoria.addEventListener('click', (evento) => {
    const boton = evento.target.closest('.btnDetalle')
    if (boton) alternarDetalle(boton)
  })

  elementos.filtros.addEventListener('click', filtrarProyectos)
  elementos.nodosTalentos.addEventListener('click', seleccionarTalento)
  elementos.nodosTalentos.addEventListener('mouseover', seleccionarTalento)
  elementos.nodosTalentos.addEventListener('focusin', seleccionarTalento)
  elementos.escaparateTalentos.addEventListener('pointermove', moverEscaparateTalentos)
  elementos.escaparateTalentos.addEventListener('pointerleave', centrarEscaparateTalentos)
  elementos.botonTema.addEventListener('click', cambiarTema)
  elementos.botonMenu.addEventListener('click', () => alternarMenu())
  elementos.botonImprimir.addEventListener('click', () => window.print())
  window.addEventListener('scroll', actualizarProgreso, { passive: true })

  elementos.enlacesNav.forEach((enlace) => {
    enlace.addEventListener('click', () => alternarMenu(false))
  })

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') alternarMenu(false)
  })
}

function iniciarCV() {
  elementos.resumenHero.textContent = perfil.resumen
  elementos.disponibilidad.textContent = perfil.disponibilidad
  elementos.textoPerfil.textContent = perfil.presentacion
  elementos.anoFooter.textContent = new Date().getFullYear()

  mostrarDatosPersonales()
  mostrarTrayectoria()
  mostrarHabilidades()
  mostrarGraficoHabilidades()
  mostrarTalentos()
  mostrarProyectos()
  recuperarTema()
  registrarEventos()
  observarSecciones()
  actualizarProgreso()
}

iniciarCV()
