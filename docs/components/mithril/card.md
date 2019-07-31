[Back to Polythene Card main page](../card.md)

# Card component for Mithril

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

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUxoQAG5SQhjVKwGDsK7aCmU3IgPAeUgQdguSxMAAsSAAjMKBSAAL4Yaj0RhIFgXDkgXj8QTsJgq4ZSYBSADC+jGGCkACEjOx2HwjQBJFWm818KQSqQKKRQrYAbgKmoqOv1UDGuoAyoHHc7XeigkHA57Hn6A8HmDQxmNA+lSAAKFTMQIMMaLCAGlRG4AFKRSXhTKAAfTE1g4VboNHEVYcNAgEmssCM4yQUhUAGJjQAOACcAFEAKxDoul8vwGDV2v13nsUhVgShdi9ss7gf4fczqhlisLmuEOvsKtgRwrtcbre7kBQayt9MAJgnE4wH6-P4wzAAdgAShUAoJSAmMvT4LVCBVAAZMgwEDAA1ABxMMVGKSlrCkAB3WlDGUJQVDfAViMSLJzw4IiSLI4iQCkSlCBIXDjRgUIaJANApG40ipFI8jCWEdQaEMKQ6UEgBZYU3ykId9gANikJThWYAVhSkVT1LgmTNLQZghwAZjgAVmAnEcpFMqcdKHTSBQAL0E7QiRubD8hAGNvRpFUAAkSB+FD0JdTCwGwvCCNYTiBPomQSCo9goroxImJYtiOME7jeNMtAsuYHLBKkQQaAcUhFlbdtOxgbsJPowZcJ4hrSLy3L8pi0IuCQMARIgEhOPUOQPCgSkSEEokRLEogEE4-sctmtACsm-YYG6uw-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-p9tSChzD3nGmKerfk-Lq7ym7QWioPT9XG2qUOHhb55j7WHQbQ5Pr7HxW3ezfTOby0W2Tevdt-bsLjuVf8Re9b8C+PrfU+YDEMIampA7T8L5rqYTEiR89yN9MNoG5mgt1b63b2VRq8L-Dwgv3fPE4eeH0vlRsJU+zIG4Y6Z3sIXcIFfLteyz89Lzz-3G3sBu571d4fm3B-y775tzvhWPfDZj5Vpr63dx1ZYA16bIAYFIAssTu1+ExIs7Z-65lMO-lntYKGhc55xC9kEGMQbi2Y-jd8IMKbTWvtzYNPT0T3+tOicNw+JfAnN3HfEvdXS-WwD7MLW-GvcnPgCXKncTWnNTTPMsJnPVS9AsdnYdNDTPSfOHUfPHIXN3ZXPkLQP3dXP-OAynY3QvUTQA0vGPOPUIe-fvI7ZTHPKgH3S3cgrvMsd7MXVRBvKHZvd7PyAKNCfjAgiPWfXg9g20PPX3RXUvfg7UOvawIQpvdgFvW0GAJuFuNuCQmXVgjHGQrvOQ3Pe0bgpQwvFQnUQQplRvTFLQ97HRPRDvIw3gvAwvcfCg9gHw-A2XLHfw7nafDTUIqQIrKPefLrKrUrJTcrNfN-EAKDLIXMcsQsEAUwr3MbGACbF-JkN-eXD-f0AvHbMwMEMAAAOVlF8xzGRXzAyKjw23-zWyIOMNdFKBbmTx4PVzuxUFQk8CkAACV-Ixg-AYCrsbs+iQBZJ4MaNkMJi2DkUScejrcoBRIXAU83U5BFjJjy8-swsq86BdijsWiysVAkCmtrC4c0CYM4MEMhVaMUNsC0d2iQtwiBch9ZcmjNtriNsSDoJQC4czj6D1czcFCrCUCdxA894ws4IoUVs5UYjXc3ilsqV3BqiGBfMb1rN9AJBFgLdGsoSvC4dgjXspDucgivsSSyxwjIjStojcJYiycY9EijQVBmMqA-Bxc1QWCNtH9cjn9eTCidtijDRVjmiqCjdQTfi3cnt+sgSQdpiztVwgdM8pjzsDiVAHsHB5STiNtbCoSfstSQAAdvN9TQdd19BIdA09dUTUDTAkcrSoAOdcCvjWC5cQc-iPNRhujvTrs0wDj-TNtPEV5fN+xsgiTUTPTrczipdq92iKTscqSJ8PjaTSt6S59ytJNmAcSJhW4CTphmSNN4j6tNT18WsLQ2tQ9JMes+tT5kUpB0x8zpBCSQJMifiBS8jhT2Sij0x5sJSlspSAC2j1d5TtdgzPNNTTtyyUTC8NTVTfMdS9S5zrdDT7SfkK8wszS1SNzkdrSddbSfjGdHS-lnTXToz3SBdjyFdgDliaBFTYDVQjdqdLjSjrc0CD9MDb0XjOdoy0yMdvjRy4dRdVC4z7lHkkyQsbyNNJy-kndVdByrtNd+tkUbTocYLNsQSoTwTLD3zC8YSHcELNILSQjMLRTvcIT8LrdCLg9iLjpVzC8M8NzGDSBmCrjE8SBuiVBU8ep08sjo9s95C8KkK4d1zeDUD9jK9ljq9GKu97C6BHCRD4JEIO8oTu9iSAKjsySR9Aj-cdK+cAK6TTDx8JRIIqBFLsUyVmy20Hk1QbBPAxwTN2BjQ-ArQxhxMGQCjispBWN1AIICglQuRgUVdyB5Q3xIYkA0BJRpQ15ZQmBmBUQlR-8EqcTXMUVDtGxQg8lTFexDJEF1BQgYwccgr4UQrSCmBDIorJRcBTTxAJAwrKA4qGAmB7M9gAABQYTcJUEwRAeUTDbQbsdQDsRK3I7QNq4gdq-GMGRYUwZgBSca1LOAZgFYKgfEJUdIG9JgEkdUCUbACUIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Card } from "polythene-mithril"
```

The card can contain various elements. The `content` parameter accepts any String, hyperscript or component:

```javascript
import { Card, List } from "polythene-mithril"

m(Card, {
  content: m(List, {...})
})
```

To generated Material Design elements, pass an array of element options, where each item is an object with on of the keys:

* primary
* text
* media
* header
* actions
* any (for any other content)

Element `primary` contains the sub-options `title` and `subtitle`:

```javascript
m(Card, {
  content: [{
    primary: {
      title: "Primary title",
      subtitle: "Subtitle"
    }
  }]
})
```

Content parts are processed in the order as they are written. Of course this makes it possible to wildly deviate from the design specs.

To show in order:

1. header with portrait image
1. media item
1. title and subtitle
1. action row
1. text

these are passed in this order to `content`:

```javascript
import { Card, Button } from "polythene-mithril"

m(Card, {
  content: [
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
        content: m("img", {
          src: "img/large.jpg"
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
          m(Button, {
            label: "Action 1"
          }),
          m(Button, {
            label: "Action 2"
          })
        ]
      }
    },
    {
      text: {
        content: "More text"
      }
    }
  ]
})
```


For further control over the `primary` content, you can pass an array to `primary.content`.

```javascript
import { Card, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use m(".flex")

m(Card, {
  content: [{
    primary: {
      content: [
        {
          media: {
            ratio: ratio,
            size: "large",
            content: m("img", {  
              src: "img/large.jpg"
            })
          }
        },
        m(".flex"),
        {
          actions: {
            layout: "vertical",
            content: [
              m(IconButton, { icon: { svg: { content: m.trust(iconHeart) } } }),
              m(IconButton, { icon: { svg: { content: m.trust(iconBookmark) } } }),
              m(IconButton, { icon: { svg: { content: m.trust(iconShare) } } })
            ]
          }
        }
      ]
    }
  }]
})
```




<a id="images"></a>
### Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used too, as well as "title images" (an image placed next to the title). Images can additionally have with overlay text. Both `ratio` ("square" or "landscape") and `size` ("small", "medium", "large", "extra-large") can be set.



<a id="cropping--origin"></a>
#### Cropping / origin

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is "center", optional values are "start" and "end". The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:

```javascript
content: [{
  media: {
    origin: "start",
    content: m("img", {
      src: "img/large.png"
    })
  }
}]
```



<a id="overlay"></a>
#### Overlay

Images with an overlay (text, actions) can be created with `media.overlay`:

```javascript
content: [{
  media: {
    ratio: "square",
    content: m("img", {
      src: "img/large.jpg"
    }),
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
            content: [
              m(button, {
                label: "Action 1"
              }),
              m(button, {
                label: "Action 2"
              })
            ]
          }
        }
      ]
    }
  }
}]
```

An additional HTML element to control the image is "card__media__dimmer". First enable the dimmer: 

```javascript
{
  media: {
    showDimmer: true,
    ...
  }
},
```

To create a fuzzy dark border all around use an inset box shadow

```css
.pe-card__media__dimmer {
  box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
}
.pe-card__overlay__content {
  /* something else */
}
```



<a id="title-image"></a>
#### Title image

To create a square image at the right side of the title, use `primary.media`:

```javascript
content: [{
  primary: {
    title: title,
    subtitle: "Subtitle",
    media: {
      ratio: "square",
      size,
      content: m("img", {
        src: "img/large.jpg"
      })
    }
  }
}]
```


<a id="embedded-videos"></a>
### Embedded videos

To show an embedded video, pass an `iframe` element:

```javascript
content: [{
  media: {
    content: m("iframe", {
      id: "ytplayer",
      type: "text/html",
      width: "100%",
      height: "100%",
      src: "https://www.youtube.com/embed/Fe7lxMJTgZ4",
      frameborder: "0"
    })
  }
}]
```


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Card appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { CardCSS } from "polythene-css"

CardCSS.addStyle(".themed-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text:      "#fff",
  color_light_subtitle_text:   "#fff"
});

m(Card, {
  className: "themed-card"
});
```

<a id="css"></a>
#### CSS

Change CSS using the [Card CSS classes](../../../packages/polythene-css-classes/card.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/card"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Card, {
  style: {
    maxWidth: "360px",
    backgroundColor: "#B89E58"
  }
})
```

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

