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
	cd build
	wp core download --allow-root
	wp core install --url=my-project.dev --title="My Project" --admin_user=admin --admin_password=password --admin_email=hello@my-project.com --allow-root --path=build/wordpress
	rm -rf wp-content/plugins/akismet
	echo '<?php' > salt.php && curl -L https://api.wordpress.org/secret-key/1.1/salt/ >> salt.php
	cd ..
fi

# The Vagrant site setup script will
# restart Nginx for us.
# -------------------------------------
echo "My Project site now installed";
