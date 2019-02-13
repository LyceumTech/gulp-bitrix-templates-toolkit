
module.exports = (src, dest) => {

    return mbx.gulp.src( src )
        .pipe( mbx.plumber({ errorHandler: function(err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( mbx.babel({ presets: ['@babel/env'] }) )
        .pipe( mbx.gulpif(!mbx.config.devMode, mbx.stripComments()) )
        .pipe( mbx.gulpif(!mbx.config.devMode, mbx.uglify()) )
        .pipe( mbx.gulp.dest(dest) )
        //.pipe( reload({stream:true}) )
        .pipe( mbx.notify({ message: 'JavaScript (ECMAScript) task complete', onLast: true }) );

};