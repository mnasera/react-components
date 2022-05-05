import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import "./Custom.css";

const EmptyState = ({ msg1, msg2, imgSrc, addUrl, clicked }) => {
  return (
    <Card>
      <CardBody className="empty-state-card-body">
        <img src={imgSrc} className="empty-state-pic" />
        <div className="empty-state-msg1">{msg1}</div>
        <div className="empty-state-msg2">{msg2}</div>
        {addUrl ? (
          <Link to={addUrl} className="btn btn-primary empty-state-btn">
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={{ margin: "3px 3px 0 0" }}
            />
            Add New
          </Link>
        ) : null}
        {clicked ? (
          <a href onClick={clicked} className="btn btn-primary empty-state-btn">
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={{ margin: "3px 3px 0 0" }}
            />
            Add New
          </a>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default EmptyState;
