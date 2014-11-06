declare var angular:any;
declare var _:any;

angular.module("DemoApp")
.run(function($rootScope,presets,$timeout){

	$rootScope.presets = presets;



	$rootScope.$watch('slider',function(slider,old){
		var lessVals = angular.copy(slider);

		function toRGBA(rgbObject) {
			return "rgba("+rgbObject.r+","+rgbObject.g+","+rgbObject.b+","+rgbObject.a+")";

		}

		// var __lastCSS = __lastCSS || '';

		lessVals['thumb-color'] = toRGBA(lessVals['thumb-color']);
		lessVals['thumb-border-color'] = toRGBA(lessVals['thumb-border-color']);
		lessVals['thumb-shadow-color'] = toRGBA(lessVals['thumb-shadow-color']);

		lessVals['track-color'] = toRGBA(lessVals['track-color']);
		lessVals['track-border-color'] = toRGBA(lessVals['track-border-color']);
		lessVals['track-shadow-color'] = toRGBA(lessVals['track-shadow-color']);





		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// console.log("Slider...",slider,lessVals);

		lessVals['track-radius'] += "px";
		lessVals['track-shadow-size'] += "px";
		lessVals['track-shadow-blur'] += "px";
		lessVals['track-height'] += "px";
		lessVals['track-border-width'] += "px";

		lessVals['thumb-shadow-size'] += "px";
		lessVals['thumb-shadow-blur'] += "px";
		lessVals['thumb-height'] += "px";
		lessVals['thumb-width'] += "px";
		lessVals['thumb-border-width'] += "px";
		lessVals['thumb-radius'] += "px";

		lessVals['contrast'] += "%";
		less.modifyVars(lessVals);


		// less.refreshStyles(lessVals);

		// $timeout(function(){


			

		// },50);

		// console.log("Last cSS?",__lastCSS);

		// console.log("Generated Values?",angular.toJson(slider));

	},true);

	// $rootScope.watch(slider)

	$rootScope.$watch(function(){
		return less.lastCSS + $rootScope.slider.namespace;

		},function(newVal,oldVal){
			// console.log("lESS update");
			if (newVal) {
				if ($rootScope.slider.namespace) {
					$rootScope.output = newVal.replace(/input\[type=range\]/g,'input[type=range].'+$rootScope.slider.namespace);
				} else {
					$rootScope.output = newVal;
				}
			}

		})

	$rootScope.less = less;

	$rootScope.slider = presets['Bootstrap'];
	// $rootScope.slider.y= 2;



})