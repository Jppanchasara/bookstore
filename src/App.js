// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { GlobalStyle } from "./Style/globalStyle";
import From from "./components/Form";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import LoginPage from "./components/login";
import AddBook from "./components/addbook";

function App() {
  const name = "jayesh";
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "green",
          },
        },
      },
    },
  });
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
          >
            {" "}
            <div style={{ padding: 10 }}>
              <NavLink to="/home">Home</NavLink>
            </div>
            <div style={{ padding: 10 }}>
              <NavLink to="/books">booklist</NavLink>
            </div>
            <div style={{ padding: 10 }}>
              <NavLink to="/addbook">addbook</NavLink>
            </div>
            
            <div style={{ padding: 10 }}>
              {" "}
              <NavLink to="/form">register</NavLink>
            </div>
            <div style={{ padding: 10 }}>
              <NavLink to="/">login</NavLink>
            </div>
            
            <div style={{ padding: 10 }}>
              {" "}
              <NavLink to="/">Preson</NavLink>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "Right",
                alignItems: "Right",
                height: "5vh",
                padding: 10,
              }}
            >
              <Button>Logout</Button>
            </div>
          </div>

          <Routes>
            <Route path="/home" element={<HomePage username={name} />}></Route>
            <Route path="/books" element={<BookList />}></Route>
            <Route path="/form" element={<From />}></Route>
            <Route path="/addbook" element={<AddBook/>}></Route>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </BrowserRouter>

        {/* <img src={logo} alt="logo"></img> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
