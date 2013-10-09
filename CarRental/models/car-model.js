var carDataSource = new kendo.data.DataSource({
    transport: {
        autoSync: true,
        read: {
            url: '/data/cars.json',
            dataType: 'json'
        }
    }
});