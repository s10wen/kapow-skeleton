# Init script for Your Project
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing My Project Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS your-project"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my-project.* TO wp@localhost IDENTIFIED BY 'wp';"

# Download WordPress
# -------------------------------------
if [ ! -d htdocs/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	cd htdocs
	wp core download --allow-root
	wp core config --dbname="my-project" --dbuser=wp --dbpass=wp --dbhost="localhost" --allow-root
	wp core install --url="my-project.dev" --title="My Project" --admin_user=admin --admin_password=password --admin_email="hello@myproject.com" --allow-root
	cd ..
fi

# The Vagrant site setup script will
# restart Nginx for us
# -------------------------------------
echo "My Project site now installed";
