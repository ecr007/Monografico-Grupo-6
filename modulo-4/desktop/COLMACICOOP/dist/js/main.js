const api = axios.create({
    baseURL: 'http://api.colmacicoop.com/api/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    }
});
const err = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//contacto
const btnEnviar = document.querySelector('#enviar')
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const mensaje = document.querySelector('#mensaje');
const enviarContacto = document.querySelector('#enviarContacto');
//contacto

const btn_calculadora = document.querySelector('#calculadora-btn');
//inscripcion
const enviar_inscripcion = document.querySelector('#enviar-inscripcion');
const nombre_inscripcion = document.querySelector('#nombre');
const cedula_inscripcion = document.querySelector('#cedula');
const celular_inscripcion = document.querySelector('#celular');
const telefono_inscripcion = document.querySelector('#telefono');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', mainApp);
   // nombre.addEventListener('blur',validarFormulario);
   // email.addEventListener('blur',validarFormulario);
   // tel.addEventListener('blur',validarFormulario);
   // mensaje.addEventListener('blur',validarFormulario);
   // btn_calculadora.addEventListener('click', calcular_interes)

    //inscripcion
    nombre_inscripcion.addEventListener('blur',validarFormularioInscripcion);
    cedula_inscripcion.addEventListener('blur',validarFormularioInscripcion);
    celular_inscripcion.addEventListener('blur',validarFormularioInscripcion);
    telefono_inscripcion.addEventListener('blur',validarFormularioInscripcion);




    //enviar email
    enviarContacto.addEventListener('submit', enviar_Contacto)

    //enviar inscripcion
    //enviar_inscripcion.addEventListener('submit',enviarInscripcion);
    
}

/*function validarCalculadora(){

}*/

function validarFormularioInscripcion(e){
    e.preventDefault();

    console.log('formulario')
    if (nombre_inscripcion.value === "") {
        const name = document.querySelector('.nombre');
        name.innerHTML="Por favor, escribe tu nombre de usuario.";
        console.log('nombre')
        name.focus();
        return false;
    }
    if (cedula_inscripcion.value === "") {
        const cedula = document.querySelector('.cedula');
        cedula.innerHTML="Por favor, escribe tu cédula.";
        console.log('cedula')
        cedula.focus();
        return false;
    }
    if (telefono_inscripcion.value === "") {
        const telefono = document.querySelector('.telefono');
        telefono.innerHTML="Por favor, escribe tu número de telefono.";
        console.log('telefono')
        telefono.focus();
        return false;
    }
    if (cedula_inscripcion.value === "") {
        const celular = document.querySelector('.celular');
        celular.innerHTML="Por favor, escribe tu número de celular.";
        console.log('celular')
        celular.focus();
        return false;
    }
}

async function enviarInscripcion(){



    e.preventDefault();
    const res = await api.post('/contact/',{
        fullname: nombre,
        subject: '',
        phone: tel,
        email:email,
        message:mensaje
    })

}

function mainApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50')
    //btn_calculadora.disabled = true;
    console.log(nombre_inscripcion,'hoka')
}

function calcular_interes(){
    //variables
    const contenedor_interes = document.querySelector('#resutado-interes');
    const cuota = document.querySelector('#cuota');
    const tasa = document.querySelector('#tasa');
    const tiempo = document.querySelector('#tiempo');

    contenedor_interes.innerHTML = '';

    const p_cuota = parseInt(cuota.value);
    const p_tiempo = parseInt(tiempo.value);
    const p_tasa = parseInt(tasa.value);
    const interes = (p_cuota * p_tiempo * (p_tasa/100));
   
    contenedor_interes.innerHTML = `Resultado RD$ ${interes}`;

    setTimeout(() =>  {
      contenedor_interes.innerHTML = '';
   }, 3000);
}

async function enviar_Contacto(e){
    e.preventDefault();
    const res = await api.post('/contact/',{
        fullname: nombre,
        subject: '',
        phone: tel,
        email:email,
        message:mensaje
    })

    console.log(res)
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
}


async function getSliper(){
    const carousel_indicators = document.querySelector('#carouselExampleCaptions .carousel-indicators');
    const carousel_inner = document.querySelector('#carouselExampleCaptions .carousel-inner');
    
    carousel_indicators.innerHTML = '';
    carousel_inner.innerHTML='';

 const {data} = await api('slide/');

 
 data.forEach((slipe,i) =>{
     
 
    const btn = document.createElement('button');
    btn.setAttribute('type','button');
    btn.setAttribute('data-bs-target','#carouselExampleCaptions');
    btn.setAttribute('data-bs-slide-to',`${i}`);
    btn.setAttribute('aria-current','true');
    btn.setAttribute('aria-label', `Slide ${i+1}`);
    btn.classList.add('boton');
    //btn.classList.add('active');

    const div_carousel_item = document.createElement('div');
    div_carousel_item.classList.add('carousel-item');
    div_carousel_item.classList.add('relative');
    div_carousel_item.classList.add('float-left');
    div_carousel_item.classList.add('w-full');
    //div_carousel_item.classList.add('active');

    const img = document.createElement('img');
    img.setAttribute('src','http://api.colmacicoop.com'+slipe.image);
    img.classList.add('block');
    img.classList.add('w-full');
    img.setAttribute('alt','...');

    const div_carousel_caption = document.createElement('div');
    div_carousel_caption.classList.add('carousel-caption');
    div_carousel_caption.classList.add('hidden');
    div_carousel_caption.classList.add('md:block');
    div_carousel_caption.classList.add('absolute');
    div_carousel_caption.classList.add('text-center');

    const h5 = document.createElement('h5');
    h5.classList.add('text-xl');
    h5.innerHTML = slipe.title;
    const p = document.createElement('p');
    p.innerHTML=slipe.subtitle;

    carousel_indicators.appendChild(btn);
    div_carousel_item.appendChild(img);
    div_carousel_caption.appendChild(h5);
    div_carousel_caption.appendChild(p);
    div_carousel_item.appendChild(div_carousel_caption);

    carousel_inner.appendChild(div_carousel_item);

    
 })

 

 const div_eje = document.querySelector('.carousel-item');
 const boton = document.querySelector('.boton');

 div_eje.classList.add('active');
 boton.classList.add('active');

 
 
}



async function getServicios(){

const dl = document.querySelector('#d_l'); 


const {data} = await api('service/');



data.forEach((service,i)=>{

const div_relative = document.createElement('div');
div_relative.classList.add('relative');
const dt = document.createElement('dt');
const div = document.createElement('div');
div.classList.add('absolute');
div.classList.add('flex');
div.classList.add('items-center');
div.classList.add('justify-center');
div.classList.add('h-12');
div.classList.add('w-12');
div.classList.add('rounded-md');
div.classList.add('bg-indigo-500');
div.classList.add('text-white');

const svg = document.createElement('svg');
svg.classList.add('h-6');
svg.classList.add('w-6');
//svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
svg.setAttribute('fill','none');
svg.setAttributeNS(null,'viewBox','0 0 24 24');
svg.setAttribute('stroke-width','2');
svg.setAttribute('stroke','currentColor');
svg.setAttribute('aria-hidden','true');

const path = document.createElement('path');
path.setAttribute('stroke-linecap','round');
path.setAttribute('stroke-linejoin','round');
path.setAttribute('d','M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9');

svg.appendChild(path);
//div.appendChild(svg);

const p = document.createElement('p');
p.classList.add('ml-16');
p.classList.add('text-lg');
p.classList.add('leading-6');
p.classList.add('font-medium');
p.classList.add('text-white');
p.innerHTML = removeTags(service.title);

dt.appendChild(div);
dt.appendChild(p);

const dd = document.createElement('dd');
dd.classList.add('mt-2');
dd.classList.add('ml-16');
dd.classList.add('text-base');
dd.classList.add('text-white');
dd.innerHTML = removeTags(service.content);

div_relative.appendChild(dt);
div_relative.appendChild(dd);



dl.appendChild(div_relative);
})




}

async function getContenido(){
    const {data} = await api('cms/');
  

}

async function getPreguntaFrecuentes(){

    const {data} = await api('faq/');
    const div = document.querySelector('#contenedor-items-question');
    div.innerHTML = '';

    data.forEach((question)=>{
        const accordion_item = document.createElement('div');
        accordion_item.classList.add('accordion-item','bg-white','border','border-[#45c95b]');
    

        const accordion_header = document.createElement('h2');
        accordion_header.classList.add('accordion-header','mb-0');
        accordion_header.setAttribute('id','headingOne');

        const accordion_button = document.createElement('button');
        accordion_button.classList.add( 'accordion-button',
            'relative',
            'flex',
            'items-center',
            'w-full',
            'py-4',
            'px-5',
            'text-base', 'text-[#45c95b]', 'text-left',
            'bg-white',
            'border-0',
            'rounded-none',
            'transition',
            'focus:outline-none');
        
        accordion_button.setAttribute('type','button')
        accordion_button.setAttribute('data-bs-toggle','collapse')
        accordion_button.setAttribute('data-bs-target','#collapseOne')
        accordion_button.setAttribute('aria-expanded','true')
        accordion_button.setAttribute('aria-controls','collapseOne')
        accordion_button.innerHTML = question.title;
        
        accordion_header.appendChild(accordion_button);

        const div_collapsOne = document.createElement('div');
        div_collapsOne.classList.add('accordion-collapse', 'collapse', 'show');
        div_collapsOne.setAttribute('id','collapseOne');
        div_collapsOne.setAttribute('aria-labelledby','headingOne');
        div_collapsOne.setAttribute('data-bs-parent','#accordionExample');

        const div_accordion_body = document.createElement('div');
        div_accordion_body.classList.add('accordion-body','py-4','px-5')
        div_accordion_body.innerHTML = removeTags(question.content)
        div_collapsOne.appendChild(div_accordion_body)

        accordion_item.appendChild(accordion_header);
        accordion_item.appendChild(div_collapsOne);

        div.appendChild(accordion_item)

    })
  
}

async function getBeneficios(){
    const {data} = await api('benefit/');

    const d = removeTags(JSON.stringify(data[0].content));
    //console.log(data);
    console.log(d);
   
}

async function getRedesSociales(){
    const {data} = await api('network/');
 
}

async function getContacto(){
    const {data} = await api('option/');
    
    const div = document.querySelector('#contacto');

    const p = document.createElement('p');
    p.classList.add('text-gray-500');
    p.classList.add('mb-6');
    p.innerHTML = data[2].value;

    const tel = document.createElement('p');
    tel.classList.add('text-gray-500');
    tel.innerHTML = data[0].value;

    div.appendChild(p)
    div.appendChild(tel);
    
}

async function setContacto(){
    
}



getSliper();
getServicios();
getBeneficios();
getContacto();
getPreguntaFrecuentes();
calcular_interes();

