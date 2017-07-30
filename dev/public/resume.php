<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/app.css">


  <title>Mario Brusarosco</title>
</head>
<body>

  <div class="l-wrapper-main">
    <?php include_once("./templates/header.php"); ?>

    <main class="l-mainContent">
      <div class="configPanel">
        <button class="configPanel-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">
             <path style="fill:#35404F;" d="M425.318,237.116c0.866-7.817,1.348-15.74,1.348-23.782s-0.482-15.966-1.348-23.774
          	c-19.255,0.427-37.321-11.682-43.584-30.942c-6.255-19.26,1.242-39.676,17.071-50.641c-7.893-13.867-17.254-26.782-27.942-38.485
          	c-15.326,11.665-37.069,12.493-53.453,0.593c-16.388-11.908-22.315-32.832-15.949-51.017c-14.31-6.498-29.431-11.524-45.218-14.75
          	c-5.53,18.483-22.639,31.949-42.91,31.949c-20.275,0-37.38-13.466-42.91-31.949c-15.787,3.226-30.908,8.252-45.218,14.75
          	c6.357,18.185,0.431,39.108-15.953,51.017C92.86,81.993,71.125,81.161,55.804,69.491C45.111,81.19,35.755,94.11,27.861,107.977
          	c15.825,10.974,23.326,31.381,17.067,50.641c-6.259,19.268-24.324,31.369-43.575,30.942C0.486,197.367,0,205.291,0,213.333
          	s0.486,15.966,1.353,23.782c19.251-0.427,37.316,11.674,43.575,30.933c6.259,19.268-1.242,39.676-17.067,50.641
          	c7.893,13.867,17.25,26.782,27.942,38.485c15.326-11.657,37.069-12.493,53.449-0.585c16.388,11.9,22.31,32.823,15.949,51.008
          	c14.31,6.498,29.431,11.524,45.222,14.75c5.53-18.475,22.639-31.94,42.91-31.94s37.38,13.466,42.906,31.94
          	c15.787-3.226,30.908-8.243,45.218-14.741c-6.357-18.185-0.427-39.117,15.957-51.025c16.388-11.9,38.123-11.076,53.449,0.593
          	c10.688-11.691,20.045-24.61,27.942-38.477c-15.825-10.974-23.326-31.39-17.071-50.65
          	C387.998,248.794,406.063,236.685,425.318,237.116z M213.333,288c-41.233,0-74.667-33.434-74.667-74.667
          	s33.434-74.667,74.667-74.667c41.237,0,74.667,33.434,74.667,74.667S254.571,288,213.333,288z"/>
          </svg>
        </button>
      </div>

      <?php //require_once("./templates/breadcrumb");?>
      
      <section class="personalData">
        <h1 class="personalData-name"><b>mario</b> brusarosco de almeida</h1>
        <article class="personalData-info">
          <div class="personalData-group personalData-group--info">
            <p class="personalData-line personalData-age">30 years</p>
            <p class="personalData-line personalData-birthPlace">brazilian</p>
          </div>
        </article>

        <article class="personalData-contact">

          <div class="personalData-line personalData-tel">
              <a href="tel:11996303693" type="tel">
                  <i class="icon icon--tel">
                      <svg class="icon-svg icon-svg--tel" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="18px" height="31px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                      viewBox="0 0 18 31"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="fill fill--phone" d="M16 0l-14 0c-1,0 -2,1 -2,2l0 27c0,1 1,2 2,2l14 0c1,0 2,-1 2,-2l0 -27c0,-1 -1,-2 -2,-2zm-9 2l4 0c0,0 0,0 0,0 0,0 0,0 0,0l-4 0c0,0 0,0 0,0 0,0 0,0 0,0zm2 28c-1,0 -1,-1 -1,-1 0,-1 0,-1 1,-1 1,0 1,0 1,1 0,0 0,1 -1,1zm8 -3l-16 0 0 -24 16 0 0 24z"/>
                      </svg>
                  </i>
                  <p class="personalData-text">9 9630 - 3693</p>
              </a>
          </div>

          <div class="personalData-line personalData-email">
              <a href="mailto:mariobrusarosco@gmail.com">
                  <i class="icon icon--email">
                      <svg class="icon-svg icon-svg--email" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="14px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                      viewBox="0 0 20 15"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                       <path class="fill fill--email" d="M10 10l-2 -2 -8 6c1,1 1,1 1,1l18 0c0,0 1,0 1,-1l-7 -6 -3 2z"/>
                       <path class="fill fill--email" d="M20 0c0,0 -1,0 -1,0l-18 0c0,0 0,0 -1,0l10 9 10 -9z"/>
                       <polygon class="fill fill--email" points="0,1 0,14 7,8 "/>
                       <polygon class="fill fill--email" points="13,8 20,14 20,1 "/>
                      </svg>
                    </i>
                    <p class="personalData-text">mariobrusarosco@gmail.com</p>
                </a>
          </div>

          <div class="personalData-line personalData-git">
              <a href="https://github.com/mariobrusarosco">
                <i class="icon icon--git">
                  <svg class="icon-svg icon-svg--git" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="25px" height="24px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  viewBox="0 0 25 24"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                      <path class="fill fill-git" d="M23 6c-1,-2 -2,-3 -4,-4 -2,-1 -4,-2 -7,-2 -2,0 -4,1 -6,2 -2,1 -3,2 -4,4 -1,2 -2,4 -2,6 0,3 1,6 2,8 2,2 4,4 7,4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-2l0 0c0,1 -1,1 -1,1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 -1,-1 -1,-1l0 0c0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,-1l0 0c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0l0 0c0,0 1,1 1,1 0,0 1,0 1,1 0,0 0,0 1,1 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 0,0 1,-1 1,-2 1,-2 0,0 -1,0 -1,0 -1,0 -1,-1 -2,-1 -1,0 -1,-1 -1,-1 -1,0 -1,-1 -1,-2 0,0 0,-1 0,-2 0,-1 0,-3 1,-4 -1,0 -1,-2 0,-3 0,0 1,0 1,0 1,1 1,1 2,1 0,0 0,0 0,0 1,0 2,0 3,0 2,0 3,0 4,0l0 0c1,0 1,0 2,-1 0,0 1,0 1,0 1,1 1,3 0,3 1,1 1,3 1,4 0,1 0,2 0,2 0,1 0,2 -1,2 0,0 -1,1 -1,1 -1,0 -1,1 -2,1 0,0 -1,0 -1,0 0,1 1,1 1,2l0 4c0,0 0,0 0,0 0,0 0,0 0,0 3,0 5,-2 7,-4 1,-2 2,-5 2,-8 0,-2 -1,-4 -2,-6z"/>
                  </svg>
                </i>
                <p class="personalData-text">mariobrusarosco</p>
            </a>
          </div>
        </article>

        <article class="personalData-goal">
          <h1 class="personalData-title personalData-title--goal">goal</h1>
          <h2 class="personalData-subtitle personalData-subtitle--goal"><span>front end developer<span></h2>
        </article>

        <article class="personalData-education">
            <h1 class="personalData-title personalData-title--education">education</h1>
            <div class="personalData-group personalData-group--education">
              <h2 class="personalData-subtitle personalData-subtitle--education"><span>systems analysis<span></h2>
              <h2 class="personalData-subtitle personalData-subtitle--education"><span>faculdade eniac - (2014 - 2016)</span></h2>
            </div>
        </article>

      </section>

      <section class="developerData">
        <div class="tabs">
          <nav class="tabs-nav">
            <div class="tabs-tab tabs-tab--skills" data-tab-id="skills" data-state="is-active">
              <span class-"tabs-title tabs-title--skills">skills</span>
              <i class="tabs-arrow"></i>
            </div>
            <div class="tabs-tab tabs-tab--xp" data-tab-id="xp">
              <span class-"tabs-title tabs-title--xp">experience</span>
              <i class="tabs-arrow"></i>
            </div>
            <div class="tabs-tab tabs-tab--courses" data-tab-id="courses">
              <span class-"tabs-title tabs-title--courses">courses</span>
              <i class="tabs-arrow"></i>
            </div>
          </nav>
          <div class="tabs-mainContent">
            <article class="tabs-content tabs-content--skills" data-state="is-active" data-tab-id="skills">
              <h1 class="tabs-title tabs-title--content">skills</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--css3"><strong>css3 - </strong>responsive design using media query or bootstrap grid</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sass"><strong>SASS (SCSS) - </strong>mixins, placeholders,  variables, @if/else, @each & partials</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--smass"><strong>SMACSS - </strong>folder structure and naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--bem"><strong>BEM - </strong>naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--json"><strong>JSON - </strong>creation of objects and retrieving them with AJAX</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--git"><strong>Git - </strong>"branch", "fetch & rebase", "interactive rebase", "merge", "reset", "revert" and config via SSH keys</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sql"><strong>SQL - </strong>MySQL - "INSERT", "UPDATE", "DELETE", "CREATE", "INNER JOIN" & "LEFT JOIN"</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--OOP"><strong>OOP - </strong>initial concepts applied on PHP</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--misc"><strong>MISC - </strong>basic FTP flow, basic linux commands</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--photoshop"><strong>Photoshop - </strong>retrieving images</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--english"><strong>English - </strong>fluent</h2>
            </article>

            <article class="tabs-content tabs-content--xp" data-tab-id="xp">
              <h1 class="tabs-title tabs-title--content">experience</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--css3"><strong>css3 - </strong>responsive design using media query or bootstrap grid</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--bem"><strong>BEM - </strong>naming convention</h2>>
            </article>

            <article class="tabs-content tabs-content--courses" data-tab-id="courses">
              <h1 class="tabs-title tabs-title--content">courses</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
            </article>
          </div>
        </div>
      </section>
    </main>

    <button id="js_back-to-top" class="btn btn-back-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 40 40" xmlns:xlink="http://www.w3.org/1999/xlink">
       <defs>
        <style type="text/css">
         <![CDATA[
          .str0 {stroke:#E45F56;stroke-width:1.99991}
          .fil1 {fill:none}
          .fil0 {fill:white}
         ]]>
        </style>
       </defs>
       <g id="Camada_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <circle class="fil0 str0" cx="20" cy="20" r="18"/>
        <polyline class="fil1 str0" points="12,26 20,14 28,26 "/>
       </g>
      </svg>
    </button>
    <?php include_once("./templates/footer.php"); ?>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
