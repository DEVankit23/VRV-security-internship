import { rest } from "msw";

let users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
  },
];

let roles = [
  { id: "1", name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: "2", name: "Editor", permissions: ["Read", "Write"] },
  { id: "3", name: "Viewer", permissions: ["Read"] },
];

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.json(users));
  }),

  rest.post("/api/users", (req, res, ctx) => {
    const newUser = { id: String(Date.now()), ...req.body };
    users.push(newUser);
    return res(ctx.json(newUser));
  }),

  rest.put("/api/users/:id", (req, res, ctx) => {
    const { id } = req.params;
    const updatedUser = { ...req.body, id };
    users = users.map((user) => (user.id === id ? updatedUser : user));
    return res(ctx.json(updatedUser));
  }),

  rest.delete("/api/users/:id", (req, res, ctx) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    return res(ctx.status(204));
  }),
];
