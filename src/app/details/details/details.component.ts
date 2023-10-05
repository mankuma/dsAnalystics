import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';

import Chart from 'chart.js/auto'
import { UserService } from 'src/app/user.service';
Chart.register(...registerables);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data = [];
  routerName: string = '';
  public kpiCards = [
    {
      name: "Emails Received",
      count: 100,
      // background: '#c6c7f8',
      background: '#ffffff'
    },
    {
      name: "Emails After ETL",
      count: 55,
      //background: '#baedbd'
      background: '#ffffff'
    },
    {
      name: 'Emails Customer Branch',
      count: 76,
      //background: '#b5bffd'
      background: '#ffffff'
    },
    {
      name: 'Emails AM Branch',
      count: 24,
      //background: '#b5bffd'
      background: '#ffffff'
    }
  ];

  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    let route = this.router.url.split('/');
    this.routerName = route[route.length - 1];
    if (route[route.length - 1] === 'amanada_details') {
      setTimeout((x: any) => {
        this.bulidChart();
        this.bulidLinechart();
        this.stackedBarchart();
        this.stackedBarchart1();

      })
    } else {
      setTimeout((x: any) => {
        this.intialLoad();
      })

    }

  }

  public intialLoad() {
    const mixedChart = new Chart('myChart', {
      data: {
        datasets: [{
          type: 'bar',
          label: 'Cores',
          data: [10, 20, 30, 40]
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const mixedCha = new Chart('myChart1', {
      data: {
        datasets: [{
          type: 'line',
          label: 'GB',
          data: [10, 30, 15, 50],
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  bulidChart() {
    const monthWisecart: any = {};
    this.userService.monthwiseCart().subscribe((x: any) => {
      monthWisecart['month'] = x.response.map((y: any) => y.month);
      monthWisecart['totalcart'] = x.response.map((y: any) => y.totalcart);
      monthWisecart['totalavg'] = x.response.map((y: any) => y.totalavg);
      monthWisecart['totalcart'].pop();
      monthWisecart['month'].pop();
      monthWisecart['totalavg'].pop();
      var barChart = new Chart('bar1', {
        type: 'bar',
        data: {
          labels: monthWisecart['month'],
          datasets: [
            {
              label: "Generated Carts",
              backgroundColor: "#3e95cd",
              data: monthWisecart['totalcart']
            }, {
              label: "Generated Carts Average",
              backgroundColor: "#8e5ea2",
              data: monthWisecart['totalavg']
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMin: 1000,
              suggestedMax: 500000
            }
          }
        }
      });
    });


  };





  bulidLinechart() {
    const monthWisecart: any = {};
    this.userService.getMonthWiseOrderConverted().subscribe((x: any) => {
      monthWisecart['month'] = x.response.map((y: any) => y.month);
      monthWisecart['ordercoverted'] = x.response.map((y: any) => y.ordercoverted);
      monthWisecart['orderconvertedavg'] = x.response.map((y: any) => y.orderconvertedavg);
      monthWisecart['ordercoverted'].pop();
      monthWisecart['month'].pop();
      monthWisecart['orderconvertedavg'].pop();
      var barChart = new Chart('myChart3', {
        type: 'bar',
        data: {
          labels: monthWisecart['month'],
          datasets: [
            {
              label: "Converted Carts",
              backgroundColor: "#3e95cd",
              data: monthWisecart['ordercoverted']
            }, {
              label: "Converted Carts Average",
              backgroundColor: "#8e5ea2",
              data: monthWisecart['orderconvertedavg']
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMin: 1000,
              suggestedMax: 500000
            }
          }
        }
      });
    });
  }


  stackedBarchart() {
    const monthWisecart: any = {};
    this.userService.getMonthWiseOrderNotConverted().subscribe((response: any) => {
      monthWisecart['month'] = response.response.map((y: any) => y.month);
      monthWisecart['ordernotcoverted'] = response.response.map((y: any) => y.ordernotcoverted);
      monthWisecart['ordernotconvertedavg'] = response.response.map((y: any) => y.ordernotconvertedavg);
      monthWisecart['ordernotcoverted'].pop();
      monthWisecart['month'].pop();
      monthWisecart['ordernotconvertedavg'].pop();
      var barChart = new Chart('ctx', {
        type: 'bar',
        data: {
          labels: monthWisecart['month'],
          datasets: [
            {
              label: "Non Converted Carts",
              backgroundColor: "#3e95cd",
              data: monthWisecart['ordernotcoverted']
            }, {
              label: "Non Converted Carts Average",
              backgroundColor: "#8e5ea2",
              data: monthWisecart['ordernotconvertedavg']
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMin: 1000,
              suggestedMax: 500000
            }
          }
        }
      });
    })
  }


  stackedBarchart1() {
    const monthWisecart: any = {};
    this.userService.getMonthWiseOrderCancel().subscribe((response: any) => {
      console.log(response)
      monthWisecart['month'] = response.response.map((y: any) => y.month);
      monthWisecart['cancelorders'] = response.response.map((y: any) => y.cancelorders);
      monthWisecart['ordercanceledavg'] = response.response.map((y: any) => y.ordercanceledavg);
      monthWisecart['cancelorders'].pop();
      monthWisecart['month'].pop();
      monthWisecart['ordercanceledavg'].pop();
      var barChart = new Chart('ctx1', {
        type: 'bar',
        data: {
          labels: monthWisecart['month'],
          datasets: [
            {
              label: "Canceled Carts",
              backgroundColor: "#3e95cd",
              data: monthWisecart['cancelorders']
            }, {
              label: "Canceled Carts Average",
              backgroundColor: "#8e5ea2",
              data: monthWisecart['order canceled avg']
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMin: 1000,
              suggestedMax: 500000
            }
          }
        }
      });
    })

  }



}