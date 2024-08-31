import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"

const AddBranches = React.lazy(() => import("./pages/addBranches"))
const AddContribution = React.lazy(() => import("./pages/addContribution"))
const AddParcel = React.lazy(() => import("./pages/addParcel"))
const AddContype = React.lazy(() => import("./pages/addContype"))
const AddMember = React.lazy(() => import("./pages/addMember"))
const AddUser = React.lazy(() => import("./pages/addUser"))
const AddFund = React.lazy(() => import("./pages/addFund"))
const AddSms = React.lazy(() => import("./pages/addSms"))
const SendSms = React.lazy(() => import("./pages/sendSms"))
const Sms = React.lazy(() => import("./pages/sms"))
const Branch = React.lazy(() => import("./pages/branches"))
const Parcel = React.lazy(() => import("./pages/parcel"))
const Contribution = React.lazy(() => import("./pages/contribution"))
const ActiveMember = React.lazy(() => import("./pages/activeMember"))
const BlockMember = React.lazy(() => import("./pages/blockMember"))
const Contype = React.lazy(() => import("./pages/contype"))
const User = React.lazy(() => import("./pages/user"))
const Fund = React.lazy(() => import("./pages/fund"))
const EditBranch = React.lazy(() => import("./pages/editBranches"))
const EditParcel = React.lazy(() => import("./pages/editParcel"))
const EditContribution = React.lazy(() => import("./pages/editContribution"))
const EditContype = React.lazy(() => import("./pages/editContype"))
const EditMember = React.lazy(() => import("./pages/editMember"))
const EditUser = React.lazy(() => import("./pages/editUser"))
const EditFund = React.lazy(() => import("./pages/editFund"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route
            path="addBranches"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddBranches />
              </React.Suspense>
            }
          />
          <Route
            path="addContribution"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddContribution />
              </React.Suspense>
            }
          />
          <Route
            path="addParcel"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddParcel />
              </React.Suspense>
            }
          />
          <Route
            path="addContype"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddContype />
              </React.Suspense>
            }
          />
          <Route
            path="addBranch"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddBranches />
              </React.Suspense>
            }
          />
          <Route
            path="addMember"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddMember />
              </React.Suspense>
            }
          />
          <Route
            path="addFund"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddFund />
              </React.Suspense>
            }
          />
          <Route
            path="addUser"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddUser />
              </React.Suspense>
            }
          />
          <Route
            path="addSms"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddSms />
              </React.Suspense>
            }
          />
          <Route
            path="branch"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Branch />
              </React.Suspense>
            }
          />
          <Route
            path="sms"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Sms />
              </React.Suspense>
            }
          />
          <Route
            path="parcel"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Parcel />
              </React.Suspense>
            }
          />
          <Route
            path="contribution"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Contribution />
              </React.Suspense>
            }
          />
          <Route
            path="activeMember"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ActiveMember />
              </React.Suspense>
            }
          />
          <Route
            path="blockMember"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <BlockMember />
              </React.Suspense>
            }
          />
          <Route
            path="contype"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Contype />
              </React.Suspense>
            }
          />
          <Route
            path="user"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <User />
              </React.Suspense>
            }
          />
          <Route
            path="fund"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Fund />
              </React.Suspense>
            }
          />
          <Route
            path="editBranch/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditBranch />
              </React.Suspense>
            }
          />
          <Route
            path="editParcel/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditParcel />
              </React.Suspense>
            }
          />
          <Route
            path="sendSms/:contact/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SendSms />
              </React.Suspense>
            }
          />
          <Route
            path="editContribution/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditContribution />
              </React.Suspense>
            }
          />
          <Route
            path="editContype/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditContype />
              </React.Suspense>
            }
          />
          <Route
            path="editMember/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditMember />
              </React.Suspense>
            }
          />
          <Route
            path="editFund/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditFund />
              </React.Suspense>
            }
          />
          <Route
            path="editUser/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditUser />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
