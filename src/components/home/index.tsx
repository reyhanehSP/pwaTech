import useHome from "@/components/home/_hooks/useHome"
import { Button, Container } from "@mui/material";
const Home = () => {
 
  const {handleSubmit} = useHome();
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <p>آیکون</p>
        <p>رایگان عضو شو و کسب درآمد کن</p>
        <Button variant="contained" onClick={() => handleSubmit("register")}>
          ثبت نام
        </Button>
        <p>اگر قبلا ثبت نام کرده اید از اینجا وارد شوید.</p>
        <Button variant="outlined" onClick={() => handleSubmit("login")}>
          ورود
        </Button>
      </div>
    </Container>
  );
};
export default Home;
