export const search = (array, term) => {
  const results = array.filter((element) => {
    if (
      element.node.title.toString().toLowerCase().includes(term.toLowerCase())
    ) {
      return element;
    }
  });

  return results;
}

export const storefront = async (query, variables = {}) => {
    const response = await fetch('https://rancho-guadalupe.myshopify.com/api/2022-07/graphql.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': '241f079cf803c3eb93f486b84de1668c'
        },
        body: JSON.stringify({ query, variables })
    })

    const result = await response.json();
    
    return result;
}

const gql = String.raw;

// Consultas
export const productsQuery = gql`
query Products($first: Int!) {
  products(first: $first) {
    edges {
      node {
        title
        handle
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first:1) {
          edges {
            node {
              transformedSrc 
              altText
            }
          }
        }
        variants(first: 1) {
            nodes {
              id
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
      }
    }
  }
}
`;

export const productQuery = gql`
  fragment MediaFields on Media {
    mediaContentType
    alt
    previewImage {
      url
    }
    ... on MediaImage {
      id
      image {
        url
        width
        height
      }
    }
    ... on Video {
      id
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      sources {
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
    }
  }
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      vendor
      description
      descriptionHtml
      media(first: 7) {
        nodes {
          ...MediaFields
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;

export const collectionQuery = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 8) {
        nodes {
          id
          title
          vendor
          productType
          description
          publishedAt
          handle
          variants(first: 3) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

export const collectionsQuery = gql`
  query Collections($first: Int!)
  {
    collections(first: 2) {
      edges {
        node {
          id
          products(first: 5) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
` 
