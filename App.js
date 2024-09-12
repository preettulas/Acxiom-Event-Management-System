import React, { suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { container } from "@mui/material"
import { NotificationContainer } from " react-notification"
import { AppLayout } from "./components/Layout/app-layout"

export const App = () => {
  <Suspense fallback={null}>
    <Container className="page-container">
      <Router>
        <AppLayout />
        <NotificationContainer />
      </Router>
    </Container>
  </Suspense>
}
