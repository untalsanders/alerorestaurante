<?php

/**
 * Plugin Name: Env Plugin
 * Plugin URI: https://github.com/untalsanders/env
 * Description: Plugin to test env variables
 * Version: 1.0.0
 * Author: Sanders Gutiérrez
 * Author URI: https://untalsanders.github.io
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: env-plugin
 * Domain Path: /languages
 */

namespace Env;

/**
 * Print Hello World
 */
function hello_world() {
    echo 'Hello World!';
}

add_action('wp_head', __NAMESPACE__ . '\\hello_world');