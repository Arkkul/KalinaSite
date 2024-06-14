window.onload = function() {
async function getUsers() {
  try {
    const response = await fetch(
      'Products.json',
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

getUsers().then(data => {
  console.log(data);

  let ol = '<div>';

  data.forEach(user => {
    ol += `
   

      
<ul id = "services" >
          <li>
              <h3>${user.name}</h3>
          <img src = "${user.img}", class = "gamePreviewImg">
        <p>${user.description}</p>
        <a href = "${user.link}">
        <button class="button_1">Подробнее</button>
        </a>
        </li>
        
      </ul>
      
    </li>
    `;
  });

  ol += '</div>';

  const container = document.getElementById('services');
  container.innerHTML = ol;
  
});}
