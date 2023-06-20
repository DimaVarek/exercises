const showError = function (error, errorFlag=true) {
     const answer = document.getElementById("answer")
     answer.innerText = error
    if (errorFlag) {
        answer.style.color = "red"
    } else {
        answer.style.color = "blue"
    }
}
const submit = function () {

    const name = document.getElementById("name-input").value
    const salary = document.getElementById("salary-input").value
    const date = document.getElementById("date-input").value
    const phone = document.getElementById("phone-input").value
    if (name.length <= 2) {
        showError("Name must be longer than 2 characters")
        return
    }
    if (salary <= 10000 || salary >= 16000) {
        showError("Salary must be greater than 10,000 but less than 16,000")
        return
    }
    if (!date) {
        showError("Birthday is missing")
        return
    }
    if (phone.length != 10) {
        showError("Phone must be 10 digits long")
        return
    }
    showError("Nice", false)
}


