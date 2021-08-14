import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { HASHNODE_URL } from '../constants';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 250,
  },
});

export default function BlogPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.dateAdded}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.brief}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              component="a"
              href={`${HASHNODE_URL}${post.slug}`}
            >
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.coverImage}
            title={post.title}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

BlogPost.propTypes = {
  post: PropTypes.object,
};
