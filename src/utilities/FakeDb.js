// use local storage to manage cart data
const addToDb = id => {
    let jobCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart')
    if (storedCart) {
      jobCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = jobCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      jobCart[id] = newQuantity
    } else {
      jobCart[id] = 1
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart))
  }
  
  const getJobCart = () => {
    let jobCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart')
    if (storedCart) {
      jobCart = JSON.parse(storedCart)
    }
    return jobCart
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('job-cart')
    if (storedCart) {
      const jobCart = JSON.parse(storedCart)
      if (id in jobCart) {
        delete jobCart[id]
        localStorage.setItem('job-cart', JSON.stringify(jobCart))
      }
    }
  }
  
  const deleteJobCart = () => {
    localStorage.removeItem('job-cart')
  }
  
  export { addToDb, getJobCart, removeFromDb, deleteJobCart }
  