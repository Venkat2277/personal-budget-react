import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';

function HomePage() {

    const [budgetData, setBudgetData] = useState([]);
    var dataSource = {
        datasets: [
          {
            data: [],
            backgroundColor: [
              '#E633FF',
              '#3361FF',
              '#FF3352',
              '#FF336B',
              '#33FFA2',
              '#FFDD33',
              '#C7FF33'
            ],
          },
        ],
        labels: [],
      };

    const fetchData = async () => {
        
        axios.get('http://localhost:3000/budget')
        .then( (res) => {
            for (var i = 0; i < res.data.myBudget.length; i++) {
                dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                dataSource.labels[i] = res.data.myBudget[i].title;
              }
            setBudgetData(res.data.myBudget);
            console.log(res.data.myBudget);
            createPieChart();
            donutChart(res.data.myBudget);
        } )
        .catch( (err) => {
            console.log( err );
        })
      };

    useEffect(() => {
        console.log("useEffect.!");
        fetchData();
    }, []);
    function createPieChart() {
        const canvas = document.getElementById("myChart");
        if (!canvas) {
            console.error("Canvas element not found!");
            return;
        }
        
        var ctx = canvas.getContext("2d");
    
        new Chart(ctx, {
            type: "pie",
            data: dataSource
        });
    }
    
    const donutChart = (data) => {
        d3.select("#donut-chart").selectAll("*").remove(); // Clear existing chart
    
        const width = 400, height = 400;
        const radius = Math.min(width, height) / 2;
    
        const svg = d3.select("#donut-chart")
                      .append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                      .attr("transform", `translate(${width / 2},${height / 2})`);
    
        const customColors = ['#E633FF','#3361FF','#FF3352','#FF336B','#33FFA2','#FFDD33','#C7FF33'];
        
        const color = d3.scaleOrdinal()
                        .domain(data.map(d => d.title))
                        .range(customColors);
    
        const pie = d3.pie().value(d => d.budget).sort(null);
        const arc = d3.arc().innerRadius(radius * 0.3).outerRadius(radius * 0.8);
    
        const arcs = svg.selectAll("arc")
                        .data(pie(data))
                        .enter()
                        .append("g")
                        .attr("class", "arc");
    
        arcs.append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i));
    };
    
   
    

  return (
    <main class="center" id="main">

    <div class="page-area">

        <article>
            <h1>Stay on track</h1>
            <h1>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </h1>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </article>

        <article>
            
            <h3>Stay on track</h3>
            
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
            </article>

        <article>
            
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h2><u>Results</u></h2>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h1><i>Chart</i></h1>
            <p>
                <canvas id="myChart" width="400" height="400"></canvas>
                <svg width="400" height="400" id="d3Chart"></svg>
            </p>
        </article>

    </div>

</main>
  );
}

export default HomePage;
