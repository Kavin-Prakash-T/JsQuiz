# 📘 JavaScript Quiz App

A fully interactive **JavaScript Quiz Application** built using  
**HTML + Tailwind CSS + Vanilla JavaScript (ES Modules)**.  
It includes countdown start, answer selection, score calculation, navigation, and a result page.

---

## 🚀 Features

- ⏳ **3–2–1 Countdown** before starting and before resetting the quiz.
- 📝 Displays one question at a time.
- 🟩 Selected option highlights.
- 🛑 Prevents resubmitting a question after submission.
- ➡️ **Next / Previous** navigation (skips completed questions).
- 🧮 Auto score calculation.
- 🏆 Final result page with emoji + score message.
- 🔁 Reattempt button resets everything cleanly.

---

## 🧠 How It Works

### ✔ Start Countdown
When the **Start Quiz** button is clicked:
- The start screen hides  
- The countdown appears  
- Quiz becomes visible after 3 seconds  

### ✔ Display Questions
Questions load from **data.js**, each containing:
- text  
- options  
- correctIndex  

The selected answer becomes highlighted with Tailwind classes.

### ✔ Scoring
When submitted:
- Score increases if correct
- Question becomes locked

### ✔ Result Page
Shows:
- 🎉 for all-correct  
- 👏 for above 50%  
- 🎯 for below 50%  
- Score out of total  
- Reattempt button  

### ✔ Reset with Countdown
On **Reset**:
- Score resets  
- Question index resets  
- Submitted list resets  
- Countdown shows  
- Quiz appears again  

---

## 🛠 Technologies Used

- **HTML5**  
- **Tailwind CSS**  
- **JavaScript (ES6)**  

