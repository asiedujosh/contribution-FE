export const ADDMEMBER = {
  title: "Add Member",
  editTitle: "Edit Member",
  editBtn: "Edit",
  btnText: "Add",
  fieldDetail: [
    {
      name: "memberId",
      label: "Member Id",
      type: "text",
      placeholder: "Member Id",
    },
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "middleName",
      label: "Middle Name",
      type: "text",
      placeholder: "Middle Name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
    },
  ],
  fieldDetail2: [
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
    },
    {
      name: "DOB",
      label: "DOB",
      type: "date",
      placeholder: "DOB",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Email",
    },
  ],
  fieldDetail3: [
    {
      name: "occupation",
      label: "Occupation",
      type: "text",
      placeholder: "Occupation",
    },
    {
      name: "contact",
      label: "Contact",
      type: "text",
      placeholder: "Contact",
    },
    {
      name: "contactOne",
      label: "Contact One",
      type: "text",
      placeholder: "Contact One",
    },
  ],
}

export const MEMBERTABLE = [
  "Member Id",
  "First Name",
  "Last Name",
  "Contact",
  "ContactOne",
  "Action",
]
