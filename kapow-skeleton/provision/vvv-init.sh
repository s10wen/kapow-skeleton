#!/usr/bin/env bash
# VVV Init script for My Project
# -----------------------------------------------------------------------------

# Core variables - can be overriden by
# Kapow! Setup script.
# -------------------------------------
plugins=true
salts=true
options=true
testdata=true
precommit=true

# Begin set-up.
# -------------------------------------
echo "Commencing My Project Setup!"

# Make a database, unless we already
# have one set-up.
# -------------------------------------
echo "Creating My Project database (if it's not already there)..."
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS my_project"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON my_project.* TO wp@localhost IDENTIFIED BY 'wp';"

# Install the WP database tables.
# (requires the latest build of WP-CLI)
# -------------------------------------
cd ${VVV_PATH_TO_SITE}
if [ ! -d build/wp-admin ] || [ ! -d build/wordpress/wp-admin ]
then
	echo "Installing and configuring WordPress using WP CLI..."

	# Download the latest stable release of WordPress.
	echo "Downloading WordPress core..."
	wp core download --path=build/wordpress --allow-root

	# Install the database tables and configure WordPress.
	echo "Adding core database tables..."
	wp core install --url=my-project.dev --title="My Project" --admin_user=admin --admin_password=password --admin_email=hello@my-project.com --allow-root --path=build/wordpress

	# Remove/Install/Activate Plugins.
	if [ "$plugins" = true ]
		then

		echo "Tinkering with plugins..."

		# Remove.
		rm -rf build/wp-content/plugins/akismet

		# Install.

		# Activate.
		wp plugin activate kapow-core --allow-root --path=build/wordpress
		wp plugin activate project-core --allow-root --path=build/wordpress

		# Copy the Kapow! Core configuration template
		# into the theme includes folder.
		kapowcoredir="build/wp-content/plugins/kapow-core"
		themeincludesdir="build/wp-content/themes/my-project/inc"

		if [ -d "$themeincludesdir" ]
			then

			cp $kapowcoredir/kapow-core-config-template.php $themeincludesdir
		fi
	fi

	# Generate Salts.
	if [ "$salts" = true ]
		then

		echo "Generating salts..."

		echo '<?php' > build/salt.php && curl -Ls https://api.wordpress.org/secret-key/1.1/salt/ >> build/salt.php
	fi

	# Update WP Options.
	if [ "$options" = true ]
		then

		echo "Updating WordPress options..."

		# Set the permalink structure to 'post name'.
		wp option update permalink_structure '/%postname%' --allow-root --path=build/wordpress

		# Set the default 'Sample Page' as the front page.
		wp option update show_on_front 'page' --allow-root --path=build/wordpress
		wp option update page_on_front 2 --allow-root --path=build/wordpress
	fi

	# Import WP Test data.
	if [ "$testdata" = true ]
		then

		echo "Importing WP test data..."

		curl -Os 'https://raw.githubusercontent.com/poststatus/wptest/master/wptest.xml'

		wp plugin install wordpress-importer --activate --allow-root --path=build/wordpress

		# NOTE: Bug in wp-cli means that downloading
		# attachments produces a lot of errors.
		#
		# Waiting until this is patched before we
		# remove the --skip=attachment flag.
		wp import wptest.xml --authors=skip --skip=attachment --allow-root --path=build/wordpress

		wp plugin uninstall wordpress-importer --deactivate --allow-root --path=build/wordpress

		rm wptest.xml
	fi
fi

# Trigger the WP Enforcer script to
# copy git hooks across if it has not
# already been installed.
# -------------------------------------
if [ "$precommit" = true ] && [ ! -d vendor/stevegrunwell/wp-enforcer ]
then
	echo "Copying Git hooks from WP Enforcer"
	./vendor/bin/wp-enforcer

	# Modify the Git pre-commit hook to write PHPCS output to file.
	precommitfile=".git/hooks/pre-commit"
	precommittarget="--standard=./phpcs.xml"
	precommitextra="--report-full=./reports/wpcs.md"
	if [ -f "$precommitfile" ]
		then

		sed -i "" "s#$precommittarget#$precommittarget $precommitextra#g" "$precommitfile"
	fi
fi

# The Vagrant site setup script will
# restart Nginx for us.
# -------------------------------------
echo "My Project site now installed";
