# crtrdg keyboard

> keyboard listener module for crtrdg

## Install

    npm install --save crtrdg-keyboard

## API

### createKeyboard

Create the keyboard object.

**Examples**

```javascript
var createKeyboard = require('crtrdg-keyboard')
var keyboard = createKeyboard()
```

### keyboard#keydown

keydown event

**Parameters**

-   `keyCode` **String** 

**Examples**

```javascript
keyboard.on('keydown', function (key) {
  console.log(key)
})
```

### keyboard#keyup

keyup event

**Parameters**

-   `keyCode` **String** 

**Examples**

```javascript
keyboard.on('keyup', function (key) {
  console.log(key)
})
```

## Contributing

-   Fork this repository.
-   Create a branch for you changes.
-   Include tests if applicable.
-   Add/edit documentation for any changes.
-   Submit a pull request.

## License

MIT
