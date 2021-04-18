import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  Grid, 
  Typography } from '@material-ui/core';

import { PublicationService } from '../services/Publication.service';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardContent: {
      flexGrow: 1,
    },
  }),
);

const Home = () => {
  const classes = useStyles();
  const cards = PublicationService.getPublications()
  return (
    <div className={classes.cardGrid}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                title={card.title}
                titleTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  {card.content}
                </Typography>
              </CardContent>
              <CardActions>
                  <Button fullWidth variant='outlined' color="primary">
                    Access
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;