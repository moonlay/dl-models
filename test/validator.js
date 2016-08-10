if (process.env.NODE_ENV == 'production') {
    exports = {};
}
else {

    var should = require('should');

    var validateTextile = function (data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('name');
        data.name.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
        
        data.should.have.property('UoM');
        data.UoM.should.instanceOf(Object);
        validateUoMDocs(data.UoM);
        
        data.should.have.property('largeQuantity');
        data.largeQuantity.should.be.Number();

        data.should.have.property('largeUnit');
        data.largeUnit.should.instanceof(String);

        data.should.have.property('smallQuantity');
        data.smallQuantity.should.be.Number();
        
        data.should.have.property('smallUnit');
        data.smallUnit.should.instanceof(String);

        data.should.have.property('isDefault');
        data.isDefault.should.be.Boolean();
        
    }

    var validateFabric = function (data) {
        data.should.not.equal(null);
        data.should.instanceOf(Object);

        data.should.have.property('code');
        data.code.should.instanceOf(String);

        data.should.have.property('name');
        data.name.should.instanceOf(String);

        data.should.have.property('composition');
        data.composition.should.instanceOf(String);

        data.should.have.property('construction');
        data.construction.should.instanceOf(String);

        data.should.have.property('thread');
        data.thread.should.instanceOf(String);

        data.should.have.property('width');
        data.width.should.instanceOf(Number);

        data.should.have.property('UoM');
        data.UoM.should.instanceOf(Object);
        validateUoMDocs(data.UoM);

    }

    var validateAccessories = function (data) {
        data.should.not.equal(null);
        data.should.instanceOf(Object);

        data.should.have.property('code');
        data.code.should.be.String();

        data.should.have.property('name');
        data.name.should.be.String();

        data.should.have.property('description');
        data.description.should.be.String();
    }

    var validateUoMDocs = function (data) {
        data.should.not.equal(null);
        data.should.instanceOf(Object);

        data.should.have.property('category');
        data.category.should.be.String();

        data.should.have.property('default');
        data.default.should.instanceOf(Object);
        validateUoMTemplate(data.default);

        data.should.have.property('units');
        data.units.should.instanceOf(Array);

        for (var unit of data.units) {
            validateUoMTemplate(unit);
        }
    }

    var validateUoMTemplate = function (data) {
        data.should.not.equal(null);
        data.should.instanceOf(Object);

        data.should.have.property('mainValue');
        data.mainValue.should.instanceOf(Number);

        data.should.have.property('mainUnit');
        data.mainUnit.should.instanceOf(String);

        data.should.have.property('convertedValue');
        data.convertedValue.should.instanceOf(Number);

        data.should.have.property('convertedUnit');
        data.convertedUnit.should.instanceOf(String);
    }

    exports.core = {
        fabric: validateFabric,
        textile: validateTextile,
        accessories: validateAccessories,
        UoMDocs: validateUoMDocs
    }
}