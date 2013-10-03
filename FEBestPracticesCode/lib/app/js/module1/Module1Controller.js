(function() {

    "use strict";

    APP.controller.Module1 = function() {
        var service, view;

        function load() {
            service = service || new APP.service.Module1();
            service.getData(onDataReceive);
        }

        function onDataReceive(data) {
            view = view || new APP.view.Module1();
            view.render(data);
        }

        return {
            load: load
        };
    };

}());