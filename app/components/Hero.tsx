"use client";

import { CopyAll } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import localFont from "next/font/local";

const aubette = localFont({ src: "/fonts/aubette.woff2" });
const bricksans = localFont({ src: "/fonts/bricksans.woff2" });
const ambitsek = localFont({ src: "/fonts/ambitsek.woff2" });
const marykate = localFont({ src: "/fonts/marykate.woff2" });
const rubikMarkerHatch = localFont({ src: "/fonts/RubikMarkerHatch.woff2" });

export default function Hero() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid
      container
      component="main"
      sx={{ minHeight: { md: "100vh", xs: "150vh" } }}
    >
      <Grid
        item
        sx={{ display: { md: "block", xs: "none" } }}
        xs={false}
        sm={6}
      >
        <Image
          src="/images/halo.png"
          style={{ position: "absolute", bottom: "0px", left: "0px" }}
          width={600}
          height={600}
          alt="Halo"
        />
        <Image
          src="/images/bforbear.png"
          style={{ position: "absolute", top: "0px", left: "50px" }}
          width={250}
          height={250}
          alt="B"
        />
        <Image
          src="/images/bears-1.png"
          style={{ position: "absolute", bottom: "0px", left: "0px" }}
          width={500}
          height={500}
          alt="Bears"
        />
        <Image
          src="/images/title.png"
          style={{ position: "absolute", bottom: "0px", left: "10px" }}
          width={600}
          height={500}
          alt="Title"
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centers horizontally
          textAlign: "center", // ensures text inside items is also centered
          zIndex: 1,
        }}
      >
        <Typography
          sx={{ fontSize: "18px", marginTop: "20px" }}
          className={aubette.className}
        >
          23:59:59 LEFT
        </Typography>
        <Typography
          sx={{ fontSize: "78px", marginTop: "15px", color: "white" }}
          className={bricksans.className}
        >
          5,760.2 SOL
        </Typography>
        <Typography
          sx={{ fontSize: "20px", marginY: "10px", color: "black" }}
          className={ambitsek.className}
        >
          already raised
        </Typography>
        <TextField
          className={aubette.className}
          sx={{
            "& .MuiInputBase-input": {
              textAlign: "center",
              backgroundColor: "white",
              color: "grey",
              height: "20px",
              padding: "5px 14px",
              fontSize: "0.875rem",
            },
            "& .MuiInputBase-root": {
              height: "30px",
              margin: 0,
              width: "auto",
            },
            width: "50%",
            margin: "0px",
          }}
          placeholder="Amount"
        />
        <br />
        <Button
          sx={{
            textTransform: "capitalize",
            borderRadius: "20px",
            marginY: "15px",
            backgroundColor: "#C1FF72",
            borderColor: "#C1FF72",
            color: "black",
            "&:hover": {
              backgroundColor: "#AEE667",
              borderColor: "#AEE667",
            },
          }}
          size="large"
        >
          <span style={{ fontSize: "20px" }} className={aubette.className}>
            JOIN PRESALE
          </span>
        </Button>
        <Typography
          sx={{ fontSize: "15px", marginY: "10px", color: "black", backgroundColor:"#D2F8C6", borderRadius:"20px", padding:"10px" }}
          className={ambitsek.className}
        >
          PRESALE WALLET: 5GmZ...9gDV <CopyAll />
        </Typography>
        <Typography
          sx={{  marginY: "10px", fontSize: "32px", color: "#F76C1B" }}
          className={rubikMarkerHatch.className}
        >
          POWERED BY
        </Typography>
        <br />
        <Image style={{ marginTop: "10px"}} src="/images/helio.png" width={100} height={100} alt="helio" />
      </Grid>
      <Grid
        sx={{ display: { md: "none", xs: "block" } }}
        item
        xs={12}
        sm={false}
      >
        <Image
          src="/images/halo.png"
          style={{ position: "absolute", bottom: "-50vh", left: "0px" }}
          width={400}
          height={400}
          alt="Halo"
        />
        <Image
          src="/images/bforbear.png"
          style={{ position: "absolute", bottom: "-46vh", right: "10px" }}
          width={150}
          height={150}
          alt="B"
        />
        <Image
          src="/images/bears-1.png"
          style={{ position: "absolute", bottom: "-50vh", left: "0px" }}
          width={300}
          height={300}
          alt="Bears"
        />
        <Image
          src="/images/title.png"
          style={{ position: "absolute", bottom: "-50vh", left: "10px" }}
          width={400}
          height={400}
          alt="Title"
        />
      </Grid>
    </Grid>
  );
}
