"use client";
import { Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TopNavigation from "@/components/common/TopNavigation";
import BottomNav from "@/components/common/BottomNavigation";
import style from "@/components/panel/costs/_styles/CostDetail.module.scss"
import BreadCrumbs from "@/components/common/BreadCrumb";

function createData(name: number, calories: number, fat: number) {
  return { name, calories, fat };
}
const rows = [
  createData(159, 6.0, 4.0),
  createData(237, 9.0, 4.3),
  createData(262, 16.0, 6.0),
];
const CostDetail = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "داشبورد", url: "/main" },
            { title: "هزینه ها", url: "/mian/costs" },
            { title: "جزئیات هزینه", url: "/mian/costs/1" },
          ]}
        />
        <div className={style.mainLayout}>
          <div className={style.costDetailCard}>
            <h2>آقای کمالی</h2>
            <h2>کد سفارش</h2>
            <p> کرج حصار- تعمیر ماشین لباسشویی</p>
          </div>

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
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell scope="row">{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
      <BottomNav activeRoute={3} />
    </>
  );
};
export default CostDetail;
