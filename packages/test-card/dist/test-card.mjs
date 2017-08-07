import { Button, Card, IconButton, List, ListTile, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Button as Button$1, Card as Card$1, IconButton as IconButton$1, List as List$1, ListTile as ListTile$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconLessSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"/></svg>";
var iconHeartSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z \"/></svg>";
var iconBookmarkSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#050708\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z \"/></svg>";
var iconShareSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 20.9994,10.9981L 13.9994,3.99807L 13.9994,7.99807C 6.9994,8.99807 3.9994,13.9981 2.9994,18.9981C 5.4994,15.4981 8.9994,13.8981 13.9994,13.8981L 13.9994,17.9981L 20.9994,10.9981 Z \"/></svg>";

var genericTests = (function (_ref) {
  var _events;

  var Card$$1 = _ref.Card,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Button$$1 = _ref.Button,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer,
      k = _ref.keys;


  var IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
  var iconLess = h.trust(iconLessSVG);
  var iconHeart = h.trust(iconHeartSVG);
  var iconBookmark = h.trust(iconBookmarkSVG);
  var iconShare = h.trust(iconShareSVG);
  var greyImage = IMG_URL + "grey.jpg";
  var squareImage = IMG_URL + "circle.png";
  var landscapeImage = IMG_URL + "1.jpg";
  var portraitImage = IMG_URL + "2.jpg";
  var holidayImage = IMG_URL + "3.jpg";

  var listTitle = "Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
  var listSubtitle = "Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var titleLineText = "Title";
  var infoLineText = "Subhead";
  var ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
  var shortIpsum = "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

  var avatarImageUrl = function avatarImageUrl(fileName) {
    return "http://arthurclemens.github.io/assets/polythene/examples/avatar-" + fileName;
  };

  var twoButtonRow = [h(Button$$1, { label: "Action 1", key: "one" }), h(Button$$1, { label: "Action 2", key: "two" })];

  var twoButtonAndLessRow = [h(Button$$1, {
    label: "Action 1",
    key: "one"
  }), h(Button$$1, {
    label: "Action 2",
    key: "two"
  }), h(".flex", { key: "space" }), h(IconButton$$1, {
    key: "three",
    icon: {
      size: "medium",
      svg: iconLess
    }
  })];

  var iconButtonRow = [h(".flex", { key: "space" }), h(IconButton$$1, {
    icon: { svg: iconHeart },
    key: "heart"
  }), h(IconButton$$1, {
    icon: { svg: iconBookmark },
    key: "bookmark"
  }), h(IconButton$$1, {
    icon: { svg: iconShare },
    key: "share"
  })];

  var justifiedButtonActions = {
    layout: "justified",
    tight: true,
    content: [h(IconButton$$1, {
      icon: { svg: iconHeart },
      key: "heart"
    }), h(IconButton$$1, {
      icon: { svg: iconBookmark },
      key: "bookmark"
    }), h(IconButton$$1, {
      icon: { svg: iconShare },
      key: "share"
    })]
  };

  var verticalButtonActions = {
    layout: "vertical",
    content: [h(IconButton$$1, {
      icon: { svg: iconHeart },
      key: "heart"
    }), h(IconButton$$1, {
      icon: { svg: iconBookmark },
      key: "bookmark"
    }), h(IconButton$$1, {
      icon: { svg: iconShare },
      key: "share"
    })]
  };

  var titleImage = function titleImage(size, title) {
    return [{
      primary: {
        key: "title",
        title: title,
        subtitle: "Subtitle",
        media: {
          ratio: "square",
          size: size,
          content: h("img", {
            src: landscapeImage
          })
        }
      }
    }, {
      actions: {
        content: twoButtonRow,
        key: "actions"
      }
    }];
  };

  var titleImageExtraLarge = function titleImageExtraLarge(ratio) {
    return [{
      primary: {
        content: [{
          media: {
            ratio: ratio,
            size: "large",
            content: h("img", {
              key: "image",
              src: landscapeImage
            })
          }
        }, h(".flex", { key: "space" }), { actions: verticalButtonActions }]
      }
    }];
  };

  // const tabsContent = {
  //   view: () => 
  //     h(Tabs, {
  //       buttons: [
  //         { label: "New" },
  //         { label: "My Favorites" },
  //         { label: "Saved" }
  //       ],
  //       autofit: true
  //     })
  // };

  Card$$1.theme(".tests-card-colored-card", {
    color_light_main_background: "#0097a7",
    color_light_title_text: "#fff",
    color_light_subtitle_text: "#fff"
  });

  return [{
    name: "Any content (list)",
    component: Card$$1,
    attrs: {
      content: h(List$$1, {
        hoverable: true,
        tiles: [h(ListTile$$1, {
          title: listTitle,
          subtitle: listSubtitle
        }), h(ListTile$$1, {
          title: listTitle,
          subtitle: listSubtitle
        }), h(ListTile$$1, {
          title: listTitle,
          subtitle: listSubtitle
        })]
      })
    }
  },
  // {
  //   name: "Any content (tabs)",
  //   component: {
  //     view: () =>
  //       h(Card, {
  //         content: h(tabsContent)
  //       })
  //   }  
  // },
  {
    name: "Primary with title and subtitle",
    component: Card$$1,
    attrs: {
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }]
    }
  }, {
    name: "Themed (color)",
    component: Card$$1,
    attrs: {
      className: "tests-card-colored-card",
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }]
    }
  }, {
    name: "Header with icon",
    component: Card$$1,
    attrs: {
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: greyImage
          })
        }
      }]
    }
  }, {
    name: "Primary text with supporting text",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          content: h("img", {
            src: greyImage
          })
        }
      }, {
        primary: {
          title: "Primary title",
          subtitle: "Subtitle " + shortIpsum
        }
      }]
    }
  }, {
    name: "Primary text with action row and text",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          content: h("img", {
            src: greyImage
          })
        }
      }, {
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }, {
        actions: { content: twoButtonAndLessRow }
      }, {
        text: { content: ipsum }
      }]
    }
  }, {
    name: "Bottom action row, bordered",
    component: Card$$1,
    attrs: {
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: greyImage
          })
        }
      }, {
        text: { content: ipsum }
      }, {
        actions: {
          bordered: true,
          content: twoButtonAndLessRow
        }
      }]
    }
  }, {
    name: "Bottom action row, vertical",
    component: Card$$1,
    attrs: {
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: greyImage
          })
        }
      }, {
        text: { content: ipsum }
      }, {
        actions: {
          layout: "vertical",
          bordered: true,
          tight: true,
          content: h(List$$1, { borders: true }, [h(ListTile$$1, { hoverable: true }, "Action 1"), h(ListTile$$1, { hoverable: true }, "Action 2"), h(ListTile$$1, { hoverable: true }, "Action 3")])
        }
      }]
    }
  },

  // 16:9 square

  {
    name: "16:9 media with square image, anchor origin: default",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          content: h("img", {
            src: squareImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with square image, anchor origin: start",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "start",
          content: h("img", {
            src: squareImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with square image, anchor origin: end",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "end",
          content: h("img", {
            src: squareImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  },

  // 16:9 landscape

  {
    name: "16:9 media with landscape image, anchor origin: default",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with landscape image, anchor origin: start",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "start",
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with landscape image, anchor origin: end",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "end",
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  },

  // 16:9 portrait

  {
    name: "16:9 media with portrait image, anchor origin: default",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          content: h("img", {
            src: portraitImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with portrait image, anchor origin: start",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "start",
          content: h("img", {
            src: portraitImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "16:9 media with portrait image, anchor origin: end",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          origin: "end",
          content: h("img", {
            src: portraitImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  },

  // 1:1 portrait

  {
    name: "1:1 media with square image, anchor origin: default",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "1:1 media with landscape image, anchor origin: start",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          origin: "start",
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  }, {
    name: "1:1 media with landscape image, anchor origin: end",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          origin: "end",
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        actions: { content: iconButtonRow }
      }]
    }
  },

  // Overlay

  {
    name: "Overlay with sheet (default dark tone)",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          content: h("img", {
            src: landscapeImage
          }),
          overlay: {
            sheet: true,
            content: [{
              primary: {
                key: "title",
                title: "Primary title",
                subtitle: "Subtitle"
              }
            }, {
              actions: { content: twoButtonRow }
            }]
          }
        }
      }]
    }
  }, {
    name: "Overlay with sheet (light tone)",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          content: h("img", {
            src: landscapeImage
          }),
          overlay: {
            tone: "light",
            sheet: true,
            content: [{
              primary: {
                key: "title",
                title: "Primary title",
                subtitle: "Subtitle"
              }
            }, {
              actions: { content: twoButtonRow }
            }]
          }
        }
      }]
    }
  }, {
    name: "Overlay without sheet",
    component: Card$$1,
    attrs: {
      content: [{
        media: {
          ratio: "square",
          content: h("img", {
            src: landscapeImage
          }),
          overlay: {
            className: "pe-dark-tone",
            content: [{
              primary: { title: "Title" }
            }]
          }
        }
      }, {
        actions: justifiedButtonActions
      }]
    }
  },

  // Title image

  {
    name: "Title image, small",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("small", "Title image small")
    }
  }, {
    name: "Title image, regular",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("regular", "Title image regular")
    }
  }, {
    name: "Title image, medium",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("medium", "Title image medium")
    }
  }, {
    name: "Title image, sizse large, square",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px" },
      content: titleImageExtraLarge("square")
    }
  }, {
    name: "Title image, sizse large, landscape",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px" },
      content: titleImageExtraLarge("landscape")
    }
  }, {
    name: "Card URL",
    component: Card$$1,
    attrs: {
      url: {
        href: "http://en.wikipedia.org/wiki/Road_to_Nowhere"
      },
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            className: "pe-icon--avatar",
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }]
    }
  }, {
    name: "Card events",
    component: Card$$1,
    attrs: {
      events: (_events = {}, _defineProperty(_events, k.onmouseover, function (e) {
        if (e.target.className === "pe-card__media__dimmer") {
          e.target.style.boxShadow = "inset 0px 0px 40px rgba(0, 0, 0, 0.6)";
        }
      }), _defineProperty(_events, k.onmouseout, function (e) {
        if (e.target.className === "pe-card__media__dimmer") {
          e.target.style.boxShadow = "none";
        }
      }), _defineProperty(_events, k.onclick, function () {
        window.alert("Card clicked");
      }), _events),
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }, {
        actions: {
          content: [h(Button$$1, {
            key: "one",
            label: "Action 1",
            events: _defineProperty({}, k.onclick, function (e) {
              // prevent Card event
              e.stopPropagation();
              window.alert("Action 1 clicked");
            })
          }), h(Button$$1, {
            key: "two",
            label: "Action 2",
            events: _defineProperty({}, k.onclick, function (e) {
              // prevent Card event
              e.stopPropagation();
              window.alert("Action 2 clicked");
            })
          })]
        }
      }]
    }
  }, {
    name: "Custom Card white",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px" },
      content: [{
        primary: {
          content: [{
            title: h(".pe-card__title", { key: "title" }, [h(".pe-card__subtitle", { key: "subtitle" }, "Travel"), h("span", { key: "title-content" }, "Road Trip")])
          }, {
            media: {
              ratio: "square",
              size: "small",
              content: h("img", {
                src: landscapeImage
              })
            }
          }]
        }
      }, {
        text: { content: "A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile." }
      }, {
        actions: { content: twoButtonRow }
      }]
    }
  }, {
    name: "Custom Card sand",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#B89E58" },
      className: "pe-dark-tone",
      content: [{
        primary: {
          title: "Get Ready",
          subtitle: "2 Unlimited",
          media: {
            ratio: "square",
            size: "medium",
            content: h("img", {
              src: "https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757"
            })
          }
        }
      }, {
        actions: {
          content: [h(Button$$1, {
            key: "button",
            label: "Listen now"
          })]
        }
      }]
    }
  }, {
    name: "Custom Card blue",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#227586" },
      className: "pe-dark-tone",
      content: [{
        primary: {
          title: "Supermodel",
          subtitle: "Foster the People",
          media: {
            ratio: "square",
            size: "medium",
            content: h("img", {
              src: "http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg"
            })
          }
        }
      }, {
        actions: {
          content: [h(Button$$1, {
            key: "button",
            label: "Listen now"
          })]
        }
      }]
    }
  }, {
    name: "Custom Card purple",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#871E6A" },
      className: "pe-dark-tone",
      content: [{
        primary: {
          title: "Bucket List"
        }
      }, {
        text: {
          content: h.trust("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")
        }
      }, {
        actions: {
          content: h(Button$$1, {
            key: "button",
            label: "Edit"
          })
        }
      }]
    }
  },

  // Depth

  {
    name: "Depth normal, tight text",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "170px" },
      content: [{
        text: {
          tight: true,
          content: "Normal"
        }
      }]
    }
  }, {
    name: "Depth 0, tight text",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "170px" },
      content: [{
        text: {
          tight: true,
          content: "Flat"
        }
      }],
      z: 0
    }
  }, {
    name: "Depth 2, tight text",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "170px" },
      content: [{
        text: {
          tight: true,
          content: "Raised"
        }
      }],
      z: 2
    }
  },

  // Separate elements

  {
    name: "Separate elements - media",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        media: {
          content: h("img", {
            src: holidayImage
          })
        }
      }]
    }
  }, {
    name: "Separate elements - text",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        text: {
          content: h.trust("<strong>Normal - (visual) 24px bottom padding</strong> " + ipsum)
        }
      }]
    }
  }, {
    name: "Separate elements - tight text",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        text: {
          tight: true,
          content: h.trust("<strong>Tight - (visual) 16px bottom padding</strong> " + ipsum)
        }
      }]
    }
  }, {
    name: "Separate elements - header with avatar",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }]
    }
  }, {
    name: "Separate elements - normal primary title",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Normal - (visual) 24px bottom padding"
        }
      }]
    }
  }, {
    name: "Separate elements - tight primary title",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Normal - (visual) 16px bottom padding",
          tight: true
        }
      }]
    }
  }, {
    name: "Separate elements - actions",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        actions: {
          content: twoButtonRow
        }
      }]
    }
  }, {
    name: "Separate elements - vertical actions",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        actions: {
          layout: "vertical",
          tight: true,
          content: h(List$$1, { borders: true }, [h(ListTile$$1, { hoverable: true, key: "one" }, "Action 1"), h(ListTile$$1, { hoverable: true, key: "two" }, "Action 2"), h(ListTile$$1, { hoverable: true, key: "three" }, "Action 3")])
        }
      }]
    }
  }, {
    name: "Separate elements - icon button actions",
    component: Card$$1,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        actions: {
          content: iconButtonRow
        }
      }]
    }
  },

  // Dark tone

  {
    name: "Texts -- dark theme class",
    component: Card$$1,
    className: "pe-dark-tone",
    attrs: {
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            size: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }, {
        media: {
          content: h("img", {
            src: landscapeImage
          })
        }
      }, {
        primary: {
          title: "Primary title " + shortIpsum,
          subtitle: "Subtitle " + shortIpsum
        }
      }, {
        text: {
          content: ipsum
        }
      }, {
        actions: {
          bordered: true,
          content: twoButtonAndLessRow
        }
      }]
    }
  }, {
    name: "Dark tone class + light theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff"
          },
          className: "pe-light-tone"
        }, h(Card$$1, {
          content: [{
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          }, {
            media: {
              content: h("img", {
                src: landscapeImage
              })
            }
          }, {
            primary: {
              title: "Primary title " + shortIpsum,
              subtitle: "Subtitle " + shortIpsum
            }
          }, {
            text: {
              content: ipsum
            }
          }, {
            actions: {
              bordered: true,
              content: twoButtonAndLessRow
            }
          }]
        }));
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff"
          }
        }, h(Card$$1, {
          tone: "light",
          content: [{
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          }, {
            media: {
              content: h("img", {
                src: landscapeImage
              })
            }
          }, {
            primary: {
              title: "Primary title " + shortIpsum,
              subtitle: "Subtitle " + shortIpsum
            }
          }, {
            text: {
              content: ipsum
            }
          }, {
            actions: {
              bordered: true,
              content: twoButtonAndLessRow
            }
          }]
        }));
      }
    }
  }];
});

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ Card: Card, List: List, ListTile: ListTile, Button: Button, IconButton: IconButton, renderer: renderer, keys: keys })).concat(mithrilTests({ Card: Card, List: List, ListTile: ListTile, Button: Button, IconButton: IconButton, renderer: renderer, keys: keys }));

var reactTests = function reactTests(_ref) {
  var Card$$1 = _ref.Card,
      Button$$1 = _ref.Button;
  // eslint-disable-line no-unused-vars

  var titleLineText = "Title";
  var infoLineText = "Subhead";
  var avatarImageUrl = function avatarImageUrl(fileName) {
    return "http://arthurclemens.github.io/assets/polythene/examples/avatar-" + fileName;
  };
  var IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
  var holidayImage = IMG_URL + "3.jpg";

  return [{
    section: "React JSX tests"
  }, {
    name: "Header with icon, media, actions (JSX)",
    component: function component() {
      return React.createElement(Card$$1, {
        content: [{
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              size: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        }, {
          media: {
            content: React.createElement("img", { src: holidayImage })
          }
        }, {
          actions: {
            content: React.createElement(
              "div",
              null,
              React.createElement(Button$$1, { label: "Action 1", key: "one" }),
              React.createElement(Button$$1, { label: "Action 2", key: "two" })
            )
          }
        }]
      });
    }
  }];
};

var testsReact = [].concat(genericTests({ Card: Card$1, List: List$1, ListTile: ListTile$1, Button: Button$1, IconButton: IconButton$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Card: Card$1, List: List$1, ListTile: ListTile$1, Button: Button$1, IconButton: IconButton$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
