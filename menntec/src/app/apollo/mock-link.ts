import { ApolloLink, Observable, Operation } from '@apollo/client/core';
import {
  MOCK_HOMEPAGE_DATA,
  MOCK_CONTACTS_DATA,
  MOCK_PRODUCTS_DATA,
  MOCK_IMPRINT_DATA,
  MOCK_DATASEC_DATA,
  MOCK_JOBADS_DATA,
} from './mock-data';

const MOCK_DATA_MAP: { [key: string]: any } = {
  Homepage: { data: MOCK_HOMEPAGE_DATA },
  Contacts: { data: MOCK_CONTACTS_DATA },
  Services: { data: MOCK_PRODUCTS_DATA },
  Imprint: { data: MOCK_IMPRINT_DATA },
  DataPrivacy: { data: MOCK_DATASEC_DATA },
  JobAdPage: { data: MOCK_JOBADS_DATA },
};

export const createMockLink = () => {
  return new ApolloLink((operation: Operation, forward) => {
    const operationName = operation.operationName;

    if (MOCK_DATA_MAP[operationName]) {
      return new Observable((observer) => {
        setTimeout(() => {
          observer.next(MOCK_DATA_MAP[operationName]);
          observer.complete();
        }, 300);
      });
    }

    return forward(operation);
  });
};
