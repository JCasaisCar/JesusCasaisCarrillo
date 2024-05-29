"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        { id: 'nexTradeAlert', message: '¡Perfecto, su descarga de NexTrade ha comenzado!', placeholder: 'nexTradePlaceholder' },
        { id: 'banditChasePageAlert', message: '¡Perfecto, su descarga de BanditChasePage ha comenzado!', placeholder: 'banditChasePagePlaceholder' },
        { id: 'ilernaEncantadoAlert', message: '¡Perfecto, su descarga de IlernaEncantado ha comenzado!', placeholder: 'ilernaEncantadoPlaceholder' },
        { id: 'binarioDecimalAlert', message: '¡Perfecto, su descarga de BinarioDecimal ha comenzado!', placeholder: 'binarioDecimalPlaceholder' },
        { id: 'scapeFromJosekaAlert', message: '¡Perfecto, su descarga de ScapeFromJoseka ha comenzado!', placeholder: 'scapeFromJosekaPlaceholder' },
        { id: 'cvAlert', message: '¡Muchas gracias por descargar mi CV!', placeholder: 'cvPlaceholder' }
    ];

    projects.forEach(project => {
        const alertTrigger = document.getElementById(project.id);
        const alertPlaceholder = document.getElementById(project.placeholder);
        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = [
                    `<div class="alert alert-success alert-dismissible" role="alert">`,
                    `   <div>${project.message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('');
                alertPlaceholder.append(wrapper);
            });
        }
    });
});
