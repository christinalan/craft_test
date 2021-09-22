let logo = document.getElementById("logo");
let cta = document.getElementById("cta");

var t1 = new TimelineMax({});

window.addEventListener("load", () => {
  t1.to("#img1", 1, { scaleX: 1, ease: "back.out(1.7)" });
  t1.to("#light", 0.8, { opacity: 1 }, "<+=0.2");
  t1.to("#light", 1, { x: 300, y: 150, opacity: 0 }, "<+=0.3").addLabel(
    "popOfLight"
  );
  t1.to("#img1", 0.8, { scaleY: 0, ease: "circ.out" }, "popOfLight<-=0.4");
  //2nd frame scaling in
  t1.to("#img2", 0.5, { scaleY: 1, opacity: 1 }, "<+=0.5");
  //bubbles animating in (enlarged first)
  t1.to(
    "#bubble1",
    0.5,
    { scaleX: 4, scaleY: 4, opacity: 1, ease: "elastic.out(1.2, 1)" },
    "<+=0.7"
  ).addLabel("bubbles");
  t1.to(
    "#bubble2",
    0.4,
    { scaleX: 4, scaleY: 4, opacity: 1, ease: "elastic.out(1, 0.4)" },
    "<+=0.3"
  );
  t1.to(
    "#bubble3",
    0.3,
    { scaleX: 4, scaleY: 4, opacity: 1, ease: "sine.out" },
    "<+=0.2"
  );
  t1.to(
    "#bubble4",
    0.4,
    { scaleX: 4, scaleY: 4, opacity: 1, ease: "elastic.out(1.75, 1)" },
    "<+=0.3"
  );
  //2nd frame animating out
  t1.to("#img2", 0.5, { scaleY: 0, scaleX: 0, y: 30 }, "bubbles+=0.5").addLabel(
    "bigCup"
  );
  //animated bubbles animating out
  t1.to(".bubbles", 3, { opacity: 0 }, "<");
  //3rd frame copy animating in
  t1.to("#f3_copy1", 1, { x: -18, opacity: 1 }, "<");
  t1.to("#f3_copy2", 1, { x: -19, opacity: 1 }, "<+=0.3");
  //3rd frame logo animating in
  t1.to("#img3", 0.5, { scale: 1, opacity: 1 }, "bigCup-=0.3");
  //3rd frame copy animating out
  t1.to(
    "#f3_copy1",
    1,
    { opacity: 0, x: -300, ease: "slow (0.3, 2, false)", scaleX: 0.3 },
    "<+=1"
  ).addLabel("f3Copy");
  t1.to(
    "#f3_copy2",
    1,
    { opacity: 0, x: -300, ease: "slow (0.3, 2, false)", scaleX: 0.3 },
    "<+=0.3"
  );
  //fourth frame copy animating in
  t1.to("#f4_copy1", 1, { opacity: 1, x: -60 }, "<");
  t1.to("#f4_copy2", 1, { opacity: 1, x: 144 }, "<+=0.5");
  //3rd frame logo to match logo in 4th frame
  t1.to("#img3", 1, { y: 2, opacity: 1 }, "f3Copy-=1");
  //cta animating in
  t1.to("#cta", 0.7, { y: 208, scaleY: 1, opacity: 1 }, "<+=0.3");
});

cta.addEventListener("mouseenter", () => {
  t1.to("#cta", 0.3, { scale: 1.05 });
});

cta.addEventListener("mouseleave", () => {
  t1.to("#cta", 0.3, { scale: 1 });
});

logo.addEventListener("click", () => {
  window.location = "https://craftww.com/";
});
