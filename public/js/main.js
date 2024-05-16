document.addEventListener('DOMContentLoaded', function() {
    // Registering the petTable and addPetForm partials
    

 document.getElementById('add-pet-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const petData = Object.fromEntries(formData.entries());
    petData.altered = formData.get('altered') === 'on';
    petData.owner_id = user.id;
});

const response = fetch('/api/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petData),
});
if (response.ok) {
    alert('Pet added successfully!');

    document.location.reload();
} else {
    alert('Failed to add pet. Try again.');
}});
