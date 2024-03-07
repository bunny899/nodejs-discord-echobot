<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e621</title>
</head>
<body>

<link rel="icon" href="e621.jpeg" type="image/x-icon">
<!-- Video Player -->
<video controls>
    <source src="IMG_7446.MOV" type="video/mp4">
    Your browser does not support the video tag.
</video>

<a href="Fu.zip" download>Download File</a>

<!-- Access Locker Button -->
<button onclick="showCodeInput()">Are you +18?</button>

<!-- Code Input Field (Initially hidden) -->
<div id="codeInput" style="display: none;">
    <label for="code">Enter code:</label>
    <input type="text" id="code">
    <button onclick="checkCode()">Submit</button>
</div>

<!-- Locker (Initially hidden) -->
<div id="locker" style="display: none;">
    <!-- Add content for the locker here -->
    <h2>Welcome to the locker!</h2>
    <p>This is the content of the locker.</p>
    <!-- Display saved IP addresses -->
    <div id="savedIPs"></div>
</div>

<!-- JavaScript functions -->
<script>
    // Function to get and display visitor's IP address
    function getVisitorIP() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                // Retrieve existing IP addresses from local storage
                var savedIPs = JSON.parse(localStorage.getItem("visitorIPs")) || [];
                // Add the new IP address to the list
                savedIPs.push(data.ip);
                // Save the updated list to local storage
                localStorage.setItem("visitorIPs", JSON.stringify(savedIPs));
            })
            .catch(error => console.error('Error retrieving visitor IP address:', error));
    }

    // Call the function to get and display visitor's IP address when the page loads
    getVisitorIP();

    function showCodeInput() {
        document.getElementById("codeInput").style.display = "block";
    }

    function checkCode() {
        var code = document.getElementById("code").value;
        if (code === "9633") {
            // Show the locker and display saved IP addresses
            var savedIPs = JSON.parse(localStorage.getItem("visitorIPs"));
            if (savedIPs && savedIPs.length > 0) {
                var ipList = "<ul>";
                savedIPs.forEach(function(ip) {
                    ipList += "<li>" + ip + "</li>";
                });
                ipList += "</ul>";
                document.getElementById("savedIPs").innerHTML = ipList;
                document.getElementById("locker").style.display = "block";
            } else {
                document.getElementById("savedIPs").innerHTML = "No IP addresses saved yet.";
            }
        } else {
            alert("Sorry, you're not old enough :3.");
        }
    }
</script>
</body>
</html>
