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

document.getElementById('submit').addEventListener("click", async (event) => {
    submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}