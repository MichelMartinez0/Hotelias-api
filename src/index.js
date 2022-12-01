const app  = require ('./app');
app.listen(process.env.PORT || 3200, function(){
    console.log("Express escuchando en el puerto"
    ,app.settings.env)
}
)


