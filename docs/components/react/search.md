[Back to Polythene Search main page](../search.md)

# Search component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Search box type](#search-box-type)
  - [Icons and buttons](#icons-and-buttons)
  - [Logic: storing and clearing the value](#logic-storing-and-clearing-the-value)
  - [Complete example](#complete-example)
  - [Result list](#result-list)
- [Appearance](#appearance)
  - [Shadow](#shadow)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Search options](../search.md)



<a id="usage"></a>
## Usage


<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNABlM5OERETQASXVACF7GIxNAzQaRJh8BAAO6aWWafSaDbYgDc9KgOpabHVRpsYBE3s09WZ7k0bvZdkKACYACy5MpsdziNOZkCaZlsRBuq0QBKFWiaasZzQZ57YTB2TQc4wAWQAjABWITdzSd9MiLZCADsAE54CPUwAOaejgDCPaE6c7A9TffHA4AbAPO0JO2vO7vx32d5pe+OjxKhLQtxLNKf+xKDQ-L2uH0+L0Ir+ev8ewH3bc12rG87xHbst3TIRUwlLZ927Ud4Bg0cYJnZkx0nftoPHccABlU1oFct07Scthw8ctm7AAvPgtl3WgF1Q2gj3TC89x-Ld+yfA1mLXbiz37QdND4gc2P-fdcLEx8z0HajjAsalXnjKpA2DaBdTDaArT2LQfTjBMk3wFNjAbQts1zMR81yYtS3LStjGrWs2LM6kmxbNsQHbQi9wACVQmcJXgXtIKozc8M7VNNHTKcZ00OKEoHFdO3g5K8ICh9OwlXzCOZLZU3kkBFJpFS1JDNl1QXJAbBjAzE2TERrPMxAczzUyCyLEsywrKsa3rFyCzc5to08rst23NLO1QyD2MigciJmibV3Y-slqPBaSKioTpvG5KB02gcb2WqbN32s6TpmrK9siwriuU9xVNqcqtKgdsw1qmB43q4zGvarMWssprOrsnrHL6utXKUdyRsKLsosHQChG3Bj6041KJRctGJQi-tuzAWhUuR9H0y2OCyYNe8hAxx8L2Zbd8aS5Gkuph9Wdo3syYZuCN27NjexSjnv07A0JtHaTRb8vHQL2jdRyiibYM0XdRdTAA1VNOxEVM8pvWcwF1ucVzi7dSappX6LHVNh33UdbqUz6HrUp6NJaHSwHUG07WgGMAAp9Wq5lEE9ABKb1Pk0WNLW0217SgWoI4j9REEiQofF04x44Tl79GAfUHZQPVNHVORZALl63a0L1ZVlTOI7UdQc5YFY8BrqAE80RBA9kGAc-1aAqrDdQC4DoPq8zxSnfU2AWiq41Pdj339WcY0Q7DzOlCjqB5+gWvNCTlPjGXmwM7brP1V71p4wLpfoBLsQy8q6ryE9T1W-b+vG+bxA34TzvNR73Omh+6qHdgXI+z8x6nwnkGcqEYTSb19qHfQ4dI7WhjjvU+idk6FDwJGEQJ937n0AfnQuxdNQP2gHAqML9IHv14KKQO49HpxynrqN6YAEE+h9kglBG80FexYe3fehQ+BhgIWfaAF8SE3w1KXCq0B2E0J-nXehYgWSICYZPZwcIYCGmNFGAAYiWeA+AO4JBLvgXRAAlM4+whALggHwCIsxZB6iDBHEM5B7D7AgOQH22BKC4FDsAXeMB7DYEQH4gJEAglqXbnYNgmQrhyBjCEzBCdmQrHsIgAuGdiC7wjiEc0UBsC2gNAsOQBd7BLD0GoAgu9ZRxITgkzI4CYwtKyE-IQPg1D4B9i04OTSI4dJHu0kQiShAj26b0-p4yYCDMzq3TO4DuFuPSR05JiAhBFJKWUipiA-YFKLFknJmg8lECOSwCAYB7CAk0GILxGj0mygWafJZp8R6rLSfEuZ2yKjlObAc-UmT4DZNySAXILymnvIjroGpfjgm73KiC7JYyJmbKECixAQyi4u00Fcm5uifQbP2UIAltycW6DEI4NuPsjlKCofg9J8TEhiHYIgExvcjntywD4Dl4LGXGAucy9uQCoALmdFAdwpy-bHNBYgM0OzSliABSkl5Yd7m-JCKqoFcrsmKoqMU5VOqQ7CtFaKrFZrzWv25ZoHw6DYBcpFe3KAaxr62vbnyq5ugC6Ms3twq11qE6YBYHIcgBd2H+uDh6z0gbrXkrud8oNCcvW+NORXbeUBZUjwLiMs4gdTUxojiGsNEawxRpjfKGNCaAD6TJbCRHdc60VqafWaAzQ67N+bTl5swAWl5cag0lsiQXWeNhM2yvAbm35bSXmVsHaK+txQm3JpTXoNNBcO0CK7X2ntvzRkDqLZoYd4bNBjvIBOpeT9p0TNndG5tEdlGitoda1tiAc4MudK6D0ikn3t2AEIQDHTom4D-ZoRSu9XmPtqO88qABBbA2BEEavXvyFBEdGQsiLlgYIAA5JUnJ3SaFdXIao9LMDaF0AYf4doujAl6MvCEHgoS+H8IEP0hJ8DgggGEXY+wLAAGJXj6PwYWBY5BpVWWMDWnwWANDVCNEHZuEAC4AAUkSxHxb4zQNjziaC2HovBrZuMvEwOh2MFg0O70w6ybReGCPGEoG6MjIqbPYZ0fhgQhQ1FiCQApkTfIWTmYw-ydz9mvOH0cc4zULmg0MpE0YjlpiIOucs0F6zaWBTr0y58Woun9gABEADy7YhBwq4349eCGkOKSta6G5rgxAeAqAAUX6LIK0kRzR9McxAbkxh72DLVFFjgkTFBpz5VIEgwpECig0pKVMKBIpygVCAXgAhFBZGCMN2RWo0BymYCAVQGguAoGoIqDbaA+NNa44HVY2BGuqhII4KQaAARAmqdgdQ7gsiOIsNdiw9g+D4H+7Ym7f97uPceNIYoETFC0hWxd5U12tiuj4EIW7HKYlQ64M98gr2TC0cBFYT733ft8FB+cVHf2gcg5R2jjHEPseaieyAWHyoEeykYLKIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Search, Shadow } from "polythene-react"

<Search
  textfield={{ label: "Search" }}
  before={<Shadow/>}
/>
~~~

This creates a search field without any icons, with label "Search", and is little more than a [Text Field](../textfield.md) with a drop shadow. The field also needs search icons and buttons. More on that below.


<a id="search-box-type"></a>
### Search box type

The search box can be "inset" (default) or "full width".

An inset search box is presented in an area / box / tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

~~~jsx
import React from "react"
import { Search, Shadow } from "polythene-react"

<Search
  textfield={{ label: "Search" }}
  before={<Shadow/>}
  fullWidth
/>
~~~

<a id="icons-and-buttons"></a>
### Icons and buttons

The search component does not include any icons by itself - providing those is the responsibility of your application. 

To choose which icons to show, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

The states are set in the `buttons` option. For example:

~~~javascript
buttons: {
  none: {
    before: h(searchButton)
  },
  focus: {
    before: h(searchButton),
    after: h(clearButton)
  },
  focus_dirty: {
    before: h(backButton),
    after: h(clearButton)
  },
  dirty: {
    before: h(backButton)
  }
}
~~~

Not all button states need to be defined.


<a id="logic-storing-and-clearing-the-value"></a>
### Logic: storing and clearing the value

See also [Handling state](../../handling-state.md).

To add logic to the search field, we will wrap the search field in a component. We will store the Text Field state in our component state, and set the input value programmatically. For this we will use the Text Field's `value` and `onChange`:

* `value` - sets the text input value
* `onChange => ({ value, focus })` - receives the latest state

Text Field attributes are passed with option `textfield`:

~~~javascript
textfield: {
  value: this.state.value,
  onChange: ({ value, setInputState }) => this.setState({ value, setInputState }),
}
~~~

To clear the field:

* Set the value to empty string
* Set the focus to true (to refocus after clicking the button, leaving the input field)

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).


<a id="complete-example"></a>
### Complete example

~~~jsx
import React, { Component } from "react"
import { Search, IconButton, Shadow } from "polythene-react"

const iconSearch = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const iconBack = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
const iconClear = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
const iconMic = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>

const BackButton = ({ leave }) =>
  <IconButton
    key="back"
    icon={{ svg: { content: iconBack } }}
    ink={false}
    events={{ onClick: leave }}
  />

const ClearButton = ({ clear }) =>
  <IconButton
    key="clear"
    icon={{ svg: { content: iconClear } }}
    ink={false}
    events={{ onClick: clear }}
  />

const SearchIcon = () =>
  <IconButton
    key="search"
    icon={{ svg: { content: iconSearch } }}
    inactive
  />

const MicIcon = () =>
  <IconButton
    key="mic"
    icon={{ svg: { content: iconMic } }}
    inactive
  />

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      setInputState: undefined
    }
    this.clear = this.clear.bind(this)
    this.leave = this.leave.bind(this)
  }

  clear() {
    this.state.setInputState({
      value: "",
      focus: true
    })
  }

  leave() {
    this.setState({ value: "" })
  }

  render() {
    const value = this.state.value
    return (
      <Search
        textfield={{
          label: "Search",
          onChange: ({ value, setInputState }) => this.setState({ value, setInputState }),
          value
        }}
        buttons={{
          none: {
            before: SearchIcon(),
            after: MicIcon()
          },
          focus: {
            before: SearchIcon(),
            after: MicIcon()
          },
          focus_dirty: {
            before: BackButton({ leave: this.leave }),
            after: ClearButton({ clear: this.clear })
          },
          dirty: {
            before: BackButton({ leave: this.leave }),
            after: ClearButton({ clear: this.clear })
          }
        }}
        before={<Shadow />}
      />
    )
  }
}
~~~

<a id="result-list"></a>
### Result list

A search field is almost always combined with a list of search results.

This can be created by combining both search field and result list in a stateful wrapper component, where the wrapper keeps track of the current search string and generates corresponding results.

To add keyboard control - allowing to move from the search field into the results list and back - can be done by reusing the [keyboard list example](list.md#keyboard-control).

The basic setup is:

~~~javascript
class SearchWithResults extends React.Component {
  constructor(props) {
    // ... logic
  }
  render() {
    return (
      {/* The container catches all keyboard events for both search field and result list */}
      <div onKeyDown={this.handleKey}>
        <SearchField />
        <ResultList />
      </div>
    )
  }
}
~~~

An elaborate example is available as flems:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNABlM5OERETQASXVACF7GIxNAzQaRJh8BAAO5mgAybHmXp9YgAKhxEJpZZp9JoNtiANy1HUtfXe+YAYQNBr98yDSFTBtD4cjSNiOdjUFqSbEOaELvwBuKSAAFMYhDEBPgtqp5sYzcBappNJBVuQAPqqdziIc+PbqdyUexLFCaYwAYhYq67tVlAEoS+Ws4hK9XayVEI2VS2CO3-VsxMGu3re-2EBBh6Px8LEPsCBOpzOIHP8Auy4AJy0GAmAsEB65QFuJZxtAupsOqRo2GAIj5vUzLuJobrsnYhQAEwACy5GUbBjmIBHESAmjMmwiBulaEAJIUtCaKxRGaERzzYJgdiaByxgALIAIwAKxCKJmjCYRIhbEIADsQHwHJ+EABwqfJyZiUIhHCVJ+ESUBUkAGxScJQjCXpwmmUBEkmZo4lAVZEpCLQRkSpotmSRKBoeY5ekeV5DlCE59lBdZYDmcZemsS5blyaJRmEUI+ESls5mifJ8ApfJKWqcyClKZJyVAUBnr4bQOlGcJSlbCVQFbKJABefBbKZtDJrltBWYRDlmSFRmSV5BpdXpQ12ZJ0maKNUm9eF5mlbNnl2dJTXGBY1KvJhVQlvGbLWlO6EwJh2G4SIlEkYgZHiBd1G0fRjHMcYrHsb1XG8jxfECSAgkVWZAASuWqRK8DiYljWGZ6wn4ZohHKapmgI0jUk6cJ6Wo56QMecJEr-RVzJbPha0gBtNLbbt8EtIh0DJkgNhHSdOH4HhxjvdoV3kbdNF0QxTEsWxnFvVR1KfWh30iUZxkY8JuWJX10NSZVctS7pfWSSrVlK9VMOTbLkuo1J2tSS5qsy4ZhsW2bcs4wb0PE6TW3uDtcGwFT6qCYhDNYUzLMgGzpGc6zVHcw9fPPQLHHvSLvFi4UIkw9JkVCMZ7WcQN6MSm96cSlDkmiWAtDoynGeEVsaXlwa7lCJnnkOcyxkFyjKcozXHlty14nl43aUGaJvXiWjnfBcJBpS-JS1jwD+exQbBnyTDUupZoplj-hABq+HCSI+EEy5algHv6k6Qjxll9Xy9tQp+GyeZ8n25tx1O7BUB7VaU42na0D5vW+p08yIZbnDJ8PsShLTQA-vaUsUA+x9mplAfQwB9SPwXPqdUchZALjgW-MAWgwyyllA+WBGgEEsBWHgAh0CYGIH-rIGACD9Q01UDghcf8AEUL7BtZ+e1abGggV-CMP9+x03IKGTcQCHygOtLaSBhD9rQHoa0TCKDHwagwXIqAPD6Z4PYTAtQ6gSFkMQDovs1DNR0MQZoRhiF1ALmcMaUMOjOH0hfpTQ0xpUJgOgQIsR+hgGaEkeA6R0BZFwIUcgvUKj0FiEwUhdxaFtEhN4KKf+D4nFQL2h7MAnjv4+L8QEqAfCoEwPUWEpRES0GahidATJeZ8GJPOCyRAqTnbpKwMENxKERAADE6LwHwJoRI6D8AwE0AAJTOPsIQyYIB8AiLMWQ94ikqPmOQew+xnz1mwJQXAYieyUL7DAew2BEDkE2dsmA25ZF2B9EIK4ch8x7OKX2ZkKx7CIEAiAKCTzWgVHNFAbAtpay8XeZof8eg1AEFkbKEsxTrmZDsfTCMcKsjCKED4NQ+B6xwsufszQyLWH5nxWcf+aKMVYpED6HFfYKEPgRac3ZVyKWZDuYgW5vz-mAoWHIH+sjnmvJBcYL5TyWAQDAPYQEeLVlNNxTBB8NLKGsPrAy3FyKQhAu5fqF58A3kfNyLKyh8q+y6CWCcpVizilWDZC4vgagsJareZoasBBNAipEboQ58AWgdhaIkZISAUCyL2vakMSKmVCC2RAXAQhg2aAAIT6AjFAew8B4CaAAPx4rDRGqNMaFyqq5ay4NMKYGyN0GIRw0DGy4pAchE0vKYFyASGIdgiA+n0PrcUrAPhW0fNrahIV3y+w02dFAdwILBHBrNCEP5AKxDqoAbkzQVbB0lrtGGtVBaJ38qney2d87RFEA7U8y1w7Fhjv7CseAk4cGOvwPgZ1rq8iIA9V6-0AykizP9Ue2FWbzlCFPaOkMAAyIDmabnZsyABsdW7tWIB3WIGdnLgWiO-ZoTch7q1PMnahy1ahIA2tHZoLtrbHVLH4noTAyaxBr35be+9-TH3uqo0Rt9vrP3vNQ8R+Aebf2RsyFxzQAAfQTi4QB9pEAOwd97SFUZo7Bnj4G-3Sco56uTbyj11Mw32HwQTYDtq0zAqAawUGoe03oZ8ILxOeKVRhldxTwJyHIAuTJ1nNyoflKhkVYqJWPLs2Z11ILsHqEKYI1hCn+PEoXbZvzjqWCOec4hVz7nosrq8+KocTJbCRBMwZ4p3aAsLiCyF3+kXwtCAJVuFLdmHMnIXJo8gxWhHGjK3SlDuXQxVe+Zl4oOWYuaHyxZwr79dOhdK2BiLmB-4HtM7F+Lmh6uNbpS14RbW-PGKeZpldA3dAIKUE6F07pNAbXW8U4AQhzvIogydo7fi+xUtDBuZxe1lgLAeQ+YwKxEKIB8LB4wC5qBEXoILVSZp8KiVEmaYSzB3sgEWDeAAjm8t0FK5B-c0AD0SQPUoQ84mJSH0PKEfcR5gNHdBQfg-JzjqH0Wif2H4DYCFpPobyUp6D6G+Oaew6ao4JpqB0eA9Z5xCnUkCd9mMN2sivP-tERxzL0HFUOcw-RTARHUv+fC-wmpSHQFjKK8JyAH7U5SdA5N3rsXBusAvzKDcPg0B8Ck7B7LiUsvaBU9F6Jn76m+dk7YoL6nSvYO0QQBUJnEoQewwlPL3XIvOc+EoG6Us3vrI48IvhM0qezce8cFMN0EAID2+95rtPUlVKEUh87zPxgwL3rEJ7tX1AgJU9EuH6yQP-f69Qj0XQ4r6-M8F2393VeRCioQMCh3wk2+u7NBKAfnPIDkBWA74XffEaz5h-PqA6R3QnLr0z2gbfCJAVBxKFnMf1-PlgBwdQS-ZeEXD5rtfHfGh8DgIn6XCvOJA+Mo-83YBIiLGN0F0d0rxAGWHIHUF3291N2NiPzP31zAPUD-wAKgPL1gJxjQMH1AJsGnAQHvSgEoAL3+2ElL3LzLzMhAIQJnEwEiCZ2MjQLoMhwYLgPN0oN0HkEAMVmgPbxYOwJnEQBoKTyYOsnoIwM5wQPUGdHUDYCZ1UjQOBkh1oFP24NEwQL4EwDHVkBJyTwlFgLbx0IoOwIQEaT4PYO91Uip0UPTyUMwIQOfDPXr2ANmi4JsMMJNHZCZ1Ekjwcix1oDIOUOMAQN0EIPR3QLNGcLEOwJgBWFtzf35wlC8LEjb01wMPALwHULYNiOoGkgSNUhb0IgSJcNSKwDkEgP+3njNGilQJSPUBgGKMQCoIEP+0IlP0UjNFaOYJUMiLqL4MaPR2aLaNgPaP8KwPAPLXIERwgB9Hrx8OjwqlEJhwQKDyQB5CILvzCLZ2EgoPKGwGwD0Rv1BwP2sLEO2JgHUEiFKPRzbycj9xsLYD4AaL3wsKeIoLuJ6MeIUOeI6ICPzzHXIAuOoBn0h0IjIMcOGPYF0Dj2sSZ3knD0zmnz8MwK3wX3gGRy8AcI10x1B0Ih-1EwC3mBMMyLhJgPhJAJYDWREBgDYC0Ol2Fyx2X0wPcEwDUBgB8GfAgAdw-wf3lxxOMDHAgHmFRNR0LzWOBxuM53cFwP2Nxxxx5JAAlL6XkAIPHxb2MhxwlGL2GIeKTy130hbx1M1IyI4OhnD1lIJMiFbVWDdGhK8McP6K+LlN0F6KyP1JdJb0wOH1mEiHvStOFLpNv1lOHzMD2ML2XynxL1lIxSpPwMhULzDKAmL3jJAMjIlNJ3khlPLwjOZGfCdMcNzOxJAIkMwCkId3zM4kBKcJAKwBoXvXIAd3LNSjpNlKrPkBrM9xgAkxDP9KxLd05ywATwJKZyInJ2LybPBGgFQjYFXGCU7PJx8J7Jh1fFr1+yT3khtOsmPybOujEHn0X19Mh1dMrK3KQMyM1xBIxPnP10XPlLwIIPNJTXdCX0bLZ03PIi1Ol0sg2M-PtKvMNKT2BOPzyIRN7K3LeMLw-Nx02IgsPPIl2I0ClOII1KAgKOAvIiiPgBiPgu-33I1MwMXLSIHO93VMhxhOIpfPEFOPOOXKIIr0-1mMxO-K3NqOBTfJCJqnL2jzEmQoXMYu6MdKZzYuNg4s8OgvIrkFbX+Jlg4p13lxwpQvEDvMtKlNzKHIYoEA4McM3IEAIv+3ooqhx3ouGNUHmUfKxKx3LOGLUI0IWClL9JALUK5EyONPWN93tNbDYHsDUOJ3ssZyT1oGLz0tIrsoIHcr4H+OgICtcuCo8ufAnOCKyNUmj3MK-IsqitmUcBSF7ztMsn8oEpSqZA8vwt-P+ywqkiGJxiCvypfzqIktSgUJBLDwqpCpgC2VtW0suNnMhz7kao8rGImKmNTP8rcgOKAphzco8qWIqCCKZ1KjZ3Ly4v1xtXwCgC3P+LB3J0h3Z1crUG3N2D4BLNlwxNlJtXmEiEoDwCUp1M1wvPN1tzADAkpJPI131NUkguGN4BeXuHdBR3RNl2SNKvmvN3eqdK4P1MwNwKwDAHRJtMIid1lKMJSW1L1JNJAPhoIAXx8D3yUIz00BouGLsMA0wvTPtPxt+JjJpJxyYLhrcLis3hb02s3hGv1x4iQGvMVPzzrPvyItKtlOZvqKKpCNEn8tElesFpAN5t6vsEmPOpXKd05rdM515omrECmrArQM2ukiOJhx4h4n-1ROwCUv0NxwBtE2OT2BEABTXBnNxxbySvtOOVWQdzDJxi8OMmNuMFguvytpqkGrdpABSA8o5NepKs11eswIiDdFbKopCPklmJUobLFvSqQEHORt1JAJVvJuctlLOvOPj0ctyKBISPyLTogH-yvSjuoFVI+Pl2utEyiLvSQDj3dEcsNqEPmP1zQowpDKSLpsZvNyiKWBzqbpLL8OMjIOkvtMKvKEyMIg4sNtUk1vbrOHbItKUphoApAMpPkF4FoKB1UmLzXono4H-lrKT0TMNkQtkphwookpooqlmNxswKYpKPLon2jxAgOJruMCfr5uoP4o1P1P-Int4v4L-v3MAo3qMx9IzqFyfInpatHTap91BPwgXr7rErLq9zKL0Lb1UllNRHHxwYPzwbOHgCNIPPtLhTECTrAqksgs3g4swPtDUPtClJmumlDs52VsWGapsE1A4OgKYE4ccD6uluKpBLjtoHlphyVo5ozPXvtORzOBWP5wPqL2IrbvN0FJ+qAPpM5y0ZgFt3UAcNUZMc-pAAUofKto0pAIsbdEQbEhBLDIMswIhI-DAgBXIAyr32L2Fs6oKI3C4VcRe0wHLHzAAHkfB7gPwxAhAjHIgYB6xgmcVnsKMqNxNaxGhCMIxxdSGQBAnXZHxBwAARbkfMAcZ8NTZ9cRShRkFkVoOsRAfTPLH8WcJYaZQcBcAAA3IHcEnHrAABJgBynyBKnMhPq1BTxD0QBNwtxOmqsfYRAPkiJsAEhJMA5xAlnCIVnJNWTyAazRkXR3KJVjBMcABSQVA1MMNJRcFxApigJR-cJ8cgPcb+fUG8KhuDTQOJs0YZ0ZndEUOQfAM0aAI0AF0RapkBXcW8FVLwJABBd5pAdbOJ+F2FoxQNNpGAAAOSVEKHPDbG9WvFvE+VxRYEoFkAQWGZKbEHrF+f5QuXW3wx4n2C6TJcqFxXfE-A5GAA5cBfW2H2PswB+2lWKVMVoSaaeSsWYUsSgFBeiahUcRaTjAxY6RNAAHUoRxkX0RlBkWyRlxlzgpkZk5lNRFlDBtzKZVl1lTkINlUzWDkjlTUbXi0+x81kMIxfMxdQg4lKmFwk0U1OsfkAWCAfXNA-X4AA3mHUJn1-t3dPWeWCByw-l70EgFx0oqt1tkUjkXtEBxNKnCUw0s3gVc3+VSUlhyVKVnXxshBC25BZXOW83Q0bka2c3W1ong2S30Uy3sVK3M3sBs3E2TUEh82m2+3gUB3k3S3MVu3GUbkR18AkAABpfg4dzIOdxd-gyd8ti5Htgt0d2t71-lRJ1Jz1dJ5W21e7HRB8Zt4t2DesYNZVT11VCoedHlXFM1+N-AcdxIVNzY+tD9kNsNiN3iKNiVGNeNbJz5aiEDGiWjcD0N5NUhgzDNYJ8sGbIQNQ7AesOJoBL5jdyNkQesWYN0MZeogAUQSEw86YAD1Bng1ZQ5nRNpDpmxEM1sPfWEO3N2s+whB2BPVTUh3fFNAh24Ow3OOV0Y2oUL33tKFr3W363D373zVFw10bkN1gVX3il325PAWQ3sM32vWg3P3-Qk3v3NA03JPi1L2ZO93EAv2Eh6wMVEgH3lOn251N0PXlOP27PMFB2LO5VpO+w13EAl3Ih6xEBnOzW9pHOBOq2WU2VDO7PK29p8OqnG3mUC10PgOygYBK3Jyl1WVsOE0IOABBcgePEphPXIYTAZWJ5dor0TCrxPXZI7CwBroe6iR9c0UjyyetVlLZUVsQIp496l+7YpPaIjkzmL6LzQAAaikk0CqE0BS4i1HT4i2CkiPQzXSiPR8+Tdm6kkrZdd3f7eM8HcI-okm9G7zFbTwDZBYHy9q8iHDATVE1K-jwAFV9bqJquCu6uXvjBPvjBmvLUAevuXVnwLRuvhJevw1dAaFBvhulVDvlkWgJvB38xpv1u9IlAzPoekPcedurU9usfkfe2Tv5hJvzu3RLvK2wwbuQw8uwvHvnuIPSONQT7nORXYeBuhuZNPUkf60yei3tP23b3lvqBovGAru6f4BbvGffunv6vjBSOyAcBechMRMFeWfRMVewAgeIkQeQBdfchOuofBfjux3Tvk36x0ppf-PCdKFjUayzVfNIvXE0iTQG3YuMuPfUJKmkvXFluV3bkMvluA+CmvOrfEhg+4vI+KfB3w-dR-3aM0uQ-gV4u238B-f3tlaKgK0l1ZEzXanmQj1LUAwyhIkmTZgREwJtzsvHUU1cPziIAbB+kBuRlH1WS+Jfe0IW0+lSN+kmNPUWNOwDNoAQvGv4Ww0guQvrtbtlOa04kelW17d2tlNZN+UEF1+T24kMnbVrtO1BXW1CgAxIhjlCmIfeA1LiW-MoNGngAYMHVAFBPl0Yshf93OlKm73+UxO7MZnUNg0CCZPrBgP43Yj0wAZbuVnkDuA7AR6M1hmiUCocuOTfBBMYCH6hBcgc3HvpUyuatd3ut3TAKCmWqq4m+eKCAEtyLIhhDkugTNLxEzQhhvUeKYMCMjHQtBdAngeYCcmdTqEq+M2ZwHCCxY4tjAeLS8J2Bv4xZdmNZGbDeE4AIJIBGHesFilRZmhoui6GbH2HubAp2mz4PcBpz6wNplB6gmBJanwEhhCBc4NgCQOw72gKBRjVoDzloEtAYgI-JwcwM0CsCn0HAxzNwMZJqAjBfYOJnmlRb7dsB26fwRfxGZ0sFwwTagAi0QCxt9BH7XbtH3q5x8EMg7ANrfxlbacFwZqQTu-xbaGcv+cQ3-n1i3AzZ-+7WDaKhnY4poNMhfMQHyBZDz8pO0EJ7K4mK47EckOHCRPyHn7F8hEAg7FgIE5CWN5+ICfkIMOCDDDGmwg1FtUHEynQ+I6AlwWZ1BQECyuh2OJiMhsG24psRyAfvxCbpmg2ejmMgYG2iYnDVe5-Gwfeh5ZNCBQ9aAYfwOmFCD0AsyNYLIGqBHo9scSdVnYE1ZUYRk1QzDA8P6EWA+hsiZ4RixmGjDiORmIUuMP8SECdAegDoHaC6DAhegdiCEB4ChC+B-AgQKMISHvS24wguwfYBYCXCvA4kuQBYD0wqCFAJwluT2lUCNBmDZeEABcAAAVCwswcHiIn1b7A1hiw0kRABeCYBwRkImphCOaHOIhRg3MJoJCEBO9TUEiTodgBuzRZXQYqVwDE1YGkd+gsgK0JEHNCYo0BeeHkJx23BqgjWwYcgIoEnDdopAJAHlmKC4BoAdCxkFABPjlAKgQAV-ZUFkGCC2jVEWoNAHKGYAgAjKNRbgAGKVCKAKRMTe9P-FWDYA9RqoEgNnkUAAggQc4bANOCyAzILASYiwB5XwAliJkyY0xGmIzGPBpAxQY5IoFpB+jFQAgRMVWK2Cug+AQgFMa2kjR1iuAWY8gFIDQC5irA+YwsfhkrHnAuxxY8sTOP2BziexfY2sZqEzEgBGxyoFsbKEYCyggAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>



<a id="appearance"></a>
## Appearance


<a id="shadow"></a>
### Shadow

To add a drop shadow to the search field:

~~~jsx
before={<Shadow/>}
~~~


<a id="styling"></a>
### Styling

Below are examples how to change the Search appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { SearchCSS } from "polythene-css"

SearchCSS.addStyle(".themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text:  "#eee",
  color_dark_background:  "#333"
})

<Search className="themed-search" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Search CSS classes](../../../packages/polythene-css-classes/search.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/search"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Search
  style={{
    background: "#BBDEFB"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


