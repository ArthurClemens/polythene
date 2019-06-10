[Back to Polythene Card main page](../card.md)

# Card component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Images](#images)
    - [Cropping / origin](#cropping--origin)
    - [Overlay](#overlay)
    - [Title image](#title-image)
  - [Embedded videos](#embedded-videos)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Card options](../card.md)



<a id="usage"></a>
## Usage


<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApABhfSjDBSABCRnY7D4OoAknL9Ya+FIhVIFFJwZsANwFZXlNWaqCjdUAZW91tt9pRQR93udVAKHq9vuYNFGo296VIAAoVMxAgxRgsIFqVDrgAUpFJeJMoAB9MTWDilug0cSlhwrCTWWBGMZIKQqADEuoAHABOACiAFYe7mC0X4DAyxWq+w7KRSwJQux24W1138Jux1RC8Wp+XCJX2KWwI45+wF0uV+uQFBrA2kwAmIdDjDP1-vjDMADsAEoVAUQq-mGLp8CqhBygAMmQYDegAagA4gGRTktYUgAO7UoYqSPgALIkWSHhwOH4SAUjkoQJDobqMChKkaBSAxeFSHhlzqDQhhSDSKgALK8o+Ug9nACwAGxSGJvLMLhvJSJJ0mQfxsloMwPYAMxwLhzBDn2UiaSOCk9rJuEAF4qNo+LXKhuRhq6VJygAEjsBjwUhdooWhmGjNhKisWRhFHiRiQUVRNF0SoDFMZpaCRcw0WJIINAOKQuqNs2MCttxIADOhjG5XhsUxXFeLCOxnFEAgqSdtF1VoIk5VwAA8uxEB2H4qS8okQywBIJAAOpYaw9HMI+nXsN1JCQeIJCnDA4i0ulYyJJlPGyZJfbrbhb6SapuF9t+kFKVpQ5oJtj7KWgqmPt+6pSEOUloLym28ndqkiWg36ycw619qpfYYPxw3fq9n3fb9GA9lJe0iY+N1retYN3dJr24bpUnPap35vl9UMCd+kM-X9j7Y9+0M3X2w24RdhPE9Dh19mgPabapKloEOIkSXDfabXdDOvTDsnM2g9NMyzbMSZp34jqdNMCbyIn49L60k-zvLkyOO1Y0rtOPpz3No8jLG6+DkPKzdOvY1z-1E1dwO8hD2nfk9L1vR9vLM7huGM2+52Xftq0W6d227R9ABaHYgOZBJWTZYHlBBfA0TAEg1lAEguchYCoRhA2BX5JBEewufkZR1G0fReVRYVtVkQlSUkClEBNi2YypNluVVyxldsRxrBSPVlWs+9DN1cQjXNa17WjeN-VeYN4XDVPScTVNM1zSozejEtqQrXLAea32Paswd8vfYrB+szdd39kOZ+H0Ot2xbyJ0YMz-aUyjPNP5tmnrXfB0-xtb22MewHV5EbXkeNf6gIhqfIBUDZIwMAQAu+sNEGW1flzE6CDmBf1vqzWSJ9AFE1-vgsOZkLKZ2sNZUClg45ym9KwfQJB05uUodnWeRd-LER8qRYuIUy7hQrgVTuBV4q0Drg3JuC1MptwiiI6K8jq74lKr3fuXYapFT7qPJqKwJ4qA6mRLqS8Z7eRAMpEahixpL0mgMVeVB5oZS3rxFiylYFP2AbyUBzNYHePPn7N2e9IF+JuoQy2iDD4fV8ZbAJv8ZLEMAXbDxl8Fb-URgfGSaCnoYJ7DJGJCTsmeIFnvCBHiDpnWKa49JUgyERwodHYkVBbKlFPHQAMKhIJTh+FSTQRhWmjEnFACodgpDinYDqZUJBVieBMCMsk6hCBgAguINCJAxBjIqCQUYXEYBSHzkYMAdAYBbIEHQXwgzxAtTJKMVs5QDRSDgIlTpuzyj9JLCQKQNZrC0BGWIAAjkYGgzApAAFVyiCEIK02MHzxAQvIuC+gOp-kLKkFQGAXUjBbLCCQUwdgOLcikEYBA9BeD3MeSUMAKKFmEAJeUCYhAkXqF2aEXZNAJx0EOf0iclgSD-I4kCgAIkYZFNADTvMIFAEw7zXlTipDuOQ6g5DzFGNi4Z4hyLwCMGUDi7zySrOGTBd5LUEC9O2W83ZRg+5GFsBxFFhKHn2n0IQDiJggUDlCBAEgZQSAzMWfwKQMAIDZkmXylQMdaEjPJBxfQJo6DWGBVAOAbTVCGnUHUT4jQzA-BaDYf4jhnBAhBD0B0qIQjhFOVEPQkbhhQAWJJdQVBrChpoSqB5YxIA0HUCQGNcaE1JpqGmhoJhM2-Bze0fNXRQTwk2KWiIFbJKnHUI2kAYaVQABV0IwGBVQMQdA7CbO7fGxNdpXgpvePUL4w7s1tABOO4E3RkQbBLWEWdZBtCPgWK2Hde7RhnEXU28MjTY5SAAILqEZXaJMv5bS5A7DuKQpIKT3DXPB5kRYHnuAAHLinmjlVFAg8jjmQ8IVlsh5DVFPQOi9zRLCjpvZ0YtQQFjKsOd4ZYqxtCdm0NmT0iRq3WE8KkesraJB5G9NkH5YAYDtgAApBgGH3GVAAlHYqwpALA1FqLiPwYBXBoEhtcVxmT6cLAhykZg71YYYDhgjcGiOofM5h7DKhzykDyDRS0kKuRWlgOhHUDgpzKqgIZxDhGDP2fQ2ASzJBUi8FOVMfgNnkNEcjFygQ-AFDABQKFpLqpss5ZkDsQL7Z8y2fy8hlzJB2wqFXfOEg24ys5dPA4CrVWQDekcFkWM9WGvIfjlQYreWeuLOMpV8ODy7x1bZINhrNAq36HbGNIwJAMDTbK5UCA7ZZtRqgAehNq2ktCn24WQ7pWcsin2yVnrhYMxOoG6dhrco0vXmEBCtC62MuttGO2ztu24A2nMkd60+3zv3eQ5dq7V5iupYVO2ZpJqTs9ZBz18HPXdjci0Ll0H+X-OemxQtiVy3Ae7j4E99sWWsdleEBaI0O4eptRUGjvgBjSUOFWakYDXmdzM-Mitin+WqcGhp1IOnqRGdUAsSztnKgOdzitBLnnROwsUmFyQen4BmrYsSA5yLTmCCkFCIkBXfOcvCDNAnQXfBFfIZFwzznqlEhW7XH1jLKOruNcICN1rN3endbd411CUPHsw7snwaC7h04I798hoUkeo8A+N2ubAgPY-5ZT8h7A-3jMGaZCF0rwWWShdM2hizuufOJaS0X7XUXUgVbyHLJAOkbusswpxT732xWfOWyMxprAZVTkPOIdsghRj56zyZ8LJerMqFi74AYCW8TTeECloP6XMvTaUOwV3ZWm93aj-32w-Xw7D991dlfz3XvPAgB9w47ffuZ+T8D3nyPAdi4x1vh7JPg-k6j+P5XNv1crCa5kRV664xBhCG65BP4-6m7mgW606q6i6c7M7O7ABqiUKB6f78Cw4OROTsAR7WiZ5QFR4wHm6WjwFq5i4S4oFoEB6qjQ5YEh5UCJzJz6BpyIT+gx5SBG4-7wZm5MFwEq4UF26JDUEVC0Fqhn7YF8AMJML4GcHx5R5J4J5p4HbTYZ5cFj7wY54F557aFZ6V4RbV7rwwDoTl52bK4gFT4gC154irpZAZhFhaij55YGGT7RbT4wBxZz4MgL5Y5L45h86WHuHWH2GbJZg5ggD7Zn4Zbf75Yb4b7v5lYKoQr6B+C74-4tbhwISeBSDKaxh+An5u5NaZE+QgrboQrfqFFXY76Y48GFhQB4pSbhxgC8pyBVFFEe6jYqDe50DtGn6YHn6xqX4ZbrqbrlG7oCCjB34aGO4qFlZzEHZEENaJH5av7pFR6SFSCxE8EC5kGS4pDtILJpYoomFa6GG66dpMasELA06TYzEJ7p6K4LHR7r7sAZ7TYKEV56GF7fF54T6OZWFl6+Em7-E65WE2G5DAZUB+D0HsDOH3auEAnBEz7xY+GaEmaRhREDExGvEJGK6dZFa1EZG1atY1YXiTZLFFFngknhztYOAEl9FlZ9brE-7DZdEgDjb8aMkzZzZQD45LaUl+7raba8m-azFPHJ6Ck5YrE5YjBpFElR5DAZCjYylxHsANiNxpQZStadjZCTazFSkf7ygMFw69EPFA7KGvHvFY6fFEa-F2lGaF6glGG3gmH2hbDjCpw3FTBmFK5mbnHgm1Zub0hGieay5yomF+YBbYqbJSBJienSC3G-jwkgkWEBnImeGz4Ki+nJaabRFr586qmFgEl44KkQ40nVZBlTbmnFEVltYdaFbcm9ZygskdGe5jb6BcnVk8FbbVr8mE7mmFjCkRrbZinmnPFrgTlI7LGA41FFlribEvZDHvbABt7Zg-axqHr36Wl87TllbzmQ50GbGmkWmI6GmFjzlrFlk9Y46BabL9nnlJabHbF+67FC4PKs4HEgAy74rc6QGO5vlWgflS7fmc4sQQGPmpn+luGpBgEG5kTcHQF8HU6W6DlO5ygu6O7IZsle6bKEA+7dl1FDniGwlSFUBh6wTsETnzHUVJa2lXZKFu5TlqHbkm72nZ6OlwbwkFB5GrD8oNQ8TMByBjDYophcWgaMqIX9IQC9IKg2CeADjUbsC6h+AmijApiun0gqD-hUDAQygz7EDYpMANifkygciTLhnkCSiqyqRICPjCiihZTihMDMBIj6UDEuWXHcZbLg41ihALCeSGDtiqSHzqChBhgnZmWrIWXo5MC2WChCi4AcniASBWWUBOUMBMBsbsDMDKq6qTDqAWA5XSh4AmCICShvB1CtjqBNiuWeHaDZXaC9KjANUqY5V5WrIwCFVyUlXWF+CdpMCEgOViiZWSjZVMaeG5UkD5VdVFU4gyhlVMCVW6DVW1WxatW7ATV0BNV0AtXjX9J0BTUzXdX8DzV4DpADWShDWJVChAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Card } from "polythene-react"
~~~

The card can contain various elements. The `content` parameter accepts any String, hyperscript or component:

~~~jsx
import { Card, List } from "polythene-react"

<Card content={<List ... />} />
~~~

To generated Material Design elements, pass an array of element options, where each item is an object with on of the keys:

* primary
* text
* media
* header
* actions
* any (for any other content)

Element `primary` contains the sub-options `title` and `subtitle`:

~~~jsx
<Card
  content={[
    {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }
  ]}
/>
~~~

Content parts are processed in the order as they are written. Of course this makes it possible to wildly deviate from the design specs.

To show in order:

1. header with portrait image
2. media item
3. title and subtitle
4. action row
5. text

these are passed in this order to `content`:

~~~jsx
import { Card, Button } from "polythene-react"

<Card
  content={[
    {
      header: {
        title: "Name",
        subtitle: "date",
        icon: {
          size: "large",
          avatar: true,
          src: "img/avatar.png"
        }
      }
    },
    {
      media: {
        content: <img src="img/large.jpg" />
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
        content: <div>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </div>
      }
    },
    {
      text: {
        content: "More text"
      }
    }
  ]}
/>
~~~

For further control over the `primary` content, you can pass an array to `primary.content`:

~~~jsx
import { Card, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use className="flex"

<Card
  content={[
    {
      primary: {
        content: [
          {
            media: {
              ratio: ratio,
              size: "large",
              content: <img src="img/large.jpg" />
            }
          },
          <div className="flex" />
          {
            actions: {
              layout: "vertical",
              content: <div>
                <IconButton icon={{ svg: { content: iconHeart } }} />
                <IconButton icon={{ svg: { content: iconBookmark } }} />
                <IconButton icon={{ svg: { content: iconShare } }} />
              </div>
            }
          }
        ]
      }
    }
  ]}
/>
~~~

<a id="images"></a>
### Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used too, as well as "title images" (an image placed next to the title). Images can additionally have with overlay text. Both `ratio` ("square" or "landscape") and `size` ("small", "medium", "large", "extra-large") can be set.



<a id="cropping--origin"></a>
#### Cropping / origin

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is "center", optional values are "start" and "end". The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:


~~~jsx
<Card
  content={[
    {
      media: {
        origin: "start",
        content: <img src="img/large.jpg" />
      }
    }
  ]}
/>
~~~


<a id="overlay"></a>
#### Overlay

Images with an overlay (text, actions) can be created with `media.overlay`:

~~~jsx
<Card
  content={[
    {
      media: {
        ratio: "square",
        content: <img src="img/large.jpg" />,
        overlay: {
          sheet: true,
          className: "pe-dark-tone",
          content: [
            {
              primary: {
                title: "Primary title",
                subtitle: "Subtitle"
              }
            },
            {
              actions: {
                content: <div>
                  <Button label="Action 1" />
                  <Button label="Action 2" />
                </div>
              }
            }
          ]
        }
      }
    }
  ]}
/>
~~~

An additional HTML element to control the image is "card__media__dimmer". First enable the dimmer: 

~~~javascript
{
  media: {
    showDimmer: true,
    ...
  }
},
~~~

To create a fuzzy dark border all around use an inset box shadow

~~~css
.pe-card__media__dimmer {
  box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
}
.pe-card__overlay__content {
  /* something else */
}
~~~


<a id="title-image"></a>
#### Title image

To create a square image at the right side of the title, use `primary.media`:


~~~jsx
<Card
  content={[
    {
      primary: {
        title: title,
        subtitle: "Subtitle",
        media: {
          ratio: "square",
          size,
          content: <img src="img/large.jpg" />
        }
      }
    }
  ]}
/>
~~~

<a id="embedded-videos"></a>
### Embedded videos

To show an embedded video, pass an `iframe` element:

~~~javascript
content: [{
  media: {
    content: (
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Fe7lxMJTgZ4"
        frameborder="0"
      />
    )
  }
}]
~~~

<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Card appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { CardCSS } from "polythene-css"

CardCSS.addStyle(".themed-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text:      "#fff",
  color_light_subtitle_text:   "#fff"
});

<Card className="themed-card" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Card CSS classes](../../../packages/polythene-css-classes/card.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/card"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Card
  style={{
    maxWidth: "360px",
    backgroundColor: "#B89E58"
  }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Card content is reversed when the Card is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


