
var motoApp = angular.module('motoApp', []);
	motoApp.controller('ctrl_listmoto', function ctrl_listmoto($scope){
		$scope.motos = [
			{name:'Ducati 951', price:'1000', snippet:'soydfgfadvasuig', img:'img/moto/mt-1.jpg'},
			{name:'Z1000', price:'2000', snippet:'sbducfduc asgcah sdhd', img:'img/moto/mt-3.jpg'},
			{name:'Ducati 1199', price:'3000', snippet:'yasgcu asdcga ayusdg uygdc', img:'img/moto/mt-2.jpg'}
		];
		this.orderKey = 'price';
	});