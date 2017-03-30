(function () {
    angular.module("app").directive("appCkeditor", [
        CKEditorDirective
    ]);

    function CKEditorDirective() {
        return {
            restrict: "A",
            scope: {
                conteudo: "=appCkeditor"
            },
            link: function ($scope, $element, attrs) {
                var config = {
                    filebrowserBrowseUrl: "/Browse",
                    filebrowserUploadUrl: "/Upload-Thumbnail",
                    allowedContent: true
                }

                var editor = CKEDITOR.replace($element[0], config);

                editor.on('change', updateModel);
                editor.on('dataReady', setData);

                function setData() {
                    if ($scope.conteudo) {
                        editor.setData($scope.conteudo);
                    }
                }

                function updateModel() {
                    $scope.$apply(function () {
                        $scope.conteudo = editor.getData();
                    });
                }
            }
        }
    }
})();