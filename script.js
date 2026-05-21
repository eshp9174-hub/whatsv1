* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
}

body {
  background: radial-gradient(circle at top, #2a003f, #0a0012);
  color: #fff;
  overflow-x: hidden;
}

.step {
  display: none;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.step.active {
  display: flex;
}

.container {
  max-width: 600px;
  text-align: center;
}

h1, h2 {
  font-size: 26px;
  line-height: 1.3;
}

span {
  color: #c77dff;
}

p {
  margin-top: 12px;
  opacity: 0.85;
}

.cta {
  margin-top: 20px;
  background: linear-gradient(45deg, #7b2cbf, #c77dff);
  border: none;
  padding: 15px 20px;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}

.cta:hover {
  filter: brightness(1.1);
}

.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: #7b2cbf;
  filter: blur(120px);
  opacity: 0.2;
  top: 10%;
}

.quiz p {
  margin-top: 15px;
  font-weight: 600;
}

label {
  display: block;
  margin: 5px 0;
  font-size: 14px;
  opacity: 0.9;
}

.badge {
  background: #3a0060;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 15px;
}

.pulse-box {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #c77dff;
  border-radius: 10px;
  animation: pulse 1.5s infinite;
}

.price del {
  opacity: 0.6;
}

.price strong {
  font-size: 26px;
  color: #c77dff;
}

ul {
  list-style: none;
  margin-top: 15px;
}

ul li {
  margin: 8px 0;
  opacity: 0.9;
}

.pulse {
  animation: pulseBtn 1.2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.6; }
}

@keyframes pulseBtn {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}
