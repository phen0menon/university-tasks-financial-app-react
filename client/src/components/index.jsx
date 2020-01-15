import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import _ from "lodash";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const FinanceList = props => {
  const dataForCharts = Object.values(props.categories).flat();
  const renderLineChart = (
    <LineChart width={600} height={300} data={dataForCharts}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );

  return (
    <div className="finance-list__wrapper">
      <div className="finance-list">{renderLineChart}</div>
    </div>
  );
};

const mapStateToProps = store => ({
  categories: store.category.categories
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FinanceList);
