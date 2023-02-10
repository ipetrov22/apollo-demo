import fetch from 'node-fetch';
export type Variables = { [prop: string]: any } | void | undefined;

export function fetchQuery(endpoint: string, query: string, variables?: Variables) {
  return fetch('https://www.learnwithjason.dev/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query GetLearnWithJasonEpisodes($now: DateTime!) {
            allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
              date
              title
              guest {
                name
                twitter
              }
              description
            }
          }
        `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  }).then((res) => res.json());
}
