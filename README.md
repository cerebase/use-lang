# use-lang

Hyperparse is a powerful and flexible HTML parsing library implemented in Rust. It allows you to parse HTML documents, extract structured information, and perform various operations on the parsed data.

## Features

- **HTML Parsing:** Hyperparse parses HTML documents and constructs a token tree or abstract syntax tree (AST) representing the hierarchical structure of the HTML.

- **Tag, Attribute, and Text Extraction:** The parser extracts tags, attributes, and text content from the HTML document, allowing you to access and manipulate specific elements.

- **Traversal and Querying:** Hyperparse provides utilities for traversing and querying the token tree or AST, enabling you to search for specific elements, navigate the HTML structure, and perform targeted operations.

- **Flexible API:** The Hyperparse API is designed to be flexible and customizable. You can easily integrate the parser into your Rust applications and adapt it to suit your specific use cases.

## Inspiration

- https://www.npmjs.com/package/@chainlit/react-client

### Prerequisites

- Rust (stable version)

### Installation

Add Hyperparse as a dependency in your `Cargo.toml` file:

```toml
[dependencies]
hyperparse = "0.1.0"
```

## Usage

Here's a simple example of how to use Hyperparse to parse an HTML document and extract the title:

```rust
use hyperparse::parser::parse;
use hyperparse::query::Query;

fn main() {
    let html = r#"
        <html>
            <head>
                <title>My Website</title>
            </head>
            <body>
                <h1>Welcome!</h1>
                <p>This is the content of my website.</p>
            </body>
        </html>
    "#;

    let document = parse(html);
    let title = document.query().tag("title").text().first().unwrap();

    println!("Title: {}", title);
}
```

For more details on how to use Hyperparse and its various functionalities, please refer to the documentation and examples in the [Hyperparse GitHub repository](https://github.com/tidefeed/hyperparse).

## Contributing

Contributions to Hyperparse are welcome! If you find any bugs, have feature requests, or want to contribute improvements or new features, please open an issue or submit a pull request in the [Hyperparse GitHub repository](https://github.com/tidefeed/hyperparse).

Please make sure to follow the contribution guidelines when submitting your contributions.

## License

Hyperparse is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

We would like to thank the contributors and open source community for their valuable contributions and support.
