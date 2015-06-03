# Init script for Your Project
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing Your Project Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS your-project"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON your-project.* TO wp@localhost IDENTIFIED BY 'wp';"

# Download WordPress
# -------------------------------------
if [ ! -d htdocs/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	cd htdocs
	wp core download --allow-root
	wp core config --dbname="your-project" --dbuser=wp --dbpass=wp --dbhost="localhost" --allow-root
	wp core install --url=your-project.dev --title="Your Project" --admin_user=admin --admin_password=password --admin_email=hello@makedo.in --allow-root
	cd ..
fi

# The Vagrant site setup script will 
# restart Nginx for us
# -------------------------------------
echo "Your Project site now installed";
