<?php
    session_start();
    $path_fix_before_inc = '../';
    require $path_fix_before_inc.'core/main.inc.php';
    require 'template/header.php';
    //require 'core/authentication.php';
?>

<div id="index" class="row-fluid">
    <div class="span8 text-center">
        <h1 id="name"><a href="<?=WEB_ROOT?>">Mike Chen</a></h1>
        <p id="description">I make <a href="">homemade things</a> <br>and explore <a href="">hidden joys</a>.</p>
    </div>
    <div class="span4 portrait">
        <img src="img/portrait.png" alt="self-portrait"/>
    </div>
</div>

<?php
    add_extra_footer('index.footer.php');
    require 'template/footer.php';
?>
