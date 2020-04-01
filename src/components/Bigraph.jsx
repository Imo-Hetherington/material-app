import React, { Component } from "react";
import * as d3 from "d3";
import { Typography } from "@material-ui/core";

class Bigraph extends Component {
  state = {
    nodes: [
      { r: 6, cx: 250, cy: 250, fill: "black", stroke: "black", name: "v1" },
      { r: 6, cx: 125, cy: 125, fill: "black", stroke: "black", name: "v2" },
      {
        r: 20,
        cx: 125,
        cy: 125,
        fill: "white",
        stroke: "black",
        name: "v2",
        "fill-opacity": "0"
      }
    ],
    edges: {
      e0: [
        [125, 125],
        [250, 250]
      ]
    }
  };

  componentDidMount() {
    const svg = d3.select("svg");
    svg.on("mousedown", this.addNode);
    this.renderNodes(svg);
    this.renderEdges(svg);
    this.drawEdgeFunction();
  }

  componentDidUpdate() {
    const svg = d3.select("svg");
    this.renderNodes(svg);
    this.renderEdges(svg);
    // this.drawEdgeFunction();
  }

  renderNodes = svg => {
    this.state.nodes.forEach(node => {
      svg
        .append("circle")
        .attr("r", node.r)
        .attr("cx", node.cx)
        .attr("cy", node.cy)
        .style("fill", node.fill)
        .style("stroke", node.stroke)
        .style("fill-opacity", node["fill-opacity"]);
    });
  };

  renderEdges = svg => {
    d3.selectAll("path").remove();
    const lineGenerator = d3.line();
    Object.values(this.state.edges).forEach(edge => {
      svg
        .append("path")
        .attr("d", lineGenerator(edge))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");
    });
  };

  addNode = () => {
    const point = d3.mouse(d3.event.currentTarget),
      node = { r: 6, cx: point[0], cy: point[1], fill: "black" };
    this.setState(currentState => {
      const updatedNodes = currentState.nodes;
      updatedNodes.push(node);
      return { nodes: updatedNodes };
    });
  };

  drawEdgeFunction = () => {
    const svg = d3.select("svg");
    const node = d3.selectAll("circle");
    let drag = false;
    let start, end, key;

    node.on("mousedown", () => {
      drag = true;
      key = `e${Object.keys(this.state.edges).length}`;
      start = d3.mouse(d3.event.currentTarget);
    });

    svg
      .on("mouseup", () => {
        drag = false;
      })
      .on("mousemove", () => {
        if (drag) {
          end = d3.mouse(d3.event.currentTarget);
          this.setState(currentState => {
            return {
              edges: {
                ...currentState.edges,
                [key]: [start, end]
              }
            };
          });
        }
      });
  };

  render() {
    return (
      <>
        <Typography variant="h5" component="h2">
          Bigraph
        </Typography>
        <svg width={500} height={500}></svg>
      </>
    );
  }
}

export default Bigraph;
