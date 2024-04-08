<?php
// Start the session
session_start();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Simulate user authentication (replace with your actual authentication logic)
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Check if username and password match
    if ($username === 'admin' && $password === 'password') {
        // Check if CAPTCHA is correct (replace this with your CAPTCHA verification logic)
        if (isset($_POST['captcha']) && $_POST['captcha'] == $_SESSION['captcha']) {
            // Successful login, redirect to dashboard or another page
            header("Location: dashboard.php");
            exit;
        } else {
            // Incorrect CAPTCHA, redirect back to login page with error message
            header("Location: login.php?error=captcha");
            exit;
        }
    } else {
        // Incorrect username or password, redirect back to login page with error message
        header("Location: login.php?error=auth");
        exit;
    }
}
?>
