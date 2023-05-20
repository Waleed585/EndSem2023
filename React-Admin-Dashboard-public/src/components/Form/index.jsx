import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    numberOfQuestions: 5,
    questionType: "mcq",
    difficultyLevel: "medium",
  });

  return (
    <>
      <Typography variant="h3">Test Specifications</Typography>
      <Stack
        sx={{
          padding: "50px",
          bgcolor: "white",
          borderRadius: "12px",
          margin: "10px",
        }}
      >
        <TextField
          fullWidth
          value={state.numberOfQuestions}
          type="number"
          label="Number of questions"
          variant="filled"
          inputProps={{
            max: "10",
            min: "5",
          }}
          onChange={(e) =>
            setState({ ...state, numberOfQuestions: e.target.value })
          }
        />
        <br />
        <FormControl>
          <FormLabel id="question-type">
            Question Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="question-type"
            name="row-radio-buttons-group"
            onChange={e => setState({...state, questionType: e.target.value})}
          >
            <FormControlLabel
              value="mcq"
              checked={state.questionType==='mcq'}
              control={<Radio />}
              label="MCQ"
            />
            <FormControlLabel
              checked={state.questionType==='coding'}
              value="coding"
              control={<Radio />}
              label="Coding"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Difficulty Level</FormLabel>
          <RadioGroup row onChange={e=> setState({...state, difficultyLevel: e.target.value})}>
            <FormControlLabel
              value="easy"
              checked={state.difficultyLevel === 'easy'}
              control={<Radio name="easy" />}
              label="Easy"
            />
            <FormControlLabel
              checked={state.difficultyLevel === 'medium'}
              value="medium"
              control={<Radio name="medium" />}
              label="Medium"
            />
            <FormControlLabel
              checked={state.difficultyLevel === 'hard'}
              value="hard"
              control={<Radio name="hard" />}
              label="Hard"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" color="warning" onClick={()=> alert("Saving to db")}>
          Save
        </Button>
      </Stack>
    </>
  );
}
