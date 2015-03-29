var m = require("mithril");
var headerPanel = require("../../components/header-panel/header-panel.js");
var toolbar = require("../../components/toolbar/toolbar.js");
var iconButton = require("../../components/icon-button/icon-button.js");
var icon = require("../../components/icon/icon.js");

(function() {
    var template = [
        '<div class="content">',
        [
            "Harun Omar and Master Hafiz",
            "keep your dead beautiful ladies",
            "Mine is a little lovelier",
            "than any of your ladies were.",
            "",
            "In her perfectest array",
            "my lady, moving in the day,",
            "is a little stranger thing",
            "than crisp Sheba with her king",
            "in the morning wandering.",
            ].join("<br />"),
        '</div>'].join("");

    function createToolbar (label) {
        return new toolbar({
            mode: "tall",
            bottomBar: [
                new iconButton({
                    iconClass: "md-menu",
                    clickHandler: function(e) {
                        console.log("menu clicked", e.target);
                    }
                }).view(),
                m("span[flex]", label),
                new iconButton({
                    iconClass: "md-refresh",
                    clickHandler: function(e) {
                        console.log("refresh clicked", e.target);
                    }
                }).view(),
                new iconButton({
                    iconClass: "md-add",
                    clickHandler: function(e) {
                        console.log("add clicked", e.target);
                    }
                }).view()
            ]
        });
    };

    function createContainer(className) {
        var div = document.createElement("div");
        div.className = className;
        document.body.appendChild(div);
        return div;
    };

    m.module(createContainer("flex-container"), headerPanel({
        mode: "standard",
        container: function(inner) {
            return m("div[flex]", {class: "header-panel"}, inner);
        },
        header: m("div", {class: "header"}, "Flex"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "standard",
        header: m("div", {class: "header"}, "Standard"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "seamed",
        header: m("div", {class: "header"}, "Seamed"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "waterfall",
        header: m("div", {class: "header"}, "Waterfall"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "tall",
        header: m("div", {class: "header"}, "Waterfall tall"),
        body: m.trust(template)
    }));
    m.module(createContainer("container"), headerPanel({
        mode: "tall",
        header: m("div", {class: "header medium-tall"}, "Waterfall tall (tallClass: medium-tall)"),
        body: m.trust(template),
        tallClass: "medium-tall"
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "scroll",
        header: m("div", {class: "header"}, "Scroll"),
        body: m.trust(template)
    }));

    m.module(createContainer("container"), headerPanel({
        mode: "standard",
        header: createToolbar("Toolbar").view(),
        body: m.trust(template)
    }));

})();