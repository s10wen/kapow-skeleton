# Halt script for My Project
# -----------------------------------------------------------------------------

# Perform backup
# -------------------------------------

dbname="my_project"
dbfile="$dbname.sql"
backupsrc="database/backups"
backuptgt="$(dirname $0)/database"
user=$USER

cd $backupsrc

if [ -f $dbfile ]
  then
    cp $dbfile $backuptgt

    cd $backuptgt

    mv $dbfile "$dbname-$user.sql"

    echo "My Project database file backed up to the repo!";

  else
    echo "No My Project database file available for backup!"
fi
