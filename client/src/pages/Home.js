import React from "react";

// Presentational Component
// displays content in a tabular manner

// iterate through column names to create table header elements
const Home = (props) => {
  const columns = props.columnNames.map((name, id) => {
    return (
      <th key={id} className="two wide">
        {name}
      </th>
    );
  });

  // iterate through content to create table entries
  const content = props.content.map((user, id) => {
    const date = new Date(user.createdTimeStamp);

    return (
      <tr className="text-center" key={user.id}>
        <td key={id} data-label="id">
          {user.id}
        </td>
        <td key={user.firstName} data-label="first-Name">
          {user.firstName}
        </td>
        <td key={user.lastName} data-label="last-name">
          {user.lastName}
        </td>
        <td key={user.createdTimeStamp} data-label="time-stamp">
          {/* handle timestamp format */}
          {`${date.getUTCDay()}/${date.getUTCMonth()}/${date.getUTCFullYear()} @ ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`}
        </td>
        <td key={user.isAdmin} data-label="is-admin">
          {/* use of check svg icon to indicate admin user */}
          {user.isAdmin ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-check-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
            </svg>
          ) : (
            ""
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="text-center welcome-box">
        <h3>User List Table</h3>
      </div>
      <div className=" table-wrapper bg-light rounded mb-5">
        <table className="table table-responsive table-striped ">
          <thead>
            <tr className="text-center">{columns}</tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
