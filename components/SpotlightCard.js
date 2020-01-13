import React from 'react';
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { LoremIpsum } from 'react-lorem-ipsum';
import '../assets/scss/spotlight.scss'

class SpotlightContainer extends React.Component {

  render() {
    return(
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          <Grid item xs={12} sm={8}>
            <img className="spotlight-image" alt="spotlight" src="http://localhost:3000/product2.jpg"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="spotlight-card">
              <CardContent>
                <Typography variant="h4">PRODUCT OF THE WEEK</Typography>
                <Typography align="justify" className="spotlight-text"><LoremIpsum avgSentencesPerParagraph={3}></LoremIpsum></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default SpotlightContainer;