<?php
  session_start();
if(!isset($_SESSION['aut'])){
  echo "Por favor, realize o login......";
  header("refresh: 2; url=login.php");
}else {

//   HEADER   //
require_once("includes/head.html");
 ?>
<body>

  <main>

  <?php
    //    NAVIGATION   //
    require_once('includes/navigation.html');

    //TABLE OF A SEARCH RESULTS//
    require_once("includes/table-results.html");
  ?>

  </main>
   <!-- //   FOOTER // -->

   <!--  jQuery-->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
   <!-- MY SCRIPT -->
   <script src="js/syntaxes.js"></script>
   <!-- <script src="js/elastic.js"></script> -->
  </body>

</html>
<?php
}
?>
