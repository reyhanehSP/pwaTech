import { Container } from "@mui/material"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(
  name: number,
  calories: number,
  fat: number,

) {
  return { name, calories, fat };
}

const rows = [
  createData(159, 6.0, 4.0),
  createData(237, 9.0, 4.3),
  createData(262, 16.0, 6.0),
];
const CostDetail = () => {
    return (
      <Container maxWidth="lg" className="h-full">
        <div className="main-layout">
          <span>هزینه </span>
          <div className="flex gap-3">
            <h2>آقای کمالی</h2>
            <h2>کد سفارش</h2>
            <p>تعمیر ماشین لباسشویی</p>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>نوع هزینه</TableCell>
                  <TableCell>شرح</TableCell>
                  <TableCell>مبلغ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    );
}
export default CostDetail