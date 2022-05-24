// const URL = "http://127.0.0.1:8000";
const URL = "https://api.colmacicoop.com";
const API_URL = URL+"/api";

function search(records,key,slug){
    for (var i = 0; i < records.length; i++) {

        if (records[i][key] != undefined && records[i][key] == slug) {
            return records[i];
            break;
        }
    }

    return false;
}

function first(cls,data){
    $('.get-'+cls).each(function(i,item){
        var key = $(item).data('key');
        var value = $(item).data('value');
        var slug = $(item).data('slug');
        var url = $(item).data('url');
        var find = search(data,key,slug);

        // Si es un enlace
        if($(item).closest('a').length){
            // si es un telefono, especial a
            if (slug == 'phone') {
                $(item).find('span').html(find[value]);
                $(item).attr('href','tel:'+find[value].replace(/\D/g,""));
            }
            else{
               $(item).attr('href',find[url]); 
            }
        }
        else if($(item).is('input')){
            $(item).val(find[value]); 
        }
        else{
            $(item).html(find[value]);    
        }        
    });
}

const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Options
async function getOptions(){
    const res = await api.get('/option/');
    first('option',res.data);
}

// Contents
async function getContent(){
    const res = await api.get('/cms/');
    first('content',res.data);
}

async function getSlider(){

    const res = await api.get('/slide/');

    if (res.data.length > 0){
        var html = "";

        res.data.forEach((item,i) => {
            html += '<div class="col-slider-item" style="background-image: url('+URL+item.image+');">';
                html += '<div class="col-slider-caption">';
                    html += '<div class="container">';
                        html += '<div class="row">';
                            html += '<div class="col-sm-12">';
                                html += '<h2>'+item.title+'</h2>';
                                html += '<p>'+item.subtitle+'</p>';
                            html += '</div>';
                        html += '</div>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        });

        $('.bxslider').html(html);
        runSlider();
    }
}

async function getNetworks(){

    const res = await api.get('/network/');

    if (res.data.length > 0){
        var html = "";

        res.data.forEach((item,i) => {
            html += '<li>';
                html += '<a href="'+item.url+'" class="col-icon font-20">';
                    html += '<i class="fa '+item.icon+'" aria-hidden="true"></i>';
                html += '</a>';
            html += '</li>';
        });

        $('.get-networks li:first-child').after(html);
    }
}

async function getServices(){

    const res = await api.get('/service/');

    if (res.data.length > 0){
        

        const chunkSize = 10;

        for (let i = 0; i < res.data.length; i += chunkSize) {
            const chunk = res.data.slice(i, i + chunkSize);
            
            var html = "";

            html += '<div class="col-xs-12 col-sm-6">';
                html += '<ul class="about-us-list">';

                    chunk.forEach((item,i) => {
                        html += '<li class="points">'+item.title+'</li>';
                    });

                html += '</ul>';
            html += '</div>';

            $('.get-services').append(html);
        }
    }
}

async function getFAQ(){

    const res = await api.get('/faq/');

    if (res.data.length > 0){
        var html = "";

        res.data.forEach((item,i) => {
            
            var active = "";
            var ins = "";

            if (i+1 == 2) {
                active = "active";
                ins = "in";
            }

            html += '<div class="panel panel-default">';
                html += '<div class="panel-heading '+active+'" role="tab" id="heading'+ (i+1) +'">';
                    html += '<h4 class="panel-title">';
                        html += '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+ (i+1) +'" aria-expanded="false" aria-controls="collapse'+ (i+1) +'">';
                            html += item.title;
                        html += '</a>';
                    html += '</h4>';
                html += '</div>';
                html += '<div id="collapse'+ (i+1) +'" class="panel-collapse collapse '+ins+'" role="tabpanel" aria-labelledby="heading'+ (i+1) +'">';
                    html += '<div class="panel-body">'+item.content+'</div>';
                html += '</div>';
            html += '</div>';
        });

        $('#accordion').html(html);

        activeCollapseArrow();
    }
}

async function setRegister(fullname,cedula,celular,phone){
    showLoading();

    try{
        const res = await api.post('/affiliate/',{
            fullname: fullname,
            cedula: cedula,
            phone: phone,
            mobile: celular,
        })

        if(res.status == 201){
            closeLoading();

            $("#modal-afiliate").modal('hide');

            document.getElementById("afiliate").reset();
            
            swal("OK","Registro realizado exitosamente.","success");

            return false;
        }
    }catch(e){
        closeLoading();

        swal("Error","Ya se ha registrado en COLMACICOOP.","error");
    }
}

async function setContact(fullname,subject,phone,message,email){
    
    showLoading();

    try{
        const res = await api.post('/contact/',{
            fullname: fullname,
            subject: subject,
            phone: phone,
            message: message,
            email: email
        })

        if(res.status == 201){
            closeLoading();

            document.getElementById("form-contact").reset();
            
            swal("OK","Solicitud de contacto enviada satisfactoriamente.","success");

            return false;
        }
    }catch(e){
        closeLoading();

        swal("Error","Por favor llenar todos los campos requeridos.","error");
    }

    return false;
}

$(document).on("click",".btn-register",function(){

    var fullname = $("#af-fullname").val();
    var cedula = $("#af-cedula").val();
    var celular = $("#af-celular").val();
    var phone = $("#af-phone").val();


    if (fullname.length == 0 || cedula.length == 0 || celular.length == 0 || celular.length < 10 || celular.length > 15) {
        swal("Error","Por favor llenar campos requeridos.","error");
        return false;
    }

    if (valida_cedula(cedula) == 0){
        swal("Error","Cédula invalida.","error");
        return false;
    }

    setRegister(fullname,cedula,celular,phone);

    return false;
});

$(document).on("click",".col-send-contact",function(){

    var fullname = $("#fullname").val();
    var subject = $("#subject").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    var email = $("#email").val();

    if (
        fullname.length == 0 || 
        subject.length == 0 || 
        message.length == 0 || 
        phone.length == 0 || 
        phone.length < 10 || 
        phone.length > 15
    ) {
        swal("Error","Por favor llenar campos requeridos.","error");
        return false;
    }

    setContact(fullname,subject,phone,message,email);

    return false;
});




getOptions();
getContent();
getSlider();
getNetworks();
getServices();
getFAQ();