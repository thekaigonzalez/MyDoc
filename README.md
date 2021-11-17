# MyDoc

A Free and Open Source webserver to host your documentation!

MyDoc is an extensive API that contains about under 200 lines of code to display dynamic webpage-based manual pages.

## API - Routes

The API consists of these functions.

```

/documents/DOC

/category/CATA_NAME

/category/CATA_NAME/DOCUMENT

/copyright

/manual

```

And each of them have their own special abilities.

You can actually lookup the documentation from the webserver itself!

## Selection

There's a mechanism called "headers", where it'll show buttons at the top of the page depending on what's available.

If every field is added, it'll show...

```
DESCRIPTION OVERVIEW HEADING COPYRIGHT
```

If one field is missing it'll select out that field.

It'll still show the paragraph for the field however, but it'll replace the `null` text with this message:

```

FOO Not Available. 

```

And for copyright (since we care about legal bizz) It'll write..

```

Copyright Not Available. Check the author's page to potentially find more information.

```

## API - JavaScript

A typical document looks a little something like this.

```js

module.exports.header = "foobar-program | FooBar Manual | foobar-program"

module.exports.overview = "FooBar [OPTIONS] ... [NAME]"

module.exports.description = [
    `ich bin FooBar ...`,
    // Lines
    `...`,
    `...`
]

module.exports.copyright = [
    `MyDoc is licensed under the GNU Affero GPL License.`
]

```

It's all self-explanatory.