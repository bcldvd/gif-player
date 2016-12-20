(function () {
    'use strict';

    angular.module('gif-player', [])
        .component('gifPlayer', gifPlayer())
    ;

    function gifPlayer() {
        return {
            template: '<img ng-src="{{$ctrl.src}}" id="{{$ctrl.gifId}}">' +
            '<div class="backdrop">' +
            '<span>GIF</span>' +
            '</div>',
            bindings: {
                src: '<'
            },
            controller: gifPlayerCtrl
        };
    }

    function gifPlayerCtrl() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        function $onInit() {
            $ctrl.gifId = generatedId();
            setTimeout(function () {
                var second = new freezeframe({
                    'selector': '#' + $ctrl.gifId,
                    'animation_play_duration': Infinity,
                    'non_touch_device_trigger_event': 'hover'
                }).freeze();
            }, 0);
        }

        function generatedId() {
            var randomId = Math.random();
            var prefix = 'id';
            return prefix + randomId.toString().slice(2, randomId.length);
        }

    }
})();