"use client";
import {
  Container,
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import style from '@/components/panel/orders/main/_styles/Orders.module.scss'
import BreadCrumbs from "@/components/common/BreadCrumb";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Link from "next/link";
import Paper from "@mui/material/Paper";

function createData(type: string, desc: string, price: string) {
  return { type, desc, price };
}
const rows = [
  createData("قطعه", "برد", "5000 ریال"),
  createData("قطعه", "موتور", "8500 ریال"),
  createData("قطعه", "برد", "582400 ریال"),
];
const Order = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs items={[{ title: "سفارشات", url: "/mian/orders" }]} />
        <Tabs defaultValue={0}>
          <TabsList className={style.customTab}>
            <Tab value={0} className="mx-1">
              سفارش‌ها
            </Tab>
            <Tab value={1} className="mx-1">
              انجام شده
            </Tab>
            <Tab value={2} className="mx-1">
              لغو شده
            </Tab>
          </TabsList>

          <TabPanel value={0}>
            <Box className={style.mainLayout}>
              <Card style={{ padding: "0 8px" }}>
                <List>
                  <Link href="/main/orders/detail" className={style.orderList}>
                    <ListSubheader component="h2">
                      تعمیر ماشین لباسشویی
                    </ListSubheader>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon className="orderListIcon">
                          <AccessAlarmIcon />
                        </ListItemIcon>
                        <ListItemText primary="سه شنبه 25 شهریور 12:45" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon className="orderListIcon">
                          <PlaceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="البرز، کرج" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon className="orderListIcon">
                          <PlaceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="مشخصات مشتری : آقای کمالی" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <ButtonGroup
                    aria-label="outlined primary button group"
                    className={style.btnGroup}
                  >
                    <Button>
                      <Link href="/main/orders/operation">عملیات</Link>
                    </Button>
                    <Button>
                      <Link href="/main/orders/cancel"> لغو سفارش</Link>
                    </Button>
                  </ButtonGroup>
                </List>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value={1}>
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
          </TabPanel>
          <TabPanel value={2}>
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
          </TabPanel>
        </Tabs>
      </Container>
      <BottomNav activeRoute={2} />
    </>
  );
};
export default Order;
