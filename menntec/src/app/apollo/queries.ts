import gql from 'graphql-tag';

export const HOMEPAGE_DATA_QUERY = gql`
  query Homepage {
    homepage {
      heroText
      descriptionText
    }
  }
`;

export const CONTACTS_QUERY = gql`
  query Contacts {
    contacts {
      firstName
      lastName
      title
      xing
      email
      image {
        name
        url
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query Services {
    services {
      name
      description
      image {
        name
        url
      }
    }
  }
`;

export const IMPRINT_QUERY = gql`
  query Imprint {
    imprint {
      title
      imprintText
      heroTitle
    }
  }
`;
