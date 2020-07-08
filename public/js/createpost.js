const onCreatePost = async (data) => {

    fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    })
}