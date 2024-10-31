import {React, useState, useEffect} from 'react';
import ApexCharts from 'react-apexcharts';

const Graph = ({data}) => {
  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9'];

  const [options, setOptions] = useState({result: [{
    data: [0, 2, 0, 0, 5, 0, 0],
  }],
  chart: {
    type: 'bar',
  },
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday'
    ],
    labels: {
      style: {
        colors: colors,
        fontSize: '12px'
      }
    },
  },
  yaxis: {
    min: 0,
    max: 5,
    tickAmount: 5,
  },
  tooltip: {
    enabled: true,
    custom: ({ series, seriesIndex, dataPointIndex, w }) => {
      const category = options.xaxis.categories[dataPointIndex];
      const result = options.result[0].data[dataPointIndex];

      return (
        `<div class="apexcharts-tooltip-custom px-3">
        Result: ${result}<br />
          <span class='font-bold'>${category}</span>
        </div>`
      );
    },
  },
  // Hide the download button
  toolbar: {
      tools: {
        download: false,
      },
    },
  });


//   useEffect(() => {
//     if (data) {
//   setOptions({
//     result: [{
//       data: [data.weekly_registrations?.Wednesday, data.weekly_registrations?.Thursday, data.weekly_registrations?.Friday, data.weekly_registrations?.Saturday, data.weekly_registrations?.Sunday, data.weekly_registrations?.Monday, data.weekly_registrations?.Tuesday],
//     }],
//     chart: {
//       type: 'bar',
//     },
//     colors: colors,
//     plotOptions: {
//       bar: {
//         columnWidth: '45%',
//         distributed: true,
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     legend: {
//       show: false
//     },
//     xaxis: {
//       categories: [
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday',
//         'Monday',
//         'Tuesday'
//       ],
//       labels: {
//         style: {
//           colors: colors,
//           fontSize: '12px'
//         }
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 5,
//       tickAmount: 5,
//     },
//     tooltip: {
//       enabled: true,
//       custom: ({ series, seriesIndex, dataPointIndex, w }) => {
//         const category = options.xaxis.categories[dataPointIndex];
//         const result = options.result[0].data[dataPointIndex];

//         return (
//           `<div class="apexcharts-tooltip-custom px-3">
//           Result: ${result}<br />
//             <span class='font-bold'>${category}</span>
//           </div>`
//         );
//       },
//     },
//     // Hide the download button
//     toolbar: {
//         tools: {
//           download: false,
//         },
//       },
//     })
//   }
// }, [data]);


  return (
    <ApexCharts options={options} series={options.result} type="bar" height={250} />
  ); 
}

export default Graph;
