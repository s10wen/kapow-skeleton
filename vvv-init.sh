# Init script for Avengers Initiative
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing Avengers Initiative Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS avengers_db"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON avengers_db.* TO wp@localhost IDENTIFIED BY 'wp';"

# Download WordPress
# -------------------------------------
if [ ! -d htdocs/wp-admin ]
then
	echo "Installing WordPress using WP CLI"
	cd htdocs
	wp core download --allow-root
	wp core config --dbname="avengers_db" --dbuser=wp --dbpass=wp --dbhost="localhost" --allow-root
	wp core install --url="avengers-staging.dev" --title="Avengers Initiative" --admin_user=admin --admin_password=password --admin_email="director@avengersemail.com" --allow-root
	cd ..
fi

# The Vagrant site setup script will
# restart Nginx for us
# -------------------------------------
echo "Avengers Initiative site now installed";
