import instance from "../utils/axios";

export const fetchNotes = async () => {
  const { data } = await instance.get("/api/notes");
  console.log(data.notes);
  return data.notes;
};

export const createNotes = async (data) => {
  const response = await instance.post("/api/notes", data);
  return response.data;
};

export const deleteNotes = async (id) => {
  const response = await instance.delete(`/api/notes/${id}`);
  return response.data;
};

export const updateNotes = async (id, description) => {
  const response = await instance.patch(`/api/notes/${id}`, { description });
  return response.data;
};
