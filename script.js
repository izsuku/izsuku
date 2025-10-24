/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Patrick Hand', cursive;
  background-color: #ffffff;
  color: #1a1a1a;
  line-height: 1.6;
  scroll-behavior: smooth;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1, h2, h3 {
  color: #A6D1B8;
  margin-bottom: 12px;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 20px;
}

h2 {
  font-size: 1.8rem;
}

section {
  margin-bottom: 60px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #A6D1B8;
}

p {
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.quote {
  background-color: #A6D1B8;
  color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  font-style: italic;
  margin-top: 12px;
}

footer {
  text-align: center;
  font-size: 0.85rem;
  margin-top: 40px;
  color: #888;
}

/* Fade-in scroll animation */
.fade {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.fade.visible {
  opacity: 1;
  transform: translateY(0);
}
