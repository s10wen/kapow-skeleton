# VVV Init script for My Project
# -----------------------------------------------------------------------------

# Begin set-up.
# -------------------------------------
echo "Commencing My Project Setup"

# Make a database, unless we already
# have one set-up.
# -------------------------------------
echo "Creating My Project database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS my_project"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my_project.* TO wp@localhost IDENTIFIED BY 'wp';"

# Install the WP database tables.
# (requires the latest build of WP-CLI)
# -------------------------------------
if [ ! -d build/wp-admin ] || [ ! -d build/wordpress/wp-admin ]
then
	echo "Installing and configuring WordPress using WP CLI"
	# Download the latest stable release of WordPress
	wp core download --path=build/wordpress --allow-root
	# Install the database tables and configure WordPress.
	wp core install --url=my-project.dev --title="My Project" --admin_user=admin --admin_password=password --admin_email=hello@my-project.com --allow-root --path=build/wordpress
	# Remove Plugins.
	rm -rf build/wp-content/plugins/akismet
	# Install/Activate Plugins.
	wp plugin activate kapow-core
	# Generate Salts.
	echo '<?php' > build/salt.php && curl -L https://api.wordpress.org/secret-key/1.1/salt/ >> build/salt.php
	# Set the permalink structure to 'post name'.
	wp option update permalink_structure '/%postname%'
	# Set the default 'Sample Page' as the front page.
	wp option update show_on_front 'page'
	wp option update page_on_front 2
	# Download and Import the WPTest.io data from GitHub, then clean up.
	curl -O https://raw.githubusercontent.com/poststatus/wptest/master/wptest.xml
	wp import wptest.xml --authors=skip
	rm wptest.xml
fi

# Trigger the WP Enforcer script to
# copy git hooks across if it has not
# already been installed.
# -------------------------------------
if [ ! -d vendor/stevegrunwell/wp-enforcer ]
then
	echo "Copying Git hooks from WP Enforcer"
	./vendor/bin/wp-enforcer
fi

# The Vagrant site setup script will
# restart Nginx for us.
# -------------------------------------
echo "My Project site now installed";
