import { Alert, AlertTitle } from '@material-ui/lab';
import { Box, Grid, Typography } from '@material-ui/core';
import { HASHNODE_API_ENDPOINT, queries } from '../constants';
import { useEffect, useState } from 'react';

import BlogPost from '../components/Blogpost';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  async function getRecentBlogs() {
    setError(null);
    await fetch(HASHNODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queries.RECENT,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setPosts(response?.data?.user?.publication?.posts);
      })
      .catch(() => {
        setError(true);
      });
  }

  useEffect(() => {
    getRecentBlogs();
  }, []);

  if (error || !posts) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Oops — <strong>Getting recent blogs failed!</strong>
      </Alert>
    );
  }

  return (
    <Box>
      <Typography variant="h5">Recent Posts</Typography>
      <br />
      {posts && posts.length > 0 ? (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <BlogPost post={post} key={post._id} />
          ))}
        </Grid>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
}
