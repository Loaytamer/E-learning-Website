let courses_content = [
  {
    name: "HTML",
    img: "../images/html.jpg",
    instructor: "Osama Elzero",
    course_hours: "7hr",
  },
  {
    name: "CSS",
    img: "../images/css.png",
    instructor: "Osama Elzero",
    course_hours: "15hr",
  },
  {
    name: "Javascript",
    img: "../images/javascript.png",
    instructor: "Osama Elzero",
    course_hours: "30hr",
  },
  {
    name: "Python crash course",
    img: "../images/py.jpg",
    instructor: "Loay Tamer",
    course_hours: "5hr",
  },
  {
    name: "C++",
    img: "../images/c_adelnasiem.png",
    instructor: "Adel Nasim",
    course_hours: "20hr",
  },

  {
    name: "C# Fundamentals",
    img: "../images/c.jpg",
    instructor: "Mohamed Elmahdi",
    course_hours: "20hr",
  },
  {
    name: "React",
    img: "../images/react.jpg",
    instructor: "Adel Nasim",
    course_hours: "7hr",
  },
  {
    name: "Machine learning",
    img: "../images/machine.jpg",
    instructor: "Andrew Ng ",
    course_hours: "6hr",
  },
  {
    name: "cyber security",
    img: "../images/cyber.jpg",
    instructor: "Ibrahem hegazy",
    course_hours: "40hr",
  },
  {
    name: "SQL Fundamentals",
    img: "../images/sql.jpg",
    instructor: "Mohamed eldesouky",
    course_hours: "12hr",
  },
  {
    name: "Embeded systems",
    img: "../images/embed.jpg",
    instructor: "Arafa Microsys",
    course_hours: "13hr",
  },
];
let course_index = 0;
let all_cards_container = document.getElementById("all_cards");
function create_card(
  container,
  course_name,
  instructor_name,
  course_hours,
  course_img
) {
  // elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let instructor_p = document.createElement("p");
  let hours_p = document.createElement("p");
  let join_btn = document.createElement("button");

  //content
  img.src = course_img;
  let h2_content = document.createTextNode(course_name);
  let instructor_p_content = document.createTextNode(
    `Instructor: ${instructor_name}`
  );
  let hours_p_content = document.createTextNode(
    `Course hours: ${course_hours}`
  );
  join_btn.textContent = "Join online";

  h2.appendChild(h2_content);
  instructor_p.appendChild(instructor_p_content);
  hours_p.appendChild(hours_p_content);
  h2.style = `
  margin-top:10px;
  color:#000;
  margin-bottom:20px;
  `;
  instructor_p.style = `
  color:#000;
  text-align:left;
  position:relative;
  left:20px;
  margin-top:20px
  `;
  hours_p.style = `
  color:#000;
  text-align:left;
  position:relative;
  left:20px;
  margin-top:2px;
  `;
  card.style = `
  line-height:6px;
  width:350px;
  background:#fff;
  color:#fff;
  padding:0px;
  margin:12px;
  display:inline-block;
  border:1px solid #f16225;
  border-radius:24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0,0,0,0.2);
  `;
  img.style = `
  width:100%;
  border-radius:24px 24px 0px 0px;
  height:250px;
  `;
  join_btn.style = `
    padding:5px;
    border-radius: 10px;
    background: #f16225;
    color:#fff;
    float:right;
    border:none;
    margin:10px;
    margin-top:-10px;
    font-size: 15px;
    padding:10px
  `;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(instructor_p);
  card.appendChild(hours_p);
  card.appendChild(join_btn);
  container.appendChild(card);
  join_btn.addEventListener("click", function () {
    window.location.href = "courseContent.html";
  });
}

for (let index = 0; index < courses_content.length; index++) {
  create_card(
    all_cards_container,
    courses_content[index].name,
    courses_content[index].instructor,
    courses_content[index].course_hours,
    courses_content[index].img
  );
}
console.log(all_cards_container.childNodes[0].childNodes[4]);
for (let index = 0; index <= courses_content.length; index++) {
  all_cards_container.childNodes[index].childNodes[4].addEventListener(
    "click",
    function () {
      course_index = index;
      localStorage.setItem('course_num',course_index)
    }
  );
}