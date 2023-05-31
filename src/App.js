import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import General from "./scenes/Accounts/Attendance/General";
import Normal_Rest_Day from "./scenes/Accounts/Attendance/Normal_Rest_Day";
import Daily from "./scenes/Accounts/Attendance/daily";
import Public_Lateness from "./scenes/Accounts/Attendance/Public_Lateness";
import Additional from "./scenes/Accounts/Attendance/Additional";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/General" element={<General />} />
              <Route path="/Normal_Rest_Day" element={<Normal_Rest_Day />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/Public_Lateness" element={<Public_Lateness />} />
              <Route path="/Additional" element={<Additional />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
