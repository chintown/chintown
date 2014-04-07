<?php
    require 'common/db.php';

    function get($req, $res) {
        $param = pickup($req, '');

        $projects = get_projects();
        //$projects = purify_values($projects, 'html');
        $res['projects'] = $projects;
    }

    function get_projects() {
        $sql = db_sel(
            tables(table('project')),
            null,
            null,
            true
        );
        $sql .= ' ORDER BY stamp DESC';
        return db2arr(dbq($sql));
    }
