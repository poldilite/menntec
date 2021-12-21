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

export const DATASEC_QUERY = gql`
  query DataPrivacy {
    dataPrivacy {
      title
      dataPrivacyText
      heroTitle
    }
  }
`;

export const JOBADS_QUERY = gql`
  query JobAdPage {
    jobAdPage {
      pageInfo {
        heroTitle
        heroText
      }
      jobAdRelation {
        job_ads {
          id
          jobTitle
          jobTitleSubtext
          bannerText1
          bannerText2
          jobSpecs {
            jobTasks {
              text
            }
            jobBenefits {
              text
            }
            jobPrerequisites {
              text
            }
          }
        }
        contact {
          firstName
          lastName
          email
          phone
        }
      }
    }
  }
`;

export const INQUIRIES_MUTATION = gql`
  mutation Inquiries(
    $firstName: String!
    $lastName: String!
    $phone: String
    $email: String!
    $message: String!
  ) {
    createIquiry(
      input: {
        data: {
          firstName: $firstName
          lastName: $lastName
          phone: $phone
          email: $email
          inquiryText: $message
        }
      }
    ) {
      iquiry {
        firstName
        lastName
        phone
        email
        inquiryText
      }
    }
  }
`;
