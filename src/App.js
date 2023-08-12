// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { GlobalStyle } from "./Style/globalStyle";
import From from "./components/Form";
import { ThemeProvider, createTheme } from "@mui/material";
import LoginPage from "./components/login";

function App() {
  const name = "jayesh";
  const theme=createTheme({
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            backgroundColor:"green"
          }
        }
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div>
      
      {/* <HomePage username={name}/>
      <BookList></BookList> */}
      <BrowserRouter>
        <div
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
            width: 120,
          }}
          //className="navbar"
          // style={
          //   {
          //     ...GlobalStyle.navbar,
          //   }
          // }
        >
          <NavLink to="/">Home</NavLink>
          
          <NavLink to="/books">BookList</NavLink>
          <NavLink to="">About</NavLink>
          <NavLink to="">Serch</NavLink>
          <NavLink to="">Preson</NavLink>
          
          
        </div>

        <Routes>
          <Route path="/home" element={<HomePage username={name} />}></Route>
          <Route path="/books" element={<BookList />}></Route>
          <Route path="/form" element={<From />}></Route>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <img src={logo} alt="logo"></img> */}
    </div>
    </ThemeProvider>
  );
}

export default App;

