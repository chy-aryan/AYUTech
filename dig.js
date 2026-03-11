document.getElementById('diagnosticForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Retrieve values from form fields
    const name = document.getElementById('name').value.trim();
    const sugar = parseFloat(document.getElementById('sugar').value);
    const bloodPressure = document.getElementById('bloodPressure').value.trim();
    const cholesterol = parseFloat(document.getElementById('cholesterol').value);
  
    // Start building the recommendations string
    let recommendations = `<h2>Hello, ${name}!</h2>`;
    recommendations += `<p>Based on your input, here are some recommendations:</p>`;
  
    // Evaluate sugar level
    if (sugar > 140) {
      recommendations += `<p><strong>Sugar Level:</strong> Your sugar level is high. Consider monitoring your diet and stress levels. Relaxing yoga poses such as <em>Balasana</em> (Child's Pose) or <em>Sukhasana</em> (Easy Pose) may help promote calmness.</p>`;
    } else {
      recommendations += `<p><strong>Sugar Level:</strong> Your sugar level is within the acceptable range. A balanced diet and regular exercise will suit you well!</p>`;
    }
  
    // Evaluate blood pressure (expects "systolic/diastolic" format)
    const bpParts = bloodPressure.split('/');
    if (bpParts.length === 2) {
      const systolic = parseInt(bpParts[0].trim());
      const diastolic = parseInt(bpParts[1].trim());
      if (systolic > 130 || diastolic > 80) {
        recommendations += `<p><strong>Blood Pressure:</strong> Your blood pressure appears elevated. Including gentle exercises and yoga poses like <em>Setu Bandha Sarvangasana</em> (Bridge Pose) might help manage it, but please consult your doctor.</p>`;
      } else {
        recommendations += `<p><strong>Blood Pressure:</strong> Your blood pressure is within a healthy range. Keep up your current routine!</p>`;
      }
    } else {
      recommendations += `<p><strong>Blood Pressure:</strong> Please enter the BP in the format "systolic/diastolic" (for example, 120/80).</p>`;
    }
  
  
    // Evaluate cholesterol level
    if (cholesterol > 200) {
      recommendations += `<p><strong>Cholesterol:</strong> Your cholesterol level is slightly high. Consider a diet richer in fiber and activities that help reduce stress, such as <em>Tadasana</em> (Mountain Pose). Consulting a healthcare professional is advised.</p>`;
    } else {
      recommendations += `<p><strong>Cholesterol:</strong> Your cholesterol level is healthy. Continue with your balanced lifestyle!</p>`;
    }
    // Final disclaimer
    recommendations += `<p style="font-size: 0.9em; color: #555;">Disclaimer: These recommendations are only for demonstration purposes and do not replace professional medical advice.</p>`;
  
    // Display recommendations
    const outputDiv = document.getElementById('recommendationOutput');
    outputDiv.innerHTML = recommendations;
    outputDiv.style.display = 'block';
  });