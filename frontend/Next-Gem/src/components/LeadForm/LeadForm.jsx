import React, { useState } from "react";

const LeadForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: "", email: "", status: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: "", status: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="lead-form">
            <input name="name" placeholder="Lead Name" onChange={handleChange} value={formData.name} />
            <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input name="status" placeholder="Status" onChange={handleChange} value={formData.status} />
            <button type="submit">Save Lead</button>
        </form>
    );
};

export default LeadForm;
