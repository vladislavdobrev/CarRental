var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        model: [],
        viewModel: [],
        selectedCar: null,
        change: onCategoryChanged
    });
    
    function init(e) {
        carDataSource.fetch(function () {
            var data = this.data();
            viewModel.set("model", data);
            
            for (var i = 0; i < viewModel.model.length; i++) {
                viewModel.viewModel.push({
                    id: i + 1,
                    name: viewModel.model[i].manufactorer + " " + viewModel.model[i].model
                });
            }
        });
        
        kendo.bind(e.view.element, viewModel);       
    }
    
    function onCategoryChanged(e) {
        var id = parseInt(e.sender._selectedValue);
        viewModel.set("selectedCar", viewModel.model[id - 1]);
    }
    
    a.rentCar = {
        init: init          
    };
}(app));