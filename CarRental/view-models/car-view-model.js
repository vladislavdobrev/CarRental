var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        data: carDataSource.fetch(function() {
            return carDataSource.data();
        }),
        selectedCategory: null,
        change: onCategoryChanged
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);       
    }
    
    function onCategoryChanged(e) {             
        console.log(e.sender._selectedValue);
        viewModel.set("selectedCategory", JSON.stringify(e.sender._selectedValue));
    }
    
    a.categories = {
        init: init          
    };
}(app));