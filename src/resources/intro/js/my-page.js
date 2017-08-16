//FUNÇÃO PARA O SCROLL NA PÁGINA //FUNCTION TO SCROLL ELEMENTS INTO TO THE PAGE
function myScrollTo(event,anchor, additionalScroll){
  if(anchor === undefined){
    console.log("An anchor element is missing");
    return false;
  }else if(anchor.hash === undefined){
    console.log("Given parameter doesn't have a valid hash!");
    return false;
  }else if(additionalScroll === undefined) additionalScroll = 0;

  console.log("Element: " + anchor);
  console.log("Hash:" + anchor.hash);
  console.log("Additional Scroll: " + additionalScroll);

  //PREVINE O COMPORTAMENTO PADRÃO DO EVENTO PASSADO //PREVENT THE DEFAULT BEHAVIOR FOR THE GIVEN EVENT
  event.preventDefault();

  //ARMAZENA O ENDEREÇO INTERNO //STORE THE INTERNAL ADDRESS
  var target = (anchor.hash === '#body') ? 'body' : anchor.hash;
                //CASO O HASH SEJA A STRING '#body' O SCROLL NÃO SERÁ PARA NENHUM ELEMENTO ESPECÍFICO, SERÁ PARA O TOPO DA PÁGINA
                //IN CASE THE HASH BE A STRING '#Body' THE SCROLL IS NOT TARGETING A SPECIFIC ELEMENT, IS TARGET THE TOP OF THE PAGE

  //ANIMA O BODY OU HTML PARA QUE O SCROLL DA PÁGINA DESCA ATÉ O ALVO //ANIMATE THE BODY OR HTML TO SCROLL THE PAGE TO THE TARGET
  $("html,body").animate({
      scrollTop : $(target).offset().top - additionalScroll  //PASSA UMA MEDIDA ADICIONAL PARA ACERTAR A POSIÇÃO DE ROLAGEM ABAIXO DO CABEÇALHO //PASS AN ADDITIONAL MEASURE TO FIX THE SCROLL POSITION ABOVE THE HEADER
  },2000);
}//FUNÇÃO PARA O SCROLL NA PÁGINA //FUNCTION TO SCROLL ELEMENTS INTO TO THE PAGE

//FUNÇÃO PARA EXIBIR OU ESCONDER O BOTÃO 'DE VOLTA PARA O TOPO' //FUNCTION TO SHOW OR HIDE THE 'BACK TO TOP' BUTTON
function setToTopBtn(toTopBtn){

  if(window.pageYOffset > 150){
    toTopBtn.classList.add("active");
  }else{
    toTopBtn.classList.remove("active");
  }
}

//FUNÇÃO PARA COLORIR OU DEIXAR TRANSPARENT O BG DO CABEÇALHO DA PÁGINA //FUNCTION TO COLOR OR LET 'TRANSPARENT' THE HEADER'S BG
function setHeadersBg(header){
  if(window.pageYOffset >= 600){
    header.classList.add("solid_bg");
  }else{
    header.classList.remove("solid_bg");
  }
}

//FUNÇÃO PARA INSERIR A CLASSE "toggled" EM UM ELEMENTO
//FUNCTION TO ADD A 'toggled' CLASS TO AN ELEMENT//
function closeNavBar(args){
  for(var i = 0; i < args.length; i++){
    args[i].classList.toggle("toggled");
  }
}

//FUNÇÃO PARA OS LINKS DA BARRA DE NAVEGAÇÃO (SUPERIOR) // FUNCTION TO ALL LINKS ON THE NAVIGATION BAR (TOP)
function projectLinkBehavior(args,parentType,affectedElements){
    for(var i = 0; i < args.length; i++){
      args[i].addEventListener("click",function(e){
          e.preventDefault();     //CANCELA O COMPORTAMENTO PADRÃO //STOP THE DEFAULT BEHAVIOR

          var hash = this.hash;   //ARMAZENA O 'ALVO' PARA O BROWSER SE LOCOMOVER ATÉ ELE //STORE THE 'TARGET' TO THE BROWSER SCROLL TO
          //IN THIS CASE, THE ANIMATION FOR THE SCROLLING IS GONNA BE WITH jQuery... STILL LEARNING HOW TO DO THIS WITH VANILHA JS!!
          myScrollTo(e,this,72);
          //FECHA A BARRA DE NAVEGAÇÃO ADICIONANDO CLASSES CSS CHAMADAS "toggled" //CLOSE THE NAVIGATION BAR, ADDING CSS CLASSES NAMED 'toggled'
          if(parentType === "aside")closeNavBar(affectedElements);

          // console.log("hash: " + hash);
          // console.log("parentType: " + parentType);
          // console.log("windowSize: " + windowSize);
          // console.log("affectedElements: " + affectedElements);
          // console.log(hash);
          // console.log($(hash).offset().top);

      },false); //FIM DO .addEventListener //END OF .addEventListener
    } //FIM DO LAÇO FOR //END OF FOR LOOP
}//FIM DA FUNÇÃO //END OF FUNCTION

// AO FINAL DO CARREGAMENTO DO DOM//
window.onload = function(){

  // var windowHeight  = document.documentElement.clientHeight,
  //     windowHeight2 = window.innerHeight,
  //     windowWidth   = document.documentElement.clientWidth,
  //     windowWidth2  = window.innerWidth;
  //
  // $("#main_header").children("#size")
  //                  .text("Width: " + windowWidth + " || " + windowWidth2 +
  //                         ". Height: " + windowHeight + " || " + windowHeight2);
    // alert("Height: " + window.innerHeight + " || " + document.body.clientHeight);
    // alert("Width: " + window.innerWidth + " || " + document.body.clientWidth);
  //VANILHA JS//

    // VARIÁVEIS -> AS BUSCAS NO DOM SÃO ARMAZENADAS AQUI// VARIABLES -> DOM'S SEARCHES ARE STORED OVER HERE //
       var myBody = document.querySelector("body"),
      mainWrapper = document.querySelector("#main_wrapper"),           //PRINCIPAL CONTAINER DA PÁGINA //PAGE'S MAIN CONTAINER
          menuBtn = document.querySelector("#menu_btn"),               //BOTÃO DO MENU //MENU BUTTON
      asideNavBar = document.querySelector("#projects_list_section"),  //BARRA DE NAVEGAÇÃO LATERAL //LATERAL NAVBAR
  toggledElements = [myBody,mainWrapper,menuBtn,asideNavBar],          //AGRUPA TODOS OS ELEMENTOS QUE SE ALTERAM QUANDO A BARRA DE NAVEGAÇÃO APARECE OU DESAPARECE
                                                                       //GROUP ALL ELEMENTS THAT CHANGE WHEN THE NAVBAR APPEARS OR DESAPEARS
       mainHeader = document.querySelector("#main_header");            //CABEÇALHO DA PÁGINA // PAGE'S HEADER

  /* ===== MENU BUTTON =======*/

    //CAPTURA O EVENTO CLICK NO BOTÃO DE MENU, NO CANTO SUPERIOR DIREITO.
    //CAPTURE THE CLICK EVENT ON THE MENU BUTTON, AT THE UP-RIGHT CORNER//
  // menuBtn.addEventListener("click",function(e){
  //     //ESSA FUNÇÃO INSERE OU RETIRA A CLASSE 'toggled' DOS ELEMENTOS PASSADOS COMO PARÂMETROS //THIS FUNCTION ADDS OR REMOVES A 'toggle' CLASS ON THE ELEMENTS PASSED AS PARAMETERS
  //     closeNavBar(toggledElements);
  // });

  /* ===== MENU BUTTON =======*/


  /* ===== NAVIGATION BAR LINKS =======*/
    //COMPORTAMENTO PARA CADA LINK DE PROJETO NA BARRA DE NAVEGAÇÃO PRINCIPAL//
    //BEHAVIOR FOR EACH MAIN NAVBAR'S PROJECT LINK//
  var mainNavbarLinks = document.querySelectorAll(".main_nav_link");
      projectLinkBehavior(mainNavbarLinks,"aside",toggledElements);

    //COMPORTAMENTO PARA CADA LINK DE PROJETO NO RODAPÉ//
    //BEHAVIOR FOR EACH FOOTER'S PROJECT LINK//
  var footerLinks = document.querySelectorAll(".footer_project_link");
      projectLinkBehavior(footerLinks,"footer");

  /* ===== NAVIGATION BAR LINKS =======*/


  /* ===== BACK TO TOP BUTTON =======*/
  // var toTopBtn = document.querySelector("#to_top_btn");
  //     toTopBtn.addEventListener("click",function(e) { myScrollTo(e,this) },false);
  /* ===== BACK TO TOP BUTTON =======*/


  /* ======== MORE ABOUT BUTTON (SYNTAX GUIDE)==========*/

    //COMPORTAMENTO PARA O BOTÃO "MAIS SOBRE" DO PROJETO 'GUIA DE SINTAXES'
    //"SYNTAX GUIDE" PROJECT'S "MORE INFO" BUTTON BEHAVIOR
  var syntaxGuideMoreInfo = document.querySelector("#more_info_icon_syntax_guide"),
            headersHeight = document.querySelector("#main_header").clientHeight;

      syntaxGuideMoreInfo.addEventListener("click",function(e){
        myScrollTo(e,this,headersHeight);                             //PASSANDO A ALTURA DO CABEÇALHO COMO MEDIDA ADICIONA DE ROLAGEM  //PASSING THE HEADER'S HEIGHT AS ADDITIONAL SCROLL MEASURE
      },false);
  /* ======== MORE ABOUT BUTTON (SYNTAX GUIDE)==========*/


  //AÇÕES QUANDO OCORRER A 'ROLAGEM' DA PÁGINA //ACTIONS WHEN THE PAGE SCROLL
  window.addEventListener("scroll",function(){
          // console.log("scroll");
          // console.log(window.pageYOffset);
//           setHeadersBg(mainHeader);

        });


  /* RESIZE EVENT */
  window.addEventListener("resize",function(){
    var windowHeight  = document.documentElement.clientHeight,
        windowHeight2 = window.innerHeight,
        windowWidth   = document.documentElement.clientWidth,
        windowWidth2  = window.innerWidth;
    //
    // $("#main_header").children("#size")
    //                  .text("Width: " + windowWidth + " || " + windowWidth2 +
    //                         ". Height: " + windowHeight + " || " + windowHeight2);
  });


  /* ANIMAÇÕES DA PÁGINA //PAGE ANIMATIONS
  ============================================*/

  // ===== SYNTAX GUIDE ====== //

			    //TITLE AND SUBTITLE //TÍTULO E SUB TÍTULO
			    //MOCKUP IMAGE
			  $('#syntax_guide_title, \
			     #app_example_img_01').addClass('hidden')
			     .viewportChecker({
			       classToAdd: 'visible animated fadeIn',
			           offset:100
			     });

			    //'READ MORE' BUTTON //BOTÃO 'MAIS SOBRE'
			  $('#more_info_icon_syntax_guide, \
			     #syntax_guide_subtitle').addClass('hidden')
			                             .viewportChecker({
			                               classToAdd : 'visible animated fadeInLeft'
			                             });


			  // ===== SYNTAX GUIDE - EXPLANATION TITLE ====== //
			  // ===== SYNTAX GUIDE - HORIZONTAL RULE ====== //
			  // ===== SYNTAX GUIDE - PROJECT TYṔE ====== //


			  // ===== INFO BOX - (SYNTAX GUIDE) INSIDE THIRD EXPLANATION SECTION ====== //
			  // ===== INFO BOX - (SYNTAX GUIDE) DENTRO DA TERCEIRA SEÇÃO DE EXPLICAÇÃO ====== //

			  $('#syntax_guide .info_box').addClass('hidden')
			               .viewportChecker({
			                  classToAdd: 'visible animated fadeInUp',
			                      offset: 100
               });


     // ===== CODE EDITOR ====== //
			  // ===== INFO BOX - (CODE EDITOR) INSIDE SECOND EXPLANATION SECTION ====== //
			  // ===== INFO BOX - (CODE EDITOR) DENTRO DA SEGUNDA SEÇÃO DE EXPLICAÇÃO ====== //

			  $('#code_editor .info_box').addClass('hidden')
			               .viewportChecker({
			                  classToAdd: 'visible animated fadeInDown',
			                      offset: 100
               });
}
