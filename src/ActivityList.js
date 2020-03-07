import React from 'react';
import { activities } from './store';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import Cooking from "@material-ui/icons/Fastfood";
import Education from "@material-ui/icons/LocalLibrary";
import Music from "@material-ui/icons/MusicNote";
import Social from "@material-ui/icons/Group";
import Relaxation from "@material-ui/icons/Spa";
import Recreational from "@material-ui/icons/SportsSoccer";
import Charity from "@material-ui/icons/LocalHospital";
import Busywork from "@material-ui/icons/Work";
import Diy from "@material-ui/icons/Toys";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


// function App() {
  class ActivityList extends React.Component {
    constructor() {
      super();
      this.state = {
        activities: [],
        isLoading: true
      };
    }

    componentDidMount = () => {
      activities.orderBy("key", "asc").onSnapshot(querySnapshot => {
        const activities = [];
        console.log(querySnapshot.size);
        querySnapshot.forEach(doc => {
          const singleActivity = doc.data();
          singleActivity.activityId = doc.id;
          activities.push(singleActivity);
        });
        this.setState({ activities, isLoading: false });
      });
    };
    
    fetch = () => {
      // console.log(this.state.activities);
      const activitiess = this.state.activities;
  const raw = "http://www.boredapi.com/api/activity";
  const rec = "http://www.boredapi.com/api/activity?type=busywork";
  setInterval(function() {
    axios
      .get(rec)
      .then(function(response) {
        // handle success
        console.log(response);
        if (activitiess.some(activity => activity.key === response.data.key)) {
          console.log("Object found inside the array.");
        } else {
          activities
            .add(response.data)
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
          console.log("Object not found.");
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, 2000);
}

    deleteActivity = (docId) => {
      activities
        .doc(`${docId}`)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }

    render() {
      return (
        <div style={{ padding: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              justifyContent: "space-around"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                flex: 1,
                padding: "20px"
              }}
            >
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Social />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Social
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Busywork />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Busywork
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Recreational />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Recreational
                </Typography>
              </Paper>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                flex: 1,
                padding: "20px"
              }}
            >
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Diy />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Diy
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Charity />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Charity
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Cooking />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Cooking
                </Typography>
              </Paper>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                flex: 1,
                padding: "20px"
              }}
            >
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Education />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Education
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Relaxation />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Relaxation
                </Typography>
              </Paper>
              <Paper
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Avatar>
                  <Music />
                </Avatar>
                <Typography variant="h5" component="h3">
                  Music
                </Typography>
              </Paper>
            </div>
          </div>
          {/* <Paper style={{ height: "20vh", width: "90vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
            color={"#fd9644"}
              onClick={e => {
                e.preventDefault();
                this.fetch();
              }}
            >
              Fetch{" "}
            </Button>
          </Paper> */}
          {this.state.isLoading === true ? null : (
            <List>
              {this.state.activities.map(activity => (
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "white" }}>
                      {activity.type === "social" ? (
                        <Social style={{ color: "#fd9644" }} />
                      ) : activity.type === "busywork" ? (
                        <Busywork style={{ color: "#fc5c65" }} />
                      ) : activity.type === "recreational" ? (
                        <Recreational style={{ color: "#45aaf2" }} />
                      ) : activity.type === "charity" ? (
                        <Charity style={{ color: "#20bf6b" }} />
                      ) : activity.type === "cooking" ? (
                        <Cooking style={{ color: "#f7b731" }} />
                      ) : activity.type === "education" ? (
                        <Education style={{ color: "#a55eea" }} />
                      ) : activity.type === "relaxation" ? (
                        <Relaxation style={{ color: "#535c68" }} />
                      ) : activity.type === "music" ? (
                        <Music style={{ color: "#833471" }} />
                      ) : (
                        <Diy style={{ color: "#0652DD" }} />
                      )}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.key}
                    secondary={activity.activity}
                  />
                  {/* <ListItemSecondaryAction>
                    <IconButton
                      onClick={e => {
                        e.preventDefault();
                        this.deleteActivity(activity.activityId);
                      }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      );
    }
  }

export default ActivityList;
