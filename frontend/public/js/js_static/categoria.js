var jqueryDep = window.jQuery ? "third-party/jquery-dummy" : "third-party/jquery-1.8.3.min";
require.config({
    waitSeconds: 300,
    paths: {
        flexslider: "third-party/plugin/jquery.flexslider.min",
        color: "third-party/plugin/jquery.color-2.1.2.min",
        jquery: jqueryDep,
        masonry: "third-party/masonry.pkgd.min",
        underscore: "third-party/underscore-min",
        jwplayer: "third-party/jwplayer.min",
        vimeo: "third-party/froogaloop2.min",
        properties: "profile/properties",
        "default": "module/default",
        current: "module/categoria"
    },
    shim: {
        vimeo: {
            deps: ["jquery"]
        },
        flexslider: {
            deps: ["jquery"]
        },
        color: {
            deps: ["jquery"]
        },
        "default": {
            deps: ["flexslider", "color", "underscore"]
        },
        current: {
            deps: ["jquery", "masonry", "underscore", "properties"]
        }
    }
}), require(["default", "current"]);