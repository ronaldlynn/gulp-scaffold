# Gulp Scaffold

I've developed this Gulp build scaffold over the past year or two, and I use it under each Gulp-based project I start up. Nothing fancy; I typically download the zip archive or clone with Git then kill the .git folder from inside the project and re-init.

* Run `npm install` to install all the required node modules.
* The gulpfile simply loads the `require-dir` npm package and uses it to require all of the contents of the `build/tasks` tree.
* Each javascript file under `build/tasks` handles a different gulp task, but is conveniently packaged in a modular fashion.
* The `build/paths.js` file points to appropriate paths within the `src`, `dev`, and `dist` folders.
* The `src` folder contains subfolders, each containing a `.gitkeep` file to retain the empty folder in the repository. The `.gitkeep` files can be deleted once its containing folder has other contents.

Enjoy!
Ron
