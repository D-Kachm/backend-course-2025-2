const date = "202202"; 

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/res");

nbuUrl.searchParams.set("date", date);
nbuUrl.searchParams.set("json", "");

console.log(nbuUrl.toString());