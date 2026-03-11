 // Listen for form submission
document.getElementById("ayurvedaForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get user's input values
    const age = parseInt(document.getElementById("age").value);
    const rawSymptoms = document.getElementById("symptoms").value;
    const symptoms = rawSymptoms.trim().toLowerCase();
    const rawDiagnosis = document.getElementById("diagnosis").value;
    const diagnosis = rawDiagnosis.trim().toLowerCase();
  
    // Lookup table for symptoms and diagnoses with recommendations
    const recommendationsLookup = {
      // Respiratory Disorders
      "cardiac pain": "For cardiac pain, <strong>Hawthorn</strong> is highly effective in reducing symptoms.",
      "cough": "For cough, consider <strong>Sitopaladi Churna</strong> along with herbal teas like Tulsi tea to help soothe respiratory discomfort.",
      "cold": "For cold, <strong>Ginger and Honey</strong> tea is highly effective in reducing symptoms.",
      "fever": "For fever, <strong>Ginger and Honey</strong> tea is highly effective in reducing symptoms.",
      "asthma": "For asthma, <strong>Vasaka (Adhatoda) Ghan Vati</strong> can help reduce congestion and improve breathing.",
      "breathlessness": "For breathlessness, <strong>Pranayama</strong> (breathing exercises) and <strong>Vasaka</strong> are recommended.",
      "sinusitis": "For sinusitis, <strong>Anu Taila Nasya</strong> (nasal drops) and steam inhalation with <strong>Eucalyptus oil</strong> can help.",
  
      // Digestive Disorders
      "indigestion": "For indigestion, <strong>Triphala Churna</strong> is frequently recommended to aid digestion.",
      "constipation": "For constipation, <strong>Haritaki Churna</strong> or <strong>Isabgol</strong> (Psyllium husk) can help regulate bowel movements.",
      "bloating": "For bloating, <strong>Ajwain (Carom Seeds)</strong> water is highly effective.",
      "stomach pain": "For stomach pain, <strong>Ajwain (Carom Seeds)</strong> water is highly effective.",
      "diarrhea": "For diarrhea, <strong>Kutaja Ghan Vati</strong> is often used to manage symptoms.",
      "acidity": "For acidity, <strong>Amla (Indian Gooseberry)</strong> and <strong>Yashtimadhu (Licorice)</strong> are recommended.",
  
      // Skin Disorders
      "acne": "For acne, a combination of <strong>Neem & Turmeric Churna</strong> can help purify blood and clear skin.",
      "eczema": "For eczema, <strong>Manjistha</strong> and <strong>Neem</strong> are effective in detoxifying the skin.",
      "psoriasis": "For psoriasis, <strong>Khadirarishta</strong> and <strong>Mahamanjisthadi Kwath</strong> are commonly used.",
      "hives": "For hives, <strong>Haridra (Turmeric)</strong> and <strong>Neem</strong> are recommended.",
      "rash": "For rashes, <strong>Aloe Vera gel</strong> and <strong>Chandana (Sandalwood)</strong> paste can soothe the skin.",
  
      // Joint and Muscular Disorders
      "arthritis": "For arthritis, <strong>Shallaki Extract</strong> (Indian Asafoetida) is often used to ease inflammation and pain.",
      "joint pain": "For joint pain, <strong>Yogaraj Guggulu</strong> is highly effective.",
      "back pain": "For back pain, <strong>Maharasnadi Kwath</strong> and <strong>Ksheerabala Taila</strong> are recommended.",
      "muscle pain": "For muscle pain, <strong>Mahanarayan Oil</strong> for massage is beneficial.",
      "osteoporosis": "For osteoporosis, <strong>Laksha Guggulu</strong> and <strong>Ashwagandha</strong> are recommended.",
      "menstrual pain": "For menstrual pain, <strong>Ajwain (Carom Seeds)</strong> water is highly effective.",
  
      // Mental Health Disorders
      "stress": "For stress, <strong>Brahmi</strong> is a time-tested Ayurvedic herb known for its calming effects.",
      "anxiety": "For anxiety, <strong>Jatamansi</strong> and <strong>Ashwagandha</strong> are recommended.",
      "insomnia": "For insomnia, <strong>Tagar (Valerian Root)</strong> and <strong>Shankhpushpi</strong> can promote better sleep.",
      "depression": "For depression, <strong>Brahmi</strong> and <strong>Vacha (Calamus)</strong> are often used.",
      "memory loss": "For memory loss, <strong>Shankhpushpi</strong> and <strong>Brahmi Ghrita</strong> are recommended.",
  
      // Add more conditions here...
    };
  
    // Default recommendation if no match is found
    let recommendation = "For overall well-being, a regimen including <strong>Chyawanprash</strong> is highly valued for its rejuvenating and immune-boosting properties.";
  
    // Check for matching symptoms or diagnoses
    for (const [key, value] of Object.entries(recommendationsLookup)) {
      if (symptoms.includes(key) || diagnosis.includes(key)) {
        recommendation = value;
        break; // Stop searching once a match is found
      }
    }
  
    // Add additional advice based on age
    if (age < 12) {
      recommendation += " Since you are young, please consult a pediatric Ayurvedic specialist for dosage adjustments.";
    } else if (age > 60) {
      recommendation += " Given your age, it is important to use these remedies under professional guidance to ensure safety.";
    }
  
    // Include a note if a diagnosis was provided
    if (diagnosis !== "") {
      recommendation += " As you mentioned a diagnosis of <em>" + diagnosis + "</em>, we strongly advise consulting with an Ayurvedic expert for personalized advice.";
    }
  
    // Display the recommendation in the output div
    document.getElementById("recommendationOutput").innerHTML = recommendation;
  });