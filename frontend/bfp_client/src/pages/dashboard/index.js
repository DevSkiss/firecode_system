import { useState, useEffect, useContext } from "react";
import { Card, Form, Modal, Row, Col, Button } from "react-bootstrap";
import BarChart from "../../components/dashboard/bar_chart/bar_chart";
import CustomCard from "../../components/dashboard/custom_card/custom_card";
import DoughnutChart from "../../components/dashboard/doughnut_chart/doughnut_chart";
import LineChart from "../../components/dashboard/line_chart/line_chart";

export default function Dashboard() {
  const labelCities = ["Tacloban", "Ormoc"];
  const dataCities = [120024, 51232];

  const labelProvince = [
    "Northern Leyte",
    "Southern Leyte",
    "Biliran",
    "Western Samar",
    "Eastern Samar",
    "Northern Samar",
  ];
  const dataProvinces = [523132, 123521, 233212, 232523, 125213, 321513];
  return (
    <>
      <Row className="header-row-total">
        <Col lg={4} md={12} sm={12}>
          <CustomCard header="Total Collection" amount="1,300,000" />
        </Col>
        <Col lg={4} md={12} sm={12}>
          <CustomCard header="Total Deposit" amount="1,250,000" />
        </Col>
        <Col lg={4} md={12} sm={12}>
          <CustomCard header="Total Undeposit" amount="50,000" />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <BarChart
            hover="rgb(28,9,92)"
            title="Cities"
            label={labelCities}
            data={dataCities}
          />
        </Col>
        <Col lg={12} md={12}>
          <BarChart
            hover="rgb(28,9,92)"
            title="Provinces"
            label={labelProvince}
            data={dataProvinces}
          />
        </Col>
      </Row>
    </>
  );
}
