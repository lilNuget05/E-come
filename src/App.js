import "./styles.css";
import * as React from "react";
import CompProdukti from "./CompProdukti";
import Button from "@mui/material/Button";
import Header from "./Header/Header";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export default function App() {
  const [apgerbs, setapgerbs] = useState(true);
  const [sports, setsports] = useState(true);
  const [kurpes, setkurpes] = useState(true);
  const [aksesuari, setaksesuari] = useState(true);

  function showAll() {
    setapgerbs(true);
    setaksesuari(true);
    setkurpes(true);
    setsports(true);
  }
  function showClothes() {
    setapgerbs(true);
    setaksesuari(false);
    setkurpes(false);
    setsports(false);
  }
  function showSport() {
    setapgerbs(false);
    setaksesuari(false);
    setkurpes(false);
    setsports(true);
  }
  function showShoes() {
    setapgerbs(false);
    setaksesuari(false);
    setkurpes(true);
    setsports(false);
  }
  function showAksesuari() {
    setapgerbs(false);
    setaksesuari(true);
    setkurpes(false);
    setsports(false);
  }
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const [sliderValue1, setsliderValue1] = React.useState([0, 130]);
  const handleChangeSlider1 = (event, newValue) => {
    setsliderValue1(newValue);
  };
  const [sliderValue2, setsliderValue2] = React.useState([0, 130]);
  const handleChangeSlider2 = (event, newValue) => {
    setsliderValue2(newValue);
  };
  const [checked1, setChecked1] = useState(true);
  const handleChangeCheck1 = (event) => {
    setChecked1(event.target.checked);
  };

  return (
    <>
      <div>
        <Header />

        <div className="content-grid">
          <div className="Category-content-style">
            <Button className="category-button-style" onClick={showAll}>
              Viss
            </Button>
            <Button className="category-button-style" onClick={showClothes}>
              Apģērbs {String(apgerbs)}
            </Button>
            <Button className="category-button-style" onClick={showSport}>
              Sports {String(sports)}
            </Button>
            <Button className="category-button-style" onClick={showShoes}>
              Kurpes {String(kurpes)}
            </Button>
            <Button className="category-button-style" onClick={showAksesuari}>
              Aksesuāri {String(aksesuari)}
            </Button>
          </div>
          <div>
            <div className="button-grid">
              <div className="button-style-1">
                <Button
                  className="button-style-3"
                  variant="contained"
                  onClick={handleOpen1}
                >
                  Izmērs
                </Button>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 className="modal-Price-style" id="parent-modal-title">
                      Izmērs
                    </h2>
                    <p id="parent-modal-description">izmēra filtrs</p>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={sliderValue1}
                      onChange={handleChangeSlider1}
                      valueLabelDisplay="auto"
                      max={50}
                      min={1}
                    />
                    <Button variant="contained" onClick={handleClose1}>
                      Done
                    </Button>
                  </Box>
                </Modal>
                <Button
                  className="button-style-3"
                  variant="contained"
                  onClick={handleOpen2}
                >
                  Krāsa
                </Button>
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 className="modal-Price-style" id="parent-modal-title">
                      Krāsa
                    </h2>
                    <p id="parent-modal-description">krasas filtrs</p>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Melns"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Balts"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Pelēks"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Zils"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Zaļš"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Sarkans"
                        checked={checked1}
                        onChange={handleChangeCheck1}
                      />
                    </FormGroup>
                    <Button variant="contained" onClick={handleClose2}>
                      Done
                    </Button>
                  </Box>
                </Modal>
                <Button
                  className="button-style-3"
                  variant="contained"
                  onClick={handleOpen3}
                >
                  Zīmols
                </Button>
                <Modal
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 className="modal-Price-style" id="parent-modal-title">
                      Zīmols
                    </h2>
                    <p id="parent-modal-description">zimola filtrs</p>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Nike"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Addidas"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Gucci"
                      />
                    </FormGroup>
                    <Button variant="contained" onClick={handleClose3}>
                      Done
                    </Button>
                  </Box>
                </Modal>
                <Button
                  className="button-style-3"
                  variant="contained"
                  onClick={handleOpen4}
                >
                  Cena
                </Button>
                <Modal
                  open={open4}
                  onClose={handleClose4}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 className="modal-Price-style" id="parent-modal-title">
                      Cena
                    </h2>
                    <p id="parent-modal-description">cenas filtrs</p>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={sliderValue2}
                      onChange={handleChangeSlider2}
                      valueLabelDisplay="auto"
                      max={999}
                    />
                    <Button variant="contained" onClick={handleClose4}>
                      Done
                    </Button>
                  </Box>
                </Modal>
              </div>
              <div className="button-style-2">
                <Button className="button-style-4" variant="contained">
                  Kārtot
                </Button>
                <Button className="button-style-4" variant="contained">
                  Grozs
                </Button>
              </div>
            </div>
            <div>
              <CompProdukti
                data={{ ap: apgerbs, sp: sports, ku: kurpes, ak: aksesuari }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
