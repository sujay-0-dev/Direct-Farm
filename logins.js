document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
  
    // Declare AuthService or import it if it's in a separate file
    // For example, if AuthService is in auth.js:
    // import AuthService from './auth.js';
    // Or, if AuthService is defined in the same file or a globally accessible script:
    class AuthService {
      constructor() {
        // Implement your authentication logic here
        // For example, you might store user data in localStorage
      }
  
      login(email, password) {
        // Placeholder for login logic
        // In a real application, you would verify the email and password
        // against a database or authentication service.
        // For this example, we'll just create a dummy user.
        if (email === "consumer@example.com" && password === "password") {
          return { userType: "consumer", email: email }
        } else if (email === "farmer@example.com" && password === "password") {
          return { userType: "farmer", email: email }
        } else {
          return null
        }
      }
  
      getCurrentUser() {
        // Placeholder for getting the current user
        // In a real application, you would retrieve user data from localStorage or a cookie.
        return null // Or return a user object if one is found
      }
    }
  
    const authService = new AuthService()
  
    const currentUser = authService.getCurrentUser()
    if (currentUser) {
      redirectBasedOnUserType(currentUser)
    }
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const email = emailInput.value.trim()
      const password = passwordInput.value.trim()
  
      if (!email || !password) {
        showError("loginError", "Please enter both email and password")
        return
      }
  
      try {
        const user = authService.login(email, password)
  
        if (user) {
          showAlert("Login successful! Redirecting...", "success")
  
          setTimeout(() => {
            redirectBasedOnUserType(user)
          }, 1500)
        } else {
          showError("loginError", "Invalid email or password. Please try again.")
        }
      } catch (error) {
        showError("loginError", "An error occurred. Please try again later.")
      }
    })
  
    function redirectBasedOnUserType(user) {
      if (user.userType === "consumer") {
        window.location.href = "marketplace.html"
      } else if (user.userType === "farmer") {
        window.location.href = "farmer.html"
      } else {
        // Default fallback if userType is undefined
        window.location.href = "index.html"
      }
    }
  
    function showError(elementId, message) {
      let errorElement = document.getElementById(elementId)
      if (!errorElement) {
        errorElement = document.createElement("div")
        errorElement.id = elementId
        errorElement.className = "error-message"
        loginForm.appendChild(errorElement)
      }
  
      errorElement.textContent = message
      errorElement.style.color = "red"
      errorElement.style.marginTop = "10px"
      errorElement.style.textAlign = "center"
    }
  
    function clearError(elementId) {
      const errorElement = document.getElementById(elementId)
      if (errorElement) {
        errorElement.textContent = ""
      }
    }
  
    function showAlert(message, type) {
      const alertBox = document.createElement("div")
      alertBox.className = `alert alert-${type}`
      alertBox.textContent = message
      alertBox.style.position = "fixed"
      alertBox.style.top = "20px"
      alertBox.style.left = "50%"
      alertBox.style.transform = "translateX(-50%)"
      alertBox.style.padding = "15px 20px"
      alertBox.style.borderRadius = "5px"
      alertBox.style.zIndex = "1000"
  
      if (type === "success") {
        alertBox.style.backgroundColor = "#d4edda"
        alertBox.style.color = "#155724"
        alertBox.style.border = "1px solid #c3e6cb"
      } else {
        alertBox.style.backgroundColor = "#f8d7da"
        alertBox.style.color = "#721c24"
        alertBox.style.border = "1px solid #f5c6cb"
      }
  
      document.body.appendChild(alertBox)
  
      setTimeout(() => {
        alertBox.remove()
      }, 3000)
    }
  })
  
  