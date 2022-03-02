import React, { Component } from "react";
import "../css/studentprofile.css";
export default class StudentProfile extends Component {
  render() {
    return<div id="bg2033">
          <div className="student-profile py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card-01 shadow-sm">
                    <div className="card-header-01 bg-transparent text-center">
                      <img
                        className="profile_img"
                      />
                      <h3>Samita Chatterji</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Student ID:</strong>321000001
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Class:</strong>8
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Activated:</strong>Yes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card-01 shadow-sm">
                    <div className="card-header-01 bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>General Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>

                          <th width="30%">Course ID</th>
                          <td width="2%">:</td>
                          <td>1125</td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                          <th width="30%">Course Duration </th>
                          <td width="2%">:</td>
                          <td>2020-2021</td>
                          </tr>
                            
                        </tbody>
                        <tbody>
                        <tr>

                          <th width="30%">Gender</th>
                          <td width="2%">:</td>
                          <td>Female</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>


                          <th width="30%">Nationality</th>
                          <td width="2%">:</td>
                          <td>Indian</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>

                          <th width="30%">Age</th>
                          <td width="2%">:</td>
                          <td>14</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div></div>
                  <div className="card-01 shadow-sm">
                    <div className="card-header-01 bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>Other Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <p>
                        {" "}
                        She has completed her course Python with Suvidha , she
                        did it efficiently and with very good performance..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }
}
