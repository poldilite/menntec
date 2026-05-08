import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { createMockLink } from './apollo/mock-link';

const uri = 'https://menntec.blueberrymedia.de/graphql';
const USE_MOCK_DATA = true; // Set to false to use real API

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  let link: ApolloLink;

  if (USE_MOCK_DATA) {
    link = createMockLink().concat(httpLink.create({ uri }));
  } else {
    link = httpLink.create({ uri });
  }

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
