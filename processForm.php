
<?php

$inputName     = filter_var($_POST['inputName'], FILTER_SANITIZE_STRING);
$inputEmail    = filter_var($_POST['inputEmail'], FILTER_SANITIZE_EMAIL);
$inputSite     = filter_var($_POST['inputSite'], FILTER_SANITIZE_URL);
$inputMensagem = filter_var($_POST['inputMensagem'], FILTER_SANITIZE_STRING);

if(filter_var(filter_var($inputName, FILTER_VALIDATE_REGEXP,
array("options"=>array("regexp"=>"/[a-zA-Z ÉéãÂÂâàÀ]+/")))) &&
   filter_var($inputEmail, FILTER_VALIDATE_EMAIL) &&
   filter_var($inputSite, FILTER_VALIDATE_URL)):

	// $to = "jricvalerio@gmail.com";
	$to = "info@webds.pt";
	$subject = "Form Submetido";

	$message = "
	<html>
	<h2>Nome:</h2>
	<p>$inputName</p>
	<h2>Site:</h2>
	<p>$inputSite</p>
	<h2>Mensagem:</h2>
	<p>$inputMensagem</p>
	</html>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <' . $inputEmail .'>' . "\r\n";

	if (mail($to,$subject,$message,$headers)):
		// echo "email enviado com sucesso";
		// redireccionar para alguma página de notificação ou por agora apenas para o index
		header("Location: index.html");
		exit;
	endif;

else:

	// redireccionar para uma página de erro
	// header("Location: erro.php");
	echo "DEBUG: --- SOMETHING IS WRONG!";
	exit;

endif;

?>

