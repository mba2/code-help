function scrollTo(event,anchor, additionalScroll){
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

  event.preventDefault();    //PREVINE O COMPORTAMENTO PADRÃO DO EVENTO PASSADO //PREVENT THE DEFAULT BEHAVIOR FOR THE GIVEN EVENT
  var target = anchor.hash;  //ARMAZENA O ENDEREÇO INTERNO //STORE THE INTERNAL ADDRESS

  //ANIMA O BODY OU HTML PARA QUE O SCROLL DA PÁGINA DESCA ATÉ O ALVO //ANIMATE THE BODY OR HTML TO SCROLL THE PAGE TO THE TARGET
  $("html,body").animate({
      scrollTop : $(target).offset().top - additionalScroll  //PASSA UMA MEDIDA ADICIONAL PARA ACERTAR A POSIÇÃO DE ROLAGEM ABAIXO DO CABEÇALHO //PASS AN ADDITIONAL MEASURE TO FIX THE SCROLL POSITION ABOVE THE HEADER
  },750);

}

function transparentHeader(){
  var windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
           mainHeader = document.querySelector(".main_header");

    // console.log(windowScrollTop);
    // console.log(window.innerHeight);

  if(windowScrollTop > window.innerHeight){
    mainHeader.classList.remove("transparent_header");
  }else{
    mainHeader.classList.add("transparent_header");
  }
}

//FUNÇÃO PARA INSERIR A CLASSE "toggled" EM UM ELEMENTO
//FUNCTION TO ADD A 'toggled' CLASS TO AN ELEMENT//
function addToggleClass(args){
  for(var i = 0; i < args.length; i++){
    args[i].classList.toggle("toggled");
  }
}
//jQuery VERSION
// function addToggleClass2(args){
//   for(var i = 0; i < args.length; i++){
//     $(args[i]).toggleClass("toggled");
//   }
// }


function projectLinkBehavior(args,parentType,affectedElements){
    for(var i = 0; i < args.length; i++){
      args[i].addEventListener("click",function(e){
          e.preventDefault();     //CANCELA O COMPORTAMENTO PADRÃO //STOP THE DEFAULT BEHAVIOR

          //CÓDIGO CASO O ELEMENTO PAI DOS LINKS SEJA <aside> OU <nav> OU CONTENHA UMA CLASSE PARECIDA
          //CODE IF THE PARENT CONTAINER IS AN <aside> OR <nav> OR HAS A SIMILAR CLASSNAME
          // if( (parentType === "aside" || parentType === "nav")){
          //   addToggleClass(affectedElements); //CASO O CLICK VENDA DE UMA BARRA DE NAVEGAÇÃO <aside> OU <nav>, ESSA FUNÇÃO FECHARÁ ESSA BARRA //IN CASE THI CLICK EVENT COMES FROM A NAVIGATION BAR, THIS FUNCTION WILL CLOSE THE NAVIGATION BAR
          // }

          var hash = this.hash;   //ARMAZENA O 'ALVO' PARA O BROWSER SE LOCOMOVER ATÉ ELE //STORE THE 'TARGET' TO THE BROWSER SCROLL TO
          //IN THIS CASE, THE ANIMATION FOR THE SCROLLING IS GONNA BE WITH jQuery... STILL LEARNING HOW TO DO THIS WITH VANILHA JS!!
          scrollTo(e,this,72);
          // console.log("hash: " + hash);
          // console.log("parentType: " + parentType);
          // console.log("windowSize: " + windowSize);
          // console.log("affectedElements: " + affectedElements);
          // console.log(hash);
          // console.log($(hash).offset().top);

      },false); //FIM DO .addEventListener //END OF .addEventListener
    } //FIM DO LAÇO FOR //END OF FOR LOOP
}//FIM DA FUNÇÃO //END OF FUNCTION

//jQuery VERSION
// function projectLinkBehavior2(args,parentType,affectedElements){
//     args.each(function(index,item){
//       $(item).on("click",function(e){
//         e.preventDefault();
//         var $hash = $(this.hash);
//         $("html,body").animate({
//             scrollTop : $hash.offset().top
//         },800);
//         if(parentType === "aside" || parentType === "nav"){
//           addToggleClass2(affectedElements);
//         }else{
//           // alert("footer link -> jquery");
//         }
//       });//FIM DE on() //END OF on()
//     }); //FIM DE each() //END OF each()
// }//FIM DA FUNÇÃO //END OF FUNCTION

// AO FINAL DO CARREGAMENTO DO DOM//
window.onload = function(){

  //VANILHA JS//

       var myBody = document.querySelector("body"),
      mainWrapper = document.querySelector("#main_wrapper"),           //PRINCIPAL CONTAINER DA PÁGINA //PAGE'S MAIN CONTAINER
          menuBtn = document.querySelector("#menu_btn"),               //BOTÃO DO MENU //MENU BUTTON
      asideNavBar = document.querySelector("#projects_list_section"),  //BARRA DE NAVEGAÇÃO LATERAL //LATERAL NAVBAR
   toggledElements = [myBody,mainWrapper,menuBtn,asideNavBar];    //AGRUPA TODOS OS ELEMENTOS QUE SE ALTERAM QUANDO A BARRA DE NAVEGAÇÃO APARECE OU DESAPARECE
                                                                       //GROUP ALL ELEMENTS THAT CHANGE WHEN THE NAVBAR APPEARS OR DESAPEARS
    //CAPTURA O EVENTO CLICK NO BOTÃO DE MENU, NO CANTO SUPERIOR DIREITO
    //CAPTURE THE CLICK EVENT ON THE MENU BUTTON, AT THE UP-RIGHT CORNER//
    // menuBtn.addEventListener("click",function(e){
    //     addToggleClass(toggledElements);
    // });

  //COMPORTAMENTO PARA CADA LINK DE PROJETO NA BARRA DE NAVEGAÇÃO PRINCIPAL//
  //BEHAVIOR FOR EACH MAIN NAVBAR'S PROJECT LINK//
  var mainNavbarProjectLink = document.querySelectorAll(".main_nav_project_link");
  // console.log(mainNavbarProjectLink);
    projectLinkBehavior(mainNavbarProjectLink,"aside",toggledElements);

  //COMPORTAMENTO PARA CADA LINK DE PROJETO NO RODAPÉ//
  //BEHAVIOR FOR EACH FOOTER'S PROJECT LINK//
  var footerProjectLink = document.querySelectorAll(".footer_project_link");
      projectLinkBehavior(footerProjectLink,"footer");

  //COMPORTAMENTO PARA O BOTÃO "MAIS SOBRE" DO PROJETO 'GUIA DE SINTAXES'
  //"SYNTAX GUIDE" PROJECT'S "MORE INFO" BUTTON BEHAVIOR
  var syntaxGuideMoreInfo = document.querySelector("#more_info_icon_syntax_guide"),
            headersHeight = document.querySelector("#main_header").clientHeight;

      syntaxGuideMoreInfo.addEventListener("click",function(e){
        scrollTo(e,this,headersHeight);                             //PASSANDO A ALTURA DO CABEÇALHO COMO MEDIDA ADICIONA DE ROLAGEM  //PASSING THE HEADER'S HEIGHT AS ADDITIONAL SCROLL MEASURE
      });



  window.onscroll = function(){
      // $("body").scrollTop();
  }


//jQuery//
  //        var $body = $("body"),
  //     $mainWrapper = $("#main_wrapper"),                                //PRINCIPAL CONTAINER DA PÁGINA //PAGE'S MAIN CONTAINER
  //         $menuBtn = $("#menu_btn"),                                   //BOTÃO DO MENU //MENU BUTTON
  //     $asideNavBar = $("#projects_list_section"),                       //BARRA DE NAVEGAÇÃO LATERAL //LATERAL NAVBAR
  //  $toggledElements = [$body,$mainWrapper,$menuBtn,$asideNavBar];  //AGRUPA TODOS OS ELEMENTOS QUE SE ALTERAM QUANDO A BARRA DE NAVEGAÇÃO APARECE OU DESAPARECE
  //                                                                       //GROUP ALL ELEMENTS THAT CHANGE WHEN THE NAVBAR APPEARS OR DESAPEARS
  //     $mobileMenuBtn.on("click", function(){
  //         addToggleClass2([$body,$mainWrapper,$(this),$asideNavBar]);
  //     });
  //
  // // //COMPORTAMENTO PARA CADA LINK DE PROJETO NA BARRA DE NAVEGAÇÃO PRINCIPAL//
  // // //BEHAVIOR FOR EACH MAIN NAVBAR'S PROJECT LINK//
  // var $mainNavbarProjectLink = $(".main_nav_project_link");
  //     projectLinkBehavior2($mainNavbarProjectLink,"aside",$(window).width(),$toggledElements);
  // // //COMPORTAMENTO PARA CADA LINK DE PROJETO NO RODAPÉ//
  // // //BEHAVIOR FOR EACH FOOTER'S PROJECT LINK//
  // var $footerProjectLink = $(".footer_project_link");
  //     projectLinkBehavior2($footerProjectLink,"footer");



}
