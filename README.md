

# Lenda interview problem
-----
## 1) Problem definition:

You will be creating a server-side API meeting the requirements below. Feel free
to use any Java framework and libraries that you feel are appropriate. 
Submit your work as a zip or tar archive, or as a shared git repository. 
It should be self-contained and you should include a README file with 
instructions on how to run the code. This exercise should not take more than xx 
minutes to complete, however we allocate xx hours and ask that you submit what 
you have completed at the xx-hour mark. This is your chance to show us at your 
best so we are looking for high quality code that is readable and maintainable, 
meets the specs, and works with the provided UI.

## 2) How to run it

1. Clone the repository
2. run "npm install"
3. node bin/www

 
## 3) Running tests

Tests can be run by using mocha on any -test file. 
For convenience there are a few gulp tasks defined:
* gulp factoryTests
* gulp routeTests
* gulp serviceTests

There's also a task to run all of them, but it's being a bit spotty at times as far as reporting success/failure.
* gulp test

## 4) Ideas for further enhancement/refactoring

Most of the code found in the post to /api/v1/game/:id is done in a blocking 
fashion, given some more time I'd refactor it to be all async. I don't like
having to parse the dictionary every start up, I'd like to move that to a more 
durable data store.

There is also a bug possible where a valid word could be rejected if the 
dictionary is still being built. Being able to put the service is a "booting up"
state would help.

