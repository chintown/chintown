<?php
    session_start();
    $path_fix_before_inc = '../';
    require $path_fix_before_inc.'core/main.inc.php';
    require 'template/header.php';
    //require 'core/authentication.php';
?>

<div id="index" class="">
    <div class="page" data-title="Mike Chen">
        <div id="main" class="wrapper row-fluid">
            <div class="span8 text-center">
                <h1 id="name"><a href="<?=WEB_ROOT?>">Mike Chen</a></h1>
                <p id="description">I make <a href="javascript:void(0)">homemade things</a> <br>and explore <a href="https://www.flickr.com/photos/chintown/sets/72157632408730031/">hidden joys</a>.</p>
            </div>
            <div class="span4 portrait">
                <img src="img/portrait.png" alt="self-portrait"/>
            </div>
        </div>
    </div>
    <?php
        foreach ($r_projects as $project) {
    ?>
    <div class="page" data-title="<?=$project['title']?>">
        <div class="wrapper row-fluid">
            <?=(empty($project['url']) ? '' : '<a href="'.$project['url'].'">')?>
            <h2 class="project-title"><?=$project['title']?></h2>
            <?=(empty($project['url']) ? '' : '</a>')?>
            <h3 class="project-slogan"><small> — <?=$project['slogan']?></small></h3>
            <p class="project-description"><?=$project['description']?></p>

            <div class="project-media" data-url="<?=WEB_ROOT.'/img/'.$project['media']?>"></div>
        </div>
    </div>
    <?php
        }
    ?>

    <div class="page" data-title="Contact Me">
        <div id="contact" class="wrapper row-fluid text-center">
            <h2 class="meta">Contact</h2>
            <h4 class="text-left">map(lambda source:</h4>
            <h4 class="text-center">'<em>chintown@</em>'+source,</h4>
            <h4 class="text-right">['<em>gmail</em>', '<em>github</em>'])</h4>
        </div>
    </div>
</div>

<div id="controls">
    <div id="prev_title" hidden></div>
    <div id="next_title" hidden></div>
    <input id="page_control" type="range" min="1"/>
</div>

<div id="mask"></div>

<?php
    add_extra_footer('index.footer.php');
    require 'template/footer.php';
?>
