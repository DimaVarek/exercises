const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

inputVar = document.getElementById("reservation-input")
answer = document.getElementById("answer")

const checkReservation = function () {
    const name = inputVar.value
    if (reservations[name]){
        if (!reservations[name].claimed){
            answer.innerText = `Welcome, ${name}`
        } else {
            answer.innerText = "Hmm, someone already claimed this reservation"
        }
    } else {
        answer.innerText = "You have no reservation"
    }
}