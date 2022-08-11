let submit = document.getElementById('submit')
console.log(submit)
const formName = 'acknowledgeReceipt'
console.log('form: ' + formName)
let newForm = {}
let submitted = 0
let additional = 0

let staffName1 = document.querySelector('input#staffName1')
staffName1.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName1 = e.target.value;
  console.log(newForm.staffName1);
})

let staffName2 = document.querySelector('input#staffName2')
staffName2.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName2 = e.target.value;
  console.log(newForm.staffName2);
})

let staffName3 = document.querySelector('input#staffName3')
staffName3.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName3 = e.target.value;
  console.log(newForm.staffName3);
})

let staffName4 = document.querySelector('input#staffName4')
staffName4.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName4 = e.target.value;
  console.log(newForm.staffName4);
})

let staffName5 = document.querySelector('input#staffName5')
staffName5.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName5 = e.target.value;
  console.log(newForm.staffName5);
})

let staffName6 = document.querySelector('input#staffName6')
staffName6.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName6 = e.target.value;
  console.log(newForm.staffName6);
})

let staffName7 = document.querySelector('input#staffName7')
staffName7.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName7 = e.target.value;
  console.log(newForm.staffName7);
})

let staffName8 = document.querySelector('input#staffName8')
staffName8.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName8 = e.target.value;
  console.log(newForm.staffName8);
})

let supervisorName = document.querySelector('input#supervisorName')
supervisorName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.supervisorName = e.target.value;
  console.log(newForm.supervisorName);
})

let adminName = document.querySelector('input#adminName')
adminName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.adminName = e.target.value;
  console.log(newForm.adminName);
})

let staffDate = document.querySelector('input#staffDate')
staffDate.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffDate = e.target.value;
  console.log(newForm.staffDate);
})

let superDate = document.querySelector('input#superDate')
superDate.addEventListener('change', (e) => {
	console.log('changed')
	newForm.superDate = e.target.value;
  console.log(newForm.superDate);
})

let adminDate = document.querySelector('input#adminDate')
adminDate.addEventListener('change', (e) => {
	console.log('changed')
	newForm.adminDate = e.target.value;
  console.log(newForm.adminDate);
})

document.getElementById('printToPDF').addEventListener("click", async (event) => {
  window.print();
})

async function uploadFile() {
  let formData = new FormData(); 
  formData.append("fileupload", fileupload.files[0]);
    await fetch('http://localhost/upload', {
    method: "POST", 
    body: formData
  }); 
}

async function updateStaff() {
	
  const document = {
    toUpdate: { acknowledgementReceipt: true },
  	form: 'receiptAcknowledgement'
    }
  fetch('https://pffm.azurewebsites.net/employee', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(document)
  })
    .then(() => console.log('resolved'))
    .catch(console.error)
}