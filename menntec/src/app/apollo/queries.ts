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
    }
  }
`;
