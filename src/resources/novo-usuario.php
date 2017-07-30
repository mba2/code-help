<?php
  if(isset($_POST['submit'])) {
    if(isset($_POST['nome-novo-usu']) &&  isset($_POST['senha-novo-usu'])){

      $nome  = $_POST['nome-novo-usu'];
      $senha = $_POST['senha-novo-usu'];

      $conexao = mysqli_connect("localhost","u845380189_eniac","eniac2016","u845380189_sint");
      if(mysqli_connect_errno()) {
        exit("Não foi possível se conectar ao banco de dados");
      }

      $query  = "INSERT INTO `u845380189_sint`.`usuario` (usuNome,usuSenha) VALUES ('{$nome}','{$senha}');";
      $result = mysqli_query($conexao,$query);
      if($result == 1) {
        echo "<div class='alert alert-success'>Usuário cadastrado com sucesso</div>";
        header("refresh:2; url=login.php");
      } else {
        echo "<div class='alert alert-danger'>Não foi possível cadastrar o usuário</div>";
      }
    }else {
      echo "Por favor preencha todos os campos";
    }
 }

?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>GUIA DE SINTAXES - NOVO USUÁRIO</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/guia-de-sintaxes.css">
  </head>
  <body>

    <main class="container-fluid login-main-container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="login-title">cadastro de novo usuário</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12 form-area">
          <form class="" id="" action="novo-usuario.php" method="post">
              <div class="form-group">
                <label id="" for="campo-nome-novo-usu" class="label-form">nome de usuario</label>
                <input type="text" id="campo-nome-novo-usu" required class="form-control" placeholder="Digite seu nome de usuário" name="nome-novo-usu">
              </div>

              <div class="form-group">
                <label id="" for="campo-senha-novo-usu" class="label-form">senha</label>
                <input type="password" id="campo-senha-novo-usu" required class="form-control" placeholder="Digite sua senha" name="senha-novo-usu">
              </div>

              <div class="form-group">
                <input type="submit" id="" class="submit-btn btn btn-block btn-primary" name="submit" value="criar novo usuário">
              </div>
          </form>
        </div>
      </div>
    </main>
    <!-- <script src="js/jquery..."></script> -->
  </body>
</html>
