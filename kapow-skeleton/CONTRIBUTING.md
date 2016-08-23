# Contribution Guidelines

## Workflow Summary

* Develop on a feature branch and send a pull request for review.
* Assign the pull request to one of the following contacts:
  * Matt Watson [@mwtsn](https://github.com/@mwtsn)
	* Dave Green [@davetgreen](https://github.com/@davetgreen)
	
## Create a Feature Branch

* Branch from the latest version of `staging`
	* `git checkout staging`
	* `git checkout -b my-feature-branch`
* Name your branch something useful, in the following format: [issue_id]-[feature/fix]
	* If using Trello as reference for the development the issue_id should be the short-link to the Trello card
	* If using GitHub or BitBucket as reference for the development use the issue ID.
	* If nothing exists to reference against, then a) why are you developing it? or b) create an issue to reference against
* An example branch name would be `issue-2da9as-install-wpml-plugin`
* Once you have created your feature branch you will need to commit it to the shared repository.
	* `git push origin my-feature-branch`

## About Feature Branches

* Feature branches should be 'atomic', they should only contain one feature only.
* Do not be afraid to break modules into smaller components, the smaller they are the easier they are to review.
* An issue could relate to the removal of a plugin because some custom function could replace it, you could:
	* Remove the plugin in one branch
	* Create a custom function in another branch

## Commit Small, Commit Regular

* Commits should be small and regular, eg if you are working on a front-end module:
	* Commit the Partial
	* Commit the HTML
	* Commit the SCSS
	* Commit the JS
	* Commit code alterations
* Small commits help when code is being reviewed.
