/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"uk/co/abports/demo/DEMO_PO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"uk/co/abports/demo/DEMO_PO/test/integration/pages/Main",
	"uk/co/abports/demo/DEMO_PO/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "uk.co.abports.demo.DEMO_PO.view.",
		autoWait: true
	});
});