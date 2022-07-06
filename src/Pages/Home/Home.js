import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";
import Axios from 'axios';
import validator from 'validator'

const Home = ({ name, setName, fetchQuestions }) => {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name || !gender || !email) {
      setError(true);
      return;
    }
    // Fetching category and difficulty from API 
    else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");

      Axios.post('http://localhost:5000/create', {
        name: name,
        category: category,
        difficulty: difficulty,
        gender: gender,
        email: email
      }).then(() => {
        console.log("success fully data inserted");
      })
    }
  };
  // email validator
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmail(email)
    } else {
      setEmail(error)
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Detailed Form</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            required
            style={{ marginBottom: 20 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            style={{ marginBottom: 20 }}
            label="Enter Your Gender"
            variant="outlined"
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            required
            style={{ marginBottom: 20 }}
            label="Enter Valid Email"
            variant="outlined"
            onChange={(e) => { validateEmail(e) }}
            error={error.email ? true : false}
            helperText={error.email}
          />
          <TextField
            select
            required
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 25 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            required
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 25 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz1.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
