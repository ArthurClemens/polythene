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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaADCNnwRE0ACF7GIxNBrQBJXV2h3QTTKzT6TSbPEAblqRtapot5HwZoAylGvT6-ajYtGo0HvuHIzGhJh8Pgo8UkAAKYxCGICfAEy3Ga3AWqaTSQNbkAD6qnc4ibfEwaibPkwYHU7ko9mWKE0xgAxDaABwATgAogBWKdV2v1hAQZut9sSsRIJtyBJiUd1k8TljnldQOsNjctthtsRNmC+Hd7g9H08gcjuXsFgBMC4LkQAFASBRBCAA7AAlMYtTKlBqbBtAxpsLqAAyiDBFGABqADi8bGA0rLuJoADunJ2EYhjGH+0rUbkZT3uIVE0XR1EgJorJsIgpE2hACQsSAtCaMJtGaLR9H8tgmB2JoXKSQAsnKf6aFOlwAGyaJpcpCNKcqaDpelocpBm0EIU4AMzwNKQgLjOmg2UuxlTgZ0oAF6SRYdJvMRNQgKmIYcrqAASiC9Dh+G+oRMDEWRFEiIJEnsdoiBMWIiVsbkXE8XxAmScJok2bQhVCMVkmaPImA+Eg2y9v2g4QMO8nsXMpEie1tGlSVZXJQkkgoDA0lgIggnYLoeDkKyiCSXS0myew8AFJJ47FattDlQtlwQENXiRIJcrlQslDqPi5H4JR+VCH+h1iMd+KqHMDwQGoglDss5XNcYCkGTpM5-dKwE6RZ0ozhBaGmbZC60ADf5mbQFl-hBZqaAuum0IqRByqjFnqbQEEGUIf0zhZM6Y3+V0QTjBNEyTRBTrpoPqX+yO-X9tOo3pOPSg5ulYxZEHAYTjMqRBDPE6T5N-RBTPIzOV3SvDEtC9LKlymZM60FOAMWeZtALup2mszOAOo5rOPMwZOu0Br2u6-r2k2RBS4w8rTMGepYsu1LMsGXLS7A4L3sqX+Rsm7zXPiaHdMMyryMh0LxtkxTVNyvTdkQQDWNCDjeOW7p0pa8BcMI2DP0JzDQMg-jABaY7sV59K+cYAXIa0qHQHxEDqJ25DqBFBHKDFJFnRd7FJQxqUPhl5XZbx-GCQV4lFd163JZV1X4nVA5vZ9ICte1K9L115V9fAA1DSNkljZhiCTdN7GzTJIiaJtgkrVDEGaxtHBbTtxT7TdO62wR4JUutdZKR0u73TUIgJ6L1JI7w+oJb6coPZEy9jOKcetwZoP+oHTBetkao1nAuDBWCFwo1KmrW2s4Fbc1NtQogNk-rkPBswvBsMhZTnBgqcumNRYsJ4fTdBRcuFCL4ew8hLNhF4J1rQ6GBl6bULIXrd2fDJYEIobXTy3kh5+RbrANuuoowiBsIgfuUVB6xRAdPZKjEp6SXHhxWeuUF4dWXkfHquR141S3g1Jqgl96L06sVTxq9cin3Pn2S+7Fr4TSmjNJQc1n6v2WmtLxHFNrbG2n2XaACIG3SgcA+KC8rqAKKQ9WBz0oCvUau9ZKu9vqcJEWrLhcoeE6xEZ0ghpc5TdMTgInpyNcGJxkVg-G-TM7dKnPpDRidU5tKIZ7TGHNMH6RkfMuRay84tK2TMjpfC5SDP2eJdWeDWksP0to+uuim7+VqEhQxHJcD2D4APNCG4oTPOfG8-A65yBtC8JoDUYhrRGkQOKCojhgUsmwGwGAqE1AkUQKoUFbQCByQgBVNg9gYB8AgPgTQcg+ARABWoMAnJOTDlaPaTQWAfCfIqq0P5jZECaE7O4XgwLVAAEd7CYCEJoAAqq0eQbA3nZnZWocVnExX8GtHy+FmgoAQCOvYQliRb4UsWBKT09hFr8EgHSqqG4lVQHhWwTQtLVhsEVdgCqCQKqYDXHwfFfy1ywEQHymSgqAAi9glWYHtGytg5BHBspZRuDkV5dDX1mPgW+QK1CcQQPYFoMk2VTVRRVJE9Yf6vMxayiq9gX72E8DJZV+qsB+hsGwGSjhBVzgSMNFoiBoUItkJoCAYAwCYAhT65ujzjSYFZDJGwzo+DuCFeQeAA9gSgl6BCZwUJBgeFhKMBESJQg4i2HMeISQSWpBHWO8g2wdLYCgO4QdUBApYGWGQHAiAJ1TpnXOh03QwR9GXdCNdIx4TjGRDuvE+7kipB0g8bAV77k3tbpoAAKqRCAQqoCqD2HIfAz7p2zssfOno4JHDftXcMBwG6APbv9GiEDh7MIWD-NsYcqGvAEEeJB69Q7WgAEFsD2t9DWOoYhZ6jgLFBH0VRNDUFXIYCQRYtSUFIkIFVcgqzidXHWKTfAZOYGU3xk8Y5Kh2F0CwUcQJ30gjw1+gYbhiNwjGBRnYCb8VhDQwceAFhxwWF7RGS8undOLG-BUYzIAex3vULBfjunVRjhAFGco3K4CjgAAqJjmC-KNClzgcE0Nsc0lo5JQggMYGCV4TyMCgkQVT7KZNCDk8piTxW1PSeLK+aaxAot8Q9BK8Uko8gQFItaBlEZb6FfK-Vk8GniyQBJesWQymKu6Y0+masc2fO6jkLIUcdWfNbZNMt7bKVsy31HDpvb23muBbg14JA3mTtbefD4M7UWoy+DKNma7N3dPtygEd3b72EVuUQIFrA-m3vvd08evzo5br2EQCN0Ht2nCjnB+OydWGft7eVGjnzGPRvo9h+947oOyx1u+zj97q39SjnGyAcVUGluk9B+0MAo4734AfdgJ9KOZ2Y62-BbnJ5seg9VHzgn733xHY9Wtj8zQflej50L+nPmRc3b7Lq2AJO4cngGwm8gkOw0w757p8n62VMK5uxp90jooB0411t+lKLAsca656A6xADdY7K27+bBYLdOh26b97duz5Rcd6r8SIONfwTxzbyrxZ0iJGG57sbBZXQd3tJb630eTyffV5n3Tf2AdRaJ688Pmeh6U5LGGhYBZPsYSwnhIrue6wC8z7z-3W3GBu+bzdrv22O8K9b9thvJWPejap9V3rtWKvqaq812bIBUEoHskT515FZIs7ZyGjlMPgU3pEFG01ngvsVXeiAEfW2x+TYiHMGbrWfsLctHTqTT-9NSaNx+Tb+O3fL5zxrg-ahAvyD4Al43Zv6U4yY07aaJ51iM7M43Ab6YZc5t7u6d5y5R4nZK4nYq6Sggh+4a6v7QCS4baJ5SYf655j5x4JAJ5IF7YaYp5QA+5W64GN51jZ4mhtDETl5Q5V6fahThT16y7UHbaR5QFJ50EMEZ7MGsGmhl7soV64piDV5ugQBdw9x9z8E97R7CGCHn7J5uhp6+4YHR5SHsHuCcGV4KGfYmJmIRQiYaE24D6Z5954FiBOFw52E86Y6uE85D66Y+GaClZoFj41atakF6Zj6z634gBwZlBlj1iVin5oF1gX4QBTbX58jWh34FiLZMF7bOCIgwAAByGogWpYBAFYXmru-uoBJuoOhh22Y04qNgkQP+cOD2xguEFQmgAASmFPgJEMASdndm0SACpMhoxuhgMTQQQMTjkTbuQDJAEIFjAN6roJMYMWwP9oFkXnwGsbkQQRTjHtTpOpAdoT5jAfBohmMeKkxhhpzvACIQ4RHigUgfLrUW7lgchC0aDtUaERrubvoYwXUaDoHoFmhPCmtsqhPpUcwXkcEEUQIIFuztsCsL3NsJbi1g8X4aDl4e9u4Vjp4T9o8SeH4QERVkEVCdaL8YcSWJdi1hkSABxlAJEBLvqFQToRNikVfqybfgrvfhGBIdtj8cLm7i9trl8aLrSedrSbsWcS+JKY9s9r0TKR9rqOKQzhsQXsYEDu4HSSIUjjrkSnrokXDucfqQgfcacXiR4S8caVtkCT5ksM0bMQzvmAXvaXtn4jvIFuOOUBiZabaSdtUdLsXoIVafzgSf3liXWCSWfknsWHJkIEiSieoGiesJPqNtPk1tKZEe1o6J1qHnJv1huNrhigWMmUSusDBAkctskakdyRkbyVkQ-s6StvscblSXaSKb0Ydi2TdsMRdruLqacUMfKcYE9j4KKcqVnqqb2b9hqYDjYDqVOWDqOhDoadDgGTdqaaucji+haZoc8YLpuSeO6WNtMZgGqYGW2R+FThAa1qefDkzsaver2uzuaYnkSd3qgcKYIWLmwUGS8m8mGU3seXWA+cCk7mrrOR6cWbfAQLrhuYnkKacUkd7gCQKdHiCcHpBQZMufzrGdHv8R6ICSIXWFhcYCHt1tdNCS3gRTbuQUgJQdWShZVmIehdBe9lIaRSePnlsdMcXjRcwTIXwHIdwehJhDADYdxcBUIVGTdjiV+S8RGejnJTGXjn3sqIhFACJfitSmWd2q8vqB4BUHOJZmIDaJEM6PgDJjyHyGVpoFxtgAhLUCKCihCqrlwGgFjCgOpFOCqGqHvBqIoFkMEDqNecFUiZ5oSsdp2AkMUudCIKOBZFgtgAkKmNjq5WKB5YoBZCgLQCqMwCAA9OoJ5dQOqAIIoM5hcNII4FIGgLhhYMONgAOFkCkRYFVRwAAALkxmQWTtUZbwBCB7BQDagkDFDs6KAMgGjKiMDKhAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

