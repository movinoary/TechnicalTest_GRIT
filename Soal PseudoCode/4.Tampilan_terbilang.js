const satuan = [
  "",
  " satu",
  " dua",
  " tiga",
  " empat",
  " lima",
  " enam",
  " tujuh",
  " delapan",
  " sembilan",
];
const puluhan = [" seratus", " ratus", " sepuluh", " puluh", " ribu"];

function NumbertoWords(num) {
  let string = "";
  if (num < 2000) {
    string = "Masukan angka minimal 2000";
  } else if (num > 10000) {
    string = "Masukan angka maximal 10000";
  } else {
    let dataNumber = num.toString().split("");

    const dataRibu =
      dataNumber[0] === "1"
        ? `${puluhan[2]} ${puluhan[4]}`
        : `${satuan[dataNumber[0]]} ${puluhan[4]}`;
    const dataRatus =
      dataNumber[1] === "0"
        ? ``
        : dataNumber[1] === "1"
        ? `${puluhan[0]}`
        : `${satuan[dataNumber[1]]} ${puluhan[1]}`;
    const datapuluh =
      dataNumber[2] === "0"
        ? ``
        : dataNumber[2] === "1"
        ? `${puluhan[2]}`
        : `${satuan[dataNumber[2]]} ${puluhan[3]}`;
    const dataSatuan = satuan[dataNumber[3]];

    string = `${dataRibu}${dataRatus}${datapuluh}${dataSatuan}`;
  }
  console.log(string);

  return string;
}

NumbertoWords(8800);
