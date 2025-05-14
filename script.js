const peopleList = document.getElementById("peopleList");

peopleInNeed.forEach(person => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow";

  card.innerHTML = `
    <img src="${person.proof}" alt="Proof for ${person.name}" class="h-40 w-full object-cover rounded-md mb-3">
    <h2 class="text-xl font-semibold">${person.name}</h2>
    <p class="text-sm text-gray-600 mb-2">${person.reason}</p>
    <p class="text-sm text-gray-500 mb-3">${person.description}</p>
    <a href="person.html?id=${person.id}" class="inline-block mt-auto text-blue-600 hover:underline font-medium">
      View & Donate →
    </a>
  `;

  peopleList.appendChild(card);
});
