useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories'); // 'Categories' o'rniga 'categories'
      const data = await response.json();
      console.log(data); // Ma'lumotlarni konsolda ko'rsatish
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Ma\'lumotlarni olishda xato yuz berdi:', error);
    }
  };

  fetchCategories();
}, []);
