<!DOCTYPE html>
<!--[if lt IE 7]>    <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>     <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>     <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <!-- <noscript><meta http-equiv="refresh" content="0;url=/nojs"></noscript> -->
    <meta charset='UTF-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<?php
      if (!empty($HEADER_EXTRA)) { include("template/$HEADER_EXTRA"); }

      $TITLE = 'Mike Chen';
      $TITLE = purify($TITLE, 'html');

      $KEYWORDS = purify($KEYWORDS, 'html');
?>
    <title><?=$TITLE?></title>
    <meta name="description" content="<?=$DESCRIPTION?>"/>

    <link rel="stylesheet" href="<?=$ENTRY_CSS?>">
    <link rel="stylesheet" href="<?=PARENT_WEB_PATH?>/css/reset.boilerplate.css">
    <link rel="stylesheet" href="<?=PARENT_WEB_PATH?>/css/bootstrap.css">
    <link rel="stylesheet" href="<?=PARENT_WEB_PATH?>/css/font-awesome.css">
    <link rel="stylesheet" href="<?=PARENT_WEB_PATH?>/css/webfont.css">
    <script src="<?=PARENT_WEB_PATH?>/js/vendor/modernizr-2.6.1.min.js"></script>
  </head>
  <body class="<?=getBrowserUACSS()?>">
    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

    <div id="wrap">
      <div class="navbar"> <!-- .navbar-fixed-top -->
        <div class="navbar-inner">
          <div class="container">

            <ul id="menu" class="nav <?=$class_menu_position?>">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-reorder"></i></a>
                <ul class="dropdown-menu">
                  <li><a href="<?=WEB_ROOT?>"><i class="icon-home"></i> <?=$NAV_DICT['index']?></a></li>
                  <?php       foreach ($DROPDOWN_DICT as $entry=>$profile) { ?>
                  <li><a href="<?=WEB_ROOT.'/'.$entry.'.php'?>"><i class="<?=$profile['icon']?>"></i> <?=$NAV_DICT[$entry]?></a></li>
                  <?php       } ?>
                  <?php       if (is_admin()) { ?>
                  <?php       } ?>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div id="content" class="container">
