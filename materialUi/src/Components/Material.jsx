/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, TextField, Dialog } from "@mui/material";
import Image from "../Img/Image.jpg";
import Box from "@mui/material/Box";

export const Material = () => {
  const [person, setPerson] = useState({
    name: "",
    family: "",
    gmail: "",
    age: "",
  });
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [follow,setFollow]=useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleNameChange = (event) => {
    setPerson({ ...person, name: event.target.value });
  };
  const handleAgeChange = (event) => {
    setPerson({ ...person, age: event.target.value });
  };
  const handleFamiliChange = (event) => {
    setPerson({ ...person, family: event.target.value });
  };
  const handleMore = () => {
    setMore(true);
  };
  const handlFollow=()=>{
setFollow(true);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6">
            <Card sx={{ maxWidth: 305 }}>
              <img src={Image} className="img-fluid max-h-48" alt="reza" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Seyed Reza Zabihi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I am learning Formwork React with dear professor Elesti
                </Typography>
              </CardContent>
              <CardActions>
               
              </CardActions>
            </Card>
             <Button onClick={handlFollow} size="small">Follow</Button>
            <Button
            
              className="btn border  btn-outline-white"
              size="small"
            >
              Share
            </Button>
            <Button   onClick={handleMore} className="btn border  btn-outline-white" size="small">
              Learn More
            </Button>
          </div>

          <div className="col-6 col-md-6">
            <TextField
              className="d-block mt-3"
              onChange={handleNameChange}
              label="first name"
              color="secondary"
              variant="filled"
            />
          
            <TextField
              onChange={handleFamiliChange}
              className="d-block mt-3"
              // helperText="Please enter your Famili"
              id="demo-helper-text-aligned"
              label="Last Name"
              color="secondary"
            />
  <TextField
              className="d-block mt-3"
              onChange={handleAgeChange}
              type="number"
              color="secondary"
              label="age"
            />
            <TextField
              label="Gmail"
              color="secondary"
              className="d-block mt-3"
            />
            <Button onClick={handleClick} className="d-block mt-2" color="secondary">
              submit
            </Button>

            <Dialog
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            > 
            <p className="text-danger">
                {" "}
                thank you {person.name} {person.family} we will contact you
              </p>
            </Dialog>

              <Dialog
                open={more}
                onClose={() => {
                  setMore(false);
                }}
              >
                 <p className="text-danger">
                hi more information...
           
              </p>
            
              </Dialog>
              <Dialog
                open={follow}
                onClose={() => {
                  setFollow(false);
                }}
              >
                 <p className="text-danger">
              thanks follow
           
              </p>
            
              </Dialog>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
