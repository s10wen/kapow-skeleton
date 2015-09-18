# Init script for My Project
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing My Project Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating My Project database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS my_project_db"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my_project_db.* TO wp@localhost IDENTIFIED BY 'wp';"

# Download WordPress
# -------------------------------------
if [ ! -d build/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	cd build
  mv wp-config.php wp-config-bak.php
  cd wordpress
  wp core config --dbname="my_project_db" --dbuser=wp --dbpass=wp --allow-root
	wp core install --url="my-project.dev" --title="My Project" --admin_user=admin --admin_password=password --admin_email="hello@my-project.com" --allow-root
  rm wp-config.php
  cd ..
  mv wp-config-bak.php wp-config.php
	cd ..
fi

# The Vagrant site setup script will
# restart Nginx for us
# -------------------------------------
echo "My Project site now installed";
