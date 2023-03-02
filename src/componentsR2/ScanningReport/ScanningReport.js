import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

export default function ScanningReport({ charts, LineCode }) {
  function findLargestProduction(charts) {
    // Use the reduce method to find the chart with the largest Production value
    const chartWithLargestProduction = charts.reduce((maxChart, currentChart) => {
      return currentChart.Production > maxChart.Production ? currentChart : maxChart;
    }, { Production: -Infinity });

    // Extract the Production value from the chart and store it in a separate variable
    const largestProduction = chartWithLargestProduction.Production;

    return largestProduction;
  }

  const largestProduction = findLargestProduction(charts);
  const maxValue = parseInt(largestProduction)

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const availableHeight = container.offsetHeight;
    const fontSizeIncrement = 1; // Increase font size by 1px
    const minFontSize = 9;
    const maxFontSize = 22;

    let fontSize = Math.floor(availableHeight / charts.length);
    if (fontSize > maxFontSize) {
      fontSize = maxFontSize;
    } else if (fontSize < minFontSize) {
      fontSize = minFontSize;
    }

    container.style.fontSize = `${fontSize}px`;

    while (container.scrollHeight > container.offsetHeight && fontSize > minFontSize) {
      fontSize -= fontSizeIncrement;
      container.style.fontSize = `${fontSize}px`;
    }
  }, [charts]);

  return (
    <Box

      sx={{
        width: "50%",
        border: "1px solid black",
        minWidth: "370px",
        overflow: 'auto'
        // marginTop: "6px",
        // fontSize: `${fontSize}px`,
      }}
    >
      <h5 style={{ margin: "0", textAlign: "center", background: "lightgray", height: '3%' }}>
        Scanning Report
      </h5>
      <Box
        sx={{
          display: "flex",
          padding: "0px 15px",
          width: "100%",
          height: '97%'
        }}
      >
        <Box
          sx={{
            writingMode: "vertical-lr",
            rotate: "180deg",
            width: "2%",
            textAlign: "center",
          }}
        >
          OpSeq Operation Descripton
        </Box>

        <Box sx={{ width: "98%", }} ref={containerRef}>

          {charts.length !== 0 ? (
            <Box

              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                margin: "0px 0",
                alignItems: "center",
                padding: '4px 0',
                height: "100%"
              }}
            >
              {charts.map((chart, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    margin: "2px 0",
                    minWidth: "350px",
                    alignItems: "center",
                  }}
                  className="bar_chart"
                >
                  <Box
                    sx={{
                      width: "50%",
                      textAlign: "end",
                      padding: "0 6px 0 3px",
                    }}
                  >
                    {chart.OpSeq}- {chart.OperationDescription}
                  </Box>
                  <Box
                    sx={{
                      width: `${(((chart.Production / maxValue) * 100) / 2) - 3}%`,
                      background: `${(((chart.Production / maxValue) * 100) / 2) < 10 ? "red"
                        : ((chart.Production / maxValue) * 100) / 2 <
                          20
                          ? "rgb(158,175,17)"
                          : ((chart.Production / maxValue) * 100) / 2 <
                            30
                            ? "rgb(205,178,3)"
                            :
                            ((chart.Production / maxValue) * 100) / 2 <
                              40
                              ? "rgb(115,171,26)"
                              : "rgb(25,166,52)"
                        }`,
                      maxWidth: "47%",
                      minWidth: "8%",
                      textAlign: "end",
                      padding: "3px 6px 3px 0",
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      // height:"30px"
                    }}
                  >
                    {'\u00a0'}
                  </Box>
                  <Box sx={{ width: '3%' }}>
                    {chart.Production}
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <h2 style={{ textAlign: "center" }}>
              {" "}
              No Data For Graph of LineCode: {LineCode}
            </h2>
          )}
        </Box>
      </Box>
    </Box>
  );
}
