"use strict";
document.addEventListener('DOMContentLoaded', function () {
    //List with messages and containers of each button ID to retrieve data later
    const projects = [
        { id: 'nexTradeAlert', message: '¡Perfecto, su descarga de NexTrade ha comenzado!', placeholder: 'nexTradePlaceholder' },
        { id: 'banditChasePageAlert', message: '¡Perfecto, su descarga de BanditChasePage ha comenzado!', placeholder: 'banditChasePagePlaceholder' },
        { id: 'ilernaEncantadoAlert', message: '¡Perfecto, su descarga de IlernaEncantado ha comenzado!', placeholder: 'ilernaEncantadoPlaceholder' },
        { id: 'binarioDecimalAlert', message: '¡Perfecto, su descarga de BinarioDecimal ha comenzado!', placeholder: 'binarioDecimalPlaceholder' },
        { id: 'scapeFromJosekaAlert', message: '¡Perfecto, su descarga de ScapeFromJoseka ha comenzado!', placeholder: 'scapeFromJosekaPlaceholder' },
        { id: 'cvAlert', message: '¡Muchas gracias por descargar mi CV!', placeholder: 'cvPlaceholder' }
    ];

    //Iterate over each element and add an event listener to each button to listen to clicks
    projects.forEach(project => {
        const alertTrigger = document.getElementById(project.id);
        const alertPlaceholder = document.getElementById(project.placeholder);
        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                //Create a container to hold the message that will appear when clicking the button
                const wrapper = document.createElement('div');
                //Add the message and the close button to the container
                wrapper.innerHTML = [
                    `<div class="alert alert-success alert-dismissible" role="alert">`,
                    `   <div>${project.message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('');
                //Add the container to the corresponding HTML container where it is called
                alertPlaceholder.append(wrapper);
            });
        }
    });
});
