import React from "react";
import styled from "styled-components";

const OrContainer = styled.div`
  text-align: center;
  margin: 0 0 10px;
  clear: both;
  color: #919191;
  font-variant: small-caps;
`;

const OrHr = styled.hr`
  margin-bottom: 0;
  position: relative;
  top: 19px;
  height: 0;
  border: 1px solid #e5e5e5;
`;

const OrDiv = styled.div`
  display: inline-block;
  position: relative;
  padding: 5px;
  background-color: #fff;
  font-family: Roboto, sans-serif;
  text-align: center;
  font-size: 19px;
`;

const DivDivider = styled.div`
  top: 10px;
  width: 100%;
`;

function FormDivider() {
    return (
        <div className="row">
            <DivDivider className="ant-col-md-22">
                <OrContainer className="or-container">
                    <OrHr/>
                    <OrDiv>OR</OrDiv>
                </OrContainer>
            </DivDivider>
        </div>
    );
}

FormDivider.propTypes = {};

export default FormDivider;
