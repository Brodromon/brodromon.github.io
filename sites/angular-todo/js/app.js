angular.module("myApp", ['LocalStorageModule'])
    .controller("fCtrl", function(localStorageService){
        var vm = this;
        //Make a temporary variable
        vm.tempInput = "";
        vm.commentG;
        //Make a repository of tasks
        vm.tasksArr = localStorageService.get("tasksArr") || [];
        vm.showComments = false;
        vm.taskDetails = 0;
        //Make a function, to transfer from termorary repository to all tasks


        vm.addNew = function() {
            if ( vm.tempInput ) {
                var task = {
                    name: vm.tempInput,
                    comments: []
                };
                vm.tasksArr.push(task);
                localStorageService.set("tasksArr", vm.tasksArr)
                vm.tempInput = "";
            }
            else {
                console.log("NO!");
            }
        }
        vm.addCom = function(commentG) {
            console.log(vm.commentG);
            if ( vm.commentG ) {
                vm.taskDetails.comments.push(vm.commentG);
                localStorageService.set("tasksArr", vm.tasksArr);
                vm.commentG = "";
                commentG = "";
            }
            else {
                console.log("empty!");
            }
        }
        vm.deleteItem = function(index) {
            vm.tasksArr.splice(index, 1);
            localStorageService.set("tasksArr", vm.tasksArr);
            vm.showComments = false;
        };
        vm.showDetails = function(index) {
            console.log(index);
            vm.showComments = true;
            vm.taskDetails = vm.tasksArr[index];
        }
});