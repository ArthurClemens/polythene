import React from "react"; // eslint-disable-line no-unused-vars
import { keys, renderer, Icon, ListTile } from "polythene-react";
import genericTests from "./tests-generic";
import { withRouter } from "react-router-dom";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const iconStarsSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>;

const reactTests = ({ Icon, ListTile, renderer: h }) => {
  const trustedIconStars = h.trust(iconStars);

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: url",
      interactive: true,
      component: withRouter(({ history }) => 
        h(ListTile, {
          title: "Ancillary Justice",
          url: {
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          }
        })
      )
    },
    {
      name: "Option: url (disabled)",
      interactive: true,
      component: withRouter(({ history }) => 
        h(ListTile, {
          title: "Ancillary Justice",
          url: {
            href: "/shadow",
            onClick: e => (e.preventDefault(), history.push("/shadow"))
          },
          disabled: true
        })
      )
    },
    {
      name: "Option: secondary (url)",
      interactive: true,
      component: withRouter(({ history }) => 
        h(ListTile, {
          title: "Ancillary Justice",
          secondary: {
            icon: {
              svg: trustedIconStars,
              size: "medium"
            },
            url: {
              href: "/shadow",
              onClick: e => (e.preventDefault(), history.push("/shadow"))
            }
          }
        })
      )
    },
    {
      name: "Option: highSubtitle and front",
      component: withRouter(({ history }) => 
        h(ListTile, {
          title: "Ancillary Justice",
          highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
          front: h(Icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            size: "large"
          }),
          secondary: {
            icon: {
              svg: trustedIconStars
            },
            url: {
              href: "/shadow",
              onClick: e => (e.preventDefault(), history.push("/shadow"))
            }
          }
        })
      )
    },

    // Dark tone

    {
      name: "Option: highSubtitle and front -- dark tone class",
      className: "pe-dark-tone",
      component: withRouter(({ history }) => 
        h(ListTile, {
          title: "Ancillary Justice",
          highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
          front: h(Icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            size: "large"
          }),
          secondary: {
            icon: {
              svg: trustedIconStars
            },
            url: {
              href: "/shadow",
              onClick: e => (e.preventDefault(), history.push("/shadow"))
            }
          }
        })
      )
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: child (JSX)",
      component: () =>
        <ListTile
          title="Ancillary Justice"
          front={<Icon>{iconStarsSVG}</Icon>}
        />
    },
    {
      name: "Option: highSubtitle and front (JSX)",
      component: withRouter(({ history }) => 
        <ListTile
          title="Ancillary Justice"
          highSubtitle="The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
          front={<Icon
            src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
            avatar
            size="large"
          />}
          secondary={{
            icon: { svg: iconStarsSVG },
            url: {
              href: "/shadow",
              onClick: e => (e.preventDefault(), history.push("/shadow"))
            }
          }}
        />
      )
    },
  ];
    
};

export default []
  .concat(genericTests({ Icon, ListTile, renderer, keys }))
  .concat(reactTests({ Icon, ListTile, renderer, keys }));
