# Init script for My Project
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing My Project Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS my_project_db"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my_project_db.* TO wp@localhost IDENTIFIED BY 'wp';"

# Download WordPress
# -------------------------------------
if [ ! -d htdocs/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	cd htdocs
  mkdir wordpress
  cd wordpress
	wp core download --allow-root
	wp core install --url="my-project.dev" --title="My Project" --admin_user=admin --admin_password=password --admin_email="hello@my-project.com" --allow-root
	cd ../..
fi

# The Vagrant site setup script will
# restart Nginx for us
# -------------------------------------
echo "My Project site now installed";
