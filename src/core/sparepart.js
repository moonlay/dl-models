'use strict'

var BaseModel = require("capital-models").BaseModel;
var UoM = require("./UoM-docs").UoM;

module.exports = class Sparepart extends BaseModel {
    constructor(source) {
        super('sparepart', '1.0.0'); 

        this.code = '';
        this.name = '';
        this.description = '';
        this.UoM = new UoM();

        this.copy(source);
    }
}