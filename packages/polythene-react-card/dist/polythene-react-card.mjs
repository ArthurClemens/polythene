import { ComponentCreator } from 'polythene-react-base';
import { coreCardActions, coreCardMedia, coreCardPrimary, coreCard } from 'polythene-core-card';
import { Icon } from 'polythene-react-icon';
import { ListTile } from 'polythene-react-list-tile';
import { Shadow } from 'polythene-react-shadow';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

// @ts-check
var CardActions = ComponentCreator(coreCardActions);
CardActions["displayName"] = "CardActions";

// @ts-check
var CardMedia = ComponentCreator(coreCardMedia);
CardMedia["displayName"] = "CardMedia";

// @ts-check
var CardPrimary = ComponentCreator(coreCardPrimary);
CardPrimary["displayName"] = "CardPrimary";

var Card = ComponentCreator(_objectSpread({}, coreCard, {
  createContent: function createContent(vnode, args) {
    return coreCard.createContent(vnode, _objectSpread({}, args, {
      CardActions: CardActions,
      CardMedia: CardMedia,
      CardPrimary: CardPrimary,
      Icon: Icon,
      ListTile: ListTile,
      Shadow: Shadow
    }));
  }
}));
Card["displayName"] = "Card";

export { Card };
