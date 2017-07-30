<?php
    session_start();
    if(!isset($_SESSION['aut'])){
      ?>
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>ÁREA - ADMINISTRADOR</title>
          <link rel="stylesheet" href="css/bootstrap.min.css">
          <link rel="stylesheet" href="css/guia-de-sintaxes.css">
        </head>
        <body>
          <main class="container-fluid login-main-container">
            <div class="row">
              <div class="col-xs-12">
                <h1 class="login-title">area de adminstrador</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-md-12 form-area">
                <form class="" id="" action="login-admin.php" method="post">
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
              </div>
            </div>
          </main>
        </body>
        </html>
    <?php
      }else {

        $connection = mysqli_connect("localhost","u845380189_eniac","eniac2016","u845380189_sint");
        if(mysqli_connect_errno()) {
          die("Não foi possível se conectar ao banco de dados: ". mysqli_connect_error());
        }
        $query = "SELECT * FROM `u845380189_sint`.`usuario`";
        $result = mysqli_query($connection,$query) or die("Erro: " . mysqli_error($connection));

       ?>
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>ÁREA - ADMINISTRADOR</title>
            <link rel="stylesheet" href="css/bootstrap.min.css">
            <link rel="stylesheet" href="css/guia-de-sintaxes.css">
          </head>
          <body>

            <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <h1 class="login-title admin-title">usuários cadastrados</h1>
                    <a href="logout-admin.php" class="btn btn-danger btn-logout">sair</a>
                      <table id="" class="table">
                        <thead>
                          <tr>
                            <th>Nome do Usuário</th>
                            <th>Senha</th>
                          </tr>
                        </thead>
                        <?php
                          while($linha = mysqli_fetch_assoc($result)) { ?>
                            <tr>
                              <td> <?php echo $linha['usuNome'];?></td>
                              <td> <?php echo $linha['usuSenha'];?></td>
                            </tr>
                        <?php
                          }
                        ?>
                          </tr>
                      </table>

                  </div>
                </div>
            </div>
          <body>
        </html>
      <?php
        }
    ?>
<!--
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
        header("refresh:2; url=admin.php");
      }
   }else {
     $connection = mysqli_connect("localhost","u845380189_eniac","eniac2016","u845380189_sint");
      if(mysqli_connect_errno()) {
        die("Não foi possível se conectar ao banco de dados: ". mysqli_connect_error());
      }
      $query = "SELECT * FROM `u845380189_sint`.`usuario`";
      $result = mysqli_query($connection,$query) or die("Erro: " . mysqli_error($connection));

    }
  ?> -->
