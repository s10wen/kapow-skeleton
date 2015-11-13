# Init script for My Project
# -----------------------------------------------------------------------------

# Begin set-up
# -------------------------------------
echo "Commencing My Project Setup"

# Make a database, unless we already
# have one set-up
# -------------------------------------
echo "Creating My Project database (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS my_project"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my_project.* TO wp@localhost IDENTIFIED BY 'wp';"

# The Vagrant site setup script will
# restart Nginx for us
# -------------------------------------
echo "My Project site now installed";
