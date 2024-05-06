<?php

    $nome = addslashes($_POST['nome']);
    $nome = addslashes($_POST['email']);
    $nome = addslashes($_POST['whatsapp']);
    $nome = addslashes($_POST['mensagem']);
    
    $para = "gvechiatoo@gmail.com";
    $assunto = "Contato - Vechiato";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Whatsapp: ".$whatsapp."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: gvechiatoo@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>