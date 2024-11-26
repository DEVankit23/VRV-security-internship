import React from "react";

const RolePermissionMatrix = ({ roles, permissions, onTogglePermission }) => {
  return (
    <table className="permission-matrix">
      <thead>
        <tr>
          <th>Role</th>
          {permissions.map((perm) => (
            <th key={perm}>{perm}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td>{role.name}</td>
            {permissions.map((perm) => (
              <td key={perm}>
                <input
                  type="checkbox"
                  onChange={() => onTogglePermission(role.id, perm)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolePermissionMatrix;
