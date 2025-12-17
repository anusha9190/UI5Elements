/*global QUnit*/

sap.ui.define([
	"com/anusha/project4/project4/controller/Main3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main3 Controller");

	QUnit.test("I should test the Main3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
