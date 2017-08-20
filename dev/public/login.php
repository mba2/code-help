

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>LOGIN - GUIA DE SINTAXES</title>

    <?php require_once("../resources/templates/head.php"); ?>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/guia-de-sintaxes.css">
  </head>
  <body>

  <header class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>welcome to <strong>code help</strong></h1>
      <h2>your personal coding helper</h2>
    </div>
  </header>

	<main class="container">
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

      <div class="row justify-content-start">        
        <div class="col-2">
          <h1>welcome to <strong>code help</strong></h1>
        </div>
        <div class="col-2">
          <h1>welcome to <strong>code help</strong></h1>
        </div>
      </div>


		</div>



    </main>

    <main class="container-fluid login-main-container old-code">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="login-title">bem vindo ao guia de sintaxes <span>faça seu login</span></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12 form-area">
          <form class="" id="" action="login.php" method="post">
              <div class="form-group">
                <input type="text" id="" class="form-control" name="username">
              </div>

              <div class="form-group">
                <input type="password" id="" class="form-control" name="password">
              </div>

              <div class="form-group">
                <input type="submit" id="" class="btn btn-block btn-primary submit-btn" name="submit" value="login">
              </div>
          </form>
          <button id="new_user_btn" class="btn btn-success">novo usuário</a>
        </div>
      </div>
    </main>
    <?php require_once("../resources/templates/scripts.php")?>
  </body>
</html>
