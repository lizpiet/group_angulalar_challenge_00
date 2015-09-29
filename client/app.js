var app = angular.module("TwitterNames", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http){
var nounArray =[], adjectiveArray = [];

    $scope.getNouns = function(){
        $http({
            method: 'GET',
            url: 'assets/data/nouns.json'
        }).then(function (res){
            $scope.nouns = res.data;
            var i = 0;
            while(i < $scope.nouns.length){
                nounArray.push($scope.nouns[i].noun);
                i++;
            }
            //console.log("got here!!")
            console.log(nounArray);
        });
    };
    $scope.getAdjectives = function(){
        $http({
            method: 'GET',
            url: 'assets/data/adjectives.json'
        }).then(function (res){
            $scope.adjectives = res.data;
            var i = 0;
            while(i < $scope.adjectives.length){
                adjectiveArray.push($scope.adjectives[i].adjective);
                i++;

            }
            console.log(adjectiveArray);
        });
    };

    function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }



$scope.getNouns();
$scope.getAdjectives();

}]);

