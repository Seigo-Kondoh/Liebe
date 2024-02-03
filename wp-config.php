<?php
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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'musicschool' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'Ui9nnazaY4%!yf5}}IxSL16Fa14={)j_z$_<xGa`1pl_YoQ&GyRGWw#3&=.S^SJ+' );
define( 'SECURE_AUTH_KEY',  'W&Wi)!|=o_<H-`IpEnFws|>DU=CN;.>&gtB_42m.]Sh&^eAJ2&Bj!2a?$dhktJal' );
define( 'LOGGED_IN_KEY',    '9L<Qu^FqfD-%U`zb8ym#:Rx@crwt:3+uGG!@]: ~{7^K=uTTO?yfgZ{Y0_2.WBk&' );
define( 'NONCE_KEY',        '$3Y1+ozGtV;SB%DhilAs8mwk5E6,cz_ -#cf?av9E&N:jblzTv*u/fgxe,4sr>3;' );
define( 'AUTH_SALT',        '1S0dDPmPMNUX6 5Cw=In33{*GYcpYo_X:w-~kj}i;sHpxRP&?}cCiWBA-:?BNb9s' );
define( 'SECURE_AUTH_SALT', 'exdDJ6U46@4.;zS&:fnp?T;|fP,cp2n*p.HfbwSl|>3grveC9IFGiNs{dT~.K:;.' );
define( 'LOGGED_IN_SALT',   'AGUG!lnnFcfU~.U_&bxnZE//7DU<SPeH5xEkBpG4W%raV9);dtjVy&4yLknZ_wM8' );
define( 'NONCE_SALT',       'F9n%%Bhe/OD*!1_FD~|6 diG2 }@G+96$hk0rrr?T@v5*NNZ{:q*aM-|9PgZ3QE[' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
