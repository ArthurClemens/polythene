import m from "mithril";
import card from "polythene-card";
import tabs from "polythene-tabs";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import button from "polythene-button";
import iconButton from "polythene-icon-button";

const IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
const greyImage = IMG_URL + "grey.jpg";
const squareImage = IMG_URL + "circle.png";
const landscapeImage = IMG_URL + "1.jpg";
const portraitImage = IMG_URL + "2.jpg";
const holidayImage = IMG_URL + "3.jpg";

import iconLess from "mmsvg/google/msvg/navigation/expand-less";
import iconHeart from "mmsvg/templarian/msvg/heart";
import iconBookmark from "mmsvg/templarian/msvg/bookmark";
import iconShare from "mmsvg/templarian/msvg/share";

const listTitle = "Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
const listSubtitle = "Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const titleLineText = "Title";
const infoLineText = "Subhead";
const ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
const shortIpsum = "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

const avatarImageUrl = fileName => `http://arthurclemens.github.io/assets/polythene/examples/avatar-${fileName}`;

const twoButtonRow = [
  m(button, { label: "Action 1" }),
  m(button, { label: "Action 2" })
];

const twoButtonAndLessRow = [
  m(button, { label: "Action 1" }),
  m(button, { label: "Action 2" }),
  m(".flex"),
  m(iconButton, {
    icon: {
      type: "medium",
      msvg: iconLess
    }
  })
];

const iconButtonRow = [
  m(".flex"),
  m(iconButton, {
    icon: { msvg: iconHeart }
  }),
  m(iconButton, {
    icon: { msvg: iconBookmark }
  }),
  m(iconButton, {
    icon: { msvg: iconShare }
  })
];

const justifiedButtonActions = {
  layout: "justified",
  tight: true,
  content: [
    m(iconButton, {
      icon: { msvg: iconHeart }
    }),
    m(iconButton, {
      icon: { msvg: iconBookmark }
    }),
    m(iconButton, {
      icon: { msvg: iconShare }
    })
  ]
};

const verticalButtonActions = {
  layout: "vertical",
  content: [
    m(iconButton, {
      icon: { msvg: iconHeart }
    }),
    m(iconButton, {
      icon: { msvg: iconBookmark }
    }),
    m(iconButton, {
      icon: { msvg: iconShare }
    })
  ]
};

const titleImage = (type, title) => [
  {
    primary: {
      title: title,
      subtitle: "Subtitle",
      media: {
        ratio: "square",
        type,
        content: m("img", {
          src: landscapeImage
        })
      }
    }
  },
  {
    actions: {
      content: twoButtonRow
    }
  }];

const titleImageExtraLarge = ratio => [
  {
    primary: {
      content: [
        {
          media: {
            ratio: ratio,
            type: "large",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        m(".flex"),
        {
          actions: verticalButtonActions
        }
      ]
    }
  }
];

const tabsContent = {
  view: () => 
    m(tabs, {
      buttons: [
        { label: "New" },
        { label: "My Favorites" },
        { label: "Saved" }
      ],
      autofit: true
    })
};

card.theme(".tests-card-colored-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text: "#fff",
  color_light_subtitle_text: "#fff"
});

export const tests = [
  {
    name: "Any content (list)",
    component: card,
    attrs: {
      content: m(list, {
        hoverable: true,
        tiles: [
          m(listTile, {
            title: listTitle,
            subtitle: listSubtitle
          }),
          m(listTile, {
            title: listTitle,
            subtitle: listSubtitle
          }),
          m(listTile, {
            title: listTitle,
            subtitle: listSubtitle
          })
        ]
      })
    }
  },
  {
    name: "Any content (tabs)",
    component: {
      view: () =>
        m(card, {
          content: m(tabsContent)
        })
    }  
  },
  {
    name: "Text only",
    component: card,
    attrs: {
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }]
    }
  },
  {
    name: "Themed (color)",
    component: card,
    attrs: {
      class: "tests-card-colored-card",
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Subtitle"
        }
      }]
    }
  },
  {
    name: "Header with icon",
    component: card,
    attrs: {
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        },
        {
          media: {
            content: m("img", {
              src: greyImage
            })
          }
        }
      ]
    }
  },
  {
    name: "Primary text with supporting text",
    component: card,
    attrs: {
      content: [
        {
          media: {
            content: m("img", {
              src: greyImage
            })
          }
        },
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle " + shortIpsum
          }
        }
      ]
    }
  },
  {
    name: "Primary text with action row and text",
    component: card,
    attrs: {
      content: [
        {
          media: {
            content: m("img", {
              src: greyImage
            })
          }
        },
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle"
          }
        },
        {
          actions: {
            content: twoButtonAndLessRow
          }
        },
        {
          text: { content: ipsum }
        }
      ]
    }
  },
  {
    name: "Bottom action row, bordered",
    component: card,
    attrs: {
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        },
        {
          media: {
            content: m("img", {
              src: greyImage
            })
          }
        },
        {
          text: { content: ipsum }
        },
        {
          actions: {
            bordered: true,
            content: twoButtonAndLessRow
          }
        }
      ]
    }
  },
  {
    name: "Bottom action row, vertical",
    component: card,
    attrs: {
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        },
        {
          media: {
            content: m("img", {
              src: greyImage
            })
          }
        },
        {
          text: { content: ipsum }
        },
        {
          actions: {
            layout: "vertical",
            bordered: true,
            tight: true,
            content: m(list, { borders: true }, [
              m(listTile, { hoverable: true }, "Action 1"),
              m(listTile, { hoverable: true }, "Action 2"),
              m(listTile, { hoverable: true }, "Action 3"),
            ])
          }
        }
      ]
    }
  },

  // 16:9 square

  {
    name: "16:9 media with square image, anchor origin: default",
    component: card,
    attrs: {
      content: [
        {
          media: {
            content: m("img", {
              src: squareImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with square image, anchor origin: start",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "start",
            content: m("img", {
              src: squareImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with square image, anchor origin: end",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "end",
            content: m("img", {
              src: squareImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },

  // 16:9 landscape

  {
    name: "16:9 media with landscape image, anchor origin: default",
    component: card,
    attrs: {
      content: [
        {
          media: {
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with landscape image, anchor origin: start",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "start",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with landscape image, anchor origin: end",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "end",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },

  // 16:9 portrait

  {
    name: "16:9 media with portrait image, anchor origin: default",
    component: card,
    attrs: {
      content: [
        {
          media: {
            content: m("img", {
              src: portraitImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with portrait image, anchor origin: start",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "start",
            content: m("img", {
              src: portraitImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with portrait image, anchor origin: end",
    component: card,
    attrs: {
      content: [
        {
          media: {
            origin: "end",
            content: m("img", {
              src: portraitImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },

  // 1:1 portrait

  {
    name: "1:1 media with square image, anchor origin: default",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with square image, anchor origin: start",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            origin: "start",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },
  {
    name: "16:9 media with square image, anchor origin: end",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            origin: "end",
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          actions: { content: iconButtonRow }
        }
      ]
    }
  },

  // Overlay

  {
    name: "Overlay with sheet (default dark tone)",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            content: m("img", {
              src: landscapeImage
            }),
            overlay: {
              sheet: true,
              content: [
                {
                  primary: {
                    title: "Primary title",
                    subtitle: "Subtitle"
                  }
                },
                {
                  actions: {
                    content: twoButtonRow
                  }
                }
              ]
            }
          }
        }
      ]
    }
  },

  {
    name: "Overlay with sheet (light tone)",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            content: m("img", {
              src: landscapeImage
            }),
            overlay: {
              tone: "light",
              sheet: true,
              content: [
                {
                  primary: {
                    title: "Primary title",
                    subtitle: "Subtitle"
                  }
                },
                {
                  actions: {
                    content: twoButtonRow
                  }
                }
              ]
            }
          }
        }
      ]
    }
  },

  {
    name: "Overlay without sheet",
    component: card,
    attrs: {
      content: [
        {
          media: {
            ratio: "square",
            content: m("img", {
              src: landscapeImage
            }),
            overlay: {
              class: "pe-dark-tone",
              content: [
                {
                  primary: { title: "Title" }
                }
              ]
            }
          }
        },
        {
          actions: justifiedButtonActions
        }
      ]
    }
  },

  // Title image

  {
    name: "Title image, small",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("small", "Title image small")
    }
  },
  {
    name: "Title image, regular",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("regular", "Title image regular")
    }
  },
  {
    name: "Title image, medium",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: titleImage("medium", "Title image medium")
    }
  },
  {
    name: "Title image, type large, square",
    component: card,
    attrs: {
      style: { maxWidth: "360px" },
      content: titleImageExtraLarge("square")
    }
  },
  {
    name: "Title image, type large, landscape",
    component: card,
    attrs: {
      style: { maxWidth: "360px" },
      content: titleImageExtraLarge("landscape")
    }
  },

  {
    name: "Card URL",
    component: card,
    attrs: {
      url: {
        href: "http://en.wikipedia.org/wiki/Road_to_Nowhere"
      },
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              class: "pe-icon--avatar",
              src: avatarImageUrl("1.png")
            },
            url: {
              href: "http://www.imdb.com/name/nm0260632/"
            }
          }
        },
        {
          media: {
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle"
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Action 1",
                events: { onclick: e => e.preventDefault() } // prevent URL 
              }),
              m(button, {
                label: "Action 2",
                events: { onclick: e => e.preventDefault() } // prevent URL 
              })
            ]
          }
        }
      ]
    }
  },

  {
    name: "Card events",
    component: card,
    attrs: {
      events: {
        onmouseover: function() {
          this.classList.add("on");
        },
        onmouseout: function() {
          this.classList.remove("on");
        },
        onclick: function() {
          window.alert("Card clicked");
        }
      },
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        },
        {
          media: {
            content: m("img", {
              src: landscapeImage
            })
          }
        },
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle"
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Action 1",
                events: {
                  onclick: e => {
                    // prevent card event
                    e.stopPropagation();
                    window.alert("Action 1 clicked");
                  }
                }
              }),
              m(button, {
                label: "Action 2",
                events: {
                  onclick: e => {
                    // prevent card event
                    e.stopPropagation();
                    window.alert("Action 2 clicked");
                  }
                }
              })
            ]
          }
        }
      ]
    }
  },

  {
    name: "Custom card white",
    component: card,
    attrs: {
      style: { maxWidth: "360px" },
      content: [
        {
          primary: {
            content: [
              {
                title: m(".pe-card__title", [
                  m(".pe-card__subtitle", "Travel"),
                  m("span", "Road Trip")
                ])
              },
              {
                media: {
                  ratio: "square",
                  type: "small",
                  content: m("img", {
                    src: landscapeImage
                  })
                }
              }
            ]
          }
        },
        {
          text: { content: "A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile." }
        },
        {
          actions: { content: twoButtonRow }
        }
      ]
    }
  },

  {
    name: "Custom card sand",
    component: card,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#B89E58" },
      class: "pe-dark-tone",
      content: [
        {
          primary: {
            title: "Get Ready",
            subtitle: "2 Unlimited",
            media: {
              ratio: "square",
              type: "medium",
              content: m("img", {
                src: "https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757"
              })
            }
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Listen now"
              })
            ]
          }
        }
      ]
    }
  },

  {
    name: "Custom card blue",
    component: card,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#227586" },
      class: "pe-dark-tone",
      content: [
        {
          primary: {
            title: "Supermodel",
            subtitle: "Foster the People",
            media: {
              ratio: "square",
              type: "medium",
              content: m("img", {
                src: "http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg"
              })
            }
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Listen now"
              })
            ]
          }
        }
      ]
    }
  },

  {
    name: "Custom card purple",
    component: card,
    attrs: {
      style: { maxWidth: "360px", backgroundColor: "#871E6A" },
      class: "pe-dark-tone",
      content: [
        {
          primary: {
            title: "Bucket List"
          }
        },
        {
          text: {
            content: m.trust("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")
          }
        },
        {
          actions: {
            content:
              m(button, {
                label: "Edit"
              })
          }
        }
      ]
    }
  },

  // Depth

  {
    name: "Depth normal, tight text",
    component: card,
    attrs: {
      style: { maxWidth: "170px" },
      content: [{
        text: {
          tight: true,
          content: "Normal"
        }
      }]
    }
  },
  {
    name: "Depth 0, tight text",
    component: card,
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
  },
  {
    name: "Depth 2, tight text",
    component: card,
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
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        media: {
          content: m("img", {
            src: holidayImage
          })
        }
      }]
    }
  },
  {
    name: "Separate elements - text",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        text: {
          content: m.trust("<strong>Normal - (visual) 24px bottom padding</strong> " + ipsum)
        }
      }]
    }
  },
  {
    name: "Separate elements - tight text",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        text: {
          tight: true,
          content: m.trust("<strong>Tight - (visual) 16px bottom padding</strong> " + ipsum)
        }
      }]
    }
  },
  {
    name: "Separate elements - header with avatar",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        header: {
          title: titleLineText,
          subtitle: infoLineText,
          icon: {
            type: "large",
            avatar: true,
            src: avatarImageUrl("1.png")
          }
        }
      }]
    }
  },
  {
    name: "Separate elements - normal primary title",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        primary: {
          title: "Primary title",
          subtitle: "Normal - (visual) 24px bottom padding"
        }
      }]
    }
  },
  {
    name: "Separate elements - tight primary title",
    component: card,
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
  },
  {
    name: "Separate elements - actions",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        actions: {
          content: twoButtonRow
        }
      }]
    }
  },
  {
    name: "Separate elements - vertical actions",
    component: card,
    attrs: {
      style: { maxWidth: "400px" },
      content: [{
        actions: {
          layout: "vertical",
          tight: true,
          content: m(list, { borders: true }, [
            m(listTile, { hoverable: true }, "Action 1"),
            m(listTile, { hoverable: true }, "Action 2"),
            m(listTile, { hoverable: true }, "Action 3"),
          ])
        }
      }]
    }
  },
  {
    name: "Separate elements - icon button actions",
    component: card,
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
    component: card,
    class: "pe-dark-tone",
    attrs: {
      content: [
        {
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        }, {
          media: {
            content: m("img", {
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
        }
      ]
    }
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => m("div", {
        style: {
          background: "#fff"
        },
        class: "pe-light-tone"
      }, m(card, {
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                type: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          }, {
            media: {
              content: m("img", {
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
          }
        ]
      }))
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => m("div", {
        style: {
          background: "#fff"
        },
      }, m(card, {
        tone: "light",
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                type: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          }, {
            media: {
              content: m("img", {
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
          }
        ]
      }))
    }
  }

];
