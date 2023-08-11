// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { GlobalStyle } from "./Style/globalStyle";
import From from "./components/Form";
import { ThemeProvider, createTheme } from "@mui/material";

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
          // (1)style={{
          //   padding: 10,
          //   display: "flex",
          //   justifyContent: "space-between",
          //   width: 120,
          // }}
          // (2)className="navbar"
          style={
            {
              ...GlobalStyle.navbar,
            }
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">form</NavLink>
          <NavLink to="/books">BookList</NavLink>
          
        </div>

        <Routes>
          <Route path="/" element={<HomePage username={name} />}></Route>
          <Route path="/books" element={<BookList />}></Route>
          <Route path="/form" element={<From />}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <img src={logo} alt="logo"></img> */}
    </div>
    </ThemeProvider>
  );
}

export default App;

