import { Container, Paper, Card, CardHeader, CardMedia, CardContent, CardActionArea, Divider, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Discussion from './Discussion'
import '../assets/scss/product.scss'

const API_URL = "http://localhost:3000"
const longer_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export default function CardXL({product, maker, tags, key, votes}) {
  return (
    <Grid container spacing={10} style={{ padding: 24 }}>

        <Grid item className="product-grid-item" xs={8}>

          <Typography className="product_name" component="h4" variant="h4">{product.attributes.name}</Typography>
          <Typography className="headline" component="h6" variant="body2" text="secondary">{product.attributes.description}</Typography>
          {tags.map( tag => <Typography variant="subtitle2" color="textSecondary" className="tag">{tag}</Typography>)}
          <Button variant="outlined" size="small"><Typography variant="subtitle2" color="textSecondary">Added on {product.attributes.added}</Typography></Button>
          <Card className="image-card">
            <CardContent>
              <img src={`${API_URL}/product5.jpg`} />
              <Typography className="longer-description">
                {longer_description}
              </Typography>
            </CardContent>
          </Card>

        </Grid>

        <Grid id="product-details" item xs={4} style={{paddingTop: '12%'}}>

          <Button className="votes-button" variant="contained" color="secondary" size="large" style={{ marginBottom: '5%'}}>
            <ArrowDropUpIcon />
            Upvote
            <Typography className="votes" variant="subtitle2">{votes}</Typography>
          </Button>

          <Card style={{ marginBottom: '5%', marginTop: '3%' }}>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="image" src={`${API_URL}/product5.jpg`} />
                </ListItemAvatar>
                <ListItemText
                  primary="Website"
                  secondary="https://www.example.com"
                />
              </ListItem>
            </List>

          </Card>

          <Card>
            <CardContent>

              <List id={key}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="maker" src={`${API_URL}/product2.jpg`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={maker.name}
                    secondary={maker.email}
                  />
                </ListItem>
              </List>

            </CardContent>
          </Card>

        </Grid>
        <Grid container spacing={10} style={{ padding: 24 }}>
          <Grid item xs={8}>
            <Discussion />
          </Grid>
        </Grid>
        <style jsx>{`
          #product-details {
            padding-top: 10%;
          }
        `}</style>
    </Grid>

  )
};