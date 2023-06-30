import { useState } from "react";

import {
  Button,
  DropdownControl,
  TextArea,
  TextField,
} from "../index.js";

import "./add-streamer-form.css";

export default function AddStreamerForm({ handleAddStreamer, toggleModal }) {
  const platforms = ["Twitch", "Kick", "YouTube", "TikTok", "Rumble"];

  const [newStreamerForm, setNewStreamerForm] = useState({
    name: "",
    platform: "",
    description: "",
  });

  const handleEditForm = (name, item) => {
    setNewStreamerForm({ ...newStreamerForm, [name]: item });
  };

  const isAnyValueEmpty = Object.values(newStreamerForm).some((value) => {
    return value.trim() === "";
  });

  const submitForm = () => {
    handleAddStreamer(newStreamerForm);
    toggleModal();
  };

  return (
    <form className="add-streamer-form">
      <TextField
        label="Streamer's name"
        id="name"
        onChange={(item) => handleEditForm("name", item)}
        placeholder="Name"
        inputText={newStreamerForm.name}
      />
      <DropdownControl
        label="Platform"
        id="platform"
        name="platform"
        placeholder="Platform"
        data={platforms}
        onChange={(event) => handleEditForm("platform", event.target.value)}
        value={newStreamerForm.platform}
      />
      <TextArea
        label="Description"
        id="description"
        placeholder="Description"
        inputText={newStreamerForm.description}
        onChange={(item) => handleEditForm("description", item)}
      />
      <Button
        className="add-streamer-form__button"
        value="Add Streamer"
        onClick={submitForm}
        disabled={isAnyValueEmpty}
      />
    </form>
  );
}
