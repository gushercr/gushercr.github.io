/*Eventos para scroll de pantalla*/
$(document).delegate(
    "input", "keyup",
    function (event) {
        if ($(this).is(":invalid")) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    }
);
$(document).ready(function (e) {
    setHeigthOfSection();
    setSizeItemsExperience();
    $(window).resize(function () {
        setHeigthOfSection();
    });
    $('#field_return_page').val(window.location.origin)
});
$(document).on('scroll', function (e) {
    $('.options-movil').hide();
    if ($(window).scrollTop() > 50) {
        $('#header').removeClass("header-transparent");
        $('#header').addClass("header-block");
    } else {
        $('#header').removeClass("header-block");
        $('#header').addClass("header-transparent");
    }
    setActiveForSection();
});
function setActiveForSection() {
    if (elementScrolled('#section-basic-information')) {
        $(".options a").each(function () {
            $(this).removeClass("active");
        });
        $("#a-about-me").addClass("active")
    }
    if (elementScrolled('#section-skills')) {
        $(".options a").each(function () {
            $(this).removeClass("active");
        });
        $("#a-skills").addClass("active")
    }
    if (elementScrolled('#section-proyects')) {
        $(".options a").each(function () {
            $(this).removeClass("active");
        });
        $("#a-projects").addClass("active")
    }
    if (elementScrolled('#section-contact')) {
        $(".options a").each(function () {
            $(this).removeClass("active");
        });
        $("#a-contact").addClass("active")
    }
    if (elementScrolled('#section-experience')) {
        $(".options a").each(function () {
            $(this).removeClass("active");
        });
        $("#a-experience").addClass("active")
    }
}
function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}
function setHeigthOfSection() {
    $('.section').css("min-height", $(window).height());
    // height=$(window).height();
}
/*Eventos para scroll de pantalla-end*/

/*Boton de descarga CV*/
$(function () {
    $("#downloadCV").click(function () {
        var a = document.createElement('a');
        var file_name = "Cv_Gustavo Angel";
        a.href = "./assets/files/cv.pdf";
        a.download = file_name;
        a.click();
    })
});
/*Boton de descarga CV-end*/
/*Enviar Email*/
$().ready(function () {
    // validate the comment form when it is submitted
    $("#send_mail").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 3
            },
            comments: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Debes completar tu Nombre",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            },
            comments: {
                required: "El campo comentarios es obligatorio",
                minlength: "El campo comentario debe tener al menos 5 caracteres"
            },
            email: "Debes ingresar un email valido",
            subject: {
                required: "Debes agregar un asunto al mensaje",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            }
        }

    });
});
/*Enviar Email-end*/
/*Menu para dispositivos moviles*/
$('#btn-menu').click(function () {
    $('.options-movil').toggle();
})
/*Menu para dispositivos moviles-end*/
// left o right dinamico para elementos de experiencia
const leftDefault=70;
const rightDefault=50;
function setSizeItemsExperience (){
    $('.experience-item').each(function() {
        let width = $(this).width();
        if ($(this).hasClass('left'))
        {               
            width=(width+leftDefault)*-1
            $(this).css('left', width+'px');
        }else
        {
            $(this).css('left', rightDefault+'px');
        }
    });
}
// left o right dinamico para elementos de experiencia-end
const typeWriter = document.getElementById("typewriter-text");
const text = "Gustavo Angel Hernández";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);