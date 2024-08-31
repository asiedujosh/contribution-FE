export const WELCOME = {
  title: "AFUN MANAGEMENT SYSTEM",
}

export const LOGINSYSTEM = {
  title: "FAMILY SYSTEM LOGIN",
  btnText: "Sign In",
  fieldDetail: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "enter@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
  ],
}

export const ADDUSER = {
  title: "Add User",
  editTitle: "Edit User",
  btnText: "Add",
  editBtn: "Edit",
  fieldDetail: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "enter@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
    },
    {
      name: "branchId",
      label: "Branch Id",
      type: "text",
      placeholder: "Branch Id",
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: ["admin", "user"],
    },
  ],
}

export const USERTABLE = ["First Name", "Last Name", "Email", "Type", "Action"]
