/**
 * Created by Akash Sawant on 17/09/2017.
 */
$(function () {

    Highcharts.setOptions({
        chart: {},
        series: [],
        credits: {
            enabled: false
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            headerFormat: 'Temperature',
            formatter: function () {
                return 'Temperature<br/><b>' + moment(this.x).format("MMM-Do HH:mm") + '</b> is <b>' + this.y + ' °c </b>';
            }
        },
        plotOptions: {
            area: {
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                },
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
    });

    $('#24Hr').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: '24 Hour Average Temperature'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                enabled: false,
                formatter: function () {
                    return moment(this.value).format("ddd HH:mm");
                }
            },
            categories: chartData.last24Hours.dates
        },
        yAxis: {
            title: {
                enabled: false,
                text: 'Temperature'
            },
            labels: {
                enabled: false,
                formatter: function () {
                    return this.value + '°c';
                }
            }
        },
        series: [{
            name: 'Icy',
            color: '#33ccff',
            marker: {
                symbol: 'circle'
            },
            fillOpacity: 0.3,
            data: chartData.last24Hours.temp,
            zones: [{
                value: 0,
                color: '#33ccff'
            }, {
                value: 10,
                color: '#3399ff'
            }, {
                value: 20,
                color: '#90ed7d'
            }, {
                value: 30,
                color: '#ff8c1a'
            }, {
                value: 40,
                color: '#ff3300'
            }],
        },
            {
                name: 'Cold',
                color: '#3399ff',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Warm',
                color: '#90ed7d',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Hot',
                color: '#ff8c1a',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Very Hot',
                color: '#ff3300',
                marker: {
                    symbol: 'circle'
                },
            }]
    });
    $('#weekHR').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Week Hourly Average Temperature'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                enabled: false,
                step: 7,
                rotation: -75,
                formatter: function () {
                    return moment(this.value).format("MMM-Do HH:mm");
                }
            },
            categories: chartData.weekHr.dates
        },
        yAxis: {
            title: {
                enabled: false,
                text: 'Temperature'
            },
            labels: {
                enabled: false,
                formatter: function () {
                    return this.value + '°c';
                }
            }
        },
        series: [{
            name: 'Icy',
            color: '#33ccff',
            marker: {
                symbol: 'circle'
            },
            fillOpacity: 0.3,
            data: chartData.weekHr.temp,
            zones: [{
                value: 0,
                color: '#33ccff'
            }, {
                value: 10,
                color: '#3399ff'
            }, {
                value: 20,
                color: '#90ed7d'
            }, {
                value: 30,
                color: '#ff8c1a'
            }, {
                value: 40,
                color: '#ff3300'
            }],
        },
            {
                name: 'Cold',
                color: '#3399ff',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Warm',
                color: '#90ed7d',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Hot',
                color: '#ff8c1a',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Very Hot',
                color: '#ff3300',
                marker: {
                    symbol: 'circle'
                },
            }]
    });

    $('#week').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Week Day Average Temperature'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                enabled: false,
                formatter: function () {
                    return moment(this.value).format("dddd Do");
                }
            },
            categories: chartData.week.dates
        },
        yAxis: {
            title: {
                enabled: false,
                text: 'Temperature'
            },
            labels: {
                enabled: false,
                formatter: function () {
                    return this.value + '°c';
                }
            }
        },
        series: [{
            name: 'Icy',
            color: '#33ccff',
            marker: {
                symbol: 'circle'
            },
            fillOpacity: 0.3,
            data: chartData.week.temp,
            zones: [{
                value: 0,
                color: '#33ccff'
            }, {
                value: 10,
                color: '#3399ff'
            }, {
                value: 20,
                color: '#90ed7d'
            }, {
                value: 30,
                color: '#ff8c1a'
            }, {
                value: 40,
                color: '#ff3300'
            }],
        },
            {
                name: 'Cold',
                color: '#3399ff',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Warm',
                color: '#90ed7d',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Hot',
                color: '#ff8c1a',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Very Hot',
                color: '#ff3300',
                marker: {
                    symbol: 'circle'
                },
            }]
    });

    $('#year').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                enabled: false,
                formatter: function () {
                    return moment(this.value).format("MMMM YYYY");
                }
            },
            categories: chartData.year.dates
        },
        yAxis: {
            title: {
                enabled: false,
                text: 'Temperature'
            },
            labels: {
                enabled: false,
                formatter: function () {
                    return this.value + '°c';
                }
            }
        },
        series: [{
            name: 'Icy',
            color: '#33ccff',
            marker: {
                symbol: 'circle'
            },
            fillOpacity: 0.3,
            data: chartData.year.temp,
            zones: [{
                value: 0,
                color: '#33ccff'
            }, {
                value: 10,
                color: '#3399ff'
            }, {
                value: 20,
                color: '#90ed7d'
            }, {
                value: 30,
                color: '#ff8c1a'
            }, {
                value: 40,
                color: '#ff3300'
            }],
        },
            {
                name: 'Cold',
                color: '#3399ff',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Warm',
                color: '#90ed7d',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Hot',
                color: '#ff8c1a',
                marker: {
                    symbol: 'circle'
                },
            },
            {
                name: 'Very Hot',
                color: '#ff3300',
                marker: {
                    symbol: 'circle'
                },
            }]
    });
});
