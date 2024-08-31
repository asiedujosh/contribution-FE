export const ADDSMS = {
  title: "Send SMS",
  btnText: "SMS",
  fieldDetail: [
    {
      name: "sendType",
      label: "Send Type",
      type: "select",
      options: ["All", "Male", "Female"],
    },
    {
      name: "message",
      label: "Message",
      type: "text",
    },
  ],
}

export const SMSTABLE = ["Type", "Message"]
