"use client";

import { CovalentClient } from "@covalenthq/client-sdk";
import { CopyAll } from "@mui/icons-material";
import { Alert, AlertColor, AlertProps, Box, Button, IconButton, Modal, Snackbar, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import localFont from "next/font/local";
import Image from "next/image";
import * as React from "react";
import Countdown from "./Countdown";
import { address } from "./constants";
import {HelioCheckout} from '@heliofi/checkout-react'

const ApiServices = async (chain:any, address:string) => {
  const client = new CovalentClient("cqt_rQ6pkkxtcphMdDDvMkkxtCVG3tXg");
  const resp = await client.BalanceService.getTokenBalancesForWalletAddress(
    chain,
    address,
    { quoteCurrency: "USD" },
  );
  console.log(resp.data)
  let total = 0;
  for (let x = 0; x < resp.data.items.length; x++) {
    total += parseFloat(resp.data.items[x].pretty_quote.substring(1));
  }
  return total;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const aubette = localFont({ src: "/fonts/aubette.woff2" });
const bricksans = localFont({ src: "/fonts/bricksans.woff2" });
const ambitsek = localFont({ src: "/fonts/ambitsek.woff2" });
const marykate = localFont({ src: "/fonts/marykate.woff2" });
const rubikMarkerHatch = localFont({ src: "/fonts/RubikMarkerHatch.woff2" });
const vt = localFont({src: "/fonts/vt.woff2"})

export default function Hero() {
  const [balance, setBalance] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState<{type:AlertColor;message:string}>({type:"success", message:""});
   const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    (async () => {
      try{
        let ftm = await ApiServices("fantom-mainnet","0x54F94eE80219f2BC014007928fB713150ed6FC14");
        let solana = await ApiServices("solana-mainnet", "3YXBujjAdVFqMgNxHLUS7dmuAh7VXAfuSVWs9YQ9LcBw");
        setBalance(ftm + solana);
      } catch(e) {
        console.log(e)
        setMessage({type:"error", message:`${e} Unknown error occured!`});
        setOpen(true);
      }
   
    })();
  }, []);

  const reduceAddress = (address:string) =>  {
    return address.substring(0,3) + "..." + address.substring(address.length-3,address.length+1)
  }
  const handleSubmit = () => {
   
  };

  return (
    <Grid
      container
      component="main"
      sx={{ minHeight: { md: "100vh", xs: "100vh" } }}
    >
      <Grid
        item
        sx={{ display: { md: "block", xs: "none" } }}
        xs={false}
        sm={6}
      >
             
        <Image
          src="/images/halo.png"
          style={{ position: "fixed", top: "0vh", left: "0px" }}
          width={800}
          height={800}
          alt="Halo"
        />
        <Image
          src="/images/hearo.png"
          style={{ position: "fixed", top: "15vh", left: "0px" }}
          width={1000}
          height={1000}
          alt="B"
        />
      </Grid>
      <Grid
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
          sx={{ fontSize: "32px", marginTop: "20px" }}
          className={aubette.className}
        >
          <Countdown targetDate={new Date("2024-05-12T13:02:00")}/>
        </Typography>
        <Typography
          sx={{ fontSize: "75px", color: "white" }}
          className={vt.className}
        >
          ${balance.toFixed(2).padEnd(4, '0')}
        </Typography>
        <Typography
          sx={{ fontSize: "30px", marginBottom: "20px", marginTop:"-10px", color: "black" , fontWeight:900}}
          className={ambitsek.className}
        >
          already raised
        </Typography>
        <br />
         <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
             <HelioCheckout config={{
    paylinkId: "663df9ccbcab89f49f956026"
}} />
        </Box>
      </Modal>
      
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
          onClick={() => handleModalOpen()}
        >
          <span style={{ fontSize: "20px" }} className={aubette.className}>
            JOIN PRESALE
          </span>
        </Button>
        <Typography
          sx={{
            fontSize: "12px",
            marginY: "10px",
            color: "black",
            backgroundColor: "#D2F8C6",
            borderRadius: "20px",
            padding: "10px",
          }}
          className={ambitsek.className}
        >
          PRESALE WALLET: {reduceAddress(address)} <IconButton onClick={async() => {
            await navigator.clipboard.writeText(address);
            setMessage({type:"success", message:"Successfully added to clipboard!"});
            setOpen(true);
          }}><CopyAll /></IconButton>
        </Typography>
        <Typography
          sx={{ marginY: "10px", fontSize: "32px", color: "#F76C1B" }}
          className={rubikMarkerHatch.className}
        >
          POWERED BY
        </Typography>
        <br />
        <Image
          src="/images/helio.png"
          style={{marginTop:"-20px"}}
          width={100}
          height={100}
          alt="helio"
        />
      </Grid>
      <Grid
        sx={{ display: { md: "none", xs: "block" } }}
        item
        xs={12}
        sm={false}
      >
        <Image
          src="/images/halo.png"
          style={{ position: "fixed", bottom: "0vh", left: "0px" }}
          width={300}
          height={300}
          alt="Halo"
        />
        <Image
          src="/images/hearo.png"
          style={{ position: "fixed", bottom: "0vh", right: "0px" }}
          width={1500}
          height={1500}
          alt="B"
        />
      </Grid>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.type} sx={{ width: "100%" }}>
          {message.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
