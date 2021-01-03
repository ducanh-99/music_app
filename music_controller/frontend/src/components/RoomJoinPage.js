import React, { Component } from "react";
import {
  Button,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";
import Link from "react-router-dom";

export default class RoomJoinPage extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              create room
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <FormControl component="fieldset">
              <FormHelperText>
                <div align="center">guest control</div>
              </FormHelperText>
              <RadioGroup row defaultValue="true">
                <FormControlLabel
                  value="true"
                  control={<Radio color="primary" />}
                  label="Play/Pause"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio color="primary" />}
                  label="No Control"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
            <FormControl>
              <TextField
                required={true}
                type="number"
                defaultValue={this.defaultVotes}
                inputProps={{
                  min: 1,
                  style: { textAlign: "center" },
                }}
              />
              <FormHelperText align="center">Vote</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </>
    );
  }
}
