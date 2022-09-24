var principle = document.getElementById("mi");
var input1 = document.getElementById("M");
var interest = document.getElementById("it");
var input2 = document.getElementById("I");
var time = document.getElementById("tp");
var input3 = document.getElementById("T");
principle.value=0;
input1.value=0;
interest.value=0;
input2.value=0;
time.value=0;
input3.value=0;

principle.oninput = ()=>{
    input1.value = principle.value;
}
interest.oninput = ()=>{
    input2.value = interest.value;
}

time.oninput = ()=>{
    input3.value = time.value;
}

input1.oninput = ()=>{
      principle.value=input1.value;
}
input2.oninput = ()=>{
    interest.value=input2.value;
}
input3.oninput = ()=>{
    time.value=input3.value;
}


document.getElementById("calculate").addEventListener('click', ()=>{
    const P = input1.value;
    var I = input2.value;
    var T = input3.value;
    I = I/1200;
    T = T*12;
    const M = Math.floor(P *((Math.pow(1+I,T)-1)/I)*(1+I));

    const sp = document.getElementById("some");
    sp.innerText=`Invested : ${P*12} Returns : ${M-P*12}  Total : ${M}` ;

    var xValues = ["INVESTED", "RETURNS"];
    var yValues = [P*12,M];
    var barColors = [
    "#5367ff",
    "#98a4ff"
];

new Chart("myChartB", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});

new Chart("myChartD", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});
})


