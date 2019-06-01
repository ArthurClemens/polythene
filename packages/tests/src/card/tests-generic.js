import { CardCSS } from "polythene-css";

const iconLessSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"/></svg>";
const iconHeartSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z \"/></svg>";
const iconBookmarkSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#050708\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z \"/></svg>";
const iconShareSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 20.9994,10.9981L 13.9994,3.99807L 13.9994,7.99807C 6.9994,8.99807 3.9994,13.9981 2.9994,18.9981C 5.4994,15.4981 8.9994,13.8981 13.9994,13.8981L 13.9994,17.9981L 20.9994,10.9981 Z \"/></svg>";


export default ({ Card, List, ListTile, Button, IconButton, Tabs, h, a }) => {

  const IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
  const iconLess = h.trust(iconLessSVG);
  const iconHeart = h.trust(iconHeartSVG);
  const iconBookmark = h.trust(iconBookmarkSVG);
  const iconShare = h.trust(iconShareSVG);
  // const greyImage = IMG_URL + "grey.jpg";
  const squareImage = IMG_URL + "circle.png";
  const landscapeImage = IMG_URL + "1.jpg";
  const portraitImage = IMG_URL + "2.jpg";
  const holidayImage = IMG_URL + "3.jpg";

  const listTitle = "Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
  const listSubtitle = "Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const titleLineText = "Title";
  const infoLineText = "Subhead";
  const ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
  const shortIpsum = "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

  const avatarImageUrl = fileName => `http://arthurclemens.github.io/assets/polythene/examples/avatar-${fileName}`;

  const twoButtonRow = [
    h(Button, { label: "Action 1", key: "one" }),
    h(Button, { label: "Action 2", key: "two" })
  ];

  const twoButtonAndLessRow = [
    h(Button, {
      label: "Action 1",
      key: "one"
    }),
    h(Button, {
      label: "Action 2",
      key: "two"
    }),
    h(".flex", { key: "space" }),
    h(IconButton, {
      key: "three",
      icon: {
        size: "medium",
        svg: { content: iconLess }
      }
    })
  ];

  const iconButtonRow = [
    h(".flex", { key: "space" }),
    h(IconButton, {
      icon: { svg: { content: iconHeart } },
      key: "heart"
    }),
    h(IconButton, {
      icon: { svg: { content: iconBookmark } },
      key: "bookmark"
    }),
    h(IconButton, {
      icon: { svg: { content: iconShare } },
      key: "share"
    })
  ];

  const justifiedButtonActions = {
    layout: "justified",
    tight: true,
    content: [
      h(IconButton, {
        icon: { svg: { content: iconHeart } },
        key: "heart"
      }),
      h(IconButton, {
        icon: { svg: { content: iconBookmark } },
        key: "bookmark"
      }),
      h(IconButton, {
        icon: { svg: { content: iconShare } },
        key: "share"
      })
    ]
  };

  const verticalButtonActions = {
    layout: "vertical",
    content: [
      h(IconButton, {
        icon: { svg: { content: iconHeart } },
        key: "heart"
      }),
      h(IconButton, {
        icon: { svg: { content: iconBookmark } },
        key: "bookmark"
      }),
      h(IconButton, {
        icon: { svg: { content: iconShare } },
        key: "share"
      })
    ]
  };

  const titleImage = (size, title) => [
    {
      primary: {
        key: "title",
        title: title,
        subtitle: "Subtitle",
        media: {
          ratio: "square",
          size,
          content: h("img", {
            src: landscapeImage
          })
        }
      }
    },
    {
      actions: {
        content: twoButtonRow,
        key: "actions"
      }
    }];

  const titleImageExtraLarge = ratio => [
    {
      primary: {
        content: [
          {
            media: {
              ratio: ratio,
              size: "large",
              content: h("img", {
                key: "image",
                src: landscapeImage
              })
            }
          },
          h(".flex", { key: "space" }),
          { actions: verticalButtonActions }
        ]
      }
    }
  ];

  const tabsContent = {
    view: () => 
      h(Tabs, {
        tabs: [
          { label: "New" },
          { label: "Favorites" },
          { label: "Saved" }
        ],
        autofit: true
      })
  };

  CardCSS.addStyle(".tests-card-colored-card", {
    color_light_main_background: "#0097a7",
    color_light_title_text: "#fff",
    color_light_subtitle_text: "#fff"
  });

  return [
    {
      name: "Any content (list)",
      component: {
        view: () => 
          // Use child node
          h(Card, null, h(List, {
            hoverable: true,
            tiles: [
              h(ListTile, {
                title: listTitle,
                subtitle: listSubtitle,
                key: "one" // for React
              }),
              h(ListTile, {
                title: listTitle,
                subtitle: listSubtitle,
                key: "two" // for React
              }),
              h(ListTile, {
                title: listTitle,
                subtitle: listSubtitle,
                key: "three" // for React
              })
            ]
          }))
      }
    },
    {
      name: "Any content (tabs)",
      component: {
        view: () =>
          // Testing child node
          h(Card, null, h(tabsContent))
      }  
    },
    // {
    //   name: "Primary with title and subtitle, before and after",
    //   component: Card,
    //   attrs: {
    //     content: [{
    //       primary: {
    //         title: "Primary title",
    //         subtitle: "Subtitle"
    //       }
    //     }],
    //     before: h("div", "Before"),
    //     after: h("div", "After"),
    //   }
    // },
    {
      name: "Primary with title and subtitle",
      component: Card,
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
      component: Card,
      attrs: {
        className: "tests-card-colored-card",
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
      component: Card,
      attrs: {
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          },
          {
            media: {
              content: h("img", {
                src: holidayImage
              })
            }
          }
        ]
      }
    },
    {
      name: "Primary text with supporting text",
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("img", {
                src: holidayImage
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("img", {
                src: holidayImage
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
            actions: { content: twoButtonAndLessRow }
          },
          {
            text: { content: ipsum }
          }
        ]
      }
    },
    {
      name: "Bottom action row, border",
      component: Card,
      attrs: {
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          },
          {
            media: {
              content: h("img", {
                src: holidayImage
              })
            }
          },
          {
            text: { content: ipsum }
          },
          {
            actions: {
              border: true,
              content: twoButtonAndLessRow
            }
          }
        ]
      }
    },
    {
      name: "Bottom action row, vertical",
      component: Card,
      attrs: {
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          },
          {
            media: {
              content: h("img", {
                src: holidayImage
              })
            }
          },
          {
            text: { content: ipsum }
          },
          {
            actions: {
              layout: "vertical",
              border: true,
              tight: true,
              content: h(List, { border: true }, [
                // keys for React
                h(ListTile, { hoverable: true, key: "one" }, "Action 1"),
                h(ListTile, { hoverable: true, key: "two" }, "Action 2"),
                h(ListTile, { hoverable: true, key: "three" }, "Action 3"),
              ])
            }
          }
        ]
      }
    },

    // 16:9 square

    {
      name: "16:9 media with square image, anchor origin: default",
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "end",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "end",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "end",
              content: h("img", {
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              ratio: "square",
              content: h("img", {
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
      name: "1:1 media with landscape image, anchor origin: start",
      component: Card,
      attrs: {
        content: [
          {
            media: {
              ratio: "square",
              origin: "start",
              content: h("img", {
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
      name: "1:1 media with landscape image, anchor origin: end",
      component: Card,
      attrs: {
        content: [
          {
            media: {
              ratio: "square",
              origin: "end",
              content: h("img", {
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
      name: "Video media",
      component: Card,
      attrs: {
        content: [
          {
            media: {
              content: h("iframe", {
                id: "ytplayer",
                type: "text/html",
                width: "100%",
                height: "100%",
                src: "https://www.youtube.com/embed/Fe7lxMJTgZ4",
                [a.frameborder]: "0"
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
                src: portraitImage
              }),
              overlay: {
                sheet: true,
                content: [
                  {
                    primary: {
                      key: "title",
                      title: "Primary title",
                    }
                  },
                  {
                    actions: { content: twoButtonRow }
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
                src: portraitImage
              }),
              overlay: {
                tone: "light",
                sheet: true,
                content: [
                  {
                    primary: {
                      key: "title",
                      title: "Primary title",
                    }
                  },
                  {
                    actions: { content: twoButtonRow }
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
      component: Card,
      attrs: {
        content: [
          {
            media: {
              origin: "start",
              content: h("img", {
                src: portraitImage
              }),
              overlay: {
                className: "pe-dark-tone",
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
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: titleImage("small", "Title")
      }
    },
    {
      name: "Title image, regular",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: titleImage("regular", "Title")
      }
    },
    {
      name: "Title image, medium",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: titleImage("medium", "Title")
      }
    },
    {
      name: "Title image, size large, square",
      component: Card,
      attrs: {
        style: { maxWidth: "360px" },
        content: titleImageExtraLarge("square")
      }
    },
    {
      name: "Title image, size large, landscape",
      component: Card,
      attrs: {
        style: { maxWidth: "360px" },
        content: titleImageExtraLarge("landscape")
      }
    },

    {
      name: "Card URL",
      component: Card,
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
                size: "large",
                className: "pe-icon--avatar",
                src: avatarImageUrl("1.png")
              }
            }
          },
          {
            media: {
              content: h("img", {
                src: landscapeImage
              })
            }
          },
          {
            primary: {
              title: "Primary title",
              subtitle: "Subtitle"
            }
          }
        ]
      }
    },
    {
      name: "Card events",
      component: Card,
      attrs: {
        events: {
          [a.onmouseover]: function(e) {
            if (e.target.className === "pe-card__media__dimmer") {
              e.target.style.boxShadow = "inset 0px 0px 40px rgba(0, 0, 0, 0.6)";
            }
          },
          [a.onmouseout]: function(e) {
            if (e.target.className === "pe-card__media__dimmer") {
              e.target.style.boxShadow = "none";
            }
          },
          [a.onclick]: () => {
            console.log("Card clicked"); // eslint-disable-line no-console
          }
        },
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              },
              events: {
                [a.onclick]: () => {
                  console.log("Header clicked"); // eslint-disable-line no-console
                }
              }
            }
          },
          {
            media: {
              showDimmer: true,
              content: h("img", {
                src: landscapeImage
              }),
              events: {
                [a.onclick]: () => {
                  console.log("Media clicked"); // eslint-disable-line no-console
                }
              }
            }
          },
          {
            primary: {
              title: "Primary title",
              subtitle: "Subtitle",
              events: {
                [a.onclick]: () => {
                  console.log("Primary clicked"); // eslint-disable-line no-console
                }
              }
            }
          },
          {
            text: {
              content: ipsum,
              events: {
                [a.onclick]: () => {
                  console.log("Text clicked"); // eslint-disable-line no-console
                }
              }
            }
          },
          {
            actions: {
              content: [
                h(Button, {
                  key: "one",
                  label: "Action 1",
                  events: {
                    [a.onclick]: e => {
                      // prevent Card event
                      e.stopPropagation();
                      console.log("Action 1 clicked"); // eslint-disable-line no-console
                    }
                  }
                }),
                h(Button, {
                  key: "two",
                  label: "Action 2",
                  events: {
                    [a.onclick]: e => {
                      // prevent Card event
                      e.stopPropagation();
                      console.log("Action 2 clicked"); // eslint-disable-line no-console
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
      name: "Custom Card white",
      component: Card,
      attrs: {
        style: { maxWidth: "360px" },
        content: [
          {
            primary: {
              content: [
                {
                  title: h(".pe-card__title", { key: "title" },
                    [
                      h(".pe-card__subtitle", { key: "subtitle" }, "Travel"),
                      h("span", { key: "title-content" }, "Road Trip")
                    ]
                  )
                },
                {
                  media: {
                    ratio: "square",
                    size: "small",
                    content: h("img", {
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
      name: "Custom Card sand",
      component: Card,
      attrs: {
        style: { maxWidth: "360px", backgroundColor: "#B89E58" },
        className: "pe-dark-tone",
        content: [
          {
            primary: {
              title: "Get Ready",
              subtitle: "2 Unlimited",
              media: {
                ratio: "square",
                size: "small",
                content: h("img", {
                  src: "http://arthurclemens.github.io/assets/polythene/examples/2-unlimited.jpg"
                })
              }
            }
          },
          {
            actions: {
              content: [
                h(Button, {
                  key: "button",
                  label: "Listen now"
                })
              ]
            }
          }
        ]
      }
    },

    {
      name: "Custom Card blue",
      component: Card,
      attrs: {
        style: { maxWidth: "360px", backgroundColor: "#227586" },
        className: "pe-dark-tone",
        content: [
          {
            primary: {
              title: "Supermodel",
              subtitle: "Foster the People",
              media: {
                ratio: "square",
                size: "small",
                content: h("img", {
                  src: "http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg"
                })
              }
            }
          },
          {
            actions: {
              content: [
                h(Button, {
                  key: "button",
                  label: "Listen now"
                })
              ]
            }
          }
        ]
      }
    },

    {
      name: "Custom Card purple",
      component: Card,
      attrs: {
        style: { maxWidth: "360px", backgroundColor: "#871E6A" },
        className: "pe-dark-tone",
        content: [
          {
            primary: {
              title: "Bucket List"
            }
          },
          {
            text: {
              content: h.trust("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")
            }
          },
          {
            actions: {
              content:
                h(Button, {
                  key: "button",
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
      component: Card,
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
      name: "Shadow depth 0, tight text",
      component: Card,
      attrs: {
        style: { maxWidth: "170px" },
        content: [{
          text: {
            tight: true,
            content: "Flat"
          }
        }],
        shadowDepth: 0
      }
    },
    {
      name: "Shadow depth 2, tight text",
      component: Card,
      attrs: {
        style: { maxWidth: "170px" },
        content: [{
          text: {
            tight: true,
            content: "Raised"
          }
        }],
        shadowDepth: 2
      }
    },

    {
      name: "Header + any",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: [
          {
            header: {
              title: titleLineText,
              subtitle: infoLineText,
              icon: {
                size: "large",
                avatar: true,
                src: avatarImageUrl("1.png")
              }
            }
          },
          {
            any: {
              style: {
                background: "#eee"
              },
              content: h.trust(ipsum)
            }
          }
        ]
      }
    },

    // Separate elements

    {
      name: "Separate elements - media",
      component: Card,
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
    },
    {
      name: "Separate elements - text",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: [{
          text: {
            content: h.trust("<strong>Normal - (visual) 24px bottom padding</strong> " + ipsum)
          }
        }]
      }
    },
    {
      name: "Separate elements - tight text",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: [{
          text: {
            tight: true,
            content: h.trust("<strong>Tight - (visual) 16px bottom padding</strong> " + ipsum)
          }
        }]
      }
    },
    {
      name: "Separate elements - header with avatar",
      component: Card,
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
    },
    {
      name: "Separate elements - normal primary title",
      component: Card,
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
      component: Card,
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
      component: Card,
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
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: [{
          actions: {
            layout: "vertical",
            tight: true,
            content: h(List, { border: true }, [
              h(ListTile, { hoverable: true, key: "one" }, "Action 1"),
              h(ListTile, { hoverable: true, key: "two" }, "Action 2"),
              h(ListTile, { hoverable: true, key: "three" }, "Action 3"),
            ])
          }
        }]
      }
    },
    {
      name: "Separate elements - icon button actions",
      component: Card,
      attrs: {
        style: { maxWidth: "400px" },
        content: [{
          actions: {
            content: iconButtonRow
          }
        }]
      }
    },
    
    {
      section: "Dark tone",
    },
    {
      name: "Texts -- dark theme class",
      component: Card,
      className: "pe-dark-tone",
      attrs: {
        content: [
          {
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
              border: true,
              content: twoButtonAndLessRow
            }
          }
        ]
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => h("div", {
          style: {
            background: "#fff"
          },
          className: "pe-light-tone"
        }, h(Card, {
          content: [
            {
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
                border: true,
                content: twoButtonAndLessRow
              }
            }
          ]
        }))
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "pe-dark-tone",
      component: {
        view: () => h("div", {
          style: {
            background: "#fff"
          },
        }, h(Card, {
          tone: "light",
          content: [
            {
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
                border: true,
                content: twoButtonAndLessRow
              }
            }
          ]
        }))
      }
    },

    {
      section: "Right-to-left",
    },
    {
      name: "Bottom action row, border (RTL)",
      component: {
        view: () => 
          h(".pe-rtl", null,
            h(Card,
              {
                content: [
                  {
                    header: {
                      title: titleLineText,
                      subtitle: infoLineText,
                      icon: {
                        size: "large",
                        avatar: true,
                        src: avatarImageUrl("1.png")
                      }
                    }
                  },
                  {
                    media: {
                      content: h("img", {
                        src: holidayImage
                      })
                    }
                  },
                  {
                    text: { content: ipsum }
                  },
                  {
                    actions: {
                      border: true,
                      content: twoButtonAndLessRow
                    }
                  }
                ]
              }
            )
          )
      }
    },
  ];
};
