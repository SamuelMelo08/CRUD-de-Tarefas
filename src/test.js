fetch('http://localhost:3334/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Minha task',
    description: 'desc'
  })
})