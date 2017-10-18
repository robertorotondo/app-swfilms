(function() {
	"use strict";

	angular
	.module('starWarsApp')
	.controller('filmesController', filmesController);

	filmesController.$inject = ['filmesAPI', '$scope'];

	function filmesController(filmesAPI, $scope){
		$scope.filmes = [];

		$scope.listar = function(){
			filmesAPI.listar().then(function(response){
				$scope.filmes = response.data.results;
				console.log(response.data.results);
			});
		}
	}
})();