//ChromeでF12押すと出てくるコンソールにぶち込めばおｋ

const d=document,e=d.createEvent("Events"),x=u=>u.charCodeAt(0);
"HACKERS BAR".split("").forEach((v,i)=>{e.initEvent("keydown",!0,!0);
e.which=e.keyCode=x(v);e.shiftKey=!i||v=="B";d.dispatchEvent(e);})