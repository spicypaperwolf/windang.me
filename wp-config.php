<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u592644210_f1oat' );

/** Database username */
define( 'DB_USER', 'u592644210_T6WCH' );

/** Database password */
define( 'DB_PASSWORD', 'G?n0qiHuV7@' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '[81;!)eO#vW2ehpIobpL| N-9T+Hv.:?Q>Qi=ROq OB&|pEjR>Rwa [<09]&.uNt' );
define( 'SECURE_AUTH_KEY',   '~W3@)(aQPVyYGo_n^M@v7[bAQ${t./)LCY^k/?yOAs=(LKfW|uga@veiOrh{W/U+' );
define( 'LOGGED_IN_KEY',     '[pe:,1^#gGyPz$kw)HGvk~wG@1vMQP+cT6^`-qoos}5XC%qV>^%55D@Xk&&Cw!zp' );
define( 'NONCE_KEY',         '6)FH;Nl5%ZZ_EGR{G|%hh; ^k>EI3>Be,o9[KT. qZxOv}H(;)h>5KPDT0YY!`2^' );
define( 'AUTH_SALT',         's:nWNnQI!0ig=bc`.#({<^F] 9BkHACO[i&PM$wlL|_e]DA/>{3r=rO!3K!0-w=I' );
define( 'SECURE_AUTH_SALT',  'O71LxLg*))gP__z^$rT:f[>6zZR<#O[ Sos7H7^x+O(#w5G.]=+A?F4?BGemv+4U' );
define( 'LOGGED_IN_SALT',    'Zg++a2&xn*xtTU=0[Wiw8Bws>ik{9x.Y62?0N]`hYxYNSJ^&rqJ[ums,V^+*G$(f' );
define( 'NONCE_SALT',        'gTu?c+gxXsk*?&lk|_NL8q/]LA`i&v3lC8Rz[bEG;k{f0h{jv0>(&x#)$T )(Uxh' );
define( 'WP_CACHE_KEY_SALT', 'hQTB?(($0oJwtI[/^@u[=~TR .reGli~53J5&wb7qVytBeI={-q1Jr%)KSZ,+WaS' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
