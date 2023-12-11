const foodData = [
    {
        image: 'https://b.zmtcdn.com/data/reviews_photos/f6f/054915ad0da692a94bd39a72db912f6f_1606498650.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        foodname: 'Chilis Grill & Bar',
        about: 'Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Sahid Nagar restaurants, Best Sahid Nagar restaurants, Bhubaneshwar City restaurants, Casual Dining in Bhubaneswar, Casual Dining near me, Casual Dining in Sahid Nagar, Bar in Bhubaneswar, Bar near me, Bar in Sahid Nagar, in Bhubaneswar, near me, in Sahid Nagar, Order food online in Sahid Nagar, Order food online in Bhubaneswar',
        price: '123',
        type:"breakfast",
      },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/2900405/3218168b9e8dddebe3f1dad5a6e89b20.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Green Chillyz",
      about: 
        "1, greenchillyz the fastfoodmastercanteen bhubaneswar odisha, greenchillyz the fast foodmastercanteen square bhubaneswar odisha, green chillyz ravi talkies, green chilli master canteen bhubaneswar menu",
      price: "250",
      type:"breakfast",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/18967162/c7f67b71378d54c892dce75ad61bbb42.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Tasty Tasty Green Chilly",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Jatni restaurants, Best Jatni restaurants, Bhubaneshwar City restaurants, Quick Bites in Bhubaneswar, Quick Bites near me, Quick Bites in Jatni, in Bhubaneswar, near me, in Jatni, in Bhubaneswar, near me, in Jatni",
      price: "350",
      type:"breakfast",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/3/18699923/14467bf74e6a33aaee9f049743319207.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Rajdhani Fast Food",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Kharabela Nagar restaurants, Best Kharabela Nagar restaurants, Bhubaneshwar City restaurants, Quick Bites in Bhubaneswar, Quick Bites near me, Quick Bites in Kharabela Nagar, in Bhubaneswar, near me, in Kharabela Nagar, in Bhubaneswar, near me, in Kharabela Nagar, Order food online in Kharabela Nagar, Order food online in Bhubaneswar",
      price: "150",
      type:"lunch",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/2900479/2c31eb12b356b3bc5278a06d466294e9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Priya",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Jayadev Vihar restaurants, Best Jayadev Vihar restaurants, Bhubaneshwar City restaurants, Casual Dining in Bhubaneswar, Casual Dining near me, Casual Dining in Jayadev Vihar, in Bhubaneswar, near me, in Jayadev Vihar, Order food online in Jayadev Vihar, Order food online in Bhubaneswar",
      price: "450",
      type:"lunch",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/18788770/b643543e2ec4675f3fb12fe188eb1b19.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Truptee Restaurant",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Unit 4 restaurants, Best Unit 4 restaurants, Bhubaneshwar City restaurants, Casual Dining in Bhubaneswar, Casual Dining near me, Casual Dining in Unit 4, in Bhubaneswar, near me, in Unit 4, in Bhubaneswar, near me, in Unit 4, Order food online in Unit 4, Order food online in Bhubaneswar",
      price: "200",
      type:"shakes",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/4/19863474/bbbf46f5b30c003669f6764107486675.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "The Bake Shake",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Kharabela Nagar restaurants, Best Kharabela Nagar restaurants, Bhubaneshwar City restaurants, Order food online in Kharabela Nagar, Order food online in Bhubaneswar",
      price: "520",
      type:"shakes",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/5/2900195/425b8df2de13fe4c71d552f495d036ef.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      foodname: "Chhapan Bhog",
      about:
        "Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Jayadev Vihar restaurants, Best Jayadev Vihar restaurants, Bhubaneshwar City restaurants, Sweet Shop in Bhubaneswar, Sweet Shop near me, Sweet Shop in Jayadev Vihar, Quick Bites in Bhubaneswar, Quick Bites near me, Quick Bites in Jayadev Vihar, Order food online in Jayadev Vihar, Order food online in Bhubaneswar",
      price: "1130",
      type:"dinner",
    },
    {
      image: 'https://b.zmtcdn.com/data/reviews_photos/549/e1165b07ec036e70c639027be1433549_1518435017.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      foodname: 'Cream Stone Ice Cream',
      about: 'Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Jayadev Vihar restaurants, Best Jayadev Vihar restaurants, Bhubaneshwar City restaurants, Dessert Parlour in Bhubaneswar, Dessert Parlour near me, Dessert Parlour in Jayadev Vihar, in Bhubaneswar, near me, in Jayadev Vihar, Order food online in Jayadev Vihar, Order food online in Bhubaneswar',
      price: '120',
      type:"dinner",
    },
    {
      image: 'https://b.zmtcdn.com/data/pictures/chains/0/2900050/a2ada83dadf8a33298456a5f6000ee97_o2_featured_v2.jpg',
      foodname: 'Shree Kunj Restaurant',
      about: 'Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Ashok Nagar restaurants, Best Ashok Nagar restaurants, Bhubaneshwar City restaurants, Casual Dining in Bhubaneswar, Casual Dining near me, Casual Dining in Ashok Nagar, in Bhubaneswar, near me, in Ashok Nagar, Order food online in Ashok Nagar, Order food online in Bhubaneswar',
      price: '420',
      type:"dinner",
    },
    {
      image: 'https://b.zmtcdn.com/data/reviews_photos/f6f/054915ad0da692a94bd39a72db912f6f_1606498650.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      foodname: 'Chilis Grill & Bar',
      about: 'Restaurants in Bhubaneshwar, Bhubaneshwar Restaurants, Sahid Nagar restaurants, Best Sahid Nagar restaurants, Bhubaneshwar City restaurants, Casual Dining in Bhubaneswar, Casual Dining near me, Casual Dining in Sahid Nagar, Bar in Bhubaneswar, Bar near me, Bar in Sahid Nagar, in Bhubaneswar, near me, in Sahid Nagar, Order food online in Sahid Nagar, Order food online in Bhubaneswar',
      price: '123',
      type:"breakfast",
    }
  ];
  
const card = document.getElementById("item-2");
const mainMenu = document.querySelector('.food-menu');

function clone(food) {
    console.log(food)
  const cloneDiv = card.cloneNode(true);
  cloneDiv.id ='';
  cloneDiv.querySelector(".f_Name_1").innerText = food.foodname;
  cloneDiv.querySelector(".f_price_1").innerText = `₹${food.price}`;
  cloneDiv.querySelector(".f_Image_1 img").src = food.image;
  cloneDiv.querySelector('.f_about-1').innerText = food.about;

  return cloneDiv;
}

foodData.forEach(food => {
  const cloneData = clone(food);
  mainMenu.appendChild(cloneData);
  
});