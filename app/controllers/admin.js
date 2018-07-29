module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia');
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Titulo é obrigátorio').notEmty();
    req.assert('resumo', 'Resumo é obrigátorio').notEmty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 30 caracteres').len(10, 30);
    req.assert('autor', 'Autor é obrigátorio').notEmty();
    req.assert('data_noticia', 'Data é obrigátorio').notEmty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Titulo é obrigátorio').notEmty();

    var errors = req.validationErrors();

    if(errors){
        res.render('admin/form_add_noticia', {validacao: errors});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias')
    });	
}