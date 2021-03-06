angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope,$cordovaFile) {

            $scope.checkdir=function(){
                // 检查指定路径下的目录是否存在
                $cordovaFile.checkDir(cordova.file.externalRootDirectory,"dir/")
               // $cordovaFile.checkDir(cordova.file.applicationDirectory,"www/")
                    .then(function (success) {
                       //  success
                        alert("成功"+success);
                    }, function (error) {
                        // error   用于测试目录
                        alert("asset="+cordova.file.applicationDirectory);
                        alert("sdcard="+cordova.file.externalRootDirectory+"dir/other_dir"+JSON.stringify(error));
                        alert("\data/data/<app-id>/="+cordova.file.applicationStorageDirectory);
                        alert("cache="+cordova.file.cacheDirectory);
                        alert("files="+cordova.file.dataDirectory);
                        alert("\<sdcard>\="+cordova.file.externalRootDirectory);
                        alert("\Android/data/<app-id>/="+cordova.file.externalApplicationStorageDirectory);
                      //  alert("cache1="+cordova.externalCacheDirectry);
                        alert("files1"+cordova.file.externalDataDirectory);
                    });

            };
            $scope.checkFile=function(){
               //$cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
                $cordovaFile.checkFile(cordova.externalRootDirectory, "abc.png")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+cordova.file.externalRootDirectory+"abc.png"+JSON.stringify(error));
                    });

            };
            $scope.createDir=function(){
                // CREATE
                $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.createFile=function(){
                $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });


            };
            $scope.removeDir=function(){

                // REMOVE
                $cordovaFile.removeDir(cordova.file.dataDirectory, "some_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.removeFile=function(){

                $cordovaFile.removeFile(cordova.file.dataDirectory, "some_file.txt")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.removeRecursively=function(){

                $cordovaFile.removeRecursively(cordova.file.dataDirectory, "")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });


            };
            $scope.writeFile=function(){

                // WRITE
                $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });


            };
            $scope.writeExistingFile=function(){
                $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });


            };
            $scope.readAsText=function(){

                // READ
                $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.moveDir=function(){

                // MOVE
                $cordovaFile.moveDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.moveFile=function(){

                $cordovaFile.moveFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.copyDir=function(){

                // COPY
                $cordovaFile.copyDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });

            };
            $scope.copyFile=function(){

                $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+JSON.stringify(error));
                    });
            };





    });
