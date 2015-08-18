# Database Backups

If you'd like a namespaced database dump adding to the repo each time you run `vagrant halt` you need to add a new trigger to your `Vagrantfile` which can be found in the root of your `/Vagrant` folder. 

This assumes that you have the [Vagrant Triggers](https://github.com/emyl/vagrant-triggers) plugin installed as per the [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) documentation.

The code you need to add is...

````
config.trigger.after :halt, :stdout => true do
  # Iterate through hosts and fire the vvv-halt.sh script
  # NOTE: The script must be executable (chmod +x <script>)
  haltPaths = Dir[File.join(vagrant_dir, 'www', '**', 'vvv-halt.sh')]
    for path in haltPaths
      run path
  end
end
````

...which is added towards the end of the Vagrant Triggers block at the bottom of the `Vagrantfile` like so...

````
# Vagrant Triggers
  #
  # If the vagrant-triggers plugin is installed, we can run various scripts on Vagrant
  # state changes like `vagrant up`, `vagrant halt`, `vagrant suspend`, and `vagrant destroy`
  #
  # These scripts are run on the host machine, so we use `vagrant ssh` to tunnel back
  # into the VM and execute things. By default, each of these scripts calls db_backup
  # to create backups of all current databases. This can be overridden with custom
  # scripting. See the individual files in config/homebin/ for details.
  if defined? VagrantPlugins::Triggers
    config.trigger.before :halt, :stdout => true do
      run "vagrant ssh -c 'vagrant_halt'"
    end
    config.trigger.before :suspend, :stdout => true do
      run "vagrant ssh -c 'vagrant_suspend'"
    end
    config.trigger.before :destroy, :stdout => true do
      run "vagrant ssh -c 'vagrant_destroy'"
    end
    # START NEW CODE
    config.trigger.after :halt, :stdout => true do
      # Iterate through hosts and fire the vvv-halt.sh script
      # NOTE: The script must be executable (chmod +x <script>)
      haltPaths = Dir[File.join(vagrant_dir, 'www', '**', 'vvv-halt.sh')]
        for path in haltPaths
          run path
      end
    end
    # END NEW CODE
  end
end
````

Save the file and then bring Vagrant up as normal. 

The next time you run `vagrant halt` Vagrant will execute the `vvv-halt.sh` shell script which will move a namespaced (using your system username) database dump into the `/database` directory e.g. `my_project-brucewayne.sql`.
