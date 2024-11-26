import React, { useState } from "react";

const UserModal = ({ isOpen, onClose, onSave, user }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");
  const [status, setStatus] = useState(user?.status || "Active");

  const handleSubmit = () => {
    onSave({ id: user?.id, name, email, role, status });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form>
          <label>
            Name:
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="None">None</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
        </form>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button className="delete-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
