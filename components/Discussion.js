import { Paper, Card, CardContent, CardActions, Container, Divider, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

export default function Discussion() {
  return (
    <Card>
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="avatar" src="https://picsum.photos/200/200" />
            </ListItemAvatar>
            <ListItemText
            primary="John Doe"
            secondary="This is a great tool"
          />
          </ListItem>

           <ListItem>
            <ListItemText secondary="10 hours ago" />
          </ListItem>
        </List>
        <List>

        </List>
      </CardContent>
    </Card>
  )
};