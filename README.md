# 👾 Terminal

Determine your Terminal size with Node.js.

## Introduction

### `Terminal.width()`

The `Terminal.width` method returns the current width of the console:

```ts
import { Terminal } from "@midonis/terminal"

Terminal.width()

// 80
```

### `Terminal.height()`

The `Terminal.height` method returns the current height of the console:

```ts
import { Terminal } from "@midonis/terminal"

Terminal.height()

// 20
```

### `Terminal.size()`

The `Terminal.size` method returns the current width and height of the console:

```ts
import { Terminal } from "@midonis/terminal"

Terminal.size()

// { width: 80, height: 20 }
```

## License

@midonis/terminal is an open-sourced software licensed under the [MIT license](LICENSE.md).
