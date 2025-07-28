# ReactJS_Day6
# 📚 Learning Props

This project is a part of my ReactJS learning journey where I explored and implemented **Props** to pass data between components. 

---

## 🚀 What I Learned

### ✅ **Understanding Props in React**
Props (short for "properties") are a way to pass data from one component to another in React. In this project, I learned:
- How to create functional components.
- How to pass objects and arrays as props.
- How to render dynamic content using props.

---

## 🛠️ Components Used

### 🔹 `App.jsx`
- Main file where all the components are imported and rendered.
- Created two employee objects (`Emp1`, `Emp2`) and an array of college names.
- Passed these as props to the respective components.

### 🔹 `User.jsx`
- Displays employee details using `props.Employee`.
- Rendered fields like name, age, id, email, city, and country.

### 🔹 `Student.jsx`
- A simple component that receives and displays a student's name via props.

### 🔹 `College.jsx`
- Receives an array of college names via props and displays selected elements.

---

## 💡 Output Preview
The output on the right-hand side of the screen shows:
- Two user components with detailed info of `Smith Johnson` and `Hanna Gray`.
- College names printed using array indexes.
- Student name displayed dynamically using props.



## 📁 Folder Structure
src/ │ ├── App.jsx ├── College.jsx ├── Student.jsx ├── User.jsx ├── index.css ├── main.jsx


## 🔚 Conclusion

This exercise helped me strengthen my understanding of *Props in ReactJS*, and how data flows from parent to child components. This concept is fundamental to building scalable and reusable components in modern React applications.
