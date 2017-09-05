<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>LOGIN - CODE HELPER</title>

    <?php require_once("../resources/templates/head.php"); ?>
  </head>
  <body>

  <header class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>welcome to <strong>code help</strong></h1>
      <h2>your personal coding helper</h2>
    </div>
  </header>

	<main class="container">
<<<<<<< HEAD
		<div class="row">
			<!-- <div class="col">
				<h1><?php 
          session_start();
          ?>
        </h1>
			</div> -->
			<!-- <div class="col">
				<h1><?php echo $_SESSION['user'];?></h1>
			</div> -->
			<div class="col-md col">
				<h1>welcome to <strong>code help</strong></h1>
			</div>  
			<div class="col-md-6 col-6">
				<h1>welcome to <strong>code help</strong></h1>
			</div>
        <div class="col-md col">
				<h1>welcome to <strong>code help</strong></h1>
			</div>
=======
>>>>>>> Starts a Login Area (with sign in and sign up)

      <div class="row justify-content-start">        
        <div class="col-2">
          <h1>welcome to <strong>code help</strong></h1>
        </div>
        <div class="col-2">
          <h1>welcome to <strong>code help</strong></h1>
        </div>
      </div>


		<section class="row welcome">

			<div class="col-12 col-lg-6 text-center text-md-left">
				<h1>welcome to <strong>code helper</strong></h1>
			</div>

			<div class="col-12 col-lg-6 text-center text-md-left">
				<h2>Please, log in to access all your <strong>code samples</strong></h2>
			</div>

		</section>
			
		<section class="row sign-area">
			<button class="btn btn-sign_in">sign in</button>
			<button class="btn btn-sign_up">sign up</button>
		</section>

		<section class="row sign_in-area">
			<h1 class="sign-heading">sign in area</h1>
			<button class="btn btn-sign_in">sign in</button>
			<button class="btn btn-sign_up">sign up</button>
		</section>

		<section class="row sign_up-area">
			<h1 class="sign-heading"></h1>
			<button class="btn btn-sign_in">sign in</button>
			<button class="btn btn-sign_up">sign up</button>
		</section>

		<!-- FOOTER GOES HERE --> 
    </main>

    <?php require_once("../resources/templates/scripts.php")?>
  </body>
</html>
