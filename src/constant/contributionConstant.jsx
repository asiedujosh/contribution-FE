export const ADDCONTRIBUTION = {
  title: "Add Contribution",
  editTitle: "Edit Contribution",
  editBtn: "Edit",
  btnText: "Add",
  fieldDetail: [
    {
      name: "contributionId",
      label: "Contribution Id",
      type: "select",
      options: ["Bece", "Wasssce", "Cambridge"],
    },
    {
      name: "memberId",
      label: "Member Id",
      type: "select",
      placeholder: "Member Id",
    },
    {
      name: "amount",
      label: "Amount",
      type: "text",
      placeholder: "Amount",
    },
    {
      name: "reason",
      label: "Reason",
      type: "text",
      placeholder: "Reason",
    },
  ],
}

export const CONTRIBUTIONTABLE = ["Member Id", "Amount", "Reason", "Action"]
