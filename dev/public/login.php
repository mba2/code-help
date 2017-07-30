<?php
  session_start();
  session_destroy();
  if(isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conexao = mysqli_connect("localhost","u845380189_eniac","eniac2016","u845380189_sint");
    if(mysqli_connect_errno()) {
      exit("Não foi possível se conectar ao banco de dados");
    }

    $table = "`u845380189_sint`.`usuario`";
    $query = "SELECT  * FROM  $table WHERE ({$table}.usuNome = '{$username}') AND ({$table}.usuSenha = '{$password}')";
    mysqli_query($conexao,$query);
    $result = mysqli_affected_rows($conexao);
    if($result < 1){
        echo "<div class='alert alert-danger'>Usuário ou Senha incorreto(s)</div>";
    }else {
      session_start();
      $_SESSION['aut'] = true;
      echo "Login realizado com sucesso..."; 
      header("refresh:2; url=index.php");        
    }
 }

?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>GUIA DE SINTAXES</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/guia-de-sintaxes.css">
  </head>
  <body>

    <main class="container-fluid login-main-container">
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
          <a href="novo-usuario.php" class="btn btn-success">novo usuário</a>
        </div>
      </div>
    </main>
    <!-- <script src="js/jquery..."></script> -->
  </body>
</html>
