---
sidebar_position: 4
---

# Configuring a Repl

Every new repl comes with a `.replit` and a `replit.nix` file that let you configure your repl to do just about anything in any language! 

In most repls, these files are hidden by default. But you can find them easily by clicking the three dot menu in the file tree, and selecting _Show hidden files_.

<img
  src="https://replit-docs-images.util.repl.co/images/tutorials/30-build-with-nix/show-hidden-files.png"
  alt="Show configuration"
  style={{ width: "200px" }}
/>


## `replit.nix`

Every new repl is now a Nix repl, which means you can install any package available on Nix, and support any number of languages in a single repl. You can search for a list of available packages [here](https://search.nixos.org/packages).

The `replit.nix` file should look something like the example below. The `deps` array specifies which Nix packages you would like to be available in your environment. 

```nix
{ pkgs }: {
    deps = [
        pkgs.cowsay
    ];
}
```
### Learn More About Nix

If you'd like to learn more about Nix, here are some great resources:

#### Written Guides
- [Getting started with Nix](/programming-ide/getting-started-nix) — Our own getting started guide
- [Building with Nix on Replit](/tutorials/build-with-nix) — Deploy a production web stack on Replit with Nix
- [Nix Pills](https://nixos.org/guides/nix-pills/) — Guided introduction to Nix
- [Nix Package Manager Guide](https://nixos.org/manual/nix/stable/) — A comprehensive guide of the Nix Package Manager
- [A tour of Nix](https://nixcloud.io/tour) — Learn the nix language itself

#### Video Guides
- [Nixology](https://www.youtube.com/playlist?list=PLRGI9KQ3_HP_OFRG6R-p4iFgMSK1t5BHs) - A series of videos introducing Nix in a practical way
- [Taking the Nix pill](https://www.youtube.com/watch?v=QwLWIy2KleE) — An  introduction to what Nix is, how it works, and a walkthrough of publishing several new languages to Replit within an hour.
* [Nix: A Deep Dive](https://www.youtube.com/watch?v=TsZte_9GfPE) — A deep dive on Nix: what Nix is, why you should use it, and how it works. 



## `.replit`

The `.replit` file allows you to configure many options for your repl, most basic of which is the `run` command.

Check out how the repl below is using `.replit` to print "hello world" instead of running the code:

<iframe width="100%" height="500px" src="https://replit.com/@turbio/dotreplit-example?lite=true" scrolling="no" frameBorder="no" allowTransparency="true" allowFullScreen="true"   style={{ marginBottom: 10 }} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" />

And here's a video on how to use the `.replit` file to configure a repl to enable [Clojure](https://clojure.org):

<iframe
  width="100%"
  height="400px"
  style={{ marginBottom: 10 }}
  src="https://www.loom.com/embed/cbe1f74399c546c38e0c1871893816c5"
  frameBorder={0}
  webkitallowfullscreen=""
  mozallowfullscreen=""
  allowFullScreen=""
/>

`.replit` files follow the [toml configuration format](https://learnxinyminutes.com/docs/toml/) and look something like this:

```toml
# The command that is executed when the run button is clicked.
run = ["cargo", "run"]

# The default file opened in the editor.
entrypoint = "src/main.rs"

# Setting environment variables
[env]
FOO="foo"

# Packager configuration for the Universal Package Manager
# See https://github.com/replit/upm for supported languages.
[packager]
language = "rust"

  [packager.features]
  # Enables the package search sidebar
  packageSearch = true
  # Enabled package guessing
  guessImports = false

# Per language configuration: language.<lang name> 
[languages.rust]
# The glob pattern to match files for this programming language
pattern = "**/*.rs"

    # LSP configuration for code intelligence
    [languages.rust.languageServer]
    start = ["rust-analyzer"]
```

In the code above, the strings in the array assigned to `run` are executed in order in the shell whenever you hit the "Run" button. 

The `language` configuration option helps the IDE understand how to provide features like [packaging](https://blog.replit.com/upm) and [code intelligence](https://blog.replit.com/intel).

And the `[languages.rust]` `pattern` option is configured so that all files ending with `.rs` are treated as Rust files. The name is user-defined and doesn't have any special meaning, we could have used `[languages.rs]` instead.

We can now set up a language server specifically for Rust. Which is what we do with the next configuration option: `[languages.rust.languageServer]`. [Language servers](https://microsoft.github.io/language-server-protocol/#:~:text=A%20Language%20Server%20is%20meant,servers%20and%20development%20tools%20communicate.) add smart features to your editor like code intelligence, go-to-definition, and documentation on hover.

Since repls are fully configurable, you're not limited to just one language. For example, you could install Clojure and its language server using `replit.nix`, add a `[languages.clojure]` configuration option to the above `.replit` file that matched all Clojure files and have code intelligence enabled for both languages in the same repl.



## `.replit` reference


A `Command` can either be a string or a list of strings. If the `Command` is a string (`"node index.js"`), it will be executed via `sh -c "<Command>"`. If the Command is a list of strings (`["node", "index.js"]`), it will be directly executed with the list of strings passed as arguments. When possible, it is preferred to pass a list of strings.

---

### `run`

**Type:** `Command`

The command to run the repl. It has lower precedence than the `[interpreter] command` (i.e. if `[interpreter] command` is set, it will run instead of the `run` command).

---

### `entrypoint`

**Type:**  `string`

The name of the main file including the extension. This is the file that will be run, and shown by default when opening the editor.

---

### `onBoot`

**Type:** `Command`

The command that executes after your repl has booted.

---

### `compile`

**Type:** `Command`

The shell command to compile the repl before the `run` command. Only for compiled languages like C, C++, and Java.

---

### `audio`

**Type:** `boolean`

Enables [system-wide audio](/misc/playing-audio-replit) for the repl when configured to `true`.

---

### `language`

**Type:**  `string`

During a GitHub import, this tells the workspace which language should be used when creating the repl. For new repls, this option will always be Nix, so this field should generally not be touched.

---

### `[env]`

Set environment variables. Don't put secrets here—use the Secrets tab in the left sidebar.

**Example:**
```toml
[env]
VIRTUAL_ENV = "/home/runner/${REPL_SLUG}/venv"
PATH = "${VIRTUAL_ENV}/bin"
PYTHONPATH="${VIRTUAL_ENV}/lib/python3.8/site-packages"
```
---

### `interpreter`

Specifies the interpreter, which should be a compliant [prybar binary](https://github.com/replit/prybar).

#### `command`

**Type:** `[string]`

This is the command that will be run to start the interpreter. It has higher precedence than the `run` command (i.e. `interpreter` command will run instead of the `run` command).

#### `prompt`

**Type:** `[byte]`

This is the prompt used to detect running state, if unspecified it defaults to `[0xEE, 0xA7]`.

---

### `[unitTest]`

Enables unit testing to the repl.

#### `language`

**Type:** `string`
        
The language you want the unit tests to run. Supported strings: `java`, `python`, and `nodejs`.

---

### `[packager]`

**Description:** Package management configuration. Learn more about installing packages [here](/repls/packages/#DirectImports).

#### `afterInstall`

**Type:** `Command`

The command that is executed after a new package is installed.

#### `ignoredPaths`

**Type:** `[string]`

 List of paths to ignore while attempting to guess packages.

#### `ignoredPackages`

**Type:** `[string]`

List of modules to never attempt to guess a package for, when installing packages.

#### `language`

**Type:** `string`

Specifies the language to use for package operations. See available languages in the [Universal Package Manager](https://github.com/replit/upm) repository.

#### `[packager.features]`

UPM features that are supported by the specified languages.

##### `packageSearch`

**Type:** Boolean

When set to `true`, enables a package search panel in the sidebar.

##### `guessImports`

**Type:** Boolean


When set to `true`, UPM will attempt to guess which packages need to be installed prior to running the repl.

---

### `[languages.<language name>]`

Per-language configuration. The language name has no special meaning other than to allow multiple languages to be configured at once.

#### `pattern`

**Type:** `string`

A [glob](https://en.wikipedia.org/wiki/Glob_(programming)) used to identify which files belong to this language configuration (`**/*.js`)

#### `syntax`

**Type:** `string`

The language to use for syntax highlighting.

#### `[languages.<language name>.languageServer]`

Configuration for setting up [LSP](https://microsoft.github.io/language-server-protocol/) for this language. This allows for code intelligence (autocomplete, underlined errors, etc...).

##### `start`

**Type:** `Command`

The command used to start the LSP server for the specified language.

---

### `[nix]`

Where you specify a [Nix channel](https://nixos.wiki/wiki/Nix_channels).

#### `channel`

**Type:** `string`

A nix channel id.

---

### `[debugger]`

Advanced users only. See field types & docstrings [here](https://gist.github.com/Bardia95/98987c69c6970b1bb0698b863e2a84de#file-dot-replit-debugger-config-go), and reference configs in the advanced examples below.

## Examples

### Beginner

#### [LaTeX](https://replit.com/@ZachAtReplit/LaTeX?v=1#.replit)
```toml
compile = ["pdflatex", "-halt-on-error", "main.tex"]
run = ["sh", "runner.sh"]

hidden = ["*.aux", "*.log", "index.html", "runner.sh", "nohup.out"]

[languages.latex]
pattern = "**/*.tex"

[languages.latex.languageServer]
start = "texlab"

[nix]
channel = "stable-21_11"
```

#### [Clojure](https://replit.com/@replit/Clojure?v=1#.replit)
```toml
run = "clojure -M main.clj"

entrypoint = "main.clj"

[env]
CLJ_CONFIG = "/home/runner/.clojure"

[languages.clojure]
pattern = "**/*.clj"

[languages.clojure.languageServer]
start = ["clojure-lsp"]
```
### Advanced

##### [Python](https://replit.com/@replit/Python?v=1)
```toml
# The command that runs the program. It is commented out because [interpreter] configuration option is set.
# run = ["python3", "main.py"]
# The primary language of the repl. There can be others, though!
language = "python3"
# The main file, which will be shown by default in the editor.
entrypoint = "main.py"
# A list of globs that specify which files and directories should
# be hidden in the workspace.
hidden = ["venv", ".config", "**/__pycache__", "**/.mypy_cache", "**/*.pyc"]

# Specifies which nix channel to use when building the environment.
[nix]
channel = "stable-21_11"

# Per-language configuration: python3
[languages.python3]
# Treats all files that end with `.py` as Python.
pattern = "**/*.py"
# Tells the workspace editor to syntax-highlight these files as
# Python.
syntax = "python"

  # The command needed to start the Language Server Protocol. For
  # linting and formatting.
  [languages.python3.languageServer]
  start = ["pyls"]

# The command to start the interpreter.
[interpreter]
  [interpreter.command]
  args = [
    "stderred",
    "--",
    "prybar-python3",
    "-q",
    "--ps1",
    "\u0001\u001b[33m\u0002\u0001\u001b[00m\u0002 ",
    "-i",
  ]
  env = { LD_LIBRARY_PATH = "$PYTHON_LD_LIBRARY_PATH" }

# The environment variables needed to correctly start Python and use the
# package proxy.
[env]
VIRTUAL_ENV = "/home/runner/${REPL_SLUG}/venv"
PATH = "${VIRTUAL_ENV}/bin"
PYTHONPATH="${VIRTUAL_ENV}/lib/python3.8/site-packages"
REPLIT_POETRY_PYPI_REPOSITORY="https://package-proxy.replit.com/pypi/"
MPLBACKEND="TkAgg"

# Enable unit tests. This is only supported for a few languages.
[unitTest]
language = "python3"

# Add a debugger!
[debugger]
support = true

  # How to start the debugger.
  [debugger.interactive]
  transport = "localhost:0"
  startCommand = ["dap-python", "main.py"]

    # How to communicate with the debugger.
    [debugger.interactive.integratedAdapter]
    dapTcpAddress = "localhost:0"

    # How to tell the debugger to start a debugging session.
    [debugger.interactive.initializeMessage]
    command = "initialize"
    type = "request"

      [debugger.interactive.initializeMessage.arguments]
      adapterID = "debugpy"
      clientID = "replit"
      clientName = "replit.com"
      columnsStartAt1 = true
      linesStartAt1 = true
      locale = "en-us"
      pathFormat = "path"
      supportsInvalidatedEvent = true
      supportsProgressReporting = true
      supportsRunInTerminalRequest = true
      supportsVariablePaging = true
      supportsVariableType = true

    # How to tell the debugger to start the debuggee application.
    [debugger.interactive.launchMessage]
    command = "attach"
    type = "request"

      [debugger.interactive.launchMessage.arguments]
      logging = {}

# Configures the packager.
[packager]
# Search packages in PyPI.
language = "python3"
# Never attempt to install `unit_tests`. If there are packages that are being
# guessed wrongly, add them here.
ignoredPackages = ["unit_tests"]

  [packager.features]
  enabledForHosting = false
  # Enable searching packages from the sidebar.
  packageSearch = true
  # Enable guessing what packages are needed from the code.
  guessImports = true
```

##### [HTML, CSS, JS](https://replit.com/@replit/HTML-CSS-JS?v=1#.replit)
```toml
hidden=[".config"]

# hosting is currently hardcoded for this language
# [hosting]
# route = "/"
# directory= "/"

[nix]
channel = "stable-21_11"

[languages.html]
pattern = "**/*.html"
  [languages.html.languageServer]
  start = ["vscode-html-language-server", "--stdio"]
  [languages.html.languageServer.initializationOptions]
  provideFormatter = true
  [languages.html.languageServer.configuration.html]
  customData = [ ]
  autoCreateQuotes = true
  autoClosingTags = true
  mirrorCursorOnMatchingTag = false
  
    [languages.html.languageServer.configuration.html.completion]
    attributeDefaultValue = "doublequotes"
  
    [languages.html.languageServer.configuration.html.format]
    enable = true
    wrapLineLength = 120
    unformatted = "wbr"
    contentUnformatted = "pre,code,textarea"
    indentInnerHtml = false
    preserveNewLines = true
    indentHandlebars = false
    endWithNewline = false
    extraLiners = "head, body, /html"
    wrapAttributes = "auto"
    templating = false
    unformattedContentDelimiter = ""
  
    [languages.html.languageServer.configuration.html.suggest]
    html5 = true
  
    [languages.html.languageServer.configuration.html.validate]
    scripts = true
    styles = true
  
    [languages.html.languageServer.configuration.html.hover]
    documentation = true
    references = true
  
    [languages.html.languageServer.configuration.html.trace]
    server = "off"

[languages.javascript]
pattern = "**/{*.js,*.jsx,*.ts,*.tsx,*.mjs,*.cjs}"
  [languages.javascript.languageServer]
  start = ["typescript-language-server", "--stdio"]

# TODO autocomplete relies on snippet support, which we don't advertise to LSP servers.
# For now CSS autocomplete will use built-in codemirror, which is not perfect but good enough
[languages.css]
pattern = "**/{*.less,*.scss,*.css}"
  [languages.css.languageServer]
    start = ["vscode-css-language-server", "--stdio"]
    [languages.css.languageServer.configuration.css]
      customData = [ ]
      validate = true

      [languages.css.languageServer.configuration.css.completion]
      triggerPropertyValueCompletion = true
      completePropertyWithSemicolon = true
    
      [languages.css.languageServer.configuration.css.hover]
      documentation = true
      references = true
    
      [languages.css.languageServer.configuration.css.lint]
      # Configure linting
      # ignore = don't show any warning or error
      # warning = show yellow underline
      # error = show red underline
      argumentsInColorFunction = "error" # Invalid number of parameters
      boxModel = "ignore" # Do not use width or height when using padding or border
      compatibleVendorPrefixes = "ignore"  # When using a vendor-specific prefix make sure to also include all other vendor-specific properties"
      duplicateProperties = "warning" # Do not use duplicate style definitions
      emptyRules = "warning" # Do not use empty rulesets
      float = "ignore" # Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
      fontFaceProperties = "warning" # @font-face rule must define 'src' and 'font-family' properties 
      hexColorLength = "error" # Hex colors must consist of three, four, six or eight hex numbers
      idSelector = "ignore" # Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
      ieHack = "ignore" # IE hacks are only necessary when supporting IE7 and older
      important = "ignore" # Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
      importStatement = "ignore" # Import statements do not load in parallel
      propertyIgnoredDueToDisplay = "warning" # Property is ignored due to the display
      universalSelector = "ignore" # The universal selector (*) is known to be slow
      unknownAtRules = "warning" # Unknown at-rule
      unknownProperties = "warning" # Unknown property.
      validProperties = [ ] # add some properties that the linter doesn't know about
      unknownVendorSpecificProperties = "ignore" # Unknown vendor specific property.
      vendorPrefix = "warning" # When using a vendor-specific prefix also include the standard property
      zeroUnits = "ignore" # No unit for zero needed
    
      [languages.css.languageServer.configuration.css.trace]
      server = "off"
    
    [languages.css.languageServer.configuration.scss]
    validate = true
    
      [languages.css.languageServer.configuration.scss.completion]
      triggerPropertyValueCompletion = true
      completePropertyWithSemicolon = true
    
      [languages.css.languageServer.configuration.scss.hover]
      documentation = true
      references = true
    
      [languages.css.languageServer.configuration.scss.lint]
      # Configure linting
      # ignore = don't show any warning or error
      # warning = show yellow underline
      # error = show red underline
      argumentsInColorFunction = "error" # Invalid number of parameters
      boxModel = "ignore" # Do not use width or height when using padding or border
      compatibleVendorPrefixes = "ignore"  # When using a vendor-specific prefix make sure to also include all other vendor-specific properties"
      duplicateProperties = "warning" # Do not use duplicate style definitions
      emptyRules = "warning" # Do not use empty rulesets
      float = "ignore" # Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
      fontFaceProperties = "warning" # @font-face rule must define 'src' and 'font-family' properties 
      hexColorLength = "error" # Hex colors must consist of three, four, six or eight hex numbers
      idSelector = "ignore" # Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
      ieHack = "ignore" # IE hacks are only necessary when supporting IE7 and older
      important = "ignore" # Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
      importStatement = "ignore" # Import statements do not load in parallel
      propertyIgnoredDueToDisplay = "warning" # Property is ignored due to the display
      universalSelector = "ignore" # The universal selector (*) is known to be slow
      unknownAtRules = "warning" # Unknown at-rule
      unknownProperties = "warning" # Unknown property.
      validProperties = [ ] # add some properties that the linter doesn't know about
      unknownVendorSpecificProperties = "ignore" # Unknown vendor specific property.
      vendorPrefix = "warning" # When using a vendor-specific prefix also include the standard property
      zeroUnits = "ignore" # No unit for zero needed"
    
    [languages.css.languageServer.configuration.less]
    validate = true
    
      [languages.css.languageServer.configuration.less.completion]
      triggerPropertyValueCompletion = true
      completePropertyWithSemicolon = true
    
      [languages.css.languageServer.configuration.less.hover]
      documentation = true
      references = true
    
      [languages.css.languageServer.configuration.less.lint]
      # Configure linting
      # ignore = don't show any warning or error
      # warning = show yellow underline
      # error = show red underline
      argumentsInColorFunction = "error" # Invalid number of parameters
      boxModel = "ignore" # Do not use width or height when using padding or border
      compatibleVendorPrefixes = "ignore"  # When using a vendor-specific prefix make sure to also include all other vendor-specific properties"
      duplicateProperties = "warning" # Do not use duplicate style definitions
      emptyRules = "warning" # Do not use empty rulesets
      float = "ignore" # Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
      fontFaceProperties = "warning" # @font-face rule must define 'src' and 'font-family' properties 
      hexColorLength = "error" # Hex colors must consist of three, four, six or eight hex numbers
      idSelector = "ignore" # Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
      ieHack = "ignore" # IE hacks are only necessary when supporting IE7 and older
      important = "ignore" # Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
      importStatement = "ignore" # Import statements do not load in parallel
      propertyIgnoredDueToDisplay = "warning" # Property is ignored due to the display
      universalSelector = "ignore" # The universal selector (*) is known to be slow
      unknownAtRules = "warning" # Unknown at-rule
      unknownProperties = "warning" # Unknown property.
      validProperties = [ ] # add some properties that the linter doesn't know about
      unknownVendorSpecificProperties = "ignore" # Unknown vendor specific property.
      vendorPrefix = "warning" # When using a vendor-specific prefix also include the standard property
      zeroUnits = "ignore" # No unit for zero needed"

```

#### [Java](https://replit.com/@replit/Java-Beta?v=1#.replit)
```toml
compile = "javac -classpath .:target/dependency/* -d . $(find . -type f -name '*.java')"
run = ["java", "-classpath", ".:target/dependency/*", "Main"]

entrypoint = "Main.java"
hidden = ["**/*.class"]

[packager]
language = "java"

[packager.features]
packageSearch = true

[languages.java]
pattern = "**/*.java"

[languages.java.languageServer]
start = ["jdt-language-server"]

[unitTest]
language = "java"

[nix]
channel = "stable-21_11"

[debugger]
support = true

[debugger.compile]
command = "javac -classpath .:/run_dir/junit-4.12.jar:target/dependency/* -g -d . $(find . -type f -name '*.java')"

[debugger.interactive]
transport = "localhost:0"
connectTimeout = 60
startCommand = "java-debug"

[debugger.interactive.initializeMessage]
command = "initialize"
type = "request"

[debugger.interactive.initializeMessage.arguments]
adapterID = "cppdbg"
clientID = "replit"
clientName = "replit.com"
columnsStartAt1 = true
linesStartAt1 = true
locale = "en-us"
pathFormat = "path"
supportsInvalidatedEvent = true
supportsProgressReporting = true
supportsRunInTerminalRequest = true
supportsVariablePaging = true
supportsVariableType = true

[debugger.interactive.launchMessage]
command = "launch"
type = "request"

[debugger.interactive.launchMessage.arguments]
classPaths = ["."]
mainClass = "Main"
```

#### [Node.js](https://replit.com/@replit/Nodejs?v=1#.replit)
```toml
entrypoint = "index.js"

[interpreter]
command = [
    "prybar-nodejs",
    "-q",
    "--ps1",
    "\u0001\u001b[33m\u0002\u0001\u001b[00m\u0002 ",
    "-i"
]

[nix]
channel = "stable-21_11"

[env]
XDG_CONFIG_HOME = "/home/runner/.config"

[packager]
language = "nodejs"

  [packager.features]
  packageSearch = true
  guessImports = true
  enabledForHosting = false

[unitTest]
language = "nodejs"

[languages.javascript]
pattern = "**/{*.js,*.jsx,*.ts,*.tsx}"

  [languages.javascript.languageServer]
  start = [ "typescript-language-server", "--stdio" ]

[debugger]
support = true

  [debugger.interactive]
  transport = "localhost:0"
  startCommand = [ "dap-node" ]

    [debugger.interactive.initializeMessage]
    command = "initialize"
    type = "request"

      [debugger.interactive.initializeMessage.arguments]
      clientID = "replit"
      clientName = "replit.com"
      columnsStartAt1 = true
      linesStartAt1 = true
      locale = "en-us"
      pathFormat = "path"
      supportsInvalidatedEvent = true
      supportsProgressReporting = true
      supportsRunInTerminalRequest = true
      supportsVariablePaging = true
      supportsVariableType = true

    [debugger.interactive.launchMessage]
    command = "launch"
    type = "request"
    
      [debugger.interactive.launchMessage.arguments]  
      args = []
      console = "externalTerminal"
      cwd = "."
      environment = []
      pauseForSourceMap = false
      program = "./index.js"
      request = "launch"
      sourceMaps = true
      stopOnEntry = false
      type = "pwa-node"

```

#### [C++](https://replit.com/@replit/CPlusPlus?v=1)
```toml
compile = ["make", "-s"]
run = "./main"
entrypoint = "main.cpp"
hidden = ["main", "**/*.o", "**/*.d", ".ccls-cache", "Makefile"]

[languages.cpp]
pattern = "**/*.{cpp,h}"

[languages.cpp.languageServer]
start = "ccls"

[debugger]
support = true

[debugger.compile]
command = ["make"]
noFileArgs = true

[debugger.interactive]
transport = "stdio"
startCommand = ["dap-cpp"]

[debugger.interactive.initializeMessage]
command = "initialize"
type = "request"

[debugger.interactive.initializeMessage.arguments]
adapterID = "cppdbg"
clientID = "replit"
clientName = "replit.com"
columnsStartAt1 = true
linesStartAt1 = true
locale = "en-us"
pathFormat = "path"
supportsInvalidatedEvent = true
supportsProgressReporting = true
supportsRunInTerminalRequest = true
supportsVariablePaging = true
supportsVariableType = true

[debugger.interactive.launchMessage]
command = "launch"
type = "request"

[debugger.interactive.launchMessage.arguments]
MIMode = "gdb"
arg = []
cwd = "."
environment = []
externalConsole = false
logging = {}
miDebuggerPath = "gdb"
name = "g++ - Build and debug active file"
program = "./main"
request = "launch"
setupCommands = [
	{ description = "Enable pretty-printing for gdb", ignoreFailures = true, text = "-enable-pretty-printing" }
]
stopAtEntry = false
type = "cppdbg"
```
