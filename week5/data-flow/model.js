function Model () {
    const messages = [
        {
            'name': 'Nik',
            'message': "Hi, everyone!"
        }
    ]
    function getMesssages () {
        return messages
    }
    function addMessage (name, message) {
        messages.push(
            {
                'name': name,
                'message': message
            }
        )
    }
    return {
        getMesssages,
        addMessage
    }
    
}