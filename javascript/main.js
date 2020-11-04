
$(document).ready (function() {


    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'seedling',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'leaf',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
    ];


    //creo una referenza al contenitore delle icone
    
    const container = $(".icons") // = riferimento del container nel dom


    //stampare icone sullo schermo - creo una funzione dove passerò i parametri icons e container

    printIcons(icons, container) //questa è l'invocazione, la funzione è creata sotto fuori dal doc ready



}); //end document ready



// MY FUNCTIONS

/**
 * Print Icons on screen
 */

function printIcons(icons, container) { //per stampare avrò bisogno di un loop sull'array icons, che creo col ciclo forEach

    icons.forEach((icon) => { //ad ogni iterazione 'icon' rappresenta ciascun oggetto presente nell'array principale 'icons'
        const {family, prefix, name} = icon;  //utilizzo la destrutturazione per estrapolare variabili dalle proprietà dell'0ggetto

        /**
         * const family = icon.family;
         * const prefix = icon.prefix;
         * const name = icon.name;
         * 
         * QUESTA SAREBBE STATA LA VERSIONE MENO COMPATTA SENZA L'UTILIZZO DELLA DESTRUTTURAZIONE
         */

         const html =   //questo sarà ciò che verrà immesso nell'html
         `<div class="icon">
            <i class="${family} ${prefix}${name}"></i> 
            <div class="title">Cat</div>
        </div>`; 
        // inserisco dinamicamente i dati all'intero del tag i con le interpolazioni ${x} ricordando che vengono considerati anche spazi e indentazioni
        
        
        container.append(html)
    });

}




      

      










































