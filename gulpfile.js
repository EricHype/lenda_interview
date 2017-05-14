var gulp = require('gulp');
var mocha = require('gulp-mocha');
var exit = require('gulp-exit');

var factoryTests = [
        './test/factory/board-factory-test.js'
    ];

var routeTests = [
        './test/routes/game-routes-test.js'
    ]; 

var serviceTests = [
  './test/service/board-word-service-test.js',
  './test/service/dictionary-service-test.js',
  './test/service/word-score-service-test.js'
];
    
gulp.task('test', function() {
  gulp.run('factoryTests', 'routeTests', 'serviceTests');
});
   
   
gulp.task('factoryTests', function(){
  gulp.src(factoryTests)
    .pipe(mocha()) 
    .on('end', function() { console.log('>>Finished Running Factory Tests'); })
    .pipe(exit());
});      
    
gulp.task('routeTests', function(){
  gulp.src(routeTests)
    .pipe(mocha()) 
    .on('end', function() { console.log('>>Finished Running Route Tests'); })
    .pipe(exit());
});    

gulp.task('serviceTests', function(){
  gulp.src(serviceTests)
    .pipe(mocha()) 
    .on('end', function() { console.log('>>Finished Running Service Tests'); })
    .pipe(exit());
});
