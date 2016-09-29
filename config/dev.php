<?php
    // 0 | 1
    define('DEV_MODE',0);
    if (DEV_MODE) {
        ini_set('display_errors', 'On');
    }
    // remote (for linode dev) | local (for Mac dev)
    define('ENV','remote');

    define('AUTH_COOKIE_SECONDS', 60*60*24); // 24hr

    // error logging. http://sentry.chintown.org/
    define('SENTRY_API_PHP', null);
    define('SENTRY_API_JS', null);

    define('GA_CODE', "ga('create', 'UA-1108382-10', 'chintown.org');ga('send', 'pageview');");
