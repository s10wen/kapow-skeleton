# Init script for My Project
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
if [ ! -d build/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	# Download the latest stable release of WordPress
	wp core download --path=build/wordpress --allow-root
	# Install the database tables and configure WordPress.
	wp core install --url=the-avengers.dev --title="The Avengers" --admin_user=admin --admin_password=password --admin_email=hello@the-avengers.com --allow-root --path=build/wordpress
	# Remove Akismet.
	rm -rf build/wp-content/plugins/akismet
	# Generate Salts.
	echo '<?php' > build/salt.php && curl -L https://api.wordpress.org/secret-key/1.1/salt/ >> build/salt.php
fi

# The Vagrant site setup script will
# restart Nginx for us.
# -------------------------------------
echo "My Project site now installed";
