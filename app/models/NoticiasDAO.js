function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_cadastro desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticias = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
	this._connection.query("insert into noticias (titulo, noticia) values ('" + noticia.titulo + "', '" + noticia.noticia + "')", callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
	this._connection.query("select * from noticias order by data_noticia desc limit 5)", callback);
}

module.exports = function () {
	return NoticiasDAO;
}