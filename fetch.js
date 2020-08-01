// fetch api dari domain lain
// localhost:5050 mengambil data dari localhost:4000

const urlUserData = "./slb.json";
//set url source yang akan diambil datanya
// const urlMain = 'http://localhost:4000/'
// if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
//   const urlMain = 'http://localhost:4000/';
// }
// else if (location.hostname === "sugiyo308.github.io" )  {
//   const urlMain = 'http://sugiyo308.github.io/';
// } 
// else {
//  const urlMain = '';
// }
// const urlUserData = urlMain + 'userdata'



// fetch user data
fetch(urlUserData)
  // then ambil response sebagai json yang telah di parse
  .then(result => result.json())
  // then tampilkan data pada halaman web.
  .then(showData)

// tampilkan data sebagai tabel
function showData(data) {
  const table = document.getElementById('data')

  //table body
  for (let user of data) {
    const row = table.insertRow()
    for (let key in user) {
      const cell = row.insertCell()
      const text = document.createTextNode(user[key])
      cell.append(text)
    }
  }

  // create table head
  const thead = table.createTHead()
  const row = thead.insertRow()
  for (let key in data[0]) {
    const th = document.createElement('th')
    const text = document.createTextNode(key)
    th.append(text)
    row.append(th)
  }
}
