export const HASHNODE_API_ENDPOINT = 'https://api.hashnode.com';
export const HASHNODE_URL = 'https://rahulborah.hashnode.dev/';

export const headerSections = [
  { name: 'Blog' },
  //  { name: 'About' }
];

export const queries = {
  RECENT:
    'query { user(username:"rahulborah") { publication { posts(page:0) { _id title brief slug coverImage dateAdded } } } }',
};
