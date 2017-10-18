(function() {
	"use strict";

	angular
	.module('starWarsApp')
	.factory('filmesAPI', filmesAPI);

	filmesAPI.$inject = ['$http']

	function filmesAPI ($http) {
		var _listar = function() {
			return $http.get('https://swapi.co/api/films/');
		}
		
		return {
			listar:_listar
		}
	}
})();