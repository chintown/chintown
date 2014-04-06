<?php
    session_start();
    $path_fix_before_inc = '../';
    require $path_fix_before_inc.'core/main.inc.php';
    require 'template/header.php';
    //require 'core/authentication.php';
?>

<div id="index">
</div>

<?php
    add_extra_footer('index.footer.php');
    require 'template/footer.php';
?>
