# Contentstack Commerce by Commerce Layer

![Contentstack Commerce by Commerce Layer](/assets/header.png#gh-light-mode-only)
![Contentstack Commerce by Commerce Layer](/assets/header-dark.png#gh-dark-mode-only)

> Elevate your Contentstack experience with ecommerce capabilities powered by Commerce Layer.

## Introduction

**Contentstack Commerce by Commerce Layer** empowers teams to seamlessly manage their product catalogs within Contentstack, facilitating a smooth integration with the headless commerce capabilities of Commerce Layer. This approach decouples the product catalog from the commerce engine, enabling unparalleled flexibility and efficiency in content management.

## Features

- **Product Catalog Creation**: Simplifies the setup of a comprehensive content model for managing ecommerce products within Contentstack.
- **Customizable Schema**: Offers the ability to tailor content types for products, variants, taxonomies, and taxons to meet specific needs.
- **Seamless Integration**: Leverages the power of headless commerce by facilitating a connection between Contentstack and Commerce Layer.
- **Efficient Content Management**: Enhances productivity with streamlined workflows for ecommerce content management.

## Getting Started

To use this script, you'll first need to clone the repository or copy the necessary files into your project:

```bash
# https
git clone https://github.com/commercelayer/contentstack-commerce.git

# ssh
git clone git@github.com:commercelayer/contentstack-commerce.git
```

Navigate into the project directory and install your dependencies (using `npm`, `pnpm`, or `yarn`).

```bash
cd contentstack-commerce && pnpm i
```

## Usage

Before running the migration script, copy the `.env.example` file into an `.env` file and ensure the `CONTENTSTACK_API_KEY` environment variable is set with your Contentstack API Key.

Then use the `login` command to authenticate with Contentstack:

```bash
pnpm run login
# Follow the prompt instructions.
```

Once you're authenticated and the environment variable is set, execute the script to import the content types into Contentstack:

```bash
pnpm run migrate
```

This will initiate the process to create the product catalog content model within your Contentstack account.

## Core Concepts

- Catalog: A catalog is a collection of products, often tailored for different markets or seasons. It acts as a container for your product offerings, allowing for organization and easy management within a specific context.
- Taxonomy: A taxonomy is a hierarchical system for classifying and organizing content. It is used to group products into broad categories, such as 'Clothing' or 'Electronics', which can then be broken down into more specific subcategories.
- Taxon: A taxon is an individual category within a taxonomy. Taxons can be nested, allowing you to create a detailed structure for product classification.
- Product: A product represents an individual item for sale. It is the core of your ecommerce catalog and can be associated with multiple variants.
- Variant: A variant is a specific version of a product, which might differ in size, color, or other attributes. Each variant is a unique combination of these attributes and is typically associated with a unique SKU.

## Relationships and Hierarchy

- Products are linked to Variants, which define the different purchasable versions of a product.
- Taxonomies organize Taxons into a hierarchical structure, providing a framework for - categorizing products.
- Catalogs group products and their related taxonomies to present a curated collection to the end-user.

### Configuration Options

The data sits within the `data` folder, which you can edit to change the name of the Product, as well as the rest of your content types. You can also run your edits directly in Contentstack after the script has imported the content types.

## Develop & Test

This script and its associated data are designed to be used with the Contentstack CLI. For development and testing, it's recommended to work in a non-production environment within Contentstack to ensure that your content model aligns with your ecommerce strategy.

## License

This project is released under the MIT License. For more details, see the LICENSE file included with the project.
