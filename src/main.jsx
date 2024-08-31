import React from "react"
import ReactDOM from "react-dom/client"
import UserApiDataProvider from "./contextApi/users/userContextApi.jsx"
import SmsApiDataProvider from "./contextApi/sms/smsContextApi.jsx"
import BranchesApiDataProvider from "./contextApi/branches/branchesContextApi.jsx"
import MemberApiDataProvider from "./contextApi/member/memberContextApi.jsx"
import FundApiDataProvider from "./contextApi/fund/fundContextApi.jsx"
import ContributionApiDataProvider from "./contextApi/contribution/contributionContextApi.jsx"
import ContypeApiDataProvider from "./contextApi/contype/contypeContextApi.jsx"
import ParcelApiDataProvider from "./contextApi/parcel/parcelContextApi.jsx"
import SystemApiDataProvider from "./contextApi/systemSetting/systemSettingContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserApiDataProvider>
      <SmsApiDataProvider>
        <FundApiDataProvider>
          <BranchesApiDataProvider>
            <ParcelApiDataProvider>
              <MemberApiDataProvider>
                <ContributionApiDataProvider>
                  <SystemApiDataProvider>
                    <ContypeApiDataProvider>
                      <App />
                    </ContypeApiDataProvider>
                  </SystemApiDataProvider>
                </ContributionApiDataProvider>
              </MemberApiDataProvider>
            </ParcelApiDataProvider>
          </BranchesApiDataProvider>
        </FundApiDataProvider>
      </SmsApiDataProvider>
    </UserApiDataProvider>
  </React.StrictMode>
)
