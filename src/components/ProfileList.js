import React, { Component } from "react";
import { Table } from "reactstrap";
import NewProfileModal from "./NewProfileModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ProfileList extends Component {
  render() {
    const profiles = this.props.profiles;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!profiles || profiles.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            profiles.map(profile => (
              <tr key={profile.pk}>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.document}</td>
                <td>{profile.phone}</td>
                <td>{profile.registrationDate}</td>
                <td align="center">
                  <NewProfileModal
                    create={false}
                    profile={profile}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={profile.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ProfileList;