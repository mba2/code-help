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
        header("refresh:1; url=admin.php");
    }else {
      session_start();
      $_SESSION['aut'] = true;
      echo "Login realizado com sucesso...";
      header("refresh:1; url=admin.php");
    }
 }

?>
