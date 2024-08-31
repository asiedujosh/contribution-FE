export const ADDFUND = {
  title: "Add Fund",
  editTitle: "Edit Fund",
  editBtn: "Edit",
  btnText: "Add",
  fieldDetail: [
    {
      name: "member",
      label: "Select Member",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "reason",
      label: "Reason",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "account",
      label: "Account",
      type: "text",
      placeholder: "Account",
    },
    {
      name: "amount",
      label: "Amount",
      type: "text",
      placeholder: "Amount",
    },
    {
      name: "remark",
      label: "Remark",
      type: "text",
      placeholder: "Remark",
    },
  ],
}

export const FUNDTABLE = [
  "Date",
  "Member",
  "Amount",
  "Reason",
  "Remark",
  "Action",
]
