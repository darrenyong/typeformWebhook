exports.getSheetData = (answers) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month}/${day}/${year}`;

  const data = {}
  const googleSheetData = [fullDate];
  let department;

  answers.forEach((answer) => {
    switch (answer.type) {
      case "number":
        googleSheetData.push(answer.number);
        break;
      case "boolean":
        if (answer.boolean) {
          googleSheetData.push("Yes");
        } else {
          googleSheetData.push("No");
        }
        break;
      case "text":
        googleSheetData.push(answer.text);
        break;
      case "choice":
        department = answer.choice.label;
        break;

      default:
        googleSheetData.push("");
        break;
    }
  });

  data.googleSheet = googleSheetData;
  data.department = department;

  return data;
}