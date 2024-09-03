"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TopNavigation from "@/components/common/TopNavigation";
import BottomNav from "@/components/common/BottomNavigation";
import style from "@/components/panel/costs/_styles/CostDetail.module.scss";
import BreadCrumbs from "@/components/common/BreadCrumb";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
function createData(type: string, desc: string, price: string) {
  return { type, desc, price };
}
const rows = [createData("قطعه", "برد", "5000 ریال")];
const CostDetail = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="alert-dialog-title">
          {"افزودن جزئیات سفارش"}
        </DialogTitle>
        <DialogContent>
          <FormGroup className={style.AddForm}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">نوع هزینه</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="نوع هزینه"
              >
                <MenuItem value={10}>برد</MenuItem>
                <MenuItem value={20}>برد</MenuItem>
                <MenuItem value={30}>برد</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField label="شرح" id="outlined-size-small" size="medium" />
            </FormControl>
            <FormControl>
              <TextField label="مبلغ" id="outlined-size-small" size="medium" />
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions style={{ margin: "0 auto" }}>
          <Button
            onClick={handleClose}
            className={style.addButton}
            variant="contained"
          >
            ثبت
          </Button>
        </DialogActions>
      </Dialog>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "هزینه ها", url: "/mian/costs" },
            { title: "جزئیات هزینه", url: "/mian/costs/1" },
          ]}
        />
        <Box className={style.mainLayout}>
          <Box className={style.costDetailCard}>
            <Box className="flex_base">
              <Typography component="span">آقای کمالی</Typography>
              <Typography component="span">کد سفارش: 12458787</Typography>
            </Box>

            <Typography component="p">
              کرج حصار- تعمیر ماشین لباسشویی
            </Typography>
          </Box>

          <TableContainer component={Paper} className={style.table}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell component="th">ردیف</TableCell>
                  <TableCell component="th">نوع هزینه</TableCell>
                  <TableCell component="th">شرح</TableCell>
                  <TableCell component="th">مبلغ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.type}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell scope="row">{row.type}</TableCell>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box className={style.footer}>
            <Button
              className={style.addButton}
              onClick={handleClickOpen}
              variant="contained"
            >
              افزودن هزینه
            </Button>
            <Button className={style.customButton} variant="contained">
              تایید نهایی
            </Button>
          </Box>
        </Box>
      </Container>
      <BottomNav activeRoute={3} />
    </>
  );
};
export default CostDetail;
