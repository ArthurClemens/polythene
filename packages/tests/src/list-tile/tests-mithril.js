import { Icon, ListTile } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const mithrilTests = ({ Icon, ListTile, h }) => {
  const trustedIconStars = h.trust(iconStars);

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: url",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        url: {
          href: "/",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "Option: disabled url",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        url: {
          href: "/",
          oncreate: h.route.link
        },
        disabled: true
      }
    },
    {
      name: "Option: secondary (url)",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        secondary: {
          icon: {
            svg: { content: trustedIconStars },
            size: "medium"
          },
          url: {
            href: "/",
            oncreate: h.route.link
          }
        }
      }
    },
    {
      name: "Option: highSubtitle and front",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        front: h(Icon, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          size: "large"
        }),
        secondary: {
          icon: {
            svg: { content: trustedIconStars }
          },
          url: {
            href: "/",
            oncreate: h.route.link
          }
        }
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Option: highSubtitle and front -- dark tone class",
      className: "pe-dark-tone",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        front: h(Icon, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          size: "large"
        }),
        secondary: {
          icon: {
            svg: { content: trustedIconStars }
          },
          url: {
            href: "/",
            oncreate: h.route.link
          }
        }
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ Icon, ListTile, h, a }))
  .concat(mithrilTests({ Icon, ListTile, h, a }));
