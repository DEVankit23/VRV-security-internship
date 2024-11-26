import React, { useState } from "react";
import RolePermissionMatrix from "../components/roles/RolePermissionMatrix";

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: "1", name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: "2", name: "Editor", permissions: ["Read", "Write"] },
    { id: "3", name: "Viewer", permissions: ["Read"] },
  ]);

  const [allPermissions] = useState(["Read", "Write", "Delete"]);

  const handleTogglePermission = (roleId, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role.id === roleId) {
          const hasPermission = role.permissions.includes(permission);
          const updatedPermissions = hasPermission
            ? role.permissions.filter((perm) => perm !== permission)
            : [...role.permissions, permission];
          return { ...role, permissions: updatedPermissions };
        }
        return role;
      })
    );
  };

  const handleAddRole = () => {
    const newRoleName = prompt("Enter the name of the new role:");
    if (newRoleName) {
      const newRole = {
        id: String(Date.now()),
        name: newRoleName,
        permissions: [],
      };
      setRoles([...roles, newRole]);
    }
  };

  const handleDeleteRole = (roleId) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== roleId));
    }
  };

  return (
    <div className="roles-page">
      <h1>Manage Roles</h1>
      <button onClick={handleAddRole}>Add Role</button>
      <table className="roles-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Role Permissions</h2>
      <RolePermissionMatrix
        roles={roles}
        permissions={allPermissions}
        onTogglePermission={handleTogglePermission}
      />
    </div>
  );
};

export default RolesPage;
