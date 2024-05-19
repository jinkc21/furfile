const addPetFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new pet form
    const petName = document.querySelector('#pet-name').value.trim();
    const petType = document.querySelector('.pet-type').value.trim();
    const petBreed = document.querySelector('#pet-breed').value.trim();
    const petBirthdate = document.querySelector('#pet-birthdate').value.trim();
    const petWeight = document.querySelector('#pet-weight').value.trim();
    const petGender = document.querySelector('.pet-gender').value.trim();
    const petAltered = document.querySelector('.pet-altered').value.trim();
    const petMicrochip= document.querySelector('#pet-microchip').value.trim();
    const petVaccinations = document.querySelector('#pet-vaccinations').value.trim();
  
    if (petName && petType && petWeight && petGender) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify({ petName, petType, petBreed, petBirthdate, petWeight, petGender, petAltered, petMicrochip, petVaccinations }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/user-profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.add-pet-form')
    .addEventListener('submit', addPetFormHandler);