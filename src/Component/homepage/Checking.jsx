import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import hmcs from "./Home.module.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dashboard from "../dashboard/Dashboard";
const Checking = () => {
  const [data, setdata] = useState({
    value: "",
    checks:false
  });

  const click=(e) =>
  {
    if (data.value.length === 10)
    {
      setdata((old_data) =>
      {
        old_data.checks=true
        return {...old_data}
      })
    }
  }
  
  const change = (e) => {
    setdata((old_data) =>
    {
      old_data.value=e.target.value
      return {...old_data}
    })
    
  };
  useEffect(() => {},[]);
  return (
    <>
      {data.checks ? <Dashboard setd={setdata} datas={data} />:<></>}
      <main className={hmcs.checking_main}>
        <section className={hmcs.text_field_section}>
          <Box
            className={hmcs.text_box}
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            validate="true"
            autoComplete="off"
          >
            <TextField
              className={hmcs.text_field}
              id="standard-search"
              label="Enter Mobile Number"
              type="number"
              focused
              color="success"
              variant="standard"
              value={data.value}
              onChange={change}
              placeholder="89693xxxxx"
              
            />
          </Box>
        </section>

        <section className={hmcs.desc_login_button}>
          <div className={hmcs.term_condition}>
            By continuing this, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </div>
          <Stack direction="row" spacing={4}>
            <Button
              className={hmcs.buttons}
              variant="contained"
              color="secondary"
              onClick={click}
            >
              Request Otp
            </Button>
          </Stack>
        </section>
      </main>
    </>
  );
};

export default Checking;
