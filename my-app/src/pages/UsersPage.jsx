import React, { useState } from "react";
import UserTable from "../components/users/UserTable";
import UserModal from "../components/modals/UserModal";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
  };

  const handleSave = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: String(Date.now()) }]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <button className="add-user" onClick={() => setModalOpen(true)}>Add User</button>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        user={selectedUser}
      />
    </div>
  );
};

export default UsersPage;
