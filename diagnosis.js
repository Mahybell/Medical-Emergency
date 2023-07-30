const medicalDatabase = {
    "cough": {
      description: "Cough is a common reflex action that occurs when mucus or foreign irritants drain down the back of the throat.",
      solution: "Stay hydrated, rest, and take over-the-counter cough medicines if needed.",
      images: ["cough-image.jpg", "coughingimage.jpg"]
    },
    "headache": {
      description: "Headache is a pain in the head or neck region.",
      solution: "Take pain relievers and rest in a quiet, dark room.",
      images: ["headache-image.jpg", "headavhe.jpg"]
    },
  
    "fever": {
      description: "A fever will usually resolve on its own. However, if body temperature rises too high, it may be a symptom of a severe infection that needs medical treatment. In this case, a doctor may recommend medication to reduce it.",
      solution: "A mild fever is part of the immune system’s response to bacteria, viruses, and other pathogens. It helps the body fight off infection. However, it can be uncomfortable, and a high fever can sometimes lead to complications. For this reason, doctors may sometimes recommend medications called antipyretics to lower a person’s temperature.",
      images: ["fever-image.jpg", "feverimage.jpg"]
    },
  
    "sore throat": {
      description: "A sore throat is pain, scratchiness or irritation of the throat that often worsens when you swallow. The most common cause of a sore throat (pharyngitis) is a viral infection, such as a cold or the flu. A sore throat caused by a virus resolves on its own.",
      solution: "Try hot tea with lemon or some hot soup",
      images: ["sorethroatimage.jpg", "sore-throat-image.jpg"]
    },
  
  
    // Add more illnesses and their data here...
  };
  
  function searchIllness() {
    const input = document.getElementById("illness").value.toLowerCase();
    const resultDiv = document.getElementById("result");
  
    if (medicalDatabase[input]) {
      const result = medicalDatabase[input];
      const resultHTML = `
        <h2>${input}</h2>
        <p>Description: ${result.description}</p>
        <p>Solution: ${result.solution}</p>
        <h3>Images of ${input}:</h3>
        ${result.images.map(image => `<img src="${image}" alt="${input}" width="200">`).join("")}
      `;
      resultDiv.innerHTML = resultHTML;
    } else {
      resultDiv.innerHTML = `<p>Illness not found in the database. Please try another search term.</p>`;
    }
  }
  