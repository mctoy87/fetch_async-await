async function fetchData() {
    try {
      const response = await fetch('http://example.com/movies.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      // Можно сделать что-то с ошибкой здесь, например, вывести сообщение об ошибке
      throw new Error('Failed to fetch data');
    }
  }
  
  async function renderPage() {
    try {
      const data = await fetchData();
  
      // Тут делаешь, что тебе надо, добавляешь элементы и т.д
    } catch (error) {
      console.log(error.message);
    }
  }
  
  renderPage();