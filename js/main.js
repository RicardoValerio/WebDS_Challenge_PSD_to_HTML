/*****************************************************
*       NAVBARS
****************************************************/


/**
 * [toggleNavBar description]:
 *
 * procedimento que irá tratar da mudança de
 * conteúdo relativamente a uma determinada tab,
 * cujo id vai ser passado como argumento.
 * Também é responsável por mudar as imagens necessárias
 * através da adição e remoção de classes Css.
 *
 * NOTA: no PSD não existiam icones de fundo verde para
 * todos os list-items, foi necessário pintar mas perdeu
 * qualidade como se pode verificar na interacção com as
 * tabs no browser.
 *
 * @param  {string} id [id do elemento clicado]
 * @return {[void]}    [procedimento]
 */
 function toggleNavBar(id) {

    /**
     * [barAndContentsObject description]:
     *
     * objecto que contém os nomes dos ids correspondentes
     * às navBars e os ids correspondentes ao conteúdo dessas
     * mesmas navBars, e que irá ser percorrido no loop
     * abaixo para verificar que mudanças de conteúdo e
     * imagens serão necessárias realizar
     *
     *  @type {Object}
     */
     var barAndContentsObject = {
        "devtools": "nav_devtools",
        "scale":    "nav_scale",
        "speed":    "nav_speed",
        "security": "nav_security",
        "support":  "nav_support"
    };


    for (var prop in barAndContentsObject) {
        if (barAndContentsObject.hasOwnProperty(id) && prop === id ) {

            $('#' + id).addClass('bgActiveNavBar');
            $('#' + id + ' > li').removeClass(id + 'Inactive')
                                 .addClass(id + 'Active');
            $('#nav_' + id).removeClass('hideContentOfBar');
        }else{

            $('#' + prop).removeClass('bgActiveNavBar');
            $('#' + prop + ' > li').removeClass(prop + 'Active')
                                   .addClass(prop + 'Inactive');
            $('#nav_' + prop).addClass('hideContentOfBar');
        }
    }

}


/*****************************************************
*   Toggle FAQ Questions
****************************************************/

/**
 * [description]
 * abrir/fechar faq questions
 *
 * @return {void} [procedimento no evento onclick]
 */
 $(document).ready(function() {
    $('.questionsDiv h3').click(function() {

        $(this).next('.hideAnswer')
               .slideToggle(500);
        $(this).toggleClass('questionOpened');

    });
});
